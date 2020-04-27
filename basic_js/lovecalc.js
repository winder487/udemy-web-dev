var num = Math.random();

// Prompt the user for two names
var nameOne = prompt("Love candidate #1");
var nameTwo = prompt("Love candidate #2");

// Ignore those completely and generate a number between 1 and 100
num *= 100;
num = Math.floor(num) + 1; // I uhh, believe this is equal to Math.ceil

// Give it all back to the user
console.log("The compatibility between " + nameOne + " and " + nameTwo + " is: " + num + "%.");