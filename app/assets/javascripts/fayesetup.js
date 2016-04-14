$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/comments', function(data) {
    eval(data)
  })
})

var counter = setInterval(timer, 1000)
  var count = 5;
function timer() {
  count = count-1;
  if (count < 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     $.ajax("/check_arena")

     location.reload()
     return;
  }

  //Do code for showing the number of seconds here
  $("#timer").html( count + "secs")
}

