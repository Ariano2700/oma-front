const verificationURL = () => {
  const rol = new URLSearchParams(window.location.search).get("role");
  return rol;
};
//const rolInParameter = verificationURL();

async function validacionInURL() {
  const dni = await obtenerDNI();
  const data = await obtenerDatos(dni);
  if (data) {
    const { rol } = data;
    rolParametro === rol
      ? console.info("En sesion y rol")
      : (window.location.href = `../../Login/login.html`);
  }
}
validacionInURL();
/*OBTENCION DE DATOS*/
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
async function obtenerDatos(dni) {
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
      const apellido = data.apellido;
      const email = data.email;
      const fotoPerfil = data.fotoPerfil;
      const roleName = await obtenerRol(rol);
      return {
        rol: roleName,
        username: username,
        apellido: apellido,
        email: email,
        fotoPerfil: fotoPerfil,
      };
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
  }
}
async function obtenerRol(rol) {
  try {
    const response = await fetch(`http://localhost:8080/api/rol/rol/${rol}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("La respuesta no es válida");
    }

    const data = await response.json();

    if (data) {
      const nombreRol = data.nombre;
      //console.log(nombreRol);
      return nombreRol;
    } else {
      throw new Error("No se encontró el rol");
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
    throw error;
  }
}
/*OBTENCION DE DATOS*/

/*async function validacionInURL() {
  const rolSavedLocal = localStorage.getItem("rolSession");
  if (rolSavedLocal) {
    verificationURL() === rolSavedLocal
      ? console.info("En sesión y rol")
      : (console.warn(
          "Redirigiendo a iniciar sesión debido a un problema con el rol en la URL"
        ),
        (window.location.href = `../../Login/login.html`));
  } else {
    console.warn("No hay un rol almacenado en localStorage");
  }
}
validacionInURL();*/
