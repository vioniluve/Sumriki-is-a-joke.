const audio = new Audio('song.mp3'); 
const button = document.querySelector('.button-start');
let isPlaying = false;

button.addEventListener('click', () => {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
      } else {
        audio.pause();
        isPlaying = false;
      }
});