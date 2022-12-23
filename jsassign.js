
function validateForm() {
    var empName = document.myForm.name.value;
    var empId = document.myForm.id.value;
    var joiningDate = document.myForm.doj.value;
    var hoursWorked = document.myForm.hw.value;
    var designation = document.myForm.des.value;


    if(empName == ''){
        alert("Emp Name is Required**")
        return false;
    }
    else if(empId ==''){
        alert("Emp Id is Required**")
        return false;
    }
    else if(joiningDate ==''){
        alert("Joining Date is Required**")
        return false;
    }
    else if(hoursWorked ==''){
        alert("Work Hours is Required**")
        return false;
    }
    else if(designation ==''){
        alert("designation is Required**")
        return false;
    }
    else{
       return em();
    }

}


function employee(name,empId,doj,hoursWorked,designation){

    this.name=name;
    this.empId=empId;
    this.doj=doj;
    this.hoursWorked=hoursWorked;
    this.designation=designation;
}
    
function em() {
var user=document.getElementById("name").value;
var empi=document.getElementById("id").value;
var dojj=document.getElementById("doj").value;
var workh=document.getElementById("hw").value;
var desg=document.getElementById("des").value
var emp1 = new employee(user,empi,dojj,workh,desg);


if(emp1.designation=='Manager'){
 var salary = emp1.hoursWorked*90;
}
else if(emp1.designation=='Consultant'){
    var salary = emp1.hoursWorked*70;
}
else if(emp1.designation=='Trainee'){
    var salary = emp1.hoursWorked*45;
}


var output=emp1.name+"who is a "+emp1.designation +" will get $" +salary;

localStorage.setItem('empList',output);

}

