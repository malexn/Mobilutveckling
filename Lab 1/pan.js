
function PanControl(div, map, sthlm) {

  // Get the control DIV. We'll attach our control UI to this DIV.
  var controlDiv = div;

  controlDiv.style.cursor = 'pointer';
  controlDiv.style.borderRadius = '1px';
  controlDiv.style.height = '72px';
  controlDiv.style.width = '90px';
  

  var panup = document.createElement('div');
  panup.title = 'Click to go up';
  panup.style.display = "inline-block"
  panup.style.width = '50%';
  panup.style.height = '50%';
  controlDiv.appendChild(panup);

  var panupText = document.createElement('div');
  panupText.innerHTML = '<button class="btn"><i class="fa fa-arrow-up"></i></button>';
  panupText.style.fontSize = '30px';
  panupText.style.textAlign = 'center';
  panupText.style.color = "#9e9e9e"
  panup.appendChild(panupText);

  var pandown = document.createElement('div');
  pandown.title = 'Click to go down';
  pandown.style.display = "inline-block"
  pandown.style.width = '50%';
  pandown.style.height = '50%';
  controlDiv.appendChild(pandown);

  var pandownText = document.createElement('div');
  pandownText.innerHTML = '<button class="btn"><i class="fa fa-arrow-down"></i></button>';
  pandownText.style.fontSize = '30px';
  pandownText.style.textAlign = 'center';
  pandownText.style.color = "#9e9e9e"
  pandown.appendChild(pandownText);

  var panleft = document.createElement('div');
  panleft.title = 'Click to go left';
  panleft.style.display = "inline-block"
  panleft.style.width = '50%';
  panleft.style.height = '50%';
  controlDiv.appendChild(panleft);

  var panleftText = document.createElement('div');
  panleftText.innerHTML = '<button class="btn"><i class="fa fa-arrow-left"></i></button>';
  panleftText.style.fontSize = '30px';
  panleftText.style.textAlign = 'center';
  panleftText.style.color = "#9e9e9e"
  panleft.appendChild(panleftText);

  var panright = document.createElement('div');
  panright.title = 'Click to go right';
  panright.style.display = "inline-block"
  panright.style.width = '50%';
  panright.style.height = '50%';
  controlDiv.appendChild(panright);

  var panrightText = document.createElement('div');
  panrightText.innerHTML = '<button class="btn"><i class="fa fa-arrow-right"></i></button>';
  panrightText.style.fontSize = '30px';
  panrightText.style.textAlign = 'center';
  panrightText.style.color = "#9e9e9e"
  panright.appendChild(panrightText);


  google.maps.event.addDomListener(panup, 'click', function() {
      sthlm.lat = sthlm.lat+0.01
      map.setCenter(sthlm)
  });

  google.maps.event.addDomListener(pandown, 'click', function() {
      sthlm.lat = sthlm.lat-0.01
      map.setCenter(sthlm)
  });

  google.maps.event.addDomListener(panleft, 'click', function() {
      sthlm.lng = sthlm.lng-0.01
      map.setCenter(sthlm)
  });
  google.maps.event.addDomListener(panright, 'click', function() {
      sthlm.lng = sthlm.lng+0.01
      map.setCenter(sthlm)
  });
}

