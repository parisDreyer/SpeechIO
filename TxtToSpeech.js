var synth = window.speechSynthesis;

var inputTxt = document.querySelector('.output');

var activation = document.querySelector('.read');

function speak(){

    activation.disabled = true;

    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputTxt.value !== '') {

        activation.textContent = "Reading";

    var utterThis = new SpeechSynthesisUtterance(inputTxt.textContent);
    
    utterThis.onend = function (event) {
        activation.textContent = "Read";
        activation.disabled = false;
        //console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    
    //var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

   utterThis.voice = synth.getVoices()[0].value;
   utterThis.pitch = 1.4;
   utterThis.rate = 0.9;
   utterThis.lang = 'en-US';
    synth.speak(utterThis);
  }
}

activation.addEventListener('click', speak);
