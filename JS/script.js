$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		pagination: false,
		play: 5000,
	})

	// Typed.js by www.mattboldt.com
	var text = new Typed('.typed', {
		strings: ['Full Stack Developer.', 'Creative.', 'Productivity Enthusiast.'],
		// !My original
		typeSpeed: 60,
		backSpeed: 40,
		bindInputFocusEvents: true,
		loop: true,
		loopCount: Infinity,
		cursorChar: '|',
		backDelay: 2000,
		startDelay: 1000,
	})

	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 4,
		responsive: {
			0: {
				items: 1,
			},
			480: {
				items: 2,
			},
			768: {
				items: 3,
			},
			938: {
				items: 4,
			},
		},
	})

	let skillTop = $('.skillsSection').offset().top
	let statTop = $('.statsSection').offset().top
	let countUp = false
	$(window).scroll(function() {
		if (window.pageYOffset > skillTop - $(window).height() + 200) {
			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#29f3c3',
				trackColor: '#272727',
				scaleColor: false,
				lineWidth: 7,
				size: 152,
				animate: { duration: 2000, enabled: true },
				onStep: function(from, to, percent) {
					$(this.el)
						.find('.percent')
						.text(Math.round(percent))
				},
			})
		}

		if (!countUp && window.pageYOffset > statTop - $(window).height() + 200) {
			$('.counter').each(function() {
				let el = $(this)
				let endVal = parseInt(el.text())
				el.countup(endVal)
			})
			countUp = true
		}
	})
	$('[data-fancybox]').fancybox()

	$('.items').isotope({
		filter: '*',
		animationOptions: { duration: 2000, easing: 'linear', queue: false },
	})
})
