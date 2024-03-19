
  







  $(document).ready(function () {
    $(".madarcho  ").owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      autoplay: 200,
      nav: false,
     
      responsive: {
        0: {
          items: 3,
          nav: false,
        },
        600: {
          items: 2,
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
  