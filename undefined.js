var name = 'Parvez';
//console.log(name);

function doesNothing() {

}

//console.log(doesNothing());

var secName = undefined;

if(typeof x === 'undefined') {
	console.log("x is undefined")
}

var dummyName = 'shaikh';

function checkName(name) {
	if(typeof name != 'undefined') {
		console.log("Hello "+name);
	} else {
		console.log("Hello world!");
	}
}

checkName(dummyName);