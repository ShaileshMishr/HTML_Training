let employee = {
    empId : 101,
    empName : 'Shailesh',
    empDesignation : 'Manager',

    greet : function(){
        console.log('Welcome '+this.empName )
    }
}

// Using constructor function
function Student(name , age){
    this.name = name;
    this.age = age;
}

var stud1 = new Student('Rohan',23);
var stud2 = new Student('Swati',22);
var stud3 = new Student('Abhi',21);

// console.log(employee.empDesignation)
// console.log(employee.empName)
// console.log(employee['empName'])

// set salary 
employee.salary = 1000
console.log('empDesignation' in employee)
console.log(employee)

// for deleting anything
delete employee.empDesignation
console.log('empDesignation' in employee)
console.log(employee)


for(let key in employee){
    console.log(key +":"+employee[key])
}

employee.greet();

