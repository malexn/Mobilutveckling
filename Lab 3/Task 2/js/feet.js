document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#feet').onclick = function() {
      document.querySelector('#myNavigator').pushPage('feetpage.html', {data: {title: 'Feet'}});
    };
  }
});