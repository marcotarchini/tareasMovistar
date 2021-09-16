<?php

	/*
	error_reporting(E_ALL);
	ini_set('display_errors', '1');
	*/
	
	//Funciones para Argentina

	if(isset($_REQUEST['action']) && !empty($_REQUEST['action'])) {
		$action = $_REQUEST['action'];
		switch($action) {
			case 'getDateTime': 
				getDateTime();
				break;
			case 'CallCenterOpen':
				CallCenterOpen();
				break;			
					
			default:
				die('Access denied for this function!');
		}
	}
	
	//Funcion que devuelve la fecha y hora del servidor
	function getDateTime() {
    
		echo date_format(date_create("now",timezone_open("America/Argentina/Buenos_Aires")),'d-m-Y H:i:s');
        
    }
	
	//Funcion que devuelve ABIERTO si se esta en:
	//Lunes a viernes de 8 a 21 horas : Fija
	//Lunes a viernes de 9 a 21 horas : Movil
	//y CERRADO en caso contrario
	function CallCenterOpen() {
		
		//Para asegurarnos, inicializamos al mas restrictivo
		$Laborable = false;
		
		//Obtenemos el dia de la semana (0=domingo, 1=lunes, etc.)
		$DiaSemana = jddayofweek(cal_to_jd(CAL_GREGORIAN,date_format(date_create("now",timezone_open("America/Argentina/Buenos_Aires")),'m'),date_format(date_create("now",timezone_open("America/Argentina/Buenos_Aires")),'d'),date_format(date_create("now",timezone_open("America/Argentina/Buenos_Aires")),'Y')),0);
		//$DiaSemana = jddayofweek(cal_to_jd(CAL_GREGORIAN,date("m"),date("d"),date("Y")),0);

		switch($DiaSemana)
		{
			//Dias de semana
			case 1: 
			case 2:
			case 3:
			case 4:
			case 5:
				$LaborableFija = true;
				break;
			//Fines de semana
			case 0: 
			case 6:
				$LaborableFija = false;
				break;
		}

		switch($DiaSemana)
		{
			//Dias de semana
			case 1: 
			case 2:
			case 3:
			case 4:
			case 5:
			case 6: 
				$LaborableMovil = true;
				break;
			//Fines de semana
			case 0:
				$LaborableMovil = false;
				break;
		}

		if ($LaborableFija){
			//Lunes a viernes
			$StartWorkingTimeFija = '08:00:00'; 
			$EndWorkingTimeFija = '21:00:00';
		}	

		if ($LaborableMovil){
			//Lunes a sabado
			$StartWorkingTimeMovil = '09:00:00'; 
			$EndWorkingTimeMovil = '21:00:00';
		}
					
		//Ponemos una tabla con los festivos del año
		$HOY = date_format(date_create("now",timezone_open("America/Argentina/Buenos_Aires")),'Y-m-d');
		switch($HOY){
			case '2018-12-24':
				$StartWorkingTimeFija = '08:00:00'; 
				$EndWorkingTimeFija = '15:00:00';
				$StartWorkingTimeMovil = '08:00:00'; 
				$EndWorkingTimeMovil = '15:00:00';
				break;
			case '2018-12-25':
				$StartWorkingTimeFija = ''; 
				$EndWorkingTimeFija = '';
				$StartWorkingTimeMovil = ''; 
				$EndWorkingTimeMovil = '';
				break;
			case '2018-12-31':
				$StartWorkingTimeFija = '08:00:00'; 
				$EndWorkingTimeFija = '15:00:00';
				$StartWorkingTimeMovil = '08:00:00'; 
				$EndWorkingTimeMovil = '15:00:00';
				break;
			case '2019-01-01':
				$StartWorkingTimeFija = ''; 
				$EndWorkingTimeFija = '';
				$StartWorkingTimeMovil = ''; 
				$EndWorkingTimeMovil = '';
				break;
		}	

		$NowTime = date_format(date_create("now",timezone_open("America/Argentina/Buenos_Aires")),'H:i:s');
		
		//Comprobamos General
		if((strtotime($StartWorkingTimeFija) < strtotime($NowTime)) && ( strtotime($NowTime) < strtotime($EndWorkingTimeFija))){ 
			echo 'ABIERTO';
		}else{
			echo 'CERRADO';
		} 
		
		//Comprobamos Whatsapp
		if((strtotime($StartWorkingTimeMovil) < strtotime($NowTime)) && ( strtotime($NowTime) < strtotime($EndWorkingTimeMovil))){ 
			echo '|ABIERTO';
		}else{
			echo '|CERRADO';
		}        
    }
	
	
	function buscar_campo($in_array, $in_campo){ 

		if (empty($in_campo) || empty($in_array)) { 
			return ''; 
		} 

		foreach ($in_array as $key) { 
			if (IsSet($key[0]) && IsSet($key[1]) && (trim($key[0]) == trim($in_campo))){
				return trim($key[1]);
			}
		}

		return ''; 
	}
	
	

?>