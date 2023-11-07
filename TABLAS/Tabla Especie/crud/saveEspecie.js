const saveEspecieButton = document.getElementById("saveTb");

saveEspecieButton.addEventListener("click", function (e) {
  saveEspecie();
});

function saveEspecie() {
  //const idEspecie = document.getElementById("id_especie").value;
  const clase = document.getElementById("clase").value;
  const nombreComun = document.getElementById("nombre_comun").value;
  const nombreCientifico = document.getElementById("nombre_cientifico").value;
  const especie = document.getElementById("especie").value;
  const orden = document.getElementById("orden").value;
  const familia = document.getElementById("familia").value;
  const genero = document.getElementById("genero").value;
  const idCategoriaAmenaza = document.getElementById("id_categoria_amenaza").value;
  const idAlimento = document.getElementById("id_alimento").value;

  if (
    !clase ||
    !nombreComun ||
    !nombreCientifico ||
    !especie ||
    !orden ||
    !familia ||
    !genero ||
    !idCategoriaAmenaza ||
    !idAlimento
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const data = {
    "clase": clase,
    "nombreComun": nombreComun,
    "nombreCientifico": nombreCientifico,
    "especie": especie,
    "orden": orden,
    "familia": familia,
    "genero": genero,
    "idCategoriaAmenaza": idCategoriaAmenaza,
    "idAlimento": idAlimento
  };

  fetch('http://localhost:8080/api/especie/guardar/especie', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Especie guardada exitosamente.");
        window.location.reload(); // Recargar la página
      } else {
        alert("Error al guardar la especie.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud POST:", error);
    });
}
