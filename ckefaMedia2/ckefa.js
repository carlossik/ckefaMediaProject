$('.menu-sm').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $(".nav-link-list").toggleClass("show-list");
  $(".nav-link-list").fadeIn();
});