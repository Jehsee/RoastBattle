$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/comments', function(data) {
    eval(data)
  })
})