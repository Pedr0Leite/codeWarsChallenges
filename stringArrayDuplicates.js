function dup(s) {
    return s.map((x) => {
       return x.split("").filter((y,index)=> y != x[index+1] ? y : "").join("")
    });
  }

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]));
//,['codewars','picaniny','hubububo']
