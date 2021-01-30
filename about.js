'use strict'
{
  const navSlider = () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.i');
    const cancel = document.querySelector('.cancel');
  
    burger.addEventListener('click', () => {
      navLinks.classList.add('nav-active');
    });
    cancel.addEventListener('click', () => {
      navLinks.classList.remove('nav-active');
    });
  }
  navSlider();
}