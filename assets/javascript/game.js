// set win, loss, userGuess to 0; guesses to 9
var win = 0;
var loss = 0;
var guesses = 10;
var guessArray = [];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// use Math.random to generate compGuess value and correlate value with alphabet array. Math.random generates a random number with a value between 0-1, multiplied by alphabet.length (26). Math.floor then rounds the number down to the next lowest whole number.

compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log to confirm
console.log("compGuess",compGuess);

// create function for resetting compGuess between rounds.
function funGuess() {
    compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("compGuess",compGuess);
}

// listener for regognition of input from keyboard
document.onkeypress = function(event) {
    var userGuess = event.key;
    // limit key selection to letters a-z and create alert if non-alphabetic key is pressed
    var limit = /[a-z]/gi;
    if (!limit.test(userGuess)) {
        alert ('Letters only, please!');
    }
    else {
        console.log(userGuess);
    }
    
    
    // check for matching value between userGuess and compGuess
    if (compGuess === userGuess) {
        console.log('Win');
        alert('You must be reading my mail...')
        document.getElementById("win").innerHTML = win+=1;
        guessArray = [];
        document.getElementById("guessArray").innerHTML = userGuess;
        funGuess();
        guesses = 10;
        document.getElementById("guesses").innerHTML = guesses;
    }
    else {
        console.log("Wrong!");
        document.getElementById("guesses").innerHTML = guesses-=1;
        guessArray.push(userGuess);
        document.getElementById("guessArray").innerHTML = guessArray;
    }
    // detect loss, add to loss counter, reset guesses, run compGuess()
    if (guesses <= 0) {
        loss+=1;
        document.getElementById("loss").innerHTML = loss+=1;
        console.log("Loss")
        alert("Ya blew it!")
// *** guesses not returning to 10 after loss.
        guesses = 10;
// *** guessArray not resetting after loss.
        guessArray = [];
        funGuess();
    }
}
