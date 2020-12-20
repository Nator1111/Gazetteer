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

/*Remove previous GeoJSON layer and markers*/

var geoJsonLayer = [];
const citiesMarkers = [];

function createGeoJson(geoJson) {
    if(geoJsonLayer){
        mymap.removeLayer(geoJsonLayer);
        //console.log(capitalMarkers.length);
        console.log('Citiesmarkers = ' + citiesMarkers.length);
        if(citiesMarkers.length == 8){
            mymap.removeLayer(citiesMarkers[0]);
            mymap.removeLayer(citiesMarkers[1]);
            mymap.removeLayer(citiesMarkers[2]);
            mymap.removeLayer(citiesMarkers[3]);
        } 
        
        if (citiesMarkers.length == 12){
            mymap.removeLayer(citiesMarkers[4]);
            mymap.removeLayer(citiesMarkers[5]);
            mymap.removeLayer(citiesMarkers[6]);
            mymap.removeLayer(citiesMarkers[7]);
        } 
        
        if (citiesMarkers.length == 16){
            mymap.removeLayer(citiesMarkers[8]);
            mymap.removeLayer(citiesMarkers[9]);
            mymap.removeLayer(citiesMarkers[10]);
            mymap.removeLayer(citiesMarkers[11]);
        }
        
        if (citiesMarkers.length == 20){
            mymap.removeLayer(citiesMarkers[12]);
            mymap.removeLayer(citiesMarkers[13]);
            mymap.removeLayer(citiesMarkers[14]);
            mymap.removeLayer(citiesMarkers[15]);
        } 
        
        if (citiesMarkers.length == 24){
            mymap.removeLayer(citiesMarkers[16]);
            mymap.removeLayer(citiesMarkers[17]);
            mymap.removeLayer(citiesMarkers[18]);
            mymap.removeLayer(citiesMarkers[19]);
        } 
        
        if (citiesMarkers.length == 28){
            mymap.removeLayer(citiesMarkers[20]);
            mymap.removeLayer(citiesMarkers[21]);
            mymap.removeLayer(citiesMarkers[22]);
            mymap.removeLayer(citiesMarkers[23]);
        }
        
        if (citiesMarkers.length == 32){
            mymap.removeLayer(citiesMarkers[24]);
            mymap.removeLayer(citiesMarkers[25]);
            mymap.removeLayer(citiesMarkers[26]);
            mymap.removeLayer(citiesMarkers[27]);
        } 
        
        if (citiesMarkers.length == 36){
            mymap.removeLayer(citiesMarkers[28]);
            mymap.removeLayer(citiesMarkers[29]);
            mymap.removeLayer(citiesMarkers[30]);
            mymap.removeLayer(citiesMarkers[31]);
        } 
        
        if (citiesMarkers.length == 40){
            mymap.removeLayer(citiesMarkers[32]);
            mymap.removeLayer(citiesMarkers[33]);
            mymap.removeLayer(citiesMarkers[34]);
            mymap.removeLayer(citiesMarkers[35]);
        } 
        
        if (citiesMarkers.length == 44){
            mymap.removeLayer(citiesMarkers[36]);
            mymap.removeLayer(citiesMarkers[37]);
            mymap.removeLayer(citiesMarkers[38]);
            mymap.removeLayer(citiesMarkers[39]);
        } 
        
        if (citiesMarkers.length == 48){
            mymap.removeLayer(citiesMarkers[40]);
            mymap.removeLayer(citiesMarkers[41]);
            mymap.removeLayer(citiesMarkers[42]);
            mymap.removeLayer(citiesMarkers[43]);
        } 
        
        if (citiesMarkers.length == 52){
            mymap.removeLayer(citiesMarkers[44]);
            mymap.removeLayer(citiesMarkers[45]);
            mymap.removeLayer(citiesMarkers[46]);
            mymap.removeLayer(citiesMarkers[47]);
        } 
        
        if (citiesMarkers.length == 56 ){
            mymap.removeLayer(citiesMarkers[48]);
            mymap.removeLayer(citiesMarkers[49]);
            mymap.removeLayer(citiesMarkers[50]);
            mymap.removeLayer(citiesMarkers[51]);
        } 
        
        if (citiesMarkers.length == 60){
            mymap.removeLayer(citiesMarkers[52]);
            mymap.removeLayer(citiesMarkers[53]);
            mymap.removeLayer(citiesMarkers[54]);
            mymap.removeLayer(citiesMarkers[55]);
        } 
        
        if (citiesMarkers.length == 64){
            mymap.removeLayer(citiesMarkers[56]);
            mymap.removeLayer(citiesMarkers[57]);
            mymap.removeLayer(citiesMarkers[58]);
            mymap.removeLayer(citiesMarkers[59]);
        }
        
        if (citiesMarkers.length == 68){
            mymap.removeLayer(citiesMarkers[60]);
            mymap.removeLayer(citiesMarkers[61]);
            mymap.removeLayer(citiesMarkers[62]);
            mymap.removeLayer(citiesMarkers[63]);
        } 
        
        if (citiesMarkers.length == 72){
            mymap.removeLayer(citiesMarkers[64]);
            mymap.removeLayer(citiesMarkers[65]);
            mymap.removeLayer(citiesMarkers[66]);
            mymap.removeLayer(citiesMarkers[67]);
        }
        
        if (citiesMarkers.length == 76){
            mymap.removeLayer(citiesMarkers[68]);
            mymap.removeLayer(citiesMarkers[69]);
            mymap.removeLayer(citiesMarkers[70]);
            mymap.removeLayer(citiesMarkers[71]);
        } 
        
        if (citiesMarkers.length == 80){
            mymap.removeLayer(citiesMarkers[72]);
            mymap.removeLayer(citiesMarkers[73]);
            mymap.removeLayer(citiesMarkers[74]);
            mymap.removeLayer(citiesMarkers[75]);
        }
    }
    geoJsonLayer = L.geoJson(geoJson, {
        style: myStyle,
        onEachFeature: function(f, l){
            if(citiesMarkers.length == 4){
                mymap.addLayer(citiesMarkers[0]);
                mymap.addLayer(citiesMarkers[1]);
                mymap.addLayer(citiesMarkers[2]);
                mymap.addLayer(citiesMarkers[3]);
            } else if (citiesMarkers.length == 8){
                mymap.addLayer(citiesMarkers[4]);
                mymap.addLayer(citiesMarkers[5]);
                mymap.addLayer(citiesMarkers[6]);
                mymap.addLayer(citiesMarkers[7]);
            } else if (citiesMarkers.length == 12){
                mymap.addLayer(citiesMarkers[8]);
                mymap.addLayer(citiesMarkers[9]);
                mymap.addLayer(citiesMarkers[10]);
                mymap.addLayer(citiesMarkers[11]);
            } else if (citiesMarkers.length == 16){
                mymap.addLayer(citiesMarkers[12]);
                mymap.addLayer(citiesMarkers[13]);
                mymap.addLayer(citiesMarkers[14]);
                mymap.addLayer(citiesMarkers[15]);
            } else if (citiesMarkers.length == 20){
                mymap.addLayer(citiesMarkers[16]);
                mymap.addLayer(citiesMarkers[17]);
                mymap.addLayer(citiesMarkers[18]);
                mymap.addLayer(citiesMarkers[19]);
            } else if (citiesMarkers.length == 24){
                mymap.addLayer(citiesMarkers[20]);
                mymap.addLayer(citiesMarkers[21]);
                mymap.addLayer(citiesMarkers[22]);
                mymap.addLayer(citiesMarkers[23]);
            } else if (citiesMarkers.length == 28){
                mymap.addLayer(citiesMarkers[24]);
                mymap.addLayer(citiesMarkers[25]);
                mymap.addLayer(citiesMarkers[26]);
                mymap.addLayer(citiesMarkers[27]);
            } else if (citiesMarkers.length == 32){
                mymap.addLayer(citiesMarkers[28]);
                mymap.addLayer(citiesMarkers[29]);
                mymap.addLayer(citiesMarkers[30]);
                mymap.addLayer(citiesMarkers[31]);
            } else if (citiesMarkers.length == 36){
                mymap.addLayer(citiesMarkers[32]);
                mymap.addLayer(citiesMarkers[33]);
                mymap.addLayer(citiesMarkers[34]);
                mymap.addLayer(citiesMarkers[35]);
            } else if (citiesMarkers.length == 40){
                mymap.addLayer(citiesMarkers[36]);
                mymap.addLayer(citiesMarkers[37]);
                mymap.addLayer(citiesMarkers[38]);
                mymap.addLayer(citiesMarkers[39]);
            } else if (citiesMarkers.length == 44){
                mymap.addLayer(citiesMarkers[40]);
                mymap.addLayer(citiesMarkers[41]);
                mymap.addLayer(citiesMarkers[42]);
                mymap.addLayer(citiesMarkers[43]);
            } else if (citiesMarkers.length == 48){
                mymap.addLayer(citiesMarkers[44]);
                mymap.addLayer(citiesMarkers[45]);
                mymap.addLayer(citiesMarkers[46]);
                mymap.addLayer(citiesMarkers[47]);
            } else if (citiesMarkers.length == 52){
                mymap.addLayer(citiesMarkers[48]);
                mymap.addLayer(citiesMarkers[49]);
                mymap.addLayer(citiesMarkers[50]);
                mymap.addLayer(citiesMarkers[51]);
            } else if (citiesMarkers.length == 56){
                mymap.addLayer(citiesMarkers[52]);
                mymap.addLayer(citiesMarkers[53]);
                mymap.addLayer(citiesMarkers[54]);
                mymap.addLayer(citiesMarkers[55]);
            } else if (citiesMarkers.length == 60){
                mymap.addLayer(citiesMarkers[56]);
                mymap.addLayer(citiesMarkers[57]);
                mymap.addLayer(citiesMarkers[58]);
                mymap.addLayer(citiesMarkers[59]);
            } else if (citiesMarkers.length == 64){
                mymap.addLayer(citiesMarkers[60]);
                mymap.addLayer(citiesMarkers[61]);
                mymap.addLayer(citiesMarkers[62]);
                mymap.addLayer(citiesMarkers[63]);
            } else if (citiesMarkers.length == 68){
                mymap.addLayer(citiesMarkers[64]);
                mymap.addLayer(citiesMarkers[65]);
                mymap.addLayer(citiesMarkers[66]);
                mymap.addLayer(citiesMarkers[67]);
            } else if (citiesMarkers.length == 72){
                mymap.addLayer(citiesMarkers[68]);
                mymap.addLayer(citiesMarkers[69]);
                mymap.addLayer(citiesMarkers[70]);
                mymap.addLayer(citiesMarkers[71]);
            } else if (citiesMarkers.length == 76){
                mymap.addLayer(citiesMarkers[72]);
                mymap.addLayer(citiesMarkers[73]);
                mymap.addLayer(citiesMarkers[74]);
                mymap.addLayer(citiesMarkers[75]);
            } else if (citiesMarkers.length == 80){
                mymap.addLayer(citiesMarkers[76]);
                mymap.addLayer(citiesMarkers[77]);
                mymap.addLayer(citiesMarkers[78]);
                mymap.addLayer(citiesMarkers[79]);
            } else {
                alert('Refresh your browser to continue seeing interesting country information!');
            }
        }
    }).addTo(mymap);
    mymap.fitBounds(geoJsonLayer.getBounds(), {
        padding: [20,20]
    });
}

/*Re-enter Informative Modal*/

function showModal(){
    $('#myModal').modal('show');
}

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

            if(result['data']['border']['news']['totalResults'] == 0 || result['data']['border']['city0Photos']['total'] == 0 || result['data']['border']['city1Photos']['total'] == 0 || result['data']['border']['city2Photos']['total'] == 0 || result['data']['border']['city3Photos']['total'] == 0 || result['data']['border']['city4Photos']['total'] == 0) {

                    var geoJSON = result['data']['border'];
                    
                    var capital = [
                        [result['data']['border']['weather']['name'], result['data']['border']['weather']['coord']['lat'], result['data']['border']['weather']['coord']['lon'], result['data']['border']['cities']['geonames'][0]['population'], result['data']['border']['weather']['weather'][0]['icon'], result['data']['border']['weather']['main']['temp_max'], result['data']['border']['weather']['main']['temp_min']]
                    ];

                    var cities = [
                        [result['data']['border']['cities']['geonames'][1]['toponymName'], result['data']['border']['cities']['geonames'][1]['lat'], result['data']['border']['cities']['geonames'][1]['lng'], result['data']['border']['cities']['geonames'][1]['population'], result['data']['border']['city1Weather']['weather'][0]['icon'], result['data']['border']['city1Weather']['main']['temp_max'], result['data']['border']['city1Weather']['main']['temp_min']],
                        [result['data']['border']['cities']['geonames'][2]['toponymName'], result['data']['border']['cities']['geonames'][2]['lat'], result['data']['border']['cities']['geonames'][2]['lng'], result['data']['border']['cities']['geonames'][2]['population'], result['data']['border']['city2Weather']['weather'][0]['icon'], result['data']['border']['city2Weather']['main']['temp_max'], result['data']['border']['city2Weather']['main']['temp_min']],
                        [result['data']['border']['cities']['geonames'][3]['toponymName'], result['data']['border']['cities']['geonames'][3]['lat'], result['data']['border']['cities']['geonames'][3]['lng'], result['data']['border']['cities']['geonames'][3]['population'], result['data']['border']['city3Weather']['weather'][0]['icon'], result['data']['border']['city3Weather']['main']['temp_max'], result['data']['border']['city3Weather']['main']['temp_min']],
                        ];
                    
                        for ( var i=0; i < capital.length; ++i ) 
                        {
                            var citiesMarker = L.marker( [capital[i][1], capital[i][2]], {icon: crown} );
                                citiesMarker.bindPopup( "<table style = 'border: collapse'> " +
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
                                            "</table>");
                            citiesMarkers.push(citiesMarker);
                        }
                    
                        for ( var i=0; i < cities.length; ++i ) 
                        {
                            var citiesMarker = L.marker( [cities[i][1], cities[i][2]], {icon: icon} );
                                citiesMarker.bindPopup( 
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
                                        );
                                citiesMarkers.push(citiesMarker);
                            };
                        
                    createGeoJson(geoJSON);

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
                    $('#newCases').html(numberWithCommas(result['data']['border']['covidData']['NewConfirmed']));
                    $('#confirmedCases').html(numberWithCommas(result['data']['border']['covidData']['TotalConfirmed']));
                    $('#newDeaths').html(numberWithCommas(result['data']['border']['covidData']['NewDeaths']));
                    $('#totalDeaths').html(numberWithCommas(result['data']['border']['covidData']['TotalDeaths']));
                    $('#photos1').html("Photos N/A");
                    $('#photos2').html("Photos N/A");
                    $('#photos3').html("Photos N/A");
                    $('#news1').html("News N/A");
                    $('#news2').html("News N/A");
                    $('#news3').html("News N/A");
                    
                    
                    } else if (result['data']['border']['countryInfo']['status'] == 404) {
                
                        var geoJSON = result['data']['border'];

                        var capital = [
                            [result['data']['border']['weather']['name'], result['data']['border']['weather']['coord']['lat'], result['data']['border']['weather']['coord']['lon'], result['data']['border']['cities']['geonames'][0]['population'], result['data']['border']['weather']['weather'][0]['icon'], result['data']['border']['weather']['main']['temp_max'], result['data']['border']['weather']['main']['temp_min']]
                        ];

                        var cities = [
                            [result['data']['border']['cities']['geonames'][1]['toponymName'], result['data']['border']['cities']['geonames'][1]['lat'], result['data']['border']['cities']['geonames'][1]['lng'], result['data']['border']['cities']['geonames'][1]['population'], result['data']['border']['city1Weather']['weather'][0]['icon'], result['data']['border']['city1Weather']['main']['temp_max'], result['data']['border']['city1Weather']['main']['temp_min']],
                            [result['data']['border']['cities']['geonames'][2]['toponymName'], result['data']['border']['cities']['geonames'][2]['lat'], result['data']['border']['cities']['geonames'][2]['lng'], result['data']['border']['cities']['geonames'][2]['population'], result['data']['border']['city2Weather']['weather'][0]['icon'], result['data']['border']['city2Weather']['main']['temp_max'], result['data']['border']['city2Weather']['main']['temp_min']],
                            [result['data']['border']['cities']['geonames'][3]['toponymName'], result['data']['border']['cities']['geonames'][3]['lat'], result['data']['border']['cities']['geonames'][3]['lng'], result['data']['border']['cities']['geonames'][3]['population'], result['data']['border']['city3Weather']['weather'][0]['icon'], result['data']['border']['city3Weather']['main']['temp_max'], result['data']['border']['city3Weather']['main']['temp_min']],
                            ];
 
                            for ( var i=0; i < capital.length; ++i ) 
                            {
                                var citiesMarker = L.marker( [capital[i][1], capital[i][2]], {icon: crown} );
                                    citiesMarker.bindPopup( "<table style = 'border: collapse'> " +
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
                                                "</table>");
                                citiesMarkers.push(citiesMarker);
                            }
   
                            for ( var i=0; i < cities.length; ++i ) 
                            {
                                var citiesMarker = L.marker( [cities[i][1], cities[i][2]], {icon: icon} );
                                    citiesMarker.bindPopup( 
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
                                            );
                                citiesMarkers.push(citiesMarker);
                                }

                        createGeoJson(geoJSON);
    
                        $('#myModal').modal('show');
    
                        $('#flag').html("Flag N/A");
                        $('#country').html(result['data']['border']['properties']['name']);
                        $('#native').html(result['data']['border']['cities']['geonames'][0]['countryName']);
                        $('#capital').html(result['data']['border']['capital']);
                        $('#region').html("Region N/A");
                        $('#subregion').html("subregion N/A");
                        $('#demonym').html("Denonym N/A");
                        $('#language').html("Language N/A");
                        $('#currency').html("Currency N/A");
                        $('#callcode').html("Callcode N/A");
                        $('#language').html("Language N/A");
                        $('#timezone').html("Timezone N/A");
                        $('#latitude').html(roundDown(result['data']['border']['weather']['coord']['lat']));
                        $('#longitude').html(roundDown(result['data']['border']['weather']['coord']['lat']));
                        $('#population').html(numberWithCommas("Population N/A"));
                        $('#weather').html("<img style = 'height: 40px; width: 40px;' src = 'http://openweathermap.org/img/wn/" + result['data']['border']['weather']['weather'][0]['icon'] + "@2x.png'></img>");
                        $('#temp').html(roundDown(convertToCelsius(result['data']['border']['weather']['main']['temp'])) + " °C");
                        $('#humidity').html(roundDown(result['data']['border']['weather']['main']['humidity']) + " %");
                        $('#windspeed').html(roundDown(result['data']['border']['weather']['wind']['speed']) + " km/h");
                        $('#pressure').html(roundDown(result['data']['border']['weather']['main']['pressure']) + " Bar" );
                        $('#newCases').html(numberWithCommas(result['data']['border']['covidData']['NewConfirmed']));
                        $('#confirmedCases').html(numberWithCommas(result['data']['border']['covidData']['TotalConfirmed']));
                        $('#newDeaths').html(numberWithCommas(result['data']['border']['covidData']['NewDeaths']));
                        $('#totalDeaths').html(numberWithCommas(result['data']['border']['covidData']['TotalDeaths']));
                        $('#photos1').html("Photos N/A");
                        $('#photos2').html("Photos N/A");
                        $('#photos3').html("Photos N/A");
                        $('#news1').html("News N/A");
                        $('#news2').html("News N/A");
                        $('#news3').html("News N/A");

                    
                        } else {
                                
                        var geoJSON = result['data']['border'];

                        var capital = [
                            [result['data']['border']['weather']['name'], result['data']['border']['weather']['coord']['lat'], result['data']['border']['weather']['coord']['lon'], result['data']['border']['cities']['geonames'][0]['population'], result['data']['border']['weather']['weather'][0]['icon'], result['data']['border']['weather']['main']['temp_max'], result['data']['border']['weather']['main']['temp_min'], result['data']['border']['city0Photos']['hits'][0]['previewURL']]
                        ];

                        var cities = [
                            [result['data']['border']['cities']['geonames'][1]['toponymName'], result['data']['border']['cities']['geonames'][1]['lat'], result['data']['border']['cities']['geonames'][1]['lng'], result['data']['border']['cities']['geonames'][1]['population'], result['data']['border']['city1Weather']['weather'][0]['icon'], result['data']['border']['city1Weather']['main']['temp_max'], result['data']['border']['city1Weather']['main']['temp_min'], result['data']['border']['city1Photos']['hits'][0]['previewURL']],
                            [result['data']['border']['cities']['geonames'][2]['toponymName'], result['data']['border']['cities']['geonames'][2]['lat'], result['data']['border']['cities']['geonames'][2]['lng'], result['data']['border']['cities']['geonames'][2]['population'], result['data']['border']['city2Weather']['weather'][0]['icon'], result['data']['border']['city2Weather']['main']['temp_max'], result['data']['border']['city2Weather']['main']['temp_min'], result['data']['border']['city2Photos']['hits'][0]['previewURL']],
                            [result['data']['border']['cities']['geonames'][3]['toponymName'], result['data']['border']['cities']['geonames'][3]['lat'], result['data']['border']['cities']['geonames'][3]['lng'], result['data']['border']['cities']['geonames'][3]['population'], result['data']['border']['city3Weather']['weather'][0]['icon'], result['data']['border']['city3Weather']['main']['temp_max'], result['data']['border']['city3Weather']['main']['temp_min'], result['data']['border']['city3Photos']['hits'][0]['previewURL']]
                        ];
                        
                            for ( var i=0; i < capital.length; ++i ) 
                                {
                                   var capitalMarker = L.marker( [capital[i][1], capital[i][2]], {icon: crown} );
                                        capitalMarker.bindPopup( 
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
                                        citiesMarkers.push(capitalMarker);
                                }
                        

                            for ( var i=0; i < cities.length; ++i ) 
                            {
                                var citiesMarker = L.marker( [cities[i][1], cities[i][2]], {icon: icon} );
                                    citiesMarker.bindPopup( 
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
                                        "</table>");
                                        citiesMarkers.push(citiesMarker);
                                };
                        
                        createGeoJson(geoJSON);
                            
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
                        $('#newCases').html(numberWithCommas(result['data']['border']['covidData']['NewConfirmed']));
                        $('#confirmedCases').html(numberWithCommas(result['data']['border']['covidData']['TotalConfirmed']));
                        $('#newDeaths').html(numberWithCommas(result['data']['border']['covidData']['NewDeaths']));
                        $('#totalDeaths').html(numberWithCommas(result['data']['border']['covidData']['TotalDeaths']));
                        $('#photos1').html("<img style = 'height: 85px; width: 85px;' src = '" + result['data']['border']['city0Photos']['hits'][0]['previewURL'] + "'></img>");
                        $('#photos2').html("<img style = 'height: 85px; width: 85px;' src = '" + result['data']['border']['city0Photos']['hits'][1]['previewURL'] + "'></img>");
                        $('#photos3').html("<img style = 'height: 85px; width: 85px;' src = '" + result['data']['border']['city0Photos']['hits'][2]['previewURL'] + "'></img>");
                        $('#news1').html("<a style = 'color:  #070059;' href = '" + result['data']['border']['news']['articles'][0]['url'] + "' target='_blank'> "+ result['data']['border']['news']['articles'][0]['title'] + "</a>");
                        $('#news2').html("<a style = 'color:  #070059;' href = '" + result['data']['border']['news']['articles'][1]['url'] + "' target='_blank'>"+ result['data']['border']['news']['articles'][1]['title'] + " </a>");
                        $('#news3').html("<a style = 'color:  #070059;' href = '" + result['data']['border']['news']['articles'][2]['url'] + "' target='_blank'>"+ result['data']['border']['news']['articles'][2]['title'] + " </a>");
                        

                        L.easyButton('<img src = "images/info.png" attribute = "Freepik" style="width:18px;">', () => {
                            showModal();
                        }).addTo(mymap);

                };

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(`This request returned an error jqHXR: ${jqXHR}, 
               textStatus: ${textStatus}, 
               errorThrown: ${errorThrown}`);
        }
    });
});

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

                if (navigator.geolocation) {

                    navigator.geolocation.getCurrentPosition(function(position) {
                        
                        var lat = position.coords.latitude;
                        var lon = position.coords.longitude;
                        
                       $.ajax({
                        type:"POST",
                        url:"php/getCountrySelect.php",
                        data: {
                            lat: lat,
                            lon: lon
                        },
                        success: function(){
                            if (result.status.name == "ok"){
                                //console.log(lat + ', ' + lon);
                                $('#selectCountry').val(result['data']['reverseCodeInfo']['countryCode']).change();
                                
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
