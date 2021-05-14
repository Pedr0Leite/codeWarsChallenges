

// function findMissingLetter(array){
//   var arr = array.map(x=> x.toLowerCase());
//   var alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
//   var firstLetter = alphabet.indexOf(arr[0]);
//   var lastLetter = alphabet.indexOf(arr[array.length - 1]);
//   var slicedArray = alphabet.slice(firstLetter, lastLetter + 1);
//   var missingLetter = slicedArray.filter(letter=>arr.indexOf(letter)==-1);
//   var result;
//   return (array[0] === array[0].toLowerCase()) ? (result = missingLetter[0].toLowerCase() ) : (result = missingLetter[0].toUpperCase());
// }

function findMissingLetter(array){
  var arr = array.map(x=> x.toLowerCase());
  var alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  var slicedArray = alphabet.slice(alphabet.indexOf(arr[0]), alphabet.indexOf(arr[array.length - 1]) + 1);
  var missingLetter = slicedArray.filter(letter=>arr.indexOf(letter)==-1);
  var result;
  return (array[0] === array[0].toLowerCase()) ? (result = missingLetter[0].toLowerCase() ) : (result = missingLetter[0].toUpperCase());
}

console.log(findMissingLetter(['a','b','c','d','f'])); //, 'e');
console.log(findMissingLetter(['O','Q','R','S'])); //, 'P');