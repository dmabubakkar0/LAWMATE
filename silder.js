$(document).ready(function () {
    $(".slider_profile").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      autoplay: 100,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: true,
        },
        1000: {
          items: 1,
          nav: true,
          margin: 30,
        },
      },
    });
  });
  