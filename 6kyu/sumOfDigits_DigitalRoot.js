function digital_root(n) {
    let arr = [...String(n)];
    if(arr.length < 0 ){
        return Number(arr[0]);
    }
    else if(arr.length == 1){
        return n;
    }else{
        let num  = arr.reduce((a, b) => Number(a) + Number(b), 0)
        return digital_root(num);
  }
}


 console.log(digital_root(942)); 
//  console.log(digital_root(9)); 
//Examples
//   16  -->  1 + 6 = 7
//        942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2