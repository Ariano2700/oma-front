//array para la carga de datos
const dataSet = [
    [1, 'Recinto 1', 'Exterior', 'Operativo', 'Ubicación 1'],
    [2, 'Recinto 2', 'Interior', 'Operativo', 'Ubicación 2'],
    [3, 'Recinto 3', 'Exterior', 'Operativo', 'Ubicación 3'],
    [4, 'Recinto 4', 'Interior', 'Operativo', 'Ubicación 4'],
    [5, 'Recinto 5', 'Exterior', 'Operativo', 'Ubicación 5'],
    [6, 'Recinto 6', 'Interior', 'Operativo', 'Ubicación 6'],
    [7, 'Recinto 7', 'Exterior', 'Operativo', 'Ubicación 7'],
    [8, 'Recinto 8', 'Interior', 'Operativo', 'Ubicación 8'],
    [9, 'Recinto 9', 'Exterior', 'Operativo', 'Ubicación 9'],
    [10, 'Recinto 10', 'Interior', 'Operativo', 'Ubicación 10'],
    [11, 'Recinto 11', 'Exterior', 'Operativo', 'Ubicación 11'],
    [12, 'Recinto 12', 'Interior', 'Operativo', 'Ubicación 12'],
    [13, 'Recinto 13', 'Exterior', 'Operativo', 'Ubicación 13'],
    [14, 'Recinto 14', 'Interior', 'Operativo', 'Ubicación 14'],
    [15, 'Recinto 15', 'Exterior', 'Operativo', 'Ubicación 15'],
    [16, 'Recinto 16', 'Interior', 'Operativo', 'Ubicación 16'],
    [17, 'Recinto 17', 'Exterior', 'Operativo', 'Ubicación 17'],
    [18, 'Recinto 18', 'Interior', 'Operativo', 'Ubicación 18'],
    [19, 'Recinto 19', 'Exterior', 'Operativo', 'Ubicación 19'],
    [20, 'Recinto 20', 'Interior', 'Operativo', 'Ubicación 20'],
    [21, 'Recinto 21', 'Exterior', 'Operativo', 'Ubicación 21'],
    [22, 'Recinto 22', 'Interior', 'Operativo', 'Ubicación 22'],
    [23, 'Recinto 23', 'Exterior', 'Operativo', 'Ubicación 23'],
    [24, 'Recinto 24', 'Interior', 'Operativo', 'Ubicación 24'],
    [25, 'Recinto 25', 'Exterior', 'Operativo', 'Ubicación 25'],
    [26, 'Recinto 26', 'Interior', 'Operativo', 'Ubicación 26'],
    [27, 'Recinto 27', 'Exterior', 'Operativo', 'Ubicación 27'],
    [28, 'Recinto 28', 'Interior', 'Operativo', 'Ubicación 28'],
    [29, 'Recinto 29', 'Exterior', 'Operativo', 'Ubicación 29'],
    [30, 'Recinto 30', 'Interior', 'Operativo', 'Ubicación 30'],
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
        { responsivePriority: 1, targets: 3 },
        
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
        { title: 'ID recinto' },
        { title: 'NOMBRE' },
        { title: 'TIPO' },
        { title: 'ESTADO' },
        { title: 'UBICACION' },
    ],

    //data que se usa 
    data: dataSet
});
