//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
  e.preventDefault();
  actualizarAlimento();
});

/*function formatFechaCompra(fecha_compra) {
  const FechaNacUTC = new Date(fecha_compra); // Agrega "T00:00:00Z" para indicar la hora a las 00:00:00 en UTC
  FechaNacUTC.setDate(FechaNacUTC.getDate() + 1);
  const fechaCompletae = FechaNacUTC.toISOString();
  return fechaCompletae;
  //return `${year}-${month}-${day}`;
}*/

function actualizarAlimento() {
  const idAlimento = document.getElementById("SelectAlimento").value;
  /*Inputs*/
  const marca = document.getElementById("marca").value;
  const fechaCompra = document.getElementById("fecha_compra").value;
  const precioUnitario = document.getElementById("precio_unitario").value;
  const volumen = document.getElementById("volumen").value;
  const stock = document.getElementById("stock").value;

  /*FECHA FORMAT */
  const FechaCompraUTC = new Date(fechaCompra);
  FechaCompraUTC.setDate(FechaCompraUTC.getDate() + 1);

  // Realizar validaciones
  if (
    !idAlimento ||
    !marca ||
    !fechaCompra ||
    !precioUnitario ||
    !volumen ||
    !stock
  ) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  if (
    isNaN(idAlimento) ||
    isNaN(precioUnitario) ||
    isNaN(volumen) ||
    isNaN(stock)
  ) {
    alert("ID Alimento, Precio Unitario, Volumen y Stock deben ser números.");
    return;
  }
  Swal.fire({
    title: "¿Estas seguro de los datos?",
    text: "Los datos se actualizaran a la tabla seleccionada!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, actualizar datos",
  }).then((result) => {
    if (result.isConfirmed) {
      const data = {
        marca: marca,
        fecha_compra: FechaCompraUTC.toISOString(),
        precio_unitario: precioUnitario,
        volumen: volumen,
        stock: stock,
      };

      fetch(
        `http://localhost:8080/api/alimento/actualizar/alimento/${idAlimento}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => {
          if (response.ok) {
            Swal.fire({
              title: "¡Datos actualizados!",
              text: "Los datos han sido actualizados satisfactoriamente.",
              icon: "success",
              confirmButtonText: "Aceptar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } else {
            const title = "Datos no mandados";
            const text = "Error al actualizar los datos";
            alertNoComplete(title, text);
          }
        })
        .catch((error) => {
          console.error("Error al realizar la solicitud PUT:", error);
        });
    }
  });
}

function alertNoComplete(title, text) {
  const alertNoComplete = Swal.fire({
    title: title,
    text: text,
    icon: "error",
    confirmButtonText: "Aceptar",
  });
  return alertNoComplete;
}
