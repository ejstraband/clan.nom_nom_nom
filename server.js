// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");
const logger = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

// Express configuration
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('client/build'));

// routes
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// MongoDB configuration
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/clannomnom"
);

const db = mongoose.connection;
db.on('error', error => console.log('Database Error: ', error));
db.once('open', () => console.log('~~~ MongoDB connection successful. Praise MonGod! ~~~'));

// Listener
app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));
