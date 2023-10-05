const slides = [
	// {
	// 	"image":"slide1.jpg",
	// 	"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	// },
	// {
	// 	"image":"slide2.jpg",
	// 	"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	// },
	// {
	// 	"image":"slide3.jpg",
	// 	"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	// },
	// {
	// 	"image":"slide4.png",
	// 	"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	// }
]

const nbSlide = slides.length;
const banner = document.getElementById("banner");
let i = 0;

// arrows
function createArrows () {
		let prevArrow = document.createElement("img");
		prevArrow.classList.add("arrow", "arrow_left");
		prevArrow.src = "assets/images/arrow_left.png";
		prevArrow.alt = "Previous";
		banner.appendChild(prevArrow);

		let nextArrow = document.createElement("img");
		nextArrow.classList.add("arrow", "arrow_right");
		nextArrow.src = "assets/images/arrow_right.png";
		nextArrow.alt = "Next";
		banner.appendChild(nextArrow);
}
createArrows();

