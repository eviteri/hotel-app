
var carousel_direction = null;
var carousel_auto_play = null;
var carousel = document.querySelector('.carousel-slider');
const carousel_next_button = document.querySelector('.carousel-next-arrow');
const carousel_prev_button = document.querySelector('.carousel-previous-arrow');
const carousel_container = document.querySelector('.carousel-container');

//carousel_container.addEventListener('click', hideCarousel);
carousel_prev_button.addEventListener('click', goToCarouselPrevSlide);
carousel_next_button.addEventListener('click', goToCarouselNextSlide);
carousel.addEventListener('transitionend', carouselTransitionEnded);
carousel.addEventListener('mouseover', stopCarouselAutoPlay);


function showCarousel(){
    document.querySelector('.carousel-container').classList.add('show-carousel');
}

function hideCarousel(){
    document.querySelector('.carousel-container').classList.remove('show-carousel');
}
    
function goToCarouselNextSlide(){
    carousel_direction = -1;
    carousel.style.justifyContent = 'flex-start';
    carousel.style.transform = 'translate(-100%)';  
}

function goToCarouselPrevSlide(){
    if(carousel_direction  === -1){
        carousel.appendChild(carousel.firstElementChild);
        carousel_direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    carousel.style.transform = 'translate(100%)'; 
}

function carouselTransitionEnded(){
    if(carousel_direction === -1){
        carousel.appendChild(carousel.firstElementChild);
    }else{
        carousel.prepend(carousel.lastElementChild);
    }
    
    carousel.style.transition = 'none';
    carousel.style.transform = 'translate(0)';
    setTimeout(function(){
        carousel.style.transition = 'all 0.5s';
    })
}

function triggerCarouselAutoPlay(){
    if(carousel_auto_play == null){
        carousel_auto_play = setInterval(function(){goToCarouselNextSlide()}, 3000);
    }
}

function stopCarouselAutoPlay(){
    if(carousel_auto_play){
        clearInterval(carousel_auto_play);
        carousel_auto_play = null;
    }
    
}