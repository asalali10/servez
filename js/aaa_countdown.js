// form w3schools https://www.w3schools.com/howto/howto_js_countdown.asp 

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  if(days > 0){
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }else if(days == 0 && hours > 0){
    document.getElementById("countdown").innerHTML =  hours + "h " + minutes + "m " + seconds + "s ";
  }else if(days == 0 && hours == 0 && minutes > 0){
    document.getElementById("countdown").innerHTML =  minutes + "m " + seconds + "s ";
  }else if(days == 0 && hours == 0 && minutes == 0 && seconds > 0){
    document.getElementById("countdown").innerHTML = seconds + "s ";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);