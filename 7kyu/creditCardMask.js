// return masked string
function maskify(cc) {
if(cc.length > 4){
    let [secondHalf, firstHalf] = [cc.slice(cc.length - 4,cc.length), cc.slice(0, cc.length - 4)];
    // [...secondHalf].forEach(value=>{value.replace(/[A-Za-z0-9]+/,"#")});
    // secondHalf = secondHalf.replace(/[A-Za-z0-9]+/,"#");
    // secondHalf = secondHalf.replace(/(.)(\1+)?/,"#");
    firstHalf = firstHalf.replace(/./g, "#");
 return firstHalf + secondHalf
}else {
    return cc
}
}


console.log(maskify('4556364607935616'));