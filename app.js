var express = require('express'),
    app = express();

app.set('views engine', 'ejs'); 
app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/routes'));

app.get('*', function(req, res){
  res.sendFile('public/404.html' , { root : __dirname});
});

console.log(process.env.IP + ":" + process.env.PORT);
app.listen(process.env.PORT, process.env.IP);
