const contenido = document.getElementById("cuerpo");

const cambiarContenido = () => {
    contenido.innerHTML = "";
    contenido.innerHTML = `

    <!-- CONTENIDO -->
    <div class="container-fluid">
        <!-- CARD DESCRIPCIÓN DEL JUEGO -->
        <div class="card mx-auto bg-dark" style="width: 50%;margin-top: 20px;color: #EADEDE;margin-bottom: 20px;">
            <div class="card-header text-center">
                Descripción del juego
            </div>
            <div class="card-body text-center">
                ¡Derrota a tu oponente achuntando la argolla en los ganchos! <br> <a href="carritoCompra.html">Compra
                    aquí</a>
            </div>
        </div>

        <!-- FILA DE LA IMAGEN PROMOCIONAL Y EL VIDEO -->
        <div class="row">
            <div class="col-sm-6">
                <div class="card mx-auto bg-dark" style="height:auto;width: 600px; padding: 4px;">
                    <img src="images/kitAchuntaleQR.jpeg" class="card-img-top mx-auto" style="width: 590px;" alt="">
                    <div class="card-body bg-light">
                        <h5 class="card-title">Contenido del kit achúntale</h5>
                        <ul>
                            <li>
                                <h6>Vasos</h6>
                            </li>
                            <li>
                                <h6>Juego achúntale</h6>
                            </li>
                            <li>
                                <h6>Morral</h6>
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
            <div class="col-sm-10 mx-auto">
                <div class="card card-body bg-dark" style="color:orange;margin: 20px">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi saepe animi quam dolores
                        maiores distinctio odio nesciunt, repellendus dolore cum sunt. Eum velit necessitatibus, odit
                        voluptas ullam tenetur perferendis.</p>
                </div>
            </div>
        </div>

        <!-- FOOTER DE RRSS -->
        <footer>
            <div class="card-footer">
                <div class="row">
                    <div class="col-sm-4 text-center">
                        <h1>Síguenos en Instagram</h1>
                        <a href="https://www.instagram.com/achuntale_cl/" target="_blank"><img
                                src="images/instagram.png" alt=""></a>
                    </div>
                </div>
            </div>
            <br>
        </footer>
    </div>
    `
    contenido.style.animation = "aparecer 2s forwards";
}

setTimeout(cambiarContenido, 4000);