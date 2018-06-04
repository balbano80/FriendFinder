
var path = require("path");
var friends = require("../data/friends.js");

var htmlRoutes = require("express").Router();

//Get route to /survey to survey.html
//default catch all route to home.html

htmlRoutes.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

htmlRoutes.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

htmlRoutes.get("/api/friends", function(req, res){
    res.json(friends);
});

htmlRoutes.get("*", function(req, res){
    res.redirect("/");
});

module.exports = htmlRoutes;