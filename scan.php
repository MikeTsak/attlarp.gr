<?php
// This file looks inside the 'img' folder and returns a list of files to the HTML page
header('Content-Type: application/json');

$directory = "img/";
$images = [];

if (is_dir($directory)) {
    $files = glob($directory . "*.{jpg,jpeg,png,gif,JPG,JPEG,PNG}", GLOB_BRACE);
    
    if ($files) {
        shuffle($files);
        $images = $files;
    }
}
echo json_encode($images);
?>