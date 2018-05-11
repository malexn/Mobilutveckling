document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#humidity').onclick = function() {
      document.querySelector('#myNavigator').pushPage('humidity.html', {data: {title: 'Humidity'}});
    };
  }
});