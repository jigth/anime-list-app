const mongoose = require('mongoose');
const DATABASE_URI = process.env.DATABASE_URI || 'mongodb://localhost/animes-db';

mongoose.connect(DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Database connected succesfully');
});
