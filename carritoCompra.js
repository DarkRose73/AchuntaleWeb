"use strict"
//Creado por Joan Salas 26/05

//CARGA DEL FORMULARIO

//Función creada para cargar el contenido de la página luego de mostrar la animación de cargando
//REALIZAR DEBUGGING
const contenidoPaginaCarrito = document.getElementById("cuerpo");
// const cargarPaginaCarrito = () => {
//     contenidoPaginaCarrito.innerHTML = "";
//     contenidoPaginaCarrito.innerHTML = `
//     <div class="container-fluid">
//     <div class="row mt-4">
//         <div class="col-md-6 mx-auto">
//             <!-- CARD PARA COMPRA -->
//             <div class="card"
//                 style="color: #EADEDE;background: rgba(100, 100, 0, 0); border: rgba(100, 100, 0, 0);">
//                 <div class="text-center">
//                     <h1 style="font-weight: 700;color: black;">Comprar</h1>
//                 </div>
//                 <div class="card-body text-center mx-auto">
//                     <!-- INGRESO DE DATOS -->
//                     <div class="input-group" style="width: 350px;">
//                         <input type="email" id="correo" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//                             autocomplete="off" placeholder="Ingrese su correo" class="form-control bg-dark"
//                             style="color: #EADEDE;">
//                     </div>
//                     <br>
//                     <div class="input-group">
//                         <button class="btn btn-danger btn-outline-dark" id="quitar5"
//                             style="width: 50px;">-5</button>
//                         <button class="btn btn-danger btn-outline-dark" id="quitar"
//                             style="width: 50px; margin-right: 20px;">-1</button>
//                         <input type="number" class="form-control bg-dark mx-auto" disabled="true"
//                             placeholder="Cantidad" style="color: #EADEDE" min="0" max="50"
//                             style="width: 15em;" id="cantidad">
//                         <button class="btn btn-success btn-outline-dark" id="agregar"
//                             style="width: 50px; margin-left: 20px;">+1</button>
//                         <button class="btn btn-success btn-outline-dark" id="agregar5"
//                             style="width: 50px;">+5</button>
//                     </div>
//                     <label for="stock" id="stock" style="font-size: large; color: #000;">Stock disponible:
//                         50</label>
//                     <div class="input-group mt-3">
//                         <span class="input-group-text input-group-lg bg-dark" style="color: #EADEDE">Precio total
//                             (CLP):
//                         </span>
//                         <input type="text" class="form-control bg-dark" id="precio" style="color: #EADEDE" disabled
//                             id="precioTotal">
//                     </div>
//                 </div>
//                 <!-- BOTONES -->
//                 <div class="card-footer text-center"
//                     style="border: rgba(0,0,0,0);background: rgba(100, 100, 0, 0);">
//                     <button class="btn my-3 mx-auto text-center btn-success" id="btn-comprar" disabled
//                         style="width: 100px; color: #000;">Comprar</button>
//                     <button class="btn my-3 text-center" id="btn-limpiar"
//                         style="margin-left: 40px; width: 100px; color: orange; background-color: #000;">Limpiar</button>
//                     <button data-bs-toggle="modal" id="btn-modal" data-bs-target="#staticBackdrop" disabled
//                         style="opacity: 0;"></button>
//                 </div>
//             </div>
//         </div>
//         <div class="col-md-6 mx-auto">
//             <div class="card mx-auto" style="background: rgba(0, 0, 0, 0.7); border: rgba(0, 0, 0, 0);">
//                 <img src="images/allInOne2.png" class="card-img-top mx-auto" alt="">
//                 <div class="card-body text-center"
//                     style="background: rgba(0, 0, 0, 0); border: rgba(0, 0, 0, 0);color: #EADEDE;">
//                     <h2>¡El kit es casi tuyo!</h2>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <br>
//     <!-- FOOTER DE RRSS -->
//     <footer>
//         <div class="card-footer">
//             <div class="row">
//                 <div class="text-center" style="color:#fff;">
//                     <h1>Síguenos en Instagram</h1>
//                     <a href="https://www.instagram.com/achuntale_cl/" target="_blank"><img
//                             src="images/instagram.png" alt=""></a>
//                     <h5>@achuntale_cl</h5>
//                 </div>
//             </div>
//         </div>
//         <br>
//     </footer>
// </div>


// <!-- Modal -->
// <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
//     aria-labelledby="staticBackdropLabel" aria-hidden="true">
//     <div class="modal-dialog">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title" id="staticBackdropLabel">Datos de Envío</h5>
//                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//                 <div class="card">
//                     <div class="row">
//                         <div class="col-md-6">
//                             <div class="card-body">
//                                 <label for="nombre" class="form-label">Nombre *</label>
//                                 <input type="text" id="nombre" class="form-control" autocomplete="off">
//                             </div>
//                             <div class="card-body">
//                                 <label for="apellido" class="form-label">Dirección *</label>
//                                 <input type="text" id="direccion" class="form-control">
//                             </div>
//                             <div class="card-body">
//                                 <label for="apellido" class="form-label">Ciudad *</label>
//                                 <input type="text" id="ciudad" class="form-control">
//                             </div>
//                             <div class="card-body">
//                                 <label for="apellido" class="form-label">Región *</label>
//                                 <select name="" class="form-control" id="select-region">
//                                     <option value="Valparaiso">Valparaíso</option>
//                                     <option value="Santiago">Región Metropolitana</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div class="col-md-6">
//                             <div class="card-body">
//                                 <label class="form-label">Apellido *</label>
//                                 <input type="text" id="apellido" class="form-control">
//                             </div>
//                             <div class="card-body">
//                                 <label class="form-label">Codigo postal *</label>
//                                 <input type="text" id="codigoPostal" class="form-control">
//                             </div>
//                             <div class="card-body">
//                                 <label class="form-label">País *</label>
//                                 <select class="form-control" id="select-pais">
//                                     <option value="Chile">Chile</option>
//                                 </select>
//                             </div>
//                             <div class="card-body">
//                                 <label class="form-label">Comuna *</label>
//                                 <select id="select-comuna" class="form-control">
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" id="btn-modal-confirmar"
//                     class="btn btn-success btn-outline-dark">Confirmar</button>
//                 <button type="button" id="btn-modal-cancelar" class="btn btn-danger btn-outline-dark"
//                     data-bs-dismiss="modal">Cancelar</button>
//             </div>
//         </div>
//     </div>
// </div>`
//     contenidoPaginaCarrito.style.animation = "aparecer 2s forwards";
// }
// setTimeout(cargarPaginaCarrito, 2500);


//DECLARACIONES
//Declaración de variables en base a los elementos de la página
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
const botonModal = document.getElementById("btn-modal");
const selectRegion = document.getElementById("select-region");
const selectComuna = document.getElementById("select-comuna");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const direccion = document.getElementById("direccion");
const codigoPostal = document.getElementById("codigoPostal");
const ciudad = document.getElementById("ciudad");
const pais = document.getElementById("select-pais");
const botonModalConfirmar = document.getElementById("btn-modal-confirmar");
const botonModalCancelar = document.getElementById("btn-modal-cancelar");

//Arreglos con las comunas de Valparaíso y Santiago
//Esta data también puede ser recuperada desde un servidor o un archivo de datos
const valparaiso = [
    "Algarrobo", "Cabildo", "Calle Larga", "Cartagena", 
    "Casablanca", "Catemu", "Limache", "Quillota", 
    "Quilpué", "Valparaíso", "Viña del mar"];
const santiago = [
    "Buin", "Calera de Tango", "Colina", "Conchalí", "El Bosque", 
    "Estación Central", "Huechuraba", "Las Condes", "Maipú", 
    "San Ramón", "Vitacura"];

//Valores estáticos
//Estos valores se pueden recuperar desde servidor o documento de datos
var stockDispo = 50;
cantidad.value = 0;
precio.value = `$ ${0}`;

//FUNCIONES
//Función para validar correo en base a una expresión regular
const validarCorreo = (valor) => {
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(valor)) {
        return true;
    }
    return false;
}

//Función para agregar producto
const agregar = (cantidadAgregada) => {
    let precioProducto = 12990;
    let numero = Number(cantidad.value);
    if (numero + cantidadAgregada > 50) {
        cantidad.value = 50;
        stock.innerHTML = "";
        stockDispo = 0;
        stock.innerHTML = `Stock disponible: ${stockDispo}`;
        precio.value = `$ ${50 * precioProducto}`;
    } else if (numero + cantidadAgregada < 0) {
        cantidad.value = 0;
        stock.innerHTML = "";
        stockDispo = 50;
        stock.innerHTML = `Stock disponible: ${stockDispo}`;
        precio.value = `$ ${0}`;
    } else {
        cantidad.value = numero + cantidadAgregada;
        stock.innerHTML = "";
        stockDispo -= cantidadAgregada;
        stock.innerHTML = `Stock disponible: ${stockDispo}`;
        precio.value = `$ ${(numero + cantidadAgregada) * precioProducto}`;
    }
}

//Función para reestablecer los datos del formulario
const limpiarFormulario = () => {
    correo.value = "";
    cantidad.value = 0;
    stockDispo = 50;
    stock.innerHTML = `Stock disponible: ${stockDispo}`;
    precio.value = `$ ${0}`;
    botonComprar.disabled = true;
}

//Función para cargar las comunas en los select en base a la región seleccionada
const cargarOptionComuna = () => {
    let region = selectRegion.value;
    selectComuna.replaceChildren("");
    switch (region) {
        case "Valparaiso":
            for (let comuna of valparaiso) {
                let option = document.createElement("option");
                option.value = comuna;
                option.text = comuna;
                selectComuna.appendChild(option);
            }
            break;
        case "Santiago":
            for (let comuna of santiago) {
                let option = document.createElement("option");
                option.value = comuna;
                option.text = comuna;
                selectComuna.appendChild(option);
            }
            break;
    }
}

//Función de compra, se validan los datos ingresados
const comprar = () => {
    let cantidadCompra = cantidad.value;
    let totalCompra = precio.value.split("$")[1];
    let correoCompra = correo.value.trim();
    let errores = [];
    if (cantidadCompra == 0) {
        errores.push("No puede comprar 0 productos");
    }
    if (!(validarCorreo(correoCompra))) {
        errores.push("Correo incorrecto");
    }
    if (errores.length == 0) {
        Swal.fire({
            title: "¿Está seguro que estos datos están correctos?",
            text: `correo: ${correoCompra} - cantidad de compra: ${cantidadCompra} - total compra: ${totalCompra}`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then(resultado => {
            //Si el usuario está conforme con los datos ingresados, se muestra el modal para la dirección de envío
            if (resultado.isConfirmed) {
                botonModal.disabled = false;
                botonModal.click();
                botonModal.disabled = true;
            } else {
                limpiarFormulario();
            }
        });
    } else {
        let mensajeError = "";
        for (let error of errores) {
            mensajeError += ` ${error}`;
        }
        Swal.fire({
            title: "Error",
            text: mensajeError,
            icon: "error"
        });
    }
}

//Validación de los datos ingresados en el modal de envío
const confirmarEnvio = () => {
    let nombreEnvio = nombre.value.trim();
    let apellidoEnvio = apellido.value.trim();
    let direccionEnvio = direccion.value.trim();
    let codigoPostalEnvio = codigoPostal.value.trim();
    let ciudadEnvio = ciudad.value.trim();
    let paisEnvio = pais.value;
    let regionEnvio = selectRegion.value;
    let comunaEnvio = selectComuna.value;
    let errores = [];
    //Validaciones
    if (nombreEnvio == "") {
        errores.push("nombre");
    }
    if (apellidoEnvio == "") {
        errores.push("apellido");
    }
    if (direccionEnvio == "") {
        errores.push("dirección");
    }
    if (codigoPostalEnvio == "") {
        errores.push("codigo postal");
    }
    if (ciudadEnvio == "") {
        errores.push("ciudad del envío");
    }
    //En el caso de no haber errores, se muestra un mensaje
    //Esto se puede cambiar por una redirección a un entorno seguro de pago, por ejemplo, transbank api
    if (errores.length == 0) {
        let nroCompra = Math.round(Math.random() * 100);
        console.log(nroCompra);
        Swal.fire({
            title: "Compra realizada con éxito",
            text: `Gracias por comprar en Achúntale, tu número de orden es: ${nroCompra}`,
            icon: "success"
        }).then(resultado => {
            window.location.reload();
        });
    }
    //En caso de que los datos ingresados sean nulos, se muestra un mensaje de error 
    else {
        let mensajeError = ""
        let ultimo = (errores[errores.length - 1]);
        for (let error of errores) {
            if (error == ultimo) {
                mensajeError += ` ${error}.`;
            } else {
                mensajeError += `${error}, `
            }
        }
        Swal.fire({
            title: "Error en el ingreso de datos",
            text: `Ingrese los datos solicitados: ${mensajeError}`,
            icon: "warning"
        });
    }
}

//EVENTOS

//Eventos click de los botones de agregar y quitar
botonAgregar.addEventListener("click", () => {
    agregar(1);
});
botonAgregar5.addEventListener("click", () => {
    agregar(5);
})
botonQuitar.addEventListener("click", () => {
    agregar(-1);
});
botonQuitar5.addEventListener("click", () => {
    agregar(-5);
});

//Evento click del boton limpiar formulario
botonLimpiar.addEventListener("click", () => {
    limpiarFormulario();
});

//Evento click del boton comprar
botonComprar.addEventListener("click", () => {
    comprar();
});

//Evento keyup del campo correo en el formulario (realizar validacion)
correo.addEventListener("keyup", () => {
    if (validarCorreo(correo.value.trim())) {
        botonComprar.disabled = false;
    } else {
        botonComprar.disabled = true;
    }
});

//Al cargar la página, se carga el select del modal
window.addEventListener("DOMContentLoaded", () => {
    cargarOptionComuna();
});

//Al cambiar el select de región, se realiza la carga de las comunas en base a la región seleccionada
selectRegion.addEventListener("change", () => {
    cargarOptionComuna();
});

//Evento click del botón cancelar del modal
botonModalCancelar.addEventListener("click", () => {
    limpiarFormulario();
});

//Evento click del boton confirmar del modal
botonModalConfirmar.addEventListener("click", () => {
    confirmarEnvio();
});

