var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

setGradient()

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradientRandom() {
	const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = 
	"linear-gradient(to right, #" 
	+ randomColor1
	+ ", #" 
	+ randomColor2
	+ ")";
	css.textContent = body.style.background + ";";
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

genNew.addEventListener("click", setGradientRandom);

const randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = "#" + randomColor;
	color.innerHTML = "#" + randomColor;