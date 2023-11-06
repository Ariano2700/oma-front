//Eliminar Alimento
const deleteTb = document.getElementById("deleteTb");
deleteTb.addEventListener('click', function(e){
    eliminarRecinto();
})
function eliminarRecinto() {
    const idRecinto = document.getElementById("id_recinto").value;

    if (!idRecinto || isNaN(idRecinto)) {
        alert("Ingresa un ID de alimento válido.");
        return;
    }

    if (confirm("¿Seguro que deseas eliminar este recinto?")) {
        fetch(`http://localhost:8080/api/recinto/eliminar/recinto/${idRecinto}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Recinto eliminado exitosamente.");
                    window.location.reload(); // Recargar la página
                } else {
                    alert("Error al eliminar el recinto.");
                }
            })
            .catch((error) => {
                console.error("Error al realizar la solicitud DELETE:", error);
            });
    }
}