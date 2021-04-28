//only 28 characters!!
// weirdReverse=a=>a.map((x,i)=>a[a.length-1-i]); //45 char
// weirdReverse=a=>[...a].map(a.pop,a); //36 char
// weirdReverse=a=>a.sort((a,b)=>b-a); //35 char
// weirdReverse=a=>a.sort(_=>1) //28!! char
weirdReverse=a=>a.sort(b=>1) //28!! char


var arr = weirdReverse([1,2,3,4,5]); // return [5,4,3,2,1]
console.log('arr :', arr);
// Test.describe("weirdReverse([1,2,3,4,5])", function() {
//     var arr = weirdReverse([1,2,3,4,5]);
//     Test.it("Should return [5,4,3,2,1]", function() {
//       Test.assertSimilar(arr, [5,4,3,2,1], 'Array must be reversed');
//     });
//   })