<?php

function sendFile ($url)
{
	$params = array(
		'file' => new CurlFile(realpath('LandingsCallcenter.json'),'application/json', 'enviado.json')
	);
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	curl_exec($ch);
	curl_close($ch);
}
