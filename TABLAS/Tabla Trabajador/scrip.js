//array para la carga de datos
const dataSet = [
    [1, 'Juan', 'Pérez', 12345678, 987654321, 'Calle A 123', 'juan@example.com', 'password1', 'juanito', 1],
    [2, 'María', 'Gómez', 87654321, 123456789, 'Avenida B 456', 'maria@example.com', 'password2', 'maria', 2],
    [3, 'Pedro', 'Rodríguez', 45678912, 345678912, 'Calle C 789', 'pedro@example.com', 'password3', 'pedrito', 1],
    [4, 'Laura', 'Fernández', 98761234, 567891234, 'Avenida D 234', 'laura@example.com', 'password4', 'laura', 2],
    [5, 'Carlos', 'Sánchez', 23459876, 678912345, 'Calle E 567', 'carlos@example.com', 'password5', 'carlitos', 1],
    [6, 'Ana', 'López', 76543214, 789123456, 'Avenida F 890', 'ana@example.com', 'password6', 'ana', 2],
    [7, 'Luis', 'Martínez', 34128765, 891234567, 'Calle G 678', 'luis@example.com', 'password7', 'luisito', 1],
    [8, 'Elena', 'Hernández', 12347876, 912345678, 'Avenida H 123', 'elena@example.com', 'password8', 'elena', 2],
    [9, 'José', 'García', 87651234, 123456789, 'Calle I 456', 'jose@example.com', 'password9', 'joseito', 1],
    [10, 'Isabel', 'Pérez', 23458761, 234567891, 'Avenida J 789', 'isabel@example.com', 'password10', 'isabel', 2],
    [11, 'Alejandro', 'Díaz', 56781234, 345612345, 'Calle K 678', 'alejandro@example.com', 'password11', 'alejandro', 1],
    [12, 'Sofía', 'Torres', 87652341, 234567123, 'Avenida L 234', 'sofia@example.com', 'password12', 'sofia', 2],
    [13, 'Manuel', 'Romero', 43218976, 567812345, 'Calle M 567', 'manuel@example.com', 'password13', 'manuel', 1],
    [14, 'Linda', 'Vargas', 76512348, 123489012, 'Avenida N 890', 'linda@example.com', 'password14', 'linda', 2],
    [15, 'Fernando', 'Gutiérrez', 32148765, 890123456, 'Calle O 123', 'fernando@example.com', 'password15', 'fernando', 1],
    [16, 'Lucía', 'Molina', 12345678, 567812345, 'Avenida P 456', 'lucia@example.com', 'password16', 'lucia', 2],
    [17, 'Javier', 'Ortega', 87654321, 234567812, 'Calle Q 789', 'javier@example.com', 'password17', 'javier', 1],
    [18, 'Carmen', 'Soto', 23458761, 890123456, 'Avenida R 123', 'carmen@example.com', 'password18', 'carmen', 2],
    [19, 'Daniel', 'Gómez', 87654312, 567812345, 'Calle S 456', 'daniel@example.com', 'password19', 'daniel', 1],
    [20, 'Silvia', 'Martínez', 34127865, 234567812, 'Avenida T 789', 'silvia@example.com', 'password20', 'silvia', 2],
    [21, 'Ricardo', 'López', 76543241, 890123456, 'Calle U 123', 'ricardo@example.com', 'password21', 'ricardo', 1],
    [22, 'Mónica', 'Hernández', 12347867, 567812345, 'Avenida V 456', 'monica@example.com', 'password22', 'monica', 2],
    [23, 'Alberto', 'García', 87651234, 234567812, 'Calle W 789', 'alberto@example.com', 'password23', 'alberto', 1],
    [24, 'Natalia', 'Pérez', 23458761, 890123456, 'Avenida X 123', 'natalia@example.com', 'password24', 'natalia', 2],
    [25, 'Hugo', 'Díaz', 56781234, 567812345, 'Calle Y 456', 'hugo@example.com', 'password25', 'hugo', 1],
    [26, 'Patricia', 'Torres', 87652341, 234567123, 'Avenida Z 890', 'patricia@example.com', 'password26', 'patricia', 2],
    [27, 'Roberto', 'Romero', 43218976, 567812345, 'Calle AA 123', 'roberto@example.com', 'password27', 'roberto', 1],
    [28, 'Susana', 'Vargas', 76512348, 123489012, 'Avenida BB 890', 'susana@example.com', 'password28', 'susana', 2],
    [29, 'Carlos', 'Gutiérrez', 32148765, 890123456, 'Calle CC 123', 'carlos@example.com', 'password29', 'carlos', 1],
    [30, 'Ana', 'Molina', 12345678, 567812345, 'Avenida DD 456', 'ana@example.com', 'password30', 'ana', 2],
    [31, 'Juan', 'Ortega', 87654321, 234567812, 'Calle EE 789', 'juan@example.com', 'password31', 'juan', 1],
    [32, 'María', 'Soto', 23458761, 890123456, 'Avenida FF 123', 'maria@example.com', 'password32', 'maria', 2],
    [33, 'Pedro', 'Gómez', 87654312, 567812345, 'Calle GG 456', 'pedro@example.com', 'password33', 'pedro', 1],
    [34, 'Laura', 'Martínez', 34127865, 234567812, 'Avenida HH 789', 'laura@example.com', 'password34', 'laura', 2],
    [35, 'Carlos', 'López', 76543241, 890123456, 'Calle II 123', 'carlos@example.com', 'password35', 'carlos', 1],
    [36, 'Ana', 'Hernández', 12347867, 567812345, 'Avenida JJ 456', 'ana@example.com', 'password36', 'ana', 2],
    [37, 'Luis', 'García', 87651234, 234567812, 'Calle KK 789', 'luis@example.com', 'password37', 'luis', 1],
    [38, 'Elena', 'Pérez', 23458761, 890123456, 'Avenida LL 123', 'elena@example.com', 'password38', 'elena', 2],
    [39, 'José', 'Díaz', 56781234, 567812345, 'Calle MM 456', 'jose@example.com', 'password39', 'jose', 1],
    [40, 'Isabel', 'Torres', 87652341, 234567123, 'Avenida NN 890', 'isabel@example.com', 'password40', 'isabel', 2],
    [41, 'Andrés', 'Romero', 23458765, 234567812, 'Calle OO 123', 'andres@example.com', 'password41', 'andres', 1],
    [42, 'Sara', 'Vargas', 76512349, 890123457, 'Avenida PP 890', 'sara@example.com', 'password42', 'sara', 2],
    [43, 'Pablo', 'Gutiérrez', 32148766, 567812346, 'Calle QQ 123', 'pablo@example.com', 'password43', 'pablo', 1],
    [44, 'Laura', 'Molina', 12345679, 234567813, 'Avenida RR 456', 'laura@example.com', 'password44', 'laura', 2],
    [45, 'Gabriel', 'López', 87654322, 890123457, 'Calle SS 123', 'gabriel@example.com', 'password45', 'gabriel', 1],
    [46, 'Carolina', 'Hernández', 12347868, 567812347, 'Avenida TT 789', 'carolina@example.com', 'password46', 'carolina', 2],
    [47, 'Jorge', 'García', 87651235, 234567813, 'Calle UU 123', 'jorge@example.com', 'password47', 'jorge', 1],
    [48, 'Marta', 'Pérez', 23458762, 890123457, 'Avenida VV 123', 'marta@example.com', 'password48', 'marta', 2],
    [49, 'Roberto', 'Gómez', 87654313, 567812346, 'Calle WW 456', 'roberto@example.com', 'password49', 'roberto', 1],
    [50, 'Sofía', 'Martínez', 34127866, 234567813, 'Avenida XX 789', 'sofia@example.com', 'password50', 'sofia', 2],
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
            target: 9,//numero de colunma
            visible: false, // no visible
            searchable: false, // no se busca 
        }
    ],

    //colunas
    columns: [
        { title: 'ID TRABAJADOR' },
        { title: 'NOMBRE' },
        { title: 'APELLIDOS' },
        { title: 'DNI' },
        { title: 'TELEFONO' },
        { title: 'DIRECCION' },
        { title: 'EMAIL' },
        { title: 'PASSWORD' },
        { title: 'USERNAME' },
        { title: 'ID ROLL' },

    ],

    //data que se usa 
    data: dataSet
});
