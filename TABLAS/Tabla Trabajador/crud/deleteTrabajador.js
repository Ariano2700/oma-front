const deleteTb = document.getElementById("deleteTb");

deleteTb.addEventListener("click", function (e) {
  eliminarTrabajador();
});

function eliminarTrabajador() {
  const idTrabajador = document.getElementById("id_trabajador").value;

  if (!idTrabajador || isNaN(idTrabajador)) {
    const title = "Falta ID";
    const text =
      "Se tiene que colocar un ID valido para realizar esta operacion";
    alertNoComplete(title, text);
  } else {
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
          `http://localhost:8080/api/trabajador/eliminar/trabajador/${idTrabajador}`,
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
}
function alertNoComplete(title, text) {
  const alertNoComplete = Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  return alertNoComplete;
}

function alertSuccess() {
  const alertSuccess = Swal.fire({
    title: "¡Datos subidos!",
    text: `Datos mandados correctamente`,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  return alertSuccess;
}
