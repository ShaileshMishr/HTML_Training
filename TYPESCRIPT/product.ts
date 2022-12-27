interface Product{
    id:number,
    pr_name:string,
    price:number
}

function getProduct1(id:number) : Product{
    return{
        id: id,
        pr_name: `Lovely product ${id}`,
        price:105.90
    }
}

let product1 = getProduct1(102);
console.log(`The product name is ${product1.pr_name} price :${product1.price}`)


