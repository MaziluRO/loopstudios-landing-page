'use strict';

const creationImages = document.querySelectorAll('.creation-image');
const main = document.querySelector('#creations-tab');
const nav = document.querySelector('nav');
const initialCords = main.getBoundingClientRect();

console.log(creationImages);

//sticky navigation

window.addEventListener('scroll', function (e) {
	if (window.scrollY > initialCords.top) {
		nav.classList.add('sticky');
	} else {
		nav.classList.remove('sticky');
	}
});
