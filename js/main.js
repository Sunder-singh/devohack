$(".navbar-toggler").click(function(){
$("nav").toggleClass("navbar-orange");
$('#img1').toggleClass("navbar-orange");
$('#img2').toggleClass("navbar-orange");
})


let nav = document.querySelector(".navbar");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.documentElement.scrollTop >= 40) {
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="block";
    nav.classList.add('header-scrolled');
  } else {
    document.getElementById("img1").style.display="block";
    document.getElementById("img2").style.display="none";
    nav.classList.remove('header-scrolled');
  }
}

var owl = $('.sec6-owl-carousel');


owl.owlCarousel({
    loop:true,
    dots:false,
    nav:false,
    margin:10,
    items:6,
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        480:{
            items:2,
            nav:false
        },
        780:{
            items:3,
            nav:false
        },
        991:{
            items:4,
            nav:false
        },
        1400:{
            items:6,
            nav:false,
            loop:true
        }
    }
})  

$(document).ready(function(){
  
  // Custom Button
  $('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  
});

 $('.testimonial-carousel').owlCarousel({
   loop:true,
    margin:10,
    responsiveClass:true,
    nav:true,
    dots:false,
    navText:['<img src="assets/img/leftarrow.svg" alt="">','<img src="assets/img/rightarrow.svg" alt="">'],

    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
})

