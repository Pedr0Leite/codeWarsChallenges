function sortVowels(s){
    if(typeof s != 'string'){
        return ''
    }
    let result = '';
    [...s].forEach(letter=>{
      'aeiouAEIOU'.includes(letter) ? result += '|' + letter + '\n' : result += letter + '|\n';
    })
    return result.slice(0,result.length - 1)
  }

console.log(sortVowels('Codewars')) //, 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
// console.log(sortVowels('Rnd Te5T'))//, 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
// console.log(sortVowels(1337))//, '');
// console.log(sortVowels(undefined))//, '');