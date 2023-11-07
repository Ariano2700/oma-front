/*BOTONES */
const saveTb = document.getElementById("saveTb");

function saveData() {
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;

  if (!nombre || !descripcion) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const data = {
    nombre: nombre,
    descripcion: descripcion,
  };

  fetch("http://localhost:8080/api/rol/guardar/rol", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Rol guardado exitosamente.");
        window.location.reload(); // Recargar la página o realizar alguna acción adecuada
      } else {
        alert("Error al guardar el rol.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud POST:", error);
    });
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
