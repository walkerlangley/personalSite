//  Change the color of the button on the Projects page

// This gets a random color in rgb
/*function setColor () {
    var R = Math.floor(Math.random()*256);
    var G = Math.floor(Math.random()*256);
    var B = Math.floor(Math.random()*256);
    '#'+Math.floor(Math.random()*16777215).toString(16);
    var color = 'rgb(' + R + ", " + G + ", " + B + ')';
    document.getElementById('button').style.backgroundColor = color;
};*/

// This gets a random color in hex, where 16777215.toString(16) == ffffff
function setColor () {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('button').style.backgroundColor = color;
};

function clearColor() {
    document.getElementById('button').style.backgroundColor = 'transparent';
};




// Google Map Stuff
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initMap() {
       // directionsDisplay = new google.maps.DirectionsRendered();
        var harding = {lat: 21.2832307, lng: -157.8039694};
        var anuhea = {lat: 21.2851399, lng: -157.794552};
        var milford = {lat: 35.165469, lng: -80.873504};
        var homes = [harding, anuhea, milford];
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(37.2742598, -109.0416489),
          zoom: 3,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);

        // Hawaii location at 3745 Anuhea St
        var anuheaMarker = new google.maps.Marker({
            position: {lat: 21.2851399, lng: -157.794552},
            map: map,
            title: '3745 Anuhea St',
            animation: google.maps.Animation.DROP
            // icon: image
        });
        anuheaMarker.addListener('click', function() {
            map.setZoom(12);
            map.setCenter(anuheaMarker.getPosition());
            });


        // Hawaii location at 3411 A Harding Ave
        var hardingMarker = new google.maps.Marker({
            position: {lat: 21.2832307, lng: -157.8039694},
            map: map,
            title: '3411 A Harding Ave',
            animation: google.maps.Animation.DROP
            // icon: image
        });
        hardingMarker.addListener('click', function() {
            map.setZoom(12);
            map.setCenter(hardingMarker.getPosition());
            });
    
        // Charlotte location at 5401 Milford Rd
        var milfordMarker = new google.maps.Marker({
            position: {lat: 35.165469, lng: -80.873504},
            map: map,
            title: 'Home in Charlotte',
            animation: google.maps.Animation.DROP
        });
        milfordMarker.addListener('click', function() {
            map.setZoom(8);
            map.setCenter(milfordMarker.getPosition());
            });
    
        /*directionsDisplay.setMap(map);
        function calcRoute() {
            var start = 'Hawaii';
            var end = 'Charlotte';
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);   
                }
            });
        }*/
    
};

// This waits for all the DOM elements to load before calling the function initMap
google.maps.event.addDomListener(window, 'load', initMap);


//Calls to Credit calculation
var calls;
var calToCredit;
function callsToCredit(calls, calToCredit){
    calls = document.getElementById('calls').value;
    calToCredit = document.getElementById('calls-to-credit').value;
    document.getElementById('credit').value = ((calToCredit/calls)*100).toFixed(2);
/*    console.log(calToCredit/calls);
    console.log(typeof (calToCredit/calls));*/
};




//I think I want to use a recursive function here

function compCalc(c2c) {
    var c2c = document.getElementById('credit').value/100;
    console.log(c2c);
    if(!(c2c==NaN) && c2c != null || c2c == "") {
        if(c2c >= comp[0][0] && c2c < comp[0+1][0]) {
            document.getElementById('comp').value = comp[0][1].toFixed(2);
        } else if (c2c >= comp[0+1][0] && c2c < comp[0+2][0]) {
            document.getElementById('comp').value = comp[0+1][1].toFixed(2);  
        } else if (c2c >= comp[0+2][0] && c2c < comp[0+3][1]) {
            document.getElementById('comp').value = comp[0+2][1].toFixed(2);
        } else {
            document.getElementById('comp').value = comp[0+3][1].toFixed(2); 
        };
    };
}
/*function compCalc(c2c) {
    var c2c = document.getElementById('credit').value/100;
    if(!c2c==NaN && c2c != null || c2c == "") {
        console.log('true');
        for(var i = 0; i < comp.length; i++) {
            function loop(c2c, i) {
                if(c2c >= comp[i][0] && c2c < comp[i+1][0]) {
                    document.getElementById('comp').value = comp[0][1].toFixed(2);
                } else {
                    loop(c2c, i+1)
                };
            };
        };
    };
}*/









