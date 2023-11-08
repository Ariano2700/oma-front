//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  e.preventDefault();
  actualizarAnimal()
});

function actualizarAnimal() {
  /*Inputs*/
  const idAnimalInput = document.getElementById("id_animal").value;
  const nombreInput = document.getElementById("nombre").value;
  const edadInput = document.getElementById("edad").value;
  const sexoSelect = document.getElementById("sexo").value;
  const tipoInput = document.getElementById("tipo").value;
  const estadoInput = document.getElementById("estado").value;
  const idRecinto = document.getElementById("id_recinto").value;
  const idEspecie = document.getElementById("id_especie").value;

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

  const data = {
    nombreAnimal: nombreInput,
    edad: edadInput,
    sexo: sexoSelect,
    tipo: tipoInput,
    estado: estadoInput,
    idEspecie: idEspecie,
    idRecinto: idRecinto,
  };

  // Realiza la solicitud PUT para actualizar el alimento
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
        alert("Alimento actualizado exitosamente.");
        window.location.reload(); // Recargar la página
        
      } else {
        alert("Error al actualizar el alimento.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud PUT:", error);
    });
}
