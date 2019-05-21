// event pada link
$(function() {
	$('.page-scroll').on('click',function(e) {
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elementujuan = $(tujuan);

	//pindahkan scrollnya
	$('html,body').animate({
		scrollTop: elementujuan.offset().top -50 
	},800,'easeInOutExpo');
	e.preventDefault();

	});	

	//about
	$(window).on('load',function () {
		$('.pKiri').addClass('pMuncul');
		$('.pKanan').addClass('pMuncul');
	})

	// paralax 
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		
		$('.jumbotron img').css({
			'transform' : 'translate(0px, '+ wScroll/4 +'%)'
		});
		$('.jumbotron h1').css({
			'transform' : 'translate(0px, '+ wScroll/2 +'%)'
		});
		$('.jumbotron p').css({
			'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
		});

		// portfolio 
		if ( wScroll > $('.portfolio').offset().top - 250) {
			$('.portfolio .thumbnail').each(function(i) {
				setTimeout(function () {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');		
				}, 300 * (i+1));
			});
		}

	});
});
