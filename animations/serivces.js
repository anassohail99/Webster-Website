$(document).ready(function () {
  // init scroll magic
  var controller = new ScrollMagic.Controller();

  //build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".services",
  })
    .setClassToggle(".services", "fade-up")
    .addTo(controller);
});
