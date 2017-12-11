// Initializing global variables
var countWin = 0;
var countLoss = 0;
var gemBlue = 0;
var gemOrange = 0;
var gemPurple = 0;
var gemPink = 0;
var totalScore = 0;
var gameOver = false;

// Random number generators (number between 19-120)
var targetMax = 120;
var targetMin = 19;
var randomNumber = Math.floor(Math.random()*(targetMax - targetMin + 1)) + targetMin;

// Assign each crystal a random number between 1-12
gemBlue = Math.floor(Math.random() * 12) + 1;
gemOrange = Math.floor(Math.random() * 12) + 1;
gemPurple = Math.floor(Math.random() * 12) + 1;
gemPink = Math.floor(Math.random() * 12) + 1;	

// Logic to reset game after win/loss
function nextGame() {
	randomNumber = Math.floor(Math.random()*(targetMax - targetMin + 1)) + targetMin;
	$("#randomNumber").html(randomNumber);
	totalScore = 0;
	$("#userScore").html(totalScore);

	gemBlue = Math.floor(Math.random() * 12) + 1;
	gemOrange = Math.floor(Math.random() * 12) + 1;
	gemPurple = Math.floor(Math.random() * 12) + 1;
	gemPink = Math.floor(Math.random() * 12) + 1;
}

// Checking for WIN (user's total score matches random target number)
function checkWin(){
	if(totalScore === randomNumber){
		countWin++;
		$("#userWins").html(countWin);
		alert("That's a WIN buddy!! Final score (" + totalScore + ") matches target (" + randomNumber + ").");
		gameOver = true;
		nextGame();
	}
}

// Checking for LOSS (user's total score has exceeded the random target number)
function checkLoss(){
	if(totalScore > randomNumber){
		countLoss++;
		$("#userLosses").html(countLoss);
		alert("Game over man, game over! Final score: " + totalScore + " ( > " + randomNumber + ")");
		nextGame();
	}
}

$(document).ready(function(){
	
// Display the random target number
$("#randomNumber").append(randomNumber);

// When each crystal is clicked, the number assigned to it will be added to user's current score
$("#gemBlue").on("click", function(){
	totalScore += gemBlue;
	$("#userScore").html(totalScore);
	checkWin();
	checkLoss();
});

$("#gemOrange").on("click", function(){
	totalScore += gemOrange;
	$("#userScore").html(totalScore);
	checkWin();
	checkLoss();
});

$("#gemPurple").on("click", function(){
	totalScore += gemPurple;
	$("#userScore").html(totalScore);
	checkWin();
	checkLoss();
});

$("#gemPink").on("click", function(){
	totalScore += gemPink;
	$("#userScore").html(totalScore);
	checkWin();
	checkLoss();
});
// Current score reflects (actual) final score before triggering alert
});