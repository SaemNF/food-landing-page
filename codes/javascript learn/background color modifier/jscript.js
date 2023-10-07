var body = document.querySelector('body');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var bodyStyle = window.getComputedStyle(body);
var backgroundBody = bodyStyle.background;
var initial = document.querySelector('.initial');
var current = document.querySelector('.current');
var random = document.querySelector('#random')

function setGradient(){
	body.style.background='linear-gradient(to right, '+ color1.value +', ' + color2.value + ')';
};

function infoGradient(){
	var bodyStyle2 = window.getComputedStyle(body);
	var backgroundBody2 = bodyStyle.background;
	current.textContent = backgroundBody2;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomGradient(){
	var satu = getRandomInt(0, 255)
	var dua = getRandomInt(0, 255)
	var tiga = getRandomInt(0, 255)
	var RGB1 = 'RGB(' + satu + ',' + dua + ',' + tiga + ')'

	var empat = getRandomInt(0, 255)
	var lima = getRandomInt(0, 255)
	var enam = getRandomInt(0, 255)
	var RGB2 = 'RGB(' + empat + ',' + lima + ',' + enam + ')'

	body.style.background='linear-gradient(to right, '+ RGB1 +', ' + RGB2 + ')';

	infoGradient()
};

color1.addEventListener('input',setGradient);

color2.addEventListener('input',setGradient);

initial.textContent = backgroundBody;

color1.addEventListener('input',infoGradient);

color2.addEventListener('input',infoGradient);

random.addEventListener('click', randomGradient)

