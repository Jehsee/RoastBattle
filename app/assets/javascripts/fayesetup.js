$("document").ready(function() {
  var num_of_img = $("div.profilePic").length
  if (num_of_img == 2) {
    $("#vs").addClass("strongburn")
    var counter = setInterval(tenSecTimer, 1000)
    var count = 10;

    function tenSecTimer() {

      count = count-1;
      if (count <= 0) {
         clearInterval(counter);
          // start another 60 sec timer
          var battleCounter = setInterval(ninetySecTimer, 1000)
          var battleCount = 65;

          function ninetySecTimer() {
            battleCount = battleCount-1;
              var leftTotal = parseInt($("#voteTotalLeft").text())
              var rightTotal = parseInt($("#voteTotalRight").text())
              console.log(leftTotal + " " + rightTotal)
                if ((battleCount === 60 || battleCount === 30 || battleCount === 15) && leftTotal>= 90) {
                  clearInterval(battleCounter);
                  $("#rightProfilePic").addClass("fadeOut")

                  $(".commentsContainer").addClass("fadeOut")
                  $("#voteTotalRight").addClass("fadeOut")
                  $("#voteTotalLeft").addClass("fadeOut")
                  $(".voteFormLeft").addClass("fadeOut")
                  $(".voteFormRight").addClass("fadeOut")
                  $("#timer").addClass("fadeOut")
                  $("#rightDescriptionBox").addClass("fadeOut")
                  $("#rightUsernameBox").addClass("fadeOut")
                  $("#rightRecordBox").addClass("fadeOut")
                  $("#leftRecordBox").addClass("fadeOut")
                  $("#vsButton").addClass("fadeOut")

                  $(".rightContainer").attr('id', 'stretch')
                  $("#leftProfilePic").attr('id', 'moveProfilePic')
                  $("#leftDescriptionBox").attr('id', 'moveDescription')
                  $("#leftUsernameBox").attr('id', 'moveLeftUsernameBox')

                  $(".winnerko").delay(2500).queue(function() {
                      $(this).removeClass("hide")
                    })
                  $.ajax("/update_profile_left_ko")

                  $.ajax("/check_arena")
                  setTimeout(function() {
                    location.reload()
                  },6000)
                  return;
                }

                if ((battleCount === 60 || battleCount === 30 || battleCount === 15) && rightTotal>= 90) {
                  clearInterval(battleCounter);
                  $("#leftProfilePic").addClass("fadeOut")
                  $(".commentsContainer").addClass("fadeOut")
                  $("#voteTotalRight").addClass("fadeOut")
                  $("#voteTotalLeft").addClass("fadeOut")
                  $(".voteFormLeft").addClass("fadeOut")
                  $(".voteFormRight").addClass("fadeOut")
                  $("#timer").addClass("fadeOut")
                  $("#leftDescriptionBox").addClass("fadeOut")
                  $("#leftUsernameBox").addClass("fadeOut")
                  $("#rightRecordBox").addClass("fadeOut")
                  $("#leftRecordBox").addClass("fadeOut")
                  $("#vsButton").addClass("fadeOut")
                  $(".leftContainer").addClass("fadeOut")

                  $(".container").attr('id', 'stretchTwo')
                  $("#rightProfilePic").attr('id', 'moveProfilePicTwo')
                  $("#rightDescriptionBox").attr('id', 'moveDescriptionTwo')
                  $("#rightUsernameBox").attr('id', 'moveRightUsernameBox')

                  $(".winnerko").delay(2500).queue(function() {
                      $(this).removeClass("hide")
                    })
                  $.ajax("/update_profile_right_ko")
                  $.ajax("/check_arena")
                  setTimeout(function() {
                    location.reload()
                  },6000)
                  return;
                }

                if (battleCount < 0) {
                clearInterval(battleCounter);
                if (leftTotal > rightTotal) {
                  $("#rightProfilePic").addClass("fadeOut")
                  $(".commentsContainer").addClass("fadeOut")
                  $("#voteTotalRight").addClass("fadeOut")
                  $("#voteTotalLeft").addClass("fadeOut")
                  $(".voteFormLeft").addClass("fadeOut")
                  $(".voteFormRight").addClass("fadeOut")
                  $("#timer").addClass("fadeOut")
                  $("#rightDescriptionBox").addClass("fadeOut")
                  $("#rightUsernameBox").addClass("fadeOut")
                  $("#rightRecordBox").addClass("fadeOut")
                  $("#leftRecordBox").addClass("fadeOut")
                  $("#vsButton").addClass("fadeOut")

                  $(".rightContainer").attr('id', 'stretch')
                  $("#leftProfilePic").attr('id', 'moveProfilePic')
                  $("#leftDescriptionBox").attr('id', 'moveDescription')
                  $("#leftUsernameBox").attr('id', 'moveLeftUsernameBox')

                  $(".winner").delay(2500).queue(function() {
                      $(this).removeClass("hide")
                    })
                  $.ajax("/update_profile_left")


                } else if ( rightTotal > leftTotal) {
                  $("#leftProfilePic").addClass("fadeOut")
                  $(".commentsContainer").addClass("fadeOut")
                  $("#voteTotalRight").addClass("fadeOut")
                  $("#voteTotalLeft").addClass("fadeOut")
                  $(".voteFormLeft").addClass("fadeOut")
                  $(".voteFormRight").addClass("fadeOut")
                  $("#timer").addClass("fadeOut")
                  $("#leftDescriptionBox").addClass("fadeOut")
                  $("#leftUsernameBox").addClass("fadeOut")
                  $("#rightRecordBox").addClass("fadeOut")
                  $("#leftRecordBox").addClass("fadeOut")
                  $("#vsButton").addClass("fadeOut")
                  $(".leftContainer").addClass("fadeOut")

                  $(".container").attr('id', 'stretchTwo')
                  $("#rightProfilePic").attr('id', 'moveProfilePicTwo')
                  $("#rightDescriptionBox").attr('id', 'moveDescriptionTwo')
                  $("#rightUsernameBox").attr('id', 'moveRightUsernameBox')

                  $(".winner").delay(2500).queue(function() {
                      $(this).removeClass("hide")
                    })
                  $.ajax("/update_profile_right")


                } else if ( rightTotal == 50 && leftTotal == 50 ) {

                  $(".tieBreaker").removeClass("hide").delay(2000).queue(function() {
                      $(this).addClass("hide")
                    })

                    tenSecTimer()
                    return;

                } else if ( rightTotal == 0 && leftTotal == 0 ) {
                  console.log("hfld;ksajkfl;jsaklf;jdksajf;")
                  $(".noVotes").removeClass("hide").delay(6000).queue(function() {
                      $(".noVotes").addClass("hide")
                    })

                }

                $.ajax("/check_arena")
                setTimeout(function() {
                  location.reload()
                },6000)
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

          } //closes ninety sec timer func
      } // closes if counter<0 statement

      // Pre-Battle display of Timer
      $("#timer").html( "Get Ready..." + count + " seconds.")
      $(".commentsContainer").removeClass("displayToggle")
    } // closes ten sec timer function
  } // closes the if statement checking 2 img elements
// }) // final closing tag

console.log("this is outside the faye function")



})
