var container = document.querySelector('.container');
var movie = '';

for (var i = 0; i < data.films.length; i++) {
  movie += "<h1 class='title'>" + data.films[i].title + "</h1>";
}

container.innerHTML = movie;

var titles = document.querySelectorAll('.title');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var modalTitle = document.querySelector('.modal .title');
var duration = document.querySelector('.duration');
var description = document.querySelector('.description');
var videoSrc = document.querySelector('.video-src');

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function(event) {
      modalTitle.innerHTML = 'Title: ' + data.films[i].title;
      duration.innerHTML = data.films[i].duration;
      description.innerHTML = data.films[i].description;
      modal.style.display = 'block';
      videoSrc.href = 'videos/' + data.films[i].src;
    });
    overlay.addEventListener('click', function() {
      modal.style.display = ''; // empty string = return to default state
    });
}

// [].slice.call(titles).filter(x => x.innerHTML.startsWith('Na'))

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
