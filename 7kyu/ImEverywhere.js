function i(word) {
    let vowelRegex = /[aeiouAEIOU]/g;
    let consonantRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;
    let vowelCount = ((word.match(vowelRegex) || []).length);
    let consonantCount = ((word.match(consonantRegex) || []).length);
    
    if(word[0] == 'I' || vowelCount >= consonantCount || word[0].toLowerCase() == word[0] || word == ''){
        return 'Invalid word'
    }else{
        return `i${word}`
    }

  }



console.log(i('Phone'))//, 'iPhone');
// console.log(i('World'))//, 'iWorld');
// console.log(i('Human'))//, 'iHuman');
// console.log(i('Programmer'))//, 'iProgrammer');
// console.log(i(''))//,        'Invalid word');
// console.log(i('Inspire'))//, 'Invalid word');
// console.log(i('East'))//,    'Invalid word');
// console.log(i('Peace'))//,   'Invalid word');
// console.log(i('road'))//,    'Invalid word');