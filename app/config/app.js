/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let compress = require('compression');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let session = require('express-session');
let flash = require('connect-flash');
let passport = require('passport');

// init Routers
var homeRouter = require("../routes/home");
var usersRouter = require('../routes/users');
var businessContactRouter = require('../routes/businessContact');

var app = express();

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "sessionSecret"
}));


// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// Sets up passport
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use("/", homeRouter);
app.use('/users', usersRouter);
app.use('/businessContact', businessContactRouter);


// catch 404 and forward to 404 page
app.use(function(req, res, next) {
  next(createError(404),
    res.status(404).render("404", { pageTitle: "Page not found" }));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
