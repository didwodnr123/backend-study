var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/post', require('./api/blog/post'))
router.use('/login', require('./api/users/login'))
router.use('/signup', require('./api/users/signup'))
module.exports = router;
