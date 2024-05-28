// logo owl carousel
// owl carousel start======================
$('.brand_logos').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplaySpeed: 3000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,

    },
    600: {
      items: 4,

    },
    1000: {
      items: 7,

    }
  }
});
