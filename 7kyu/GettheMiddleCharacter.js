function getMiddle(s) {
  return s.length % 2 != 0
    ? s[Math.floor(s.length / 2)]
    : s[Math.floor(s.length / 2) - 1] + s[Math.ceil(s.length / 2)];
}

console.log(getMiddle("test")); //,"es");
console.log(getMiddle("testing")); //,"t");
console.log(getMiddle("middle")); //,"dd");
console.log(getMiddle("A")); //,"A");



// const getMiddle = s => s.split('').filter((c,index) => s.length % 2 ? index == (s.length - 1) / 2 : index == s.length / 2 || index == (s.length / 2) -1).join('')