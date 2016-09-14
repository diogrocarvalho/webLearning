//var mymap = L.map('mapid').setView([-9.55661, -35.73634], 13);
var mymap = L.map('mapid').setView([51.505, -0.09], 13);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={sk.eyJ1Ijoic2V2b3R0aGFydGUiLCJhIjoiY2l0MW9ibDB1MHF3ajJ6cXBnMWZjYnhiYiJ9.bNYGScbJUO89yEUX3k4QOg}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'sevottharte.1cl965ld',
    accessToken: 'sk.eyJ1Ijoic2V2b3R0aGFydGUiLCJhIjoiY2l0MW9ibDB1MHF3ajJ6cXBnMWZjYnhiYiJ9.bNYGScbJUO89yEUX3k4QOg'
}).addTo(mymap);