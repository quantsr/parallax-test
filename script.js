//custom smooth scroll algorythm by w3schools.com
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      let scrollTime = 2000;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, scrollTime, function(){
  
        window.location.hash = hash;
      });
    }
  });
});

let farBuildings = document.getElementById('far-buildings');
let backBuildings = document.getElementById('back-buildings');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let foreground = document.getElementById('foreground');
let header = document.querySelector('header');
let sec = document.getElementById('id');
let navBtns = header.getElementsByClassName('nav-btn');

for (var i = 0; i < navBtns.length; i++) {
  	navBtns[i].addEventListener("click", function() {
    	var current = document.getElementsByClassName("active");
    	current[0].className = current[0].classList.toggle("active");
    	this.className += " active";
  	});
}

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	farBuildings.style.top = value * 0.5 + 'px';
	backBuildings.style.top = value * 0.25 + 'px';
	foreground.style.top = value * 0 + 'px';
	
	text.style.marginRight = value * 1.5 + 'px';
	text.style.marginTop = value * 0 + 'px';
	// btn.style.marginTop = value * 1.5 + 'px';
	header.style.top = value * 0.5 + 'px';
});

