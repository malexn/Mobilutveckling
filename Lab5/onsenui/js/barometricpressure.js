document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#barometricpressure').onclick = function() {
      document.querySelector('#myNavigator').pushPage('barometricpressure.html', {data: {title: 'Barometric pressure'}});
    };
  }
});