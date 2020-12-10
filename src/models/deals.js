const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Deals = new Schema({
  date: { type: String, required: true },
  value: { type: Number, required: true },
});

module.exports = mongoose.model('Deals', Deals);
