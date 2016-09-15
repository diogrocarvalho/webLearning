var map = L.map('mapid').setView([-9.61335, -35.73976], 16);
var geocodeService = L.esri.Geocoding.geocodeService();
var startPoint = null;
var endPoint = null;
var routing = null;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'sevottharte.1cl965ld',
    accessToken: 'pk.eyJ1Ijoic2V2b3R0aGFydGUiLCJhIjoiY2l0MW8wNWMzMHI3bTJwa2hjMmJhNXcxbiJ9.gpNpsU5mmTRk3Pb3R65a8A'
}).addTo(map);





map.on('click', function (e) {
    //var marker = L.marker(e.latlng).addTo(map);

    if (startPoint == null || endPoint == null) {
        geocodeService.reverse().latlng(e.latlng).run(function (error, result) {

            if (startPoint == null) {

                startPoint = L.marker(result.latlng, {
                    "draggable": true
                });
                startPoint.addTo(map).bindPopup(result.address.Match_addr).openPopup();

            } else if (endPoint == null) {
                endPoint = L.marker(result.latlng, {
                    "draggable": true
                });
                endPoint.addTo(map).bindPopup(result.address.Match_addr).openPopup();
            }

        });


    } else {
        if (routing == null) {

            routing = L.Routing.control({
                waypoints: [
        L.latLng(startPoint.getLatLng()),
        L.latLng(endPoint.getLatLng())
    ],
                routeWhileDragging: true
            }).addTo(map);
        } else {

            routing.route();
        }
    }
});