
let newItem = [];
function shop() {
    
    var x=(document.getElementById("item").value);
    document.getElementById("item").value="";

newItem.push(x);
localStorage.setItem('newItem',newItem)
//document.getElementById("result").innerHTML=newItem
}

