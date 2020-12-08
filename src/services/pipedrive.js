const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config()

const api = axios.create({
  baseURL: process.env.PIPEDRIVE_API_URL,
  timeout: 1000,
  headers: {
    'Accept': 'application/json'
  }
});

const get = async (url, parameters) => {
  const params = {...parameters, api_token: process.env.PIPEDRIVE_PERSONAL_API_TOKEN };
  return await api.get(url, { params });
}

module.exports = {
  get,
}