//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  e.preventDefault();
  actualizarRol();
});

function actualizarRol() {
  const idRol = document.getElementById("id_roll").value;
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;

  // Realizar validaciones
  if (!idRol || !nombre || !descripcion) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (isNaN(idRol)) {
    alert("El ID del rol debe ser un número.");
    return;
  }
  Swal.fire({
    title: "¿Estas seguro de los datos?",
    text: "Los datos se actualizaran a la tabla seleccionada!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, actualizar datos",
  }).then((result) => {
    if (result.isConfirmed) {
      const data = {
        nombre: nombre,
        descripcion: descripcion,
      };
      fetch(`http://localhost:8080/api/rol/actualizar/rol/${idRol}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire({
              title: "¡Datos actualizados!",
              text: "Los datos han sido actualizados satisfactoriamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } else {
            const title = "Datos no mandados";
            const text = "Error al actualizar los datos";
            alertNoComplete(title, text);
          }
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud PUT:", error);
        });
    }
  });
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
