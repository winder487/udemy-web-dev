//fizzbuzz but by pushing to an array whenever the function is called
var numbers = [];
var count = 0;

function fizzBuzz() {
  count+=1;
  var string = "";
  if(count % 3 === 0) {
    string+="Fizz";
  }
  if(count % 5 === 0) {
    string+="Buzz";
  }
  if(string === "") {
    numbers.push(count);
  } else {
    numbers.push(string);
  }

  return numbers;
}
