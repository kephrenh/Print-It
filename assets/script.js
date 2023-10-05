const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <dot>en boutique et en ligne</dot>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <dot>pour vos bureaux et events</dot>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <dot>de CMJN aux pantones</dot>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <dot>avec découpe laser sur mesure</dot>"
	}
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

const prevArrow = document.querySelector(".arrow_left");
const nextArrow = document.querySelector(".arrow_right");


prevArrow.addEventListener("click", ()=> {
	console.log("Previous slide !")
	dotSpan[i].classList.remove("dot_selected");
	
	if(i === 0) {
		i = nbSlide - 1
	} else {
		i--;
	}

	dotSpan[i].classList.add("dot_selected");
	carousel();
})

nextArrow.addEventListener("click", ()=> {
	console.log("Next slide !")

	dotSpan[i].classList.remove("dot_selected");
	
	if(i === nbSlide - 1) {
		i = 0
	} else {
		i++;
	}

	dotSpan[i].classList.add("dot_selected");
	carousel();
})

// dots
function createDots() {

	for(let i = 0; i < nbSlide; i++) {
		const dots = document.querySelector(".dots");
		const dot = document.createElement("span");
		dot.classList.add("dot");
		dots.appendChild(dot);
	}
}
createDots();

function selectedDot() {
	const listDots = document.querySelectorAll(".dot");
	const nbDot = listDots.length;
	for(let i = 0; i < nbDot; i++) {
		const dot = listDots[i];

		if(i === 0) {
			dot.classList.add("dot_selected")
		}
	}
}
selectedDot();

const dotSpan = document.querySelectorAll(".dots span");


// carousel
function carousel() {
	const slide = slides[i];
	const image = document.querySelector(".banner-img");
	const tagLine = document.querySelector("#banner p");
	tagLine.classList.add("banner-txt");

	image.src = "./assets/images/slideshow/" + slide.image;
	const tagLineValue = slide.tagLine;
	tagLine.innerHTML = tagLineValue;
}
