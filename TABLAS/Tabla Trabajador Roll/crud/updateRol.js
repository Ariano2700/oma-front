//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  e.preventDefault();
  actualizarRol();
});

function actualizarRol() {
  const idRol = document.getElementById("id_roll").value;
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;

  // Realizar validaciones
  if (!idRol || !nombre || !descripcion) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (isNaN(idRol)) {
    alert("El ID del rol debe ser un número.");
    return;
  }

  const data = {
    nombre: nombre,
    descripcion: descripcion,
  };

  // Realiza la solicitud PUT para actualizar el rol
  fetch(`http://localhost:8080/api/rol/actualizar/rol/${idRol}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Rol actualizado exitosamente.");
        window.location.reload(); // Recargar la página
      } else {
        alert("Error al actualizar el rol.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud PUT:", error);
    });
}
