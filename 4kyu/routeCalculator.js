function calculate(sum){
    const regexLetters = /([A-Za-z])/g;
    const regexAllowed = /([+\-*$])/g;

    const regexSpecial1 = /([%^&/])/g;
    const regexSpecial2 = /([**]{2})/g;


    if(regexLetters.test(sum) == true || regexSpecial1.test(sum) == true || regexSpecial2.test(sum) == true){
        return '400: Bad request';

    }
  
  let sumArr = sum.split(regexAllowed);

  ['$', '*', '-', '+'].forEach(op => {

      for (let i = 0; i < sumArr.length; i++) {

        if(sumArr[i] == op){
            if(op == '$'){
                let tempValue = (+sumArr[i - 1] / +sumArr[i + 1]);
               sumArr[i] = tempValue;
               sumArr.splice(i + 1,1);
               sumArr.splice(i - 1,1);
               i = 0;
            }
            if(op == '*'){
                let tempValue = (+sumArr[i - 1] * +sumArr[i + 1]);
                sumArr[i] = tempValue;
                sumArr.splice(i + 1,1);
                sumArr.splice(i - 1,1);
                i = 0;
                
            }
            if(op == '-'){
                let tempValue = (+sumArr[i - 1] - +sumArr[i + 1]);
                sumArr[i] = tempValue;
                sumArr.splice(i + 1,1);
                sumArr.splice(i - 1,1);
                i = 0;
                
            }
            if(op == '+'){
                let tempValue = (+sumArr[i - 1] + +sumArr[i + 1]);
                sumArr[i] = tempValue;
                sumArr.splice(i + 1,1);
                sumArr.splice(i - 1,1);
                i = 0;
            }
        }
        
}
}) 

return sumArr;

}


//   ['1000', '$', '2.5','$','5', '+','5', '-', '5','+', '6', '$','6']
//   ['400','$','5', '+','5', '-', '5','+', '6', '$','6']
//   ['80', '+','5', '-', '5','+', '6', '$','6']
//   ['80', '+','5', '-', '5','+', '1']
//   ['85', '-', '5','+', '1']
//   ['80','+', '1']
//   ['81']
//    arr[i] = valor
//    arr[i-1] && arr[i +1] - delete
//   console.log(calculate('1000$2.5$5+5-5+6$6'))// 81))

//(division => multiplication => subtraction => addition)

/**
 * Allowed
 * '+' = add
 * '-' = subtract
 * '*' = multiply
 * '$' = divide
 * 
 * Not Allowed
 * %
 * ^
 * **
 * &
 * /
 * 
*/

    // console.log(calculate('1'))// 1))
    // console.log(calculate('1.1'))// 1.1))
    // console.log(calculate('1+1'))// 2))
    // console.log(calculate('1-1'))// 0))
    // console.log(calculate('2$2'))// 1))
    // console.log(calculate('2*2'))// 4))
    // console.log(calculate('1.1+1.9'))// 3))
    // console.log(calculate('9$4'))// 2.25))
    // console.log(calculate('1.5*3'))// 4.5))
    // console.log(calculate('5-43.2'))// -38.2))
    // console.log(calculate('5+5+5+5'))//  20))
    // console.log(calculate('5-5-5-5'))//  -10))
    // console.log(calculate('5*5*5*5'))//  625))
    // console.log(calculate('5$5$5$5'))//  0.04))
    // console.log(calculate('1+1-1'))//  1))
    // console.log(calculate('5*6$2+5-10'))// 10))
    // console.log(calculate('1*1*1*1*1*1$1$1$1$1+1-1+9-1'))// 9))
    // console.log(calculate('5*6$2&5-10'))// '400: Bad request'))
    // console.log(calculate('5/10'))// '400: Bad request'))
    // console.log(calculate('p'))// '400: Bad request'))
    // console.log(calculate('9^9'))// '400: Bad request'))