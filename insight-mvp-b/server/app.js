console.log('90');
// require('ignore-styles'); // Appears to be used to have (babel?) ignore style imports when running in Node?  Unsure if I need this or what exactly it does.
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
console.log('91');
// Looks like this is babel transpilation for the back-end when I use JSX markup?
require('@babel/register')({
  ignore: [/\/(build|node_modules)\//],
  presets: ["@babel/preset-env", "@babel/preset-react"]
});
console.log('92a');
// Routing logic seperated into component requests and API requests.
const index = require('./routes/index'); // Routes to components.
console.log('92b');
const api = require('./routes/api'); // API logic.  No react-router-dom systems here.
console.log('92c');
const universalLoader = require('./universal') // Used in ./routes/index.js as well.

console.log('93');
const app = express();

// Support Gzip compression to improve loading performance on client end.
// See here for light explanation:  https://blog.fossasia.org/using-compression-middleware-in-nodeexpress/
app.use(compression());
console.log('94');
// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log('95');
// Set up HTTP logger to view more detailed activity info in browser console logs.
app.use(morgan('combined'));
console.log('96');
app.use('/', index);
console.log('97');
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
console.log('98');
app.use('/api', api);
console.log('99');
// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader);
console.log('100');
module.exports = app;
console.log('101');