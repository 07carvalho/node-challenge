const pipedriveInterface = require('../interfaces/pipedrive');


const getWonDeals = async (request, response) => {
  const deals = await pipedriveInterface.getDeals();
  return response.status(200).json(deals);
}

module.exports = {
  getWonDeals,
}