var express = require('express'),
    router  = express.Router();
    
var ConvertModule = require('../lib/convert.js');

router.get('/', function(req, res){
    res.render('partials/form', { title: '', resultConvert: ""});
});

router.post('/', function(req, res){
    var result = ConvertModule.convert(req.body.numberToConvert);
    console.log("Post -> " + req.body.numberToConvert);
    console.log("Get -> " + result);
    res.render('partials/form',  {title: '', resultConvert: result});
});

module.exports = router;