function removeExclamationMarks(s) {
    const regex = /!+/g;
    return s.replace(regex,'');
  }

console.log(removeExclamationMarks("Hello World!!!")); //, "Hello World"