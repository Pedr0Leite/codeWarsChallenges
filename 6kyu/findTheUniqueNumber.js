function findUniq(arr) {
    var obj = arr.reduce((acc,curr)=>{
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    }, {});
    var sorted = Object.keys(obj).sort(((a,b)=>{return obj[a] - obj[b]}));
    return Number(sorted[0]);
    }
  

findUniq([ 0, 1, 0 ]); //, 1);
findUniq([ 1, 1, 1, 2, 1, 1 ]); //, 2);
findUniq([ 3, 10, 3, 3, 3 ]); //, 10);