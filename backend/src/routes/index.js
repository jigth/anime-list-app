const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({"message": "Welcome to the AnimeListApp API"});
});

router.get('/animes', (req, res) => {
    res.send({"message": "List of animes goes here!!"});
});

router.get('/anime/:id', (req, res) => {
    const { id } = req.params;
    res.send({"message": `Anime with id ${id}`});
});

router.post('/anime', (req, res) => {
    const { att1, att2, att3, att4 } = req.body;
    
    try {
        // Add anime to database
    } catch (error) {
        console.error(error);
    }

});

module.exports = router;
