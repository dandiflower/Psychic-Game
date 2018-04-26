

// VARIABLES
// ===========================================================

var Alphabet = ["a", "b"];

var Wins = 0;

var Lost = 0;

var numGuessed = 0;

var numLeft = 10;


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
    document.getElementById("Wins").innerHTML = "Wins: " + Wins;
}

// Function that updates the losses...
function updateLost() {
    document.getElementById("Lost").innerHTML = "Losses: " + Lost;
}



// MAIN PROCESS
// ==========================================================

document.getElementById("Wins").innerHTML = winnings();

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log("User Guess" + userGuess)
    // Computer Randomly chooses
    var Computer = Alphabet[Math.floor(Math.random() * Alphabet.length)];
    console.log("Computer" + Computer)
   
    
    // Alerts the user the user pressed (userGuess).
    alert("User guess: " + userGuess);

    // Alerts the computer's guess.
    alert("computer guess: " + Computer);
    
    
    for (var i = 0; i < 11; i++ ) {
        console.log(userGuess[i]);

        if (Computer === userGuess) {
            Wins++
            console.log("Wins", Wins)
        } else if (co)
            Lost--;
            console.log("Lost", Lost);
            updateWins();
            updateLost();
        }
    };