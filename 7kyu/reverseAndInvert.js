function reverseInvert(array){
  return array.reduce((acc, i) => {
    if(typeof(i) == "number" && String(i).indexOf('.') == -1){
        if(i >= 0){
            acc.push(-Number(String(i).split('').reverse((a,b) => a - b).join('')));
        }else{
            acc.push(Number(String(Math.abs(i)).split('').reverse((a,b) => a - b).join('')));
        }
    }
    return acc
  }, []);
}

// reverseInvert([1,2,3,4,5]);//, [-1,-2,-3,-4,-5]);
// reverseInvert([-10]);//, [1]);
// reverseInvert([-9,-18,99]);//, [9,81,-99]);
reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]);//,[-1,-21,-78,24,-5]);
// reverseInvert([]);//, []);

// [1,12,'a',3.4,87,99.9,-42,50,5.6] --> [-1,-21,-78,24,-5]