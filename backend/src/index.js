const express = require('express');
const app = require('./app');
const PORT = process.env.PORT || 4450;

async function startServer() {
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
}

startServer();
