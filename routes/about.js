var express = require('express');
var router = express.Router();

router.get('/about', function(req, res){
  res.render('partials/about.ejs', {title: '- About'});
});

module.exports = router;