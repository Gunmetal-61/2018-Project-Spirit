console.log('92-1');
const express = require('express');
console.log('92-2');
const router = express.Router(); // Use this to call router.get instead of app.get() to compartmentalize routing activities between index.js and others like api.js.
console.log('92-3');
const universalLoader = require('../universal');
console.log('92-4');
router.get('/', universalLoader);
console.log('92-5');
module.exports = router;
console.log('92-6');