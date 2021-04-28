function wordsToMarks(string){
    var sum = [...string].reduce((acc,curr)=>
    acc + (curr.charCodeAt() - 96)
    , 0)
    return sum;
}

wordsToMarks("attitude") //, 100);
// wordsToMarks("friends") //, 75);
// wordsToMarks("family") //, 66);
// wordsToMarks("selfness") //, 99);
// wordsToMarks("knowledge") //, 96);