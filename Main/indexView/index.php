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
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Principal</title>
    <?php require_once "../../vista_barra/css_barra.php"?> 
</head>

<body>
<?php require_once "../../vista_barra/inicio_barra.php"?>


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

    <?php require_once "../../vista_barra/fin_barra.php"?>

</body>

</html>