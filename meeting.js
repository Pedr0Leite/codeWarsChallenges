function meeting(s) {
 var arr = s.toUpperCase().split(";");
 var reducetest = arr.reduce((acc, curr)=>{
     acc.push(curr.split(":").reverse().join(", "));
     return acc
    }, [])
 return "(" + reducetest.sort().join(")(") + ")";
}

//"(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)");
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));