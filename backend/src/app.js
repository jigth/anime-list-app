const express = require('express')
const app = express();
const database = require('./database');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use( require('./routes/index') );

module.exports = app;
