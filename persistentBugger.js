function persistence(num) {
   return (num.toString().length > 1) ? (bugger(num)) : (0);
}

function bugger(num){
   var count = 0;
   while(num.toString().length > 1){
            let arrNum = [...num.toString()];
            num  = arrNum.reduce((acc,valorAct) =>{return acc * valorAct});
            count++
   }
   return count
}

// persistence(39)// === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

console.log("999: " + persistence(999)); // === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

//persistence(4) === 0 // because 4 is already a one-digit number