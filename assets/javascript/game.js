

// VARIABLES
// ===========================================================

var alphabet = ["a", "b"];

var wins = 0;

var lost = 0;

var numUsed = 0;

var numLeft = 10;

var computerLetter;
// computer randomly chooses


// FUNCTIONS
// =============================================================

// // This function is run whenever the user presses a key.
// document.onkeyup = function (event) {
//     // Determines which key was pressed.
//     var userGuess = event.key;
//     userGuess = userGuess.toLowerCase();
//     console.log("User Guess" + userGuess);
// };

// Function that updates the wins...
function updateWins() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
}

// Function that updates the remaining guesses...
function updateRemaining() {
    document.getElementById("numLeft").innerHTML = "Guesses Left: " + numLeft;
}

// Function that updates the number of guesses made...
function updateUsed() {
    document.getElementById("numUsed").innerHTML = "Guesses Made: " + numUsed;
}

// Function that updates the losses...
function updateLost() {
    document.getElementById("lost").innerHTML = "Losses: " + lost;
}

function generateComputerLetter() {
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Computer " + computerLetter);

}
generateComputerLetter();


// MAIN PROCESS
// ==========================================================



// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
  
    console.log("User Guess " + userGuess);
    
    
    numLeft--;

        if (computerLetter === userGuess) {
            wins++;
            console.log("Wins", wins);
            numLeft = 10;
            updateWins();
            numUsed = 0;
            lost = 0;
        } else {
            lost++;
            updateRemaining();
            numUsed++;
            if (numLeft === 0) {
                console.log("you suck");
            }
        }

            // Lost--;
            // console.log("Lost", Lost);
            // updateWins();
            // updateLost();
        
    };