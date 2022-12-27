// Create a class named Employee with fields empId, empName, empAddr, doj
// create a subclass named Manager with fields like salary
// display Manager information for atleast 2 Managers

class Employee1{
    private empId: string;
    private empName: string;
    private empAddr: string;
    private doj: string;

    constructor(empId: string,empName: string,empAddr: string,doj:string) {
        this.empId = empId;
        this.empName = empName;
        this.empAddr = empAddr;
        this.doj=doj;

}

    public get EmpId() {
        return this.empId;
    }

    public set EmpId(empId:string) {
        this.empId = empId;
    }
    public get EmpName() {
        return this.empName;
    }

    public set EmpName(empName:string) {
        this.empName = empName;
    }
    public get EmpAddr() {
        return this.empAddr;
    }

    public set EmpAddr(empAddr:string) {
        this.empAddr = empAddr;
    }
    public get Doj() {
        return this.doj;
    }

    public set Doj(doj:string) {
        this.doj = doj;
    }




}

export{Employee1};