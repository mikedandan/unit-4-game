$(document).ready(function () {

    // Variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    //function to show random number at start of game (between 19-120)
    var randomNumber = Math.floor(Math.random() * 100) + 19;
    //display random number in html    
    $(".random-number").text(randomNumber);

    //set hidden random number for each crystal at start of game (1-12)
    var greenCrystal = Math.floor(Math.random() * 12 + 1);
    // $("#green").on("click", function () {

    //     console.log($(greenCrystal))
    // })

    var redCrystal = Math.floor(Math.random() * 12 + 1);
    // $("#red").on("click", function () {

    //     console.log($(redCrystal))
    // })

    var purpleCrystal = Math.floor(Math.random() * 12 + 1);
    // $("#purple").on("click", function () {

    //     console.log($(purpleCrystal))
    // })

    var blueCrystal = Math.floor(Math.random() * 12 + 1);
    // $("#blue").on("click", function () {

    //     console.log($(blueCrystal))
    // })

    //tracking of wins, losses and total
    $(".total-wins").text(wins);
    $(".total-losses").text(losses);

    //User Score set to 0 reset game
    function reset() {
        var randomNumber = Math.floor(Math.random() * 100) + 19;
        console.log(randomNumber)
        $(".random-number").text(randomNumber);
        greenCrystal = Math.floor(Math.random() * 12 + 1);
        redCrystal = Math.floor(Math.random() * 12 + 1);
        purpleCrystal = Math.floor(Math.random() * 12 + 1);
        blueCrystal = Math.floor(Math.random() * 12 + 1);
        totalScore = 0;
        $(".total-score").text(totalScore);
    }

    // if total score is equal to random number "winner" and add a point to total wins (restart game)
    function winner() {
        alert("Winner Winner Chicken Dinner!");
        wins++;
        $(".total-wins").text(wins);
        reset();
    }

    //if total score exceeds random number "Loser" and add point to total losses ( restart game)
    function loser() {
        alert("Maybe Next time! Try Again!");
        losses++;
        $(".total-losses").text(losses);
        reset();
    }
    //when each crystal is clicked, add that amount to total score
    $("#green").on('click', function () {
        totalScore = totalScore + greenCrystal;
        console.log("New Total Score= " + totalScore);
        $(".total-score").text(totalScore);
        if (totalScore == randomNumber) {
            winner();
        }
        else if (totalScore > randomNumber) {
            loser();
        }
    })

    $("#red").on('click', function () {
        totalScore = totalScore + redCrystal;
        console.log("New Total Score= " + totalScore);
        $(".total-score").text(totalScore);
        if (totalScore == randomNumber) {
            winner();
        }
        else if (totalScore > randomNumber) {
            loser();
        }
    })

    $("#purple").on('click', function () {
        totalScore = totalScore + purpleCrystal;
        console.log("New Total Score= " + totalScore);
        $(".total-score").text(totalScore);
        if (totalScore == randomNumber) {
            winner();
        }
        else if (totalScore > randomNumber) {
            loser();
        }
    })

    $("#blue").on('click', function () {
        totalScore = totalScore + blueCrystal;
        console.log("New Total Score= " + totalScore);
        $(".total-score").text(totalScore);
        if (totalScore == randomNumber) {
            winner();
        }
        else if (totalScore > randomNumber) {
            loser();
        }
    });
    //start Game set button to reset and start game when clicked
    $(".btn").on("click", function () {
        reset();
    });
});