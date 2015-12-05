var isValidBoolean = "true";

function checkBoolean(booleanArgument) {
	if(typeof booleanArgument === 'boolean') {
		return !booleanArgument;
	} else {
		console.log("Warning! Not a boolean");
	}
}

var newVar = checkBoolean(isValidBoolean);

console.log(newVar);