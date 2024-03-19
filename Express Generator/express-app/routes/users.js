var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // created a view = user.jade 
  // and passed meesage and timeoass argument from here to view user.jade rand using it there

  // res.render(View Name,json)

  res.render('user',{message:"hello mr ram",name:'Sahil',timepass:"shores"})

});

module.exports = router;
