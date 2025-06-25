let arr = [4, 6, 2, 3, 1];
const output = arr.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
//console.log("Sum using reduce:", input);
console.log("Sum using reduce():", output);
function sumOfArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let result = sumOfArr(arr);
console.log("Sum using for loop:", result);
