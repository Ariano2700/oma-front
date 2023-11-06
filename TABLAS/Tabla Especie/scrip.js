//array para la carga de datos
const dataSet = [
    [1, 'Mamífero', 'Tigre', 'Panthera tigris', 'Tigre de Bengala', 'Carnivora', 'Felidae', 'Panthera', 1, 1],
    [2, 'Pez', 'Atún', 'Thunnini', 'Atún Rojo', 'Perciformes', 'Scombridae', 'Thunnini', 2, 2],
    [3, 'Ave', 'Loro', 'Psittacidae', 'Loro Amazona', 'Psittaciformes', 'Psittacidae', 'Amazona', 3, 3],
    [4, 'Reptil', 'Cocodrilo', 'Crocodylus', 'Cocodrilo de Agua Salada', 'Crocodylia', 'Crocodylidae', 'Crocodylus', 4, 4],
    [5, 'Pez', 'Pez Globo', 'Tetraodontidae', 'Pez Globo Verde', 'Tetraodontiformes', 'Tetraodontidae', 'Tetraodon', 5, 5],
    [6, 'Insecto', 'Abeja', 'Apis mellifera', 'Abeja Europea', 'Hymenoptera', 'Apidae', 'Apis', 6, 6],
    [7, 'Mamífero', 'Oso Polar', 'Ursus maritimus', 'Oso Polar', 'Carnivora', 'Ursidae', 'Ursus', 7, 7],
    [8, 'Ave', 'Águila', 'Aquila chrysaetos', 'Águila Real', 'Accipitriformes', 'Accipitridae', 'Aquila', 8, 8],
    [9, 'Reptil', 'Tortuga Marina', 'Cheloniidae', 'Tortuga Verde', 'Testudines', 'Cheloniidae', 'Chelonia', 9, 9],
    [10, 'Mamífero', 'Gorila', 'Gorilla beringei', 'Gorila de Montaña', 'Primates', 'Hominidae', 'Gorilla', 10, 10],
    [11, 'Mamífero', 'Elefante', 'Loxodonta africana', 'Elefante Africano', 'Proboscidea', 'Elephantidae', 'Loxodonta', 11, 11],
    [12, 'Mamífero', 'León', 'Panthera leo', 'León Africano', 'Carnivora', 'Felidae', 'Panthera', 12, 12],
    [13, 'Mamífero', 'Leopardo', 'Panthera pardus', 'Leopardo', 'Carnivora', 'Felidae', 'Panthera', 13, 13],
    [14, 'Ave', 'Águila Calva', 'Haliaeetus leucocephalus', 'Águila Calva', 'Accipitriformes', 'Accipitridae', 'Haliaeetus', 14, 14],
    [15, 'Mamífero', 'Oso Panda', 'Ailuropoda melanoleuca', 'Oso Panda Gigante', 'Carnivora', 'Ursidae', 'Ailuropoda', 15, 15],
    [16, 'Mamífero', 'León Marino', 'Otariidae', 'León Marino de Steller', 'Carnivora', 'Otariidae', 'Eumetopias', 16, 16],
    [17, 'Mamífero', 'Delfín', 'Delphinidae', 'Delfín Común', 'Cetacea', 'Delphinidae', 'Delphinus', 17, 17],
    [18, 'Reptil', 'Tortuga Terrestre', 'Testudinidae', 'Tortuga de Hermann', 'Testudines', 'Testudinidae', 'Testudo', 18, 18],
    [19, 'Insecto', 'Mariposa Monarca', 'Danaus plexippus', 'Mariposa Monarca', 'Lepidoptera', 'Nymphalidae', 'Danaus', 19, 19],
    [20, 'Ave', 'Avestruz', 'Struthio camelus', 'Avestruz Común', 'Struthioniformes', 'Struthionidae', 'Struthio', 20, 20],
    [21, 'Mamífero', 'Hipopótamo', 'Hippopotamus amphibius', 'Hipopótamo Común', 'Cetacea', 'Hippopotamidae', 'Hippopotamus', 21, 21],
    [22, 'Ave', 'Águila Real', 'Aquila chrysaetos', 'Águila Real', 'Accipitriformes', 'Accipitridae', 'Aquila', 22, 22],
    [23, 'Mamífero', 'Canguro', 'Macropodidae', 'Canguro Rojo', 'Diprotodontia', 'Macropodidae', 'Macropus', 23, 23],
    [24, 'Mamífero', 'Koala', 'Phascolarctos cinereus', 'Koala', 'Diprotodontia', 'Phascolarctidae', 'Phascolarctos', 24, 24],
    [25, 'Ave', 'Águila Calva', 'Haliaeetus leucocephalus', 'Águila Calva', 'Accipitriformes', 'Accipitridae', 'Haliaeetus', 25, 25],
    [26, 'Mamífero', 'Ornitorrinco', 'Ornithorhynchus anatinus', 'Ornitorrinco', 'Monotremata', 'Ornithorhynchidae', 'Ornithorhynchus', 26, 26],
    [27, 'Ave', 'Flamenco', 'Phoenicopteridae', 'Flamenco Común', 'Phoenicopteriformes', 'Phoenicopteridae', 'Phoenicopterus', 27, 27],
    [28, 'Mamífero', 'Panda Rojo', 'Ailurus fulgens', 'Panda Rojo', 'Carnivora', 'Ailuridae', 'Ailurus', 28, 28],
    [29, 'Mamífero', 'Jirafa', 'Giraffa camelopardalis', 'Jirafa Común', 'Artiodactyla', 'Giraffidae', 'Giraffa', 29, 29],
    [30, 'Ave', 'Tucán', 'Ramphastidae', 'Tucán Toco', 'Piciformes', 'Ramphastidae', 'Ramphastos', 30, 30],
    [31, 'Ave', 'Colibrí', 'Trochilidae', 'Colibrí Picaflor', 'Apodiformes', 'Trochilidae', 'Trochilus', 31, 31],
    [32, 'Mamífero', 'Cebra', 'Equus zebra', 'Cebra de Grevy', 'Perissodactyla', 'Equidae', 'Equus', 32, 32],
    [33, 'Mamífero', 'Hipopótamo Enano', 'Choeropsis liberiensis', 'Hipopótamo Enano', 'Cetacea', 'Hippopotamidae', 'Choeropsis', 33, 33],
    [34, 'Mamífero', 'Rinoceronte', 'Rhinocerotidae', 'Rinoceronte Blanco', 'Perissodactyla', 'Rhinocerotidae', 'Ceratotherium', 34, 34],
    [35, 'Mamífero', 'Orangután', 'Pongo', 'Orangután de Borneo', 'Primates', 'Hominidae', 'Pongo', 35, 35],
    [36, 'Mamífero', 'Perezoso', 'Folivora', 'Perezoso de Tres Dedos', 'Pilosa', 'Bradypodidae', 'Bradypus', 36, 36],
    [37, 'Mamífero', 'Guepardo', 'Acinonyx jubatus', 'Guepardo', 'Carnivora', 'Felidae', 'Acinonyx', 37, 37],
    [38, 'Mamífero', 'Lince', 'Lynx', 'Lince Ibérico', 'Carnivora', 'Felidae', 'Lynx', 38, 38],
    [39, 'Ave', 'Águila Harpía', 'Harpia harpyja', 'Águila Harpía', 'Accipitriformes', 'Accipitridae', 'Harpia', 39, 39],
    [40, 'Mamífero', 'Orca', 'Orcinus orca', 'Orca', 'Cetacea', 'Delphinidae', 'Orcinus', 40, 40],
    [41, 'Mamífero', 'Manatí', 'Trichechus', 'Manatí del Caribe', 'Sirenia', 'Trichechidae', 'Trichechus', 41, 41]
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
        {
            target: 8,//numero de colunma
            visible: false, // no visible
            searchable: false, // no se busca 
        },
        {
            target: 9,//numero de colunma
            visible: false, // no visible
            searchable: false, // no se busca 
        }
    ],
    //colunas
    columns: [
        { title: 'ID ESPECIE' },
        { title: 'CLASE' },
        { title: 'NOMBRE COMUN' },
        { title: 'NOMBRE CIENTIFIVO' },
        { title: 'ESPECIE' },
        { title: 'ORDEN' },
        { title: 'FAMILIA' },
        { title: 'GENERO' },
        { title: 'ID CATEGORIA' },
        { title: 'ID ALIMENTO' },
    ],
    //data que se usa 
    data: dataSet
});
