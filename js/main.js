(() => {
  let audioEl = document.querySelector("audio"),
      playButton = document.querySelector(".play_anim");

  function plauAudio() {
    document.querySelector(".textVector").classList.add("zoomAnimation");
    audioEl.play();
  }

  playButton.addEventListener("click", playAudio);

})();
