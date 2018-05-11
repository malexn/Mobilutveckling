document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#carbondioxide').onclick = function() {
      document.querySelector('#myNavigator').pushPage('carbondioxide.html', {data: {title: 'Temperature'}});
    };
  }
});