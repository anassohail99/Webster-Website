// $(document).ready(function () {
//   $grid = $(".portfolio-item").isotope({
//     // options
//     itemSelector: ".item",
//     layoutMode: "masonry",
//     masonry: {
//       gutter: 0,
//     },
//   });
//   // filter items on button click
//   $(".portfolio-ul").on("click", "li", function () {
//     var filterValue = $(this).attr("data-filter");
//     $grid.isotope({ filter: filterValue });
//     $(".portfolio-ul li").removeClass("active");
//     $(this).addClass("active");
//   });
// });
// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-thumbnail",
    layoutMode: "fitRows",
  });

  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
});
