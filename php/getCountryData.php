<?php

    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    $executionStartTime = microtime(true) / 1000;
    
    //request geojson info from file and loop through array

    $countryBoundaries = file_get_contents("../countryBorders.geo.json");

    $geojson = json_decode($countryBoundaries, true);

    $border = null;

    foreach($geojson["features"] as $feature){
        if ($feature["properties"]["iso_a2"] == $_REQUEST["countrycode"]){
            $border = $feature;
            };
        };

    //api that returns general country info for a given countrycode

    $url='http://api.geonames.org/countryInfoJSON?formatted=true&lang=en&country=' . $_REQUEST["countrycode"] . '&username=nator1111';

    $ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

    $countryinfo = json_decode($result,true);

    $capitalCity = null;
    
    if ($countryinfo["geonames"][0]["countryCode"] == $_REQUEST["countrycode"]){
            $capitalCity = $countryinfo["geonames"][0]["capital"];
            };
    
    //Use info from cpaital city to access Weather API
    
    $url2='https://api.openweathermap.org/data/2.5/weather?q=' . $capitalCity . '&appid=ec562020ab1c1e6c48c0434416824fff';

	$ch2 = curl_init();
	curl_setopt($ch2, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch2, CURLOPT_URL,$url2);

	$result2=curl_exec($ch2);

	curl_close($ch2);

    $weather = json_decode($result2,true);
    
    //Use info from cpaital city to access RESTCountries API

    $url3= 'https://restcountries.eu/rest/v2/capital/' . $capitalCity;

	$ch3 = curl_init();
	curl_setopt($ch3, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch3, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch3, CURLOPT_URL,$url3);

	$result3=curl_exec($ch3);

    curl_close($ch3);

    $countryInfo = json_decode($result3,true); 

    //Get cities by countrycode

    $url4= 'http://api.geonames.org/searchJSON?cities1500&country=' . $_REQUEST["countrycode"]  . '&maxRows=10&username=nator1111';

	$ch4 = curl_init();
	curl_setopt($ch4, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch4, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch4, CURLOPT_URL,$url4);

	$result4=curl_exec($ch4);

    curl_close($ch4);

    $cities = json_decode($result4,true); 

    $city0 = null;
    $city1 = null;
    $city2 = null;
    $city3 = null;
    $city4 = null;
    
    if ($cities["geonames"][0]["countryCode"] == $_REQUEST["countrycode"]){
        $city0 = $cities["geonames"][0]["name"];
            }
    
    if ($cities["geonames"][0]["countryCode"] == $_REQUEST["countrycode"]){
        $city1 = $cities["geonames"][1]["name"];
            }  
    
    if ($cities["geonames"][0]["countryCode"] == $_REQUEST["countrycode"]){
        $city2 = $cities["geonames"][2]["name"];
            }  
    
    if ($cities["geonames"][0]["countryCode"] == $_REQUEST["countrycode"]){
        $city3 = $cities["geonames"][3]["name"];
            }  

    if ($cities["geonames"][0]["countryCode"] == $_REQUEST["countrycode"]){
        $city4 = $cities["geonames"][4]["name"];
            }  

    //Return weather for city0

    $url5='https://api.openweathermap.org/data/2.5/weather?q=' . $city0 . '&appid=ec562020ab1c1e6c48c0434416824fff';

    $ch5 = curl_init();
	curl_setopt($ch5, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch5, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch5, CURLOPT_URL,$url5);

	$result5=curl_exec($ch5);

	curl_close($ch5);

    $city0Weather = json_decode($result5,true);
    
    //Return weather for city1

    $url6='https://api.openweathermap.org/data/2.5/weather?q=' . $city1 . '&appid=ec562020ab1c1e6c48c0434416824fff';

    $ch6 = curl_init();
	curl_setopt($ch6, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch6, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch6, CURLOPT_URL,$url6);

	$result6=curl_exec($ch6);

	curl_close($ch6);

    $city1Weather = json_decode($result6,true);

    //Return weather for city2

    $url7='https://api.openweathermap.org/data/2.5/weather?q=' . $city2 . '&appid=ec562020ab1c1e6c48c0434416824fff';

    $ch7 = curl_init();
	curl_setopt($ch7, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch7, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch7, CURLOPT_URL,$url7);

	$result7=curl_exec($ch7);

	curl_close($ch7);

    $city2Weather = json_decode($result7,true);

    //Return weather for city3

    $url8='https://api.openweathermap.org/data/2.5/weather?q=' . $city3 . '&appid=ec562020ab1c1e6c48c0434416824fff';

    $ch8 = curl_init();
	curl_setopt($ch8, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch8, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch8, CURLOPT_URL,$url8);

	$result8=curl_exec($ch8);

	curl_close($ch8);

    $city3Weather = json_decode($result8,true);

    //Return weather for city4

    $url9='https://api.openweathermap.org/data/2.5/weather?q=' . $city4 . '&appid=ec562020ab1c1e6c48c0434416824fff';

    $ch9 = curl_init();
	curl_setopt($ch9, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch9, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch9, CURLOPT_URL,$url9);

	$result9=curl_exec($ch9);

	curl_close($ch9);

    $city4Weather = json_decode($result9,true);
    
    //Covid Data
    
    /*$url10='https://api.covid19api.com/summary';

    $ch10 = curl_init();
	curl_setopt($ch10, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch10, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch10, CURLOPT_URL,$url10);

	$result10=curl_exec($ch10);

	curl_close($ch10);

    $covid = json_decode($result10,true);
    
    $covidData = null;
    
    foreach($covid["Countries"] as $countries){
        if ($countries["CountryCode"] == $_REQUEST["countrycode"]){
            $covidData = $countries;
            };
        };
    */
    //Capital City Photos
    
    $url11='https://pixabay.com/api/?key=19327417-0a58d65c197905d7f1584ff0a&q=' . $capitalCity . '&image_type=photo';
    
    $ch11 = curl_init();
	curl_setopt($ch11, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch11, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch11, CURLOPT_URL,$url11);

	$result11=curl_exec($ch11);

	curl_close($ch11);

    $photos0 = json_decode($result11,true);
    
    //City 1 Photos
    
    $url12='https://pixabay.com/api/?key=19327417-0a58d65c197905d7f1584ff0a&q=' . $city1 . '&image_type=photo';
    
    $ch12 = curl_init();
	curl_setopt($ch12, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch12, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch12, CURLOPT_URL,$url12);

	$result12=curl_exec($ch12);

	curl_close($ch12);

    $photos1 = json_decode($result12,true);

    //City 2 Photos
    
    $url13='https://pixabay.com/api/?key=19327417-0a58d65c197905d7f1584ff0a&q=' . $city2 . '&image_type=photo';
    
    $ch13 = curl_init();
	curl_setopt($ch13, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch13, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch13, CURLOPT_URL,$url13);

	$result13=curl_exec($ch13);

	curl_close($ch13);

    $photos2 = json_decode($result13,true);

    //City 3 Photos
    
    $url14='https://pixabay.com/api/?key=19327417-0a58d65c197905d7f1584ff0a&q=' . $city3 . '&image_type=photo';
    
    $ch14 = curl_init();
	curl_setopt($ch14, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch14, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch14, CURLOPT_URL,$url14);

	$result14=curl_exec($ch14);

	curl_close($ch14);

    $photos3 = json_decode($result14,true);

    //City 4 Photos
    
    $url15='https://pixabay.com/api/?key=19327417-0a58d65c197905d7f1584ff0a&q=' . $city4 . '&image_type=photo';
    
    $ch15 = curl_init();
	curl_setopt($ch15, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch15, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch15, CURLOPT_URL,$url15);

	$result15=curl_exec($ch15);

	curl_close($ch15);

    $photos4 = json_decode($result15,true);

    //News
    
    $url16='https://newsapi.org/v2/top-headlines?country='. $_REQUEST["countrycode"] . '&apiKey=b6261c1cccc34ba8ab8a803c5a650e07';
    
    $ch16 = curl_init();
	curl_setopt($ch16, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch16, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch16, CURLOPT_URL,$url16);

	$result16=curl_exec($ch16);

	curl_close($ch16);

    $news = json_decode($result16,true);


    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "mission saved";
    $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
    $output['data']['border'] = $border;
    $output['data']['border']['capital'] = $capitalCity;
    $output['data']['border']['weather'] = $weather;
    $output['data']['border']['countryInfo'] = $countryInfo;
    $output['data']['border']['cities'] = $cities;
    $output['data']['border']['city0Weather'] = $city0Weather;
    $output['data']['border']['city1Weather'] = $city1Weather;
    $output['data']['border']['city2Weather'] = $city2Weather;
    $output['data']['border']['city3Weather'] = $city3Weather;   
    $output['data']['border']['city4Weather'] = $city4Weather;  
    //$output['data']['border']['covidData'] = $covidData;   
    $output['data']['border']['city0Photos'] = $photos0;  
    $output['data']['border']['city1Photos'] = $photos1;  
    $output['data']['border']['city2Photos'] = $photos2;  
    $output['data']['border']['city3Photos'] = $photos3;  
    $output['data']['border']['city4Photos'] = $photos4;
    $output['data']['border']['news'] = $news;
         
    header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($output);

?>