// Función para cargar y mostrar la información de usuarios
function cargarPagina(url, contentId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Inserta el contenido de la página en el elemento correspondiente
            const contentElement = document.getElementById(contentId);
            contentElement.innerHTML = data;

            // Oculta el contenido actual
            const userInfoContent = document.getElementById('formInfoContent');
            userInfoContent.classList.add('hidden');

            // Muestra el contenido cargado
            contentElement.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error al cargar la página:', error);
        });
}
