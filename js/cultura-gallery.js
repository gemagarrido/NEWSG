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