var mediaPlayer;
var progressBar;
var mutebtn;
var video = document.querySelector('.video');
var Barvolume = document.querySelector('.volumeBar');
var mediaPlayer = document.querySelector('.video')
var progressBar = document.querySelector('.progressBar');
var btn = document.querySelector('.play-pause-btn');
var btnmultifonction = document.querySelector('.play-pause-btn');
var element = document.querySelector('.video');
var btnmute = document.querySelector('.mutebtn');


document.addEventListener('DOMContentLoaded',function(){
  initPlayer();

}, false);

function initPlayer() {
  mediaPlayer.addEventListener('timeupdate', updateBar, false);
  progressBar.addEventListener('click', seek);
}

//function pour play/pause la Video

function toggleVideo() {
  if (mediaPlayer.paused || mediaPlayer.endend) {
      btn.innerHTML = "Pause";
      mediaPlayer.play();

  } else{
    btn.innerHTML = "Lecture";
    mediaPlayer.pause();
  }
}

//function pour stopper la video

function stopvideo() {
  mediaPlayer.pause();
  mediaPlayer.currentTime = 0;
  btnmultifonction.innerHTML = "Lecture";
}

function updateBar (){
  var pourcentage = Math.floor((100/ mediaPlayer.duration)* mediaPlayer.currentTime);
  progressBar.value = pourcentage;
}

function seek(e) {
  var percent = e.offsetX / this.offsetWidth;
  mediaPlayer.currentTime = percent * mediaPlayer.duration;
  progressBar.value = percent / 100;
}

function fullscreen() {
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

function mute(){
  if (video.muted){
    Barvolume.value = oldvol;
    video.muted = false;
    btnmute.innerHTML = "Mute";
  } else {
    oldvol = Barvolume.value;
    Barvolume.value = 0;
    video.muted = true;
    btnmute.innerHTML = "Unmute";
  }
}

function setvolume(){
  video.volume = Barvolume.value / 100;
}
