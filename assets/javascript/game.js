

// VARIABLES
// ===========================================================

var alphabet = ["a", "b"];

var wins = 0;

var lost = 0;

var numGuessed = 0;

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

// Function that updates the losses...
function updateLost() {
    document.getElementById("lost").innerHTML = "Losses: " + lost;
}

function generateComputerLetter() {
    computerLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Computer " + computerLetter)

}
generateComputerLetter()


// MAIN PROCESS
// ==========================================================



// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
  
    console.log("User Guess " + userGuess)
    // Computer Randomly chooses
    
    numLeft--
    // Alerts the user the user pressed (userGuess).
    //alert("User guess: " + userGuess);

    // Alerts the computer's guess.
    //alert("computer guess: " + Computer);
    


        if (computerLetter === userGuess) {
            wins++
            console.log("Wins", wins)
            numLeft = 10;
            updateWins();
        } else if (computerLetter !== userGuess) {
            numLeft--
        }

            // Lost--;
            // console.log("Lost", Lost);
            // updateWins();
            // updateLost();
        
    };