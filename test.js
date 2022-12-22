let students =["John","Peter","Rohan","Ram"]

console.log(students);
// rohan 
students[2]="Kevin"
console.log(students);
console.log(students[students.length -1])

// in use for print address
// for(var student in students) {
//     console.log(student)
// }

// of use For print element
// for(var student of students) {
//     console.log(student)
// }

// insert at last
students[students.length] = "Norah"
console.log(students);

// push at last
students.push("Kishan");
console.log(students);

// delete from last
students.pop();
students.pop();
console.log(students);

students.shift();
console.log(students);

students.unshift("Marcus")
console.log(students);

let newStud = students;
newStud.push("Mohan");
console.log(students);

// It truncate the elements 
// students.length=3

// students.length=8
// console.log(students);

// name start with M
// let mNames = students.filter(checkName)  // function passed as a paramater is called callback function
// console.log(mNames)

// function checkName(name) {
//     return name.startsWith('M');
// }
//console.log('type: '+typeof checkName)

// Using Arrow function
let mNames = students.filter(name => name.startsWith('M'))  // function passed as a paramater is called callback function
console.log(mNames)


let newNames = students.map(addLastName)
console.log(newNames)

function addLastName(name) {
    return name+' Cole'
}

let rName = students.reduce(myMethod, '')
console.log(rName)
function myMethod(val,name){
    return val+name;
}

// === : Strict comparison

let a=5
let b ='5'
console.log(a==b)
console.log(a===b)




