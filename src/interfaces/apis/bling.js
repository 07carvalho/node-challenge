const createError = require('http-errors');
const blingServices = require('../../services/apis/bling');


const createPedido = async (xml) => {
  try {
    const pedido = await blingServices.post('/pedido/json/', xml);

    if (pedido.status === 201 || pedido.status === 200) {
      const { data } = pedido;
      return data.retorno;
    }
  } catch (e) {
    console.error(e);
    throw createError(e.status, {...e.errors});
  }
}

module.exports = {
  createPedido,
}
