function getDecimal(n){
    return Math.abs(n - (Math.ceil(n))); // fix me 
  }

getDecimal(-1.2) //, 0.2
getDecimal(4.5) //, 0.5
getDecimal(10)