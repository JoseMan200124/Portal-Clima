/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})




/*================= Landing page animación ===================*/

     $(document).ready(function() {
	setTimeout(function() {
		$("#main").removeClass("is-loading");
	}, 100)
});

      $(document).ready(function() {
	setTimeout(function() {
		$("#alerta").removeClass("is-loading");
	}, 100)
});
        
    
        $(document).ready(function() {
	setTimeout(function() {
		$("#clima").removeClass("is-loading");
	}, 100)
});
        
      
        $(document).ready(function() {
	setTimeout(function() {
		$("#pronostico").removeClass("is-loading");
	}, 100)
});
        
    $(document).ready(function() {
	setTimeout(function() {
		$("#historico").removeClass("is-loading");
	}, 100)
});
        
      
        $(document).ready(function() {
	setTimeout(function() {
		$("#huracan").removeClass("is-loading");
	}, 100)
});

        
        $(document).ready(function() {
	setTimeout(function() {
		$("#nosotros").removeClass("is-loading");
	}, 100)
});

   $(document).ready(function() {
	setTimeout(function() {
		$("#pronostico").removeClass("is-loading");
	}, 100)
});

     $(document).ready(function() {
	setTimeout(function() {
		$("#pronosticoEstaciones").removeClass("is-loading");
	}, 100)
});
        


/*================== SLIDER DE IMAGENES =======================*/

 var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();



