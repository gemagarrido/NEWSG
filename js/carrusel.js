// CARRUSEL 

$(document).ready(function(){
    let currentIndex = 1;
    const slides = $(".slide");
    let slidesCont = $(".slides");
    let autoSlide;
    let dots = $(".dot");
    

    // función que mostrará el slide correspoondiente a un índice 
    function showSlide(indexSlide) {
        let realIndex = indexSlide -1 
        let percTranslateX = - realIndex * 100; 
        slidesCont.css("transform", "translateX(" + percTranslateX +"%)");
        dots.removeClass("active").eq(realIndex).addClass("active");
    }

    // función para mostrar la anterior slide 
    function prevSlide(){
        currentIndex = currentIndex - 1;
        // currentIndex-=1

        if (currentIndex < 1 ) {
            currentIndex = slides.length;
        }

        showSlide(currentIndex);

    }


    // función para mostrar la siguiente slide 
    function nextSlide(){
        currentIndex = currentIndex + 1;
        // currentIndex +=2;

        if (currentIndex > slides.length) {
            currentIndex = 1;
        }

        showSlide(currentIndex);
    }


    // función para activar el slideshow automático 
    // esta función propia va a usar a su vez una función built-in sertInterval()
    function startAutoSlide(){
        autoSlide = setInterval(nextSlide, 4000);
    }

    // función para detener el slide automático 
    // la llamaremos cuando el usuario interactue con el slideshow 
    // clearInterval()
    function stopAutoslide(){
        clearInterval(autoSlide);
    };

    startAutoSlide();

});
