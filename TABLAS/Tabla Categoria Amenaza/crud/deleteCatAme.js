//Eliminar Alimento
const deleteTb = document.getElementById("deleteTb");
deleteTb.addEventListener('click', function(e){
    eliminarCategoriaAmenaza();
})
function eliminarCategoriaAmenaza() {
    const idCatAme = document.getElementById("id_Amenaza").value;

    if (!idCatAme || isNaN(idCatAme)) {
        alert("Ingresa un ID de alimento válido.");
        return;
    }

    if (confirm("¿Seguro que deseas eliminar este recinto?")) {
        fetch(`http://localhost:8080/api/categoriaamenaza/eliminar/categoriaamenaza/${idCatAme}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Categoria amenaza eliminada exitosamente.");
                    window.location.reload(); // Recargar la página
                } else {
                    alert("Error al eliminar el Categoria amenaza .");
                }
            })
            .catch((error) => {
                console.error("Error al realizar la solicitud DELETE:", error);
            });
    }
}