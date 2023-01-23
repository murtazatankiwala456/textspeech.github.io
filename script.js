const textarea=document.querySelector('#textarea');
const speakBtn=document.querySelector('#btn');


function textTospeech(text){
    let utternace= new SpeechSynthesisUtterance(text)
    let synth=speechSynthesis
    synth.speak(utternace)
    //This is a default inbuilt Speech Web API in browser which takes the argument or string on speechSynthesisUtterance function and return text in speech form by speechSynthesis function and invoke it by .speak  method//
}

speakBtn.addEventListener('click',()=>{
  if(textarea.value !==''){
    textTospeech(textarea.value)
  }
 
});