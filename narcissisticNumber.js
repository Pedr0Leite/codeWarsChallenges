// //  A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
// //  In this Kata, we will restrict ourselves to decimal (base 10).

function narcissistic(value) {
    let numbers = value.toString().split("");
    let exponencial_number = numbers.length;
    let numbers_calc = [];
    
    numbers.forEach(x => numbers_calc.push(Math.pow(x, exponencial_number)));
    
    let result = numbers_calc.reduce((x,y) => x + y, 0);

    return (value === result) ? true : false;
}

// // console.log('narcissistic :', narcissistic(2345));