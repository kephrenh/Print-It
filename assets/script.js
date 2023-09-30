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

let i = 0;
// next
const nextArrow = document.querySelector(".arrow_right");

nextArrow.addEventListener("click", () => {
	console.log("Next slide !");
})

// previous
const prevArrow = document.querySelector(".arrow_left");

prevArrow.addEventListener("click", () => {
	console.log("Previous slide !");
})

// dots
const dots = document.querySelectorAll(".dots span");
const nbDot = dots.length;

function nextDot() {
	dots[i].classList.remove("dot_selected");

		if(i < nbDot - 1) {
			i++;
		} else {
			i = 0;
	}
	
	dots[i].classList.add("dot_selected");
}
nextArrow.addEventListener("click", nextDot)

function prevDot() {
	dots[i].classList.remove("dot_selected");

		if(i > 0) {
			i--;
		} else {
			i = nbDot - 1;
	}
	
	dots[i].classList.add("dot_selected");
}
prevArrow.addEventListener("click", prevDot)

// images
const images = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"]

function nextImage() {
	i = i++
	document.querySelector(".banner-img").src = "../assets/images/slideshow/" + images[i];

}
nextArrow.addEventListener("click", nextImage)

function prevImage() {
	i = i--
	document.querySelector(".banner-img").src = "../assets/images/slideshow/" + images[i];

}
prevArrow.addEventListener("click", prevImage)

// texte
