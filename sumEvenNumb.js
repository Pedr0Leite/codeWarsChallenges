function sumEvenNumbers(input) {
   return input.reduce((acc,curr)=>{
       return (curr % 2 === 0) ? (acc + curr) : acc;
   }, 0);
  }
  
  console.log('END: ' + sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //,30