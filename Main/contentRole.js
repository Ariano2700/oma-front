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
async function contentRole() {
  const container = document.getElementById("container");
  const usernameNav = document.getElementById("usernameNav");
  const emailNav = document.getElementById("emailNav");
  const imgUser = document.getElementById("imgUser");
  const dni = await obtenerDNI();
  const data = await obtenerDatos(dni);
  if (data) {
    const { rol, username, apellido, email, fotoPerfil } = data;
    const emailNoArr = email.split("@");
    let content = `<h2>El rol es ${rol}</h2>
                   <h2>Bienvenido sr(a) ${apellido}`;
    let usernameNavLeft = `${username}`;
    let emailNavLeft = `${emailNoArr[0]}`;
    rolParametro === rol
      ? ((container.innerHTML = content),
        (usernameNav.innerText = usernameNavLeft),
        (emailNav.innerText = emailNavLeft),
        (imgUser.src = showPicture(fotoPerfil)))
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
  if (data) {
    const { nombre, rol, username, email, apellido } = data;
    /*let contenidoNombre = `${nombre}`;
    let contenidoApellido = `${apellido}`;
    let contenidoDni = `${dni}`;
    let contenidoEmail = `${email}`;
    let contenidoUsername = `${username}`;
    let contenidoRol = `${rol}`;*/
    console.log("hola");

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
      const fotoPerfil = data.fotoPerfil;

      const roleName = await obtenerRol(rol);
      return {
        rol: roleName,
        username: username,
        apellido: apellido,
        email: email,
        nombre: nombre,
        fotoPerfil: fotoPerfil,
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
function obtenerDatosALIMENTOS() {
  fetch("http://localhost:8080/api/alimento/all", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data) {
        data.forEach((alimento) => {
          const { marca, fecha_compra, precio_unitario, volumen, stock } =
            alimento;
          const fechaCompraDate = new Date(fecha_compra);
          const year = fechaCompraDate.getFullYear();
          const month = String(fechaCompraDate.getMonth() + 1).padStart(2, "0"); // Agrega un 0 al mes si es necesario
          const day = String(fechaCompraDate.getDate()).padStart(2, "0"); // Agrega un 0 al día si es necesario
          const fechaCompraFormateada = `${year}-${month}-${day}`;

          const respuestasAlimento = document.getElementById("tableAlimento");
          const newRow = document.createElement("tr");

          newRow.innerHTML = `
            <td class="response" id="responseMarca">${marca}</td>
            <td class="response" id="responseFechaCompra">${fechaCompraFormateada}</td>
            <td class="response" id="responsePrecioUnitario">${precio_unitario}</td>
            <td class="response" id="responseVolumen">${volumen}</td>
            <td class="response" id="responseStock">${stock}</td>
          `;
          respuestasAlimento.appendChild(newRow);
        });
      }
    });
}

////////////////////////////////
/*MOSTRAR FOTO (PORTADA O PERFIL)*/
function showPicture(image) {
  if (image && image.length > 0) {
    // Convertir la cadena base64 a Blob
    const byteCharacters = atob(image);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });

    // Crear una URL de datos y establecerla como src de la imagen
    const imageURL = URL.createObjectURL(blob);
    return imageURL;
  } else {
    console.log("img no pasada correctamente de byte a img");
  }
}
////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  obtenerDatosALIMENTOS();
});
