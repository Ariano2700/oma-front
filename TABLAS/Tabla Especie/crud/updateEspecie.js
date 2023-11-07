const updateEspecieButton = document.getElementById("editTb");

updateEspecieButton.addEventListener("click", function (e) {
    e.preventDefault();
    actualizarEspecie();
});

function actualizarEspecie() {
    const idEspecie = document.getElementById("id_especie").value;

    if (!idEspecie) {
        alert("Ingresa el ID de la especie que deseas actualizar.");
        return;
    }

    // Obtén los datos de los campos que deseas actualizar
    const clase = document.getElementById("clase").value;
    const nombreComun = document.getElementById("nombre_comun").value;
    const nombreCientifico = document.getElementById("nombre_cientifico").value;
    const especie = document.getElementById("especie").value;
    const orden = document.getElementById("orden").value;
    const familia = document.getElementById("familia").value;
    const genero = document.getElementById("genero").value;
    const idCategoriaAmenaza = document.getElementById("id_categoria_amenaza").value;
    const idAlimento = document.getElementById("id_alimento").value;

    // Crea un objeto con los datos a actualizar
    const data = {
        "clase": clase,
        "nombreComun": nombreComun,
        "nombreCientifico": nombreCientifico,
        "especie": especie,
        "orden": orden,
        "familia": familia,
        "genero": genero,
        "idCategoriaAmenaza": idCategoriaAmenaza,
        "idAlimento": idAlimento
    };

    fetch(`http://localhost:8080/api/especie/actualizar/especie/${idEspecie}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                alert("Especie actualizada exitosamente.");
                window.location.reload(); // Recargar la página
            } else {
                alert("Error al actualizar la especie. Asegúrate de que el ID sea correcto.");
            }
        })
        .catch((error) => {
            console.error("Error al realizar la solicitud PUT:", error);
        });
}
