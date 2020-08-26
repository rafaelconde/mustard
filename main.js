var isPlaying = false;

function playSound(id) {
  var sound = document.getElementById(id);
  var video = document.getElementById("sneaky-video");
  var label = document.getElementById("button-text");
  
  if (isPlaying) {
    sound.pause();
    sound.currentTime = 0;
    
    video.style.display = "none";
    label.innerHTML = "Hit it!";
    
    isPlaying = false;
  } else {
    sound.play();
    
    video.style.display = "flex";
    label.innerHTML = "Enough!";
    
    isPlaying = true;
  }
}