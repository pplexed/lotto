const apiKey = require('../config.js');
const axios = require('axios');

const getLast5 = (req, res) => {
  const limit = 5;
  const api = apiKey.apiKey;
  const url = 'https://data.ny.gov/resource/5xaw-6ayf.json';

  const options = {
    method: 'get',
    url: url,
    params: {
      $limit: limit,
      $$app_token: api
    }
  }

  axios(options)
    .then( (results) => {
      res.send(results.data);
    })
    .catch( (err) => {
      console.log(err);
    })
};

module.exports.getLast5 = getLast5;