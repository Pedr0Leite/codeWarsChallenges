function replaceAll(seq, find, replace) {
  var temp = [...seq];
  if (seq == "") {
    return [];
  } else {
    for (var i = 0; i < temp.length; i++) {
      temp[i] == find ? (temp[i] = replace) : 0;
    }
    if (typeof seq == 'string') {
      return temp.join("");
    } else {
        return temp;
    }
  }
}

// replaceAll([], 1, 2);//, []);
// replaceAll([1,2,2], 1, 2);//, [2,2,2]);
replaceAll("Hello World", "o", 0);
