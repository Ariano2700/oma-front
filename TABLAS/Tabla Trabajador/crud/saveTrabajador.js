/*formulario*/
const saveTb = document.getElementById("saveTb");

saveTb.addEventListener("click", function (e) {
  //e.preventDefault();
  saveTrabajador();
});

function saveTrabajador() {
  //const idTrabajador = document.getElementById("id_trabajador").value;
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const dni = document.getElementById("dni").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  if (
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

  const data = {
    nombre: nombre,
    apellido: apellidos,
    dni: dni,
    telefono: telefono,
    direccion: direccion,
    email: correo,
    password: password,
    username: username,
    idRol: 1, // Esto es un ejemplo, asegúrate de usar el valor correcto del rol.
  };

  fetch(`http://localhost:8080/api/trabajador/guardar/trabajador`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        alert("Trabajador guardado exitosamente.");
        window.location.reload(); // Recargar la página
      } else {
        alert("Error al guardar al trabajador.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud POST:", error);
    });
}
