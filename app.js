const product = { count: 3, price: 12.55, type: "ropa" };

//cáculo del total por el precio
let total;
if(product.count > 0) {
    total = product.count * product.price;
} else{
    total = 0
}
console.log(total);

//calculo del IVA según el tipo del producto
let tipoIVA;
switch(product.type){
    case "alimentacion": tipoIVA = 0.10; break;
    case "libro": tipoIVA = 0.04; break;
    default: tipoIVA = 0.21;
}
console.log(tipoIVA);

//calculo del IVA según el total
let IVA = total * tipoIVA
console.log(IVA)

//calculo del total + el IVA
let resultado;
console.log(total + IVA)