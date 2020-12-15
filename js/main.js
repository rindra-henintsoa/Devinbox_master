$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();



    /*-------------------------------------------------------------------------------
	  clients logo slider
	-------------------------------------------------------------------------------*/
    if ($('.clients_slider').length) {
      $('.clients_slider').owlCarousel({
          loop: true,
          margin: 30,
          items: 5,
          nav: false,
          dots: false,
          responsiveClass: true,
          autoplay: 2500,
          slideSpeed: 300,
          paginationSpeed: 500,
          responsive: {
              0: {
                  items: 1,
              },
              768: {
                  items: 3,
              },
              1024: {
                  items: 4,
              },
              1224: {
                  items: 5
              }
          }
      })
    }


    /*-------------------------------------------------------------------------------
	  testimonial slider
	-------------------------------------------------------------------------------*/
    if ($('.testimonial').length) {
      $('.testimonial').owlCarousel({
          loop: true,
          margin: 30,
          items: 5,
          nav: false,
          dots: true,
          responsiveClass: true,
          slideSpeed: 300,
          paginationSpeed: 500,
          responsive: {
              0: {
                  items: 1
              }
          }
      })
    }


  /*-------------------------------------------------------------------------------
	  Mailchimp 
	-------------------------------------------------------------------------------*/
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();
  
});
//click to scroll top
  $('.move_up').click(function() {
    $('html, body').animate({
      scrollTop:0}, 1000 );
  })

    $('.chat').arctext({radius: 120, dir: -1});
    $('.mobility').arctext({radius: 90, dir: 1});
    $('.recrut').arctext({radius: 120, dir: -1});
    $('.formation').arctext({radius: 100, dir: 1});

    $('.formation-area > .formation').click(function(){
                $(this).nextAll().toggleClass('show');
            })

    $('.modality-area > .mobility').click(function(){
                $(this).nextAll().toggleClass('show');
            })

    $('.chat-area > .chat').click(function(){
                $(this).nextAll().toggleClass('show');
            })

    $('.recrut-area > .recrut').click(function(){
                $(this).nextAll().toggleClass('show');
            })



