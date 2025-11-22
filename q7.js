//7. Sum of digits of an integer
let number = 12345;
let sum = 0;

while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log("Sum of digits:", sum);