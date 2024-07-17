let array = [12, 23, 34, 45, 56, 65, 67, 81, 67];
let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
console.log(`minimun number of array: ${max}`);