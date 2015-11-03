var express = require('express'),
    router  = express.Router();

router.get('*', function(req, res){
  res.sendFile('public/404.html' , { root : __dirname});
});

module.exports = router;