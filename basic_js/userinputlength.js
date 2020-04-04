var input = prompt("What's happening?");

// var strLen = input.length;

// in a real application you'd probably use a const,
// but everytime we rerun, it's going to fail because the cache will persist the constant causing this declaration to be a duplicate
var charLimit = 140;

// var remain = charLimit - strLen;

// alert("You have written " + strLen + " characters. You have " + remain + " characters left.");

alert(input.slice(0, charLimit));