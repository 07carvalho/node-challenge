const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('./src/routes/index');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes(app);

module.exports = app;
