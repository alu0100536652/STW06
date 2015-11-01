var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views engine', 'ejs'); 

app.get('/', function(req, res){
  res.render('pages/index.ejs');
});

app.get('*', function(req, res){
  res.sendFile('public/404.html' , { root : __dirname});
});

app.listen(process.env.PORT, process.env.IP);
