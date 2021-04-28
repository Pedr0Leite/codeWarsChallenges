var text = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
// const removeConsecutiveDuplicates = s => s.split(" ").reduce((acc, value, index, arr)=>{
//     return (value == s.split(" ")[index + 1]) ? s.split(" ").slice(index + 1, index + 2) : arr += s.split(" ")[index]
// }, []);
const removeConsecutiveDuplicates = s => {
    let finalArr = [];
    s.split(" ").forEach((value, index)=>{
    ((value == s.split(" ")[index + 1]) ? s.split(" ").slice(index + 1, index + 2) : finalArr.push(s.split(" ")[index]));
})

return finalArr.join(" ")};

console.log('removeConsecutiveDuplicates :', removeConsecutiveDuplicates(text));

//--> "alpha beta gamma delta alpha beta gamma delta"