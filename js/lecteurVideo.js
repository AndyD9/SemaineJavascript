var mediaPlayer;
var progressBar;
var mutebtn;
var video = document.querySelector('.video');
var Barvolume = document.querySelector('.volumeBar');
var mediaPlayer = document.querySelector('.video')
var progressBar = document.querySelector('.progressBar');



document.addEventListener('DOMContentLoaded',function(){
  initPlayer();

}, false);

function initPlayer() {
  mediaPlayer.addEventListener('timeupdate', updateBar, false);
  progressBar.addEventListener('click', seek);
}

//function pour play/pause la Video

function toggleVideo() {
  var btn = document.querySelector('.play-pause-btn');
  if (mediaPlayer.paused || mediaPlayer.endend) {
      btn.innerHTML = "Pause Video";
      mediaPlayer.play();

  } else{
    btn.innerHTML = "Play Video";
    mediaPlayer.pause();
  }
}

//function pour stopper la video

function stopvideo() {
  mediaPlayer.pause();
  mediaPlayer.currentTime = 0;
  document.querySelector('.play-pause-btn').innerHTML = "Play Video";
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
  var element = document.querySelector('.video');
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

function mute(){
  var btnmute = document.querySelector('.mutebtn')
  if (video.muted){
    Barvolume.value = oldvol;
    video.muted = false;
    mutebtn.innerHTML = "Mute";
  } else {
    oldvol = Barvolume.value;
    Barvolume.value = 0;
    video.muted = true;
    mutebtn.innerHTML = "Unmute";
  }
}
