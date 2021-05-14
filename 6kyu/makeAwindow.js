function makeAWindow(num) {
    var string = "";
    let num1 = num;
    while(num1 > 0){
        string += "|" + ".".repeat(num) + "|" + ".".repeat(num) + "|\n";
        num1--
    }
    string += "|" + "-".repeat(num) + "+" + "-".repeat(num) + "|\n";
    let num2 = num
    while(num2 > 0){
        string += "|" + ".".repeat(num) + "|" + ".".repeat(num) + "|\n";
        num2--
    }

    return "-".repeat(2 * num + 3) + "\n" +  string + "-".repeat(2 * num + 3);
}

makeAWindow(5) //, "---------\n|...|...|\n|...|...|\n|...|...|\n|---+---|\n|...|...|\n|...|...|\n|...|...|\n---------")