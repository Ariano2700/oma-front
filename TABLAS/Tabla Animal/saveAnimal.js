/*formulario*/
const formAlimento = document.getElementById("formAlimento");
/*BOTONES */
const saveTb = document.getElementById("saveTb");
const editTb = document.getElementById("editTb");
const deleteTb = document.getElementById("deleteTb");

function formatFechaCompra(fecha_compra) {
  const fechaCompraDate = new Date(fecha_compra);
  const year = fechaCompraDate.getFullYear();
  const month = String(fechaCompraDate.getMonth() + 1).padStart(2, "0");
  const day = String(fechaCompraDate.getDate() + 1).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function saveData() {
  /*Inputs*/
  const marca = document.getElementById("marca").value;
  const fechaCompra = document.getElementById("fecha_compra").value;
  const precioUnitario = document.getElementById("precio_unitario").value;
  const volumen = document.getElementById("volumen").value;
  const stock = document.getElementById("stock").value;

  const fechaFormat = formatFechaCompra(fechaCompra);
  const dataToSend = {
    marca: marca,
    fecha_compra: fechaFormat,
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
        alertSuccess();
        return response.json();
      } else {
        const title = "Datos no mandados";
        const text = "Error al subir los datos";
        alertNoComplete(title, text);
        throw new Error(text);
      }
    })
    .then((data) => {
      console.log("Marca: " + marca);
      console.log("Fecha de Compra: " + fechaCompra);
      console.log("Precio Unitario: " + precioUnitario);
      console.log("Volumen: " + volumen);
      console.log("Stock: " + stock);
      console.log("datos subidos", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
saveTb.addEventListener("click", function (e) {
  e.preventDefault();
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
