$(document).ready(function() {

  var results = [];
  var ping = "ping";
  var pong = "pong";

  var pingPong = function(number) {
    if (!number) {
      alert("Please enter a valid number.");
      location.reload();
    } else {
      if (number > 0) {
        for (i = 1; i <= number; i++) {
          if (  i % 3 === 0 && i % 5 === 0 ){
            results.push(ping + pong);
          } else if ( i % 5 === 0) {
            results.push(pong);
          } else if ( i % 3 === 0 ) {
            results.push(ping + pong);
          } else {
            results.push(i);
          }
        }

      } else {
        alert("Please enter a valid number.");
        location.reload();
      }
    }


      return results;
    }

  //USER INTERFACE LOGIC

    $("form").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("#userNumber").val());
      var final = pingPong(userInput);
      $(".jumbotron").hide(2000);
      $(".results").show();

      for (index = 0; index < final.length; index++){
        if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
          $("#result").append("<li><img src=pingpong.gif></img></li>");
        } else if ( (index + 1) % 5 === 0) {
          $("#result").append("<li><img src=ping.gif></img></li>");
        } else if ( (index + 1) % 3 === 0 ) {
          $("#result").append("<li><img src=pong.gif></img></li>");
        } else {
          $("#result").append("<li>" + final[index] + "</li>");
        }
      }



      console.log(final);

 });
 $(".returnBtn").click(function(event) {
   event.preventDefault();

   location.reload();

});
});
