<?php
// Iniciar sesión
session_start();

// Llamar al archivo de conexión
include("../Connection/Connection.php");
function hashearYActualizarContrasena($conexion, $username, $contrasenaTextoClaro) {
    // Hashea la contraseña
    $contrasenaHasheada = password_hash($contrasenaTextoClaro, PASSWORD_BCRYPT);

    // Actualiza la contraseña hasheada en la base de datos
    $query = "UPDATE usuario SET password = ? WHERE username = ?";
    $stmt = $conexion->prepare($query);
    $stmt->bind_param("ss", $contrasenaHasheada, $username);

    if ($stmt->execute()) {
        return true; // Actualización exitosa
    } else {
        return false; // Error en la actualización
    }
}

// Ejemplo de uso:
$username = "DiegoYarleque";
$contrasenaTextoClaro = "123456789";


if ($conexion->connect_error) {
    die("Conexión a la base de datos fallida: " . $conexion->connect_error);
}

if (hashearYActualizarContrasena($conexion, $username, $contrasenaTextoClaro)) {
    echo "Contraseña actualizada con éxito.";
} else {
    echo "Error al actualizar la contraseña.";
}

// Cierra la conexión a la base de datos
$conexion->close();

?>