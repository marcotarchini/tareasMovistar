<?php
	
	error_reporting(E_ALL);
	ini_set('display_errors', '1');

	$salida = "";

	//Insertar aqui server
	$server = "107";

	$base_path = realpath(dirname(dirname(__FILE__)));
	$url = 'http://ws.movistararg.com/movistar_tienda_liberados.xml';

    $xml_file_name = "movistar_tienda_liberados.xml";
    $json_file_name = "Spreadsheet.json";

    $spreadsheet_url="https://docs.google.com/spreadsheets/d/e/2PACX-1vS7mkwbzGB1D-2xS2rebvnuvn0sxWmJ9K05hTM1MH66LFcg5fq-QvkKr3YGCejw_5YRrdM5vHhl7wTM/pub?gid=0&single=true&output=csv";

    /***********************************************
	**  										  **
	**	  Rutas destino de los ficheros.          **
	**    Para añadir las rutas nuevas se añade   **
	**    una coma al final de la última línea    **
	**    y se añade entre comillas la ruta       **
	**    completa   							  **
	**  										  **
	************************************************/
	$paths = array(
		"/opt/rh/httpd24/root/var/www/html/php",
        "/opt/rh/httpd24/root/var/www/html/hogar/php",
        "/opt/rh/httpd24/root/var/www/html/movil/php",
        "/opt/rh/httpd24/root/var/www/html/ofertas/php",
        "/apache/www/html/php",
        "/apache/www/ofertas/php",
        "/apache/www/promos/php"
    );

	try
	{
		foreach ($paths as $path) {

			if (!is_dir($path)) {
			    if (!mkdir($path, 0777, true)) {
			    	$salida .= "\n folder " . $path . " cannont be created.";
			    }
			}

			$destination = $path . "/" . $xml_file_name;

			echo "\n<br />Destination: " . $destination;

			if (!copy($url, $destination)) {
				$salida .= "\nFile cannot be copied! " . $server . " in path " . $destination; 
			}
		}
		
		
	} catch (Exception $e) {
		$salida .= "\nFile cannot be copied! Exception ".$server;
	}
	
	try
	{
		$results = array();

		if (($handle = fopen($spreadsheet_url, "r")) !== FALSE) {
			$row = 0;
			$col = 0;
			
			while (($row = fgetcsv($handle)) !== false) {
				if (empty($fields)) {
					$fields = $row;
					continue;
				}
				
				foreach ($row as $k => $value) {
					$results[$col][$fields[$k]] = $value;
				}
				$col++;
				unset($row);
			}

			fclose($handle);
			
			$json = json_encode($results);
			
			if ($json != "[]") {
	 
				foreach ($paths as $path) {
					$destination = $path . "/" . $json_file_name;

					echo "\n<br />Destination: " . $destination;

					$fichero = fopen($destination, 'w');
					fwrite($fichero, $json); 
					fclose($fichero); 
				}

			} else {
				$salida .= "\nJson not valid ".$server; 
			}
		}
	
	} catch (Exception $e) {
		$salida .= "\nSpreadsheet cannot be copied! Exception ".$server; 
	}
	
	echo $salida;

	error_log('Se inicia a las '.date_format(date_create("now",timezone_open("America/Argentina/Buenos_Aires")),'Y-m-d H:i:s')." ".$salida."\r\n", 3, dirname(__FILE__) . '/log.txt');

?>