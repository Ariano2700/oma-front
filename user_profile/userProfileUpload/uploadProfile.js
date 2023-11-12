document.addEventListener("DOMContentLoaded", function () {
  /* */
  async function obtenerDNI() {
    try {
      const response = await fetch(`../../php/saveData.php`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Error en la solicitud: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();

      if (data.dni) {
        return data.dni;
      } else {
        console.error("Error al obtener el DNI");
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function obtenerTodosDatos(dni) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/trabajador/obtener/${dni}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("La respuesta no es válida");
      }

      const data = await response.json();
      //console.log(data)

      if (data) {
        const rol = data.idRol;
        const username = data.username;
        const nombre = data.nombre;
        const apellido = data.apellido;
        const email = data.email;
        const telefono = data.telefono;
        const password = data.password;
        const direccion = data.direccion;
        const fotoPerfil = data.fotoPerfil;
        const fotoPortada = data.fotoPortada;
        const biografiaTrabajador = data.biografia;
        return {
          username: username,
          apellido: apellido,
          email: email,
          nombre: nombre,
          telefono: telefono,
          direccion: direccion,
          fotoPerfil: fotoPerfil,
          fotoPortada: fotoPortada,
          biografia: biografiaTrabajador,
          password: password,
        };
      }
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  }
  /* */

  async function actualizadDatosGenerales() {
    const nombreInput = document.getElementById("nombre").value;
    const apellidosInput = document.getElementById("apellidos").value;
    const telefonoInput = document.getElementById("telefono").value;
    const direccionInput = document.getElementById("direccion").value;
    const biografiaInput = document.getElementById("biografia").value;
    const correoInput = document.getElementById("correo").value;
    const usernameInput = document.getElementById("username").value;

    //OBTENER DNI UwU
    const dni = await obtenerDNI();
    console.log(dni);

    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡Los datos se actualizaran!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, actualizar",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          nombre: nombreInput,
          apellido: apellidosInput,
          telefono: telefonoInput,
          direccion: direccionInput,
          biografia: biografiaInput,
          email: correoInput,
          username: usernameInput,
        };
        fetch(
          `http://localhost:8080/api/trabajador/editar/perfil/trabajador/${dni}`,
          {
            method: "PATCH",
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
                  window.location.href = "../userProfile/userProfile.html";
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

  async function cambiarContraseña() {
    const actualPasswordInput = document.getElementById("actualPassword").value;
    const newPasswordInput = document.getElementById("newPassword").value;
    const RnewPasswordInput = document.getElementById("RnewPassword").value;
    if (!actualPasswordInput || !newPasswordInput || !RnewPasswordInput) {
      // Mostrar un mensaje de error con SweetAlert
      Swal.fire({
        title: "Error",
        text: "Todos los campos deben estar completos.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      //OBTENER DNI UwU
      const dni = await obtenerDNI();
      const dataContraseña = await obtenerTodosDatos(dni);
      const { password } = dataContraseña;
      console.log(password);
      console.log(dni);

      if (actualPasswordInput === password) {
        if (newPasswordInput === RnewPasswordInput) {
          Swal.fire({
            title: "¿Estas seguro de tu nueva contraseña?",
            text: "¡Tu contraseña se actualizara a la nueva, no la olvides!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, cambiar contraseña",
          }).then((result) => {
            if (result.isConfirmed) {
              const data = {
                password: newPasswordInput,
              };
              fetch(
                `http://localhost:8080/api/trabajador/cambiar/contraseña/${dni}`,
                {
                  method: "PATCH",
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
                        window.location.href =
                          "../userProfile/userProfile.html";
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
        } else {
          Swal.fire({
            title: "¡La nueva contraseña no coincide con la repetida!",
            text: "Verifica las conrtraseñas.",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
      } else {
        Swal.fire({
          title: "¡La contraseña actual es erronea!",
          text: "Verifica la contraseña que has puesto.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    }
  }

  /*BTN DE ACTUALIZAR DATOS GENERALES */
  const btnSaveDataDatosGenerales = document.getElementById(
    "saveDataDatosGenerales"
  );
  if (btnSaveDataDatosGenerales) {
    btnSaveDataDatosGenerales.addEventListener("click", (e) => {
      e.preventDefault();
      actualizadDatosGenerales();
    });
  }
  /* BTN DE CAMBIAR CONTRASEÑA*/
  const btnSaveDataCambiarContraseña = document.getElementById(
    "saveDataCambiarContraseña"
  );
  if (btnSaveDataCambiarContraseña) {
    btnSaveDataCambiarContraseña.addEventListener("click", (e) => {
      e.preventDefault();
      cambiarContraseña();
    });
  }
});
