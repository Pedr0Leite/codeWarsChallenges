
const deleteNth = (arr,n) => { return arr.reduce((acc, i) => { acc.filter((x) => { return i == x;}).length != n ? acc.push(i) : false;return acc}, [])}

console.log(deleteNth([20,37,20,21], 1)); //, [20,37,21])
// deleteNth([1,1,3,3,7,2,2,2,2], 3); //, [1, 1, 3, 3, 7, 2, 2, 2])
// deleteNth([12,39,19,39,39,19,12], 1); //, [12, 39, 19])