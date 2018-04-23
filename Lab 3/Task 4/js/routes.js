document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#About').onclick = function() {
      document.querySelector('#myNavigator').pushPage('about.html', {data: {title: 'About'}});
    };
  }
});