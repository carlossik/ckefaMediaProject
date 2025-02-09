$(document).ready(function () {
  $(".close-sm").hide();
  $(".hamburger-sm").click(function () {
    $(".nav-link-list").slideToggle("slow", function () {
      $(".hamburger-sm").hide();
      $(".close-sm").show();
    });
  });

  $(".close-sm").click(function () {
    $(".nav-link-list").slideToggle("slow", function () {
      $(".close-sm").hide();
      $(".hamburger-sm").show();
    });
  });

});

// $('.menu-sm').click(function () {
//   $(this).toggleClass('active');
//   console.log("Clicked menu");
//   $(".nav-link-list").toggleClass("show-list");
//   $(".nav-link-list").fadeIn();
// });

