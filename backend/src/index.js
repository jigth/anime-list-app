const express = require('express');
const app = require('./app');

require('dotenv').config();


async function startServer() {
    await app.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
}

startServer();
