const blingInterface = require('../interfaces/apis/bling');
const pipedriveInterface = require('../interfaces/apis/pipedrive');
const xmlInterface = require('../interfaces/xml/builder');
const dealRepository = require('../repositories/deals');

const getWonDealsAndSave = async (request, response) => {
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

    await Promise.all(dealsWithProducts.map(async (item) => {
      const xml = xmlInterface.generatePedidoBlingFromPipedriveDeal(item);
      return await blingInterface.createPedido(xml);
    }));

    const results = buildResult(deals.data);
    dealRepository.bulkCreate(results);
    return response.status(200).json(results);
  } catch (e) {
    console.error(e);
    return response.status(e.status).json(e);
  }
}

const getDate = (date) => {
	return date.split(' ')[0];
}

const buildResult = (data) => {
  let total = [];
  data.forEach((current) => {
    const date = getDate(current.won_time);
    let found = false;
    total.forEach((item) => {
      if (item.date === date) {
        item.value += current.value;
        found = true;
      }
    })
    if (!found) {
      total.push({ date: date, value: current.value })
    }
  });
  return total;
}

module.exports = {
  getWonDealsAndSave,
  getDate,
  buildResult,
}
