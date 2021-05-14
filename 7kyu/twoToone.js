// function longest(s1, s2) {
//     let both = s1.concat(s2);
//    return (Array.from(new Set(both)).sort()).join('');
//   }
  //OR

const longest = (s1,s2) => (Array.from(new Set(s1.concat(s2))).sort()).join('');


console.log(longest("aretheyhere", "yestheyarehere")); //, "aehrsty")
//longest("loopingisfunbutdangerous", "lessdangerousthancoding") //, "abcdefghilnoprstu")
// longest("inmanylanguages", "theresapairoffunctions")//, "acefghilmnoprstuy")