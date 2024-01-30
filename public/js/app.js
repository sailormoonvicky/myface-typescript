document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navlist');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  menuBtn.classList.add('hide');
  body.classList.add('disabledScroll');
})

cancelBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  menuBtn.classList.remove('hide');
  body.classList.remove('disabledScroll');
})

window.addEventListener('scroll', () => {
  this.scrollY > 20? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
});