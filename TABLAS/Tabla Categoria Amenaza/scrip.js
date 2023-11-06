//array para la carga de datos
const dataSet = [
    [1, 'Vulnerable', 'Apéndice II', 'VU'],
    [2, 'En Peligro', 'Apéndice I', 'EN'],
    [3, 'No Evaluado', 'No Aplica', 'NE'],
    [4, 'Casi Amenazado', 'Apéndice II', 'NT'],
    [5, 'Preocupación Menor', 'No Aplica', 'LC'],
    [6, 'Extinto en Estado Silvestre', 'No Aplica', 'EW'],
    [7, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [8, 'Extinto', 'No Aplica', 'EX'],
    [9, 'Bajo Riesgo', 'No Aplica', 'LR'],
    [10, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [11, 'Vulnerable', 'Apéndice II', 'VU'],
    [12, 'En Peligro', 'Apéndice I', 'EN'],
    [13, 'No Evaluado', 'No Aplica', 'NE'],
    [14, 'Casi Amenazado', 'Apéndice II', 'NT'],
    [15, 'Preocupación Menor', 'No Aplica', 'LC'],
    [16, 'Extinto en Estado Silvestre', 'No Aplica', 'EW'],
    [17, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [18, 'Extinto', 'No Aplica', 'EX'],
    [19, 'Bajo Riesgo', 'No Aplica', 'LR'],
    [20, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [21, 'Vulnerable', 'Apéndice II', 'VU'],
    [22, 'En Peligro', 'Apéndice I', 'EN'],
    [23, 'No Evaluado', 'No Aplica', 'NE'],
    [24, 'Casi Amenazado', 'Apéndice II', 'NT'],
    [25, 'Preocupación Menor', 'No Aplica', 'LC'],
    [26, 'Extinto en Estado Silvestre', 'No Aplica', 'EW'],
    [27, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [28, 'Extinto', 'No Aplica', 'EX'],
    [29, 'Bajo Riesgo', 'No Aplica', 'LR'],
    [30, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [31, 'Vulnerable', 'Apéndice II', 'VU'],
    [32, 'En Peligro', 'Apéndice I', 'EN'],
    [33, 'No Evaluado', 'No Aplica', 'NE'],
    [34, 'Casi Amenazado', 'Apéndice II', 'NT'],
    [35, 'Preocupación Menor', 'No Aplica', 'LC'],
    [36, 'Extinto en Estado Silvestre', 'No Aplica', 'EW'],
    [37, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [38, 'Extinto', 'No Aplica', 'EX'],
    [39, 'Bajo Riesgo', 'No Aplica', 'LR'],
    [40, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [41, 'Vulnerable', 'Apéndice II', 'VU'],
    [42, 'En Peligro', 'Apéndice I', 'EN'],
    [43, 'No Evaluado', 'No Aplica', 'NE'],
    [44, 'Casi Amenazado', 'Apéndice II', 'NT'],
    [45, 'Preocupación Menor', 'No Aplica', 'LC'],
    [46, 'Extinto en Estado Silvestre', 'No Aplica', 'EW'],
    [47, 'En Peligro Crítico', 'Apéndice I', 'CR'],
    [48, 'Extinto', 'No Aplica', 'EX'],
    [49, 'Bajo Riesgo', 'No Aplica', 'LR'],
    [50, 'En Peligro Crítico', 'Apéndice I', 'CR']
];

new DataTable('#creando-datable', {
    //responsive
    responsive: {
        details: {
            type: 'column',
            target: 'tr'
        }
    },

    //mostrar y ocultar colunmas
    dom: 'PBfrtip',

    buttons:{
        dom:{
            button:{
                tag: 'button',
                className: ''
            }
        },
        buttons: [
            {
                extend: 'copy',
                text: '<i class="bi bi-copy"></i>',
                títleAttr: 'Copiar',
                className: 'btn btn-primary'
            },
            {
                extend: 'excel',
                text: '<i class="bi bi-file-earmark-spreadsheet"></i>',
                títleAttr: ' exportar a Excel',
                className: 'btn btn-success'
            },
            {
                extend: 'pdf',
                text: '<i class="bi bi-file-earmark-pdf-fill"></i> ',
                titleAttr: 'Exportar a PDF',
                className: 'btn btn-danger',
            },
            {
                extend: 'print',
                text: '<i class="bi bi-printer-fill"></i> ',
                titleAttr: 'Imprimir',
                className: 'btn btn-info',
            },
            {
                extend: 'colvis',
                text: 'Filtrar por colunmas',
                className: 'btn btn-secondary',
            }
        ]
    },
    searchPanes: {
        cascadePanes: true,
        dtOpts: {
            dom: 'tp',
            paging: true,
            pagingType: 'numbers',
            searching: true,
        }
    },   

    //lenguage a español mexico
    language: {
        processing: 'Procesando...',
        lengthMenu: 'Mostrar _MENU_ registros',
        zeroRecords: 'No se encontraron resultados',
        emptyTable: 'Ningún dato disponible en esta tabla',
        infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
        infoFiltered: '(filtrado de un total de _MAX_ registros)',
        search: 'Buscar:',
        infoThousands: ',',
        loadingRecords: 'Cargando...',
        paginate: {
            first: 'Primero',
            last: 'Último',
            next: 'Siguiente',
            previous: 'Anterior',
        },
        aria: {
            sortAscending: ': Activar para ordenar la columna de manera ascendente',
            sortDescending: ': Activar para ordenar la columna de manera descendente',
        },
        buttons: {
            copy: 'Copiar',
            colvis: 'Visibilidad',
            collection: 'Colección',
            colvisRestore: 'Restaurar visibilidad',
            copyKeys:
                'Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.',
            copySuccess: {
                1: 'Copiada 1 fila al portapapeles',
                _: 'Copiadas %ds fila al portapapeles',
            },
            copyTitle: 'Copiar al portapapeles',
            csv: 'CSV',
            excel: 'Excel',
            pageLength: {
                '-1': 'Mostrar todas las filas',
                _: 'Mostrar %d filas',
            },
            pdf: 'PDF',
            print: 'Imprimir',
            renameState: 'Cambiar nombre',
            updateState: 'Actualizar',
            createState: 'Crear Estado',
            removeAllStates: 'Remover Estados',
            removeState: 'Remover',
            savedStates: 'Estados Guardados',
            stateRestore: 'Estado %d',
        },
        autoFill: {
            cancel: 'Cancelar',
            fill: 'Rellene todas las celdas con <i>%d</i>',
            fillHorizontal: 'Rellenar celdas horizontalmente',
            fillVertical: 'Rellenar celdas verticalmentemente',
        },
        decimal: ',',
        searchBuilder: {
            add: 'Añadir condición',
            button: {
                0: 'Constructor de búsqueda',
                _: 'Constructor de búsqueda (%d)',
            },
            clearAll: 'Borrar todo',
            condition: 'Condición',
            conditions: {
                date: {
                    after: 'Despues',
                    before: 'Antes',
                    between: 'Entre',
                    empty: 'Vacío',
                    equals: 'Igual a',
                    notBetween: 'No entre',
                    notEmpty: 'No Vacio',
                    not: 'Diferente de',
                },
                number: {
                    between: 'Entre',
                    empty: 'Vacio',
                    equals: 'Igual a',
                    gt: 'Mayor a',
                    gte: 'Mayor o igual a',
                    lt: 'Menor que',
                    lte: 'Menor o igual que',
                    notBetween: 'No entre',
                    notEmpty: 'No vacío',
                    not: 'Diferente de',
                },
                string: {
                    contains: 'Contiene',
                    empty: 'Vacío',
                    endsWith: 'Termina en',
                    equals: 'Igual a',
                    notEmpty: 'No Vacio',
                    startsWith: 'Empieza con',
                    not: 'Diferente de',
                    notContains: 'No Contiene',
                    notStartsWith: 'No empieza con',
                    notEndsWith: 'No termina con',
                },
                array: {
                    not: 'Diferente de',
                    equals: 'Igual',
                    empty: 'Vacío',
                    contains: 'Contiene',
                    notEmpty: 'No Vacío',
                    without: 'Sin',
                },
            },
            data: 'Data',
            deleteTitle: 'Eliminar regla de filtrado',
            leftTitle: 'Criterios anulados',
            logicAnd: 'Y',
            logicOr: 'O',
            rightTitle: 'Criterios de sangría',
            title: {
                0: 'Constructor de búsqueda',
                _: 'Constructor de búsqueda (%d)',
            },
            value: 'Valor',
        },
        searchPanes: {
            clearMessage: 'Borrar todo',
            collapse: {
                0: 'Paneles de búsqueda',
                _: 'Paneles de búsqueda (%d)',
            },
            count: '{total}',
            countFiltered: '{shown} ({total})',
            emptyPanes: 'Sin paneles de búsqueda',
            loadMessage: 'Cargando paneles de búsqueda',
            title: 'Filtros Activos - %d',
            showMessage: 'Mostrar Todo',
            collapseMessage: 'Colapsar Todo',
        },
        select: {
            cells: {
                1: '1 celda seleccionada',
                _: '%d celdas seleccionadas',
            },
            columns: {
                1: '1 columna seleccionada',
                _: '%d columnas seleccionadas',
            },
            rows: {
                1: '1 fila seleccionada',
                _: '%d filas seleccionadas',
            },
        },
        thousands: '.',
        datetime: {
            previous: 'Anterior',
            next: 'Proximo',
            hours: 'Horas',
            minutes: 'Minutos',
            seconds: 'Segundos',
            unknown: '-',
            amPm: ['AM', 'PM'],
            months: {
                0: 'Enero',
                1: 'Febrero',
                10: 'Noviembre',
                11: 'Diciembre',
                2: 'Marzo',
                3: 'Abril',
                4: 'Mayo',
                5: 'Junio',
                6: 'Julio',
                7: 'Agosto',
                8: 'Septiembre',
                9: 'Octubre',
            },
            weekdays: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        },
        editor: {
            close: 'Cerrar',
            create: {
                button: 'Nuevo',
                title: 'Crear Nuevo Registro',
                submit: 'Crear',
            },
            edit: {
                button: 'Editar',
                title: 'Editar Registro',
                submit: 'Actualizar',
            },
            remove: {
                button: 'Eliminar',
                title: 'Eliminar Registro',
                submit: 'Eliminar',
                confirm: {
                    _: '¿Está seguro que desea eliminar %d filas?',
                    1: '¿Está seguro que desea eliminar 1 fila?',
                },
            },
            error: {
                system:
                    'Ha ocurrido un error en el sistema (<a target="\\" rel="\\ nofollow" href="\\">Más información&lt;\\/a&gt;).</a>',
            },
            multi: {
                title: 'Múltiples Valores',
                info: 'Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.',
                restore: 'Deshacer Cambios',
                noMulti:
                    'Este registro puede ser editado individualmente, pero no como parte de un grupo.',
            },
        },
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
        stateRestore: {
            creationModal: {
                button: 'Crear',
                name: 'Nombre:',
                order: 'Clasificación',
                paging: 'Paginación',
                search: 'Busqueda',
                select: 'Seleccionar',
                columns: {
                    search: 'Búsqueda de Columna',
                    visible: 'Visibilidad de Columna',
                },
                title: 'Crear Nuevo Estado',
                toggleLabel: 'Incluir:',
            },
            emptyError: 'El nombre no puede estar vacio',
            removeConfirm: '¿Seguro que quiere eliminar este %s?',
            removeError: 'Error al eliminar el registro',
            removeJoiner: 'y',
            removeSubmit: 'Eliminar',
            renameButton: 'Cambiar Nombre',
            renameLabel: 'Nuevo nombre para %s',
            duplicateError: 'Ya existe un Estado con este nombre.',
            emptyStates: 'No hay Estados guardados',
            removeTitle: 'Remover Estado',
            renameTitle: 'Cambiar Nombre Estado',
        },
    },

    //ordenamiento de colunmas 
    order: [[0, 'desc']],

    //cantidad de datos que se mostraran
    lengthMenu: [10, 20, 30, 40, 50],

    //configurar columnas
    columnDefs: [
        
        { responsivePriority: 3, targets: 0 },
        { responsivePriority: 2, targets: 1 },
        { responsivePriority: 1, targets: 2 },
        
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
    ],

    //colunas
    columns: [
        { title: 'ID AMENAZA' },
        { title: 'MINADRI' },
        { title: 'CITESL' },
        { title: 'UICN' },
    ],

    //data que se usa 
    data: dataSet
});
