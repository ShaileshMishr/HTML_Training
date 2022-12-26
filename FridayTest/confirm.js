let sh=localStorage.getItem(userid);
function showdetail(){



    document.getElementById("ouser").innerHTML=localStorage.getItem('userid');
    document.getElementById("ousername").innerHTML=localStorage.getItem('username');
    
    document.getElementById("ohobby").innerHTML =localStorage.getItem('hoby');
    document.getElementById("educate").innerHTML=localStorage.getItem('educ');
    document.getElementById("oadd").innerHTML =localStorage.getItem('address');
    document.getElementById("ocert").innerHTML=localStorage.getItem('certific');
    document.getElementById("odob").innerHTML =localStorage.getItem('userdob');
   
    


}
