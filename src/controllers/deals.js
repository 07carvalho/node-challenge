const pipedriveInterface = require('../interfaces/pipedrive');

const getWonDeals = async (request, response) => {
  try {
    const params = {
      status: 'won',
      start: 0,
    }
    const deals = await pipedriveInterface.getDeals(params);
    const dealsWithProducts = await Promise.all(deals.data.map(async (deal) => {
       const products = await pipedriveInterface.getDealProducts(deal.id);
       return {...deal, products};
    }));

    return response.status(200).json(dealsWithProducts);
  } catch (e) {
    console.error(e);
    return response.status(400).json({
      errors: {
        message: 'Sorry, try again later.'
      }
    });
  }

}

module.exports = {
  getWonDeals,
}