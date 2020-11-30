$('#mapid').click(function(e) {

    $.ajax({
        url: "php/getCountryInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            latlang: e.latlang
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#flag').html(result['data'][0]['flag']);
				
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(`This request returned an error jqHXR: ${jqXHR}, 
            textStatus: ${textStatus}, 
            errorThrown: ${errorThrown}`);
        }
    }); 
});

/*
$('#submit2').click(function() {

    $.ajax({
        url: "php/GetWeatherStation.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: 44.1, 
            south: -9.9, 
            east: -22.4, 
            west: 55.2
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#temperature').html(result['data'][0]['temperature']);
                $('#humidity').html(result['data'][0]['humidity']);
                $('#stationName').html(result['data'][0]['stationName']);
                $('#windSpeed').html(result['data'][0]['windSpeed']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(`This request returned an error jqHXR: ${jqXHR}, 
            textStatus: ${textStatus}, 
            errorThrown: ${errorThrown}`);
        }
    });
});

$('#submit3').click(function() {

    $.ajax({
        url: "php/GetPostalCode.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalCode: 8775,
            country: 'CH',
            radius: 10
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#adminCode1').html(result['data'][0]['adminCode1']);
                $('#countryCode').html(result['data'][0]['countryCode']);
                $('#postalCode').html(result['data'][0]['postalCode']);
                $('#placeName').html(result['data'][0]['placeName']);

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(`This request returned an error jqHXR: ${jqXHR}, 
            textStatus: ${textStatus}, 
            errorThrown: ${errorThrown}`);
        }
    });
});*/