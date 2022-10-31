// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const face = document.querySelector('img');
  const synth = window.speechSynthesis;
  const text = document.querySelector('textarea');
  const speakButton = document.querySelector('button');
  speakButton.addEventListener('click',talk);
  let voices = [];
  const voiceSelect = document.querySelector('select');
  function populateVoiceList(){
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++){
      const option = document.createElement('option');
      option.textContent = `${voices[i].name}(${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang',voices[i].lang);
      option.setAttribute('data-name',voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function talk(){
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selected = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterThis.addEventListener('start', function() {
      face.src = "assets/images/smiling-open.png";
    });
    utterThis.addEventListener('end',function(){
      face.src = "assets/images/smiling.png";
    })
    for(let i = 0;i < voices.length;i++){
      if(voices[i].name==selected){
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
  }
}