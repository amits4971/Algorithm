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

function jump_search(array, item) {
    let n = array.length;
    let step = Math.sqrt(n);

    let prev = 0;

    while (array[(step < n ? step : n) - 1] < item) {
        prev = step;
        step += sqrt(n);
        if (prev >= n)
            return -1;
    }

    while (array[prev] < item) {
        prev++;

        if (prev == (step < n ? step : n))
            return -1;
    }

    if (array[prev] == item)
        return prev;

    return -1;
}

let a = [];
for (let i = 0; i < 1000; i++) {
    a.push(i);
}

console.time('Start');
insertion_sort(a);
console.log('Item present at - ', jump_search(a, 490, 15));
console.timeEnd('Start');