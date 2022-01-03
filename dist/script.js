const dayHtml = document.querySelector("#day");
const hourHtml = document.querySelector("#hour");
const minuteHtml = document.querySelector("#minute");
const secondHtml = document.querySelector("#second");

const inputHtml = document.querySelector("#find");

let timeCalculate = '2050-01-13';

inputHtml.addEventListener('change' , () => {
	clearInterval(setp);
	console.log(inputHtml.value);
	timeCalculate = inputHtml.value;
	setp = setInterval(calculate,1000);
})

function calculate(){
	
	const newTimeCalculate = new Date(timeCalculate);
	const currentDate = new Date();

	const totalSecond = (newTimeCalculate - currentDate) /1000;


	const days = Math.floor(totalSecond / 3600 / 24);
	const hours = Math.floor(totalSecond / 3600 ) % 24;
	const minuts = Math.floor(totalSecond / 60 ) % 60;
	const seconds = Math.floor(totalSecond) % 60;


	dayHtml.innerHTML = days;
	hourHtml.innerHTML = formatTime(hours);
	minuteHtml.innerHTML = formatTime(minuts);
	secondHtml.innerHTML = formatTime(seconds);
}

function formatTime(time){
	return time < 10 ? `0${time}` : time;
}
calculate();
let setp = setInterval(calculate,1000);
