const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index');

const app = express();
app.use(bodyParser.json());
app.use(cors());
routes(app);
module.exports = app;
