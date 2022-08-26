//pricing card toggle
var toggleSwitch = document.querySelector(".toggle-switch");

toggleSwitch.addEventListener("change",() =>{
  if(toggleSwitch.checked){
      document.querySelector(".pricing-main").classList.add("active");
  }
  else{
      document.querySelector(".pricing-main").classList.remove("active");
  }
});

//testinmonial 
jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	$(".customer-logos").slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 4
			}
		  },
		  {
			breakpoint: 520,
			settings: {
			  slidesToShow: 3
			}
		  }
		]
	  });
});


  



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
console.log(navbar);
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
