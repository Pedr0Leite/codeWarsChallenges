decodeMorse = function (morseCode) {
  var morseObj = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.----': 1,
    '..---': 2,
    '...--': 3,
    '....-': 4,
    '.....': 5,
    '-....': 6,
    '--...': 7,
    '---..': 8,
    '----.': 9,
    '-----': 0,
    '.-.-.-': '.',
    '--..--': ',',
    '...---...': 'SOS',
    '..--..':'?',
    '-.-.--':'!'
  };

  if(morseCode == '... --- ...' || morseCode == '...---...'){
    return 'SOS'
}
  let decodeString = '';
  let words = morseCode.trim().split('  '); //first split each word
//   console.log('words :', words);
  let letters = words.forEach(x =>{
      var tempWord = x.split(' ');
      tempWord.forEach(y=>{
          if(y == ''){
            decodeString += ' ';
            }else{
                decodeString += morseObj[y];
            }
        })
    }) 
    console.log('decodeString :', decodeString);
    return decodeString;
};

decodeMorse('.... . -.--   .--- ..- -.. .'); //, 'HEY JUDE')
decodeMorse('... --- ...'); //, 'SOS')
decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-'); //SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.