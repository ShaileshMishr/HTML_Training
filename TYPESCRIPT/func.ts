//  function funcName(parameter1: type, parameter2: type,.... ):  returnType{
    // do something here
 //  }

function add(a:number, b:number) : number;

function add(a:string, b:string) : string;

function add(a:string, b:number) : string;

function  add(a:any, b:any) : any {
    return a+b;
}

//let sum = add(45,55);
// let sum = add('kishan ','Mishra');
let sum = add('kishan ',22);
console.log("Addition :"+sum)

// Optional parameter
//function multiply(a:number, b:number, c?:number):number{

    // default value
    function multiply(a:number, b:number=10, c?:number):number{
    if(typeof c !== 'undefined'){
        return a*b*c;
    }
    else{
        return a*b;
    }
}
// let product = multiply(3,5,6);
let product = multiply(3);
console.log(product)

function getTotal(...numbers:number[]):number{
    let total = 0;
    numbers.forEach((num)=> total += num);
    return total;
}

console.log("Total sum :"+getTotal(10,50,20,90,120))


// Create two overloaded functions where one function will take 2 parameters and
// second function takes 3 parameters
// the function will multiply all the numbers together and add 100 to it

function multi(a:number, b:number) : number;
function multi(a:number, b:number, c:number):number;
function  multi(a:number, b:number,c?:number) : number {
    if(typeof c !== 'undefined'){
        return a*b*c+100;
    }
    else{
        return a*b+100;
    }
}
let mul = multi(3,5,6);
let mul1 = multi(2,3);
console.log("Multiplication :"+mul)
console.log("Multiplication :"+mul1)

