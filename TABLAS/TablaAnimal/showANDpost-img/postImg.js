const showMe = document.getElementById("showMe");
showMe.addEventListener("click", async () => {
  await imgToSubmit();
});
function subirFotoAnimal() {
  const inputImgAnimal = document.getElementById("imgAnimal");

  if (inputImgAnimal.files.length > 0) {
    const file = inputImgAnimal.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileBinaryData = reader.result;
      const base64String = btoa(
        String.fromCharCode.apply(null, new Uint8Array(fileBinaryData))
      );

      console.log(base64String);
    };
    /*const fileBinaryData = file;
    // Realiza las operaciones que necesites con fileBinaryData
    console.log(fileBinaryData);*/
    reader.readAsArrayBuffer(file);
  } else {
    // No se seleccionó ningún archivo
    console.error("No se seleccionó ningún archivo");
  }
}

async function imgToSubmit() {
  const inputImgAnimal = document.getElementById("imgAnimal");
  const selectedFile = inputImgAnimal.files[0];
  const SelectAnimal = document.getElementById("SelectAnimalPOST").value;

  if (selectedFile === undefined) {
    const title = "No hay imagen seleccionada";
    const text =
      "Se debe tener un archivo de imagen a subir para realizar la siguiente acción";
    alertNoComplete(title, text);
  } else if (SelectAnimal === "noIMG-select") {
    const title = "No hay animal seleccionado";
    const text = "Debe escoger un animal para subir una imagen";
    alertNoComplete(title, text);
  } else {
    Swal.fire({
      title: "¿Estas seguro subir esta foto?",
      text: "¡La foto se podra cambiar despues de subida!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, subir foto",
    }).then((result) => {
      if (result.isConfirmed) {
        const reader = new FileReader();
        reader.onload = function (e) {
          Swal.fire({
            title: "¡Foto subida!",
            text: "La foto has sido subida satisfactoriamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          }).then(async (result) => {
            if (result.isConfirmed) {
              await submmitIMG(selectedFile, SelectAnimal);
              window.location.reload();
            }
          });
        };
        reader.readAsDataURL(selectedFile);
      }
    });
  }
}

async function submmitIMG(file, idAnimal) {
  try {
    const formData = new FormData();
    formData.append("imgAnimal", file);
    formData.append("idAnimal", idAnimal);

    const response = await fetch(
      `http://localhost:8080/api/img/animal/guardar/imagen`,
      {
        method: "POST",
        // headers: {
        //  "Content-Type": "multipart/form-data",
        //},
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Imagen subida exitosamente", data);
  } catch (error) {
    console.error("Error al subir la imagen", error);
  }
}
/*DATOS DE LOS ANIMALES */
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
      const SelectAnimal = document.getElementById("SelectAnimalPOST");
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
/*DATOS DE LOS ANIMALES */
function alertNoComplete(title, text) {
  const alertNoComplete = Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  return alertNoComplete;
}
