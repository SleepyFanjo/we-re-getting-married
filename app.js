require('dotenv').config()


// init express
const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

// init logger
const logger = require('morgan');

// init mongo
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/we-re-getting-married', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.use(express.static("public"));
app.use('/*', express.static("public"));

module.exports = app;
