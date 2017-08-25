var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var scores = [];
var possibleFriends = [];

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/survey", function(req, res){
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.post("/api/friends", function(req, res) {
	possibleFriends.push(req.body);
	res.json(true);
});

app.get("/api/friends", function(req, res) {
	res.json(possibleFriends);
});

// =============LISTENER============//
app.listen(PORT, function() {
	console.log("Listening to PORT " + PORT);
});
