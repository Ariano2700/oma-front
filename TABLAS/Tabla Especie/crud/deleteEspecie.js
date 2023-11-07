const deleteEspecieButton = document.getElementById("deleteTb");

deleteEspecieButton.addEventListener("click", function (e) {
    //e.preventDefault();
    eliminarEspecie();
});

function eliminarEspecie() {
    const idEspecie = document.getElementById("id_especie").value;

    if (!idEspecie) {
        alert("Ingresa el ID de la especie que deseas eliminar.");
        return;
    }

    fetch(`http://localhost:8080/api/especie/eliminar/especie/${idEspecie}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.ok) {
                alert("Especie eliminada exitosamente.");
                window.location.reload(); // Recargar la página
            } else {
                alert("Error al eliminar la especie. Asegúrate de que el ID sea correcto.");
            }
        })
        .catch((error) => {
            console.error("Error al realizar la solicitud DELETE:", error);
        });
}
