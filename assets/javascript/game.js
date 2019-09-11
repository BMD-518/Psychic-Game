// set win, loss, userGuess to 0; guesses to 12 (11)
var win = 0;
var loss = 0;
var guesses = 11;
var guessArray = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var compGuess = compGuess;

// use Math.random to generate compGuess value and correlate value with alphabet string. Math.random generates a random number with a value between 0-1, multiplied by alphabet.length (26). Math.floor then rounds the number down to the next lowest whole number.

compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log to confirm
console.log(compGuess);

