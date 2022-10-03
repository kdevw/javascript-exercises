const repeatString = function(the_string, times_to_repeat) {
	
	if ( times_to_repeat < 0 ) {
		return "ERROR";
	}

	let final_string = '';

	for ( i = 0; i < times_to_repeat; i++ ) {
		final_string = final_string + the_string;
	}

	return final_string;
};

// Do not edit below this line
module.exports = repeatString;
