var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var express = require("express");
var app = express();

// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

//Creating Router() object
const folderPath = __dirname + '/public';
//mount your static paths
// renders your image and index.html
app.use(express.static(folderPath));

// renders your index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//mount your other paths
// in this case render 404.
app.get("*",function (req, res) {
  res.status(404).send('<h1>File not found</h1>');
});

// Listen to this Port

app.listen(8080,function(){
  console.log("Live at Port 8080");
});