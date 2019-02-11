"use strict";

$(window).load(function(){
    // Preloader
    $('.loader').fadeOut();    
    $('#preloader').delay(200).fadeOut('slow');

    // PORTFOLIO ISOTOPE 
    $(".portfolio_items").isotope({
      itemSelector: '.single_item',
      layoutMode: 'fitRows',
      columnWidth: '.col-md-4'
    });

    // isotope click function
    $('.portfolio_filter ul li').on('click', function(){
      $(".portfolio_filter ul li").removeClass("select-cat");
      $(this).addClass("select-cat");
      var selector = $(this).attr('data-filter');
      $(".portfolio_items").isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      }); 
    });

// magnificPopup
// $(document).ready(function() {

 $('.image-link').magnificPopup({
   type:'inline',
   fixedContentPos: false,
   removalDelay: 100,
   closeBtnInside: true,
   preloader: false,
   mainClass: 'mfp-fade'
 });

 $('.video-link').magnificPopup({
   disableOn: 700,
   type: 'iframe',
   mainClass: 'mfp-fade',
   removalDelay: 160,
   preloader: false,
   fixedContentPos: false
 });
// })

});

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse').on('click',function(event) {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

 // Appear Animation
 new WOW().init();





