function convertQueryToMap(query) {
    let result = decodeURIComponent(query);
    let blocks = [...result.split('&')];
    // console.log('blocks :', blocks);
     let blocksV2 = blocks.map(string =>{
     string.split(".");
    return string.split('=')
     });
    //  console.log('blocksV2 :', blocksV2);
    var objectsArr = [];
     blocksV2.forEach((arr,index) =>{ //make the same operation to each value of array
        var obj = new Object();
        arr.forEach((value) =>{ //loop for each element of URL
            if(value.indexOf('.') > -1){
                let tempArr = value.split('.');
                let tempArrLength = tempArr.length;
                tempArr.reduce((tempValue, reduceIndex) =>{
                    // console.log('tempValue: ' , arr[1]);
                    // (tempArrLength != index) ? tempValue[reduceIndex] = {} : tempValue[reduceIndex] = arr[1];
                    // tempValue[index] = arr[1];
                    return tempValue[reduceIndex] = {};
                }, obj)
            }
        })
        objectsArr.push(obj);
    })

    // console.log('objectsArr :', objectsArr);
    // console.log('objectsArr :', objectsArr[0]);
    // console.log('objectsArr :', objectsArr[1]);
    // console.log('objectsArr :', objectsArr[2]);
    }
    
var example = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
convertQueryToMap(example);

var exampleArray = ['user' , 'name', 'lastname'];
var stringExample = 'user.name.lastname';

var obj2 = new Object();
exampleArray.reduce((value, index) =>{
    return value[index] = {}
}, obj2)
obj2['user'] = {}
obj2['user']['name'] = {};
obj2['user']['name']['lastname'] = {};
obj2['user']['name']['lastname'] = 'Leite';


let temp = stringExample.split('.').reduce((o,i)=>o[i] = 'gonçalves', obj2)
// console.log('temp :', temp);
// console.log('obj2  :', obj2);
