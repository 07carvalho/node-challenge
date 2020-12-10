const deals = require('./deals');

const routes = (app) => {
  app.use('/v1', deals);
};

module.exports = routes;
