const express = require('express');

require('dotenv').config();

const router = require('./src/router/index')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use( '/', router)

app.set('views','./views'); 
app.set('view engine', 'ejs'); 

app.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        enviroment: process.env.ENVIROMENT || undefined,
        healt: 'up'
    })
})

module.exports = app