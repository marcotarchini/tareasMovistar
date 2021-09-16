<?php
	
	error_reporting(E_ALL);
	ini_set('display_errors', '1');
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://10.167.192.107/php/API-SER.php");
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$output = curl_exec($ch);
	echo $output;
	curl_close($ch);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://10.167.192.108/php/API-SER.php");
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$output = curl_exec($ch);
	echo $output;
	curl_close($ch);

	
?>