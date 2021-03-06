//import './components/home';
//import './components/carousel';

/***************************
 *            HOME         *
 ***************************/
var timeoutInMiliseconds = 6000;
var timeoutId; 
   
// do some other initialization
setupTimers();

function setupTimers () {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
     
    startTimer();
}

function startTimer() { 
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}

function resetTimer() { 
    window.clearTimeout(timeoutId)
    startTimer();
}

function doInactive() {
    // does whatever you need it to actually do - probably signs them out or stops polling the server for info
    console.log('user is inactive');
    showCarousel();   
    triggerCarouselAutoPlay();
    
}

 /***************************
 *          CAROUSEL        *
 ***************************/

var carousel_direction = null;
var carousel_auto_play = null;
var carousel = document.querySelector('.carousel-slider');
const carousel_next_button = document.querySelector('.carousel-next-arrow');
const carousel_prev_button = document.querySelector('.carousel-previous-arrow');
const carousel_container = document.querySelector('.carousel-container');

carousel_container.addEventListener('click', hideCarousel);
carousel_prev_button.addEventListener('click', goToCarouselPrevSlide);
carousel_next_button.addEventListener('click', goToCarouselNextSlide);
carousel.addEventListener('transitionend', carouselTransitionEnded);
carousel.addEventListener('mouseover', stopCarouselAutoPlay);


function showCarousel(){
    carousel_container.classList.add('show-carousel');
}

function hideCarousel(event){
    var element_id = event.target.id;
    if(element_id == 'carousel'){
        carousel_container.classList.remove('show-carousel');
    }
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
