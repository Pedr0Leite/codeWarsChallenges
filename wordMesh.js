function wordMesh(arr) {
    let stringMesh = "";
    let count = 0;
    //For each arr word
    for (var i = 0; i < arr.length; i++) {
        let trueChecks = [];
      //For each letter of each word
      for (var j = 0; j < arr[i].length; j++) {
        //If its not the final word
        if (arr[i + 1] != undefined) {
          //slice the word from 0 to each index
            let temp = arr[i + 1].slice(0, j + 1);
          //if the previous word finished with that piece of the next word
            if (arr[i].endsWith(temp) == true) {
                trueChecks.push(temp);
              }
          }
      }
      //because there can be more than one match, use only the last and long piece of the next word to mesh
      if(trueChecks[trueChecks.length - 1] != undefined){
          stringMesh += trueChecks[trueChecks.length - 1];
          count++
      }
    }
    //The count + 1 is to count the first word of the array
    return count + 1 == arr.length ? stringMesh : 'failed to mesh';
  }

wordMesh(['chlorine','brinemore','oregon','gonzaga','gambino','inoculate']); //, "failed to mesh");
// wordMesh(['california','niagara','arachnophobia','biannual','alumni','nibbles','blessing' ]); //, "niaarabiaalnibles");
// wordMesh(["beacon","condominium"]); //, "conumcal");
wordMesh(["beacon","condominium","umbilical","california"]); //, "conumcal");
// wordMesh(["allow","lowering","ringmaster","terror"]); //, "lowringter");
// wordMesh(["abandon","donation","onion","ongoing"]); //, "dononon");
// wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"]) //"ownhippuscartpher"
