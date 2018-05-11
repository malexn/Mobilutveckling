document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#lumination').onclick = function() {
      document.querySelector('#myNavigator').pushPage('lumination.html', {data: {title: 'Lumination'}});
    };
  }
});