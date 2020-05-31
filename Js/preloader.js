// PRE LOADER

const main = document.querySelector(".main");
const preLoader = document.querySelector(".preloader");

main.style.display = "none";
preLoader.style.display = "block";

function stopPreLoader() {
  main.style.display = "block";
  preLoader.style.display = "none";
}

setTimeout(stopPreLoader, 2000);

window.onscroll = function () {
  myFunction();
};
