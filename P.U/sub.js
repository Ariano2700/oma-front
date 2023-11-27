// Mostrar imágenes seleccionadas
function mostrarImagen(event, input) {
    const contenedorImagen = document.querySelector('.contenedor-animal');

    if (!contenedorImagen) {
        console.error('No se encontró el contenedor de imagen.');
        return;
    }

    const files = event.target.files;

    if (files.length === 0) {
        console.warn('No se seleccionó ninguna imagen.');
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("imagen-container");

            const img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("imagen-subida");

            // Agregar evento clic para mostrar el modal
            img.addEventListener('click', function () {
                abrirModal(e.target.result);
            });

            imgContainer.appendChild(img);
            contenedorImagen.appendChild(imgContainer);
        };
        reader.readAsDataURL(files[i]);
    }

    // Eliminar el input después de seleccionar la imagen
    document.body.removeChild(input);
}

// Función para subir imágenes
function subirImagen() {
    // Crear un input de tipo file de forma dinámica
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.style.display = "none";

    // Agregar evento de cambio al input
    input.addEventListener("change", function (event) {
        mostrarImagen(event, input);
    });

    // Agregar el input al documento
    document.body.appendChild(input);

    // Simular clic en el input para abrir el diálogo de selección de archivos
    input.click();
}

console.log('sub.js cargado correctamente.');

// Añadir el siguiente código al final de sub.js
let imagenActual;

function abrirModal(src) {
    const modal = document.getElementById('myModal');
    const imgModal = document.getElementById('imgModal');
    const btnEliminarModal = document.getElementById('btnEliminarModal');
    const btnSalirModal = document.getElementById('btnSalirModal');

    imagenActual = src;
    imgModal.src = src;
    modal.style.display = 'block';

    // Mostrar el botón "Salir" y el botón "Eliminar"
    btnSalirModal.style.display = 'inline-block';
    btnEliminarModal.style.display = 'inline-block';

    // Limpiar eventos anteriores y agregar evento clic para cerrar el modal
    btnSalirModal.removeEventListener('click', cerrarModal);
    btnSalirModal.addEventListener('click', function () {
        cerrarModal();
    });

    // Limpiar eventos anteriores y agregar evento clic para eliminar la imagen
    btnEliminarModal.removeEventListener('click', eliminarImagen);
    btnEliminarModal.addEventListener('click', function () {
        eliminarImagen();
    });
}

function cerrarModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Función para eliminar la imagen
function eliminarImagen() {
    const contenedorImagen = document.querySelector('.contenedor-animal');
    const imagenes = contenedorImagen.getElementsByClassName('imagen-container');

    for (let i = 0; i < imagenes.length; i++) {
        const img = imagenes[i].getElementsByTagName('img')[0];
        if (img.src === imagenActual) {
            contenedorImagen.removeChild(imagenes[i]);
            cerrarModal();
            break;
        }
    }
}

function choosePortadaImageA() {
    // Simula un clic en el elemento de entrada de archivo para abrir el diálogo de selección de archivos
   const portadaInput = document.getElementById('portada-input-animal');
   portadaInput.click();

   portadaInput.addEventListener('change', function () {
       const portadaImage = document.getElementById('portada-image-animal');
       const selectedFile = portadaInput.files[0];

       if (selectedFile) {
           const reader = new FileReader();
           reader.onload = function (e) {
               portadaImage.src = e.target.result;
           };

           reader.readAsDataURL(selectedFile);
       }
   });
}

function cambiarFoto(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            document.getElementById('avatar-image-animal').src = e.target.result;
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const contenidoDiv = document.getElementById("datos-animal");
    const editarBtn = document.getElementById("editar-btn");
    const guardarBtn = document.getElementById("guardar-btn");
    const elementosEditables = document.querySelectorAll(".editable");
    
    editarBtn.addEventListener("click", () => {
        contenidoDiv.contentEditable = "true";
        editarBtn.style.display = "none";
        guardarBtn.style.display = "block";
    });
    
    
    guardarBtn.addEventListener("click", () => {
        contenidoDiv.contentEditable = "false";
        guardarBtn.style.display = "none";
        editarBtn.style.display = "block";
    });
    

    editarBtn.addEventListener("click", function () {
        for (let elemento of elementosEditables) {
            const textoOriginal = elemento.textContent;
            const input = document.createElement("input");
            input.value = textoOriginal;
            elemento.textContent = "";
            elemento.appendChild(input);
        }
        editarBtn.style.display = "none";
        guardarBtn.style.display = "block";
    });

    guardarBtn.addEventListener("click", function () {
        for (let elemento of elementosEditables) {
            const input = elemento.querySelector("input");
            if (input) {
                elemento.textContent = input.value;
            }
        }
        guardarBtn.style.display = "none";
        editarBtn.style.display = "block";
        
    });

});
