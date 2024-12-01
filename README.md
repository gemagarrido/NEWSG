APARTADO DE DATOS Y GRAFICOS 

        <section>
            <div id="about" class="section-one p-125" style="background-image: url(img/homepage.jpg);">
                <h1 data-aos="fade-right">Segovia en datos</h1>
            </div>
            <div class="dataicons">
                <a href="#modal-clima">
                    <figure>
                        <i class="fa-solid fa-cloud"></i>
                        <!-- <img src="img/acuarelas.jpg" alt="Caja de acuarelas"> -->
                    </figure>
                </a>
                <a href="#modal-poblacion">
                    <figure>
                        <i class="fa-solid fa-users"></i>
                        <!-- <img src="img/pasteles.jpg" alt="Caja de pasteles al óleo"> -->
                    </figure>
                </a>
                <a href="#modal-gastronomia">
                    <figure>
                        <i class="fa-solid fa-utensils"></i>
                        <!-- <img src="img/acrilico.jpg" alt="Caja de tubos de pintura acrílica"> -->
                    </figure>
                </a>
            </div>

            <div class="modal" id="modal-clima">
                <figure>
                    <div>
                        <canvas id="barras"></canvas>
                    </div>
                    <figcaption>
                        <h3>Acuarelas</h3>
                        <p>Los colores utilizados son más o menos transparentes según la cantidad de agua con la que se mezcla, y a veces dejan ver el fondo del papel, que suele ser blanco y que actúa como un verdadero tono.</p>
                        <p>El producto utilizado para pintar se compone de pigmentos aglutinados con goma arábiga o miel. La acuarela se utiliza pintando por capas transparentes, con el fin de conseguir la máxima brillantez y soltura en la composición que se realiza.</p>
                    </figcaption>
                </figure>
                <p><a href="#">X</a></p>
            </div>
            <div class="modal" id="modal-poblacion">
                <figure>
                    <div>
                        <canvas id="tarta"></canvas>
                    </div>
                    <figcaption>
                        <h3>Pasteles</h3>
                        <p>El lápiz pastel es un instrumento de dibujo cuya mina es una pasta hecha con pigmentos secos moldeados en una barra que se cohesiona mediante una goma o resina. Los lápices carecen de los aglutinantes que poseen otras técnicas como el lápiz de carbón. Esto hace que sea tremendamente difícil de adherir a la superficie pictórica, que suele ser un papel poroso. El medio de asegurarla es mediante el empleo un fijador , pero le resta brillo al pastel y falsea los colores.</p>
                        <p>Es muy apreciado por la delicada gama de colores que ofrece y por una característica otorgada por su propia fragilidad: al carecer de aglutinantes, el color de la barra es exactamente el mismo que obtendrá el artista tras su aplicación. Además, no necesita ser preparada con anticipación y tampoco requiere de tiempo de secado. Esto permite trabajar a gran velocidad con trazos espontáneos y directos.</p>
                    </figcaption>
                </figure>
                <p><a href="#">X</a></p>
            </div>
            <div class="modal" id="modal-gastronomia">
                <figure>
                    <div>
                        <canvas id="linea"></canvas>
                    </div>
                    <figcaption>
                        <h3>Pintura acrílica</h3>
                        <p>Clase de pintura que contiene un material plastificado, pintura de secado rápido, en la que los pigmentos están contenidos en una emulsión de un polímero acrílico. Aunque solubles en agua, una vez que secan son resistentes a la misma. Destaca especialmente por la rapidez del secado. Asimismo, al secar se modifica ligeramente el tono, más que en el óleo.</p>
                        <p>"Látex" es la denominación común de los polímeros obtenidos mediante polimerización en emulsión, y son dispersiones coloidales de partículas muy pequeñas de polímero en un medio continuo. Los látex pueden ser aplicados en la fabricación de pinturas de arquitectura, pero también en adhesivos para madera (cola vinílica), pinturas para papel o como aditivos para cemento y hormigón.</p>
                    </figcaption>
                </figure>
                <p><a href="#">X</a></p>
            </div>
        </section>




.dataicons {
    display: flex;
    justify-content: space-between;
}

.dataicons > a {
    width: 25%;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition-duration: 0.5s;
}

.modal > p > a {
    font-size: 2.5em;
    font-weight: bold;
    margin-top: 2em;
    color: grey;
    text-decoration: none;
}

.modal > figure {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal > figure > canvas,
.modal > figure > figcaption {
    width: 40%;
}

#modal-acuarelas:target,
#modal-pasteles:target,
#modal-acrilico:target {
    opacity: 1;
    visibility: visible;
}




// GRAFICOS 

//  * Función para generar el gráfico de barras
//  */
function cargaGraficoBarras() {
    var datos = {
        labels: ["Google Chrome", "Edge/IE", "Firefox", "Safari", "Opera", "Otros"],
        datasets: [
            {
                label: "%",
                backgroundColor: "#D81E5B",
                data: [81.1, 7.6, 5.2, 3.4, 1.7, 1],
            },
        ],
    };
    var grafico = $("#barras");
    new Chart(grafico, {
        type: "bar",
        data: datos,
    });
}

/**
 * Función para generar el gráfico de tarta
 */
function cargaGraficoTarta() {
    var datos = {
        labels: ["Google Chrome", "Edge/IE", "Firefox", "Safari", "Opera", "Otros"],
        datasets: [
            {
                label: "%",
                backgroundColor: ["#D81E5B", "#F76C9A", "#F52268", "#C21B53", "#75344A", "black"],
                data: [81.1, 7.6, 5.2, 3.4, 1.7, 1],
            },
        ],
    };
    var grafico = $("#tarta");
    new Chart(grafico, {
        type: "pie",
        data: datos,
        options: {
            plugins: {
                title: {
                    position: "bottom",
                    display: true,
                    text: "Navegadores utilizados para acceder a W3Schools en agosto de 2024",
                    padding: {
                        top: 30,
                    },
                },
            },
        },
    });
}

/**
 * Función para generar el gráfico de línea
 */
function cargaGraficoLinea() {
    var datos = {
        labels: ["Google Chrome", "Edge/IE", "Firefox", "Safari", "Opera", "Otros"],
        datasets: [
            {
                label: "%",
                backgroundColor: "#D81E5B",
                data: [81.1, 7.6, 5.2, 3.4, 1.7, 1],
            },
        ],
    };
    var grafico = $("#linea");
    new Chart(grafico, {
        type: "line",
        data: datos,
    });
}

$(document).ready(function () {
    "use strict";
    cargaGraficoBarras();
    cargaGraficoTarta();
    cargaGraficoLinea();
});
