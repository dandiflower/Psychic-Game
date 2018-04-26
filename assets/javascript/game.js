

// VARIABLES
// ===========================================================

var Alphabet = ["a"];

var Wins = 0;

var Lost = 0;

var numGuessed = 0;

var numLeft = 10;

var userGuess = document.getElementById("Wins");

// computer randomly chooses

var Computer = Alphabet[Math.floor(Math.random() * Alphabet.length)];
console.log(Computer);


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
    document.getElementById("Wins").innerHTML = "Score: " + Wins;
}

// Function that updates the losses...
function updateLost() {
    document.getElementById("Lost").innerHTML = "Score: " + Lost;
}


document.getElementById("Wins").innerHTML = winnings();

function winnings() {
    if (userGuess === Computer);
    Wins = (Wins + 1);
}


function Something() {
    document.getElementById("").value = "Johnny Bravo";
}

// MAIN PROCESS
// ==========================================================

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    userGuess.textContent = event.key;
    userGuess = userGuess.toLowerCase();
    console.log("User Guess" + userGuess);
};
    
    
    for (var i = 0; i < 11; i++ )
        console.log(userGuess);
        if (userGuess === Computer) {
            Wins = Wins + 1;
            console.log(Wins);
            numLeft = numLeft - 1;
            console.log(numLeft);
        }

