let array = [9, 21, 41, 43,  51,  49, 5, 54, 45, 6, 7, 10];

for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    for (let j = i-1; j >= 0 && temp < array[j]; j--) {
        let store = array[j];
        array[j] = temp;
        array[j+1] = store;
    }
}
console.log(array);