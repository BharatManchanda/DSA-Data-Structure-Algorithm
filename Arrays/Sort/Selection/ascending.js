let array = [9, 21, 41, 43,  51,  49, 5, 54, 45, 6, 7, 10];

function shiftArray(i, minIndex) {
    let temp = array[minIndex];
    for (j = minIndex;j > i; j--) {
        array[j] = array[j-1];
    }
    array[i] = temp;
}

for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i+1; j < array.length; j++) {
        if (array[minIndex] > array[j]) {
            minIndex = j;
        }
    }
    if (minIndex != i) {
        shiftArray(i, minIndex);

    }
    console.log(array);  
}