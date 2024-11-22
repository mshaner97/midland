// Logic Practice

// 1. Positive or Negative
// Create a program that checks if a number stored in a variable is positive or negative. 
// Log "The number is positive" if it's greater than zero, otherwise log "The number is negative."

if (i > 0) {
console.log ("The number is Positive")
} else if (i < 0) {
    console.log ("The number is Negative")
}

// 2. Minimum Age for Driving
// Write a program that checks a person's age stored in a variable and logs "Can drive" if they are 16 or older. 
// If they are under 16, log "Cannot drive."

const LegalDrivingAge = 16;
if (Age >= 16) {
    console.log("Can Drive");
} else {
    console.log("Cannot Drive");
}

// 3. School Grade Levels
// Create a program that categorizes school levels based on a student's grade stored in a variable.
// Use the following categories: "Elementary" for grades 1-5, "Middle" for grades 6-8, and "High" for grades 9-12. 
// Log the school level.

let SchoolGradeLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (SchoolGradeLevel = [1, 2, 3, 4, 5]){
    console.log ("Elementary")
} else if (SchoolGradeLevel = [6, 7, 8]) {
    console.log ("Middle")
} else (SchoolGradeLevel = [9, 10, 11, 12]); {
    console.log ("high")
}

// 4. Basic Discount System
// A shop offers a discount for purchases over $50. 
// Write a program where the total purchase amount is stored in a variable. 
// If the amount is over $50, calculate the discount and log it. Otherwise, log "No discount available."

if (purchase >= 50) {
    console.log (i - (i/50))
}
else console.log ("no discount avaliable")



for (let i = 1; i < 100; i++) {
    const printFIZZBUZZ = i%3 === 0 && i%5 === 0
    const FIZZBUZZ = printFIZZBUZZ ? 'FizzBuzz' : ''
    const ONLY_FIZZ = i%3 === 0 && i%5 !== 0
    const FIZZ = ONLY_FIZZ ? 'Fizz' : ''
    const ONLY_BUZZ = i%5 === 0 && i%3 !== 0
    const BUZZ = ONLY_BUZZ ? 'Buzz' : ''
    console.log ('${i} ${FIZZBUZZ} ${ONLY_FIZZ} ${ONLY_BUZZ}');
    }
