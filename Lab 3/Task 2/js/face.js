document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#face').onclick = function() {
      document.querySelector('#myNavigator').pushPage('facepage.html', {data: {title: 'Face'}});
    };

  }
});