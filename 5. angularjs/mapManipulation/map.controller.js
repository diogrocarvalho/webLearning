angular.module('app').controller('mapCtrl', function ($scope) {

    $scope.console = "beleza";
    var map = L.map('mapid').setView([-9.61335, -35.73976], 16);
    var geocodeService = L.esri.Geocoding.geocodeService();
    var startPoint = null;
    var endPoint = null;
    $scope.routing = null;

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'sevottharte.1cl965ld',
        accessToken: 'pk.eyJ1Ijoic2V2b3R0aGFydGUiLCJhIjoiY2l0MW8wNWMzMHI3bTJwa2hjMmJhNXcxbiJ9.gpNpsU5mmTRk3Pb3R65a8A'
    }).addTo(map);



    var layerGroup = L.layerGroup([]);

    map.on('click', function (e) {
        //var marker = L.marker(e.latlng).addTo(map);

        if (startPoint == null || endPoint == null) {
            geocodeService.reverse().latlng(e.latlng).run(function (error, result) {

                if (startPoint == null) {

                    startPoint = L.marker(result.latlng, {
                        "draggable": true
                    });
                    layerGroup.addLayer(startPoint);
                    layerGroup.addTo(map);
                    //startPoint.addTo(map).bindPopup(result.address.Match_addr).openPopup();

                } else if (endPoint == null) {
                    endPoint = L.marker(result.latlng, {
                        "draggable": true
                    });
                    layerGroup.addLayer(endPoint);
                    layerGroup.addTo(map);

                    $scope.routing = L.Routing.control({
                        waypoints: [
                            L.latLng(startPoint.getLatLng()),
                            L.latLng(endPoint.getLatLng())
                        ],
                        routeWhileDragging: true
                    }).addTo(map);
                    //$scope.routing.hide();
                    layerGroup.clearLayers();


                }
            });
        }
    });



    $scope.routing.on('routesfound', function (e) {
        console.log(e.routes);
        console.log(e.routes[0].summary.totalDistance);
        console.log(e.routes[0].summary.totalDistance / 1000 + "Km");
        var a = e.routes[0].waypoints;
        var b = a.map(function (item) {
            return item.latLng;
        });

        a.forEach(function (item, index) {
            console.log("Lat" + (index + 1) + " " + item.latLng.lat);
            console.log("Lng" + (index + 1) + " " + item.latLng.lng);
        });
        $scope.console = toString(e.routes[0].summary.totalDistance);
        console.log($scope.console);
    });



    $scope.saveRoute = function () {
        //$scope.console = $scope.routing.getWaypoints();

    };
});