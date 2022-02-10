
var mymap = L.map('mapid')
mymap.locate({setView: true, maxZoom: 13, watch: true});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

var circle = L.circle([6.530405, 3.344479], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap)
circle.bindPopup("<p>This is a circle</p>");

var popup = L.popup()
    .setLatLng([6.530405, 3.344479])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


L.marker([6.507721, 3.297958])
    .bindPopup('This is Lagos')
    .addTo(mymap);

var bu = L.popup();
var circle = L.circle([6.507721, 3.297958], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap)

geofeatures = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {'name': 'NA'},
        "geometry": {
          "type": "Point",
          "coordinates": [
            3.7854766845703125,
            6.558203219021767
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            3.840408325195312,
            6.550699486838195
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            3.8507080078125004,
            6.5070391743778275
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            3.749771118164062,
            6.5145435613629665
          ]
        }
      }
    ]
  }

L.geoJSON(geofeatures).addTo(mymap)
    .bindPopup(geofeatures.properties);

    L.Routing.control({
      waypoints: [
          L.latLng(5.041687, 7.918192),
          L.latLng(5.044252, 7.922291)
      ],
      routeWhileDragging: true
  }).addTo(mymap);