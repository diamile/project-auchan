const express = require('express');
const app  = express();
const database = require('./database/database')
const cors = require('cors');
const {errorHandler} = require('./middlewares/errorHandler');
const router = require('./routes');
const bodyParser = require('body-parser')

database.connect();

app.use(cors());

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(router);

app.use(errorHandler);

module.exports = app;