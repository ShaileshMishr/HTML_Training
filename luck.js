
var count =0;
function luck() {

    var x=parseInt(document.getElementById("num1").value);
   
    var luckyNumber=5;
    
   
    
     if(x!=luckyNumber){
        document.getElementById("result").innerHTML="Not Really! Give it another try.....";
        document.getElementById("num1").value="";
        count++;
           
        }
           else {
            count++;
            document.getElementById("result").innerHTML="Great!! You took "+ count+" attempts to guess it right. ";
            
        
           }
        }
    

    
