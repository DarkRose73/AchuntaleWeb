"use strict"

const botonAgregar = document.getElementById("agregar");
const botonAgregar5 = document.getElementById("agregar5");
const botonQuitar = document.getElementById("quitar");
const botonQuitar5 = document.getElementById("quitar5");
const correo = document.getElementById("correo");
const cantidad = document.getElementById("cantidad");
const stock = document.getElementById("stock");
const precio = document.getElementById("precio");
const botonComprar = document.getElementById("btn-comprar");
const botonLimpiar = document.getElementById("btn-limpiar");
let stockDispo = 50;
cantidad.value = 0;
precio.value=0;

const agregar = (cantidadAgregada) => {
    let precioProducto = 12990;
    let numero = Number(cantidad.value);
    if (numero + cantidadAgregada > 50) {
        cantidad.value = 50;
        stock.innerHTML = "";
        stockDispo = 0;
        stock.innerHTML = `Stock disponible: ${stockDispo}`;
        precio.value = 50 * precioProducto;
    } else if (numero + cantidadAgregada < 0) {
        cantidad.value = 0; 
        stock.innerHTML = "";
        stockDispo = 50;
        stock.innerHTML = `Stock disponible: ${stockDispo}`;
        precio.value = 0;
    } else {
        cantidad.value = numero + cantidadAgregada;
        stock.innerHTML = "";
        stockDispo -= cantidadAgregada;
        stock.innerHTML = `Stock disponible: ${stockDispo}`;
        precio.value = (numero + cantidadAgregada) * precioProducto;
    }
}

const limpiarFormulario = () => {
    correo.value = "";
    cantidad.value = 0;
    //TODO cambiar en base a peticion get de Data
    stockDispo = 50;
    stock.innerHTML=`Stock disponible: ${stockDispo}`;
    precio.value = 0;
}

botonAgregar.addEventListener("click", () => {
    agregar(1);
});
botonAgregar5.addEventListener("click", () => {
    agregar(5);
});

botonQuitar.addEventListener("click", () => {
    agregar(-1);
});
botonQuitar5.addEventListener("click", () => {
    agregar(-5);
});


botonLimpiar.addEventListener("click", () => {
    limpiarFormulario();
});

botonComprar.addEventListener("click",()=>{
    let tituloModal = document.getElementById("staticBackdropLabel");
    tituloModal.innerHTML="Cambiando titulo del modal";

});

