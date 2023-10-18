function decimalToBinary(num) {
  //Write you code here
	let output = "";
	while(num >= 2){
		let reminder = num % 2;
		output = reminder + output;
		num = parseInt(num / 2);
	}

	if(num === 1){
		output = 1 + output;
	}
	return output;
  
}

window.decimalToBinary = decimalToBinary;
