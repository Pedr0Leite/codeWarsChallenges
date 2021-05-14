function isIsogram(str) {
    let str2 = [...str.toLowerCase()];
    let temp = [];
    let temp2 = true;
    str2.forEach((x) => {
      temp.includes(x) == false ? temp.push(x) : temp2 = false;
    });
    return temp2
  }

// console.log(isIsogram("Dermatoglyphics")); //, true );
// console.log(isIsogram("isogram")); //, true );
// console.log(isIsogram("aba")); //, false, "same chars m
// console.log(isIsogram("moOse")); //, false, "same chars
// console.log(isIsogram("isIsogram")); //, false );
// console.log(isIsogram("")); //, true, "an empty string
