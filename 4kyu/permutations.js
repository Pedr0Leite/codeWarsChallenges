function permutations(string) {
    
    if(string.length < 2){
        return [string];
    }else{
        let allCombinations = [];
        let before, current, after;
        let incompleteWord, incompletePermutation, newWord;
        
        for(var i=0; i < string.length; i++){
            before = string.slice(0, i); //a, ab, abc
            current = string[i]; //a, b, c
            after = string.slice(i + 1, string.length + 1); //bc, c
            incompleteWord = before + after;
            incompletePermutation = permutations(incompleteWord);

            for(var j=0; j < incompletePermutation.length; j++){
                newWord = current + incompletePermutation[j];
                allCombinations.push(newWord);
            }
        }
        
        return Array.from([... new Set(allCombinations)].sort((a,b) => a - b).filter(x => x.length == string.length));
    }
    
}

// console.log(permutations('aabb'));
console.log(permutations('abc'));
// console.log(permutations('aabb'));
// console.log(permutations('aabb'));
