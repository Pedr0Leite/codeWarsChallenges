function rot13(str) {
    var first_up = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var first_dwn = 'abcdefghijklmnopqrstuvwxyz';
    var second_up = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    var second_dwn = 'nopqrstuvwxyzabcdefghijklm';
    let str_split = str.split('');

    for(var i = 0; i < str_split.length; i++){
        if(first_up.indexOf(str_split[i]) != -1){
            str_split[i] = second_up[first_up.indexOf(str_split[i])];
        }else if(first_dwn.indexOf(str_split[i]) != -1){
            str_split[i] = second_dwn[first_dwn.indexOf(str_split[i])];
        }
    }
    
    return str_split.join("");
    
    }

    console.log(rot13("Ebgngr zr 13 cynprf!"));