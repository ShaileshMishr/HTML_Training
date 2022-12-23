const sales = [ 
{ item: 'PS4 Pro', stock: 3, original: 399.99 }, 
{ item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
{ item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
{ item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
{ item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 } 
]; 


let salesPrice=sales.map((value) =>{
if(value.discount){
    value.sale=value.original-(value.original*value.discount)
    value.total = value.sale*value.stock
}
else{
    value.sale=value.original
    value.total = value.sale*value.stock
}
return value
})

console.log(salesPrice)
