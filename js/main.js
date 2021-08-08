(() => {
  let audioEl = document.querySelector("audio"),
      playButton = document.querySelector(".play_anim");

  function playAudio() {
    document.querySelectorAll("g").forEach(g => g.classList.add("text-anim"));
    document.querySelector("#typeLayout").classList.add("containerTurn")
    document.querySelector(".oogway").classList.add("characterAnimation");
    audioEl.play();
  }

  playButton.addEventListener("click", playAudio);

})();
