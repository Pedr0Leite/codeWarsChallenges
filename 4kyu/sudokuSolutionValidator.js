function validSolution(board) {
    let results = [];
    let lines = [];
    let indexObj = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };

    board.forEach(line => {
        //Check if lines in horizontal don't have duplicate values
        let lineSet = [...new Set(line)];
        lineSet.length == line.length ? results.push(true) : results.push(false);

        lines.push(line.join(''));
        //Check if lines in vertical don't have duplicate values
        line.forEach(value => {
            value != 0 ? indexObj[value].push(line.indexOf(value)) : 0;
        })

    })
    //horizontal check
    let nonEqualLines = [...new Set(lines)];

    //vertical check
    let objectValues = Object.values(indexObj);
    objectValues = objectValues.map(e => [...new Set(e)]);
    let allValidLines = (objectValues.filter(arr => arr.length == 9)).length

    // console.log('ObjectValues' , objectValues)
    // console.log('indexObj: ', indexObj)
    // console.log('First: ' + results.includes(false) == true);
    //  console.log('Second: ' +nonEqualLines.length != 9);
    //   console.log('Third: ' +allValidLines != 9)

    return (results.includes(false) == true || nonEqualLines.length != 9 || allValidLines != 9 || allMatrixCorrect(board) == false) ? false : true;
    // return (results.includes(false) == true || nonEqualLines.length != 9) ? false : true;
}

const test1 =
    [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]]; //false

const test2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]; //true

const test3 = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]];

const test4 =
    [[1, 2, 6, 3, 4, 7, 5, 9, 8],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 7, 5, 8, 6, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [7, 5, 9, 1, 6, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [1, 4, 8, 7, 5, 9, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 1, 8, 5, 4]]

const test5 =
    [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]]


// console.log(validSolution(test1)) //false
// console.log(validSolution(test2)) //true
// console.log(validSolution(test3)) // false
// console.log(validSolution(test4)) // false
// console.log(validSolution(test5)) // false

function allMatrixCorrect(arr) {
    let finalResult = true;
    arr.forEach((line, index) => {
        let square1;
        let square2;
        let square3;

        if (index == 0 || index == 3 || index == 6) {
            // console.log('line1 ' + line[0] + " " + line[1] + " " + line[2] + " | " + line[3] + " " + line[4] + " " + line[5] + " | " + line[6] + " " + line[7] + " " + line[8])
            // console.log('line2 ' + arr[index + 1][0] + " " + arr[index + 1][1] + " " + arr[index + 1][2] + " | " + arr[index + 1][3] + " " + arr[index + 1][4] + " " + arr[index + 1][5] + " | " +  arr[index + 1][6] + " " + arr[index + 1][7] + " " + arr[index + 1][8])
            // console.log('line3 ' + arr[index + 2][0] + " " + arr[index + 2][1] + " " + arr[index + 2][2] + " | " + arr[index + 2][3] + " " + arr[index + 2][4] + " " + arr[index + 2][5] + " | " +  arr[index + 2][6] + " " + arr[index + 2][7] + " " + arr[index + 2][8])
            // console.log('--------------');
            square1 = line[0] + "" + line[1] + "" + line[2] + "" + arr[index + 1][0] + "" + arr[index + 1][1] + "" + arr[index + 1][2]+ arr[index + 2][0] + "" + arr[index + 2][1] + "" + arr[index + 2][2];
            square2 = line[3] + "" + line[4] + "" + line[5] + "" + arr[index + 1][3] + "" + arr[index + 1][4] + "" + arr[index + 1][5]+ arr[index + 2][3] + "" + arr[index + 2][4] + "" + arr[index + 2][5];
            square3 = line[6] + "" + line[7] + "" + line[8] + "" + arr[index + 1][6] + "" + arr[index + 1][7] + "" + arr[index + 1][8]+ arr[index + 2][6] + "" + arr[index + 2][7] + "" + arr[index + 2][8];

            let results = [[...new Set(square1.split(''))].length == 9, [...new Set(square2.split(''))].length == 9, [...new Set(square3.split(''))].length == 9]
            // console.log('results :', results);
            // console.log('results :', results.includes(false));
            if(results.includes(false) == true){
                finalResult = false;
            }else{
                square1 = "";
                square2 = "";
                square3 = "";
            }
        }
    })
    return finalResult;
}

// console.log(allMatrixCorrect(test5))
// console.log(allMatrixCorrect(test2))