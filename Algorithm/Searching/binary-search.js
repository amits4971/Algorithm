function insertion_sort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }
}

function binary_search(array, start, end, item) {
    if (start < end) {
        let mid = parseInt((start + end) / 2);

        if (array[mid] === item) {
            return mid + 1;
        } else if (array[mid] > item) {
            return binary_search(array, start, mid - 1, item);
        } else {
            return binary_search(array, mid + 1, end, item);
        }
    } else {
        return -1;
    }
}



let a = [6, 3, 5, 2, 5, 9, 5, 2];
console.time('Start');
insertion_sort(a);
console.log('Item present at - ', binary_search(a, 0, a.length, 5));
console.timeEnd('Start');