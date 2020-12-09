const blingInterface = require('../interfaces/apis/bling');
const pipedriveInterface = require('../interfaces/apis/pipedrive');
const xmlInterface = require('../interfaces/xml/builder');

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

    const result = await Promise.all(dealsWithProducts.map(async (item) => {
      const xml = xmlInterface.generatePedidoBlingFromPipedriveDeal(item);
      const p = await blingInterface.createPedido(xml);
      return p;
    }));

    return response.status(200).json(result);
  } catch (e) {
    console.error(e);
    return response.status(e.status).json(e);
  }
}

module.exports = {
  getWonDeals,
}