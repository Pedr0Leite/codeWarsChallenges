function reverseFizzBuzz(array) {
    var n = '', m = '' ;

    for (let i = 0; i < array.length; i++) {
        if(String(array[i]).includes("Fizz") && n == ''){
            n = i + 1;
        }
        
        if(String(array[i]).includes("Buzz") && m == ''){
            m = i + 1;
        }
    }

    console.log([n, m])
};

reverseFizzBuzz([1,2,"Fizz",4,"Buzz"]); //, [3,5]);
reverseFizzBuzz([1,"Fizz","Buzz","Fizz",5,"FizzBuzz"]); //, [2,3]);
reverseFizzBuzz([1,"FizzBuzz",3,"FizzBuzz",5,"FizzBuzz"]); //, [2,2]);
reverseFizzBuzz(["Fizz","Fizz","Fizz","Fizz","Fizz","FizzBuzz"]); //, [1,6]);