//Actualizar Alimento
const editTb = document.getElementById("editTb");

editTb.addEventListener("click", function (e) {
    actualizarAlimento()
});

function actualizarAlimento() {
  const idAlimento = document.getElementById("id_alimento").value;
  /*Inputs*/
  const marca = document.getElementById("marca").value;
  const fechaCompra = document.getElementById("fecha_compra").value;
  const precioUnitario = document.getElementById("precio_unitario").value;
  const volumen = document.getElementById("volumen").value;
  const stock = document.getElementById("stock").value;

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

  const data = {
    marca: marca,
    fecha_compra: fechaCompra,
    precio_unitario: precioUnitario,
    volumen: volumen,
    stock: stock
  };

  // Realiza la solicitud PUT para actualizar el alimento
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
        alert("Alimento actualizado exitosamente.");
        
      } else {
        alert("Error al actualizar el alimento.");
      }
    })
    .catch((error) => {
      console.error("Error al realizar la solicitud PUT:", error);
    });
}
