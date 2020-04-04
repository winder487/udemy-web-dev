var a = 5;
var b = 10;

// swap a and b without using a temporary variable

console.log(a); // a
console.log(b); // b

// one solution is OR and XOR
a = a|b // ex: 0b0101 (5) OR 0b1010 (10) = 0b1111 (15)
b = a^b // ex: 0b1111 (15) XOR 0b1010 (10) = 0b0101 (5)
a = a^b // ex: 0b1111 (15) XOR 0b0101 (5) = 0b1010 (10)

console.log(a); // b
console.log(b); // a

// another solution (swapping them back again)
a = a+b // ex: 10 + 5
b = a-b // ex: 15 - 5
a = a-b // ex: 15 - 10

console.log(a); // a
console.log(b); // b

// can you use three XORs?

a = a^b
b = a^b
a = a^b

console.log(a); // expected: b
console.log(b); // expected: a