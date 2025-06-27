function howMuchCoffee(events) {
    let numbOfCoffee = events.reduce((acc, string) =>{
    return (string === string.toLowerCase() && (!string.includes('other') && !string.includes('OTHER'))) ? acc+=1 : (string === string.toUpperCase() && (!string.includes('other') && !string.includes('OTHER'))) ? acc+=2 : acc

}, 0)
    
    console.log(numbOfCoffee > 3 ? 'You need extra sleep' : numbOfCoffee);
  }



// howMuchCoffee([]); //, 0)
// howMuchCoffee(['cw']); //, 1)
// howMuchCoffee(['CW']); //, 2)
// howMuchCoffee(['cw','CAT']); //, 3)
// howMuchCoffee(['cw','CAT','DOG']); //, 'You need extra sleep')
// howMuchCoffee(['cw','CAT', 'cw=others']); //, 3)
// howMuchCoffee(['cw','other_1', 'OTHER']); //, 1)
  