<?php

require_once __DIR__ . '/sendFile.php';

	if (isset($_POST['data'])) {
		$array = json_decode(stripslashes($_POST['data']));
	}else{
		echo 'false';
		exit(0);
	}

	
	$file = fopen('./LandingsCallcenter.json', "w");
	if (!$file) {
		echo "<p>No puedo abrir el archivo para lectura</p>";
		exit;
	}
	
	$longitud = count($array);

	fwrite($file,
		'{
			"lps" :
				[
				');
	for($i=0; $i<$longitud; $i++){
		if ($i == $longitud - 1){
			fwrite($file, '
				{ 
					"codigo" : ' . '"' . trim($array[$i][0]) . '"' . ', 
					"url" : ' . '"' . trim($array[$i][1]) . '"' . ', 
					"tab" : ' . '"' . trim($array[$i][2]) . '"' . ', 
					"callCenter" : ' . '"' . trim($array[$i][3]) . '"' . '
				}');
		}else{
			fwrite($file, '
				{ 
					"codigo" : ' . '"' . trim($array[$i][0]) . '"' . ', 
					"url" : ' . '"' . trim($array[$i][1]) . '"' . ', 
					"tab" : ' . '"' . trim($array[$i][2]) . '"' . ', 
					"callCenter" : ' . '"' . trim($array[$i][3]) . '"' . '
				},');
		}
	}

	fwrite($file,'
			]
		}');

	fclose($file);

sendFile('http://10.167.192.107/php/ControlCallCenter/php/SaveJson.php');
sendFile('http://10.167.192.108/php/ControlCallCenter/php/SaveJson.php');

?>
