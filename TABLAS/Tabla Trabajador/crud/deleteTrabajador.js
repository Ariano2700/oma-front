const deleteTb = document.getElementById("deleteTb");

deleteTb.addEventListener("click", function (e) {
    eliminarTrabajador();
});

function eliminarTrabajador() {
    const idTrabajador = document.getElementById("id_trabajador").value;

    if (!idTrabajador || isNaN(idTrabajador)) {
        alert("Ingresa un ID de trabajador válido.");
        return;
    }

    if (confirm("¿Seguro que deseas eliminar a este trabajador?")) {
        fetch(`http://localhost:8080/api/trabajador/eliminar/trabajador/${idTrabajador}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    alert("Trabajador eliminado exitosamente.");
                    window.location.reload(); // Recargar la página
                } else {
                    alert("Error al eliminar el trabajador.");
                }
            })
            .catch((error) => {
                console.error("Error al realizar la solicitud DELETE:", error);
            });
    }
}