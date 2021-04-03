$(function() {
  let imgHeight = $('.kv-wrapper').outerHeight();
  let bgHeight = $('.fv').outerHeight();

  $('.burger').on('click', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      $('.nav-links').toggleClass('nav-active');
      $(this).toggleClass('toggle');
      $('.burger-musk').fadeToggle('300');
      $('body').toggleClass('noscroll');
    } else {
      $(this).toggleClass('black');
      $('.header-menu').toggleClass('black');
      $('.nav-links').toggleClass('nav-active');
      $(this).toggleClass('toggle');
      $('.burger-musk').fadeToggle('300');
      $('body').toggleClass('noscroll');
    }
  });

  $('.nav-links li').on('click', function(){
  $('.nav-links').removeClass('nav-active');
  $('.burger').removeClass('toggle')
  $('.burger-musk').fadeToggle('300');
  $('body').removeClass('noscroll');
  });

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      $('.header-logo').removeClass('black');
    } else {
      $('.header-logo').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      $('.burger').removeClass('black');
      $('.header-menu').removeClass('black');
    } else {
      $('.burger').addClass('black');
      $('.header-menu').addClass('black');
    }
  });
});
