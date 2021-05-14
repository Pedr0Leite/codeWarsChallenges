// 16+18=214 - DO IT WITH LESS THAN 21 lines
// For this Kata you will have to forget how to add two numbers together.

// // The best explanation on what to do for this kata is this meme:

function add(num1, num2) {
  var [x, y] = "";
  if (num1.toString().length >= num2.toString().length) {
    var [x, y] = [[...num1.toString()], [...num2.toString()]];
  } else {
    var [x, y] = [[...num2.toString()], [...num1.toString()]];
  }
  num1.toString().length >= num2.toString().length
    ? ([x, y] = [[...num1.toString()], [...num2.toString()]])
    : ([x, y] = [[...num2.toString()], [...num1.toString()]]);
  var [xTemp, xRest] = [
    x.slice(x.length - y.length, x.length),
    x.slice(0, x.length - y.length),
  ];
  let z = xTemp.map((yvalue, index) => {
    return Number(y[index]) + Number(yvalue);
  });
  xRest.reverse().forEach((rest) => {
    z.unshift(rest);
  });
  return Number(z.join(""));
}

// console.log("Result1: " + add(1822, 30279));
// console.log("Result4: " + add(16, 18)); //214
// console.log("Result5: " + add(26, 39)); // 515
console.log("Result5: " + add(2, 11)); // 13
// console.log("Result6: " + add(122, 39)); //1511
// console.log("Result7: " + add(1222, 30277)); //31499
// console.log("Result8: " + add(1236, 30977)); //31111013
// console.log("Result9: " + add(38810, 1383)); //391193
// console.log("Result10: " + add(49999, 49999)); //818181818
// console.log("Result11: " + add(61334, 234)); //61568
