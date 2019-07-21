// Babel ES6/JSX Compiler
require('babel-register');

//react routes
var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('../routes');

// Express middleware dependencies
var express = require('express'); //package express
var path = require('path');
var logger = require('morgan'); //HMTL request logger from package morgan
var bodyParser = require('body-parser'); //parse POST request data using package body-parser

// MongoDB dependencies
var mongoose = require('mongoose');

var config = require('./config'); //variable that contains the exported resource/path to the MongoDB database we are using: insight-mvp
var async = require('async');
var request = require('request');
var xml2js = require('xml2js');
var _ = require('underscore');

// MongoDB insight-mvp database schemas
var Event = require('./eventSchema');
var Tag = require('./tagSchema');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(config.database); //connect to the DB using the path in config.js's database variable
mongoose.connection.on('error', function() { //if error, complain in console
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

///////////////////////////////////////////////////////////////////////////////
// Express Middleware
// Create REST API handlers
// 

/**
 * GET /api/event_list
 * returns a list of all events (not their detailed info)
 */
app.get('/api/event_list', function(req, res, next) {
  var 
});


/**
 * GET /api/event
 * returns an event's detailed information
 */
app.get('/api/event', function(req, res, next) {
  var id = req.params.id;
  Event.findById(id, function(err, event) {
    if (err) return next(err);

    if (!event) {
      return res.status(404).send({ message: 'Event not found.' });
    }

    res.send(event);
  });
});


/**
 * POST /api/event
 * update an event entry's information
 */
app.post('/api/event', function(req, res, next) {

});


/**
 * PUT /api/event
 * used for creating a new event entry AND it's dedicated URL
 */
app.put('/api/event', function(req, res, next) {
  console.log("SERVER CALLED");
});


/**
 * DELETE /api/event
 * used for deleting an event entry from the system
 */
app.delete('/api/event', function(req, res, next) {
  Event.remove({ _id: req.body.id }, function(err) {
    if (!err) {
      message.type = 'Event deleted!';
    }
    else {
      message.type = 'Event not found for deletion.';
    }
  });
});


/**
 * 
 */
app.get('/api/event/tag', function(req, res, next) {
  
});


/**
 * 
 */
app.post('/api/event/tag', function(req, res, next) {

});


/**
 * 
 */
app.delete('/api/event/tag', function(req, res, next) {

});


/**
 * 
 */
app.get('/api/tag', function(req, res, next) {
  
});


/**
 * 
 */
app.post('/api/tag', function(req, res, next) {

});


/**
 * 
 */
app.delete('/api/tag', function(req, res, next) {
  Tag.remove({ _id: req.body.id }, function(err) {
    if (!err) {
      message.type = 'Tag deleted!';
    }
    else {
      message.type = 'Tag not found for deletion.';
    }
  });
});


// middleware function executed on every request to server
// unless request is handled by an API endpoint
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});