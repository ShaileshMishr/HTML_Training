function validateForm() {
   var name = document.myForm.name.value;
    var password = document.myForm.psw.value;
    var repeatpass = document.myForm.rpwd.value;
    var dateofbirth = document.myForm.dob.value;
    var address = document.myForm.addr.value;
    var qualification = document.myForm.qual.value;
   // var qualification = document.myForm.qual.value;
    var hobbies = document.myForm.hob.value;
    var certificate = document.myForm.cert.value;

   alert(qualification)

    if(name == ''){
        alert(" Name is Required**");
        return false;
    }
    else if(name.length<6){
        alert(" min length 6 required**")
        return false;
    }
    else if(password ==''){
        alert("password is Required**")
        return false;
    }
    else if(repeatpass ==''){
        alert("repeat pass is Required**")
        return false;
    }

    else if (password != repeatpass) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }
    
    else if(dateofbirth ==''){
        alert("dob is Required**")
        return false;
    }
    else if(address ==''){
      alert("address is Required**")
      return false;
  }
  else if(qualification ==''){
    alert("qualification is Required**")
    return false;
}
else if(hobbies ==''){
  alert(" hobbies are Required**")
  return false;
}
else if(certificate ==''){
  alert(" certificate is Required**")
  return false;
}
    else{
      return conf();
    }

    function conf(){
      var userid=document.myForm.id.value;
      var name = document.myForm.name.value;
      var dateofbirth = document.myForm.dob.value;
      var address = document.myForm.addr.value;
      var qualification = document.myForm.quali.value;
      var hobbies = document.myForm.hob.value;
      var certificate = document.myForm.cert.value;
  
  
              localStorage.setItem('userid',userid);
              localStorage.setItem('username',name);
              localStorage.setItem('userdob',dateofbirth);
              localStorage.setItem('hoby',hobbies);
              localStorage.setItem('educ',qualification);
              localStorage.setItem('address',address);
              localStorage.setItem('certific',certificate);
              
  }
}

function myFunction() {
    var x = document.getElementById("rpwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
 }

 var special = document.getElementById("special")
var myInput = document.getElementById("psw");
var capital = document.getElementById("capital");
var length = document.getElementById("length");


myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // special 
  var specialchar = /[!@#$%^&]/g;
  if(myInput.value.match(specialchar)) {
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
  

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function showuser(){
    var userId = (Math.pow(10,8));
    var userid=Math.trunc(parseInt(userId)*Math.random());
    document.getElementById("id").value =userid;
}
window.onload = showuser;




