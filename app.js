var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts'),
    path = require('path');

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.set('layout', 'layout');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/routes'));
app.use('/', require('./routes/about'));

app.get('*', function(req, res){
  res.sendFile('public/404.html' , { root : __dirname});
});

console.log(process.env.IP + ":" + process.env.PORT);
app.listen(process.env.PORT, process.env.IP);
