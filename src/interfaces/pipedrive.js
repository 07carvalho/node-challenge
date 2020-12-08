const createError = require('http-errors');
const pipedriveServices = require('../services/pipedrive');


const getDeals = async (params) => {
  try {
    const deals = await pipedriveServices.get('/deals', params);

    if (deals.status === 200) {
      const { data } = deals;
      return data;
    }
  } catch (e) {
    console.error(e);
    throw createError(400, {
      errors: {
        message: 'An error occurred while get the deals'
      }
    });
  }
}

const getDealProducts = async (id) => {
  try {
    const products = await pipedriveServices.get(`/deals/${id}/products`);
    if (products.status === 200) {
      const { data } = products.data
      return data;
    }
  } catch (e) {
    console.error(e);
    throw createError(400, {
      errors: {
        message: 'An error occurred while get the deal\'s products.'
      }
    });
  }
}

module.exports = {
  getDeals,
  getDealProducts,
}
