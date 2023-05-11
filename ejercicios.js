/*Ejercicio 1*/

var incremento = "";
var num = prompt("Ingrese un numero menor a 10")

function piramide(incremento) {

    for (var i = 1; i <= num; i++) {
        incremento = incremento + i;
        console.log(incremento);
    }
}

piramide(incremento);

/*Ejercicio 2*/


function coincidencia(array1, array2) {

    array1 = ["Jazmin", "Débora", "Aruna", "Vigo"];
    array2 = ["Vigo", "Juana", "Jazmin", "Sami"];
    let array3 = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j] === array1[i]) {
                array3.push(array2[j]);
            }
        }
    }
    return console.log(array3);
}

coincidencia();

/*Ejercicio 3.1*/


class Carrito {

    constructor() {
        this.montoTotal = 10;
        this.producto = ["Leche"];
    }

    agregarProducto(nombre, precio, unidades) {

        this.montoTotal = this.montoTotal + (precio * unidades);
        this.producto.push(nombre);

    }

    validacion() {
        try {

            if (this.producto === this.nombre) {
                this.montoTotal = this.montoTotal + (precio * unidades);
                this.producto.push(nombre);
            } else {
                console.log(`Ya existe ${this.nombre} con ${this.unidades} unidades`);
                console.log("¿Desea agregar otro producto?")
            }

        } catch (error) {
            
            return this.agregarProducto();

        }

    }
}

console.log("Carrito 1");
const carrito1 = new Carrito();
console.log(carrito1);

console.log("Carrito 2");
const carrito2 = new Carrito();
carrito2.agregarProducto("Galletas", 10, 5);
console.log(carrito2);

console.log("Carrito 3");
const carrito3 = new Carrito();
carrito3.validacion();
console.log(carrito3);







