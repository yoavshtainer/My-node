var fs = require("fs");
var express = require("express");

var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var app = express();
console.log("start");
app.get("/", function(request, response){
	var content = fs.readFileSync("index.html");
	
	// getTweets(function(tweets){
	// 	var ul = '';
	// 	tweets.forEach(function(tweet) {
	// 		ul += "<li><strong>" + tweet.user.screen_name + ": </strong>" + tweet.text + "</li>";
	// 	});
	// 	content = content.toString("utf8").replace("{{INITIAL_TWEETS}}", ul);
		response.setHeader("Content-Type", "text/html");
		response.send(content);
	// });
});

app.get("/1", function(request, response){
	var content = fs.readFileSync("index1.html");
	console.log("change");
	// getTweets(function(tweets){
	// 	var ul = '';
	// 	tweets.forEach(function(tweet) {
	// 		ul += "<li><strong>" + tweet.user.screen_name + ": </strong>" + tweet.text + "</li>";
	// 	});
	// 	content = content.toString("utf8").replace("{{INITIAL_TWEETS}}", ul);
		response.setHeader("Content-Type", "text/html");
		response.send(content);
	// });
});

app.listen(port, host);

