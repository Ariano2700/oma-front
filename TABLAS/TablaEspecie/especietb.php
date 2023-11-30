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
  <title>Especie | OMA</title>

  <!--estilos css de bootstrap-->
  <link type="text/css" rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
  <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">
  <link type="text/css" rel="stylesheet"
    href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.bootstrap5.min.css">
  <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/buttons/2.4.2/css/buttons.dataTables.min.css">
  <link type="text/css" rel="stylesheet"
    href="https://cdn.datatables.net/searchpanes/2.2.0/css/searchPanes.bootstrap5.min.css">
  <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/select/1.7.0/css/select.bootstrap5.min.css">


  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>

  <!--iconos bootstrap-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
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
        <!-- Título de la página -->
        <h1 class="text-center">ESPECIE</h1>
        <!-- Formulario para guardar datos -->
        <form class="form_Especie" id="formEspecie">
          <fieldset>
            <div class="form-row">
              <div class="form-group col-md-4">
                <!--<label for="id_especie">Id_especie</label>
                <input type="number" id="id_especie" name="id_especie" class="form-control">-->
                <label for="SelectEspecie">Seleccionar especie</label>
                <select id="SelectEspecie" name="SelectEspecie" class="form-control">
                  <option selected disabled value="noIMG-select">
                    Escoger especie
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="clase">Clase:</label>
                <input type="text" id="clase" name="clase" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="nombre_comun">Nombre Comun:</label>
                <input type="text" id="nombre_comun" name="nombre_comun" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="nombre_cientifico">Nombre Cientifico:</label>
                <input type="text" id="nombre_cientifico" name="nombre_cientifico" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="especie">Especie:</label>
                <input type="text" id="especie" name="especie" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="orden">Orden:</label>
                <input type="text" id="orden" name="orden" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="familia">Familia:</label>
                <input type="text" id="familia" name="familia" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="genero">Genero:</label>
                <input type="text" id="genero" name="genero" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <!--<label for="id_categoria_amenaza">ID Categoría Amenaza:</label>
                <input type="number" id="id_categoria_amenaza" name="id_categoria_amenaza" class="form-control"
                  required>-->
                <label for="SelectCatAme">Seleccionar categoria amenaza</label>
                <select id="SelectCatAme" name="SelectCatAme" class="form-control">
                  <option selected disabled value="noIMG-select">
                    Escoger categoria amenaza
                  </option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <!--<label for="id_alimento">ID Alimento:</label>
                <input type="number" id="id_alimento" name="id_alimento" class="form-control" required>-->
                <label for="SelectAlimento">Seleccionar alimento</label>
                <select id="SelectAlimento" name="SelectAlimento" class="form-control">
                  <option selected disabled value="noIMG-select">
                    Escoger alimento
                  </option>
                </select>
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
  <script src="https://code.jquery.com/jquery-3.7.0.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"
    type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/responsive/2.5.0/js/responsive.bootstrap5.min.js"
    type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.bootstrap5.min.js" type="text/JavaScript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" type="text/JavaScript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js" type="text/JavaScript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.colVis.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/searchpanes/2.2.0/js/dataTables.searchPanes.min.js"
    type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/searchpanes/2.2.0/js/searchPanes.bootstrap5.min.js"
    type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/select/1.7.0/js/dataTables.select.min.js" type="text/JavaScript"></script>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
    integrity="sha384-gn5384jlzQn6IX5O7bR5JS1KxiFqn/bw5+j5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
    integrity="sha384-pzjw8f+ua9di5k75us5jl65ra9H1L7xnBykiJrW5B5N5UpjRv5Koy0FlevMi5D5G"
    crossorigin="anonymous"></script>

  <!-- enlace de script-->
  <!--CRUD-->
  <script src="crud/saveEspecie.js"></script>
  <script src="crud/searchEspecie.js"></script>
  <script src="crud/deleteEspecie.js"></script>
  <script src="crud/updateEspecie.js"></script>
  <!--CRUD-->

  <script src="mostrarEspecie.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="../../vista_barra/urlVerificationParam.js"></script>

</body>

</html>