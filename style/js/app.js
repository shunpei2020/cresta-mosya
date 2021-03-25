$(function() {
  let imgHeight = $('.kv-wrapper').outerHeight();
  let bgHeight = $('.fv').outerHeight();

  $('.burger').on('click', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      $('.nav-links').toggleClass('nav-active');
      $(this).toggleClass('toggle');
      $('.burger-mask').fadeToggle('300');
      $('body').toggleClass('noscroll');
    } else {
      $(this).toggleClass('black');
      $('.menu').toggleClass('black');
      $('.nav-links').toggleClass('nav-active');
      $(this).toggleClass('toggle');
      $('.burger-mask').fadeToggle('300');
      $('body').toggleClass('noscroll');
    }
  });

  $('.nav-links li').on('click', function(){
  $('.nav-links').removeClass('nav-active');
  $('.burger').removeClass('toggle')
  $('.burger-mask').fadeToggle('300');
  $('body').removeClass('noscroll');
  });

  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      $('.logo').removeClass('black');
    } else {
      $('.logo').addClass('black');
    }

    if ($(window).scrollTop() < bgHeight -50) {
      $('.burger').removeClass('black');
      $('.menu').removeClass('black');
    } else {
      $('.burger').addClass('black');
      $('.menu').addClass('black');
    }
  });
});

const smooth = () => {
  // スムーススクロール
  const smoothScrollTrigger = document.querySelectorAll('#smooth');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
}
smooth();