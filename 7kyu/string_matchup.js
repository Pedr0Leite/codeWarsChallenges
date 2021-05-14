function solve(a,b){
  var count = 0;
  var arr = [];

  b.forEach(string=>{
  a.forEach(value =>{
    if(value == string){
      count++
    }
  })
  arr.push(count);
  count = 0;
})
  return arr;
}

console.log(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']));