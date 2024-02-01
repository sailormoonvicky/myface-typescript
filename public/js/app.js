document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
});

const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navlist');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const logo = document.getElementById('myface');
const themeBtn =document.getElementById('theme-btn');
const postContainer = document.getElementsByClassName('post-container');



menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  logo.hidden = false;
  menuBtn.classList.add('hide');
  body.classList.add('disabledScroll');
})

cancelBtn.addEventListener('click', function() {
  menu.classList.remove('active');
  menuBtn.classList.remove('hide');
  body.classList.remove('disabledScroll');
})

themeBtn.addEventListener('click', () =>{
  for (let i=0; i < postContainer.length; i++) {
    postContainer[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()* 255})`
  }
  console.log(postContainer);
  
  // postContainer.forEach((item) => 
  //   item.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  //   );
})

window.addEventListener('scroll', () => {
  this.scrollY > 20? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
});

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submit-btn');
  // const form = document.getElementsByClassName('userForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const usernameCheckValidity =() => {
    const regex = /^[a-z]+$/;
    return regex.test(username.value);
  }

  const emailCheckValidity =() => {
    const regex = /[.'_%\-+A-Za-z0-9]+@\w+([-.]?\w+)*(\.\w{2,3})+/;
    return regex.test(email.value);
  }

  const validateForm = () => {
    // Check if all form fields are valid
    const isValid = usernameCheckValidity() && emailCheckValidity();
    submitBtn.disabled = !isValid; // Enable button if form is valid, else disable
  };

  // Add event listeners to form fields
  username.addEventListener('input', validateForm);
  email.addEventListener('input', validateForm);

});
