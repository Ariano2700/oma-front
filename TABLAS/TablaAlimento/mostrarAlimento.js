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
function formatFechaCompra(fecha_compra) {
  const fechaCompraDate = new Date(fecha_compra);
  const year = fechaCompraDate.getFullYear();
  const month = String(fechaCompraDate.getMonth() + 1).padStart(2, "0");
  const day = String(fechaCompraDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatMoney(precio){
  return `S/ ${precio}`
}
async function obtenerDatosAlimentos() {
  try {
    const response = await fetch("http://localhost:8080/api/alimento/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos");
    }
    const data = await response.json();

    if (data) {
      const dataAlimentos = data.map((item) => [
        item.idAlimento,
        item.marca,
        formatFechaCompra(item.fecha_compra),
        formatMoney(item.precio_unitario),
        item.volumen,
        item.stock,
      ]);
      return dataAlimentos;
    }
  } catch (error) {
    console.error("Error al obtener datos: " + error);
  }
}
const config = ConfigTable();
const languageConfig = config.language;
async function mostrarTable() {
  const dataSet = await obtenerDatosAlimentos();
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

      /*{
                  target: 0,
                  className: 'dtr-control',
                  orderable: false,
                  visible: true,
              },*/
      /*{
                  target: 2,
                  className: "d-flex justify-content-center"//centrar columna
              },*/
      {
        target: 5, //numero de colunma
        visible: true, // no visible
        searchable: false, // no se busca
      },
    ],

    //colunas
    columns: [
      { title: "ID ALIMENTO" },
      { title: "MARCA" },
      { title: "FECHA DE COMPRA" },
      { title: "PRECIO UNITARIO" },
      { title: "VOLUMEN" },
      { title: "STOCK" },
    ],

    //data que se usa
    data: dataSet,
  });
}
mostrarTable();
