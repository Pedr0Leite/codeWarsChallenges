function firstNonConsecutive (arr) {
let numb = [];
arr.forEach((x,index) =>{
    if(x != arr[index + 1] - 1){
        numb.push(arr[index + 1]);
    }
});

return numb != '' ? numb[0] : null;

}


// console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));
// console.log(firstNonConsecutive([1,2,3,6,4,6,7,8]));