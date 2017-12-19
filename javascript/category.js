var actionCategory = document.querySelector('.action-category');
var animationCategory = document.querySelector('.animation-category');
var comedyCategory = document.querySelector('.comedy-category');
var horrorThrillerCategory = document.querySelector('.horror-thriller-category');
var actionMovies = '';
var animationMovies = '';
var comedyMovies = '';
var horrorThrillerMovies = '';

for (var i = 0; i < data.films.length; i++) {
  switch (data.films[i].category) {
  case 'Action':
    actionMovies += "<img src=" + data.films[i].img + ">";
    actionCategory.innerHTML = actionMovies;
    break;
  case 'Animation':
    animationMovies += "<img src=" + data.films[i].img + ">";
    animationCategory.innerHTML = animationMovies;
    break;
    case 'Comedy':
      comedyMovies += "<img src=" + data.films[i].img + ">";
      comedyCategory.innerHTML = comedyMovies;
      break;
    case 'Horror / Thriller':
      horrorThrillerMovies += "<img src=" + data.films[i].img + ">";
      horrorThrillerCategory.innerHTML = horrorThrillerMovies;
      break;
    }
}
