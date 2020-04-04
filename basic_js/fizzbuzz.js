

for(i = 1; i<=100; i++) {
  if(i%3 == 0 && i%5 == 0) {
    // console.log("FizzBuzz");
    a = "FizzBuzz";
  } else if(i%3 == 0) {
    // console.log("Fizz");
    a = "Fizz";
  } else if(i%5 == 0) {
    // console.log("Buzz");
    a = "Buzz";
  } else {
    // console.log(i);
    a = i;
  }

  // alternative implementation of FizzBuzz with a switch statement...? 
  // It's actually horrific to look at. There's very little reason to use a switch here.

  var mod_three = i%3;
  var mod_five = i%5;
  switch(mod_three) {
    case(0):
      if(mod_five == 0) {
        // console.log("FizzBuzz");
        b = "FizzBuzz";
      } else {
        // console.log("Fizz");
        b = "Fizz";
      }
      break;
    default:
      switch(mod_five) {
        case(0):
          // console.log("Buzz");
          b = "Buzz";
          break;
        default:
          // console.log(i);
          b = i;
          break;
      }
      break;
  }

  // This just aims to try to verify that both solutions provide the same outputs
  if(a == b) {
    console.log("Success!");
  } else {
    console.log("Failed on: " + i);
    break;
  }
}



