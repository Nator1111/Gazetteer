<?php

    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    $executionStartTime = microtime(true) / 1000;

    $url = 'https://api.opencagedata.com/geocode/v1/json?q=' . $_REQUEST['latlang'] . '&key=efe5c7467dbf4c789be2d2475adc212a';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

    $countryJSON = curl_exec($ch);

    curl_close($ch);

    $countryObj = json_decode($countryJSON, true);

    $output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
    $output['data'] = $countryObj['results'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 

?>