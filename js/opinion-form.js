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