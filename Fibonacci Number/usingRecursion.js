function fibo (count, prev1, prev2) {
    console.log(prev1 + prev2)
    if (count-1 > 0) {
        fibo (count-1, prev1 + prev2, prev1)
    }
}
let prev2 = 0;
let prev1 = 1;
console.log(prev2);
console.log(prev1);
console.log(fibo(18, prev1, prev2));