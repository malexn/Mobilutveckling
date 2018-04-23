
function ZoomControl(div, map) {

  // Get the control DIV. We'll attach our control UI to this DIV.
  var controlDiv = div;

  // Set CSS for the controls.
  controlDiv.style.cursor = 'pointer';
  controlDiv.style.borderRadius = '1px';
  controlDiv.style.height = '72px';
  controlDiv.style.width = '90px';

  var zoomout = document.createElement('div');
  zoomout.title = 'Click to zoom out';
  zoomout.style.display = "inline-block"
  zoomout.style.width = '50%';
  zoomout.style.height = '50%';
  controlDiv.appendChild(zoomout);

  var zoomoutText = document.createElement('div');
  zoomoutText.innerHTML = '<button class="btn"><i class="fa fa-minus"></i></button>';
  zoomoutText.style.fontSize = '30px';
  zoomoutText.style.marginTop = '3px';
  zoomoutText.style.textAlign = 'center';
  zoomoutText.style.color = "#9e9e9e"
  zoomout.appendChild(zoomoutText);

  var zoomin = document.createElement('div');
  zoomin.title = 'Click to zoom in';
  zoomin.style.display = "inline-block"
  zoomin.style.width = '50%';
  zoomin.style.height = '50%';
  controlDiv.appendChild(zoomin);

  var zoominText = document.createElement('div');
  zoominText.innerHTML = '<button class="btn"><i class="fa fa-plus"></i></button>';
  zoominText.style.fontSize = '30px';
  zoominText.style.textAlign = 'center';
  zoominText.style.color = "#9e9e9e"
  zoomin.appendChild(zoominText);

  // Setup the click event listeners for zoom-in, zoom-out:
  google.maps.event.addDomListener(zoomout, 'click', function() {
   var currentZoomLevel = map.getZoom();
   if(currentZoomLevel != 0){
     map.setZoom(currentZoomLevel - 1);}     
  });

   google.maps.event.addDomListener(zoomin, 'click', function() {
   var currentZoomLevel = map.getZoom();
   if(currentZoomLevel != 21){
     map.setZoom(currentZoomLevel + 1);}
  });
}