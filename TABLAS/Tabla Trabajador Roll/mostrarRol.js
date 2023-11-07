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

async function obtenerDatosRoles() {
  try {
    const response = await fetch("http://localhost:8080/api/rol/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      // Mapear los datos de roles en el formato adecuado
      const dataRoles = data.map((item) => [
        item.idTrabajadorRol,
        item.nombre,
        item.descripcion,
      ]);
      return dataRoles;
    }
  } catch (error) {
    console.error("Error al obtener datos de roles: " + error);
  }
}

// Llama a la función para mostrar la tabla de roles.
async function mostrarTablaRoles() {
  const config = await ConfigTable();
  const languageConfig = config.language;
  const dataSet = await obtenerDatosRoles();

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
    language: languageConfig,
    order: [[0, "desc"]],
    lengthMenu: [10, 20, 30, 40, 50],
    columns: [
      { title: "ID TRABAJADOR Rol" },
      { title: "NOMBRE" },
      { title: "DESCRIPCION" },
    ],
    data: dataSet,
  });
}

// Llama a la función para mostrar la tabla de roles.
mostrarTablaRoles();
