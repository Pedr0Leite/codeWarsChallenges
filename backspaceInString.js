function cleanString(s) {
	let arr = s.split('');
	while(arr.includes('#') == true){
		let hashIndex = arr.indexOf('#');
		if(hashIndex == 0){
			arr.shift()
		}else{
			arr.splice(hashIndex - 1, 2);
		}
	}
	return arr != '' ? arr.join('') : '';
};

// cleanString('abc#d##c') //, "ac")
// cleanString('abc####d##c#') //, "" )
// console.log(cleanString('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##')); //, "6+yqw8hfklsd-=-f" )
// console.log(cleanString('#9#9#9#9o#9#9#9#Oooooo#OOOooO#OO######')); //, "9OooooO" )
