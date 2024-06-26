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
/*Mostrar total de recintos */
async function mostrarDatosRecintos() {
  try {
    const response = await fetch("http://localhost:8080/api/recinto/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos de roles");
    }
    const data = await response.json();

    if (data) {
      const SelectRecinto = document.getElementById("SelectRecinto");
      if (SelectRecinto) {
        data.forEach((data) => {
          const idRecinto = data.idRecinto;
          const nombreRecinto = data.nombre;
          const option = document.createElement("option");
          option.value = idRecinto;
          option.text = nombreRecinto;
          SelectRecinto.appendChild(option);
        });
      }
    }
  } catch (error) {
    console.error("Error al obtener datos de los recintos: " + error);
  }
}
mostrarDatosRecintos();
/*Mostrar total de recintos */
async function obtenerDatosRecintos() {
  try {
    const response = await fetch("http://localhost:8080/api/recinto/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();
    if (data) {
      const promises = data.map(async (item) => [
        item.idRecinto,
        item.nombre,
        item.tipo,
        item.estado,
        item.ubicacion,
      ]);
      const dataRecintos = await Promise.all(promises);

      return dataRecintos;
    }
  } catch (error) {
    console.error("Error al obtener datos: " + error);
  }
}

const config = ConfigTable();
const languageConfig = config.language;
async function mostrarTable() {
  const dataSet = await obtenerDatosRecintos();
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
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-MX.json",
    }, //ordenamiento de colunmas
    order: [[0, "desc"]],
    //cantidad de datos que se mostraran
    lengthMenu: [10, 20, 30, 40, 50],
    //configurar columnas
    columnDefs: [
      { responsivePriority: 3, targets: 0 },
      { responsivePriority: 1, targets: 1 },
      { responsivePriority: 2, targets: 3 },

      {
        target: 4, //numero de colunma
        visible: true, // no visible
        searchable: false, // no se busca
      },
    ],

    //colunas
    columns: [
      { title: "ID recinto" },
      { title: "NOMBRE" },
      { title: "TIPO" },
      { title: "ESTADO" },
      { title: "UBICACION" },
    ],

    //data que se usa
    data: dataSet,
  });
}
mostrarTable();
