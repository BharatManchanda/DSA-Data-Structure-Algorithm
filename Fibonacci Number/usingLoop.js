let prev2 = 0;
let prev1 = 1;
let range = 18

console.log(prev2);
console.log(prev1);
for (let i = 0; i < range; i++) {
    console.log(prev1 + prev2);
    let temp = prev1;
    prev1 = prev1 + prev2;
    prev2 = temp;
}