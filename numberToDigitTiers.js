function createArrayOfTiers(num) {
    return [...num.toString()].reduce((acc,curr, index)=>{
    acc.push(num.toString().slice(0, index + 1))
    return acc
    },[]);
}

//------------------OR------------------
function createArrayOfTiers(num) {
    return Array.from(String(num)).map((n, i) => String(num).substr(0,i+1));
}

console.log(createArrayOfTiers(420));