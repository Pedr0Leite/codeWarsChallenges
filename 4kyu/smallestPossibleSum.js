function solution(numbers) {
  var numbLength = numbers.length;
  let tempArr = [];

  if (numbLength == 1) {
    return numbers[0];
  }
  
  var commonDenominator = function (valueA, valueB) {
    if (!valueB) {
      return valueA;
    }
    return commonDenominator(valueB, valueA % valueB);
  };

  for (var i = 0; i < numbLength; i++) {
    if (numbers[i + 1] != undefined) {
      tempArr.push(commonDenominator(numbers[i], numbers[i + 1]));
    }
  }

  let mmc = tempArr.sort((a, b) => a - b)[0];

  return mmc * numbLength;
}
// console.log(solution([6, 9, 21])); //#9
// console.log(solution([173056, 8836, 121801, 36481, 157609, 5776, 13689, 77841, 77841, 10404, 136900, 11449, 201601, 123201, 43264, 160801, 114244, 182329, 214369, 231361, 248004, 10404, 19044, 72900, 186624, 31329, 17161, 83521, 51076, 52441, 42849, 69696, 142884, 74529, 7921, 12996, 41209, 195364, 96721, 110224, 158404, 119716, 10609, 109561, 91809, 147456, 3844, 98596, 30625, 121104, 221841, 51984, 205209, 9216, 142884, 187489]));