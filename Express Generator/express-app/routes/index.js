var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Tutorial' , message:'Express beginner friendly tuts '}); // first argument is index view 
});

module.exports = router;
