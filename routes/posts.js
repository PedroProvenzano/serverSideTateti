const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



// Para recibir todos los posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json({posts});
    }catch (err){
        res.json({message: err});
    }
});


// Enviar los posts

router.post('/', async (req, res) => {
    // en req.body esta la info enviada
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    // Devuelve una promesa
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch (err) {
        res.json({message: err});
    }
})

// Conseguir un post en especifico
router.get('/:postId', async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err){
        res.json({message: err});
    }
})

// Eliminar un post en especifico
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json({removedPost});
    }catch (err){
        res.json({message: err});
    }

})

// Actualizar un post
router.patch('/:postId', async (req,res) =>{
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: {title: req.body.title} }
            );
        res.json(updatedPost);
    }catch (err){
        res.json({message: err});
    }

})

module.exports = router;