// ANIMACION RATON CABECERA 

$(document).on("mousemove", function (e) {
    var cursor = $(".cursor");
    cursor.attr(
      "style",
      "top:" + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;"
    );
});


$(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 80) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
      }
    });
});


// MENU 



// SLIDER TRANSPORTE 

let $items = $('.slider .item');
let active = 2;

function loadShow() {
    $items.eq(active).css({
        transform: 'none',
        zIndex: 1,
        filter: 'none',
        opacity: 1
    });

    // show after
    let stt = 0;
    for (let i = active + 1; i < $items.length; i++) {
        stt++;
        $items.eq(i).css({
            transform: `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`,
            zIndex: -stt,
            filter: 'blur(5px)',
            opacity: stt > 2 ? 0 : 0.6
        });
    }

    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        $items.eq(i).css({
            transform: `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`,
            zIndex: -stt,
            filter: 'blur(5px)',
            opacity: stt > 2 ? 0 : 0.6
        });
    }
}

loadShow();

$('#next').on('click', function () {
    active = active + 1 < $items.length ? active + 1 : active;
    loadShow();
});

$('#prev').on('click', function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
});


// AOS

$(document).ready(function () {
    // Inicialización de AOS
    AOS.init({
        duration: 1500,
    });
});


// CARRUSEL 

$(document).ready(function(){
    let currentIndex = 1;
    const slides = $(".slide");
    let slidesCont = $(".slides");
    let autoSlide;
    let dots = $(".dot");
    

    // función que mostrará el slide correspoondiente a un índice 
    function showSlide(indexSlide) {
        let realIndex = indexSlide -1 
        let percTranslateX = - realIndex * 100; 
        slidesCont.css("transform", "translateX(" + percTranslateX +"%)");
        dots.removeClass("active").eq(realIndex).addClass("active");
    }

    // función para mostrar la anterior slide 
    function prevSlide(){
        currentIndex = currentIndex - 1;
        // currentIndex-=1

        if (currentIndex < 1 ) {
            currentIndex = slides.length;
        }

        showSlide(currentIndex);

    }


    // función para mostrar la siguiente slide 
    function nextSlide(){
        currentIndex = currentIndex + 1;
        // currentIndex +=2;

        if (currentIndex > slides.length) {
            currentIndex = 1;
        }

        showSlide(currentIndex);
    }


    // función para activar el slideshow automático 
    // esta función propia va a usar a su vez una función built-in sertInterval()
    function startAutoSlide(){
        autoSlide = setInterval(nextSlide, 4000);
    }

    // función para detener el slide automático 
    // la llamaremos cuando el usuario interactue con el slideshow 
    // clearInterval()
    function stopAutoslide(){
        clearInterval(autoSlide);
    };

    startAutoSlide();

});



// GALERIA DE CULTURA 

$(document).ready(function () {
    const modal = $(".modal-carrusel");
    const modalImage = $(".current-image");
    const images = $(".gallery-cultura img");
    let currentIndex = 0;

    // Mostrar el modal con la imagen seleccionada
    images.on("click", function () {
        currentIndex = images.index(this);
        modalImage.attr("src", $(this).attr("src"));
        modal.fadeIn();
    });

    // Cerrar el modal
    $(".close").on("click", function () {
        modal.fadeOut();
    });

    // Navegar a la siguiente imagen
    $(".right-arrow").on("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.attr("src", images.eq(currentIndex).attr("src"));
    });

    // Navegar a la imagen anterior
    $(".left-arrow").on("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.attr("src", images.eq(currentIndex).attr("src"));
    });

    // Cerrar modal al presionar fuera de la imagen
    modal.on("click", function (e) {
        if (!$(e.target).hasClass("current-image") && !$(e.target).hasClass("arrow")) {
            modal.fadeOut();
        }
    });
});


// VENTANA MODAL SEGOVIA EN DATOS 

$(document).ready(function () {
    // Abrir modal
    $(".dataicons figure").on("click", function () {
        const target = $(this).data("target");
        $("#" + target).fadeIn();
    });

    // Cerrar modal
    $(".modal .close").on("click", function () {
        $(this).closest(".modal").fadeOut();
    });

    // Cerrar modal al hacer clic fuera del contenido
    $(".modal").on("click", function (e) {
        if ($(e.target).hasClass("modal")) {
            $(this).fadeOut();
        }
    });

    // Cargar gráficos al abrir el modal
    $("#modal-clima").on("show", function () {
        cargaGraficoBarras();
    });

    $("#modal-poblacion").on("show", function () {
        cargaGraficoTarta();
    });

    $("#modal-gastronomia").on("show", function () {
        cargaGraficoLinea();
    });
});



// GRAFICOS 

//  * Función para generar el gráfico de barras
//  */
function cargaGraficoBarras() {
    var datos = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [
            {
                label: "Grados",
                backgroundColor: "#1ea6d8",
                data: [4, 6, 9, 12, 16, 20, 24, 23, 20, 14, 8, 5],
            },
        ],
    };
    var grafico = $("#barras");
    new Chart(grafico, {
        type: "bar",
        data: datos,
        options: {
            plugins: {
                title: {
                    position: "bottom",
                    display: true,
                    text: "Temperatura media a lo largo del año en la ciudad de Segovia",
                    padding: {
                        top: 30,
                    },
                },
            },
        },
    });
}

/**
 * Función para generar el gráfico de tarta
 */
function cargaGraficoTarta() {
    var datos = {
        labels: ["-18", "18-35", "36-65", "+65"],
        datasets: [
            {
                label: "%",
                backgroundColor: ["#1ea6d8", "#2b7a96", "#234b59", "#16252a"],
                data: [20, 25, 35, 20],
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
                    text: "Distribución de la población de la ciudad de Segovia en grupos de edades",
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
        labels: ["2010", "2012", "2015", "2018", "2020", "2023"],
        datasets: [
            {
                label: "%",
                backgroundColor: "#1ea6d8",
                data: [60, 55, 70, 78, 80, 85],
            },
        ],
    };
    var grafico = $("#linea");
    new Chart(grafico, {
        type: "line",
        data: datos,
        options: {
            plugins: {
                title: {
                    position: "bottom",
                    display: true,
                    text: "Porcentaje de ingredientes locales (cordero, cochinillo, judiones de La Granja, y vinos de la región) utilizados en los restaurantes.",
                    padding: {
                        top: 30,
                    },
                },
            },
        },
    });
}

$(document).ready(function () {
    "use strict";
    cargaGraficoBarras();
    cargaGraficoTarta();
    cargaGraficoLinea();
});





// FORMULARIO DE OPINIONES 

$(document).ready(function () {
    // Manejo del envío del formulario
    $("#opinion-form").on("submit", function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        let name = $("#name").val();
        let opinion = $("#opinion").val();

        // Crear un nuevo bloque de opinión
        let newOpinion = $("<div class='opinion'></div>");
        newOpinion.append("<p class='opinion-text'>" + '"' + opinion + '"</p>');
        newOpinion.append("<p class='opinion-author'>- " + name + "</p>");

        // Agregar la nueva opinión al listado
        $(".opinions-list").prepend(newOpinion);

        // Limpiar el formulario
        $("#name").val("");
        $("#opinion").val("");

        // Mostrar mensaje de éxito
        $(".message").fadeIn().delay(2000).fadeOut();
    });
});

