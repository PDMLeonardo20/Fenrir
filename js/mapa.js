var map = L.map('mapa').setView([-29.997749, -51.119953], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("tu clicou nas coordenadas " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var searchControl = L.esri.Geocoding.geosearch({
    position: 'topright'
}).addTo(map);

var results = L.layerGroup().addTo(map);

    searchControl.on('results', function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
    }
});
