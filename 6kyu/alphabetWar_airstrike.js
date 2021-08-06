function alphabetWar(fight){
const regEx = /[aA-zZ]\*{1,}[aA-zZ]|[aA-zZ]\*{1,}|\*{1,}[aA-zZ]/g

fight = fight.replace(regEx,'');

if(fight == ''){
    return "Let's fight again!";
}

    const left = {
      'w': 4,
      'p': 3,
      'b': 2,
      's': 1,
    };
    const right = {
      'm': 4,
      'q': 3,
      'd': 2,
      'z': 1,
    };
  
    let rightCount = 0;
    let leftCount = 0;
    
    [...fight].forEach((x) => {
          Object.keys(right).indexOf(x) != -1 ? rightCount+=right[x] : Object.keys(left).indexOf(x) != -1 ?  leftCount+=left[x] : 0;
      });
      
  return rightCount > leftCount ? "Right side wins!" : rightCount < leftCount ? "Left side wins!" : "Let's fight again!";
  
}

// console.log(alphabetWar("z"))// "Right side wins!" );
// console.log(alphabetWar("****"))// "Let's fight again!" );
// console.log(alphabetWar("z*dq*mw*pb*s"))// "Let's fight again!" );
// console.log(alphabetWar("zdqmwpbs"))// "Let's fight again!" );
// console.log(alphabetWar("zz*zzs"))// "Right side wins!" );
// console.log(alphabetWar("sz**z**zs"))// "Left side wins!" );
// console.log(alphabetWar("z*z*z*zs"))// "Left side wins!" );
// console.log(alphabetWar("*wwwwww*z*"))// "Left side wins!" );