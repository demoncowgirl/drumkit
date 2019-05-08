function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
  if(!audio)return; //stops function of no audio is assigned to key pressed
  audio.currentTime = 0; //starts audio at start so you don't have to weight to hear next event
  audio.play();
  key.classList.add('playing');
  }

  window.addEventListener('keyup', function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(key && key.classList.contains('playing')) key.classList.remove('playing');
});

// function removeTransition(e){
//   if(e.propertyName !== 'transform') return; //skip if not transform
//   e.target.classList.remove('playing');
// }
//
// const keys = Array.from(document.querySelector('.key'));
//
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
