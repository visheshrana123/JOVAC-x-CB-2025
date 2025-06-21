let arr = [5, 4, 3, 8, 12, 72];
const max = arr.reduce((acc, curr) => {
  return Math.max(acc, curr);
});
console.log(max);
