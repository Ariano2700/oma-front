const getURLParameters = (paramNames) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = {};

  paramNames.forEach((paramName) => {
    const paramValue = urlSearchParams.get(paramName);
    params[paramName] = paramValue;
  });

  return params;
};
const parametros = getURLParameters(["role", "animalID"]);

//const rol = parametros["role"];
const animalIDParam = parametros["animalID"];

const subirImagenes = document.getElementById("subirImagenes");
subirImagenes.addEventListener("click", () => {
  window.location.href =
    "../TABLAS/TablaAnimal/showANDpost-img/showPostImg.html";
});

/*MOSTRAR NOMBRE DE LA ESPECIE*/
async function mostrarNombreEspecie(idEspecie) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/especie/porId/${idEspecie}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      const nombreClase = data.clase;
      return nombreClase;
    }
  } catch (error) {
    console.error("Error al obtener datos del animal: " + error);
  }
}
/*MOSTRAR NOMBRE DE LA ESPECIE*/

/*MOSTRAR NOMBRE DEL RECINTO*/
async function mostrarNombreRecinto(idRecinto) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/recinto/porId/${idRecinto}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      const nombreRecinto = data.nombre;
      return nombreRecinto;
    }
  } catch (error) {
    console.error("Error al obtener datos del animal: " + error);
  }
}
/*MOSTRAR NOMBRE DEL RECINTO*/

/*MOSTRAR DATOS TOTALES DEL ANIMAL*/
async function mostrarDatosDelAnimal(animalIDParam) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/animal/porId/${animalIDParam}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      //const animalText = document.getElementById("animalTextID");
      const nombreAnimalHEAD = document.getElementById("nombreAnimalHEAD");
      const edadText = document.getElementById("edadTextID");
      const sexoText = document.getElementById("sexoTextID");
      const tipoText = document.getElementById("tipoTextID");
      const estadoText = document.getElementById("estadoTextID");
      const idEspecieText = document.getElementById("idEspecieTextID");
      const idRecintoText = document.getElementById("idRecintoTextID");

      const { nombreAnimal, edad, sexo, tipo, estado, idEspecie, idRecinto } =
        data;
      nombreAnimalHEAD.innerText = nombreAnimal;
      edadText.innerText = edad;
      sexoText.innerText = sexo;
      tipoText.innerText = tipo;
      estadoText.innerText = estado;
      idEspecieText.innerText = await mostrarNombreEspecie(idEspecie);
      idRecintoText.innerText = await mostrarNombreRecinto(idRecinto);
    }
  } catch (error) {
    console.error("Error al obtener datos del animal: " + error);
  }
}
mostrarDatosDelAnimal(animalIDParam);
/*MOSTRAR DATOS TOTALES DEL ANIMAL*/

/*MOSTRAR IMAGENES DEL ANIMAL */
const mostrarImgsAnimal = document.getElementById("mostrarImgsAnimal");
mostrarImgsAnimal.addEventListener("click", async (event) => {
  event.preventDefault();
  await mostrarLasIMG();
});
async function mostrarLasIMG() {
  try {
    const imgMostrar = document.getElementById("imgMostrar");
    const imgGET = await obtenerTodasLasImg(animalIDParam);
    if (imgGET <= 1) {
      const title = "No hay imagenes para animal seleccionado";
      const text =
        "El animal seleccionado no tiene imagenes guardadas previamente";
      alertNoComplete(title, text);
    } else {
      imgMostrar.innerHTML = "";
      /*const imgElement = document.createElement("img");
    imgElement.src = await showPicture(imgGET);
    imgMostrar.appendChild(imgElement);*/

      for (let index = 0; index < imgGET.length; index++) {
        // Obtén la URL de la imagen actual
        const imgSrc = await showPicture(imgGET[index]);

        // Crea un elemento de imagen
        const imgElement = document.createElement("img");

        // Establece la fuente de la imagen
        imgElement.src = imgSrc;

        // Establece el atributo alt
        imgElement.alt = `img animal ${animalIDParam}`;
        imgElement.className = "imgAnimalShow";

        // Añade la imagen al contenedor
        imgMostrar.appendChild(imgElement);
      }
    }
  } catch (error) {
    console.error("Error al mostrar las imagenes" + error);
  }
}
async function obtenerTodasLasImg(idAnimal) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/img/animal/porId/animal/${idAnimal}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error("Error al obtener imagenes");
    }
    const data = await response.json();

    if (data) {
      const imagenes = data.map((item) => item.imgAnimal);
      return imagenes;
    }
  } catch (error) {
    console.error("Error al obtener datos de roles: " + error);
  }
}
async function showPicture(image) {
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
function alertNoComplete(title, text) {
  const alertNoComplete = Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  return alertNoComplete;
}
/*MOSTRAR IMAGENES DEL ANIMAL */

/*MOSTRAR PRIMERA IMAGEN DEL ANIMAL COMO PERFIL */
async function fotoPerfilAnimal() {
  const animalFotoPerfil = document.getElementById("animalFotoPerfil");
  const imgGET = await obtenerTodasLasImg(animalIDParam);

  if (imgGET.length > 0) {
    const primeraImagen = imgGET[0];
    animalFotoPerfil.src = await showPicture(primeraImagen);
  } else {
animalFotoPerfil.src = '../Main/indexView/usuario.jpg'
  }
}
fotoPerfilAnimal();
/*MOSTRAR PRIMERA IMAGEN DEL ANIMAL COMO PERFIL */
function alertNoComplete(title, text) {
  const alertNoComplete = Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  return alertNoComplete;
}
