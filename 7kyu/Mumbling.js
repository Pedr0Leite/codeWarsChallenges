// function accum(s) {
  // var array = [];
  // [...s].forEach((letter, index) => {
  //   try{
  //     array.push(letter.repeat(index+1))
  //   }catch(err){
  //     console.log("error!! -> " + err);
  //   }
  // });
  // var final = [];
  // array.forEach(x => {(
  //   (x.length > 1) ? (final.push(x[0].toUpperCase() + x.substring(1).toLowerCase())) : (final.push(x[0].toUpperCase())));
  // });

  // return final.join("-");
// }

const accum = (s) => s.split("").map((x,y)=> (x.toUpperCase() + x.toLowerCase().repeat(y))).join("-");

console.log(accum("ZpglnRxqenU")); //, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// console.log(accum("NyffsGeyylB")); //, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// console.log(accum("MjtkuBovqrU")); //, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// console.log(accum("EvidjUnokmM")); //, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// console.log(accum("HbideVbxncC")); //, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
