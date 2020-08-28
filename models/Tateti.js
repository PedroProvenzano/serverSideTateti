const mongoose = require('mongoose');

// Esquema de como recibe la informacion el post
const TatetiSchema = mongoose.Schema({
    jugador1: {
        type: String
    },
    jugador2: {
        type: String
    },
    movimiento: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Tateti', TatetiSchema);