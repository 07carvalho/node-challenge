const xmlBuilder = require('../../services/xml/builder');

const generatePedidoBlingFromPipedriveDeal = (data) => {
  return xmlBuilder.generatePedidoBlingFromPipedriveDeal(data);
}

module.exports = {
  generatePedidoBlingFromPipedriveDeal,
}

