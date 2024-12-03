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