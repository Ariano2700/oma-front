<?php
// Cerrar sesión
session_start();
session_destroy();
header('Location: ../Login/login.html');
exit;

?>