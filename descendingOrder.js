const descendingOrder = (n) => Number((n + "").split("").sort((a,b)=> b - a).join(""));

console.log(descendingOrder(2110));