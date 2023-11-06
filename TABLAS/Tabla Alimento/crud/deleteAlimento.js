//Eliminar Alimento
const deleteTb = document.getElementById("deleteTb");
deleteTb.addEventListener('click', function(e){
    eliminarAlimento();
})
function eliminarAlimento() {
    const idAlimento = document.getElementById("id_alimento").value;

    if (!idAlimento || isNaN(idAlimento)) {
        alert("Ingresa un ID de alimento válido.");
        return;
    }

    if (confirm("¿Seguro que deseas eliminar este alimento?")) {
        fetch(`http://localhost:8080/api/alimento/eliminar/alimento/${idAlimento}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Alimento eliminado exitosamente.");
                    window.location.reload(); // Recargar la página
                } else {
                    alert("Error al eliminar el alimento.");
                }
            })
            .catch((error) => {
                console.error("Error al realizar la solicitud DELETE:", error);
            });
    }
}