const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
const help = require('./helpers/getLast5.js');


//need to server up the static files

app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/last5', help.getLast5)

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});