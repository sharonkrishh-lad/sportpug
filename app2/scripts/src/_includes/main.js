jQuery(document).ready(function($) {
		$('.headRight__section__nav__search input').focus(function () {
				$('.headerPanel').addClass('search-open');
				$(".curtain-mask").show();
			}).blur(function () {
				$('.headerPanel').removeClass('search-open');
				$(".curtain-mask").hide();
		});

		// desktop menu masking hide and show
			$(".mainMenu__nav__row > li").hover(function () {
				$(".curtain-mask").show();
			}, 
			function () {
				$(".curtain-mask").hide();
			});
		// Mobile menu
		var trigger = $('.hamburger'),
			overlay = $('.overlay'),
			 isClosed = false;
			 
		trigger.click(function () {
			hamburger_cross();      
		});
		function hamburger_cross() {

			if (isClosed == true) {          
				overlay.hide();
				trigger.removeClass('is-open');
				trigger.addClass('is-closed');
				isClosed = false;
			} else {   
				overlay.show();
				trigger.removeClass('is-closed');
				trigger.addClass('is-open');
				isClosed = true;
			}
		}
		$('[data-toggle="offcanvas"]').click(function () {
					$('.jv_sitewrapper').toggleClass('toggled');
		});  

		// Slick slider for main banner slide
		$(".hero__banner").slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			draggable:false,
			// autoplay:true

		  });
		//   Catagory on iconize slider
		$(".catagory-slider").slick({
			slidesToShow: 8,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 4,
					slidesToScroll: 4
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				}
			  ]
		  });
		//   product slider
		$(".product-slider").slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					centerPadding: '40px',
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					arrows: false,
					centerPadding: '40px',
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				}
			  ]
		});
		  
	});