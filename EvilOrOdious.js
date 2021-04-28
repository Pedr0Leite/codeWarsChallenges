function evil(n) {
    let number = (n >>> 0).toString(2);
    var count = (number.match(/1/g)).length;
    return (count % 2 == 0) ? "It\'s Evil!" : "It\'s Odious!";
}

console.log(evil(1));
console.log(evil(2));
console.log(evil(3));