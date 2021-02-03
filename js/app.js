'use strict'
{
//   const navSlider = () => {
//     const navLinks = document.querySelector('.nav-links');
//     const burger = document.querySelector('.burger');
//     const body = document.querySelector('body');
  
//     burger.addEventListener('click', () => {
//       navLinks.classList.toggle('nav-active');
//       // burger animation
//       burger.classList.toggle('toggle');
//       body.classList.toggle('noscroll')
//     });
//   }
// navSlider();

  $('.burger').on('click', function(){
    $('.nav-links').toggleClass('nav-active');
    $(this).toggleClass('toggle');
    $('body').toggleClass('noscroll')
  });
}