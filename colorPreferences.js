// Color Preferences

// Create an array to store three colors the user likes
let favoriteColors = [];

// Loop three times to ask the user for their favorite colors
for (let i = 0; i < 3; i++) {
  // Prompt the user to input a value
  let color = prompt(`Enter your favorite color ${i + 1}: `);

  // Add the color to the array using the push() method
  favoriteColors.push(" " + color);

  // Print the updated array to the console log
  console.log(`Your current favorite colors: ${favoriteColors}`);
}