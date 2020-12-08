const deals = require('./deals');

const routes = (app) => {
  app.use(deals);
};

module.exports = routes;
