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
async function getNameRecinto(idRecinto) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/recinto/porId/${idRecinto}`,
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
      const nombreRecinto = data.nombre;
      return nombreRecinto;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function getNameEspecie(idEspecie) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/especie/porId/${idEspecie}`,
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
      const nombreComun = data.nombreComun;
      return nombreComun;
    }
  } catch (error) {
    console.error("ERROR AL OBTENER NOMBRE" + error);
  }
}
async function getSexo(sexo) {
  const sexoAnimal = sexo === "M" ? "Masculino" : "Femenino";
  return sexoAnimal;
}

async function obtenerDatosAnimales() {
  try {
    const response = await fetch("http://localhost:8080/api/animal/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    if (data) {
      const promises = data.map(async (item) => [
        item.idAnimal,
        item.nombreAnimal,
        item.edad,
        await getSexo(item.sexo),
        item.tipo,
        item.estado,
        await getNameEspecie(item.idEspecie),
        await getNameRecinto(item.idRecinto),
      ]);
      const dataAnimales = await Promise.all(promises);

      return dataAnimales;
    }
  } catch (error) {
    console.error("Error al obtener datos: " + error);
  }
}

const config = ConfigTable();
const languageConfig = config.language;
async function mostrarTable() {
  const dataSet = await obtenerDatosAnimales();
  console.log(dataSet);
  new DataTable("#creando-datable", {
    //responsive
    responsive: {
      details: {
        type: "column",
        target: "tr",
      },
    },

    //mostrar y ocultar colunmas
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
          títleAttr: "Copiar",
          className: "btn btn-primary",
        },
        {
          extend: "excel",
          text: '<i class="bi bi-file-earmark-spreadsheet"></i>',
          títleAttr: " exportar a Excel",
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
          text: "Filtrar por colunmas",
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
    //lenguage a español mexico
    language: languageConfig,
    //ordenamiento de colunmas
    order: [[0, "desc"]],
    //cantidad de datos que se mostraran
    lengthMenu: [10, 20, 30, 40, 50],
    //configurar columnas
    columnDefs: [
      { responsivePriority: 3, targets: 0 },
      { responsivePriority: 1, targets: 1 },
      { responsivePriority: 2, targets: 3 },

      {
        target: 5, //numero de colunma
        visible: true, // no visible
        searchable: false, // no se busca
      },
    ],

    //colunas
    columns: [
      { title: "ID ANIMAL" },
      { title: "NOMBRE" },
      { title: "EDAD" },
      { title: "SEXO" },
      { title: "TIPO" },
      { title: "ESTADO" },
      { title: "ESPECIE" },
      { title: "RECINTO" },
    ],

    //data que se usa
    data: dataSet,
  });
}
mostrarTable();