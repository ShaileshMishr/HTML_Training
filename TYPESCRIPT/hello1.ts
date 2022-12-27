function show() {
    let x = document.getElementById("txt1") as HTMLInputElement
    let y = document.getElementById("val") as HTMLInputElement
    y.innerHTML = x.value;
    
}