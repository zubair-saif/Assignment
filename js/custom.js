
jQuery(document).ready(function ($) {

  'use strict';

  //***************************
  // partner Functions
  //***************************
  jQuery('.grid-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    dots: false,
    prevArrow: "<span class='slick-arrow-left shadow'><i class='fa fa-angle-left'></i></span>",
    nextArrow: "<span class='slick-arrow-right shadow'><i class='fa fa-angle-right'></i></span>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20%',

        }
      }
    ]
  });






});