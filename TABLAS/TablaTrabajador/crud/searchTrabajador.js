const searchTb = document.getElementById("searchTb");

function buscarTrabajador() {
  const dni = document.getElementById("dni").value;
  console.log(dni);

  if (!dni) {
    alert("Ingresa un DNI para buscar.");
    return;
  }

  fetch(`http://localhost:8080/api/trabajador/obtener/${dni}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        document.getElementById("id_trabajador").value = data.idTrabajador;
        document.getElementById("nombre").value = data.nombre;
        document.getElementById("apellidos").value = data.apellido;
        document.getElementById("dni").value = data.dni;
        document.getElementById("telefono").value = data.telefono;
        document.getElementById("direccion").value = data.direccion;
        document.getElementById("correo").value = data.email;
        document.getElementById("password").value = data.password;
        document.getElementById("username").value = data.username;
        // Agrega más líneas para otros atributos del trabajador aquí
      } else {
        alert("No se encontró ningún trabajador con ese DNI.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar al trabajador:", error);
    });
}

searchTb.addEventListener("click", function (e) {
  e.preventDefault();
  buscarTrabajador();
});
