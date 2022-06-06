"use strict";
//Creado por Joan Salas 24/05

//Función creada para cambiar el contenido de la página luego de mostrar la animación de cargando
const contenidoQuienesSomos = document.getElementById("cuerpo");

const cambiarContenidoQuienesSomos = () => {
  contenidoQuienesSomos.innerHTML = "";
  contenidoQuienesSomos.innerHTML = `


`;
  contenidoQuienesSomos.style.animation = "aparecer 2s forwards";
};

setTimeout(cambiarContenidoQuienesSomos, 2500);
