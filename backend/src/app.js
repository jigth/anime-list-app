const express = require('express')
const app = express();
const database = require('./database');

// Middleware
app.use(express.json());

// Routes
app.use( require('./routes/index') );

module.exports = app;
