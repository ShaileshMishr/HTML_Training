import {Person} from './person'

class Employee extends Person{
    constructor(id: string, firstName: string, lastName: string, private designation: string){
        super(id, firstName, lastName)
    }
}
let emp1 = new Employee('102', 'Kishan','Mishra', 'Manager')
console.log(emp1.getFullName());