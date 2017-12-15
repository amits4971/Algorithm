function insertion_sort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j+1] = key;
    }
}

let a = [6, 3, 5, 2, 5, 9, 5, 2];
console.time('Start');
insertion_sort(a);
console.timeEnd('Start');