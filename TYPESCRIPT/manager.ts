import { Employee1 } from "./Employee1";

class Manager extends Employee1{
    constructor(Id: string, Name: string,add:string,doj:string,public salary: number){
        super(Id, Name,add,doj,)
    }

    getFullDetail() : string {
        return `${this.EmpId} ${this.EmpName} ${this.EmpAddr} ${this.Doj} ${this.salary}`;
    }

}
let m1 = new Manager('101', 'Kishan','Lucknow','2022-12-12',30000)
let m2 = new Manager('102', 'Shailesh','Delhi','2022-12-12',50000)
console.log(m1);
console.log(m2);
