let array = [17, 3, 4, 12, 34, 45, 56];
let min = array[0]; 

for (let i = 1; i < array.length; i++) {
    if (min > array[i]){
        min = array[i];
    }
}
console.log(`minimun number of array: ${min}`);