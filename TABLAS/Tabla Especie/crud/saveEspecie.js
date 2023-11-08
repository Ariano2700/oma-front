const saveEspecieButton = document.getElementById("saveTb");

saveEspecieButton.addEventListener("click", function (e) {
  e.preventDefault();
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
  const idCategoriaAmenaza = document.getElementById(
    "id_categoria_amenaza"
  ).value;
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
    const title = "Campos incompletos";
    const text =
      "Faltan campos en el formulario para completar la subida de datos";
    alertNoComplete(title, text);
  } else {
    Swal.fire({
      title: "¿Estas seguro de los datos?",
      text: "Los datos se subiran a la tabla seleccionada!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, subir datos",
    }).then((result) => {
      if (result.isConfirmed) {
        const dataToSend = {
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
        fetch("http://localhost:8080/api/especie/guardar/especie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              const title = "Datos no mandados";
              const text = "Error al subir los datos";
              alertNoComplete(title, text);
              throw new Error(text);
            }
          })
          .then((data) => {
            Swal.fire({
              title: "¡Datos subidos!",
              text: "Los datos han sido subidos satisfactoriamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
            console.log("datos subidos", data);
          })
          .catch((error) => {
            console.error("Error:", error);
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
