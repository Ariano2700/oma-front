const editarButton = document.getElementById("editarButton");
editarButton.addEventListener('click', () =>{
  window.location.href = '../userProfileUpload/editProfile.html'
})
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
  const avatarImage = document.getElementById("avatar-image");
  const imgPortada = document.getElementById("portada-image");
  const contenidoBiografia = document.getElementById("contenidoBiografia");

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
      biografia
    } = data;

    //avatarImage.src = `data:image/jpg;base64,${fotoPerfil}`
    //console.log(`data:image/jpg;base64,${fotoPerfil}`)
    avatarImage.src = showPicture(fotoPerfil);
    imgPortada.src = showPicture(fotoPortada);

    nombreUsuario.innerText = `${nombre}, ${apellido}`;
    usernameSpan.innerText = `${username}`;
    rolSpan.innerText = `${rol}`;
    telefonoSpan.innerText = `${telefono}`;
    dniSpan.innerText = `${dni}`;
    direccionSpan.innerText = `${direccion}`;
    emailSpan.innerText = `${email}`;
    (biografia === null) ? contenidoBiografia.innerText = 'Sin biografia' : contenidoBiografia.innerHTML = biografia

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

      const roleName = await obtenerRol(rol);
      return {
        rol: roleName,
        username: username,
        apellido: apellido,
        email: email,
        nombre: nombre,
        telefono: telefono,
        direccion: direccion,
        fotoPerfil: fotoPerfil,
        fotoPortada: fotoPortada,
        biografia: biografiaTrabajador
      };
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
  }
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

////////////////////////////////
/* ESCOGER IMG DE PERFIL / PORTADA*/
async function chooseAvatarImage() {
  const avatarInput = document.getElementById("avatar-input");
  avatarInput.click();

  avatarInput.addEventListener("change", async function () {
    const avatarImage = document.getElementById("avatar-image");
    const selectedFile = avatarInput.files[0];

    if (selectedFile) {
      Swal.fire({
        title: "¿Estas seguro de cambiar la foto?",
        text: "¡La foto se cambiara hasta que la vuelva a cambiar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, cambiar foto",
      }).then((result) => {
        if (result.isConfirmed) {
          const reader = new FileReader();
          reader.onload = function (e) {
            avatarImage.src = e.target.result;
            Swal.fire({
              title: "¡Datos actualizados!",
              text: "Los datos han sido actualizados satisfactoriamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then(async(result) => {
              if (result.isConfirmed) {
                await uploadAvatar(selectedFile);
              }
            });
          };
    
          reader.readAsDataURL(selectedFile);
        }
      });
    }
  });
}
async function uploadAvatar(file) {
  try {
    const dni = await obtenerDNI(); // Reemplaza con el valor correcto del trabajador
    const formData = new FormData();
    formData.append("fotoPerfil", file);

    const response = await fetch(
      `http://localhost:8080/api/trabajador/actualizar/foto/perfil/${dni}`,
      {
        method: "PATCH",
        // No establezcas Content-Type, dejar que FormData lo maneje automáticamente
        // headers: {
        //     "Content-Type": "multipart/form-data",
        // },
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Imagen subida exitosamente", data);
  } catch (error) {
    console.error("Error al subir la imagen", error);
  }
}
///////////////////////////////////////
async function choosePortadaImage() {
  const portadaInput = document.getElementById("portada-input");
  portadaInput.click();

  portadaInput.addEventListener("change", async function () {
    const portadaImage = document.getElementById("portada-image");
    const selectedFile = portadaInput.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = async function (e) {
        portadaImage.src = e.target.result;

        // Utilizar la función uploadAvatar que es asíncrona
        await uploadPortada(selectedFile);
      };

      reader.readAsDataURL(selectedFile);
    }
  });
}
async function uploadPortada(file) {
  try {
    const dni = await obtenerDNI(); // Reemplaza con el valor correcto del trabajador
    const formData = new FormData();
    formData.append("fotoPortada", file);

    const response = await fetch(
      `http://localhost:8080/api/trabajador/actualizar/foto/portada/${dni}`,
      {
        method: "PATCH",
        // No establezcas Content-Type, dejar que FormData lo maneje automáticamente
        // headers: {
        //     "Content-Type": "multipart/form-data",
        // },
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Imagen subida exitosamente", data);
  } catch (error) {
    console.error("Error al subir la imagen", error);
  }
}
//////////////////////////////////////
mostrarDatosTabla();
