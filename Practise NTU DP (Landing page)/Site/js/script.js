/*animated header*/
$(function () {
    $(document).scroll(function () {
      var $nav = $("header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 2700);
    });
  });
  
/*carousel*/ 
$('.carusel').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});


/*preloader*/
$(window).on('load', function () {
  var $preloader = $('#p_prldr'),
  $svg_anm   = $preloader.find('.svg_anm');
  $svg_anm.fadeOut();
  $preloader.delay(500).fadeOut('slow');
});

/*smoove scrolling*/ 
$(document).ready(function(){
  $("nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });
});


/*icon menu*/
const menuToggle = document.querySelector('#menu-togle');

menuToggle.onclick = function(){
  menuToggle.classList.toggle('active');
}

$(document).ready(function (){
  $('#menu-togle').click(function(event){
    $(".burger_list").toggleClass('active');
  });
});
 
$('.burger_list li').on('click', function(){
  $('.menu-icon, .burger_list').toggleClass('active');
})