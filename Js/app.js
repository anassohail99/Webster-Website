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

setTimeout(stopPreLoader, 2000);

window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".Nav");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 50) {
    navbar.classList.add("sticky");
    navbar.style.background = "#1D3E9E";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.background = "transparent";
  }
};
