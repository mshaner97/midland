const maggiePromptsForValidInput = (promptString, validInputs) => {
    let userInput;
    while(!validInputs.includes(userInput)) {
        userInput = prompt(promptString);
    }
}

const userName = prompt ("What is your name?");
    console.log ("Hello " + userName);

let willingnessToAdventure = prompt ("Do you want to go on an adventure? yes or no?");

if (willingnessToAdventure === "yes") {
    console.log ("Great! Let's Get Started!");

    // while(playerClass !== 'warrior' && playerClass !== 'bard') {
    //     playerClass = prompt ("Pick a Class: warrior or bard");
    //     if (playerClass === "warrior") {
    //         console.log ("You chose Warrior!");
    //         alert("Hello " + userName + " the " + playerClass) + "!";
    //     }
    //     else if (playerClass === "bard") {
    //         console.log ("You chose Bard!");
    //         alert("Hello " + userName + " the " + playerClass);
    //     }
    //     else {
    //         console.log ("Invalid Answer 😡")
    //         alert("Invalid Answer 😡");
    //     }
    // }
    const playerClass = maggiePromptsForValidInput("Pick a Class: warrior or bard", ["warrior", "bard"])

    const combatStats = {
        'bard': 1,
        'warrior': 5
    }

    alert(`Wow! you just did ${combatStats[playerClass]} damage to the bat! I know, I didn't know there was a bat there either, but you sure did ${playerClass === 'bard' ? "scare": "kill"} it!`)

    /* START ADVENTURE - HILL*/

    const hillPrompt = `${userName} the ${playerClass} is heading out on a mission, a dangerous mission, where there will be many choices, and the outcome... may be DEATH. Choose wisely, young ${playerClass}. Will you go 'up the hill', or 'around it'?`
    const hillChoices = ['up the hill', 'around it']
    let hillChoice = maggiePromptsForValidInput(hillPrompt, hillChoices);

    if (hillChoice === "up the hill") {
        console.log ("You chose to go up the hill");
        alert("OH NO! You were approaching the top of the hill when suddenly from behind you hear a mighty 'CAW!' You were carried away by a mythical bird.")
    }
    else if (hillChoice === "around it") {
        console.log ("You chose to go around the hill");
        alert("Hooray! You made it around the hill! Press enter to see what comes next!");
    }

    /*NEXT CHOICE - WOODS*/

    let woodsChoice = prompt(`${userName} the ${playerClass} , you come upon a thickett of twirly, twisty knotted trees. To your left, you see a winding path, it's safe, but it will take longer. Do you 'take the path' or go 'through the woods'?`);

    if (woodsChoice === "take the path") {
        console.log ("You chose to take the wandering path");
        alert("Good chice, you made it safely through the woods. Press enter to see what comes next!");
    }
    else if (woodsChoice === "through the woods") {
        console.log ("You chose to go around the hill");
        alert("Why on earth would you wander off the path! You've been eaten by a mythical bear!");
    }
    else { console.log ("Invalid Answer 😡")
        alert("Invalid Answer 😡");
    }

    /*NEXT CHOICE - RIVER*/

    let riverChoice = prompt(`${userName} the ${playerClass} , you come upon a river, flowing quickly. There's a man with a ferry, it costs 10 coins to ride. Should you go with the 'ferry' or will you 'wade across' yourself? `);

    if (riverChoice === "wade across") {
        console.log ("You chose to wade across");
        alert("Your boots are wet, but you're alive! Press enter to keep going!")
    }
    else if (riverChoice === "ferry") {
        console.log ("You chose to go on the ferry");
        alert("You look into your pouch, no coins. The ferry man beats you over the head with his oar and you float down the river.");
    }
    else { console.log ("Invalid Answer 😡")
        alert("Invalid Answer 😡");
    }

    /*NEXT CHOICE - CAVE*/

    let caveChoice = prompt(`${userName} the ${playerClass} , you're almost there, Keep going! You see a cave, there are some beautiful, glimmering, glistening gems just asking to be picked up and carried home! Do you 'take the loot' or 'continue' on your merry way?`);

    if (caveChoice === "take the loot") {
        console.log ("You chose to wade across");
        alert("You pick up one of the gems and as you reach to put it in your bag a snarling beast approaches, oh no, you were captured by a cave dweller!")
    }
    else if (caveChoice === "continue") {
        console.log ("You chose to go on the ferry");
        alert("Smart choice, Adventurers never steal! Press enter to finish your journey!");
    }
    else { console.log ("Invalid Answer 😡")
        alert("Invalid Answer 😡");
    }

    /*LAST CHOICE - HOUSE*/

    let houseChoice = prompt(`${userName} the ${playerClass} , Finally! You made it! Now which house was grandma's again? 'red' or 'blue'?`);

    if (houseChoice === "blue") {
        console.log ("You picked blue!")
        alert("You go to knock on the door, it swings open revealing a small little old lady. Wait a minute, this isn't grandma! You Were Eaten, Game Over");
    }
    else if (houseChoice === "red") {
        console.log ("You picked red!")
        alert("You made it! Grandma made cookies for you, and you live happily ever after.")
    }
    else { console.log ("Invalid Answer 😡")
        alert("Invalid Answer 😡");
    }
} else {
    console.log("Ok, Goodbye");
    alert("Ok. Goodbye")
}
