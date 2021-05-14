function findOdd(arr) {
    let finalNumber, objValues = arr.reduce((acc, curr) =>{
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc}, {}), organizedValues = Object.entries(objValues).sort((a,b)=>{
        return b[1] - a[1];
    });
        
    organizedValues.forEach((value)=>{
        if(value[1]%2!=0)
        finalNumber= value[0];
    });

return Number(finalNumber);
  }


//   console.log('Test: ' , findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //, 5));
  console.log('Test: ' , findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // -1));
//   console.log('Test: ' , findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])); //, 5));
//   console.log('Test: ' , findOdd([10])); // 10));
//   console.log('Test: ' , findOdd([1,1,1,1,1,1,10,1,1,1,1])); // 10));
//   console.log('Test: ' , findOdd([5,4,3,2,1,5,4,3,2,10,10])); //, 1));