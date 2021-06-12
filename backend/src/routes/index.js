const express = require('express');
const router = express.Router();
const Animes = require('../models/anime');


router.get('/', (req, res) => {
    res.send({"message": "Welcome to the AnimeListApp API"});
});

router.get('/animes', async (req, res) => {
    const animes = await Animes.find();
    res.send(animes);
});

router.get('/anime/:id', async (req, res) => {
    const { id } = req.params;
    const anime = await Animes.findOne({ '_id': id });
    res.send(anime);
});

router.post('/anime/create', async (req, res) => {
    const { title, status, image_url, trailer_url } = req.body;
    
    try {
        const newAnime = await Animes.create({
            title,
            status,
            image_url,
            trailer_url
        });
        res.json(newAnime);
    } catch (error) {
        console.error(error);
        res.json({ "message": "Error creating the anime, check that the title doesn't exist because it has to be unique" });
    }

});

router.delete('/anime/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAnime = await Animes.findOneAndDelete({ '_id': id });
        res.json(deletedAnime);
    } catch(error) {
        console.error(error);
        res.json({ 'message': 'Error deleting the anime, please check that the id is correct' });
    }
});

router.delete('/anime/delete/title/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const deletedAnime = await Animes.findOneAndDelete({ title });
        res.json(deletedAnime);
    } catch(error) {
        console.error(error);
        res.json({ 'message': 'Error deleting the anime, please check that the title is correct' });
    }
});

module.exports = router;
