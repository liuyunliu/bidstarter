var fs=require('fs');
var express = require('express');
var app = express();
var buffer=new Buffer(100);

var f=fs.readFileSync('index.html','utf8');

buffer.write(f);

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
