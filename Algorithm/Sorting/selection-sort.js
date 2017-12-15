function selection_sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

let a = [6,3,5,2,5,9,5,2];
console.time('Start');
selection_sort(a);
console.timeEnd('Start');