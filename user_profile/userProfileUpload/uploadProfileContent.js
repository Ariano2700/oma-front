const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    // Deseleccionar el otro radio button
    radioButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.checked = false;
      }
    });
  });
});
let datosGeneralesHTML = `
<form id="formTrabajador" class="form_trabajador">
<fieldset>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="nombre">Nombres:</label>
      <input type="text" id="nombre" name="nombre" class="form-control" >
    </div>
    <div class="form-group col-md-4">
      <label for="apellidos">Apellidos:</label>
      <input type="text" id="apellidos" name="apellidos" class="form-control" >
    </div>
    <div class="form-group col-md-4">
      <label for="telefono">Telefono:</label>
      <input type="number" id="telefono" name="telefono" class="form-control" >
    </div>
    <div class="form-group col-md-4">
      <label for="direccion">Direccion:</label>
      <input type="text" id="direccion" name="direccion" class="form-control" >
    </div>
    <div class="form-group col-md-4">
        <label for="biografia">Biografia:</label>
        <textarea id="biografia" name="biografia" class="form-control" ></textarea>
      </div>
    <div class="form-group col-md-4">
      <label for="correo">Email:</label>
      <input type="email" id="correo" name="correo" class="form-control" >
    </div>
    <div class="form-group col-md-4">
      <label for="username">Usuario:</label>
      <input type="text" id="username" name="username" class="form-control" >
    </div>
  </div>
</fieldset>
</form>`;
let cambiarContraseñaHTML = `
<form id="formTrabajador" class="form_trabajador">
<fieldset>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="actualPassword">Contraseña actual:</label>
      <input type="password" id="actualPassword" name="actualPassword" class="form-control" >
    </div>
    <div class="form-group col-md-4">
      <label for="newPassword">Nueva contraseña:</label>
      <input type="password" id="newPassword" name="newPassword" class="form-control" >
    </div>
    <div class="form-group col-md-4">
      <label for="RnewPassword">Repetir nueva contraseña:</label>
      <input type="password" id="RnewPassword" name="RnewPassword" class="form-control" >
    </div>
  </div>
</fieldset>
</form>`;
const radioDatosGenerales = document.getElementById("datosGenerales");
const radioCambiarContraseña = document.getElementById("cambiarContraseña");
let contenidoRadio = document.getElementById("contenidoRadio");

const btnSaveDataDatosGenerales = document.getElementById(
  "saveDataDatosGenerales"
);
const btnSaveDataCambiarContraseña = document.getElementById(
  "saveDataCambiarContraseña"
);
// Maneja el cambio de los radio buttons
async function actualizarContenido() {
  const usernameNav = document.getElementById("usernameNav");
  const emailNav = document.getElementById("emailNav");
  const dni = await obtenerDNI();
  const data = await obtenerTodosDatos(dni);
    const { username, email } = data;
    const emailNoArr = email.split("@");
    let usernameNavLeft = `${username}`;
    let emailNavLeft = `${emailNoArr[0]}`;
    usernameNav.innerText = usernameNavLeft;
    emailNav.innerText = emailNavLeft;
  

  if (radioDatosGenerales.checked) {
    contenidoRadio.innerHTML = datosGeneralesHTML;
    btnSaveDataDatosGenerales.style.display = "block";
    btnSaveDataCambiarContraseña.style.display = "none";
  } else if (radioCambiarContraseña.checked) {
    contenidoRadio.innerHTML = cambiarContraseñaHTML;
    btnSaveDataCambiarContraseña.style.display = "block";
    btnSaveDataDatosGenerales.style.display = "none";
  }
}
radioDatosGenerales.addEventListener("change", async () => {
  contenidoRadio.innerHTML = datosGeneralesHTML;
  btnSaveDataDatosGenerales.style.display = "block";
  btnSaveDataCambiarContraseña.style.display = "none";
  await mostrarDatosGenerales();
});
radioCambiarContraseña.addEventListener("change", () => {
  contenidoRadio.innerHTML = cambiarContraseñaHTML;
  btnSaveDataCambiarContraseña.style.display = "block";
  btnSaveDataDatosGenerales.style.display = "none";
});

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
      };
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
  }
}
/* */
async function mostrarDatosGenerales() {
  const dni = await obtenerDNI();
  const data = await obtenerTodosDatos(dni);
  if (data) {
    const {
      nombre,
      rol,
      username,
      email,
      apellido,
      telefono,
      direccion,
      fotoPerfil,
      fotoPortada,
      biografia,
    } = data;

    document.getElementById("nombre").value = nombre;
    document.getElementById("apellidos").value = apellido;
    document.getElementById("telefono").value = telefono;
    document.getElementById("direccion").value = direccion;
    document.getElementById("biografia").value = biografia;
    document.getElementById("correo").value = email;
    document.getElementById("username").value = username;
  }
}
// Actualiza el contenido inicialmente
actualizarContenido();
mostrarDatosGenerales();
