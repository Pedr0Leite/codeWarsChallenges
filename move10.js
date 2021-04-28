function moveTen(s) {
  var letters = [...s];
  var newLetters = [];
  letters.forEach((x) => {
    if (x.charCodeAt() + 10 > 122) {
      let number = (x.charCodeAt() + 10) - 122;
      newLetters.push(String.fromCharCode(96 + number));
    } else {
      newLetters.push(String.fromCharCode(x.charCodeAt() + 10));
    }
  });
  return newLetters.join("");
}

// const moveTen = (s) => ([...s].forEach((x) => {(x.charCodeAt() + 10 > 122) ? newLetters.push(String.fromCharCode(96 + ((x.charCodeAt() + 10) - 122))) : newLetters.push(String.fromCharCode(x.charCodeAt() + 10))})).join("");

moveTen("testcase"); //, "docdmkco");
// moveTen("codewars"), "mynogkbc");
// moveTen("exampletesthere"), "ohkwzvodocdrobo");
