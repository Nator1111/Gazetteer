<?php

 
                  
                $executionStartTime = microtime(true);

 

                $countryData = json_decode(file_get_contents("../countryBorders.geo.json"), true);

 

                $country = [];

 

                foreach ($countryData['features'] as $feature) {

 

                                $temp = null;

                                $temp['code'] = $feature["properties"]['iso_a2'];

                                $temp['name'] = $feature["properties"]['name'];

                                //$temp['border'] = $feature;
 

                                array_push($country, $temp);

                               

                }

 

                usort($country, function ($item1, $item2) {

 

                return $item1['name'] <=> $item2['name'];

 

                });

                //Reverse geocode

                $lat = isset($_POST['lat']) ? $_POST['lat'] : NULL;
                $lon = isset($_POST['lon']) ? $_POST['lat'] : NULL;

                $url = 'http://api.geonames.org/countryCode?lat=' . $lat .'&lng=' . $lon . '&username=nator1111';

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

                $output['data']['selectData'] = $country;

                $output['data']['reverseCodeInfo'] = $reverseCodeInfo;


               

                header('Content-Type: application/json; charset=UTF-8');

 

                echo json_encode($output);

 

?>