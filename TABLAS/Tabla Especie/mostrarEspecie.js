async function ConfigTable() {
  try {
    const languageResponse = await fetch("../table_config/languageConfig.json");
    const languageData = await languageResponse.json();

    const buttonsResponse = await fetch("../table_config/buttonsConfig.json");
    const buttonsData = await buttonsResponse.json();

    return {
      language: languageData,
      buttons: buttonsData,
    };
  } catch (error) {
    console.error("Error al cargar la configuración:", error);
    throw error;
  }
}
async function getNameCatAme(idCategoriaAmenaza) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/categoriaamenaza/porId/${idCategoriaAmenaza}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error("La respuesta no es válida");
    }
    const data = await response.json();
    if (data) {
      const NombreMinagri = data.minagri;
      return NombreMinagri;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function getNameAlimento(idAlimento) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/alimento/alimento/${idAlimento}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      throw new Error("La respuesta no es válida");
    }
    const data = await response.json();
    if (data) {
      const nombreMarca = data.marca;
      return nombreMarca;
    }
  } catch (error) {
    console.error("ERROR AL OBTENER NOMBRE" + error);
  }
}

async function obtenerDatosEspecies() {
  try {
    const response = await fetch("http://localhost:8080/api/especie/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      const promises = data.map(async (item) => [
        item.idEspecie,
        item.clase,
        item.nombreComun,
        item.nombreCientifico,
        item.especie,
        item.orden,
        item.familia,
        item.genero,
        await getNameCatAme(item.idCategoriaAmenaza),
        await getNameAlimento(item.idAlimento),
      ]);
      const dataEspecie = await Promise.all(promises);
      return dataEspecie;
    }
  } catch (error) {
    console.error("Error al obtener datos de roles: " + error);
  }
}

const config = ConfigTable();
const languageConfig = config.language;
async function mostrarTablaEspecie() {
  const dataSet = await obtenerDatosEspecies();

  new DataTable("#creando-datable", {
    responsive: true,
    dom: "PBfrtip",
    buttons: {
      dom: {
        button: {
          tag: "button",
          className: "",
        },
      },
      buttons: [
        {
          extend: "copy",
          text: '<i class="bi bi-copy"></i>',
          titleAttr: "Copiar",
          className: "btn btn-primary",
        },
        {
          extend: "excel",
          text: '<i class="bi bi-file-earmark-spreadsheet"></i>',
          titleAttr: " exportar a Excel",
          className: "btn btn-success",
        },
        {
          extend: "pdf",
          text: '<i class="bi bi-file-earmark-pdf-fill"></i> ',
          titleAttr: "Exportar a PDF",
          className: "btn btn-danger",
        },
        {
          extend: "print",
          text: '<i class="bi bi-printer-fill"></i> ',
          titleAttr: "Imprimir",
          className: "btn btn-info",
        },
        {
          extend: "colvis",
          text: "Filtrar por columnas",
          className: "btn btn-secondary",
        },
      ],
    },
    searchPanes: {
      cascadePanes: true,
      dtOpts: {
        dom: "tp",
        paging: true,
        pagingType: "numbers",
        searching: true,
      },
    },
    language: languageConfig,
    order: [[0, "desc"]],
    lengthMenu: [10, 20, 30, 40, 50],
    columns: [
      { title: "ID" },
      { title: "CLASE" },
      { title: "NOMBRE COMUN" },
      { title: "NOMBRE CIENTIFICO" },
      { title: "ESPECIE" },
      { title: "ORDEN" },
      { title: "FAMILIA" },
      { title: "GENERO" },
      { title: "CATEGORIA AMENAZA" },
      { title: "ALIMENTO" },
    ],
    data: dataSet,
  });
}

// Llama a la función para mostrar la tabla de roles.
mostrarTablaEspecie();
