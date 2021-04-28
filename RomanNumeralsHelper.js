var RomanNumerals = {
    'valueMap': {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500,'M':1000},
    'valueMap2': {'1':'I', '5':'V', '10':'X', '50':'L', '100':'C', '500':'D','1000':'M'},
    'the4and9arr' : ['CM','XC','IX','CD','XL','IV'],
    'the4and9' : {900:'CM', 90:'XC', 9:'IX', 400:'CD', 40:'XL', 4:'IV'},
    'getKeyByValue': function(object,value){return Object.keys(object).find(key => object[key] === value)},
    'toRoman': function(number){
        let numbers = [...number.toString()];
        let numbLength = [...number.toString()].length;
        let finalNumb = [];
        if(numbLength == 4){
        //First number to the left
        if(numbers[0]){
            finalNumb.push('M'.repeat(numbers[0]));
        }
         //Second number to the left
        if(numbers[1] == 4){
            finalNumb.push('CD');
        }else if(numbers[1] == 9){
            finalNumb.push('CM');
        }else{
            if(numbers[1] >= 5){
                finalNumb.push('D' + 'C'.repeat(numbers[1] - 5));
            }else{
                finalNumb.push('C'.repeat(numbers[1]));
            }
        }
         //Third number to the left
        if(numbers[2] == 4){
            finalNumb.push('XL');
        }
        else if(numbers[2] == 9){
            finalNumb.push('XC');
        }
        else{
            if(numbers[2] >= 5){
                finalNumb.push('L' + 'X'.repeat(numbers[2] - 5));
            }else{
                finalNumb.push('X'.repeat(numbers[2]));
            }
        }
        //Forth number to the left
        if(numbers[3] == 4){
            finalNumb.push('IV');
        }else if(numbers[3] == 9){
            finalNumb.push('IX');
        }else{
            if(numbers[3] >= 5){
                finalNumb.push('V' + 'I'.repeat(numbers[3] - 5));
            }else{
                finalNumb.push('I'.repeat(numbers[3]));
            }
        }
        }
        else if(numbLength == 3){
        
            if(numbers[0] == 4){
                finalNumb.push('CD');
            }else if(numbers[0] == 9){
                finalNumb.push('CM');
            }else{
                if(numbers[0] >= 5){
                    finalNumb.push('D' + 'C'.repeat(numbers[0] - 5));
                }else{
                    finalNumb.push('C'.repeat(numbers[0]));
                }
            }
             //Third number to the left
            if(numbers[1] == 4){
                finalNumb.push('XL');
            }
            else if(numbers[1] == 9){
                finalNumb.push('XC');
            }
            else{
                if(numbers[1] >= 5){
                    finalNumb.push('L' + 'X'.repeat(numbers[1] - 5));
                }else{
                    finalNumb.push('X'.repeat(numbers[1]));
                }
            }
            //Forth number to the left
            if(numbers[2] == 4){
                finalNumb.push('IV');
            }else if(numbers[2] == 9){
                finalNumb.push('IX');
            }else{
                if(numbers[2] >= 5){
                    finalNumb.push('V' + 'I'.repeat(numbers[2] - 5));
                }else{
                    finalNumb.push('I'.repeat(numbers[2]));
                }
            }

        }
        else if(numbLength == 2){

            if(numbers[0] == 4){
                finalNumb.push('XL');
            }
            else if(numbers[0] == 9){
                finalNumb.push('XC');
            }
            else{
                if(numbers[0] >= 5){
                    finalNumb.push('L' + 'X'.repeat(numbers[0] - 5));
                }else{
                    finalNumb.push('X'.repeat(numbers[0]));
                }
            }
            //Forth number to the left
            if(numbers[1] == 4){
                finalNumb.push('IV');
            }else if(numbers[1] == 9){
                finalNumb.push('IX');
            }else{
                if(numbers[1] >= 5){
                    finalNumb.push('V' + 'I'.repeat(numbers[1] - 5));
                }else{
                    finalNumb.push('I'.repeat(numbers[1]));
                }
            }

        }
        else{
            if(numbers[0] == 4){
                finalNumb.push('IV');
            }else if(numbers[0] == 9){
                finalNumb.push('IX');
            }else{
                if(numbers[0] >= 5){
                    finalNumb.push('V' + 'I'.repeat(numbers[0] - 5));
                }else{
                    finalNumb.push('I'.repeat(numbers[0]));
                }
            }
        }
        return finalNumb.join('');
    },
    'fromRoman':function(string){
        var sumNumb = 0;
        var theString = string;
        this.the4and9arr.forEach(value=>{
            if(theString.indexOf(value) != -1){
                theString = theString.replace(value,'');
                var trueValue=this.getKeyByValue(this.the4and9, value)
                sumNumb += Number(trueValue);
            }
        })

        var stringArr = [...theString];
        stringArr.forEach(value =>{
            var trueValue=this.getKeyByValue(this.valueMap2, value)
            sumNumb += Number(trueValue);
        })

        return sumNumb;
    }
}



// | Symbol | Value |
// |----------------|
// | I      |  1    |
// | V      |  5    |
// | X      |  10   |
// | L      |  50   |
// | C      |  100  |
// | D      |  500  |
// | M      |  1000 |

// RomanNumerals.toRoman(1000)//, 'M')
// RomanNumerals.toRoman(9444)//, 'M')
// RomanNumerals.toRoman(4599)//, 'MMMMCCXCIX')
// RomanNumerals.toRoman(999)//, "CMXCIX")
// RomanNumerals.toRoman(4)//, 'IV')
// RomanNumerals.toRoman(1)//, 'I')
// RomanNumerals.toRoman(1991)//, 'MCMXCI')
// RomanNumerals.toRoman(2006)//, 'MMVI')
//RomanNumerals.toRoman(2020)//, 'MMXX')
// RomanNumerals.fromRoman('XXI')//, 21)
// RomanNumerals.fromRoman('I')//, 1)
// RomanNumerals.fromRoman('III')//, 3)
//RomanNumerals.fromRoman('IV')//, 4)
// RomanNumerals.fromRoman('MMVII')//, 2007)
// RomanNumerals.fromRoman('MDCLXIX')//, 1669)
// RomanNumerals.fromRoman('MCMXCIX')//, 1999)
// RomanNumerals.fromRoman('MCDXLIV')//, 1444)