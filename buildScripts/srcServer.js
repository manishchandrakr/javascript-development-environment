var express = require('express'),
  path = require('path'),
  open = require('open'),
  port = 3000,
  app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port,function(err){
  err ? console.log(err) : open('http://localhost:'+port);
});
