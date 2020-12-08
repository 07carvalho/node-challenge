const pipedriveServices = require('../services/pipedrive');


const getDeals = async () => {
  const params = {
    status: 'won',
    start: 0,
  }
  const deals = await pipedriveServices.get('/deals', params);

  if (deals.status === 200) {
    const { data } = deals;
    return data;
  }
  throw 'error';
}

module.exports = {
  getDeals,
}
