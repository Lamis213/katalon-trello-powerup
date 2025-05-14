var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/906/906175.png',
      text: 'Open Katalon Report',
      callback: function(t) {
        return t.popup({
          title: 'Katalon Report',
          url: 'index.html',
          height: 400
        });
      }
    }];
  }
});
