window.addEventListener('keydown',event=>{
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('play');
})
function endtrans(e){
    if(e.propertyName !=='transform')return;
    e.target.classList.remove('play');

}
const keys = document.querySelectorAll('.key');
keys.forEach(key=>key.addEventListener("transitionend",endtrans));