function reverse(n){

var reversedNumber = 0;
while(n > 0){
    reversedNumber = (reversedNumber * 10) + (n % 10);
    n = Math.floor(n / 10);
}
console.log(reversedNumber)

  }

reverse(1234) //, 4321);
// reverse(10987)//, 78901);
// reverse(1020)//, 201);