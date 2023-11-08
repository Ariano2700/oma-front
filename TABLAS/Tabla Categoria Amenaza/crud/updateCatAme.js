//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  e.preventDefault();
  actualizarAnimal();
});

function actualizarAnimal() {
  /*Inputs*/
  const idCatAme = document.getElementById("id_Amenaza").value;
  const minadriInput = document.getElementById("MINADRI").value;
  const citeslInput = document.getElementById("CITESL").value;
  const uicnInput = document.getElementById("UICN").value;

  // Realizar validaciones
  if (!minadriInput || !citeslInput || !uicnInput) {
    alert("Todos los campos son obligatorios.");
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
        minagri: minadriInput,
        cites: citeslInput,
        uicn: uicnInput,
      };
      fetch(
        `http://localhost:8080/api/categoriaamenaza/actualizar/categoriaamenaza/${idCatAme}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
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
