//Eliminar Alimento
const deleteTb = document.getElementById("deleteTb");
deleteTb.addEventListener("click", function (e) {
  e.preventDefault();
  eliminarAlimento();
});
function eliminarAlimento() {
  const idAlimento = document.getElementById("id_alimento").value;

  if (!idAlimento || isNaN(idAlimento)) {
    alert("Ingresa un ID de alimento válido.");
    return;
  }
  Swal.fire({
    title: "¿Estas seguro?",
    text: "!Los datos se borraran de la tabla seleccionada!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonColor: "#56B847",
    confirmButtonText: "Si, borrar datos",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(
        `http://localhost:8080/api/alimento/eliminar/alimento/${idAlimento}`,
        {
          method: "DELETE",
        }
      )
        .then((response) => {
          if (response.ok) {
            Swal.fire({
              title: "¡Datos borrados!",
              text: "Los datos han sido borrados satisfactoriamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } else {
            Swal.fire({
              title: "¡Oops!",
              text: "No se han podido borrar los datos de la tabla.",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud DELETE:", error);
        });
    }
  });
}
