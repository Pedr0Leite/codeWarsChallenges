function getCount(str) {
    let vowelsCount = 0;
    [...str].forEach(letter=>{
      if('aeiou'.includes(letter))
        vowelsCount++
    })
    return vowelsCount;
  }

getCount("abracadabra") //, 5