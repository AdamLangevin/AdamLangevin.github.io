'use strict';

var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var compression   = require('compression');

var app = express();

app.use(compression());
//app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', require('./router/index'));

module.exports = app;
