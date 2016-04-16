$(function() {
  var faye = new Faye.Client('http://localhost:9292/faye');
  faye.subscribe('/comments', function(data) {
    eval(data)
    console.log("this is within the faye function")
  })
  console.log("at this point, should check # of images")
  var num_of_img = $("img").length
  if (num_of_img == 2) {
    var counter = setInterval(fiveSecTimer, 1000)
    var count = 10;
    console.log("five sec timer starts")
    function fiveSecTimer() {
      count = count-1;
      if (count <= 0) {
         clearInterval(counter);
          // start another 60 sec timer
          var battleCounter = setInterval(sixtySecTimer, 1000)
          var battleCount = 10;
          console.log("sixty sec timer starts")
          function sixtySecTimer() {
            battleCount = battleCount-1;
            if (battleCount < 0) {
              clearInterval(battleCounter);
              // tally up votes and update record
              var leftTotal = $("#voteTotalLeft").text().slice(0, -2) //mystery '%' added somewhere which is why '-2'
              console.log(leftTotal)
              var rightTotal = $("#voteTotalRight").text().slice(0, -1)
              console.log("total right: " + rightTotal)

              // have some transition effect here with the tally's
                  // make winner profile pic bigger, fade out loser, slowly remove element
                  // listen? to see if its removed?
                        // $("#myDiv").on("remove", function () {
                                  // alert("Element was removed");
                                // })
              // if ()
              if (leftTotal > rightTotal) {
                $.ajax("/update_profile_left")
                  // location.reload()
                  // return
              } else if ( rightTotal > leftTotal) {
                $.ajax("/update_profile_right")
                  // location.reload()
                  // return;
              } else if ( rightTotal === leftTotal ) {
                $.ajax("/update_profile_ties")
                  // location.reload()
                  // return;
              } // closes final else if

               $.ajax("/check_arena")
               location.reload()
               return;
            } // closes if battle count<0 statement

            // Display of Battle Timer and comment form
            $(".commentBox").removeClass("commentBox")
            $(".voteForm").removeClass("voteForm")
            $("#timer").html( battleCount + " seconds")

          } //closes sixty sec timer func
      } // closes if counter<0 statement

      // Pre-Battle display of Timer
      $("#timer").html( "Roasting begins in " + count + " seconds.")
    } // closes five sec timer function
  } // closes the if statement checking 2 img elements
}) // final closing tag

console.log("this is outside the faye function")