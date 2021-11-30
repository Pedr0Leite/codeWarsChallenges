// const f = (n, m) => {return (Array.from(Array(n + 1).keys())).reduce((prev,curr)=>{return prev + curr % m}, 0)};


// function f(n,m){
//     let sum = 0;
//     do{
//         sum += n%m
//         n--
//     }while(n > 0);
//     return sum;
// }

// function f(n,m){
//     let sum = 0;
//     while(n > 0){
//         sum += n%m
//         n--
//     }
//     return sum;
// }


// function f(n,m){
// var sum = 0;
// for(var i = 0; i < n + 1; i++){
//    sum += i%m
// }
// return sum
// }

// const f = (n, m) => {return (Array.from(Array(n + 1).keys())).map(x => x % m).reduce((prev,curr)=>{return prev + curr}, 0)};

function f(n,m){
    return Math.floor(n / m) * (m * (m -1) / 2) + n % m * (n % m + 1) / 2;
}

// console.log(f(15,10)) //60
// console.log(f(20, 20)) //, 190))