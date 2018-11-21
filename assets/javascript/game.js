
// Variables

var wins = 0;
var losses = 0;

var randomNumber = Math.floor(Math.random() * 100) + 19;
var totalScore = 0;

var greenNum = "";
var redNum = "";
var purpleNum = "";
var blueNum = "";

//start Game


$(document).ready(function () {


    //function to show random number at start of game (between 19-120)
    function newRandomNum() {
        randomNumber = Math.floor(Math.random() * 100) + 19;
    }
    console.log(randomNumber);
    $(".random-number").text(randomNumber);
    //set 

    //set hidden random number for each crystal at start of game (1-12)
    $("#green").on("click", function () {

        console.log($(this))
    })
    //User Score set to 0

    //when each crystal is clicked, add that amount to total score

    // if total score is equal to random number "winner" and add a point to total wins (restart game)

    //if total score exceeds random number "Loser" and add point to total losses ( restart game)
});