/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import './components/home';
//import './components/carousel';

/***************************
 *            HOME         *
 ***************************/
var timeoutInMiliseconds = 6000;
var timeoutId; // do some other initialization

setupTimers();

function setupTimers() {
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);
  startTimer();
}

function startTimer() {
  // window.setTimeout returns an Id that can be used to start and stop a timer
  timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds);
}

function resetTimer() {
  window.clearTimeout(timeoutId);
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
var carousel_next_button = document.querySelector('.carousel-next-arrow');
var carousel_prev_button = document.querySelector('.carousel-previous-arrow');
var carousel_container = document.querySelector('.carousel-container');
carousel_container.addEventListener('click', hideCarousel);
carousel_prev_button.addEventListener('click', goToCarouselPrevSlide);
carousel_next_button.addEventListener('click', goToCarouselNextSlide);
carousel.addEventListener('transitionend', carouselTransitionEnded);
carousel.addEventListener('mouseover', stopCarouselAutoPlay);

function showCarousel() {
  carousel_container.classList.add('show-carousel');
}

function hideCarousel(event) {
  var element_id = event.target.id;

  if (element_id == 'carousel') {
    carousel_container.classList.remove('show-carousel');
  }
}

function goToCarouselNextSlide() {
  carousel_direction = -1;
  carousel.style.justifyContent = 'flex-start';
  carousel.style.transform = 'translate(-100%)';
}

function goToCarouselPrevSlide() {
  if (carousel_direction === -1) {
    carousel.appendChild(carousel.firstElementChild);
    carousel_direction = 1;
  }

  carousel.style.justifyContent = 'flex-end';
  carousel.style.transform = 'translate(100%)';
}

function carouselTransitionEnded() {
  if (carousel_direction === -1) {
    carousel.appendChild(carousel.firstElementChild);
  } else {
    carousel.prepend(carousel.lastElementChild);
  }

  carousel.style.transition = 'none';
  carousel.style.transform = 'translate(0)';
  setTimeout(function () {
    carousel.style.transition = 'all 0.5s';
  });
}

function triggerCarouselAutoPlay() {
  if (carousel_auto_play == null) {
    carousel_auto_play = setInterval(function () {
      goToCarouselNextSlide();
    }, 3000);
  }
}

function stopCarouselAutoPlay() {
  if (carousel_auto_play) {
    clearInterval(carousel_auto_play);
    carousel_auto_play = null;
  }
}

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eloy.viteri/Documents/github-repos/hotel-app/src/assets/js/main.js */"./src/assets/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInRpbWVvdXRJbk1pbGlzZWNvbmRzIiwidGltZW91dElkIiwic2V0dXBUaW1lcnMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldFRpbWVyIiwic3RhcnRUaW1lciIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJkb0luYWN0aXZlIiwiY2xlYXJUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsInNob3dDYXJvdXNlbCIsInRyaWdnZXJDYXJvdXNlbEF1dG9QbGF5IiwiY2Fyb3VzZWxfZGlyZWN0aW9uIiwiY2Fyb3VzZWxfYXV0b19wbGF5IiwiY2Fyb3VzZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2Fyb3VzZWxfbmV4dF9idXR0b24iLCJjYXJvdXNlbF9wcmV2X2J1dHRvbiIsImNhcm91c2VsX2NvbnRhaW5lciIsImhpZGVDYXJvdXNlbCIsImdvVG9DYXJvdXNlbFByZXZTbGlkZSIsImdvVG9DYXJvdXNlbE5leHRTbGlkZSIsImNhcm91c2VsVHJhbnNpdGlvbkVuZGVkIiwic3RvcENhcm91c2VsQXV0b1BsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJldmVudCIsImVsZW1lbnRfaWQiLCJ0YXJnZXQiLCJpZCIsInJlbW92ZSIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJ0cmFuc2Zvcm0iLCJhcHBlbmRDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwicHJlcGVuZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJ0cmFuc2l0aW9uIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FB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cUI7QUFBRyxLQUFwQyxFQUFzQyxJQUF0QyxDQUFoQztBQUNIO0FBQ0o7O0FBRUQsU0FBU0Usb0JBQVQsR0FBK0I7QUFDM0IsTUFBR1Ysa0JBQUgsRUFBc0I7QUFDbEIyQixpQkFBYSxDQUFDM0Isa0JBQUQsQ0FBYjtBQUNBQSxzQkFBa0IsR0FBRyxJQUFyQjtBQUNIO0FBRUosQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy9pbXBvcnQgJy4vY29tcG9uZW50cy9ob21lJztcbi8vaW1wb3J0ICcuL2NvbXBvbmVudHMvY2Fyb3VzZWwnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiAgICAgICAgICAgIEhPTUUgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xudmFyIHRpbWVvdXRJbk1pbGlzZWNvbmRzID0gNjAwMDtcbnZhciB0aW1lb3V0SWQ7IFxuICAgXG4vLyBkbyBzb21lIG90aGVyIGluaXRpYWxpemF0aW9uXG5zZXR1cFRpbWVycygpO1xuXG5mdW5jdGlvbiBzZXR1cFRpbWVycyAoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCByZXNldFRpbWVyLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCByZXNldFRpbWVyLCBmYWxzZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHJlc2V0VGltZXIsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHJlc2V0VGltZXIsIGZhbHNlKTtcbiAgICAgXG4gICAgc3RhcnRUaW1lcigpO1xufVxuXG5mdW5jdGlvbiBzdGFydFRpbWVyKCkgeyBcbiAgICAvLyB3aW5kb3cuc2V0VGltZW91dCByZXR1cm5zIGFuIElkIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3RhcnQgYW5kIHN0b3AgYSB0aW1lclxuICAgIHRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGRvSW5hY3RpdmUsIHRpbWVvdXRJbk1pbGlzZWNvbmRzKVxufVxuXG5mdW5jdGlvbiByZXNldFRpbWVyKCkgeyBcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgICBzdGFydFRpbWVyKCk7XG59XG5cbmZ1bmN0aW9uIGRvSW5hY3RpdmUoKSB7XG4gICAgLy8gZG9lcyB3aGF0ZXZlciB5b3UgbmVlZCBpdCB0byBhY3R1YWxseSBkbyAtIHByb2JhYmx5IHNpZ25zIHRoZW0gb3V0IG9yIHN0b3BzIHBvbGxpbmcgdGhlIHNlcnZlciBmb3IgaW5mb1xuICAgIGNvbnNvbGUubG9nKCd1c2VyIGlzIGluYWN0aXZlJyk7XG4gICAgc2hvd0Nhcm91c2VsKCk7ICAgXG4gICAgdHJpZ2dlckNhcm91c2VsQXV0b1BsYXkoKTtcbiAgICBcbn1cblxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqICAgICAgICAgIENBUk9VU0VMICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgY2Fyb3VzZWxfZGlyZWN0aW9uID0gbnVsbDtcbnZhciBjYXJvdXNlbF9hdXRvX3BsYXkgPSBudWxsO1xudmFyIGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLXNsaWRlcicpO1xuY29uc3QgY2Fyb3VzZWxfbmV4dF9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtbmV4dC1hcnJvdycpO1xuY29uc3QgY2Fyb3VzZWxfcHJldl9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtcHJldmlvdXMtYXJyb3cnKTtcbmNvbnN0IGNhcm91c2VsX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250YWluZXInKTtcblxuY2Fyb3VzZWxfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUNhcm91c2VsKTtcbmNhcm91c2VsX3ByZXZfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub0Nhcm91c2VsUHJldlNsaWRlKTtcbmNhcm91c2VsX25leHRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ub0Nhcm91c2VsTmV4dFNsaWRlKTtcbmNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjYXJvdXNlbFRyYW5zaXRpb25FbmRlZCk7XG5jYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzdG9wQ2Fyb3VzZWxBdXRvUGxheSk7XG5cblxuZnVuY3Rpb24gc2hvd0Nhcm91c2VsKCl7XG4gICAgY2Fyb3VzZWxfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctY2Fyb3VzZWwnKTtcbn1cblxuZnVuY3Rpb24gaGlkZUNhcm91c2VsKGV2ZW50KXtcbiAgICB2YXIgZWxlbWVudF9pZCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICBpZihlbGVtZW50X2lkID09ICdjYXJvdXNlbCcpe1xuICAgICAgICBjYXJvdXNlbF9jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1jYXJvdXNlbCcpO1xuICAgIH1cbn1cbiAgICBcbmZ1bmN0aW9uIGdvVG9DYXJvdXNlbE5leHRTbGlkZSgpe1xuICAgIGNhcm91c2VsX2RpcmVjdGlvbiA9IC0xO1xuICAgIGNhcm91c2VsLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTEwMCUpJzsgIFxufVxuXG5mdW5jdGlvbiBnb1RvQ2Fyb3VzZWxQcmV2U2xpZGUoKXtcbiAgICBpZihjYXJvdXNlbF9kaXJlY3Rpb24gID09PSAtMSl7XG4gICAgICAgIGNhcm91c2VsLmFwcGVuZENoaWxkKGNhcm91c2VsLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgY2Fyb3VzZWxfZGlyZWN0aW9uID0gMTtcbiAgICB9XG4gICAgY2Fyb3VzZWwuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnZmxleC1lbmQnO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMTAwJSknOyBcbn1cblxuZnVuY3Rpb24gY2Fyb3VzZWxUcmFuc2l0aW9uRW5kZWQoKXtcbiAgICBpZihjYXJvdXNlbF9kaXJlY3Rpb24gPT09IC0xKXtcbiAgICAgICAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1lbHNle1xuICAgICAgICBjYXJvdXNlbC5wcmVwZW5kKGNhcm91c2VsLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCknO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC41cyc7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdHJpZ2dlckNhcm91c2VsQXV0b1BsYXkoKXtcbiAgICBpZihjYXJvdXNlbF9hdXRvX3BsYXkgPT0gbnVsbCl7XG4gICAgICAgIGNhcm91c2VsX2F1dG9fcGxheSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7Z29Ub0Nhcm91c2VsTmV4dFNsaWRlKCl9LCAzMDAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN0b3BDYXJvdXNlbEF1dG9QbGF5KCl7XG4gICAgaWYoY2Fyb3VzZWxfYXV0b19wbGF5KXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjYXJvdXNlbF9hdXRvX3BsYXkpO1xuICAgICAgICBjYXJvdXNlbF9hdXRvX3BsYXkgPSBudWxsO1xuICAgIH1cbiAgICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=