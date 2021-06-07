const solution = (str, ending) => str.slice(str.length - ending.length, str.length) == ending ? true : false;

console.log(solution('abcde','cde'));
