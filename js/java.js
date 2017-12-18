var mediaPlayer;
var progressBar;
var mutebtn;

document.addEventListener('DOMContentLoaded',function(){
  initPlayer();

}, false);

function initPlayer() {
  mediaPlayer = document.getElementById('video');
  progressBar = document.getElementById('progressBar');
  mediaPlayer.addEventListener('timeupdate', updateBar, false);
  progressBar.addEventListener('click', seek);
}

//function pour play/pause la Video

function toggleVideo() {
  var btn = document.getElementById('play-pause-btn');
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
  document.getElementById('play-pause-btn').innerHTML = "Play Video";
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
  var element = document.getElementById('video');
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

mutebtn = document.getElementById('mutebtn')
mutebtn.addEventListener('click', false);
function mute(){
  if (video.muted){
    volumeBar.value = oldvol;
    video.muted = false;
    mutebtn.innerHTML = "Mute";
  } else {
    oldvol = volumeBar.value;
    volumeBar.value = 0;
    video.muted = true;
    mutebtn.innerHTML = "Unmute";
  }
}

volumeslider = document.getElementById('volumeBar')
volumeslider.addEventListener('change', false)
function setvolume(){
  video.volume = volumeBar.value / 100;
}
