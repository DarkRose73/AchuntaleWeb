"use strict"

const contenidoQuienesSomos = document.getElementById("cuerpo");

const cambiarContenidoQuienesSomos = () => {
    contenidoQuienesSomos.innerHTML = "";
    contenidoQuienesSomos.innerHTML = `

    <!-- Contenido -->
    <div class="container-fluid">
        <!-- CARRUSEL DE IMÁGENES -->
        <div class="row">
            <div class="col-sm-8 my-2 mx-auto">
                <div class="contenedor">
                    <div class="contenedor-carrusel">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="3"
                                    aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="4"
                                    aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="5"
                                    aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="6"
                                    aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="7"
                                    aria-label="Slide 8"></button>
                                <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="8"
                                    aria-label="Slide 9"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/DavidOjeda.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>David Ojeda</h4>
                                        <p>Gerente general</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/KevinCruces.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Kevin Cruces</h4>
                                        <p>Gerente de operaciones y producción</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/ValentinaRamirez.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Valentina Ramírez</h4>
                                        <p>Gerente de ventas</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/GabrielaGonzalez.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Gabriela González</h4>
                                        <p>Gerente de administración y R.R.H.H.</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/FernandaAguero.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Fernanda Agüero</h4>
                                        <p>Community manager</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/SantiagoAbarca.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Santiago Abarca</h4>
                                        <p>Gerente de finanzas</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/GeraldValenzuela.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Gerald Valenzuela</h4>
                                        <p>Gerente de operaciones y producción</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/AlexisPinto.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Alexis Pinto</h4>
                                        <p>Gerente de marketing</p>
                                    </div>
                                </div>
                                <div class="carousel-item imagen-carrusel" data-bs-interval="3000">
                                    <img src="images/equipo/JavieraYakasovic.png" alt="...">
                                    <div class="texto-carrusel">
                                        <h4>Javiera Yakasovic</h4>
                                        <p>Gerente de innovación</p>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

            <!-- COMO SURGE -->
            <div class="col-sm-3 text-end mx-auto my-4">
                <div class="card" style="background-color: rgba(255, 128, 0, 0.8);color: #000;">
                    <div class="card-header text-center">
                        <span>
                            <h2>Surgimiento</h2>
                        </span>
                    </div>
                    <div class="card-body text-center" style="color: black; height: 180px;">
                        <p>
                        <h5>Achúntale es una empresa que surge en la Universidad Técnica Federico Santa María, como
                            proyecto de la asignatura “Creación de Empresas”.</h5>
                        </p>
                    </div>
                </div>
            </div>

            <!-- MISION -->
            <div class="col-sm-3 text-end mx-auto my-4">
                <div class="card" style="background-color: rgba(255, 128, 0, 0.8);color: #000;">
                    <div class="card-header text-center">
                        <span>
                            <h2>Misión</h2>
                        </span>
                    </div>
                    <div class="card-body text-center" style="height: 180px;">
                        <p>
                        <h5>Recuperar el tiempo perdido a través de la entretención <br> "Hacer un mundo más
                            entretenido"</h5>
                        </p>
                    </div>
                </div>
            </div>


            <!-- VISION -->
            <div class="col-sm-3 text-end mx-auto my-4">
                <div class="card" style="background-color: rgba(255, 128, 0, 0.8);color: #000;">
                    <div class="card-header text-center">
                        <span>
                            <h2>Visión</h2>
                        </span>
                    </div>
                    <div class="card-body text-center" style="height: 180px;">
                        <p>
                        <h5>"Convertirnos en una empresa reconocida dentro de la región, relacionados
                            alentretenimiento y tiempo de calidad através de nuestro producto"</h5>
                        </p>
                    </div>
                </div>
            </div>

            <!-- VALORES -->
            <div class="col-sm-3 mx-auto my-4">
                <div class="card" style="background-color: rgba(255, 128, 0, 0.8);color: #000;">
                    <div class="card-header text-center">
                        <span>
                            <h2>Valores</h2>
                        </span>
                    </div>
                    <div class="card-body" style="height: 180px;">
                        <ul>
                            <li>
                                <h5>Entretención</h5>
                            </li>
                            <br>
                            <li>
                                <h5>Recreación</h5>
                            </li>
                            <br>
                            <li>
                                <h5>Convivencia</h5>
                            </li>
                        </ul>
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
    contenidoQuienesSomos.style.animation = "aparecer 2s forwards";
}

setTimeout(cambiarContenidoQuienesSomos, 2500);