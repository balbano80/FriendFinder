var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

var app = express();
var PORT = process.argv.env || 3033;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});