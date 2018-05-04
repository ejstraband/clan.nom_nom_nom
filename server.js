// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");
const logger = require('morgan');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const expressValidator = require('express-validator');
const app = express();
const PORT = process.env.PORT || 3001;

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(cors())

// Express configuration
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('express-session')({ secret: 'gityernomnomsout', resave: false, saveUninitialized: false }));
app.use(expressValidator());
app.use(express.static('client/build'));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

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
