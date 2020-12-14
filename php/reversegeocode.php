<?php

$executionStartTime = microtime(true);

//reversegeocode location



$output['status']['code'] = "200";
$output['status']['name'] = "ok";
$output['status']['description'] = "mission saved";
$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
$output['data']['locationInfo'] = $locationInfo;

header('Content-Type: application/json; charset=UTF-8');

echo json_encode($output);