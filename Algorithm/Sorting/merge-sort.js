function merge_sort(array, start, end) {
    if (start < end) {
        let mid = parseInt((start + end) / 2);

        merge_sort(array, start, mid);

        merge_sort(array, mid + 1, end);

        merge(array, start, mid, end);
    }
}

function merge(array, start, mid, end) {
    let p = start;
    let q = mid + 1;
    let arr = new Array(end - start + 1);
    let k = 0;

    for (let i = start; i <= end; i++) {
        if (p > mid)      //checks if first part comes to an end or not .
            arr[k++] = array[q++];

        else if (q > end)   //checks if second part comes to an end or not
            arr[k++] = array[p++];

        else if (array[p] < array[q])     //checks which part has smaller element.
            arr[k++] = array[p++];

        else
            arr[k++] = array[q++];
    }

    for (let p = 0; p < k; p++) {
        /* Now the real array has elements in sorted manner including both 
             parts.*/
        array[start++] = arr[p];
    }

}

let a = ['5', '7', '3', '1', '5', '9', '7', '2', '8'];
let b = ['google', 'pagal', 'abbu', 'bhundva', 'abb'];

console.time('start');
merge_sort(a, 0, a.length - 1);
console.timeEnd('start');