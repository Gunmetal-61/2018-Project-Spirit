require('ignore-styles'); // Appears to be used to have (babel?) ignore style imports when running in Node?  Unsure if I need this or what exactly it does.
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

// Looks like this is babel transpilation for the back-end when I use JSX markup?
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app']
});

// Routing logic seperated into component requests and API requests.
const index = require('./routes/index'); // Routes to components.
const api = require('./routes/api'); // API logic.  No react-router-dom systems here.
const universalLoader = require('./universal') // Used in ./routes/index.js as well.


const app = express();

// Support Gzip compression to improve loading performance on client end.
// See here for light explanation:  https://blog.fossasia.org/using-compression-middleware-in-nodeexpress/
app.use(compression());

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up HTTP logger to view more detailed activity info in browser console logs.
app.use(morgan('combined'));

app.use('/', index);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use('/api', api);

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader);

module.exports = app;
