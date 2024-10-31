// Favorite Number Calculation

// Variable
let theFavNumber = 69;

// Loop
while (true) {
    let guess = parseInt(prompt("Enter your favorite Number: "));

    if (guess < theFavNumber) {
        console.log("Too low!");
    } else if (guess > theFavNumber) {
        console.log("Too high!");
    } else {
        console.log("Correct!");
    }
}
