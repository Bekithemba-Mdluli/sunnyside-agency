console.log("Load script.js");

const toggle = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.header__dropdown');

toggle.addEventListener('click', function () {
	navBar.classList.toggle('tog');
});

