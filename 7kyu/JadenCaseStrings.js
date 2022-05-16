String.prototype.toJadenCase = function () {
  let tempArr = [];
  var str = this.valueOf();
  str = str.split(' ').forEach(word=>{
      word = word.split('')
      word[0] = word[0].toUpperCase()
      word = word.join('');
      tempArr.push(word)
    })
    
    return tempArr.join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase())