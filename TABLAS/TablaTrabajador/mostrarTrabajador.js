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
/*DATOS DE LOS ROLES */
async function mostrarDatosRoles() {
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
      const SelectRol = document.getElementById("SelectRol");
      data.forEach((data) => {
        const idTrabajadorRol = data.idTrabajadorRol;
        const nombre = data.nombre;
        const option = document.createElement("option");
        option.value = idTrabajadorRol;
        option.text = nombre;
        SelectRol.appendChild(option);
      });
    }
  } catch (error) {
    console.error("Error al obtener datos de roles: " + error);
  }
}
mostrarDatosRoles();
/*DATOS DE LOS ROLES */

async function obtenerRol(rol) {
  try {
    const response = await fetch(`http://localhost:8080/api/rol/rol/${rol}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("La respuesta no es válida");
    }

    const data = await response.json();

    if (data) {
      const nombreRol = data.nombre;
      //console.log(nombreRol);
      return nombreRol;
    } else {
      throw new Error("No se encontró el rol");
    }
  } catch (error) {
    // Manejo de errores
    console.error(error);
    throw error;
  }
}

async function obtenerDatosTrabajadores() {
  try {
    const response = await fetch("http://localhost:8080/api/trabajador/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Error al obtener datos de trabajadores");
    }
    const data = await response.json();

    if (data) {
      // Mapear los datos de trabajadores en el formato adecuado
      const promises = data.map(async (item) => [
        item.idTrabajador,
        item.nombre,
        item.apellido,
        item.dni,
        item.telefono,
        item.direccion,
        item.email,
        item.password,
        item.username,
        await obtenerRol(item.idRol),
      ]);
      const dataTrabajadores = await Promise.all(promises);
      return dataTrabajadores;
    }
  } catch (error) {
    console.error("Error al obtener datos de trabajadores: " + error);
  }
}

const config = ConfigTable();
const languageConfig = config.language;
async function mostrarTablaTrabajadores() {
  const dataSet = await obtenerDatosTrabajadores();

  new DataTable("#creando-datable", {
    responsive: {
      details: {
        type: "column",
        target: "tr",
      },
    },
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
    language: {
      url: "https://cdn.datatables.net/plug-ins/1.13.7/i18n/es-MX.json",
    },
    order: [[0, "desc"]],
    lengthMenu: [10, 20, 30, 40, 50],
    columnDefs: [
      { responsivePriority: 3, targets: 0 },
      { responsivePriority: 1, targets: 1 },
      { responsivePriority: 2, targets: 3 },
      {
        target: 9, // número de columna
        visible: true, // no visible
        searchable: false, // no se busca
      },
    ],
    columns: [
      { title: "ID TRABAJADOR" },
      { title: "NOMBRE" },
      { title: "APELLIDO" },
      { title: "DNI" },
      { title: "TELÉFONO" },
      { title: "DIRECCIÓN" },
      { title: "EMAIL" },
      { title: "PASSWORD" },
      { title: "USERNAME" },
      { title: "ID ROL" },
    ],
    data: dataSet,
  });
}

// Llama a la función para mostrar la tabla de trabajadores.
mostrarTablaTrabajadores();
