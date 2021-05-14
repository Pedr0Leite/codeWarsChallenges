function highAndLow(numbers){
    numbers = numbers.split(' ').map(x=>Number(x));
    // return `${numbers.reduce((a,b)=>{return Math.max(a,b)})} ${numbers.reduce((a,b)=>{return Math.min(a,b)})}`
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
  }

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) //, "542 -214");
