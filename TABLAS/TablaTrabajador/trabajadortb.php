<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trabajador</title>

  <!--enlace a css -->
  <link rel="stylesheet" href="style.css">

  <!--estilos css de bootstrap-->
  <link type="text/css" rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
  <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css">
  <link type="text/css" rel="stylesheet"href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.bootstrap5.min.css">
  <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/buttons/2.4.2/css/buttons.dataTables.min.css">
  <link type="text/css" rel="stylesheet"href="https://cdn.datatables.net/searchpanes/2.2.0/css/searchPanes.bootstrap5.min.css">
  <link type="text/css" rel="stylesheet" href="https://cdn.datatables.net/select/1.7.0/css/select.bootstrap5.min.css">


  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"crossorigin="anonymous"></script>

  <!--iconos bootstrap-->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <?php require_once "../../vista_barra/css_barra.php"?>
</head>

<body>
<?php require_once "../../vista_barra/inicio_barra.php"?>
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
        <h1 class="text-center">Trabajador</h1>
        <!-- Formulario para guardar datos -->
        <form id="formTrabajador" class="form_trabajador">
          <fieldset>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="id_trabajador">Id_Trabajador</label>
                <input type="number" id="id_trabajador" name="id_trabajador" class="form-control">
              </div>
              <div class="form-group col-md-4">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="apellidos">Apellidos:</label>
                <input type="text" id="apellidos" name="apellidos" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="dni">DNI:</label>
                <input type="number" id="dni" name="dni" class="form-control" required maxlength="8" minlength="8">
              </div>
              <div class="form-group col-md-4">
                <label for="telefono">Telefono:</label>
                <input type="number" id="telefono" name="telefono" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="direccion">Direccion:</label>
                <input type="text" id="direccion" name="direccion" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="correo">Email:</label>
                <input type="email" id="correo" name="correo" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" class="form-control" required>
              </div>
              <div class="form-group col-md-4">
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" class="form-control" required>
              </div>
            </div>
            <div class="form-group col-md-4">
              <label for="SelectRol">Rol:</label>
              <select id="SelectRol" name="SelectRol" class="form-control" required>
              </select>
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
  <?php require_once "../../vista_barra/fin_barra.php"?>
  <!--script jquery, datatable y bootstrap-->
  <script src="https://code.jquery.com/jquery-3.7.0.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/responsive/2.5.0/js/responsive.bootstrap5.min.js"type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/dataTables.buttons.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.bootstrap5.min.js" type="text/JavaScript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" type="text/JavaScript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js" type="text/JavaScript"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.html5.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.print.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/buttons/2.4.2/js/buttons.colVis.min.js" type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/searchpanes/2.2.0/js/dataTables.searchPanes.min.js"type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/searchpanes/2.2.0/js/searchPanes.bootstrap5.min.js"type="text/JavaScript"></script>
  <script src="https://cdn.datatables.net/select/1.7.0/js/dataTables.select.min.js" type="text/JavaScript"></script>



  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"integrity="sha384-gn5384jlzQn6IX5O7bR5JS1KxiFqn/bw5+j5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5"crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"integrity="sha384-pzjw8f+ua9di5k75us5jl65ra9H1L7xnBykiJrW5B5N5UpjRv5Koy0FlevMi5D5G"crossorigin="anonymous"></script>

  <!-- enlace de script-->
  <!--CRUD-->
  <script src="crud/deleteTrabajador.js"></script>
  <script src="crud/saveTrabajador.js"></script>
  <script src="crud/searchTrabajador.js"></script>
  <script src="crud/updateTrabajador.js"></script>
  <!--CRUD-->
  <script src="mostrarTrabajador.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>

</html>