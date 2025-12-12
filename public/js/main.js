const buttons = document.querySelectorAll(".game-list button");
const iframe = document.getElementById("gameFrame");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-url");
    iframe.src = url;
  });
});
