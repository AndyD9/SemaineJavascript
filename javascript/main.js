var container = document.querySelector('.row-container');
var movie = '';

for (var i = 0; i < data.films.length; i++) {
  movie += "<div class=\"miniature-container\"><img class=\"miniature\" src=" + data.films[i].img + "></div>";
}

container.innerHTML = movie;

var img = document.querySelectorAll('.miniature');
var modal = document.querySelector('.modal');
var imgModal = document.querySelector('.img-modal-container');
var title = document.querySelector('.title');
var duration = document.querySelector('.duration');
var date = document.querySelector('.date');
var description = document.querySelector('.description');
var videoSrc = document.querySelector('.video-src');
var modalplay = document.querySelector('.modalvideo');
var modalplayercontent = document.querySelector('.modalvideo-overlay');
var src;

videoSrc.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = ''; // empty string = return to default state
  playerContainer.style.display = 'block';
  video.src = src;
});

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function(event) {
    imgModal.innerHTML = "<img class=\"img-modal\" src=" + data.films[i].img + ">";
    title.innerHTML = data.films[i].title;
    duration.innerHTML = "Durée: " + data.films[i].duration + "min";
    date.innerHTML = "Année de sortie: " + data.films[i].year;
    description.innerHTML = "Description :" + data.films[i].description;
    modal.style.display = 'block';
    // videoSrc.href ='videos/' + data.films[i].src;
    src = 'videos/' + data.films[i].src;

  });
}
// show categories
var navCategories = document.querySelector('.nav-category');
var homePrez = document.querySelector('.home-presentation');
var actionTag = document.querySelector('.action-tag');
var categoriesPrez = document.querySelector('.categories-presentation');
var actionCatContainer = document.querySelector('.action-category-container');
var animCatContainer = document.querySelector('.anim-category-container');
var comedyCatContainer = document.querySelector('.comedy-category-container');
var horrorCatContainer = document.querySelector('.horror-category-container');
var allCatContainer = document.querySelector('.all-category-container');
var actionMovies = '';
var animMovies = '';
var comedyMovies = '';
var horrorMovies = '';
var allMovies = '';

for (var i = 0; i < data.films.length; i++) {
  switch (data.films[i].category) {
      case 'Action':
        actionMovies += "<div class=\"miniature-container\"><img class=\"miniature\" src=" +    data.films[i].img + "></div>";
        actionCatContainer.innerHTML = actionMovies;
      break;
      case 'Animation':
        animMovies += "<div class=\"miniature-container\"><img class=\"miniature\" src=" + data.films[i].img + "></div>";
        animCatContainer.innerHTML = animMovies;
        break;
      case 'Comedy':
        comedyMovies += "<div class=\"miniature-container\"><img class=\"miniature\" src=" + data.films[i].img + "></div>";
        comedyCatContainer.innerHTML = comedyMovies;
        break;
      case 'Horror / Thriller':
        horrorMovies += "<div class=\"miniature-container\"><img class=\"miniature\" src=" + data.films[i].img + "></div>";
        horrorCatContainer.innerHTML = horrorMovies;
        break;
    }
      allMovies += "<div class=\"miniature-container\"><img class=\"miniature\" src=" + data.films[i].img + "></div>";
      allCatContainer.innerHTML = allMovies;
  }

actionTag.addEventListener('click', function(event) {
  actionCatContainer.style.display = 'block';
  animCatContainer.style.display = 'none';
  comedyCatContainer.style.display = 'none';
  horrorCatContainer.style.display = 'none';
  allCatContainer.style.display = 'none';
  console.log(event);
})


/*
navCategories.addEventListener('click', function(event) {
  homePrez.style.display = 'none';
  categoriesPrez.style.display = 'block';
  console.log(event);
})*/

/*for (var i = 0; i < data.films.length; i++) {
  if (data.films[i].category === 'Action') {
    actionMovies += "<div class=\"miniature-container\"><img class=\"miniature\" src=" + data.films[i].img + "></div>";
  }
}
rowCatContainer.innerHTML = actionMovies;

actionTag.style.border = '1px solid red';*/



// CATEGORIES FILTERS
//action filter

/*var animationCategory = document.querySelector('.animation-category');
var comedyCategory = document.querySelector('.comedy-category');
var horrorThrillerCategory = document.querySelector('.horror-thriller-category');
var allCategoies = document.querySelector('.all-categories');*/

// end category filter

// [].slice.call(titles).filter(x => x.innerHTML.startsWith('Na'))

// Home page
// var create = document.querySelector('.create-account');
// var signIn = document.querySelector('.sign-in');
// var log = document.querySelector('.log');
//
// create.addEventListener('click', function(event) {
//   signIn.style.display= 'block';
//   signUp.style.display= '';
// })
//
// var logIn = document.querySelector('.login-account');
// var signUp = document.querySelector('.sign-up');
// var log = document.querySelector('.log');
//
// logIn.addEventListener('click', function(event) {
//   signUp.style.display= 'block';
//   signIn.style.display= '';
// })*/
