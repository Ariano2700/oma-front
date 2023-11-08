/*formulario*/
const saveTb = document.getElementById("saveTb");

saveTb.addEventListener("click", function (e) {
  e.preventDefault();
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
          nombre: nombre,
          apellido: apellidos,
          dni: dni,
          telefono: telefono,
          direccion: direccion,
          email: correo,
          password: password,
          username: username,
        };

        fetch(`http://localhost:8080/api/trabajador/guardar/trabajador`, {
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
