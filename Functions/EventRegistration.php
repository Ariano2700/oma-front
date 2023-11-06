<?php
function registrarEvento($username, $resultado) {
    // Ruta al archivo JSON
    $archivo_eventos = __DIR__ . DIRECTORY_SEPARATOR . "../Events/EventRegistration.json";

    // Cargar eventos previos desde el archivo JSON
    $eventos_previos = file_exists($archivo_eventos) ? json_decode(file_get_contents($archivo_eventos), true) : [];

    // Registro de evento
    $registro_evento = array(
        "fecha_hora" => date("Y-m-d H:i:s"),
        "usuario" => $username,
        "resultado" => $resultado
    );

    // Agregar el nuevo evento al array de eventos
    $eventos_previos[] = $registro_evento;

    // Escribir el array de eventos en el archivo JSON con formato legible
    file_put_contents($archivo_eventos, json_encode($eventos_previos, JSON_PRETTY_PRINT));
}

?>

