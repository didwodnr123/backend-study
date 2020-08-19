var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/post', require('./post'));

module.exports = router;
