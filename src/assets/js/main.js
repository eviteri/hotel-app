const hamburger = document.querySelector('.ndm-hamburger-wrapper') ? document.querySelector('.ndm-hamburger-wrapper') : null;
const nav_wrapper = document.querySelector('.ndm-main-menu') ? document.querySelector('.ndm-main-menu') : null;
let is_menu_open = false;

if(hamburger && nav_wrapper){
    hamburger.addEventListener('click', function(){ toogleMenu() });
}

const toogleMenu = () => {
    if(is_menu_open){
        hamburger.classList.remove('change');
        nav_wrapper.classList.remove('show-ndm-main-menu');
    }else{
        hamburger.classList.add('change');
        nav_wrapper.classList.add('show-ndm-main-menu');
    }
    is_menu_open = !is_menu_open;
}

var gw_widget_body_width = 0;
var gw_widget_call_loop_function = false;
var gw_widget_window_scroll = window.requestAnimationFrame || function(callback){window.setTimeout(callback, 100/60)};
var gw_widget_elements_to_show = document.querySelectorAll('.ndm-wall-gallery-item');

window.addEventListener('resize', function(){setWallGalleryWidgetWith()})
window.addEventListener('load', function(){setWallGalleryWidgetWith()})

function setWallGalleryWidgetWith(){
    gw_widget_body_width = document.querySelector('body').clientWidth;
    gw_widget_call_loop_function = gw_widget_body_width < 378 ? true : false;
    if(gw_widget_body_width < 378 && gw_widget_call_loop_function){
        walleryWidgetLoop();
    }
}

function walleryWidgetLoop(){
    gw_widget_elements_to_show.forEach(function(element){
        if(walleryWidgetIsElementInViewPort(element)){
            element.classList.add('ndm-wall-gallery-item-show');
        }else{
            element.classList.remove('ndm-wall-gallery-item-show')
        }
    });
    gw_widget_window_scroll(walleryWidgetLoop);
}

// Helper function from: http://stackoverflow.com/a/7557433/274826
function walleryWidgetIsElementInViewPort(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

