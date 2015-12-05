var grades = [100,50,90];

//push
grade = grades.push(70); [100,50,90,70]

//unshift
grade = grades.unshift(70); [ 70, 100, 50, 90 ]

//pop
grade = grades.pop(); [100,50] Start from end of array

//shift
grade = grades.shift(); [50,90] //Start from end of array

//To access each element in array
grades.push(97);
grades.forEach(function (grade){
	console.log(grade);
});

//IndexOf
console.log(grades[0]);

//Length in array
console.log(grades.length);

console.log(grade);
console.log(grades);

var totalGrade = 0;
grades.forEach(function (grade) {
	totalGrade += grade;
});

console.log(totalGrade);