// Set the date we're counting down to
var countDownDate = new Date("Mar 16, 2023 ").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the time remaining
  var timeRemaining = countDownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the "countdown" element
  document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, "
  + minutes + " minutes, and " + seconds + " seconds remaining.";

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

