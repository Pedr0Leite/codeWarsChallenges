function nbYear(p0, percent, aug, p) {
    let count = 0;
    while(p0 < p){
        let temp = p0 + p0 * (percent / 100) + aug;
        p0 = temp;
        count++;
    }
   return count;
}

nbYear(1500, 5, 100, 5000) //, 15);
// nbYear(1500000, 2.5, 10000, 2000000) //, 10);
// nbYear(1500000, 0.25, 1000, 2000000) //, 94);