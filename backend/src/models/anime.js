// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const animeSchema = new Schema({
    title: { 
        type: String,
        unique: true 
    },
    status: String,
    image_url: String,
    trailer_url: String,
});

module.exports = model('Anime', animeSchema);
