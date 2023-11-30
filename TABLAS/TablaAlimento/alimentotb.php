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
  <title>Alimento | OMA</title>

  <!--enlace a css -->
  <link rel="stylesheet" href="style.css">
  <!--estilos css e iconos de bootstrap-->
  <?php require_once "../../Librerias/LibreriasCss.php" ?>

  <?php require_once "../../vista_barra/css_barra.php" ?>
</head>

<body>
  <?php require_once "../../vista_barra/inicio_barra.php" ?>
  <!-- Encabezado de la página -->
  <section class="Dashboard_Text">
    <main>
      <header>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <br><img src="../../Img/LogoOMA.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </header>

      <div class="container mt-4">
        <h1 class="text-center">ALIMENTO</h1>
        <!-- Formulario para guardar datos -->
        <form class="form_alimento" id="formAlimento">
          <fieldset>
            <div class="form-row">
              <div class="form-group col-md-4">
                <!--<label for="id_alimento">Id alimento</label>
                <input type="number" id="id_alimento" name="id_alimento" class="form-control">-->
                <label for="SelectAlimento">Seleccionar alimento</label>
                <select id="SelectAlimento" name="SelectAlimento" class="form-control">
                  <option selected disabled value="noIMG-select">
                    Escoger alimento
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="marca">Marca</label>
                <input type="text" id="marca" name="marca" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="fecha_compra">Fecha de compra:</label>
                <input type="date" id="fecha_compra" name="fecha_compra" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="precio_unitario">Precio Unitario:</label>
                <input type="text" id="precio_unitario" name="precio_unitario" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="volumen">Volumen:</label>
                <input type="text" id="volumen" name="volumen" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="stock">Stock:</label>
                <input type="number" id="stock" name="stock" class="form-control" required>
              </div>
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-success" id="saveTb">Guardar</button>
              <button type="submit" class="btn btn-warning" id="editTb">Editar</button>
              <button type="submit" class="btn btn-danger" id="deleteTb">Eliminar</button>
              <button type="button" class="btn btn-primary" id="searchTb">Buscar</button>
            </div>
          </fieldset>
        </form>
        <!-- Tabla de datos -->
        <div class="container my-5">
          <div class="row">
            <table id="creando-datable" class="table table-striped" style="width:100%">
              <thead>
              </thead>
              <tbody>
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </main>
  </section>
  <?php require_once "../../vista_barra/fin_barra.php" ?>

  <!--script jquery, datatable y bootstrap-->
  <?php require_once "../../Librerias/LibreriasScript.php" ?>

  <!-- enlace de script-->
  <!--CRUD-->
  <script src="crud/saveAlimento.js"></script>
  <script src="crud/searchAlimento.js"></script>
  <script src="crud/updateAlimento.js"></script>
  <script src="crud/deleteAlimento.js"></script>
  <!--CRUD-->
  <script src="mostrarAlimento.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="../../vista_barra/urlVerificationParam.js"></script>

</body>

</html>