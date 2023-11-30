const searchTb = document.getElementById("searchTb");
searchTb.addEventListener('click', function(e){
    buscarEspecie();
})
function buscarEspecie() {
  const idEspecie = document.getElementById("SelectEspecie").value;
  console.log(idEspecie);
  if (!idEspecie) {
    alert("Ingresa un ID para buscar.");
    return;
  }
  fetch(`http://localhost:8080/api/especie/porId/${idEspecie}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data) {
        document.getElementById("clase").value = data.clase;
        document.getElementById("nombre_comun").value = data.nombreComun;
        document.getElementById("nombre_cientifico").value =
          data.nombreCientifico;
        document.getElementById("especie").value = data.especie;
        document.getElementById("orden").value = data.orden;
        document.getElementById("familia").value = data.familia;
        document.getElementById("genero").value = data.genero;
        document.getElementById("SelectCatAme").value =
          data.idCategoriaAmenaza;
        document.getElementById("SelectAlimento").value = data.idAlimento;
      } else {
        alert("No se encontró ninguna especie con ese criterio de búsqueda.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar la especie:", error);
    });
}
