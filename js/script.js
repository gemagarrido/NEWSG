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


// MENU HAMBURGUESA





// AOS
$(document).ready(function () {
    AOS.init({
        duration: 1500,
    });
});


// VALIDACION DE FORMULARIO NEWSLETTER
$(document).ready(function () {
    const $form = $(".footer-form");
    const $inputs = $form.find("input");

    // Función para validar campos
    const validateField = ($input) => {
        const $errorField = $input.next(".error-message");
        let isValid = true;

        if ($input.attr("id") === "name" || $input.attr("id") === "surname") {
            const regex = /^[A-Za-z\s]{2,}$/;
            isValid = regex.test($input.val());
            $errorField.text(isValid ? "" : "Este campo debe contener al menos 2 letras y solo caracteres alfabéticos.");
        } else if ($input.attr("id") === "email") {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = regex.test($input.val());
            $errorField.text(isValid ? "" : "Por favor, introduce un correo electrónico válido.");
        }

        // Agregar clases de error o éxito
        $input.toggleClass("error", !isValid);
        $input.toggleClass("valid", isValid);

        return isValid;
    };

    // Generar mensajes de error para cada input
    $inputs.each(function () {
        const $input = $(this);
        $("<p>")
            .addClass("error-message")
            .insertAfter($input);
    });

    // Validar cada campo al escribir
    $inputs.on("input", function () {
        validateField($(this));
    });

    // Validar todo el formulario al enviar
    $form.on("submit", function (event) {
        event.preventDefault();
        let isFormValid = true;

        $inputs.each(function () {
            const $input = $(this);
            const isValid = validateField($input);
            if (!isValid) isFormValid = false;
        });

        if (isFormValid) {
            alert("¡Suscripción exitosa!");
            $form.trigger("reset");
            $inputs.removeClass("valid");
        } else {
            alert("Por favor, corrige los errores antes de enviar.");
        }
    });
});
