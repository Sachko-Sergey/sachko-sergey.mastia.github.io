$(document).ready(function () {
  $('.intro-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons_controls/left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons_controls/right.svg" alt=""></button>',
        responsive: [
      {
        breakpoint: 560,
        settings: {
          dotsClass: 'dotted',
          arrows: false,
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.works-slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons_controls/left-s.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons_controls/right-s.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          arrows: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          arrows: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.blog-slider').slick({
    slidesToShow: 2,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons_controls/left-s.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons_controls/right-s.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });
});

document.querySelector('.h-wrap').onclick = function () {
  document.querySelector('.header-bottom-inner__menu').classList.toggle('active');
  document.querySelector('.h-menu').classList.toggle('active');
}



