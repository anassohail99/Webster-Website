$(document).ready(function () {
  $(".button a").click(function () {
    $(".overlay").fadeToggle(200);
    $(this).toggleClass("btn-open").toggleClass("btn-close");
  });
});
$(".overlay").on("click", function () {
  $(".overlay").fadeToggle(200);
  $(".button a").toggleClass("btn-open").toggleClass("btn-close");
  open = false;
});

// PRE LOADER

const main = document.querySelector(".main");
const preLoader = document.querySelector(".preloader");

main.style.display = "none";
preLoader.style.display = "block";

function stopPreLoader() {
  main.style.display = "block";
  preLoader.style.display = "none";
}

setTimeout(stopPreLoader, 1000);
