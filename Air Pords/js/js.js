
/*counter*/ 
var countDownDate = new Date("Sep 23, 2020 00:00:00").getTime();

var countDownFunction = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now; 
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);

    document.querySelector(".days").innerHTML =  days;
    document.querySelector(".hours").innerHTML =  hours;
    document.querySelector(".minutes").innerHTML =  minutes;
    document.querySelector(".seconds").innerHTML =  seconds;
});
var countDownFunction2 = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now; 
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);

    document.querySelector(".days2").innerHTML =  days;
    document.querySelector(".hours2").innerHTML =  hours;
    document.querySelector(".minutes2").innerHTML =  minutes;
    document.querySelector(".seconds2").innerHTML =  seconds;
});

/*smoove move to the order form*/ 
$(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

/*button arrow tp up*/
var btn = $('#button-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

