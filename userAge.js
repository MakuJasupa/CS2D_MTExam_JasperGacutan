// User Age Categorization

// Variables
let userAge = parseInt(prompt("Enter your age: "));

if (userAge <= 5) {
    console.log("You are a Toddler");
} else if (userAge >= 5 && userAge <= 12) {
    console.log("You are a Child");
} else if (userAge >= 13 && userAge <= 19) {
    console.log("You are a Teenager");
} else if (userAge >= 20 && userAge <= 35) {
    console.log("You are a Young Adult");
} else if (userAge >= 36 && userAge <= 60) {
    console.log("You are a Middle-Aged");
} else if (userAge >= 60) {
    console.log("You are a Senior");
} else {
    console.log("Invalid. Please type the correct number");
}