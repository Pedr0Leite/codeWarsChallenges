
const isSquare = (n) => {return (n == (Math.sqrt(n) * Math.sqrt(n)) && Math.sqrt(n) == Math.floor(Math.sqrt(n)) || n == 0) ? true : false};

// console.log(isSquare(-1))//, false,
// console.log(isSquare( 0))//, true, 
// console.log(isSquare( 3))//, false,
// console.log(isSquare( 4))//, true, 
// console.log(isSquare(25))//, true, 
// console.log(isSquare(26))//, false,
// console.log(isSquare(55))//, true,
// console.log(isSquare(35))//, true,
// console.log(isSquare(42))//, false,