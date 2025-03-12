function gap(num) {

    var binary = num.toString(2);
    let arr = binary.split('');
    let gap = 0;
    let tempGap = 0;
    let countIt = false;
    
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == '0' && (arr[i - 1] != '1' && arr[i + 1] != '1') && countIt == true){
            tempGap++;
            continue;
        }
        
        if((arr[i] == '0') && arr[i + 1] == '1'){
            tempGap++;
            countIt = false;
            
            if(tempGap > gap){
                gap = tempGap;
            }
            
            tempGap = 0;
            continue;
        }

        if((arr[i - 1] == '1') && arr[i] == '0'){
            tempGap++;
            countIt = true;
            continue;
        }
        
    }
  
    return gap;
}


// gap(9) //2
gap(529) //4
// gap(20) //1
// gap(15) //0
// gap(2471182) //4