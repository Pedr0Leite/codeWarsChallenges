function caesarEncode(phrase, shift) {
  let cypher = '';
  let tempCypher = phrase;
      tempCypher.split('').forEach(letter=>{
          if(letter != ' '){
            let codeAt = letter.charCodeAt();
            let newCodeAt = codeAt + shift;
            console.log('--------------');
            console.log('letter :', letter);
            console.log('codeAt :', codeAt);
            console.log('shift :', shift);
            console.log('newCodeAt :', newCodeAt);
            if(newCodeAt <= 122){
              console.log('String.fromCharCode(newCodeAt); :', String.fromCharCode(newCodeAt));
              cypher += String.fromCharCode(newCodeAt);
            }else{
              let newCodeAt2 = (((newCodeAt - 97) % 26) + 97);
              console.log('newCodeAt2 :', newCodeAt2);
              console.log('String.fromCharCode(newCodeAt2); :', String.fromCharCode(newCodeAt2));
              cypher += String.fromCharCode(newCodeAt2);
            }
          }else{
            cypher += ' ';
            shift++;
          }
      })
      console.log('cypher:' + cypher);
      return cypher;
  }
  // caesarEncode("alea iacta est", 3); //, "dohd megxe jxy")
  // caesarEncode("conquer et impera", 13) //, "pbadhre sh xbetgp");
  caesarEncode("rbloicom", 613) //, "gqadxrdb");
  // console.log('a'.charCodeAt() - 96)
  // console.log('Char Code At:', "m".charCodeAt());
  // console.log('fromCharCode: ' + String.fromCharCode(109))