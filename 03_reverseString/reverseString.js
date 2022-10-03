const reverseString = function(string_to_reverse) {

	if ( typeof string_to_reverse != 'string' ) {
		return "ERROR";
	}

	let exploded_string = string_to_reverse.split('');

	exploded_string.reverse();

	let final_string = exploded_string.join('');

	return final_string;

};

// Do not edit below this line
module.exports = reverseString;
