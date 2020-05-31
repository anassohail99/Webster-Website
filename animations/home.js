$(document).ready(function () {
  // init scroll magic
  var controller = new ScrollMagic.Controller();

  //build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: ".about",
  })
    .setClassToggle(".about", "fade-up")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".about-2",
  })
    .setClassToggle(".about-2", "fade-right")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".about-3",
  })
    .setClassToggle(".about-3", "fade-left")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".about-4",
  })
    .setClassToggle(".about-4", "fade-down")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".services",
  })
    .setClassToggle(".services", "fade-up")
    .addTo(controller);
});
