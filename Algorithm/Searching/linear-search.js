function linear_search(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item)
            return i + 1;
    }
    return -1;
}

let a = [];

for (let i = 0; i < 1000; i++) {
    a.push(i);
}

console.time('Start');
console.log('Item present at - ', linear_search(a, 490));
console.timeEnd('Start');