var config = require("./config.js")

var Twitter = require('twitter-node-client').Twitter;
const express = require('express')
const app = express()


//Callback functions
	var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
    	console.log('Data [%s]', data);
	};

	var Twitter = require('twitter-node-client').Twitter;

	//Get this data from your twitter apps dashboard
	// var config = {
  //   	"consumerKey":"ieqO6HaEoLmzYBdO3m40tMzia",
  //   	"consumerSecret":"vHoL1OWwYS8REgjLseSDNTrbmzPgMeYbZ6UJUAKw22HJlUTfcI",
  //   	"accessToken":"959537297900359681-eNeKKaFn3PuhOW5AennXfBHTM8ukkKc",
  //   	"accessTokenSecret":"suVMCOm7CUNY9658WnJsWEcYUPqecbjaC2OLJqatujFe6",
  //   	"callBackUrl": ""
	// }

	// make a directory in the root folder of your project called data
	// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
	// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file

    var twitter = new Twitter(config);

	//Example calls
	//Cors on express
	app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

	});

  app.get('/twitter', function(req,res) {
    let data = twitter.getUserTimeline({ screen_name: 'matchadata', count: '10'}, error, function(data){
      res.send(data);
    });

  });

  app.listen(3000, () => console.log('Example app listening on port 3000!'))

  app.use('/', express.static('public'))
