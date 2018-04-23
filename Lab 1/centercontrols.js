function CenterControl(div, map, center) {
  // We set up a variable for this since we're adding event listeners
  // later.
  var control = this;

  var controlDiv = div;
  controlDiv.style.cursor = 'pointer';
  controlDiv.style.borderRadius = '1px';
  controlDiv.style.height = '72px';
  controlDiv.style.width = '90px';

  // Set the center property upon construction
  control.center_ = center;
  controlDiv.style.clear = 'both';

  // Set CSS for the control border
  var goCenterUI = document.createElement('div');
  goCenterUI.style.width = '50%';
  goCenterUI.style.height = '50%';
  goCenterUI.id = 'goCenterUI';
  goCenterUI.title = 'Click to recenter the map';
  controlDiv.appendChild(goCenterUI);

  // Set CSS for the control interior
  var goCenterText = document.createElement('div');
  goCenterText.innerHTML = '<button class="btn btn-primary">Center Map</button>';
  goCenterText.style.fontSize = '30px';
  goCenterText.style.textAlign = 'center';
  goCenterText.style.color = "#9e9e9e";
  goCenterText.id = 'goCenterText';
  goCenterUI.appendChild(goCenterText);

  // Set CSS for the setCenter control border
  var setCenterUI = document.createElement('div');
  setCenterUI.id = 'setCenterUI';
  setCenterUI.title = 'Click to change the center of the map';
  setCenterUI.style.width = '50%';
  setCenterUI.style.height = '50%';
  controlDiv.appendChild(setCenterUI);

  // Set CSS for the control interior
  var setCenterText = document.createElement('div');
  setCenterText.id = 'setCenterText';
  setCenterText.innerHTML = '<button class="btn btn-primary">Set Center</button>';
  setCenterText.style.fontSize = '30px';
  setCenterText.style.textAlign = 'center';
  setCenterText.style.color = "#9e9e9e";
  setCenterUI.appendChild(setCenterText);

  // Set up the click event listener for 'Center Map': Set the center of
  // the map
  // to the current center of the control.
  goCenterUI.addEventListener('click', function() {
    var currentCenter = control.getCenter();
    map.setCenter(currentCenter);
  });

  // Set up the click event listener for 'Set Center': Set the center of
  // the control to the current center of the map.
  setCenterUI.addEventListener('click', function() {
    var newCenter = map.getCenter();
    control.setCenter(newCenter);
  });
}

/**
 * Define a property to hold the center state.
 * @private
 */
CenterControl.prototype.center_ = null;

/**
 * Gets the map center.
 * @return {?google.maps.LatLng}
 */
CenterControl.prototype.getCenter = function() {
  return this.center_;
};

/**
 * Sets the map center.
 * @param {?google.maps.LatLng} center
 */
CenterControl.prototype.setCenter = function(center) {
  this.center_ = center;
};