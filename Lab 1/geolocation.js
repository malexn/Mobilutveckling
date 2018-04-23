function getLocation(div, map, center) {
  
  var infoWindow = new google.maps.InfoWindow; 
  var control = this;
  var controlDiv = div;

  controlDiv.style.cursor = 'pointer';
  controlDiv.style.borderRadius = '1px';
  controlDiv.style.height = '72px';
  controlDiv.style.width = '90px';

  var geo = document.createElement('div');
  geo.title = 'Click to get your location';
  geo.style.display = "inline-block"
  geo.style.width = '50%';
  geo.style.height = '50%';
  controlDiv.appendChild(geo);

  var geoText = document.createElement('div');
  geoText.innerHTML = '<button class="btn"><i class="fa fa-location-arrow"></i></button>';
  geoText.style.fontSize = '30px';
  geoText.style.textAlign = 'center';
  geoText.style.color = "#9e9e9e";
  geo.appendChild(geoText);

  google.maps.event.addDomListener(geo, 'click', function() {
        // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(center);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(center);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
infoWindow.open(map);
}