/* Preloader*/
$(window).on('load', function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});

/*Load Map*/

var mymap = L.map('mapid', {
    doubleClickZoom: false
}).setView([51.505, -0.09], 3);;

L.tileLayer('https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    apikey: '23337bff48074578ae08ef7206594785',
    maxZoom: 22
}).addTo(mymap);

/*Make div height of Map 100% */

$(window).on("load", function() {
    $("#mapid").height($(window).height());
    mymap.invalidateSize();
}).trigger("resize");

/* Import Unique Marker Icons */

var icon = L.icon({
    iconUrl: "images/compass.png",
    iconAnchor: [8,20],
    popupAnchor: [8, -13]
})

var crown = L.icon({
    iconUrl: "images/crowns.png",
    iconAnchor: [8,20],
    popupAnchor: [8, -13]
})

/*Get Exact GeoLocation*/

/*function onLocationFound(e) {

    var radius = e.accuracy / 2;
    var location = e.latlng
    var marker = L.marker(location);
    marker.addTo(mymap);
    L.circle(location, radius).addTo(mymap);
    marker.bindPopup("<b> Welcome to our App!</b><br> This is your current location.").openPopup();
}

function onLocationError(e) {
    alert(e.message);
}

function getLocationLeaflet() {
    mymap.on('locationfound', onLocationFound);
    mymap.on('locationerror', onLocationError);

    mymap.locate({
        setView: true,
        maxZoom: 16
    });
}*/

/*Parse GEOJSON To Show country boundaries*/

//var geoJSON = {"type":"Feature","properties":{"name":"Costa Rica","iso_a2":"CR","iso_a3":"CRI","iso_n3":"188"},"geometry":{"type":"Polygon","coordinates":[[[-82.96578304719736,8.225027980985985],[-83.50843726269431,8.446926581247283],[-83.71147396516908,8.656836249216866],[-83.59631303580665,8.830443223501419],[-83.63264156770784,9.051385809765321],[-83.90988562695372,9.29080272057358],[-84.30340165885636,9.487354030795714],[-84.64764421256866,9.615537421095707],[-84.71335079622777,9.908051866083852],[-84.97566036654133,10.086723130733006],[-84.91137488477024,9.795991522658923],[-85.11092342806532,9.55703969974131],[-85.33948828809227,9.83454214114866],[-85.66078650586698,9.933347479690724],[-85.79744483106285,10.134885565629034],[-85.79170874707843,10.439337266476613],[-85.65931372754666,10.75433095951172],[-85.94172543002176,10.895278428587801],[-85.7125404528073,11.088444932494824],[-85.56185197624418,11.217119248901597],[-84.90300330273895,10.952303371621896],[-84.67306901725627,11.082657172078143],[-84.35593075228104,10.999225572142905],[-84.19017859570485,10.793450018756674],[-83.89505449088595,10.726839097532446],[-83.65561174186158,10.938764146361422],[-83.40231970898296,10.395438137244652],[-83.01567664257517,9.992982082555555],[-82.54619625520348,9.566134751824677],[-82.93289099804358,9.476812038608173],[-82.92715491405916,9.074330145702916],[-82.71918311230053,8.925708726431495],[-82.86865719270477,8.807266343618522],[-82.82977067740516,8.62629547773237],[-82.91317643912421,8.42351715741907],[-82.96578304719736,8.225027980985985]]]}}

//L.geoJSON(geoJSON).addTo(mymap);

/*On Map CLick event*/

/*var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);*/

/*Success/Error functions for naivgaotr.getgeolocation*/

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    //console.log(pos);

    mymap.locate({
        setView: true,
        maxZoom: 5,
        paddingTopLeft: [200, 0]
    });

}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

/*Split numbers into thousands*/

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*Convert temperature From Kelvin to Celsius*/

function convertToCelsius(num){
    return num - 273.15;
}

/*Round number down*/

function roundDown(num){
    return Math.floor(num);
}

/*If news exists, show it*/

function ifKeyExists(data){
    if(data == undefined){
        console.log("Sorry, no news");
    } else {
        return data;
    }
}

/*Style polylines*/

var myStyle = {
    "color": "#070059",
    "weight": 5,
    "opacity": 0.65
};

/*Populate dropdown and geolocate client*/

$(document).ready(function() {

    $.ajax({
        url: "php/getCountrySelect.php",
        type: 'POST',
        dataType: 'json',

        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                /*Populate Dropdown Menu*/

                $('#selectCountry').append($("<option> -- Select Country -- </option>"));

                $.each(result.data.selectData, function(index) {
                    $('#selectCountry').append($("<option>", {

                        value: result.data.selectData[index].code,
                        text: result.data.selectData[index].name
                    }));
                });

                /*Get Geolocation*/

                //navigator.geolocation.getCurrentPosition(success, error);

                if (navigator.geolocation) {

                    navigator.geolocation.getCurrentPosition(function(position) {
                        
                        var lat = position.coords.latitude;
                        var lon = position.coords.longitude;
                        
                       $.ajax({
                        type:"POST",
                        url:"php/reversegeocode.php",
                        data: {
                            lat: lat,
                            lon: lon
                        },
                        success: function(){
                            if (result.status.name == "ok"){
                                console.log(lat + ', ' + lon);
                                $('#selectCountry').val(result['data']['countryCode']);
                                
                                mymap.locate({
                                    setView: true,
                                    maxZoom: 5,
                                    paddingTopLeft: [200, 0]
                                });
                            }
                        }
                     });
                                           
                   });
           
               } else {
           
                  alert("Geo Location not supported by this device");
                   }
        
        }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(`This request returned an error jqHXR: ${jqXHR}, 
        textStatus: ${textStatus}, 
        errorThrown: ${errorThrown}`);
        }
    });
});

$("#selectCountry").change(function() {

    $.ajax({
        url: "php/getCountryData.php",
        type: 'POST',
        dataType: 'json',
        data: {
            countrycode: $('#selectCountry').val()
        },

        success: function(result) {

            console.log(result);

            switch(result['data']['border']['news']['totalResults']) {
                case 0:
                    var geoJSON = L.geoJSON(result['data']['border'], {
                        style: myStyle
                    }).addTo(mymap);

                    mymap.fitBounds(geoJSON.getBounds(), {
                        padding: [20,20]
                    });

                    $('#myModal').modal('show');

                    $('#flag').html("<img style = 'height: 30px; width: 50px;' src = ' " + result['data']['border']['countryInfo'][0]['flag'] +"'></img>");
                    $('#country').html(result['data']['border']['properties']['name']);
                    $('#native').html(result['data']['border']['countryInfo'][0]['nativeName']);
				    $('#capital').html(result['data']['border']['capital']);
				    $('#region').html(result['data']['border']['countryInfo'][0]['region']);
				    $('#subregion').html(result['data']['border']['countryInfo'][0]['subregion']);
				    $('#demonym').html(result['data']['border']['countryInfo'][0]['demonym']);
				    $('#language').html(result['data']['border']['countryInfo'][0]['languages'][0]['name']);
				    $('#currency').html(result['data']['border']['countryInfo'][0]['currencies'][0]['name']);
                    $('#callcode').html("+" + result['data']['border']['countryInfo'][0]['callingCodes'][0]);
                    $('#language').html(result['data']['border']['countryInfo'][0]['languages'][0]['name']);
                    $('#timezone').html(result['data']['border']['countryInfo'][0]['timezones'][0]);
                    $('#latitude').html(roundDown(result['data']['border']['countryInfo'][0]['latlng'][0]));
				    $('#longitude').html(roundDown(result['data']['border']['countryInfo'][0]['latlng'][1]));
				    $('#population').html(numberWithCommas(result['data']['border']['countryInfo'][0]['population']));
                    $('#weather').html("<img style = 'height: 40px; width: 40px;' src = 'http://openweathermap.org/img/wn/" + result['data']['border']['weather']['weather'][0]['icon'] + "@2x.png'></img>");
                    $('#temp').html(roundDown(convertToCelsius(result['data']['border']['weather']['main']['temp'])) + " °C");
				    $('#humidity').html(roundDown(result['data']['border']['weather']['main']['humidity']) + " %");
                    $('#windspeed').html(roundDown(result['data']['border']['weather']['wind']['speed']) + " km/h");
                    $('#pressure').html(roundDown(result['data']['border']['weather']['main']['pressure']) + " Bar" );
                    /*$('#newCases').html(numberWithCommas(result['data']['border']['covidData']['NewConfirmed']));
                    $('#confirmedCases').html(numberWithCommas(result['data']['border']['covidData']['TotalConfirmed']));
                    $('#newDeaths').html(numberWithCommas(result['data']['border']['covidData']['NewDeaths']));
                    $('#totalDeaths').html(numberWithCommas(result['data']['border']['covidData']['TotalDeaths']));*/
                    
                    var capital = [
                        [result['data']['border']['weather']['name'], result['data']['border']['weather']['coord']['lat'], result['data']['border']['weather']['coord']['lon'], result['data']['border']['cities']['geonames'][0]['population'], result['data']['border']['weather']['weather'][0]['icon'], result['data']['border']['weather']['main']['temp_max'], result['data']['border']['weather']['main']['temp_min']]
                    ];

                    for ( var i=0; i < capital.length; ++i ) 
                    {
                        L.marker( [capital[i][1], capital[i][2]], {icon: crown} )
                            .bindPopup( "<table style = 'border: collapse'> " +
                                            "<tr>"+
                                                "<td style= 'font-size: 15px; font-weight: bold;' colspan = '2'>" + capital[i][0] + " - CAPITAL</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td> <b> Lat/Lan. </b> </td>" + 
                                                "<td step = '.01' align='right'>(" + capital[i][1] + ", " + capital[i][2] + ")</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td><b>Population </b></td>" +
                                                "<td align='right'>" + numberWithCommas(capital[i][3]) + "</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td style= 'font-size: 12px; font-weight: bold;' colspan = '2'>Weather: </td>" +
                                            "</tr>" +
                                            "<tr>" +
                                            "<td align = 'right'><img style = 'height: 50px; width: 50px;' src = 'http://openweathermap.org/img/wn/" + capital[i][4] + "@2x.png'></img>" + "<br/>" + "</td>" +
                                            "<td align='left'>" + roundDown(convertToCelsius(capital[i][5])) + " °C" + "<br/>" +
                                            roundDown(convertToCelsius(capital[i][6])) + " °C" + "<br/>" + "</td>" +
                                            "</tr>"+
                                        "</table>")
                            .addTo( mymap )
                    }

                    var cities = [
                        [result['data']['border']['cities']['geonames'][1]['toponymName'], result['data']['border']['cities']['geonames'][1]['lat'], result['data']['border']['cities']['geonames'][1]['lng'], result['data']['border']['cities']['geonames'][1]['population'], result['data']['border']['city1Weather']['weather'][0]['icon'], result['data']['border']['city1Weather']['main']['temp_max'], result['data']['border']['city1Weather']['main']['temp_min']],
                        [result['data']['border']['cities']['geonames'][2]['toponymName'], result['data']['border']['cities']['geonames'][2]['lat'], result['data']['border']['cities']['geonames'][2]['lng'], result['data']['border']['cities']['geonames'][2]['population'], result['data']['border']['city2Weather']['weather'][0]['icon'], result['data']['border']['city2Weather']['main']['temp_max'], result['data']['border']['city2Weather']['main']['temp_min']],
                        [result['data']['border']['cities']['geonames'][3]['toponymName'], result['data']['border']['cities']['geonames'][3]['lat'], result['data']['border']['cities']['geonames'][3]['lng'], result['data']['border']['cities']['geonames'][3]['population'], result['data']['border']['city3Weather']['weather'][0]['icon'], result['data']['border']['city3Weather']['main']['temp_max'], result['data']['border']['city3Weather']['main']['temp_min']],
                        [result['data']['border']['cities']['geonames'][4]['toponymName'], result['data']['border']['cities']['geonames'][6]['lat'], result['data']['border']['cities']['geonames'][6]['lng'], result['data']['border']['cities']['geonames'][4]['population'], result['data']['border']['city4Weather']['weather'][0]['icon'], result['data']['border']['city4Weather']['main']['temp_max'], result['data']['border']['city4Weather']['main']['temp_min']]
                    ];

                    for ( var i=0; i < cities.length; ++i ) 
                    {
                        L.marker( [cities[i][1], cities[i][2]], {icon: icon} )
                            .bindPopup( 
                                        "<table style = 'border: collapse'> " +
                                            "<tr>"+
                                                "<td style= 'font-size: 15px; font-weight: bold;' colspan = '2'>" + cities[i][0] + "</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td> <b> Lat/Lan. </b> </td>" + 
                                                "<td step = '.01' align='right'>(" + cities[i][1] + ", " + cities[i][2] + ")</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td><b>Population </b></td>" +
                                                "<td align='right'>" + numberWithCommas(cities[i][3]) + "</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td style= 'font-size: 12px; font-weight: bold;' colspan = '2'>Weather: </td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td align = 'right'><img style = 'height: 50px; width: 50px;' src = 'http://openweathermap.org/img/wn/" + cities[i][4] + "@2x.png'></img>" + "<br/>" + "</td>" +
                                                "<td align='left'>" + roundDown(convertToCelsius(cities[i][5])) + " °C" + "<br/>" +
                                                roundDown(convertToCelsius(cities[i][6])) + " °C" + "<br/>" + "</td>" +
                                            "</tr>"+
                                        "</table>"
                                      )
                            .addTo( mymap );
                        };
                    break;

                default:

                    var geoJSON = L.geoJSON(result['data']['border'], {
                        style: myStyle
                    }).addTo(mymap);

                    mymap.fitBounds(geoJSON.getBounds(), {
                        padding: [20,20]
                    });

                    $('#myModal').modal('show');
                    $('.carousel').carousel({
                        interval: 2000
                      })

                    $('#flag').html("<img style = 'height: 40px; width: 60px;' src = ' " + result['data']['border']['countryInfo'][0]['flag'] +"'></img>");
                    $('#country').html(result['data']['border']['properties']['name']);
                    $('#native').html(result['data']['border']['countryInfo'][0]['nativeName']);
				    $('#capital').html(result['data']['border']['capital']);
				    $('#region').html(result['data']['border']['countryInfo'][0]['region']);
				    $('#subregion').html(result['data']['border']['countryInfo'][0]['subregion']);
				    $('#demonym').html(result['data']['border']['countryInfo'][0]['demonym']);
				    $('#language').html(result['data']['border']['countryInfo'][0]['languages'][0]['name']);
				    $('#currency').html(result['data']['border']['countryInfo'][0]['currencies'][0]['name']);
                    $('#callcode').html("+" + result['data']['border']['countryInfo'][0]['callingCodes'][0]);
                    $('#language').html(result['data']['border']['countryInfo'][0]['languages'][0]['name']);
                    $('#timezone').html(result['data']['border']['countryInfo'][0]['timezones'][0]);
                    $('#latitude').html(roundDown(result['data']['border']['countryInfo'][0]['latlng'][0]));
				    $('#longitude').html(roundDown(result['data']['border']['countryInfo'][0]['latlng'][1]));
				    $('#population').html(numberWithCommas(result['data']['border']['countryInfo'][0]['population']));
                    $('#weather').html("<img style = 'height: 40px; width: 40px;' src = 'http://openweathermap.org/img/wn/" + result['data']['border']['weather']['weather'][0]['icon'] + "@2x.png'></img>");
                    $('#temp').html(roundDown(convertToCelsius(result['data']['border']['weather']['main']['temp'])) + " °C");
				    $('#humidity').html(roundDown(result['data']['border']['weather']['main']['humidity']) + " %");
                    $('#windspeed').html(roundDown(result['data']['border']['weather']['wind']['speed']) + " km/h");
                    $('#pressure').html(roundDown(result['data']['border']['weather']['main']['pressure']) + " Bar" );
                    /*$('#newCases').html(numberWithCommas(result['data']['border']['covidData']['NewConfirmed']));
                    $('#confirmedCases').html(numberWithCommas(result['data']['border']['covidData']['TotalConfirmed']));
                    $('#newDeaths').html(numberWithCommas(result['data']['border']['covidData']['NewDeaths']));
                    $('#totalDeaths').html(numberWithCommas(result['data']['border']['covidData']['TotalDeaths']));*/
                    $('#photos1').html("<img style = 'height: 85px; width: 85px;' src = '" + result['data']['border']['city0Photos']['hits'][0]['previewURL'] + "'></img>");
                    $('#photos2').html("<img style = 'height: 85px; width: 85px;' src = '" + result['data']['border']['city0Photos']['hits'][1]['previewURL'] + "'></img>");
                    $('#photos3').html("<img style = 'height: 85px; width: 85px;' src = '" + result['data']['border']['city0Photos']['hits'][2]['previewURL'] + "'></img>");
                    $('#news1').html("<a style = 'color:  #070059;' href = '" + result['data']['border']['news']['articles'][0]['url'] + "' target='_blank'> "+ result['data']['border']['news']['articles'][0]['title'] + "</a>");
                    $('#news2').html("<a style = 'color:  #070059;' href = '" + result['data']['border']['news']['articles'][1]['url'] + "' target='_blank'>"+ result['data']['border']['news']['articles'][1]['title'] + " </a>");
                    $('#news3').html("<a style = 'color:  #070059;' href = '" + result['data']['border']['news']['articles'][2]['url'] + "' target='_blank'>"+ result['data']['border']['news']['articles'][2]['title'] + " </a>");

                    var capital = [
                        [result['data']['border']['weather']['name'], result['data']['border']['weather']['coord']['lat'], result['data']['border']['weather']['coord']['lon'], result['data']['border']['cities']['geonames'][0]['population'], result['data']['border']['weather']['weather'][0]['icon'], result['data']['border']['weather']['main']['temp_max'], result['data']['border']['weather']['main']['temp_min'], result['data']['border']['city0Photos']['hits'][0]['previewURL']]
                    ];

                    for ( var i=0; i < capital.length; ++i ) 
                    {
                        L.marker( [capital[i][1], capital[i][2]], {icon: crown} )
                            .bindPopup( 
                                        "<table style = 'border: collapse'> " +
                                            "<tr>"+
                                                "<td style= 'font-size: 15px; font-weight: bold;' colspan = '2'>" + capital[i][0] + " - CAPITAL</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td> <b> Lat/Lan. </b> </td>" + 
                                                "<td step = '.01' align='right'>(" + capital[i][1] + ", " + capital[i][2] + ")</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td><b>Population </b></td>" +
                                                "<td align='right'>" + numberWithCommas(capital[i][3]) + "</td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td style= 'font-size: 12px; font-weight: bold;' colspan = '2'>Weather: </td>" +
                                            "</tr>" +
                                            "<tr>" +
                                                "<td align = 'right'><img style = 'height: 50px; width: 50px;' src = 'http://openweathermap.org/img/wn/" + capital[i][4] + "@2x.png'></img>" + "<br/>" + "</td>" +
                                                "<td align='left'>" + roundDown(convertToCelsius(capital[i][5])) + " °C" + "<br/>" +
                                                roundDown(convertToCelsius(capital[i][6])) + " °C" + "<br/>" + "</td>" +
                                            "</tr>"+
                                            "<tr>" +
                                                "<td style= 'font-size: 12px; font-weight: bold;' colspan = '2'>Phptos: </td>" +
                                            "</tr>"+
                                            "<tr>" +    
                                                "<td align = 'center' colspan= '2'><img style = 'height: 100px; width: 100px;' src ='" + capital[i][7] + "'></img></td>" +
                                            "</tr>"+
                                        "</table>")
                            .addTo( mymap )
                    }

                    var cities = [
                        [result['data']['border']['cities']['geonames'][1]['toponymName'], result['data']['border']['cities']['geonames'][1]['lat'], result['data']['border']['cities']['geonames'][1]['lng'], result['data']['border']['cities']['geonames'][1]['population'], result['data']['border']['city1Weather']['weather'][0]['icon'], result['data']['border']['city1Weather']['main']['temp_max'], result['data']['border']['city1Weather']['main']['temp_min'], result['data']['border']['city1Photos']['hits'][0]['previewURL']],
                        [result['data']['border']['cities']['geonames'][2]['toponymName'], result['data']['border']['cities']['geonames'][2]['lat'], result['data']['border']['cities']['geonames'][2]['lng'], result['data']['border']['cities']['geonames'][2]['population'], result['data']['border']['city2Weather']['weather'][0]['icon'], result['data']['border']['city2Weather']['main']['temp_max'], result['data']['border']['city2Weather']['main']['temp_min'], result['data']['border']['city2Photos']['hits'][0]['previewURL']],
                        [result['data']['border']['cities']['geonames'][3]['toponymName'], result['data']['border']['cities']['geonames'][3]['lat'], result['data']['border']['cities']['geonames'][3]['lng'], result['data']['border']['cities']['geonames'][3]['population'], result['data']['border']['city3Weather']['weather'][0]['icon'], result['data']['border']['city3Weather']['main']['temp_max'], result['data']['border']['city3Weather']['main']['temp_min'], result['data']['border']['city3Photos']['hits'][0]['previewURL']]
                    ];

                    for ( var i=0; i < cities.length; ++i ) 
                    {
                        L.marker( [cities[i][1], cities[i][2]], {icon: icon} )
                            .bindPopup( 
                        "<table style = 'border: collapse'> " +
                            "<tr>"+
                                "<td style= 'font-size: 15px; font-weight: bold;' colspan = '2'>" + cities[i][0] + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<td> <b> Lat/Lan. </b> </td>" + 
                                "<td step = '.01' align='right'>(" + cities[i][1] + ", " + cities[i][2] + ")</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<td><b>Population </b></td>" +
                                "<td align='right'>" + numberWithCommas(cities[i][3]) + "</td>" +
                            "</tr>" +
                            "<tr>" +
                                "<td style= 'font-size: 12px; font-weight: bold;' colspan = '2'>Weather: </td>" +
                            "</tr>" +
                            "<tr>" +
                            "<td align = 'right'><img style = 'height: 50px; width: 50px;' src = 'http://openweathermap.org/img/wn/" + cities[i][4] + "@2x.png'></img>" + "<br/>" + "</td>" +
                            "<td align='left'>" + roundDown(convertToCelsius(cities[i][5])) + " °C" + "<br/>" +
                            roundDown(convertToCelsius(cities[i][6])) + " °C" + "<br/>" + "</td>" +
                            "</tr>"+
                            "<tr>" +
                                "<td style= 'font-size: 12px; font-weight: bold;' colspan = '2'>Phptos: </td>" +
                            "</tr>"+
                            "<tr>" +    
                                "<td align = 'center' colspan= '2'><img style = 'height: 100px; width: 100px;' src ='" + cities[i][7] + "'></img></td>" +
                            "</tr>"+
                        "</table>")
                            .addTo( mymap );
                        };
                    break;
                };

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(`This request returned an error jqHXR: ${jqXHR}, 
               textStatus: ${textStatus}, 
               errorThrown: ${errorThrown}`);
        }
    });
});

                