var bottles = 99;
while(bottles > 0) {
  if(bottles > 1) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");
  } else {
    console.log(bottles + " last bottle of beer on the wall, " + bottles + " last bottle of beer.");
  }
  bottles -= 1;
  if(bottles > 0) {
    console.log("Take one down, pass it around, " + bottles + " bottles of beer on the wall.");
  } else { // last bottle of beer
    console.log("Take it down, pass it around, no more bottles of beer on the wall.");
  }
}

console.log("No more bottles of beer on the wall, no more bottles of beer.");
console.log("Go to the store, buy some more, 99 bottles of beer on the wall.");
