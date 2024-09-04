// const express = require('express')
import express from 'express';
import configViewEngine from './configs/Viewengine';
import initWebRoute from './route/web';
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

// setup view engine
configViewEngine(app);

// init webroute
initWebRoute(app);



app.listen(port, () => {
    console.log(`port ${port}:On`)
})