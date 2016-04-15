$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/comments', function(data) {
    eval(data)
  })
})

// maybe if (check to see if arenas has 2 rows) {}

var counter = setInterval(timer, 1000)
var count = 2;
function timer() {
  count = count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
      var battleCounter = setInterval(timer, 1000)
      var battleCount = 6;
      function timer() {
        battleCount = battleCount-1;
        if (battleCount < 0) {
          clearInterval(battleCounter);
          // do something after time ends
          var leftTotal = $("#voteTotalLeft").text().slice(0, -2) //mystery '%' somewhere.
          var rightTotal = $("#voteTotalRight").text().slice(0, -1)
          console.log(leftTotal)
          console.log(rightTotal)

          if (leftTotal > rightTotal) {
            $.ajax("/update_profile_left").done($.ajax("/check_arena"))
            // console.log("YOU MADE IT TO THE LEFT UPDATE")
          } else if ( rightTotal > leftTotal) {
            $.ajax("/update_profile_right").done($.ajax("/check_arena"))
            // console.log("YOU MADE IT TO THE RIGHT UPDATE")
          } else if ( rightTotal == leftTotal ) {
            $.ajax("/update_profile_ties").done($.ajax("/check_arena"))
            // console.log("YOU MADE IT TO THE TIE UPDATE")
          }
           //counter ends, do something here

           // $.ajax("/check_arena")
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

