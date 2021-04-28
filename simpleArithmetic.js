function solve(arr) {
  let temp = [];
  var diffArr = findDiff(arr);
  console.log('diffArr :', diffArr);

  diffArr.forEach((diffV) => {

    let miniArr = [];
    arr.forEach((x) => {
      arr.forEach((y) => {
        let xDiffy = x - y;
        console.log('xDiffy :', xDiffy);
        if (xDiffy == diffV) {
          if (miniArr.length == 3) {
            temp.push(miniArr);
            miniArr = [];
            miniArr.push(x);
        } else {
            miniArr.push(x);
        }
    }
});
});
console.log('miniArr :', miniArr);
    if (miniArr.length == 3) {
      temp.push(miniArr);
    }
  });
  console.log("temp length :", temp);
  console.log("temp :", temp.length);
}

function findDiff(arr) {
  let diff = new Set();
  for (var j in arr) {
    for (var i in arr) {
      diff.add(Math.abs(arr[i] - arr[j]));
    }
  }
  let diffArr = [...diff];
  return diffArr;
}

solve([1,2,3,4,5]) //,4);
// solve([1, 2, 3, 5, 7, 9]); //,5);
// solve([0,5,8,9,11,13,14,16,17,19]) //,10);
// solve([0,1,2,3,5,6,7,11,13,15,17,19]) //,17);
// solve([0,1,4,5,7,9,10,13,15,16,18,19]) //,15);
// solve([0,1,2,3,5,8,11,13,14,16,18,19]) //,13);
