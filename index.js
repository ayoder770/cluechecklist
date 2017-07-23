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

//View the 100 most recent samples from Device 1 in realtime
app.get('/visualization', function(request, response) {
    response.render('pages/visualization');
});

//Displays Database values in table
app.get('/database', function(request, response) {
  response.render('pages/database');
});

//Map that shows all deviecs and allows 
app.get('/map', function(request, response) {
  response.render('pages/map');
});

//Download and installation instructions for new devices
app.get('/download', function(request,response) {
  response.render('pages/download');
});

//Allows user to use form to add a new device
app.get('/newDevice', function(request, response) {
    response.render('pages/newDevice');
});


///////////////////////////Database Access Routes///////////////////////////
//Page that recieves data from sensor modules
//Use GET request in form of /receiver?id=<device ID>&ppm=<ppm data>
app.get('/receiver', function(request, response) {
  //TODO add more advanced algorithm here that takes other devices into account
  if(parseInt(request.query.ppm) > 100){
      response.send('ON');
  }
  else{
      response.send('OFF');
  }

  //Only store data if we actually got valid data in the query variable
  if(request.query.id && request.query.ppm && request.query.armed){
	var seedData =
		{
		  device: request.query.id,
		  ppm: request.query.ppm,
		  time: Date(),
          armed: request.query.armed
		};
	collection.insert(seedData);
  }
});

//Route that will add a new device
app.get('/enterLocations', function(request, response) {
  //Only store data if we actually got valid data in the query variable
  if(request.query.id && request.query.lat && request.query.lng && request.query.dsc){
	var seedData =
		{
		  device: request.query.id,
		  lat: request.query.lat,
		  lng: request.query.lng,
          dsc: request.query.dsc
		};
	Loc_collection.insert(seedData);
	response.send('ID= ' + request.query.id + ' LAT= ' + request.query.lat + ' LNG= ' + request.query.lng);
  }
});

//Sends data of specific device ID to client side
app.get('/sendData', function(request, response) {
    collection.find({'device':request.query.id}).sort({'_id': -1}).limit(100).toArray(function(err, data){
    response.send(data);
  });
});

//Database page route
app.get('/allinfo', function(request, response) {
    collection.find({}).sort({'_id': -1}).limit(1000).toArray(function(err, data){
    response.send(data);
  });
});
//Database searching route
app.get('/dbSearch', function(request,response) {
 
    collection.find({'device':request.query.id}).sort({'_id':-1}).limit(100).toArray(function(err,data){
    response.send(data);
    });
  
  
});

//Returns list of all registered devies and their locations 
app.get('/getAllDevices', function(request, response) {
    Loc_collection.find({}).sort({'_id': -1}).toArray(function(err, data){
    response.send(data);
  });
});

app.get('/testMail', function(request, response) {
// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    });
    response.send('Tried to send mail!')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


//Start and listen to child algorithm process
var child = exec('node algorithm.js');
child.stdout.on('data',
    function(data){
        console.log(data)
    }
);
