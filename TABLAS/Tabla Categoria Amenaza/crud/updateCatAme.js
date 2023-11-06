//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
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

  const data = {
    minagri: minadriInput,
    cites: citeslInput,
    uicn: uicnInput,
  };

  // Realiza la solicitud PUT para actualizar el alimento
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
        alert("Categoria amenaza actualizado exitosamente.");
      } else {
        alert("Error al actualizar la categoria.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud PUT:", error);
    });
}
