;(function(){
	"use strict";

	const tabInfo = document.getElementById("link_info");
	const tabCard = document.getElementById("link_card");
	const tabBasket = document.getElementById('link_basket');
	const tooltip = document.getElementById('tooltip');
	const card = document.querySelector(".tab-card");
	const basket = document.querySelector(".tab-basket");

	tabInfo.classList.add("nav-tabs__link--active");
	tooltip.classList.add("tab--active");
	tabInfo.addEventListener("click", () => {
		card.classList.remove("tab--active");
		basket.classList.remove("tab--active");
		tooltip.classList.add("tab--active");
		tabBasket.classList.remove("nav-tabs__link--active");
		tabCard.classList.remove("nav-tabs__link--active");
		tabInfo.classList.add("nav-tabs__link--active");
	});

	tabCard.addEventListener("click", () => {
		tooltip.classList.remove("tab--active");
		basket.classList.remove("tab--active");
		card.classList.add("tab--active");
		tabBasket.classList.remove("nav-tabs__link--active");
		tabInfo.classList.remove("nav-tabs__link--active");
		tabCard.classList.add("nav-tabs__link--active");
	});

	tabBasket.addEventListener("click", () => {
		tooltip.classList.remove("tab--active");
		card.classList.remove("tab--active");
		basket.classList.add("tab--active");
		tabInfo.classList.remove("nav-tabs__link--active");
		tabCard.classList.remove("nav-tabs__link--active");
		tabBasket.classList.add("nav-tabs__link--active");
	});


})();

