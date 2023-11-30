const searchTb = document.getElementById("searchTb");

function buscarRecinto() {
  const idRecinto = document.getElementById("SelectRecinto").value;
  console.log(idRecinto);
  if (!idRecinto) {
    alert("Ingresa un ID para buscar.");
    return;
  }

  fetch(`http://localhost:8080/api/recinto/porId/${idRecinto}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        document.getElementById("nombre").value = data.nombre
        document.getElementById("tipo").value = data.tipo
        document.getElementById("estado").value = data.estado
        document.getElementById("ubicacion").value = data.ubicacion
        
      } else {
        alert("No se encontró ningún recinto con ese ID.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar el recinto:", error);
    });
}
searchTb.addEventListener("click", function (e) {
  e.preventDefault();
  buscarRecinto();
});