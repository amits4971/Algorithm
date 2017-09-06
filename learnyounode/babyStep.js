/* In this exercise we compute the sum of an array.The element of the array are provded as commandline argument */


var arr = process.argv.slice(2);

arr = arr.map(Number);
var sum =  arr.reduce(function(a,b){
    return a+b;
},0)

console.log(sum);
