const role = () => {
  const rol = new URLSearchParams(window.location.search).get("role");
  return rol;
};
const rolParametro = role();

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
async function contentRole() {
  const container = document.getElementById("container");
  const usernameNav = document.getElementById("usernameNav");
  const emailNav = document.getElementById("emailNav");
  const dni = await obtenerDNI();
  const data = await obtenerDatos(dni);
  if (data) {
    const { rol, username, apellido, email } = data;
    const emailNoArr = email.split("@");
    let content = `<h2>El rol es ${rol}</h2>
                   <h2>Bienvenido sr(a) ${apellido}`;
    let usernameNavLeft = `${username}`;
    let emailNavLeft = `${emailNoArr[0]}`;
    rolParametro === rol
      ? ((container.innerHTML = content),
        (usernameNav.innerText = usernameNavLeft),
        (emailNav.innerText = emailNavLeft))
      : (window.location.href = `../Login/login.html`);
  }
}

async function mostrarDatosTabla() {
  const responseNombre = document.getElementById("responseNombre");
  const responseApellido = document.getElementById("responseApellido");
  const responseDNI = document.getElementById("responseDNI");
  const responseEmail = document.getElementById("responseEmail");
  const responseUsername = document.getElementById("responseUsername");
  const responseIDRol = document.getElementById("responseIDRol");

  const dni = await obtenerDNI();
  const data = await obtenerTodosDatos(dni);
  if(data){
    const {nombre, rol, username, email, apellido} = data;
    /*let contenidoNombre = `${nombre}`;
    let contenidoApellido = `${apellido}`;
    let contenidoDni = `${dni}`;
    let contenidoEmail = `${email}`;
    let contenidoUsername = `${username}`;
    let contenidoRol = `${rol}`;*/
    console.log("hola")

    responseNombre.innerHTML = `<p>${nombre}<p/>`;
    responseApellido.innerHTML = `<p>${apellido}<p/>`;
    responseDNI.innerHTML = `<p>${dni}<p/>`;
    responseEmail.innerHTML = `<p>${email}<p/>`;
    responseUsername.innerHTML = `<p>${username}<p/>`;
    responseIDRol.innerHTML = `<p>${rol}<p/>`;

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
      
      const roleName = await obtenerRol(rol);
      return {
        rol: roleName,
        username: username,
        apellido: apellido,
        email: email,
        nombre: nombre
      };
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
  }
}
contentRole();
mostrarDatosTabla();

/////////////////////////////////////
