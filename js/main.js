$(document).ready(function () {
  $("#slider").slick({
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: ".hprev-arrow",
    nextArrow: ".hnext-arrow",
  });
  $(".product-slider").slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: "<span class='slide-arrow prev-arrow'><img src='./img/hero-slider-leftt-arrow.png' alt=''></span>",
    nextArrow: "<span class='slide-arrow next-arrow'><img src='./img/hero-slider-right-arrow.png' alt=''></span>",
  });

  $("a.play-btn").fancybox();
});
