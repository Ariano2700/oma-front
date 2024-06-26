<?php
include("../../php/sesionStart.php");
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    // El usuario no está autenticado, redirigir solo si no está en la página de inicio de sesión
    if ($_SERVER['REQUEST_URI'] != '') {
        header('Location: ../../Login/login.html');
        exit();
    }
}
?>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="styleap.css" />
    <script
      src="https://kit.fontawesome.com/84a62da86a.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    <main>
      <section class="perfil-animal">
        <div class="contenedor-animal">
          <div class="portada-animal">
            <div>
              <img alt="" id="portada-image-animal" />
              <input
                type="file"
                id="portada-input-animal"
                accept="image/*"
                style="display: none"
              />
            </div>
            <div class="sombra"></div>
            <div class="avatar-animal">
              <img src="" alt="img" id="animalFotoPerfil" />
              <a
                href="#"
                class="cambiar-foto-animal"
                onclick="document.getElementById('avatar-input-animal').click();"
              >
                <i class="fas fa-camera"></i>
                <span>Cambiar foto</span>
              </a>
              <input
                type="file"
                id="avatar-input-animal"
                accept="image/*"
                style="display: none"
                onchange="cambiarFoto(this)"
              />
            </div>
            <div class="datos-animal" id="datos-animal" contenteditable="false">
              <h4 class="titulo-animal" id="nombre-animal">
                <span id="nombreAnimalHEAD">Nombre Animal</span>
              </h4>
              <!--<p class="bio-animal" id="bio-animal">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>-->
            </div>
            <div class="opciones-animal" onclick="choosePortadaImageA()">
              <button type="">Cambiar portada</button>
            </div>
          </div>

          <div class="perfil-animal-footer" id="perfil-animal-footer">
            <ul class="list-datos" contenteditable="false">
              <!--<li>
                <i class="fa-solid fa-shield-cat"></i> <b>Animal:</b>
                <span id="animalTextID" class="editable">No definido</span>
              </li>-->
              <li>
                <i class="fa-solid fa-baby-carriage"></i> <b>Edad:</b>
                <span id="edadTextID" class="editable">No definido</span>
              </li>
              <li>
                <i class="fa-solid fa-venus-mars"></i> <b>Sexo:</b>
                <span id="sexoTextID" class="editable">No definido</span>
              </li>
              <li>
                <i class="fa-solid fa-paw"></i> <b>Tipo:</b>
                <span id="tipoTextID" class="editable">No definido</span>
              </li>
            </ul>

            <ul class="lista-datos" contenteditable="false">
              <li>
                <i class="fa-solid fa-icons"></i> <b>Estado:</b>
                <span id="estadoTextID" class="editable">No definido</span>
              </li>
              <li>
                <i class="fa-regular fa-window-maximize"></i>
                <b>Id Especie:</b>
                <span id="idEspecieTextID" class="editable">No definido</span>
              </li>
              <li>
                <i class="fa-solid fa-house"></i> <b>Id Recinto:</b>
                <span id="idRecintoTextID" class="editable">No definido</span>
              </li>
            </ul>
          </div>

          <section class="imgMostrar" id="imgMostrar"></section>

          <!--<div class="buttons">
            <button id="editar-btn" class="editar-btn">
              <i class="fas fa-edit"></i> Editar
            </button>
            <button id="guardar-btn" style="display: none" class="guardar-btn">
              <i class="fas fa-save"></i> Guardar
            </button>
          </div>
          <div id="myModal" class="modal">
            <span class="close" onclick="cerrarModal()">&times;</span>
            <img class="modal-content" id="imgModal" />
            <button
              id="btnEliminarModal"
              class="button-modal button-eliminar"
              onclick="eliminarImagen()"
            >
              Eliminar
            </button>
            <button
              id="btnSalirModal"
              class="button-modal button-salir"
              onclick="salirModal()"
            >
              Salir
            </button>
          </div>-->

          <div class="buttons">
            <button id="editar-btn" class="editar-btn">
              <i class="fas fa-edit"></i> Editar
            </button>
          </div>
          
          <button type="button" class="subir-imagen" id="subirImagenes">
            <i class="fa-solid fa-camera-retro"></i> Subir imagenes
          </button>
          <button type="button" class="subir-imagen" id="mostrarImgsAnimal">
            <i class="fa-regular fa-images"></i> Mostrar imagenes
          </button>
        </div>
      </section>
    </main>
    <script src="showContent.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="../../vista_barra/urlVerificationParam.js"></script>
  </body>
</html>
