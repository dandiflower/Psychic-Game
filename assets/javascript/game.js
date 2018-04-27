

// VARIABLES
// ===========================================================

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;

var lost = 0;

var numUsed = 0;

var numLeft = 10;

var computerLetter;
// computer randomly chooses


// FUNCTIONS
// =============================================================

// Function that updates the wins...
function updateWins() {
    document.getElementById("wins").innerHTML = wins;
}

// // Function that updates the remaining guesses...
function updateRemaining() {
    document.getElementById("numLeft").innerHTML = numLeft;
}

// Function that updates the number of guesses made...
function updateUsed() {
    document.getElementById("numUsed").innerHTML = numUsed;
}

// Function that updates the losses...
function updateLost() {
    document.getElementById("lost").innerHTML = lost;
}

// Function that updates the player's guess...
function updatePlayerguess() {
    document.getElementById("userGuess").innerHTML = event.key;
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
    userGuess = userGuess.toUpperCase();
    
    updatePlayerguess();
   

        if (computerLetter === userGuess) {
            wins++;
            console.log("Wins", wins);
            numLeft = 10;
            updateWins();
            numUsed = 0;
            lost = 0;
        } else {
            numLeft = numLeft - 1;
            updateRemaining();
            console.log(numLeft);
            numUsed = numUsed + 1;
            updateUsed();
            console.log(numUsed);
            if (numLeft === 0) {
                lost = lost + 1;
                updateLost();
                numLeft = numLeft + 10;
                updateRemaining();
                numUsed = 0;
                updateUsed();
                generateComputerLetter();
                console.log("Lost", lost); 
            }
        }


        
    };