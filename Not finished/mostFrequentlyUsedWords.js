//NOT FINISHED!!
function topThreeWords(text) {
var regexTest = /[a-zA-Z]/;
if(regexTest.test(text) == false){
return [];
}else{
    var textReduced = text.replace(/[`~!@#$%^&*()_|+\-=?;:",.<>/]/gi, "");
    // console.log('textReduced :' , textReduced);
    var arr = textReduced.split(/\s+/);
    // console.log('arr :', arr);
    
    var objectOfValues = arr.reduce((acc, value) =>{
        (value != '' && value != "," && value != "\n" && value != "-" && value != ".") ? (acc[value] = (acc[value] + 1) || 1) : 0;
        return acc;
    }, {});
    
    //------------
    // const ordered = {};
    // Object.keys(objectOfValues).sort().forEach(function(key) {
    //     ordered[key] = objectOfValues[key];
    //   });
      
    //   console.log(JSON.stringify(ordered));
    // console.log('objectOfValues :', objectOfValues);
    var sortedArr = Object.keys(objectOfValues).sort((a,b)=>{return objectOfValues[b]-objectOfValues[a]});
    console.log('sortedArr :', sortedArr);
    // var test = Object.values(objectOfValues).sort((a,b)=>{return objectOfValues[a] > objectOfValues[b] ? 1 : -1})
    // console.log('test :', test);
    
    return sortedArr.slice(0,3)
}
}


// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ['e','d','a'])
  
// console.log(topThreeWords("a a c b b")); // ['a','b','c'])
  
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); //['e','ddd','aa'])

// console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"])
  
// console.log(topThreeWords("  , e   .. ")); // ["e"])

// console.log(topThreeWords("  ...  ")); // [])

// console.log(topThreeWords("  '  ")); // [])

// console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`)); //, ['a','of','on'])

// const str = "abc's test#s //wont won't";
// console.log(str.replace(/[^a-zA-Z ][']/g, ""));