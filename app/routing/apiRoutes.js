
var path = require("path");
var friends = require("../data/friends.js")
var apiRoutes = require("express").Router();

// apiRoutes.get("/friends", function(rez, res){
//     res.send(friends);
// });

apiRoutes.get("/friends", function(req, res){
    // console.log("in api/friends get route");
    res.send(friends);
});

apiRoutes.post("/friends", function(req, res){
    // console.log("in api/friends post route block");
    var score = 100;
    var playerMatch = {};

    for (var i = 0; i < friends.length; i++){
        var tempScore = 0;
        for (var j = 0; j < req.body.scores.length; j++){         
            tempScore += Math.abs(parseInt(friends[i].scores[j]) - parseInt(req.body.scores[j]));
        }
        // console.log("Score: " + score + " tempScore: " + tempScore);
        if (tempScore < score){
            score = tempScore;
            playerMatch = friends[i];
        }
    };
    // console.log(playerMatch);
    res.send(playerMatch);
});

module.exports = apiRoutes;