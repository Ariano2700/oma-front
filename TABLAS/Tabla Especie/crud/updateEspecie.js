const updateEspecieButton = document.getElementById("editTb");

updateEspecieButton.addEventListener("click", function (e) {
  e.preventDefault();
  actualizarEspecie();
});

function actualizarEspecie() {
  const idEspecie = document.getElementById("id_especie").value;

  if (!idEspecie) {
    alert("Ingresa el ID de la especie que deseas actualizar.");
    return;
  }

  // Obtén los datos de los campos que deseas actualizar
  const clase = document.getElementById("clase").value;
  const nombreComun = document.getElementById("nombre_comun").value;
  const nombreCientifico = document.getElementById("nombre_cientifico").value;
  const especie = document.getElementById("especie").value;
  const orden = document.getElementById("orden").value;
  const familia = document.getElementById("familia").value;
  const genero = document.getElementById("genero").value;
  const idCategoriaAmenaza = document.getElementById(
    "id_categoria_amenaza"
  ).value;
  const idAlimento = document.getElementById("id_alimento").value;

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
        clase: clase,
        nombreComun: nombreComun,
        nombreCientifico: nombreCientifico,
        especie: especie,
        orden: orden,
        familia: familia,
        genero: genero,
        idCategoriaAmenaza: idCategoriaAmenaza,
        idAlimento: idAlimento,
      };

      fetch(
        `http://localhost:8080/api/especie/actualizar/especie/${idEspecie}`,
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
