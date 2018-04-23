document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'mainpage') {
    page.querySelector('#shoulders').onclick = function() {
      document.querySelector('#myNavigator').pushPage('shoulderpage.html', {data: {title: 'Shoulders'}});
    };

  } 
});