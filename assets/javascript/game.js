// Initializing global variables
var countWin = 0;
var countLoss = 0;
var gameOver = false;
var gemBlue = 0;
var gemOrange = 0;
var gemPurple = 0;
var gemPink = 0;
var totalScore = 0;

// Random number generators (number between 19-120), place number in randomNumberBox
var targetMax = 120;
var targetMin = 19;
var randomNumber = Math.floor(Math.random()*(targetMax - targetMin + 1)) + targetMin;

// Assign each crystal a random number between 1-12
gemBlue = Math.floor(Math.random() * 12) + 1;
gemOrange = Math.floor(Math.random() * 12) + 1;
gemPurple = Math.floor(Math.random() * 12) + 1;
gemPink = Math.floor(Math.random() * 12) + 1;	

// Logic to reset game
function nextGame() {
	randomNumber = Math.floor(Math.random()*(targetMax - targetMin + 1)) + targetMin;
	$("#randomNumber").html(randomNumber);
	totalScore = 0;
	$("#score").html(totalScore);

	gemBlue = Math.floor(Math.random() * 12) + 1;
	gemOrange = Math.floor(Math.random() * 12) + 1;
	gemPurple = Math.floor(Math.random() * 12) + 1;
	gemPink = Math.floor(Math.random() * 12) + 1;
}

// Checking for WIN (user's total score matches random target number)
function checkWin(){
	if(totalScore === randomNumber){
		countWin++;
		$("#wins").html(countWin);
		alert("That's a WIN!! " + totalScore + " = " + randomNumber);
		gameOver = true;
		nextGame();
		}
}

// Checking for LOSS (user's total score has exceeded the random target number)
function checkLoss(){
	if(totalScore > randomNumber){
		countLoss++;
	$("#lose").html(countLoss);
	alert("Uh oh, you went OVER!! " + totalScore + " > " + randomNumber);
	nextGame();
	}
	//location.reload();
}

//The document loads and the game is available for the user interact

$(function(){
	
// Display the random target number
$("#randomNumber").append(randomNumber);

// When each crystal is clicked, the number assigned to it will be added to user's total score
$("#gemBlue").on("click", function(){
	totalScore += gemBlue;
	$("#score").html(totalScore);
	checkWin();
	checkLoss();
});

$("#gemOrange").on("click", function(){
	totalScore += gemOrange;
	$("#score").html(totalScore);
	checkWin();
	checkLoss();
});

$("#gemPurple").on("click", function(){
	totalScore += gemPurple;
	$("#score").html(totalScore);
	checkWin();
	checkLoss();
});

$("#gemPink").on("click", function(){
	totalScore += gemPink;
	$("#score").html(totalScore);
	checkWin();
	checkLoss();
});
});