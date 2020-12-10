const Deals = require('../models/deals');


const bulkCreate = (valuesPerDay) => {
  Deals.insertMany(valuesPerDay).then(() => {
    console.log('Data inserted')
  }).catch((error) => {
    console.log(error)
  });
}

const getAll = () => {
  return Deals.find({}).then((deals) => {
    return deals;
  })
}

module.exports = {
  bulkCreate,
  getAll,
}
