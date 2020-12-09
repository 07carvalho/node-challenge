const axios = require('axios');
const createError = require('http-errors');
const dotenv = require('dotenv');

dotenv.config()

const api = axios.create({
  baseURL: process.env.PIPEDRIVE_API_URL,
  timeout: 6000,
  headers: {
    'Accept': 'application/json'
  }
});

const get = async (url, parameters) => {
  try {
    const params = {...parameters, api_token: process.env.PIPEDRIVE_PERSONAL_API_TOKEN};
    return await api.get(url, {params});
  } catch (e) {
    console.error(e);
    throw createError(e.response.status, {
      status: e.response.status,
      errors: {
        message: 'An error occurred in Pipedrive API.'
      }
    });
  }
}

module.exports = {
  get,
}