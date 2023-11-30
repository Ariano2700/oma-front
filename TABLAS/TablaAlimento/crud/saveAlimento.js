/*formulario*/
const formAlimento = document.getElementById("formAlimento");
/*BOTONES */
const saveTb = document.getElementById("saveTb");

/*function formatFechaCompra(fecha_compra) {
  const fechaCompraDate = new Date(fecha_compra);
  const year = fechaCompraDate.getFullYear();
  const month = String(fechaCompraDate.getMonth() + 1).padStart(2, "0");
  const day = String(fechaCompraDate.getDate() + 1).padStart(2, "0");
  return `${year}-${month}-${day}`;
}*/

function saveData() {
  /*Inputs*/
  const marca = document.getElementById("marca").value;
  const fechaCompra = document.getElementById("fecha_compra").value;
  const precioUnitario = document.getElementById("precio_unitario").value;
  const volumen = document.getElementById("volumen").value;
  const stock = document.getElementById("stock").value;
  if (!marca || !fechaCompra || !precioUnitario || !volumen || !stock) {
    const title = "Campos incompletos";
    const text =
      "Faltan campos en el formulario para completar la subida de datos";
    alertNoComplete(title, text);
  } else {
    const FechaCompraUTC = new Date(fechaCompra);
    FechaCompraUTC.setDate(FechaCompraUTC.getDate() + 1);
    //const fechaFormat = formatFechaCompra(fechaCompra);
    Swal.fire({
      title: "¿Estas seguro de los datos?",
      text: "Los datos se subiran a la tabla seleccionada!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, subir datos",
    }).then((result) => {
      if (result.isConfirmed) {
        const dataToSend = {
          marca: marca,
          fecha_compra: FechaCompraUTC.toISOString(),
          precio_unitario: precioUnitario,
          volumen: volumen,
          stock: stock,
        };
        fetch(`http://localhost:8080/api/alimento/guardar/alimento`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              const title = "Datos no mandados";
              const text = "Error al subir los datos";
              alertNoComplete(title, text);
              throw new Error(text);
            }
          })
          .then((data) => {
            Swal.fire({
              title: "¡Datos subidos!",
              text: "Los datos han sido subidos satisfactoriamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
            console.log("datos subidos", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  }
}

saveTb.addEventListener("click", function (e) {
  e.preventDefault();
  //saveData();
  saveData();
});

function alertNoComplete(title, text) {
  const alertNoComplete = Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  return alertNoComplete;
}

function alertSuccess() {
  const alertSuccess = Swal.fire({
    title: "¡Datos subidos!",
    text: `Datos mandados correctamente`,
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  return alertSuccess;
}
