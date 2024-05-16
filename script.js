const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

var typed = new Typed(".typing-2", {
  strings: [" 👨‍💻 A Tech Enthusiast ","👨‍🎓 A Computer Engineering student ", " 🚀 Aspiring Web-Developer","🎨 UI Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

}))

const myslide = document.querySelectorAll('.myslide'),
	dot = document.querySelectorAll('.indicator');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	counter = 1;
	}
	if(n < 1){
	counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}



const myslides = document.querySelectorAll('.myslides'),
	dots = document.querySelectorAll('.indicators');
let counters = 1;
slidefuns(counters);

let timers = setInterval(autoSlides, 8000);
function autoSlides() {
	counters += 1;
	slidefuns(counters);
}
function plusSlidess(n) {
	counters += n;
	slidefuns(counters);
	resetTimers();
}
function currentSlides(n) {
	counters = n;
	slidefuns(counters);
	resetTimers();
}
function resetTimers() {
	clearInterval(timer);
	timer = setInterval(autoSlides, 8000);
}

function slidefuns(n) {
	let i;
	for(i = 0;i<myslides.length;i++){
		myslides[i].style.display = "none";
	}
	for(i = 0;i<dots.length;i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	if(n > myslides.length){
	counters = 1;
	}
	if(n < 1){
	counters = myslides.length;
	}
	myslides[counters - 1].style.display = "block";
	dots[counters - 1].className += " active";
}
