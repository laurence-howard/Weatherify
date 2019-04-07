var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(process.env.API);
    request('https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric&APPID='+ process.env.API_KEY, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.json(JSON.parse(body)); // Print the HTML for the Google homepage.
    });
});

router.get('/:place', function(req, res, next) {
    var api_url = 'https://api.openweathermap.org/data/2.5/forecast?q='+ req.params.place +'&units=metric&APPID='+process.env.API_KEY;
    request(api_url, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        res.json(JSON.parse(body)); // Print the HTML for the Google homepage.
    });
});

module.exports = router;
