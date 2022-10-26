const express = require('express');
require('dotenv').config();
const router = require('./src/router/index')
const errorMiddleware = require('./src/middlewares/errorHandler')
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use( '/api', router)

app.use(errorMiddleware)



module.exports = app;