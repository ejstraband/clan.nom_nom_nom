// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Express configuration
const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// MongoDB connection
mongoose.connect('mongodb://localhost/clannom');
const db = mongoose.connection;

db.on('error', error => console.log('Database Error: ', error));

// Listener
app.listen(3001, () => console.log("Listening on port 3001!"));