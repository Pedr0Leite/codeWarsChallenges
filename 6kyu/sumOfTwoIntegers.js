// Task
// Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

// Notes

//     The numbers (a,b) may be positive , negative values or zeros .
//     Returning value will be an integer .
//     Javascript: the Array reduce methods are disabled, along with eval, require, and module .



// const add = (x, y) => { return };
// function getSum(a, b){
//     return Array(a).concat(Array(b)).length;
//   }

// var getSum = function(a, b) {
//     if (b == 0) {
//         return a;
//     } else {
//         let carryValue = (a & b); //calculate if is there any carry we need to add
//         // a is used to hold the sum
//         //carryValue is used to hold left shift carry
//         return getSum(a ^ b, carryValue << 1)
//     }
// };

const getSum = (a,b) => {return b ? getSum(a ^ b, (a & b) << 1) : a};

console.log(getSum(99,1))