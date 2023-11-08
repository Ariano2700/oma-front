const searchTb = document.getElementById("searchTb");

function buscarCatAme() {
  const idCatAme = document.getElementById("id_Amenaza").value;
  console.log(idCatAme);
  if (!idCatAme) {
    alert("Ingresa un ID para buscar.");
    return;
  }

  fetch(`http://localhost:8080/api/categoriaamenaza/porId/${idCatAme}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        document.getElementById("MINADRI").value = data.minagri;
        document.getElementById("CITESL").value = data.cites;
        document.getElementById("UICN").value = data.uicn;
      } else {
        alert("No se encontró ningúna categoria amenaza con ese ID.");
      }
    })
    .catch((error) => {
      console.error("Error al buscar la categoria amenaza:", error);
    });
}
searchTb.addEventListener("click", function (e) {
  e.preventDefault();
  buscarCatAme();
});
