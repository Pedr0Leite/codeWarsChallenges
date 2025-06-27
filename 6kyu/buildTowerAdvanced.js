function towerBuilder(nFloors, nBlockSz) {
  let arrOfN = [];
  let arrOfCross = [];
  let numberOfCross = nBlockSz[0];
  for (let index = 0; index < nFloors; index++) {
    index === 0
  ? arrOfN.push(numberOfCross)
  : arrOfN.push(numberOfCross = nBlockSz[0] + numberOfCross + nBlockSz[0]);
  }

  let finalVal = arrOfN[arrOfN.length - 1];

  arrOfN.forEach(x =>{
    let numbOfNone = finalVal - x;
    for (let index = 0; index < nBlockSz[1]; index++) {
        arrOfCross.push(' '.repeat(numbOfNone / 2) + '*'.repeat(x) + ' '.repeat(numbOfNone / 2))
    }
  })
  
  console.log(JSON.stringify(arrOfCross))
}

// towerBuilder(1, [1, 1]); //), JSON.stringify(["*"]));
towerBuilder(3, [4, 2]); //), JSON.stringify(['        ****        ', '        ****        ', '    ************    ', '    ************    ', '********************', '********************']));
// towerBuilder(6, [2, 1]);