const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  //e.preventDefault();
  actualizarTrabajador();
});


function actualizarTrabajador() {
  const idTrabajador = document.getElementById("id_trabajador").value;
  /* Inputs */
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const dni = document.getElementById("dni").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  // Realizar validaciones
  if (
    !idTrabajador ||
    !nombre ||
    !apellidos ||
    !dni ||
    !telefono ||
    !direccion ||
    !correo ||
    !password ||
    !username
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (isNaN(idTrabajador) || isNaN(dni) || isNaN(telefono)) {
    alert("ID Trabajador, DNI y Teléfono deben ser números.");
    return;
  }

  const data = {
    nombre: nombre,
    apellido: apellidos,
    dni: dni,
    telefono: telefono,
    direccion: direccion,
    email: correo,
    password: password,
    username: username,
  };

  // Realiza la solicitud PUT para actualizar el trabajador
  console.log(dni)
  fetch(`http://localhost:8080/api/trabajador/actualizar/trabajador/${dni}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Trabajador actualizado exitosamente.");
      } else {
        alert("Error al actualizar el trabajador.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud PUT:", error);
    });
}
