class Person{
    private id: string;
    private _fName: string;
    private lName: string;
    //readonly dob:Date;

    constructor(id: string,fName: string,lName: string) {
        this.id = id;
        this._fName = fName;
        this.lName = lName;
       // this.dob = dob;

    }

    public get fName(){
        return this._fName;
    }

    public set fName(fName:string) {
        this._fName = fName;
    }

    getFullName() : string {
        return `${this.fName} ${this.lName}`;
    }
}

export{Person};
//let person1 = new Person('101', 'Shailesh','Mishra', new Date(2000,12,28));
//console.log(person1.getFullName())
//console.log(person1);

