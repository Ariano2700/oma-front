<?php
session_start();
// Verificar si el usuario está autenticado
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    // Obtener el DNI almacenado en la sesión
    $dni = $_SESSION['dni'];

    // Devolver el DNI como respuesta JSON
    $response = array('dni' => $dni);
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
} else {
    $response = array('error' => 'Usuario no autenticado');
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>
