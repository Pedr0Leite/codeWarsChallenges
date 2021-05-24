function solution(input, markers) {
    const stringRegex = `( [${markers[0]}].*?)(?=\\n)|([${markers[1]}].*)`;
    let regex = new RegExp(stringRegex, 'g');
    let result = input.match(regex);
    result.forEach(x => {
        input = input.replace(x, '')
    })

    return input.trim();
};

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])//) //, "apples, plums\npears\noranges")
// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"])) //, "Q\nu\ne")
