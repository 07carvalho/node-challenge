const mongoose = require('mongoose');
const MONGO_USERNAME = 'mongo';
const MONGO_PASSWORD = 'mongo';
const MONGO_HOSTNAME = 'db';
const MONGO_PORT = '27017';
const MONGO_DB = 'mongo';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true})
  .then( function() {
    console.log('MongoDB is connected');
  }).catch( function(err) {
    console.log(err);
});

// module.exports = {
//   mongoose,
// };