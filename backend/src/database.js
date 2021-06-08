const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/animes-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Database connected succesfully');
});