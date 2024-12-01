//! Write the following functions without using prototypical methods:
/*
// -----------------------------------------------------------------
//! Pass a number into a function that will return the absolute value of that number
//! (absolute value of -1 is 1, and absolute value of 1 is 1) without the use of built in math functions.

function absolutevalue(number) {
if (number < 0) {
    return -number;
}
    return number;
}

// -----------------------------------------------------------------
//! Make a function called pow that accepts arguments x and y and returns the value of x to the y power

function pow (x, y) {
    return x ** y;
}

// -----------------------------------------------------------------
//! Write a function that accepts an array of banned words and an array of words.
//! If any of the banned words appear in the array of words, replace them with "REDACTED.

const dirtyWords = ["poopoo", "stinky", "doodoo"];

function bannedWords(bannedList, wordsToCheck) {
    let wordArray = Array.isArray(wordsToCheck) ? wordsToCheck : [...wordsToCheck];
    let result = [];
    for (let i = 0; i < wordArray.length; i++) {
        if (bannedList.includes(wordArray[i])) {
            result.push("REDACTED");
        } else {
            result.push(wordArray[i]);
        }
    }
    return result;
}
console.log(bannedWords(dirtyWords, ["nice", "smelly", "poopoo", "maggie"]));

// -----------------------------------------------------------------
//! Write a function to see if a pizza can be split evenly amongst a group of people.
//! The function should take two arguments: the number of people present, and the number of slices of the pizza.
//!   - If it can be split evenly, log the result
//!   - If it cannot, say it cannot be split evenly and ALSO list how many people will go without an extra slice.
//! Hint: use the modulo operator (%)


function splitPizzaEvenly(x,y) {
    if (x % y === 0) {
    return x % y;
}
return console.log("Can't be split evenly", (y - (x % y)))
}
console.log(splitPizzaEvenly(13,6))

// -----------------------------------------------------------------
//! Write a function to see if a triangle is a right triangle.
//! It's a right triangle if the square of the longest side (hypotenuse) is equal to the sum of the squares of the other sides.
//! Assume that 'a' is the longest side for now, but think about how you might need to change it if we didn't know which one is the hypotenuse.

function rightTriangle(a, b, c) {
    return (a * a) + (b * b) === (c * c);

}
console.log(rightTriangle(3, 4, 5));
*/
// -----------------------------------------------------------------
//! Write a function to check to see if a warrior can beat all of the monsters in a dungeon.
//! Supply the function with the amount of damage each of the monsters do (in an array),
//! and then the number of health the warrior has.
//!   - If the warrior doesn't have enough health to take all of the attacks, they are unable to survive
//!   - If they have more health than all of the attacks, they are able to survive.

//? Example of monster damage: [1, 3, 2, 8, 5];
//? Example of warrior health: 10;
//? Since 1 + 3 + 2 + 8 + 5 = 19 and 10 - 19 < 0 they could not survive

let warriorHealth = 125
const monsterDamage = [10, 15, 20, 25, 30]
let totalDamage = 0;
for (let i = 0; i < monsterDamage.length; i++) {
    totalDamage += monsterDamage[i];
}
function damageTaken(warriorHealth, totalDamage) {
    return (warriorHealth - totalDamage)
}
let remainingHealth = damageTaken(warriorHealth, totalDamage);
console.log(remainingHealth);

if (remainingHealth > 0)
    console.log("You Survived!")
else
    console.log("You Died :(")

// -----------------------------------------------------------------
//! BONUS:
//! Use recursion for function 2