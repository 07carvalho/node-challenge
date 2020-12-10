const axios = require('axios');
const createError = require('http-errors');
const dotenv = require('dotenv');
const qs = require('querystring');

dotenv.config()

const api = axios.create({
  baseURL: process.env.BLING_API_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

const post = async (url, xml) => {
  try {
    return await api.post(url, qs.stringify({
      apikey: process.env.BLING_API_TOKEN,
      xml: xml
    }));
  } catch (e) {
    throw createError(e.response.status, {
      status: e.response.status,
      errors: {
        message: 'An error occurred in Bling API.'
      }
    });
  }
}

module.exports = {
  post,
}