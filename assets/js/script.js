// Initialize Google Maps API
// var mapContainer = $("#map");
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10
    })
}

window.initMap = initMap;