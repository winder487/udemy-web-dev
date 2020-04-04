var name = prompt("What is your name?");

var firstLetter = name.slice(0, 1).toUpperCase();
var remainingName = name.slice(1, name.length).toLowerCase();

alert("Hello, " + firstLetter + remainingName + ".");