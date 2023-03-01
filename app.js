const product = { count: 3, price: 12.55, type: "ropa" };

//cáculo del total por el precio
let total = 0;
if (product.count > 0) {
    total = product.count * product.price;
} else {
    total = 0;
}
console.log(total);

//cálculo del IVA según el tipo del producto
let tipoIVA = 0;
switch (product.type) {
    case "alimentacion": tipoIVA = 0.10; break;
    case "libro": tipoIVA = 0.04; break;
    default: tipoIVA = 0.21;
}
console.log(tipoIVA);

//cálculo del IVA según el total
let IVA = total * tipoIVA;
console.log(IVA);

//cálculo del total + el IVA
let resultado = 0;
console.log(total + IVA);

//cálculo sueldo bruto, número de hijos y número de pagas
const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
};

//cáculo del porcentaje de retención, dependiendo también del número de hijos
let retencion = 0;
if (empleado.bruto < 12000) {
    retencion = empleado.bruto * (0 - (0.01 * empleado.hijos));
} else if (empleado.bruto < 24000) {
    retencion = empleado.bruto * (0.08 - (0.01 * empleado.hijos));
} else if (empleado.bruto < 34000) {
    retencion = empleado.bruto * (0.16 - (0.01 * empleado.hijos));
} else {
    retencion = empleado.bruto * (0.30 - (0.01 * empleado.hijos));
}
console.log(retencion);

//cálculo del sueldo neto
let sueldoneto = empleado.bruto - retencion;
console.log(sueldoneto);

//cálculo del sueldo neto mensual
let sueldonetomensual = 0;
if (empleado.pagas >= 14) {
    sueldonetomensual = sueldoneto / 14;
} else {
    sueldonetomensual = sueldoneto / 12;
}
console.log(sueldonetomensual);
