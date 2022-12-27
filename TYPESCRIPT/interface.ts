interface Car {
    make : string;
    model : string;
    year : number;
    price : number;

}

function getCarDetail(car: Car){
    return `${car.make} ${car.model} from ${car.year} costs $${car.price}`
}

let myCar = {
    make: 'Honda',
    model: 'City',
    year: 2022,
    price: 5000
}
console.log(getCarDetail(myCar))

