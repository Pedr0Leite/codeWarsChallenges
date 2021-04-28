function loneliest(str) {
    var trimmed = str.trim();
    var arr = [...trimmed];
    let obj1 = {};
    let obj2 = {};
    var countSpace = 0;
    arr.forEach((x)=>{
        if(x == " "){
            countSpace++
        }else if(x != " "){
            obj1[x] = countSpace;
            countSpace = 0;
        }
    })
    var reverse = arr.reverse();
    reverse.forEach((x)=>{
        if(x == " "){
            countSpace++
        }else if(x != " "){
            obj2[x] = countSpace;
            countSpace = 0;
        }
    })
    // console.log('obj1 :', obj1);
    // console.log('obj2 :', obj2);

    function mergedValues(...objs){
        return objs.reduce((o1, o2) =>{
            for(let items in o2){
                if(o2.hasOwnProperty(items)){
                    o1[items] = (o1[items] || 0) + o2[items];
                }
            }
            return o1
        }, {});
    }
    var mergedValues = mergedValues(obj1, obj2);
    var allValues = Object.values(mergedValues);
    var allKeys = Object.keys(mergedValues);

    let maxValue = Math.max(...Object.values(mergedValues));
    let letters = [];
    allValues.forEach((value, index)=>{
        if(value == maxValue)
        letters.push(allKeys[index])
    });
    
    return letters;
}

// console.log(loneliest("a b  c"))//                        -->  ["b"]
// console.log(loneliest("a bcs           d k")); //           -->  ["d"]
// console.log(loneliest( "    a b  sc     p     t   k")); //   -->  ["p"]
// "a  b  c  de"                   -->  ["b", "c"]
// "     a  b  c de        "       -->  ["b"]
// console.log(loneliest("abc")); //                           -->  ["a", "b", "c"]