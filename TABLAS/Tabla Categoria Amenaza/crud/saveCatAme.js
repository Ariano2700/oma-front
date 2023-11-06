/*formulario*/
const formAlimento = document.getElementById("formRecinto");
/*BOTONES */
const saveTb = document.getElementById("saveTb");

function saveData() {
  /*Inputs*/
  const minadriInput = document.getElementById("MINADRI").value;
  const citeslInput = document.getElementById("CITESL").value;
  const uicnInput = document.getElementById("UICN").value;
  if (!minadriInput || !citeslInput || !uicnInput) {
    const title = "Campos incompletos";
    const text =
      "Faltan campos en el formulario para completar la subida de datos";
    alertNoComplete(title, text);
  } else {
    const dataToSend = {
      minagri: minadriInput,
      cites: citeslInput,
      uicn: uicnInput,
    };
    fetch(`http://localhost:8080/api/categoriaamenaza/guardar/categoriaamenaza`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (response.ok) {
          alertSuccess();
          //window.location.reload();
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
  e.preventDefault();
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
