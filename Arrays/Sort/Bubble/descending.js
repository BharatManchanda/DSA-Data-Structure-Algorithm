let array = [9, 21, 41, 43,  51,  49, 5, 54, 45, 6, 7, 10];

for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
        if (array[j-1] < array[j]) {
            let tamp = array[j];
            array[j] = array[j-1];
            array[j-1] = tamp;
        }
    }
}
console.log(array);