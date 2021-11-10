;(function(){
	"use strict";

	/*const tabLinks = document.querySelectorAll(".nav-tabs__link");
	const tabs = document.querySelectorAll(".tab");

	for (let i=0; i < tabLinks.length; i++) {
		tabLinks[i].addEventListener("click", function(event) {
			event.preventDefault();
			
			for (let i=0; i < tabLinks.length; i++) {
				tabLinks[i].classList.remove("nav-tabs__link--active");
			}
			this.classList.add("nav-tabs__link--active");

			for (let i=0; i < tabs.length; i++) {
				tabs[i].classList.remove("tab--active");
			}

			document.querySelector(this.hash).classList.add("tab--active");
		});
	}*/

	$('.js-nav-tabs__link').on('click', function(event) {
		event.preventDefault();
		
		$('.js-nav-tabs__link').removeClass("nav-tabs__link--active");
		$('.tab').removeClass("tab--active");

		$(this).addClass('nav-tabs__link--active');
		let hash = $(this).attr('href');
		$(hash).addClass("tab--active");

	});

})();

