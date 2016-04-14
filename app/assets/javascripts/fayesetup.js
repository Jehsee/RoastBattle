$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/comments', function(data) {
    eval(data)
  })
})

var counter = setInterval(timer, 1000)
var count = 6;
function timer() {
  count = count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
      var battleCounter = setInterval(timer, 1000)
      var battleCount = 11;
      function timer() {
        battleCount = battleCount-1;
        if (battleCount < 0)
        {
           clearInterval(battleCounter);
          // grab the values of the vote totals.

           //counter ends, do something here

           $.ajax("/check_arena")
           // location.reload()
           return;
        }

        // Display of Battle Timer and comment form
        $(".commentBox").removeClass("commentBox")
        $("#timer").html( battleCount + " seconds")


      }
  }

  // Pre-Battle display of Timer
  $("#timer").html( "Roasting begins in " + count + " seconds.")
}

