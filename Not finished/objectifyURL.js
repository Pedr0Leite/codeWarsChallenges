function convertQueryToMap(query) {
    var obj = {};
    let params = new URLSearchParams(query);

    obj = Array.from(params).reduce((acc, curr)=>(
        {...acc, [curr[0]]: curr[1]}
        ),{});
        console.log('obj :', obj);



    // let blocks = [...result.split('&')];
    // // console.log('blocks :', blocks);
    //  let blocksV2 = blocks.map(string =>{
    //     return string.split('=')
    //  });
    // console.log('blocksV2 :', blocksV2);
    // blocksV2.forEach(x=>{
    //     x.forEach(y=>{
    //         console.log(y)
    //     })
    // })


    }
    
var example = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
console.log(convertQueryToMap(example));

var exampleArray = ['user' , 'name', 'lastname'];


function convertToObj(arr){
var result = new Object();
arr.reduce((value,index)=>{
    return value[index] = {}
}, result)

return result;
}

var obj2 = new Object();
exampleArray.reduce((value, index) =>{
    return value[index] = {}
}, obj2)

//  out = {
//     'user': {
//       'name': {
//         'firstname': 'Bob',
//         'lastname': 'Smith'
//       },
//       'favoritecolor': 'Light Blue'
//     }
//   };

// let temp = stringExample.split('.').reduce((o,i)=>o[i] = 'gonçalves', obj2)
