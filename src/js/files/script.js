// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================

//Initialize Swiper 
// оргинал- оставляем тольео нужное
// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	direction: 'vertical', // нам не нужно
// 	loop: true,

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	Navigation arrows // нам не нужно
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	And if we need scrollbar // нам не нужно
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });
//========================================================================================================================================================
"use script"

const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}