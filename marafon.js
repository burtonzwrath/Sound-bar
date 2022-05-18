window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const btn = document.querySelector(`button[data-key="${e.key}"]`);
  btn.classList.add("playing");
  setTimeout(() => btn.classList.remove("playing"), 200);
  if (!audio) return;
  audio.play();
});
const button = document.querySelectorAll("button");

button.forEach(
  (item) =>
    (item.onclick = () => {
      switch (item.id) {
        case "button1":
          const audio1 = document.querySelector(`#audio1`);
          audio1.play();
          item.classList.add("playing");
          setTimeout(() => item.classList.remove("playing"), 200);
          break;

        case "button2":
          const audio2 = document.querySelector(`#audio2`);
          audio2.play();
          item.classList.add("playing");
          setTimeout(() => item.classList.remove("playing"), 200);
          break;

        case "button3":
          const audio3 = document.querySelector(`#audio3`);
          audio3.play();
          item.classList.add("playing");
          setTimeout(() => item.classList.remove("playing"), 200);
      }
    })
);
