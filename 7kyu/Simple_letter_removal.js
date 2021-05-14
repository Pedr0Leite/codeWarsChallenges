function solve(s, k) {
  var abc = [..."abcdefghijklmnopqrstuvwxyz"];
abc.forEach(letter=>{
    console.log(s.indexOf(letter) != -1);
    console.log(letter);
    // if(k > 0){
    //     console.log(k);
    //     console.log(s);
    // if(s.indexOf(letter) == 1){
    //     s = s.replace(letter, "");
    //     k--
    // }
    // }
});

// console.log(s)

}

// solve("abracadabra", 1); //'bracadabra
// solve("abracadabra", 2); //'brcadabra'
solve("abracadabra", 6); //'rcdbr');
// solve("abracadabra", 8); //'rdr');
// solve("abracadabra", 50); //,'');
