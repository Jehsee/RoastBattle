$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/comments', function(data) {
    eval(data)
    console.log("this is within the faye function")
  })
  console.log("at this point, should check # of images")
  var num_of_img = $("div.profilePic").length
  if (num_of_img == 2) {
    $("#vs").addClass("mediumburn")
    var counter = setInterval(fiveSecTimer, 1000)
    var count = 2;
    console.log("five sec timer starts")
    function fiveSecTimer() {
      count = count-1;
      if (count <= 0) {
         clearInterval(counter);
          // start another 60 sec timer
          var battleCounter = setInterval(sixtySecTimer, 1000)
          var battleCount = 20;
          console.log("sixty sec timer starts")
          function sixtySecTimer() {
            battleCount = battleCount-1;
              var leftTotal = $("#voteTotalLeft").text().slice(0, -2) //mystery '%' added somewhere which is why '-2'
              var rightTotal = $("#voteTotalRight").text().slice(0, -1)
                if (battleCount < 0) {
                clearInterval(battleCounter);

                if (leftTotal > rightTotal) {
                  $.ajax("/update_profile_left")
                } else if ( rightTotal > leftTotal) {
                  $.ajax("/update_profile_right")
                } else if ( rightTotal === leftTotal ) {
                  $.ajax("/update_profile_ties")
                } // closes final else if

                $.ajax("/check_arena")
                location.reload()
                return;
            } // closes if battle count<0 statement

            // Display of Battle Timer and comment form
            $(".commentBox").removeClass("commentBox")
            $(".voteForm").removeClass("voteForm")
            $("#timer").html( battleCount )

            // fire effect
            if ( leftTotal <= 100 ) {
              $("#voteTotalLeft").removeClass("mediumburn").addClass("strongburn")
            }
            if ( leftTotal <= 89 ) {
              $("#voteTotalLeft").removeClass("strongburn").addClass("mediumburn")
            }
            if ( leftTotal <= 75 ) {
              $("#voteTotalLeft").removeClass("strongburn").removeClass("mediumburn")
            }

            if ( rightTotal <= 100 ) {
              $("#voteTotalRight").removeClass("mediumburn").addClass("strongburn")
            }
            if ( rightTotal <= 89 ) {
              $("#voteTotalRight").removeClass("strongburn").addClass("mediumburn")
            }
            if ( rightTotal <= 75 ) {
              $("#voteTotalRight").removeClass("strongburn").removeClass("mediumburn")
            }

          } //closes sixty sec timer func
      } // closes if counter<0 statement

      // Pre-Battle display of Timer
      $("#timer").html( "Get Ready..." + count + " seconds.")
    } // closes five sec timer function
  } // closes the if statement checking 2 img elements
}) // final closing tag

console.log("this is outside the faye function")




