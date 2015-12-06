//Functional programming
//=> Map in JS =>higher order function
//Creates an new array with the results of calling a provided function on every element in this array.

var animals = [
	{nm: 'fluffkyin', species: 'rabbit'},
	{nm: 'caro', species: 'dog'},
	{nm: 'hamilton', species: 'dog'},
	{nm: 'jimmy', species: 'fish'},
]

//HOW TO ACHIEVE THE REQUIREMENT USING FOR LOOP
// var names = [];
// for(var i=0; i<animals.length;i++) {
// 	names.push(animals[i].species);
// }


//Eg: 1
// var names = animals.map(function(animal){
// 	return animal.nm +' is a '+animal.species;
// })
//USING ARROW FUNCTION(node --harmony_arrow_function fileName.js)
var names = animals.map((x) => x.nm)

console.log(names);

//Eg: 2
var numbers = [1,4,9];
var roots = numbers.map(Math.sqrt);
var countMe = numbers.map(function(count){
	return count;
})
console.log(roots);
console.log(countMe);
//Eg: 3
var obj = [
	{key:1, values:10},
	{key:2, values:20},
	{key:3, values:30},
	{key:4, values:40},
]

console.log(obj);

var rObj = obj.map(function(objs){
	var reObj = {};
	reObj[objs.key] = objs.values;
	return reObj;
})

console.log(rObj);

//Eg: 4
var lots = [1,10,100];

var lotsMul = lots.map(function(lotte){
	return lotte * 2;
})

console.log(lotsMul);

//Eg: 5

var str = "hello world!"

var map = Array.prototype.map;

var charCode = map.call(str, function(x){
	return x.charCodeAt(0);
})

console.log(charCode);

//Eg: 6
var strEng = '12345';

var checkArr = Array.prototype.map.call(strEng, function(x){
	return x
}).reverse().join('');

console.log(checkArr);


