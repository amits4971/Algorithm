function quick_sort(array, low, high) {
    if (low < high) {
        let pi = partition(array, low, high);

        quick_sort(array, low, pi - 1);

        quick_sort(array, pi + 1, high);

    }
}

function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        // If current element is smaller than or
        // equal to pivot
        if (array[j] <= pivot) {
            i++;    // increment index of smaller element
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[i + 1];
    array[i+1] = array[high];
    array[high] = temp;
    return (i + 1);
}


let a = [6, 3, 5, 2, 5, 9, 5, 2];
console.time('Start');
quick_sort(a, 0, a.length - 1);
console.log(a);
console.timeEnd('Start');

