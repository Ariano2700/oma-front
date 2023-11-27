const subirImagenes = document.getElementById("subirImagenes");
subirImagenes.addEventListener("click", () => {
  window.location.href =
    "../TABLAS/TablaAnimal/showANDpost-img/showPostImg.html";
});
async function mostrarDatosAnimales() {
  try {
    const response = await fetch("http://localhost:8080/api/animal/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      const SelectAnimal = document.getElementById("SelectAnimal");
      if (SelectAnimal) {
        data.forEach((data) => {
          const idAnimal = data.idAnimal;
          const nombreAnimal = data.nombreAnimal;
          const option = document.createElement("option");
          option.value = idAnimal;
          option.text = nombreAnimal;
          SelectAnimal.appendChild(option);
        });
      }
    }
  } catch (error) {
    console.error("Error al obtener datos de ANIMALES: " + error);
  }
}
mostrarDatosAnimales();
