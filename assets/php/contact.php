<?php
$nombre = $_POST['nombre']; 
$correo = $_POST['correo']; 
$mensaje = $_POST['mensaje'];
$contenido = "From: $nombre \n Mensaje: $mensaje";
$receptor = "incyt@url.edu.gt";
$asunto = $_POST['asunto'];
$correoEncabezado = "From: $correo \r\n"; 
mail($receptor, $asunto, $contenido, $correoEncabezado) or die("Error!");  
echo "Gracias por realizar la consulta". "-" ."<a href='/index.html' style='text-decoration:none;color:#000'>Regresar al sitio</a>"; 

?>