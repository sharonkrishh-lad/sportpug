jQuery(document).ready(function($) {
		$('.headRight__section__nav__search input').focus(function () {
				$('.headerPanel').addClass('search-open');
				$(".curtain-mask").show();
			}).blur(function () {
				$('.headerPanel').removeClass('search-open');
				$(".curtain-mask").hide();
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
			slidesToScroll: 4
		  });
		//   product slider
		$(".product-slider").slick({
			slidesToShow: 5,
			slidesToScroll: 1
		});
		  
	});