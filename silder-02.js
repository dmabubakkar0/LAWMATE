$(document).ready(function () {
    $(".bal").owlCarousel({
      loop: true,
      margin: 5,
      responsiveClass: true,
      autoplay: 200,
      nav: false,
     
      responsive: {
        0: {
          items: 0,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 1,
          nav: false,
          margin: 30,
        },
      },
    });
  });