function sumStrings(a, b) {
  if (a == "" || b == "") {
    return a || b;
  } else if (a != "" && b != "") {
    var [x, y] =
      a.toString().length >= b.toString().length
        ? [[...a.toString()].reverse(), [...b.toString()].reverse()]
        : [[...b.toString()].reverse(), [...a.toString()].reverse()];
  }
  let result = [];
  x.push(0);
  let leftover = 0;
  x.forEach((value, index) => {
    let sumOfNum =
      y[index] != undefined
        ? Number(value) + Number(y[index]) + leftover
        : Number(value) + leftover;
    if (sumOfNum > 9) {
      leftover = 1;
      sumOfNum = sumOfNum - 10;
    } else {
      leftover = 0;
    }
    result.push(sumOfNum);
  });
  return [...result].reverse().join("").replace(/^0+/, "");
}

// console.log("Test: " + sumStrings("800", "9567")); // => '10367'
// console.log("Test: " + sumStrings('123','456')); //=>'579'
// console.log("Test: " + sumStrings('','87238')); // => '87238'

// inputs a, b

// cria arr1 = Array(a) e reverte
// cria arr2 = Array(b) e reverte

// cria resposta = Array
// cria sobra = 0
// cria index = numero

// enquanto indx nao estourar
// 	cria x = arr1[index]
// 	cria y = arr2[index] //verifica se existe antes. se nao, eh 0

// 	soma = x + y + sobra
// 	reset sobra

// 	se soma for mais que 9
// 		sobra = 1
// 		soma - 10

// 	adiciona soma em resposta
// 	index + 1

// fim enquanto

// reverte resposta e transforma em string


// function sumStrings(a, b) {
//   let sum = "", temp, nxtDec = 0, a1, b1, bigSum;

//   if(b.length > a.length){
//       temp = b;
//       b = a;
//       a = temp;
//   }

//   for (let i = 0; i < a.length; i++) {
//       a1 = parseInt(a.charAt(a.length - 1 - i)) ? parseInt(a.charAt(a.length - 1 - i)) : 0; 
//       b1 = (parseInt(b.charAt(b.length - 1 - i))) ? parseInt(b.charAt(b.length - 1 - i)) : 0;  
//       temp = (nxtDec + a1 + b1).toString();
//       bigSum = temp.charAt(temp.length - 1);
//       nxtDec = parseInt(temp.substr(0, temp.length - 1)) ? parseInt(temp.substr(0, temp.length - 1)) : 0;
//       sum = (i === a.length - 1) ? temp + sum : bigSum + sum;
//   }

//   return sum.replace(/^0+/, "");
// }