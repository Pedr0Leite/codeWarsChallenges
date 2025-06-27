const cypherMapEncode = {
    "G":"A",
    "g":"a",
    "D":"E",
    "d":"e",
    "R":"Y",
    "r":"y",
    "P":"O",
    "p":"o",
    "L":"U",
    "l":"u",
    "K":"I",
    "k":"i",
    "A":"G",
    "a":"g",
    "E":"D",
    "e":"d",
    "Y":"R",
    "y":"r",
    "O":"P",
    "o":"p",
    "U":"L",
    "u":"l",
    "I":"K",
    "i":"k"
}


const encode = (str) => {return str.split('').reduce((acc, char) => {
    return cypherMapEncode[char] ? acc += cypherMapEncode[char] : acc += char;
}, '')}

const decode = (str) => encode(str)

// encode("Ala has a cat"); // , "Gug hgs g cgt" );
decode("Gug hgs g cgt"); // , "Ala has a cat" );
// encode("ABCD"); // , "GBCE" );
// encode("gaderypoluki"); // , "agedyropulik" );
// decode("agedyropulik"); // , "gaderypoluki" );
// decode("GBCE"); // , "ABCD" );