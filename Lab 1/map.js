function initMap() {
  var sthlm = {lat: 59.3498092, lng: 18.0684758};
  var infoWindow;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: sthlm,
    disableDefaultUI: true,
    gestureHandling: 'none',
    zoomControl: false
  });

  var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Norrtälje</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Norrtälje</b>, also referred to as <b>Byhålan</b></p>'+
    '<p>Attribution: Norrtälje, <a href="https://sv.wikipedia.org/wiki/Norrt%C3%A4lje"></a></p>'+
    'https://en.wikipedia.org/w/index.php?title=Norrt%C3%A4lje</a>' + 
    '</div>'+
    '</div>';

  var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Lidingö</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Lidingö</b>, also referred to as <b>Gräddhyllan</b></p>'+
    '<p>Attribution: Lidingö, <a href="https://sv.wikipedia.org/wiki/Liding%C3%B6_kommun"></a></p>'+
    'https://en.wikipedia.org/w/index.php?title=Liding%C3%B6_kommun</a>' + 
    '</div>'+
    '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    maxWidth: 200
  });
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    maxWidth: 200
  });
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: -8.409518, lng: 115.188919}
  });
  marker.addListener('click', toggleBounce);

  var marker1 = new google.maps.Marker({
    map: map,
    icon: iconBase + 'parking_lot.png',
    position: {lat: 59.766667, lng: 18.7}
  });
  marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });

  var marker2 = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: 59.36667, lng: 18.13333}
  });
  marker2.addListener('click' , function() {
    infowindow2.open(map, marker2);
  });


//Loads custom zoom controls
  var zoomDiv = document.createElement('div');
  var renderZoomControls = new ZoomControl(zoomDiv, map);
  zoomDiv.index = 1;
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(zoomDiv);

  var panDiv = document.createElement('div');
  var renderPanControls = new PanControl(panDiv, map, sthlm);
  panDiv.index = 1;
  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(panDiv);

  var geoDiv = document.createElement('div');
  var renderGeoControls = new getLocation(geoDiv, map);
  panDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(geoDiv);

  // var centerDiv = document.createElement('div');
  // var rendercenterControl = new CenterControl(centerDiv, map, sthlm);
  // centerDiv.index = 1;
  // map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(centerDiv);

  var bali = document.getElementById('fav1');
  google.maps.event.addDomListener(bali, 'click', function() {
    beer = {lat: -8.409518, lng: 115.188919};
    map.setCenter(beer);
  })

  var secret = document.getElementById('fav2');
  google.maps.event.addDomListener(secret, 'click', function() {
    wine = {lat: 59.3498092, lng: 18.0684758};
    map.setCenter(wine);
  })
}

function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }




