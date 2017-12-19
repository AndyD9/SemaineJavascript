// Home page
var create = document.querySelector('.create-account');
var signIn = document.querySelector('.sign-in');
var log = document.querySelector('.log');

create.addEventListener('click', function(event) {
  signIn.style.display= 'block';
  signUp.style.display= '';
})

var logIn = document.querySelector('.login-account');
var signUp = document.querySelector('.sign-up');
var log = document.querySelector('.log');

logIn.addEventListener('click', function(event) {
  signUp.style.display= 'block';
  signIn.style.display= '';
})
