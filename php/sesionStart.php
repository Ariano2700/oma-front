<?php
session_start();

// Obtener los datos enviados por JavaScript
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['username']) && isset($data['dni'])) {
    $username = $data['username'];
    $dni = $data['dni'];

    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $username;
    $_SESSION['dni'] = $dni;

    $response = array('username' => $username, 'dni' => $dni);

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}
?>
