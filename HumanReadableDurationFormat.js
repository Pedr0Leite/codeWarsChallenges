/**
 * SECONDS
 * 1 year = 31536000 s
 * 1 month = 2629743.83 s
 * 1 day = 86400 s
 * 1 hour = 3600 s
 * 
 * MINUTES
 * 1 day = 1440 min
 * 1 hour = 60 min
 */

function formatDuration (seconds) {
    let sec = min = hour = day = year = 0;
    let finalString = '';
    const finalObj = {};

    if(seconds <= 60){
        if(seconds == 60){
            sec = 0;
            min = 1
        }else{
            sec = seconds;
        }
        
    }else if(seconds <= 3600){
        hour = Math.ceil(seconds / 3600) - Math.floor(seconds / 3600) == 0 ? 1 : Math.ceil(seconds / 3600) - Math.floor(seconds / 3600);
        console.log('hour :', hour);
        min = Math.ceil(seconds / 60) - Math.floor(seconds / 60);
        console.log('min :', min);
        sec = Math.ceil(min / 60 * 100);
        console.log('sec :', sec);

    }else if(seconds <= 86400){
        day = Math.ceil(seconds / 86400) - Math.floor(seconds / 86400) == 0 ? 1 : Math.ceil(seconds / 86400) - Math.floor(seconds / 86400);
        hour =  Math.ceil((seconds / 60) / 60) - Math.floor((seconds / 60) / 60);
        min = Math.ceil((hour / 60) / 60) - Math.floor((hour / 60) / 60);
        sec = Math.ceil(min / 60 * 100);

    }else if(seconds <= 31536000){

        day =  (((seconds / 24) / 60) / 60);
        let tempHour = 1 - (365 - day);
        hour =  tempHour * 24;
        let tempMin = 1 - (24 - hour);
        min = tempMin * 60;
        let tempSec = 1 - (60 - min);
        sec = tempSec * 60;

    }else{
        year = ((((seconds / 365) / 24) / 60) / 60);
        let tempYear = year - 1;
        day =  tempYear * 365 * 24;
        let tempHour = 1 - (day - 365);
        hour =  tempHour / 24;
        let tempMin = 1 - (hour - 24);
        min = tempMin / 60;
        let tempSec = 1 - (min - 60);
        sec = tempSec / 60;

    }
        finalObj['year'] = Math.floor(year);
        finalObj['day'] = Math.floor(day);
        finalObj['hour'] = Math.floor(hour);
        finalObj['min'] = Math.floor(min);
        finalObj['sec'] = Math.floor(sec);
        console.log('finalObj :', finalObj);
    
        if(finalObj.year != 0){
            if(finalObj.year == 1){
                finalString += `${finalObj.year} year `
            }else{
                finalString += `${finalObj.year} years ` 
            }
        }
        if(finalObj.day != 0){
            if(finalObj.day == 1){
                finalString += `${finalObj.day} day `
            }else{
                finalString += `${finalObj.day} days ` 
            }
        }
        if(finalObj.hour != 0){
            if(finalObj.hour == 1){
                finalString += `${finalObj.hour} hour `
            }else{
                finalString += `${finalObj.hour} hours ` 
            }
        }
        if(finalObj.min != 0){
            if(finalObj.min == 1){
                finalString += `${finalObj.min} minute `
            }else{
                finalString += `${finalObj.min} minutes ` 
            }
        }
        if(finalObj.sec != 0){
            if(finalObj.sec == 1){
                finalString += `${finalObj.sec} second `
            }else{
                finalString += `${finalObj.sec} seconds ` 
            }
        }

        console.log('finalString :', finalString);
        return finalString
  }

  

// formatDuration(1) //, "1 second");
formatDuration(62) //, "1 minute and 2 seconds");
// formatDuration(60) //, "1 minute");
// formatDuration(52) //, "1 minute");
// formatDuration(120) //, "2 minutes");
// formatDuration(3600) //, "1 hour");
// formatDuration(86400) //, "1 day");
// formatDuration(3662) //, "1 hour, 1 minute and 2 seconds");
// formatDuration(31536001) //
// formatDuration(31535999) //, "1 hour, 1 minute and 2 seconds");