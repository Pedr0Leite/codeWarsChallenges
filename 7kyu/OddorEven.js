function oddOrEven(array) {
    if(array == '' || array == 0){
        return "even"
    }else{
        let temp = ([...array].reduce((curr,acc)=>curr+acc,0));
        return temp % 2 == 0 ? "even" : "odd";
    }
 }

//------------------------------------ OR ------------------------------

 const oddOrEven = (array) => (array == '' || array == 0) ? "even" :  ([...array].reduce((curr,acc)=>curr+acc,0) % 2 == 0 ? "even" : "odd");

// console.log('oddOrEven([0]) :', oddOrEven([0]));
// oddOrEven([1]) //, 'odd')
// oddOrEven([])//, 'even')
// oddOrEven([0, -1, -5]) //, 'even')
console.log('oddOrEven([0, -1, -5]) :', oddOrEven([0, -1, -5]));