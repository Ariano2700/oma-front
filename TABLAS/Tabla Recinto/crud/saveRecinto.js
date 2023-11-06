/*formulario*/
const formAlimento = document.getElementById("formRecinto");
/*BOTONES */
const saveTb = document.getElementById("saveTb");

function saveData() {
  /*Inputs*/
  //const idRecintoInput = document.getElementById("id_recinto").value;
  const nombreInput = document.getElementById("nombre").value;
  const tipoInput = document.getElementById("tipo").value;
  const estadoInput = document.getElementById("estado").value;
  const ubicacionInput = document.getElementById("ubicacion").value;
  if (!nombreInput || !tipoInput || !estadoInput || !ubicacionInput) {
    const title = "Campos incompletos";
    const text =
      "Faltan campos en el formulario para completar la subida de datos";
    alertNoComplete(title, text);
  } else {
    const dataToSend = {
      nombre: nombreInput,
      tipo: tipoInput,
      estado: estadoInput,
      ubicacion: ubicacionInput,
    };
    fetch(`http://localhost:8080/api/recinto/guardar/recinto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.ok) {
          alertSuccess();
          window.location.reload();
          return response.json();
        } else {
          const title = "Datos no mandados";
          const text = "Error al subir los datos";
          alertNoComplete(title, text);
          throw new Error(text);
        }
      })
      .then((data) => {
        console.log("datos subidos", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
saveTb.addEventListener("click", function (e) {
  //e.preventDefault();
  saveData();
});

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
