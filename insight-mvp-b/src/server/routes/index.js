const express = require('express');
const router = express.Router() // Use this to call router.get instead of app.get() to compartmentalize routing activities between index.js and others like api.js.

const universalLoader = require('../universal');

router.get('/', universalLoader);

module.exports = router;
