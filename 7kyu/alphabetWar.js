function alphabetWar(fight) {
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

// alphabetWar("z") // , "Right side wins!" ) ;
// alphabetWar("zdqmwpbs") // , "Let's fight again!" ) ;
// alphabetWar("zzzzs") //, "Right side wins!" ) ;
// alphabetWar("wwwwww") //, "Left side wins!");
// alphabetWar("duwrvfjqdrobwz") //, "Left side wins!");
// console.log(alphabetWar("zwxbqhz")); //, "Left side wins!");
