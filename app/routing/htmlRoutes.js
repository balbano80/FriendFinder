
var path = require("path");
var friends = require("../data/friends.js");

var htmlRoutes = require("express").Router();

htmlRoutes.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});// route to survey page

htmlRoutes.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});// route to homepage

htmlRoutes.get("/api/friends", function(req, res){
    res.json(friends);
});// route to page displaying friends array

htmlRoutes.get("*", function(req, res){
    res.redirect("/");
});// catch all redirecting to home page

module.exports = htmlRoutes;