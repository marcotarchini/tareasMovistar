<?php

if (!is_array($_FILES) || !array_key_exists('file', $_FILES) || !is_array($_FILES['file'])) {
	return false;
}

foreach ($_FILES as $json_file){
	$response = move_uploaded_file($json_file['tmp_name'], __DIR__.'/LandingsCallcenter.json');
}
