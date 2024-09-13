// EXERCISE: HIGHER OR LOWER ----------------------------------------------------------------------------------------------------------------------

// Using if else and loops, create a javascript application that will
// 1. Randomly select a number between 1 and 100.
// 2. Ask the user for a quess (between 1 and 100)
// 3. Let the user know if the quess is higher or lower than the randomly selected
// number, and ask for a new quess, if the quess was not correct.
// 4. Let the user know that they guessed correctly and how many guesses they used,
// if the guess correctly.



//generating a random number
let randomNumber = Math.floor(Math.random()*100) + 1  //math.floor - no decimals, *100 - bc math random gives number between 0-1, + 1, so there is no 0

let guess = null;  
let attempts = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt(`Guess the number from 1 - 1000`))

    attempts++;

    if(guess > randomNumber) {
        alert(`Too high!`)
    } else if (guess < randomNumber) {
        alert(`Too low`)
    } else if (guess === randomNumber) {
        alert(`yeeee, contrats! Took you only ${attempts} times, thats ok, we've all been there🥹`)
    }
}