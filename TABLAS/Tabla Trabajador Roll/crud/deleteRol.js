const deleteTRol = document.getElementById("deleteTb");

deleteTRol.addEventListener("click", function (e) {
  eliminarTRol();
});

function eliminarTRol() {
  const idTRol = document.getElementById("id_roll").value;

  if (!idTRol || isNaN(idTRol)) {
    alert("Ingresa un ID de rol válido.");
    return;
  }

  if (confirm("¿Seguro que deseas eliminar este rol?")) {
    fetch(`http://localhost:8080/api/rol/eliminar/rol/${idTRol}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Rol eliminado exitosamente.");
          window.location.reload(); // Recargar la página o realizar alguna acción adecuada
        } else {
          alert("Error al eliminar el rol.");
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud DELETE:", error);
      });
  }
}
