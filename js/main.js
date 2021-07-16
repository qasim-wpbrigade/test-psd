$(document).ready(function () {
  $("#slider").slick({
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: ".hprev-arrow",
    nextArrow: ".hnext-arrow",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 483,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $("a.play-btn").fancybox();
});

function closenotification(){
  document.getElementById('notiBar').style.display = 'none';
}

function togglenavbar(){
  var nav = document.getElementById("main-nav");
   nav.classList.toggle("active");
}