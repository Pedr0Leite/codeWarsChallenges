//NOT FINISHED!!
function solve(arr) {
  arr = [...new Set(arr)];
  if (arr.length == 1) {
    return "23:59";
  } else {
    let timeInMili = [];
    let diff = [];
    arr.forEach((time) => {
        timeInMili.push(miliseconds(time));
    });
    console.log('timeInMili :', timeInMili);
    timeInMili.forEach((x, index) => {
        let value = Math.abs(x - timeInMili[index + 1]);
        isNaN(value) ? (diff.push(Math.abs(timeInMili[timeInMili.length - 1] - timeInMili[0]))) : (diff.push(Math.abs(x - timeInMili[index + 1])));
    });
    console.log(diff);
    console.log("Min: " + Math.min(...diff));
    console.log("Max: " + Math.max(...diff));
    // var lastNumber = hoursAndMinutes()
    var lastNumber = hoursAndMinutes(Math.abs(Math.max(...diff) - 60000));
    return lastNumber;
  }
}

// console.log(solve(["14:51"])); //, "23:59");
console.log(solve(["23:00","04:22","18:05","06:24"]));//"11:40");
// console.log(solve(["21:14", "15:34", "14:51", "06:25", "15:30"])); //'09:10'

// For example:
// solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for another 23 hours and 59 minutes.
// solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not go off is 11 hours and 40 minutes.
function miliseconds(time) {
  let hours = time.split(":")[0];
  let minutes = time.split(":")[1];
  return ((hours * 60) * 60 + (minutes * 60)) * 1000;
}

function hoursAndMinutes(mili){
    var hours = Math.floor(mili / 3600000);
    var minutes = Math.floor((mili - (hours * 3600000)) / 60000);
    return `${hours}:${minutes}`
}

// console.log(hoursAndMinutes(20400000));
// console.log(hoursAndMinutes(33000000));
// console.log(hoursAndMinutes(42060000 -60000));
