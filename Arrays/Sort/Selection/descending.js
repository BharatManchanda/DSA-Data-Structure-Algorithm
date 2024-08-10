let array = [9, 21, 41, 43,  51,  49, 5, 54, 45, 6, 7, 10];

function shift(i, maxIndex) {
    let tempVal = array[maxIndex]
    for (let counter = maxIndex; counter > i; counter--) {
        array[counter] = array[counter-1];
    }
    array[i] = tempVal;
}

for (let i = 0; i < array.length; i++) {
    let maxIndex = i;
    for (let j = i+1; j < array.length; j++) {
        if  (array[maxIndex] < array[j]) {
            maxIndex = j;
        }
    }
    shift(i, maxIndex);

    // let temp = array[i];
    // array[i] = array[maxIndex];
    // array[maxIndex] = temp
}
console.log(array,"::array");
