var express = require('express');
var app = express();
var exec = require('child_process').exec;

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
  
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gasawaregt@gmail.com',
        pass: 'h2sRocks'
    }
});

let mailOptions = {
    from: '"Gas Aware" <gasawaregt@gmail.com>', // sender address
    to: 'breadboardbasics@gmail.com', // list of receivers
    subject: 'Test Email', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// Connection URL
var url = 'mongodb://tyler:imtyler@ds149049.mlab.com:49049/heroku_dd7zxnc9';
var collection;

// Use connect method to connect to the database
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Router connected successfully to database!");

	collection = db.collection('ppmData');
	Loc_collection = db.collection('LocationData')
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


///////////////////////////Website Page Routes///////////////////////////
//Home page
app.get('/', function(request, response) {
  response.render('pages/index');
});

//Clue Checklist
app.get('/clue', function(request, response) {
    response.render('pages/clue');
});

//Five Crowns Scoresheet
app.get('/five-crowns', function(request, response) {
  response.render('pages/five-crowns');
});

//Sorry Card Deck
app.get('/sorry', function(request, response) {
  response.render('pages/sorry');
});

//Taboo Game
app.get('/taboo', function(request, response) {
  response.render('pages/taboo');
});