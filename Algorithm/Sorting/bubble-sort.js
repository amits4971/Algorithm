function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i + 1); j++){
            if(array[j] > array[j+1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
}

let a = ['5', '7', '3', '1', '5', '9', '7', '2', '8'];

console.time('start');
bubble_sort(a);
console.log(a);
console.timeEnd('start');