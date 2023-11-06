//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  actualizarAnimal();
});

function actualizarAnimal() {
  /*Inputs*/
  const idRecintoInput = document.getElementById("id_recinto").value;
  const nombreInput = document.getElementById("nombre").value;
  const tipoInput = document.getElementById("tipo").value;
  const estadoInput = document.getElementById("estado").value;
  const ubicacionInput = document.getElementById("ubicacion").value;

  // Realizar validaciones
  if (
    !idRecintoInput ||
    !nombreInput ||
    !tipoInput ||
    !estadoInput ||
    !ubicacionInput
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const data = {
    nombre: nombreInput,
    tipo: tipoInput,
    estado: estadoInput,
    ubicacion: ubicacionInput,
  };

  // Realiza la solicitud PUT para actualizar el alimento
  fetch(`http://localhost:8080/api/recinto/actualizar/recinto/${idRecintoInput}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Recinto actualizado exitosamente.");
      } else {
        alert("Error al actualizar el recinto.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud PUT:", error);
    });
}
