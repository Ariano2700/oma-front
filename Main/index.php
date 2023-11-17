<?php
include("../php/sesionStart.php");
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    // El usuario no está autenticado, redirigir solo si no está en la página de inicio de sesión
    if ($_SERVER['REQUEST_URI'] != '') {
        header('Location: ../Login/login.html');
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Principal</title>
    <script src="https://kit.fontawesome.com/84a62da86a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="menu">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
    </div>

    <div class="barra-lateral">
        <div>
            <div class="nombre-pagina">
                <ion-icon id="cloud" name="leaf-outline"></ion-icon>
                <span>OMA CECILIA<br> MARGARITA</span>
            </div>
            <div class="usuario">
                <div class="imgUserContainer">
                    <img id="imgUser" src="usuario.jpg" alt="">
                </div>
                <div class="info-usuario">
                    <div class="nombre-email">
                        <span id="usernameNav" class="nombre">
                        </span>
                        <span id="emailNav" class="email">Aun no disponible</span>
                    </div>
                    <div class="dropdown-threeP">
                        <ion-icon name="ellipsis-vertical-outline" class="menu-icon-access"
                            id="menu-icon-access"></ion-icon>
                        <ul class="dropdown-menu">
                            <li><a href="../user_profile/userProfile/userProfile.html"><i
                                        class="fa-solid fa-id-badge"></i> Ver perfil</a></li>
                            <li><a href="../php/sessionClose.php" id="logout"><i
                                        class="fa-solid fa-right-from-bracket"></i> Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div> <br><br>
        </div>

        <nav class="navegacion">
            <ul>
                <li>
                    <a id="inbox" href="#">
                        <ion-icon name="grid-outline"></ion-icon>
                        <span>Inicio</span>
                    </a>
                </li>
                <!---------------->
                <li class="initiative-dropdown">
                    <a href="#" data-target="initiative-dropdown">
                        <ion-icon name="star-outline"></ion-icon>
                        <span class="Item_Name">Tablas</span>
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </a>

                    <ul class="initiative-options">
                        <li><a href="../TABLAS/TablaEspecie/especietb.html"><ion-icon
                                    name="paper-plane-outline"></ion-icon>Especie</a></li>
                        <li><a href="../TABLAS/TablaAnimal/animaltb.html"><ion-icon
                                    name="paper-plane-outline"></ion-icon>Animal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        </li>
                        <li><a href="../TABLAS/TablaCategoriaAmenaza/catametb.html"><ion-icon
                                    name="paper-plane-outline"></ion-icon>Amenaza</a></li>
                        <li><a href="../TABLAS/TablaAlimento/alimentotb.html"><ion-icon
                                    name="paper-plane-outline"></ion-icon>Alimento</a></li>
                        <li><a href="../TABLAS/TablaRecinto/recientotb.html"><ion-icon
                                    name="paper-plane-outline"></ion-icon>Recinto</a></li>
                    </ul>
                </li>
                <!-------nuevo desplegable--------->
                <li class="initiative-dropdown">
                    <a href="#" data-target="initiative-dropdown">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <span class="Item_Name">Zonas</span>
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </a>

                    <ul class="initiative-options">
                        <li><a href="#"><ion-icon name="paper-plane-outline"></ion-icon>Historial Clinico
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                        <li><a href="#"><ion-icon name="paper-plane-outline"></ion-icon>Acta de ingreso</a></li>
                        <li><a href="#"><ion-icon name="paper-plane-outline"></ion-icon>Dieta</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="bookmark-outline"></ion-icon>
                        <span>Importante</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <span>Spam</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="cog-outline"></ion-icon>
                        <span>Configuracion</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="trash-outline"></ion-icon>
                        <span>Papelera</span>
                    </a>
                </li>
            </ul>
        </nav>

        <div>
            <button class="boton">
                <ion-icon name="notifications-circle-outline"></ion-icon>
                <span>Recordatorio</span>
            </button><br>
        </div>

        <div>
            <div class="linea"></div>

            <div class="modo-oscuro">
                <div class="info">
                    <ion-icon name="moon-outline"></ion-icon>
                    <span>Drak Mode</span>
                </div>
                <div class="switch">
                    <div class="base">
                        <div class="circulo">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <main>
        <section class="mainContainer">
            <h1>Contenido</h1>
            <div id="container" class="container"></div>
        </section>
        <section class="tablas">
            <table border="1">
                <tr>
                    <th class="title" id="titleNombre">Nombre</th>
                    <th class="title" id="titleApellido">Apellido</th>
                    <th class="title" id="titleDNI">DNI</th>
                    <th class="title" id="titleEmail">Email</th>
                    <th class="title" id="titleUsername">Username</th>
                    <th class="title" id="titleIDRol">Rol</th>
                </tr>
                <tr>
                    <td class="response" id="responseNombre"></td>
                    <td class="response" id="responseApellido"></td>
                    <td class="response" id="responseDNI"></td>
                    <td class="response" id="responseEmail"></td>
                    <td class="response" id="responseUsername"></td>
                    <td class="response" id="responseIDRol"></td>
                </tr>
            </table>
            <!--ALIMENTOS CON FORI-->
            <table border="1" id="tableAlimento">
                <tr>
                    <th class="title" id="titleMarca">Marca</th>
                    <th class="title" id="titleFechaCompra">Fecha de Compra</th>
                    <th class="title" id="titlePrecioUnitario">Precio Unitario</th>
                    <th class="title" id="titleVolumen">Volumen</th>
                    <th class="title" id="titleStock">Stock</th>
                </tr>

            </table>
        </section>
    </main>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>


    <script src="contentRole.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="script.js"></script>

</body>

</html>