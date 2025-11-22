//2. Print the first 15 Fibonacci numbers
let n1 = 0, n2 = 1, nextTerm;
console.log(n1);
console.log(n2);

for (let i = 3; i <= 15; i++) {
    nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
}