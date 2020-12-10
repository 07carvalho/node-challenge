const createError = require('http-errors');
const pipedriveServices = require('../../services/apis/pipedrive');


const getDeals = async (params) => {
  try {
    const deals = await pipedriveServices.get('/deals', params);

    if (deals.status === 200) {
      const { data } = deals;
      return data;
    }
  } catch (e) {
    console.error(e);
    throw createError(e.status, {...e.errors});
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
    throw createError(e.status, {...e.errors});
  }
}

module.exports = {
  getDeals,
  getDealProducts,
}
