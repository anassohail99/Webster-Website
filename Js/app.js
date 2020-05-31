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
// ===== Scroll to Top ====
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function () {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0, // Scroll to top of body
    },
    10
  );
});
