// destructuring 

// function getValues() {
//     return [23,21,24,78,90]
// }

// let [a,b,c, ...rem] = getValues();
// console.log(b)
// console.log(rem)

/*
function getValues() {
    return [23,21]
}

let [a,b=5,c=10] = getValues();
console.log("b :"+b)
console.log("c :"+c)
*/

// empty

// function getValues() {
//     return null
// }

// let [a=8,b=5,c=10] = getValues() || [];
// console.log("b :"+b)
// console.log("c :"+c)

// object

// function show() {
//     return [
//         "Tom",
//         "Kevin",
//         [
//             "red","Blue","Green"
//         ]
//     ]
// }
// [n1,n2,
//     [c1,c2,c3]
// ]=show();

// console.log(c2)

// swapping 
// let x =10, y=20;
// [x,y]=[y,x]

// console.log("x :"+x)
// console.log("y :"+y)

// object destructuring

// let student = {
//     firstName: "Shailesh",
//     lastName: "Mishra"
// }
// let{firstName :fName, lastName: lName} = student;
// console.log(fName)

// let student = {
//     firstName: "Shailesh",
//     lastName: "Mishra"
// }
// let{firstName , lastName} = student;
// console.log(firstName)

/*
// default values
let student = {
    firstName: "Shailesh",
    lastName: "Mishra",
    age:28
}
let{firstName ,middleName='', lastName,age=12} = student;
console.log(firstName)
console.log(middleName)
console.log(age)

*/

let student = {
    firstName: "Shailesh",
    lastName: "Mishra"
}
// destructuring
let display = ({firstName,lastName}) =>console.log(firstName+" "+lastName)

// without destructuring
//let display = (student) =>console.log(student.firstName+" "+student.lastName)

display(student);