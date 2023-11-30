const searchTb = document.getElementById("searchTb");

function buscarAnimal() {
  const idAnimal = document.getElementById("SelectAnimal").value;
  console.log(idAnimal);
  if (!idAnimal) {
    alert("Ingresa un ID para buscar.");
    return;
  }

  fetch(`http://localhost:8080/api/animal/porId/${idAnimal}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        document.getElementById("nombre").value = data.nombreAnimal;
        document.getElementById("edad").value = data.edad;
        document.getElementById("sexo").value = data.sexo;
        document.getElementById("tipo").value = data.tipo;
        document.getElementById("estado").value = data.estado;
        document.getElementById("SelectRecinto").value = data.idRecinto;
        document.getElementById("SelectEspecie").value = data.idEspecie;
        
      } else {
        alert("No se encontró ningún animal con ese ID.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar el animal:", error);
    });
}
searchTb.addEventListener("click", function (e) {
  e.preventDefault();
  buscarAnimal();
});