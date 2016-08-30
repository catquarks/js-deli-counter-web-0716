var katzDeliLine = [];

function takeANumber(line, newCustomer){
	line.push(newCustomer);
	return `Welcome, ${newCustomer}. You are number ${line.length} in line.`
}

function nowServing(line){
	if (line.length > 0) {
		var nextCustomer = line.shift();
		return `Currently serving ${nextCustomer}.`;
	} else {
		return 'There is nobody waiting to be served!';
	};

}

function currentLine(line){
	var sentence = 'The line is currently: '
	if (line.length > 0) {
		line.forEach(function(customer, i){
			sentence = sentence.concat(`${i + 1}. ${customer}, `);
		});
		sentence = sentence.slice(0, -2)
	} else {
		sentence = 'The line is currently empty.'
	};
	return sentence
}
