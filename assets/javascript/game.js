
var Alphabet = ["a", "b", "c", "d", "e", "f"];

// Randomly chooses a choice from the options array. This is the Computer's selection.
var Computer= Alphabet[Math.floor(Math.random() * Alphabet.length)];
console.log(Computer);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log("User Guess" + userGuess);




};


