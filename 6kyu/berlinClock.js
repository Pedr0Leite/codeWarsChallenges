function berlinClock(time) {
    let timeArr = time.split(":"); //timeArr : [ '12', '56', '01' ]
    let n1 = Number(timeArr[0]);
    let tempNumH1 = Math.floor((n1 - Number(timeArr[0][1])) / 4);
    let tempNumH2 = Math.floor((Number(timeArr[0][1])));
    let n2 = Number(timeArr[1]);
    let n3 = Number(timeArr[2]);
    //Seconds
    let seconds = ((n3/2 % 0) || (n3 != 0)) ? 'O' : 'Y';
     let hoursR1 = "R".repeat(tempNumH1 < 5 ? tempNumH1 : tempNumH1 - 1);
    if(hoursR1.length < 4)
    hoursR1 = hoursR1 + "O".repeat(4 - hoursR1.length);
    let hoursR2 = "R".repeat(tempNumH2 < 5 ? tempNumH2 : tempNumH2 - 1);
    if(hoursR2.length < 4)
    hoursR2 = hoursR2 + "O".repeat(4 - hoursR2.length);
    //Minutes
    let tempMinutes = "Y".repeat(Math.floor(n2 / 5));
    tempMinutes = tempMinutes + "O".repeat(11 - tempMinutes.length);
    let minutesArr = [...tempMinutes];
    for (let i = -1; i < minutesArr.length; i+=3) {
      if(minutesArr[i] == "Y"){
        minutesArr[i] = "R";
      }
    }
    let minutesR1 = minutesArr.join("");
    let minutesR2 = (timeArr[1][1] < 5) ? ("Y".repeat(timeArr[1][1])) : ("Y".repeat(timeArr[1][1] - 5));
    minutesR2 = minutesR2 + "O".repeat(4 - minutesR2.length);
  
    return `${seconds}\n${hoursR1}\n${hoursR2}\n${minutesR1}\n${minutesR2}`;
  }