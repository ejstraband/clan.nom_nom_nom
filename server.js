// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors())
// Express configuration
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser);

app.use(express.static('client/build'));

// Express Session
app.use(session({
  secret: 'gityernomnomson',  // NEED TO CHANGE TO .env
  saveUninitialized: true,
  resave: true
}));


// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      const namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars for Flash messages
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// routes
const routes = require("./routes");
app.use(routes);
// app.use('/', routes);
// app.use('/api/users', users);

// MongoDB configuration
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/clannomnom');
const db = mongoose.connection;
db.on('error', error => console.log('Database Error: ', error));
db.once('open', () => console.log('~~~ MongoDB connection successful. Praise MonGod! ~~~'));

// Listener
app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`));