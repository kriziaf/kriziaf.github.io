var config = require("./config.js")

var express = require('express')
var app = express()

// connect to the database
var mongojs = require('mongojs');
var db = mongojs(config.username+":"+config.password+"@ds021989.mlab.com:21989/dwddatabase", ["submissions"]);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.post('/formpost', function (req, res) {
  var submission = req.body.textfield;
  console.log("They submitted: " + submission);
  res.render('confirmation.ejs',{response:submission})
  // save submission into the database in the argument "saved"
  db.submissions.save({"submission":submission}, function(err, saved) {
      if( err || !saved ) console.log("Not saved");
      else console.log("Saved");
    })
})

app.get('/display', function(req, res) {
  // pull all submissions from database to render on display file
  db.submissions.find({}, function(err, saved) {
      if (err || !saved) {
            console.log("No results");
    	}
      else {
     			  console.log(saved);
   			    res.render('display.ejs',{submissions_on_page:saved});
     	}
    })
})

app.listen(4000, function () {
  console.log('App listening on port 4000!')
})
