$(document).ready(function () {
  // init scroll magic
  var controller = new ScrollMagic.Controller();

  //build a scene

  var scene = new ScrollMagic.Scene({
    triggerElement: ".our-approach",
  })
    .setClassToggle(".our-approach", "fade-left")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".golden-principle",
  })
    .setClassToggle(".golden-principle", "fade-right")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#process",
  })
    .setClassToggle("#process", "fade-up")
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#testimonials",
  })
    .setClassToggle("#testimonials", "fade-up")
    .addTo(controller);
});
