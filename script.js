var css = document.querySelector("h3");
var color1 =document.querySelector(".color1");
var color2 =document.querySelector(".color2");
var body =document.getElementById("gradient");
var random1=document.getElementById("random1");
var random2=document.getElementById("random2");

//The colour input matches the background generated on page load
body.style.background="linear-gradient(to right, "+color1.value+" , "+color2.value+")";
//Display the initial CSS linear gradient property on page load
css.textContent = body.style.background+";";

//setGradient function for setting gradient and displaying the CSS linear property on page
function setGradient(){
	body.style.background =
		"linear-gradient(to right, " 
		+ color1.value
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent= body.style.background +";";
}

//generate random color button 1
function generateRandomColor1(){
	var randomColor ="#"+Math.floor(Math.random()*16777215).toString(16);
	color1.value=randomColor;
	setGradient();
}

//generate random color button 2
function generateRandomColor2(){
	var randomColor ="#"+Math.floor(Math.random()*16777215).toString(16);
	color2.value=randomColor;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random1.addEventListener("click", generateRandomColor1);

random2.addEventListener("click", generateRandomColor2);
