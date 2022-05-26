"use strict"

const contenidoInicio = document.getElementById("cuerpo");

const cambiarContenidoInicio = () => {
    contenidoInicio.innerHTML = "";
    contenidoInicio.innerHTML = `
    <!-- CONTENIDO -->
    <div class="container-fluid">
        <!-- CARD DESCRIPCIÓN DEL JUEGO -->
        <div class="card mx-auto" style="width: 40%;margin-top: 20px;color: #000;margin-bottom: 20px; background-color: rgba(255, 128, 0, 0.8);">
            <div class="card-body text-center" style="font-size: 20px;">
                ¡Derrota a tu oponente achuntando la argolla en los ganchos! <br> <a href="carritoCompra.html"
                    style="color:#ffe100;">Compra
                    aquí</a>
            </div>
        </div>

        <!-- FILA DE LA IMAGEN PROMOCIONAL Y EL VIDEO -->
        <div class="row">
            <div class="col-sm-6">
                <div class="card mx-auto bg-dark" style="height:auto;width: 600px; padding: 4px;">
                    <img src="images/kitAchuntaleQR.jpeg" class="card-img-top mx-auto" style="width: 590px;" alt="">
                    <div class="card-body bg-light">
                        <h4 class="card-title">Contenido del kit achúntale</h5>
                        <ul>
                            <li>
                                <h5>Vasos</h5>
                            </li>
                            <li>
                                <h5>Juego achúntale</h5>
                            </li>
                            <li>
                                <h5>Morral</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card mx-auto bg-dark" style="width: fit-content;padding: 2px;">
                    <video src="images/VideoPromo.mp4" preload="auto" loop="true" controls="true" class="card-img-top"
                        style="height: 500px;"></video>
                </div>
            </div>
        </div>

        <!-- SECCION COMENTARIOS -->
        <div class="row">
            <div class="col-md-9 mx-auto">
                <div class="card my-5" style="background-color: rgba(255, 128, 0, 0.4);">
                    <div class="row text-center px-3 py-3">
                        <div class="card col-md-3 mx-auto" style="background-color: #EADEDE;">
                            <div class="card-body border-dark mx-auto">
                                <p style="font-size: 20px;">"Genial el producto, me divertí mucho con mis amigos"</p>
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                            </div>
                            <div class="card-footer">
                                <h6>Joan Salas</h6>
                            </div>
                        </div>

                        <div class="card col-md-3 mx-auto" style="background-color: #EADEDE;">
                            <div class="card-body border-dark mx-auto">
                                <p style="font-size: 20px;">"Muy buen producto, pero se demoró mucho el envío a mi casa"</p>
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starEmpty.png" alt="">
                                <img src="images/starEmpty.png" alt="">
                            </div>
                            <div class="card-footer">
                                <h6>Carlitos Lechuga</h6>
                            </div>
                        </div>
                        <div class="card col-md-3 mx-auto" style="background-color: #EADEDE;">
                            <div class="card-body border-dark mx-auto">
                                <p style="font-size: 20px;">"Muy buen producto, recomendadísimo para los carretes!"</p>
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                                <img src="images/starFull.png" alt="">
                            </div>
                            <div class="card-footer">
                                <h6>Javiera Guerra</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- FOOTER DE RRSS -->
        <footer>
            <div class="card-footer">
                <div class="row">
                    <div class="text-center" style="color:#fff;">
                        <h1>Síguenos en Instagram</h1>
                        <a href="https://www.instagram.com/achuntale_cl/" target="_blank"><img
                                src="images/instagram.png" alt=""></a>
                        <h5>@achuntale_cl</h5>
                    </div>
                </div>
            </div>
            <br>
        </footer>
    </div>
    `
    contenidoInicio.style.animation = "aparecer 2s forwards";
}

setTimeout(cambiarContenidoInicio, 2500);
