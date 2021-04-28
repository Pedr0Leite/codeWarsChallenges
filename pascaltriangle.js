function pascalsTriangle(n) {
let result = [];
  if (n == 0) {
    return result;
  } else if (n == 1) {
      result.push(1)
    return result;
  } else {
    for (var i = 1; i <= n; i++) {
      let tempArr = [];
      for (let position = 0; position < i; position++) {
        if (position == 0 || position == i - 1) {
          tempArr.push(1);
        } else {
          tempArr.push(result[i - 2][position - 1] + result[i - 2][position]);
        }
      }
      result.push(tempArr);
    }
}
let allMerged = [].concat.apply([], result);
  return allMerged;
}
// console.log('pascalsTriangle :', pascalsTriangle(2));
console.log("pascalsTriangle :", pascalsTriangle(4));
// console.log('pascalsTriangle :', pascalsTriangle(6));
