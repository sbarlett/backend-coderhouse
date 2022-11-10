const express = require('express')
require('dotenv').config()
const router = require('./src/router/index')
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('views'))
app.use('/',router)

app.set('views', './views');
app.set('view engine', 'ejs');


module.exports = app








