function XO(str) {
    let i = [...str.toLowerCase()].reduce((acc,curr)=>{
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    }, {});
    return (i.x == i.o) ? true : false;
}

// XO('xo'); //,true);
XO("xxOo"); //,true);
// XO("xxxm"); //,false);
// XO("Oo"); //,false);
// XO("ooom"); //,false);