//Eliminar Alimento
const deleteTb = document.getElementById("deleteTb");
deleteTb.addEventListener('click', function(e){
    eliminarAnimal();
})
function eliminarAnimal() {
    const idAnimal = document.getElementById("id_animal").value;

    if (!idAnimal || isNaN(idAnimal)) {
        alert("Ingresa un ID de alimento válido.");
        return;
    }

    if (confirm("¿Seguro que deseas eliminar este animal?")) {
        fetch(`http://localhost:8080/api/animal/eliminar/animal/${idAnimal}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Animal eliminado exitosamente.");
                    window.location.reload(); // Recargar la página
                } else {
                    alert("Error al eliminar el animal.");
                }
            })
            .catch((error) => {
                console.error("Error al realizar la solicitud DELETE:", error);
            });
    }
}