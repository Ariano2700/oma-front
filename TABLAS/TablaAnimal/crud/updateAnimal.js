//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  e.preventDefault();
  actualizarAnimal();
});

function actualizarAnimal() {
  /*Inputs*/
  const idAnimalInput = document.getElementById("SelectAnimal").value;
  const nombreInput = document.getElementById("nombre").value;
  const edadInput = document.getElementById("edad").value;
  const sexoSelect = document.getElementById("sexo").value;
  const tipoInput = document.getElementById("tipo").value;
  const estadoInput = document.getElementById("estado").value;
  const idRecinto = document.getElementById("SelectRecinto").value;
  const idEspecie = document.getElementById("SelectEspecie").value;

  // Realizar validaciones
  if (
    !idAnimalInput ||
    !nombreInput ||
    !edadInput ||
    !sexoSelect ||
    !tipoInput ||
    !estadoInput ||
    !idRecinto ||
    !idEspecie
  ) {
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
        nombreAnimal: nombreInput,
        edad: edadInput,
        sexo: sexoSelect,
        tipo: tipoInput,
        estado: estadoInput,
        idEspecie: idEspecie,
        idRecinto: idRecinto,
      };
      fetch(
        `http://localhost:8080/api/animal/actualizar/animal/${idAnimalInput}`,
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
