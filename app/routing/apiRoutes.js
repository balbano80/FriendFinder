
var path = require("path");
var friends = require("../data/friends.js")
var apiRoutes = require("express").Router();

apiRoutes.get("/friends", function(req, res){
    // console.log("in api/friends get route");
    res.send(friends);
});// send friends array to /api/friends page

apiRoutes.post("/friends", function(req, res){
    // console.log("in api/friends post route block");
    var score = 100;
    var playerMatch = {};

    for (var i = 0; i < friends.length; i++){
        var tempScore = 0;
        for (var j = 0; j < req.body.scores.length; j++){         
            tempScore += Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body.scores[j]));
        }// looping through users answers and comparing to each objects answers in friends array
         // then keeping a running count of the differences
        if (tempScore < score){
            score = tempScore;
            playerMatch = friends[i];
        }// if the accumulated tempScore is < the stored score(default set to 100), then update score to tempScore
         // save the object in playerMatch
    };
    res.send(playerMatch);
});

module.exports = apiRoutes;