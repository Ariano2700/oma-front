const searchTb = document.getElementById("searchTb");

function buscarAlimento() {
  const idAlimento = document.getElementById("SelectAlimento").value;
  console.log(idAlimento);
  if (!idAlimento) {
    alert("Ingresa un ID para buscar.");
    return;
  }

  fetch(`http://localhost:8080/api/alimento/alimento/${idAlimento}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const fecha = formatFechaCompra(data.fecha_compra)
        document.getElementById("marca").value = data.marca;
        document.getElementById("fecha_compra").value = fecha;
        document.getElementById("precio_unitario").value = data.precio_unitario;
        document.getElementById("volumen").value = data.volumen;
        document.getElementById("stock").value = data.stock;
      } else {
        alert("No se encontró ningún alimento con ese ID.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar el alimento:", error);
    });
}
function formatFechaCompra(fecha_compra) {
  const fechaCompraDate = new Date(fecha_compra);
  const year = fechaCompraDate.getFullYear();
  const month = String(fechaCompraDate.getMonth() + 1).padStart(2, "0");
  const day = String(fechaCompraDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

searchTb.addEventListener("click", function (e) {
  e.preventDefault();
  buscarAlimento();
});