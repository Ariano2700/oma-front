document.addEventListener("DOMContentLoaded", function () {
    const contenido = document.getElementById("contenido");
    const contenidoa = document.getElementById("contenidoa");
    const editaruserButton = document.getElementById("editaruser");
    const guardaruserButton = document.getElementById("guardaruser");
    const editarbioButton = document.getElementById("editarbio");
    const guardarbioButton = document.getElementById("guardarbio");
    const elementosEditables = document.querySelectorAll(".editable");
    const editarButton = document.getElementById("editarButton");
    const guardarButton = document.getElementById("guardarButton");

    editaruserButton.addEventListener("click", function () {
        contenido.contentEditable = "true";
        contenido.style.border = "1px solid #007bff";
        contenido.style.wordBreak = "break-word";
        contenido.style.textAlign = "center";
        guardaruserButton.style.display = "block";
        editaruserButton.style.display = "none";
    });

    guardaruserButton.addEventListener("click", function () {
        contenido.contentEditable = "false";
        contenido.style.border = "1px solid #ccc";
        contenido.style.textAlign = "center";
        guardaruserButton.style.display = "none";
        editaruserButton.style.display = "block";
    });

    editarbioButton.addEventListener("click", function () {
        contenidoa.contentEditable = "true";
        contenidoa.style.border = "1px solid #007bff";
        contenidoa.style.wordBreak = "break-word";
        contenidoa.style.textAlign = "center";
        guardarbioButton.style.display = "block";
        editarbioButton.style.display = "none";
    });

    guardarbioButton.addEventListener("click", function () {
        contenidoa.contentEditable = "false";
        contenidoa.style.border = "1px solid #ccc";
        contenidoa.style.textAlign = "center";
        guardarbioButton.style.display = "none";
        editarbioButton.style.display = "block";
    });

    editarButton.addEventListener("click", function () {
        for (let elemento of elementosEditables) {
            const textoOriginal = elemento.textContent;
            const input = document.createElement("input");
            input.value = textoOriginal;
            elemento.textContent = "";
            elemento.appendChild(input);
        }
        editarButton.style.display = "none";
        guardarButton.style.display = "block";
    });

    guardarButton.addEventListener("click", function () {
        for (let elemento of elementosEditables) {
            const input = elemento.querySelector("input");
            if (input) {
                elemento.textContent = input.value;
            }
        }
        guardarButton.style.display = "none";
        editarButton.style.display = "block";
    });
});

