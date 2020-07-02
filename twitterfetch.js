const express = require("express");
var cors = require('cors');
const app = express();
const port = 4000;

app.use(cors())



var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

// Set up your search parameters
var params = {
  q: '#UroSoMe',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

app.get("/twitterfetch", (req, res) => {
// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed




    res.send(data);


  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));
