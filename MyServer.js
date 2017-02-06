var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");


var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var names = [];
var app = express();

app.use(bodyParser.urlencoded());

console.log("start");
app.get("/", function(request, response){
	var content = fs.readFileSync("index.html");
	
		response.setHeader("Content-Type", "text/html");
		response.send(content);

});

app.post("/", function(request, response){
  	console.log("POST " + request.body.txtName);
	names.push( " " + request.body.txtName);
  response.send('api/actionName ' +  names + ".");

});

app.listen(port, host);

