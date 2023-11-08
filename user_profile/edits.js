document.addEventListener("DOMContentLoaded", function () {
const contenidoDiv = document.getElementById("contenidob");
const editarBtn = document.getElementById("editar-btn");
const guardarBtn = document.getElementById("guardar-btn");

editarBtn.addEventListener("click", () => {
    contenidoDiv.contentEditable = "true";
    editarBtn.style.display = "none";
    guardarBtn.style.display = "block";
});


guardarBtn.addEventListener("click", () => {
    contenidoDiv.contentEditable = "false";
    guardarBtn.style.display = "none";
    editarBtn.style.display = "block";
});
});