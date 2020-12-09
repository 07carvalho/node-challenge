const builder = require('xmlbuilder');

const generatePedidoBlingFromPipedriveDeal = (data) => {
  const pedido = builder.create('pedido')
    .ele('cliente')
      .ele('nome', data.person_name).up()
    .up()
    .ele('parcelas')
      .ele('parcela')
        .ele('vlr', data.value).up()
      .up()
    .up()
    .ele('itens');
  data.products.map((product) => {
    pedido.ele('item')
      .ele('codigo', product.product_id).up()
      .ele('descricao', product.name).up()
      .ele('qtde', product.quantity).up()
      .ele('vlr_unit', product.item_price).up()
    .up();
  })
  // close items and finish
  return pedido.up().end({ pretty: false});
}

module.exports = {
  generatePedidoBlingFromPipedriveDeal,
}
