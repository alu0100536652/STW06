var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('pages/index.ejs', {screen: true});
});

module.exports = router;