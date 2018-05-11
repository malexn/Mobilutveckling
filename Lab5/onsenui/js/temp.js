document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#temperature').onclick = function() {
      document.querySelector('#myNavigator').pushPage('temperature.html', {data: {title: 'Temperature'}});
    };
  }
});