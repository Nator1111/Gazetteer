<?php

 
                ini_set('display_errors', 'On');  
                $executionStartTime = microtime(true);

                //Reverse geocode

                $lat = isset($_POST['lat']) ? $_POST['lat'] : 51;
                $lon = isset($_POST['lon']) ? $_POST['lat'] : -1;

                //echo $lat;

                $url = 'http://api.geonames.org/countryCode?lat=' . $lat . '&lng=' . $lon . '&username=nator1111&type=JSON';

                $ch = curl_init();
                curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_URL, $url);

                $result=curl_exec($ch);

                curl_close($ch);

                $reverseCodeInfo = json_decode($result,true);


                $output['status']['code'] = "200";

                $output['status']['name'] = "ok";

                $output['status']['description'] = "success";

                $output['status']['executedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

                $output['data']['reverseCodeInfo'] = $reverseCodeInfo;


               

                header('Content-Type: application/json; charset=UTF-8');

 

                echo json_encode($output);

 

?>