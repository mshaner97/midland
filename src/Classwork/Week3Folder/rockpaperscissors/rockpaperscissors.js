"use strict";
const buttonChoice = Array.from(document.getElementsByTagName("button"));
let playerChoice = '';
buttonChoice.forEach((button, i) => {
    button.addEventListener('click', () => {
    button.style.backgroundColor = button.style.backgroundColor === 'pink' ? 'white' : 'pink';
    if (i === 0) {
        playerChoice = "rock";
        document.getElementById("playerChoice").innerHTML = "rock";
    } else if (i === 1) {
        playerChoice = "paper";
        document.getElementById("playerChoice").innerHTML = "paper";
    } else {
        playerChoice = "scissors";
        document.getElementById("playerChoice").innerHTML = "scissors";
    }

    console.log(`Player chose: ${playerChoice}`);
    });
  });

  const computerChoice = ['rock', 'paper', 'scissors'];
  const randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(`computer chose: ${randomChoice}`)

if (playerChoice === computerChoice)
    console.log("TIE")
//player choice 0
else if (playerChoice === 'rock' && computerChoice === 'paper')
    console.log("COMPUTER WON")
else if (playerChoice === 'rock' && computerChoice === 'scissors')
    console.log("PLAYER WON")
//player choice 1
else if (playerChoice === 'paper' && computerChoice === 'rock')
    console.log("PLAYER WON")
else if (playerChoice === 'paper' && computerChoice === 'scissors')
    console.log("COMPUTER WON")
//player choice 2
else if (playerChoice === 'scissors' && computerChoice === 'rock')
    console.log("COMPUTER WON")
else if (playerChoice === 'scissors' && computerChoice === 'paper')
    console.log("PLAYER WON")