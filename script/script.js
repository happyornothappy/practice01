//nav .active
$(document).ready(function() {
  $('nav> ul> li> a').on('click', function(e) {
    e.preventDefault();
    $('nav> ul> li> a').removeClass('active');
    $(this).addClass('active');
  });
});

//nav slide
$(function() {
  let currentIndex = 0;
  let intervalId; 
  function slide() {
    let nextIndex = (currentIndex + 1) % 3;

    $(".slide").eq(currentIndex).fadeIn(1200);
    $(".slide").eq(nextIndex).fadeOut(1200);

    currentIndex = nextIndex;
  }

  $(".bg-slider-wrap").hover(
    function() {
      clearInterval(intervalId);
    },
    function() {
      intervalId = setInterval(slide, 3000);
    }
  );
  intervalId = setInterval(slide, 3000);
});

//nav-dropdown
$(function(){
  $(".nav > ul >li").mouseover(function(){
    $(".nav > ul > li > ul").show();
    $("#submenu-bg").show();
  });
  $(".nav > ul >li").mouseout(function(){
    $(".nav > ul > li > ul").hide();
    $("#submenu-bg").hide();
  });
});

