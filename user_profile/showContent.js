async function obtenerDNI() {
  try {
    const response = await fetch(`../php/saveData.php`, {
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
      const roleName = await obtenerRol(rol);
      return {
        rol: roleName,
        username: username,
        apellido: apellido,
        email: email,
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
async function mostrarDatosTabla() {
  const usernameSpan = document.getElementById("username");
  const rolSpan = document.getElementById("rol");
  const telefonoSpan = document.getElementById("telefono");
  const dniSpan = document.getElementById("dni");
  const direccionSpan = document.getElementById("direccion");
  const emailSpan = document.getElementById("email");
  const nombreUsuario = document.getElementById("nombreUsuario");

  const dni = await obtenerDNI();
  const data = await obtenerTodosDatos(dni);
  if (data) {
    const { nombre, rol, username, email, apellido, telefono, direccion } =
      data;
    console.log("hola");

    nombreUsuario.innerHTML = `<p>${nombre}, ${apellido}</p>`
    usernameSpan.innerHTML = `<p>${username}</p>`;
    rolSpan.innerHTML = `<p>${rol}</p>`;
    telefonoSpan.innerHTML = `<p>${telefono}</p>`;
    dniSpan.innerHTML = `<p>${dni}</p>`;
    direccionSpan.innerHTML = `<p>${direccion}</p>`;
    emailSpan.innerHTML = `<p>${email}</p>`;
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
      const direccion = data.direccion;

      const roleName = await obtenerRol(rol);
      return {
        rol: roleName,
        username: username,
        apellido: apellido,
        email: email,
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
      };
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
  }
}
mostrarDatosTabla();
