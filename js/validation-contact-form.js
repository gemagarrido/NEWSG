// VALIDACIÓN FORMULARIO DE CONTACTO 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const inputs = form.querySelectorAll("input, textarea");

    // Validaciones específicas por campo
    const validateField = (input) => {
        const errorField = input.nextElementSibling;
        let isValid = true;

        // Validación específica para cada campo
        if (input.id === "name") {
            const regex = /^[A-Za-z\s]{3,}$/;
            isValid = regex.test(input.value);
            errorField.textContent = isValid ? "" : "Por favor, ingresa un nombre válido (mínimo 3 caracteres).";
        } else if (input.id === "email") {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = regex.test(input.value);
            errorField.textContent = isValid ? "" : "Por favor, ingresa un correo electrónico válido.";
        } else if (input.id === "consulta") {
            isValid = input.value.trim().length > 0;
            errorField.textContent = isValid ? "" : "La consulta no puede estar vacía.";
        }

        // Agregar clases de error o éxito
        if (isValid) {
            input.classList.add("valid");
            input.classList.remove("error");
        } else {
            input.classList.add("error");
            input.classList.remove("valid");
        }

        return isValid;
    };

    // Validar cada campo al escribir
    inputs.forEach((input) => {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        input.insertAdjacentElement("afterend", errorMessage);

        input.addEventListener("input", () => {
            validateField(input);
        });
    });

    // Validar todo el formulario antes de enviar
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isFormValid = true;

        inputs.forEach((input) => {
            const isValid = validateField(input);
            if (!isValid) isFormValid = false;
        });

        if (isFormValid) {
            alert("Formulario enviado con éxito.");
            form.reset();
            inputs.forEach((input) => input.classList.remove("valid"));
        } else {
            alert("Por favor, corrige los errores antes de enviar.");
        }
    });
});
