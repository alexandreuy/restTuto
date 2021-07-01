const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRouter = require('./routes/posts');
require('dotenv/config');

app.use(bodyParser.json());

// Import routes
app.use('/posts', postsRouter);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
}); 

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


// How we start listening to the server
app.listen(8080);