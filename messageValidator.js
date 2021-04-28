function isAValidMessage(message) {
  var allChar = message.split(/(\d+)/).filter((char) => char);
  var boolean = [];
  for(var i = 0; i < allChar.length; i+=2){
      if(allChar[i + 1] == undefined){
        boolean.push(false);
        break;
      }
      if(Number(allChar[i]) == allChar[i + 1].length){
          boolean.push(true);
        }else{
            boolean.push(false);
        }
}
  var result = boolean.every((x) =>  x == true);
  return result
};


isAValidMessage("3hey5hello2hi5");
