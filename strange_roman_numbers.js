// //I, V, X, L == 1, 5, 10, 50
// // solve(1) = 4, because groups of 1 are [I, V, X, L]. 
// // solve(2) = 10, because the groups of 2 are [II, VI, VV, XI, XV, XX, IL, VL, XL, LL] corresponding to [2,6,10,11,15,20,51,55,60,100]. 
// // solve(3) = 20, because groups of 3 start with [III, IIV, IVV, ...etc]

// function solve(n){
//     if(n > 100000000){
//         return;
//     }else{
//     // const letters2 = {"I":1, "V":5, "X":10, "L":50};
//     // console.log(Object.values(letters2));
//     // const letters = ["I", "V", "X", "L"];
//     const letters = [1,5,10,50];
//     let combinations = [];
//     let tempArr = [];

//     // while(n > 0){
//     // letters.forEach((value, index) =>{
//     //     // let randomIndex = Math.floor(Math.random() * letters.length);
//     //     combinations.push(value+letters[index])
//     // })
//     // for(var first in letters){
//     //     // while(n > 0){
//     //         for(var second in letters){
//     //         combinations.push(letters[first] + letters[second]);
//     //     }
//     //     // n--
//     // // }
//     // // }
// // }


// // return [...new Set(combinations)]

// forLoop(n)
// console.log('forLoop(n) :', forLoop(n));

// }
// }

// // console.log(solve(1)); //4
// console.log(solve(2)); //10

// // function test()


// function forLoop(n){
//     if(n < 0){
//         return;
//     }else{
//         var number = forLoop(n - 1);
//         number.push(number[number.length - 1] + number[number - 2]);
//         return number;
//     }
// }


const solve = n => n <= 10 ? [0,4,10,20,35,56,83,116,155,198,244][n] : 49 * n - 247