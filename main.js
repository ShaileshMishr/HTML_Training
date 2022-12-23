// alert("Hello from Javascript")

// function add() {
//     var x=parseInt(document.getElementById("num1").value);
//     var y=parseInt(document.getElementById("num2").value); 
//     var sum = x+y
//     document.getElementById("result").innerHTML=sum
// }

function add() {

    // let name = prompt("Enter your name ", "Enter");

    // document.getElementById("n1").innerHTML="Hello "+name;

    var flag=confirm("Do you want to continue?")
    if(flag==true){

    if(typeof document.getElementById("num1").value <0){
        alert('Please enter a positive number only')
    }
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value); 
    var sum = x+y
    document.getElementById("result").innerHTML=sum
}
else {
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";

}
}

function sub() {
    var x=parseInt(document.getElementById("num1").value);

    var y=parseInt(document.getElementById("num2").value); 
    
    var diff = x-y
    
    document.getElementById("result").innerHTML=diff
}
function mul() {
    var x=parseInt(document.getElementById("num1").value);

    var y=parseInt(document.getElementById("num2").value); 
    
    var multi = x*y
    
    document.getElementById("result").innerHTML=multi
}
function div() {
    var x=parseInt(document.getElementById("num1").value);

    var y=parseInt(document.getElementById("num2").value); 
    
    var divi = x/y
    
    document.getElementById("result").innerHTML=divi
}

function validateForm() {
    var userName = document.myForm.user1.value;
    var password = document.myForm.password.value;

    if(userName == ''){
        alert("User Name is Required**")
        return false;
    }
    else if(password ==''){
        alert("Password is Required**")
        return false;
    }
    else{
        localStorage.setItem('uname',userName)
        return true;
    }
}





