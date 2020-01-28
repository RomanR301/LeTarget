mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5yMzAxIiwiYSI6ImNrNXhyYjU5NTA0eXYzbG5vb3hwMTN1aWkifQ.l9PmlMTn1ntUt4VZ4JJx0A';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/romanr301/ck5xrdxts1g151ipedyy6wtao', // stylesheet location
  center: [24.0194, 49.8145], // starting position [lng, lat]
  zoom: 18 // starting zoom
});
var geojson = {
type: 'FeatureCollection',
features: [{
type: 'Feature',
geometry: {
  type: 'Point',
  coordinates: [24.0194, 49.8145]
},
properties: {
  title: 'Mapbox',
  description: 'Washington, D.C.'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
  coordinates: [-122.414, 37.776]
},
properties: {
  title: 'Mapbox',
  description: 'San Francisco, California'
}
}]
};

geojson.features.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.addTo(map);
});