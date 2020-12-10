const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');
const routes = require('./src/routes/index');

const app = express();
app.use(bodyParser.json());
app.use(cors());
routes(app);

module.exports = app;
