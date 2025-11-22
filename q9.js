//9. Count the number of vowels in a string
let text = "JavaScript is fun";
let count = 0;
let vowels = "aeiouAEIOU";

for (let char of text) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Number of vowels:", count);