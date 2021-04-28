// function pickPeaks(arr){
//     var finalObj = {pos:[], peaks:[]};
//      arr.forEach((value, index)=>{
//         var restOfArray = arr.slice(index);
//         // console.log('restOfArray :', restOfArray);
//         let checkDownPeaks = restOfArray.every((elem) => elem <= value);//slice the rest of the array to check if there is another value
//         let checkIfAllEqual = restOfArray.every((elem) => elem == value);
//         (arr[index - 1] < arr[index] && arr[index] >= arr[index + 1]) ? console.log([index]) : 0;
//         if((arr[index - 1] < arr[index] && arr[index] > arr[index + 1]) ||
//          ((arr[index - 1] < arr[index] && arr[index] == arr[index + 1]) && checkDownPeaks && !checkIfAllEqual)) {
//             finalObj.peaks.push(value);
//             finalObj.pos.push(index);
//     }
//      })
//     return finalObj;
//   }

// function pickPeaks(arr){
//   var finalObj = {pos:[], peaks:[]};
//    arr.forEach((value, index)=>{
//       var restOfArray = arr.slice(index);
//       // console.log('restOfArray :', restOfArray);
//       let checkDownPeaks = restOfArray.every((elem) => elem <= value);//slice the rest of the array to check if there is another value
//       let checkIfAllEqual = restOfArray.every((elem) => elem == value);
//       // (arr[index - 1] < arr[index] && arr[index] >= arr[index + 1]) ? console.log([index]) : 0;
//       // console.log(value);
//       if(((arr[index - 1] < arr[index]) && (arr[index] >= arr[index + 1]))){
//         // console.log("first: " + value)
//         finalObj.peaks.push(value);
//           finalObj.pos.push(index);
//       }else if((arr[index - 1] < arr[index] && arr[index] == arr[index + 1]) && checkDownPeaks && !checkIfAllEqual) {
//           finalObj.peaks.push(value);
//           finalObj.pos.push(index);
//           // console.log("second: " + value)
//   }
//   })
//   return finalObj;
// }


function pickPeaks(arr){
  var finalObj = {pos:[], peaks:[]};
   arr.forEach((value, index)=>{
      var restOfArray = arr.slice(index);
      // console.log('restOfArray :', restOfArray);
      let checkDownPeaks = restOfArray.every((elem) => elem <= value);//slice the rest of the array to check if there is another value
      let checkIfAllEqual = restOfArray.every((elem) => elem == value);
      // (arr[index - 1] < arr[index] && arr[index] >= arr[index + 1]) ? console.log([index]) : 0;
      // console.log(value);
      if(((arr[index - 1] < arr[index] && arr[index] == arr[index + 1]) && checkDownPeaks && !checkIfAllEqual)){
        // console.log("first: " + value)
        finalObj.peaks.push(value);
          finalObj.pos.push(index);
      }else if((arr[index - 1] < arr[index]) && (arr[index] >= arr[index + 1]) && !checkIfAllEqual) {
          finalObj.peaks.push(value);
          finalObj.pos.push(index);
          // console.log("second: " + value)
  }
  })
  return finalObj;
}



    // console.log('Test1: ' , pickPeaks([1,2,3,6,4,1,2,3,2,1])) //, {pos:[3,7], peaks:[6,3]});
    // console.log('Test2: ', pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3])) //, {pos:[3,7], peaks:[6,3]});
    // console.log('Test3: ', pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])) //, {pos:[3,7,10], peaks:[6,3,2]});
    // console.log('Test4: ', pickPeaks([2,1,3,1,2,2,2,2,1])) //, {pos:[2,4], peaks:[3,2]});
    console.log('Test5: ' , pickPeaks([2,1,3,1,2,2,2,2])) //, {pos:[2], peaks:[3]});
    // console.log(pickPeaks([2,1,3,2,2,2,2,5,6])) //, {pos:[2], peaks:[3]});
    // console.log(pickPeaks([2,1,3,2,2,2,2,1])) //, {pos:[2], peaks:[3]});
    console.log('Test8: ', pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3])) //, {pos:[2,7,14,20], peaks:[5,6,5,5]});
    // console.log(pickPeaks([])) //,{pos:[],peaks:[]});
    // console.log(pickPeaks([1,1,1,1])) //,{pos:[],peaks:[]});

    // console.log("twenty: " ,pickPeaks([10,  0,  2,  1, 0,  6,  6, -4, -4, 15, -2,11,  8, 12, -1, 8,  8,  2, -3,  6,  3,  9, 7,  2,  1, -3, 0, -1, 15, -4, 15, 12.6,12, -1,  0,  4, 6, 13,  7, -3, 15,  8,  7,-4,  0]));

// console.log("twenty one: " ,pickPeaks([
//   9, -3, -2, 14,  2, 8, -4, 9,
//   4, 13, 13, 15, -3, 8,  0, 5,
//   5,  3, -3, -1,  0, 2, 13, 0,
//   6,  6,  0
// ])); //expected { pos: [ 3, 5, 7, 11, 13, 22, 24 ],peaks: [ 14, 8, 9, 15, 8, 13, 6 ] }

// console.log("twenty two: " ,pickPeaks([
//   -3, 3,  9, 14, -1, 10, -3, 13, 11,
//   -2, 4, 14,  6, -4, -3,  1, 14, 15,
//   -3, 0,  3,  4,  4, -4,  4, 14, 15,
//   -2, 0,  0, -3,  0, 12,  1
// ])); //expected { pos: [ 3, 5, 7, 11, 17, 26, 32 ], peaks: [ 14, 10, 13, 14, 15, 15, 12 ] }

// console.log("twenty three: " ,pickPeaks([
//     7, 14,  4,  0, 12, -2, 10,  7, -2, 9,
//     1, 14, 10, 10,  8, -2,  3, 10, 10, 4,
//    12, 15,  5, 15, -2,  3,  6, -1,  6, 0,
//     8,  5,  9,  4, 12, 10, -4, -1,  5, 0,
//     1, -1
//  ])); //expected { pos: [ 1, 4, 6, 9, 11, 21, 23, 26, 28, 30, 32, 34, 38, 40 ],peaks: [ 14, 12, 10, 9, 14, 15, 15, 6, 6, 8, 9, 12, 5, 1 ] }


// console.log("twenty four: " ,pickPeaks([
//   -3,  8,  0, 13,  6,  7,  9,  2, 14, -2,
//   13, 13, 10,  9, 14, -3,  0, 12,  5, -2,
//   14, 12, -4,  4,  9, -1,  4,  6, 13, 13,
//    0,  5,  8, -4, -3,  7, -3
// ])); //expected { pos: [ 1, 3, 6, 8, 14, 17, 20, 24, 28, 32, 35 ],
// // peaks: [ 8, 13, 9, 14, 14, 12, 14, 9, 13, 8, 7 ] }


// console.log("twenty five: " ,pickPeaks([
//   7,  7, -2, 5,
//   5, -3,  5, 9
// ]));  //,{pos:[],peaks:[]});

console.log("twenty six: " ,pickPeaks([
  15,  9,  0,  2, -1, 11,  2, -2, 11,
  14,  0, 10, 12, 15, 10, 10,  2, -4,
   2, -1,  5,  9, -2,  3, 15,  8,  2,
   7, 11, 11,  5, 13, 10, -2, 11
 ]));
//  expected { pos: [ 3, 5, 9, 13, 18, 21, 24, 28, 31 ],
//   peaks: [ 2, 11, 14, 15, 2, 9, 15, 11, 13 ] }

// console.log("twenty seven: " ,pickPeaks([ 14, 1, 11, -3, -2, 7, 7, 1, 13, 12]));
//,{ pos: [ 2, 5, 8 ], peaks: [ 11, 7, 13 ] });
