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
