    // LOOP PRACTICE
// -----------------------------------------------------------------
//! Take an input from the user. Starting with the 4th character,
//! log all characters until the end of the input.
//! If the input is shorter than 4 characters, nothing should be logged.

// let fullName = prompt("Please enter your full name:");
// if (fullName.length >= 4) {
//    let result = '';
//    for (let i = 3; i < fullName.length; i++) {
//        result += fullName[i];
//    }
//    console.log(result);
//}

// -----------------------------------------------------------------
//! Pick a random number. Prompt the user to guess a number. If the number is correct,
//! end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).

/* let randomNumberInput = prompt("Please enter a number")
let correctNumber = 17;
let attempts = 
randomNumberInput = Number(randomNumberInput);

if (randomNumberInput === correctNumber) {
    console.log("HOW DID YOU KNOW THAT");
} else {
    console.log("Nope, Try again");
}*/

// -----------------------------------------------------------------
//! Simulate a coin flip. Start a counter at 0. If the initial flip was heads,
//! leave the counter at 0 and log: "It took 0 retries to get heads!".
//! If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.



// COMPARISON PRACTICE
// -----------------------------------------------------------------
//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    or less than/equal to 50 and then log those messages separately to the console.
//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name
//!  - Log their name in reverse to the console.

const playerName = prompt("Enter Your First Name");
const playerNumber = prompt("Enter a Number between 1-100");
const enteredNumber = Number(playerNumber);

if (enteredNumber % 2 === 0) {
    console.log("Your number is even!");
} else {
    console.log("Your number is odd!");
}