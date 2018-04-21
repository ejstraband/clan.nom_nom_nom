// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Express configuration
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/build'));
// app.use(routes);

// MongoDB configuration
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/clannomnom');

const db = mongoose.connection;
db.on('error', error => console.log('Database Error: ', error));
db.once('open', () => console.log('~~~ MongoDB connection successful ~~~'));

// Listener
app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));