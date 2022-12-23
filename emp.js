/*
Create an array of 4 employee objects
For employees who's age is beyond 60 add a pf field having value 12% of salary
*/

const employ = [ 
    { name: 'Shailesh', age: 21, salary: 30000 },
    { name: 'Suyash', age: 22, salary: 20000 },
    { name: 'Gaurav', age: 61, salary: 35000 },
    { name: 'Kishan', age: 65, salary: 40000 }
]

let empList=employ.map((value) =>{
    if(value.age>60){
        value.pf=value.salary*0.12
    }
   
    return value
    })
    
    console.log(empList)