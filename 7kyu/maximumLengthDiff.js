function mxdiflg(a1, a2) {
let max = [];
a1.forEach(x=>{
    a2.forEach(y=>{
        if(x != undefined && y != undefined)
        max.push(Math.abs(x.length - y.length));
    })
})
return Math.max(...max);
}



var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2)) //, 13);