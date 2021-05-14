function strToHash(str){
    if(str == ''){
      return {}
    }
    let obj = {};
    let arr = str.split(',');
    arr = arr.map(x=>x.split('='));
    arr.forEach(y=>{
        obj[y[0].trim()] = +y[1];
    })
    return obj;

    // ...
  }


strToHash("a=1, b=2, c=3, d=4"); //, { 'a': 1, 'b': 2, 'c': 3, 'd': 4})