//array para la carga de datos
const dataSet = [
    [1, 'Tigre', 6, 'M', 'Mamífero', 'Saludable', 1, 1],
    [2, 'Atún', 10, 'F', 'Pez', 'Saludable', 2, 2],
    [3, 'Loro', 3, 'M', 'Ave', 'Saludable', 3, 3],
    [4, 'Cocodrilo', 12, 'F', 'Reptil', 'Saludable', 4, 4],
    [5, 'Pez Globo', 5, 'M', 'Pez', 'Saludable', 5, 5],
    [6, 'Abeja', 2, 'F', 'Insecto', 'Saludable', 6, 6],
    [7, 'Oso Polar', 8, 'M', 'Mamífero', 'Saludable', 7, 7],
    [8, 'Águila', 4, 'F', 'Ave', 'Saludable', 8, 8],
    [9, 'Tortuga Marina', 15, 'F', 'Reptil', 'Saludable', 9, 9],
    [10, 'Gorila', 12, 'M', 'Mamífero', 'Saludable', 10, 10],
    [11, 'Elefante', 20, 'F', 'Mamífero', 'Saludable', 11, 11],
    [12, 'León', 8, 'M', 'Mamífero', 'Saludable', 12, 12],
    [13, 'Leopardo', 7, 'F', 'Mamífero', 'Saludable', 13, 13],
    [14, 'Águila Calva', 6, 'M', 'Ave', 'Saludable', 14, 14],
    [15, 'Oso Panda', 5, 'F', 'Mamífero', 'Saludable', 15, 15],
    [16, 'León Marino', 10, 'M', 'Mamífero', 'Saludable', 16, 16],
    [17, 'Delfín', 15, 'F', 'Mamífero', 'Saludable', 17, 17],
    [18, 'Tortuga Terrestre', 30, 'M', 'Reptil', 'Saludable', 18, 18],
    [19, 'Mariposa Monarca', 1, 'F', 'Insecto', 'Saludable', 19, 19],
    [20, 'Avestruz', 7, 'M', 'Ave', 'Saludable', 20, 20],
    [21, 'Hipopótamo', 9, 'F', 'Mamífero', 'Saludable', 21, 21],
    [22, 'Águila Real', 5, 'M', 'Ave', 'Saludable', 22, 22],
    [23, 'Canguro', 4, 'M', 'Mamífero', 'Saludable', 23, 23],
    [24, 'Koala', 6, 'F', 'Mamífero', 'Saludable', 24, 24],
    [25, 'Águila Calva', 9, 'M', 'Ave', 'Saludable', 25, 25],
    [26, 'Ornitorrinco', 3, 'M', 'Mamífero', 'Saludable', 26, 26],
    [27, 'Flamenco', 5, 'F', 'Ave', 'Saludable', 27, 27],
    [28, 'Panda Rojo', 4, 'M', 'Mamífero', 'Saludable', 28, 28],
    [29, 'Jirafa', 7, 'F', 'Mamífero', 'Saludable', 29, 29],
    [30, 'Tucán', 2, 'M', 'Ave', 'Saludable', 30, 30],
    [31, 'Colibrí', 1, 'F', 'Ave', 'Saludable', 31, 31],
    [32, 'Cebra', 5, 'M', 'Mamífero', 'Saludable', 32, 32],
    [33, 'Hipopótamo Enano', 3, 'M', 'Mamífero', 'Saludable', 33, 33],
    [34, 'Rinoceronte', 10, 'F', 'Mamífero', 'Saludable', 34, 34],
    [35, 'Orangután', 8, 'M', 'Mamífero', 'Saludable', 35, 35],
    [36, 'Perezoso', 4, 'F', 'Mamífero', 'Saludable', 36, 36],
    [37, 'Guepardo', 6, 'M', 'Mamífero', 'Saludable', 37, 37],
    [38, 'Lince', 3, 'F', 'Mamífero', 'Saludable', 38, 38],
    [39, 'Águila Harpía', 7, 'M', 'Ave', 'Saludable', 39, 39],
    [40, 'Orca', 10, 'F', 'Mamífero', 'Saludable', 40, 40],
    [41, 'Manatí', 15, 'M', 'Mamífero', 'Saludable', 41, 41],
    [42, 'Tortuga Laúd', 20, 'F', 'Reptil', 'Saludable', 42, 42],
    [43, 'Mariposa Monarca', 1, 'M', 'Insecto', 'Saludable', 19, 19],
    [44, 'Avestruz', 7, 'F', 'Ave', 'Saludable', 20, 20],
    [45, 'Hipopótamo', 9, 'M', 'Mamífero', 'Saludable', 21, 21],
    [46, 'Águila Real', 5, 'F', 'Ave', 'Saludable', 22, 22],
    [47, 'Canguro', 4, 'M', 'Mamífero', 'Saludable', 23, 23],
    [48, 'Koala', 6, 'F', 'Mamífero', 'Saludable', 24, 24],
    [49, 'Águila Calva', 9, 'M', 'Ave', 'Saludable', 25, 25],
    [50, 'Ornitorrinco', 3, 'F', 'Mamífero', 'Saludable', 26, 26]
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
        { responsivePriority: 1, targets: 1 },
        { responsivePriority: 2, targets: 5 },
        
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
            target: 6,//numero de colunma
            visible: false, // no visible
            searchable: false, // no se busca 
        },
        {
            target: 7,//numero de colunma
            visible: false, // no visible
            searchable: false, // no se busca 
        }
    ],
    //colunas
    columns: [
        { title: 'ID ANIMAL' },
        { title: 'NOMBRE' },
        { title: 'EDAD' },
        { title: 'SEXO' },
        { title: 'TIPO' },
        { title: 'ESTADO' },
        { title: 'ID ESPECIE' },
        { title: 'ID RECINTO' }
    ],

    //data que se usa 
    data: dataSet
});
