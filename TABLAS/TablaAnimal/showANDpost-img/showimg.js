const showIMGS = document.getElementById("showIMGS");
showIMGS.addEventListener("click", async (event) => {
  event.preventDefault();
  await mostrarLasIMG();
});

async function mostrarLasIMG() {
  try {
    const imgMostrar = document.getElementById("imgMostrar");
    const SelectAnimal = document.getElementById("SelectAnimal").value;
    const imgGET = await obtenerTodasLasImg(SelectAnimal);
    if (SelectAnimal === "noIMG-select") {
      const title = "No hay animal seleccionado";
      const text = "Debe escoger un animal para subir una imagen";
      alertNoComplete(title, text);
    } else if (imgGET <= 1) {
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
        imgElement.alt = `img animal ${SelectAnimal}`;
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

async function mostrarDatosAnimales() {
  try {
    const response = await fetch("http://localhost:8080/api/animal/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      const SelectAnimal = document.getElementById("SelectAnimal");
      if (SelectAnimal) {
        data.forEach((data) => {
          const idAnimal = data.idAnimal;
          const nombreAnimal = data.nombreAnimal;
          const option = document.createElement("option");
          option.value = idAnimal;
          option.text = nombreAnimal;
          SelectAnimal.appendChild(option);
        });
      }
    }
  } catch (error) {
    console.error("Error al obtener datos de roles: " + error);
  }
}
mostrarDatosAnimales();

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
