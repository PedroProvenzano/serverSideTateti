const express = require('express');
const router = express.Router();
const Tateti = require('../models/Tateti');


// Recibir Posts
router.get('/', async (req, res) => {
    try{
        const tateti = await Tateti.find();
        res.json({tateti});
    }catch (err){
        res.json({message: err});
    }
});



// Enviar Partida nueva
router.post('/', async (req, res) => {
    const post = new Tateti({
        jugador1: req.body.jugador1,
        jugador2: req.body.jugador2,
        movimiento: req.body.movimiento
    })

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({mensaje: err});
    }
})
