//4. Find the largest number in an array
let numbers = [5, 12, 7, 90, 33];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number is:", largest);