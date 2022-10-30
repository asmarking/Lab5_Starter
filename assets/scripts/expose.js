// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  let option = document.querySelector('select');
  let image = document.querySelector('img');
  let playButton = document.querySelector("button");
  let audio = document.querySelector("audio");
  let volumeBar = document.querySelector("#volume");
  let volumeContainer = document.querySelector("div");
  let volumeSrc = volumeContainer.querySelector("img");
  volumeBar.addEventListener('input',volumeImage);
  option.addEventListener('input',updateImage);
  playButton.addEventListener('click',updateAudio);
  function updateImage(){
    if(option.value == "air-horn"){
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    if(option.value == "party-horn"){
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
    if(option.value == "car-horn"){
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
  }
function updateAudio(){
  audio.play();
}
function volumeImage(){
  //alert(volumeBar.value);
 // alert(voluemeSrc.src);
  audio.volume = volumeBar.valueAsNumber/100;
  if(volumeBar.valueAsNumber==0){
    volumeSrc.src = "assets/icons/volume-level-0.svg";
  }
  if(volumeBar.valueAsNumber<33 && volumeBar.valueAsNumber!=0){
    volumeSrc.src = "assets/icons/volume-level-1.svg";
  }
  if(volumeBar.valueAsNumber>=67){
    volumeSrc.src = "assets/icons/volume-level-3.svg";
  }
  if(volumeBar.valueAsNumber>=33 && volumeBar.valueAsNumber<67){
    volumeBar.volume ="assets/icons/volume-level-2.svg";
  }
}

}
