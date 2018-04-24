// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 3001;

// Express configuration
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client/build'));

// routes
const routes = require('./routes/index.js');
const users = require('./routes/users');
app.use('/', routes);
app.use('/users', users);

// MongoDB configuration
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/clannomnom');
const db = mongoose.connection;
db.on('error', error => console.log('Database Error: ', error));
db.once('open', () => console.log('~~~ MongoDB connection successful. Praise MonGod! ~~~'));

// Listener
app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));