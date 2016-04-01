$(document).ready(function() {

  var results = [];
  var ping = "ping";
  var pong = "pong";

  var pingPong = function(number) {

  	for (i = 1; i <= number; i++) {
    	if (  i % 3 === 0 && i % 5 === 0 ){
      	results.push(ping + pong);
      } else if ( i % 3 === 0) {
      	results.push(pong);
      } else if ( i % 3 === 0 ){
      	results.push(ping + pong);
      } else {
      	results.push(i);
      }
    }
    return results;
  }






    //USER INTERFACE LOGIC

    $("form").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("#userNumber").val());
      var final = pingPong(userInput);
      $("#result").text(final);

      console.log(userInput);

 });
});
