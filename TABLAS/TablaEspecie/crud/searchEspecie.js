// Obtener referencias a los campos de entrada y al botón de búsqueda
/*const searchCriteriaSelect = document.getElementById("searchCriteria");
const searchTermInput = document.getElementById("searchTerm");
const formEspecie = document.getElementById("formEspecie");

formEspecie.addEventListener("input", function (e) {
    if (e.target.tagName === "INPUT") {
        buscarEspecie();
    }
});

function buscarEspecie() {
    const searchTerm = searchTermInput.value;
    const searchCriteria = searchCriteriaSelect.value;
    
    if (!searchTerm) {
        alert("Ingresa un término para buscar.");
        return;
    }

    let searchUrl = "";

    switch (searchCriteria) {
        case "clase":
            searchUrl = `http://localhost:8080/api/especie/clase/${searchTerm}`;
            break;
        case "especie":
            searchUrl = `http://localhost:8080/api/especie/especie/${searchTerm}`;
            break;
        case "familia":
            searchUrl = `http://localhost:8080/api/especie/familia/${searchTerm}`;
            break;
        case "nombreCientifico":
            searchUrl = `http://localhost:8080/api/especie/nombreCientifico/${searchTerm}`;
            break;
        case "genero":
            searchUrl = `http://localhost:8080/api/especie/genero/${searchTerm}`;
            break;
        case "idCategoriaAmenaza":
            searchUrl = `http://localhost:8080/api/especie/categoriaAmenaza/${searchTerm}`;
            break;
        case "idAlimento":
            searchUrl = `http://localhost:8080/api/especie/alimento/${searchTerm}`;
            break;
        case "id":
            searchUrl = `http://localhost:8080/api/especie/clase/porId/${searchTerm}`;
            break;
        default:
            alert("Criterio de búsqueda no válido.");
            break;
    }
    fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                // Actualiza los campos del formulario con los datos encontrados
                document.getElementById("id_especie").value = data.idEspecie;
                document.getElementById("clase").value = data.clase;
                document.getElementById("nombre_comun").value = data.nombreComun;
                document.getElementById("nombre_cientifico").value = data.nombreCientifico;
                document.getElementById("especie").value = data.especie;
                document.getElementById("orden").value = data.orden;
                document.getElementById("familia").value = data.familia;
                document.getElementById("genero").value = data.genero;
                document.getElementById("id_categoria_amenaza").value = data.idCategoriaAmenaza;
                document.getElementById("id_alimento").value = data.idAlimento;
            } else {
                alert("No se encontró ninguna especie con ese criterio de búsqueda.");
            }
        })
        .catch((error) => {
            console.error("Error al buscar la especie:", error);
        });
}*/
const searchTb = document.getElementById("searchTb");
searchTb.addEventListener('click', function(e){
    buscarEspecie();
})
function buscarEspecie() {
  const idEspecie = document.getElementById("id_especie").value;
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
        document.getElementById("id_especie").value = data.idEspecie;
        document.getElementById("clase").value = data.clase;
        document.getElementById("nombre_comun").value = data.nombreComun;
        document.getElementById("nombre_cientifico").value =
          data.nombreCientifico;
        document.getElementById("especie").value = data.especie;
        document.getElementById("orden").value = data.orden;
        document.getElementById("familia").value = data.familia;
        document.getElementById("genero").value = data.genero;
        document.getElementById("id_categoria_amenaza").value =
          data.idCategoriaAmenaza;
        document.getElementById("id_alimento").value = data.idAlimento;
      } else {
        alert("No se encontró ninguna especie con ese criterio de búsqueda.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar la especie:", error);
    });
}
