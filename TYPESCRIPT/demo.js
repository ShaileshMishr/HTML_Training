function getProduct(id) {
    return {
        id:id,
        name: `Lovely product ${id}`,
        price: 102.98
    }
}

var product = getProduct(101) 
console.log(`The product name is ${product.Name} price :${product.price}`)



