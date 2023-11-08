const searchTb = document.getElementById("searchTb");

function buscarRol() {
  const idRol = document.getElementById("id_roll").value;
  console.log(idRol);
  if (!idRol) {
    alert("Ingresa un ID para buscar.");
    return;
  }

  fetch(`http://localhost:8080/api/rol/rol/${idRol}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        document.getElementById("nombre").value = data.nombre
        document.getElementById("descripcion").value = data.descripcion        
      } else {
        alert("No se encontró ningún rol con ese ID.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar el rol:", error);
    });
}
searchTb.addEventListener("click", function (e) {
  e.preventDefault();
  buscarRol();
});