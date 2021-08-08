(() => {
  let audioEl = document.querySelector("audio"),
      playButton = document.querySelector(".play_anim");

  function playAudio() {
    document.querySelector(".oogway").classList.add("characterAnimation");
    audioEl.play();
  }

  playButton.addEventListener("click", playAudio);

})();
