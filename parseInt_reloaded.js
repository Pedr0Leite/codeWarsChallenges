//This is a 4kyu

function parseInt(string) {
  var numbObj = {
'one':1, 
'two':2,
'three':3,
'four':4,
'five':5,
'six':6,
'seven':7,
'eight':8,
'nine':9,
'zero':0,
'ten':10,
'eleven':11,
'twelve':12,
'thirteen':13,
'fourteen':14,
'fifteen':15,
'sixteen':16,
'seventeen':17,
'eighteen':18,
'nineteen':19,
'twenty':20,
'thirty':30,
'forty':40,
'fifty':50,
'sixty':60,
'seventy':70,
'eighty':80,
'ninety':90,
'hundred':100,
'thousand':1000,
'million':1000000
  };
  let hundred = false;
  let thousand = false;
  let final = 0;
  let tempValue = 0;
  
  string = string.includes('and') ? string.replace(/ and/g, '') : string;
  let s = string.split(' ');

  s.forEach(w=>{
    if(w.includes('-')){
      let temp = w.split('-');
      final += (numbObj[temp[0]] + numbObj[temp[1]]);
      tempValue = (numbObj[temp[0]] + numbObj[temp[1]]);
    }else{
      if(w == 'hundred'){
        final += tempValue * 100 - tempValue;
        hundred = true;
      }else if( w == 'thousand'){
        if(hundred == true){
          final = final * 1000;
          hundred = false;
        }else{
          final += tempValue * 1000 - tempValue;
        }
      }else if(w == 'million'){
        if(thousand == true){
          final = final * 1000
          thousand = false;
        }else{
          final += tempValue * 1000000 - tempValue;
        }
      }else{
        tempValue = numbObj[w];
        final += tempValue;
      }
    }
    // console.log('tempValue :', tempValue);
  })
    console.log('A final :', final);
    return final;
}

// parseInt('one'); //, 1);
// parseInt('twenty')//, 20);
// parseInt('sixty-six')//, 66);
// parseInt('thirty-seven')//, 37);
// parseInt('two hundred forty-six') //, 246);
// parseInt('two hundred and ninety-nine') //, 299);
// parseInt('six hundred sixty-six thousand six hundred sixty-six') //, 666.666);
// parseInt('seven hundred thousand') //, 700.000);
// parseInt('fourteen thousand five hundred sixty-seven') //, 14.567);
parseInt('one hundred and sixty-four thousand one hundred and ninety-seven') //, 164.197);

// 'one':1, 
// 'two':2,
// 'three':3,
// 'four':4,
// 'five':5,
// 'six':6,
// 'seven':7,
// 'eight':8,
// 'nine':9,
// 'zero':0,
// 'ten':10,
// 'eleven':11,
// 'twelve':12,
// 'thirteen':13,
// 'fourteen':14,
// 'fifteen':15,
// 'sixteen':16,
// 'seventeen':17,
// 'eighteen':18,
// 'nineteen':19,
// 'twenty':20,
// 'thirty':30,
// 'forty':40,
// 'fifty':50,
// 'sixty':60,
// 'seventy':70,
// 'eighty':80,
// 'ninety':90,
// 'one hundred':100,
// 'one thousand':1000,
// 'one million':1000000


// 1: 'one',
// 2: 'two',
// 3: 'three',
// 4: 'four',
// 5: 'five',
// 6: 'six',
// 7: 'seven',
// 8: 'eight',
// 9: 'nine',
// 0: 'zero',
// 10: 'ten',
// 11: 'eleven',
// 12: 'twelve',
// 13: 'thirteen',
// 14: 'fourteen',
// 15: 'fifteen',
// 16: 'sixteen',
// 17: 'seventeen',
// 18: 'eighteen',
// 19: 'nineteen',
// 20: 'twenty',
// 30:'thirty',
// 40:'forty',
// 50:'fifty',
// 60:'sixty',
// 70:'seventy',
// 80:'eighty',
// 90:'ninety',
// 100:'one hundred',
// 1000:'one thousand',
// 100000:'one million'