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

var hamburger = document.querySelector('.ndm-hamburger-wrapper') ? document.querySelector('.ndm-hamburger-wrapper') : null;
var nav_wrapper = document.querySelector('.ndm-main-menu') ? document.querySelector('.ndm-main-menu') : null;
var is_menu_open = false;

if (hamburger && nav_wrapper) {
  hamburger.addEventListener('click', function () {
    toogleMenu();
  });
}

var toogleMenu = function toogleMenu() {
  if (is_menu_open) {
    hamburger.classList.remove('change');
    nav_wrapper.classList.remove('show-ndm-main-menu');
  } else {
    hamburger.classList.add('change');
    nav_wrapper.classList.add('show-ndm-main-menu');
  }

  is_menu_open = !is_menu_open;
};

var gw_widget_body_width = 0;
var gw_widget_call_loop_function = false;

var gw_widget_window_scroll = window.requestAnimationFrame || function (callback) {
  window.setTimeout(callback, 100 / 60);
};

var gw_widget_elements_to_show = document.querySelectorAll('.ndm-wall-gallery-item');
window.addEventListener('resize', function () {
  setWallGalleryWidgetWith();
});
window.addEventListener('load', function () {
  setWallGalleryWidgetWith();
});

function setWallGalleryWidgetWith() {
  gw_widget_body_width = document.querySelector('body').clientWidth;
  gw_widget_call_loop_function = gw_widget_body_width < 378 ? true : false;

  if (gw_widget_body_width < 378 && gw_widget_call_loop_function) {
    walleryWidgetLoop();
  }
}

function walleryWidgetLoop() {
  gw_widget_elements_to_show.forEach(function (element) {
    if (walleryWidgetIsElementInViewPort(element)) {
      element.classList.add('ndm-wall-gallery-item-show');
    } else {
      element.classList.remove('ndm-wall-gallery-item-show');
    }
  });
  gw_widget_window_scroll(walleryWidgetLoop);
} // Helper function from: http://stackoverflow.com/a/7557433/274826


function walleryWidgetIsElementInViewPort(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();
  return rect.top <= 0 && rect.bottom >= 0 || rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight) || rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdl93cmFwcGVyIiwiaXNfbWVudV9vcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvb2dsZU1lbnUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJnd193aWRnZXRfYm9keV93aWR0aCIsImd3X3dpZGdldF9jYWxsX2xvb3BfZnVuY3Rpb24iLCJnd193aWRnZXRfd2luZG93X3Njcm9sbCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImd3X3dpZGdldF9lbGVtZW50c190b19zaG93IiwicXVlcnlTZWxlY3RvckFsbCIsInNldFdhbGxHYWxsZXJ5V2lkZ2V0V2l0aCIsImNsaWVudFdpZHRoIiwid2FsbGVyeVdpZGdldExvb3AiLCJmb3JFYWNoIiwiZWxlbWVudCIsIndhbGxlcnlXaWRnZXRJc0VsZW1lbnRJblZpZXdQb3J0IiwiZWwiLCJqUXVlcnkiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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Q0EsU0FBU0csZ0NBQVQsQ0FBMENDLEVBQTFDLEVBQThDO0FBQzFDO0FBQ0EsTUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDRCxFQUFFLFlBQVlDLE1BQWxELEVBQTBEO0FBQ3RERCxNQUFFLEdBQUdBLEVBQUUsQ0FBQyxDQUFELENBQVA7QUFDSDs7QUFDRCxNQUFJRSxJQUFJLEdBQUdGLEVBQUUsQ0FBQ0cscUJBQUgsRUFBWDtBQUNBLFNBQ0tELElBQUksQ0FBQ0UsR0FBTCxJQUFZLENBQVosSUFDTUYsSUFBSSxDQUFDRyxNQUFMLElBQWUsQ0FEdEIsSUFHQ0gsSUFBSSxDQUFDRyxNQUFMLEtBQWdCakIsTUFBTSxDQUFDa0IsV0FBUCxJQUFzQjlCLFFBQVEsQ0FBQytCLGVBQVQsQ0FBeUJDLFlBQS9ELEtBQ0dOLElBQUksQ0FBQ0UsR0FBTCxLQUFhaEIsTUFBTSxDQUFDa0IsV0FBUCxJQUFzQjlCLFFBQVEsQ0FBQytCLGVBQVQsQ0FBeUJDLFlBQTVELENBSkosSUFNQ04sSUFBSSxDQUFDRSxHQUFMLElBQVksQ0FBWixJQUNHRixJQUFJLENBQUNHLE1BQUwsS0FBZ0JqQixNQUFNLENBQUNrQixXQUFQLElBQXNCOUIsUUFBUSxDQUFDK0IsZUFBVCxDQUF5QkMsWUFBL0QsQ0FSUjtBQVVILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZG0taGFtYnVyZ2VyLXdyYXBwZXInKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZG0taGFtYnVyZ2VyLXdyYXBwZXInKSA6IG51bGw7XG5jb25zdCBuYXZfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZG0tbWFpbi1tZW51JykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmRtLW1haW4tbWVudScpIDogbnVsbDtcbmxldCBpc19tZW51X29wZW4gPSBmYWxzZTtcblxuaWYoaGFtYnVyZ2VyICYmIG5hdl93cmFwcGVyKXtcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpeyB0b29nbGVNZW51KCkgfSk7XG59XG5cbmNvbnN0IHRvb2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgaWYoaXNfbWVudV9vcGVuKXtcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2NoYW5nZScpO1xuICAgICAgICBuYXZfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW5kbS1tYWluLW1lbnUnKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2NoYW5nZScpO1xuICAgICAgICBuYXZfd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaG93LW5kbS1tYWluLW1lbnUnKTtcbiAgICB9XG4gICAgaXNfbWVudV9vcGVuID0gIWlzX21lbnVfb3Blbjtcbn1cblxudmFyIGd3X3dpZGdldF9ib2R5X3dpZHRoID0gMDtcbnZhciBnd193aWRnZXRfY2FsbF9sb29wX2Z1bmN0aW9uID0gZmFsc2U7XG52YXIgZ3dfd2lkZ2V0X3dpbmRvd19zY3JvbGwgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKXt3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwLzYwKX07XG52YXIgZ3dfd2lkZ2V0X2VsZW1lbnRzX3RvX3Nob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmRtLXdhbGwtZ2FsbGVyeS1pdGVtJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe3NldFdhbGxHYWxsZXJ5V2lkZ2V0V2l0aCgpfSlcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtzZXRXYWxsR2FsbGVyeVdpZGdldFdpdGgoKX0pXG5cbmZ1bmN0aW9uIHNldFdhbGxHYWxsZXJ5V2lkZ2V0V2l0aCgpe1xuICAgIGd3X3dpZGdldF9ib2R5X3dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoO1xuICAgIGd3X3dpZGdldF9jYWxsX2xvb3BfZnVuY3Rpb24gPSBnd193aWRnZXRfYm9keV93aWR0aCA8IDM3OCA/IHRydWUgOiBmYWxzZTtcbiAgICBpZihnd193aWRnZXRfYm9keV93aWR0aCA8IDM3OCAmJiBnd193aWRnZXRfY2FsbF9sb29wX2Z1bmN0aW9uKXtcbiAgICAgICAgd2FsbGVyeVdpZGdldExvb3AoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHdhbGxlcnlXaWRnZXRMb29wKCl7XG4gICAgZ3dfd2lkZ2V0X2VsZW1lbnRzX3RvX3Nob3cuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgaWYod2FsbGVyeVdpZGdldElzRWxlbWVudEluVmlld1BvcnQoZWxlbWVudCkpe1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCduZG0td2FsbC1nYWxsZXJ5LWl0ZW0tc2hvdycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmRtLXdhbGwtZ2FsbGVyeS1pdGVtLXNob3cnKVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgZ3dfd2lkZ2V0X3dpbmRvd19zY3JvbGwod2FsbGVyeVdpZGdldExvb3ApO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gZnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzU1NzQzMy8yNzQ4MjZcbmZ1bmN0aW9uIHdhbGxlcnlXaWRnZXRJc0VsZW1lbnRJblZpZXdQb3J0KGVsKSB7XG4gICAgLy8gc3BlY2lhbCBib251cyBmb3IgdGhvc2UgdXNpbmcgalF1ZXJ5XG4gICAgaWYgKHR5cGVvZiBqUXVlcnkgPT09IFwiZnVuY3Rpb25cIiAmJiBlbCBpbnN0YW5jZW9mIGpRdWVyeSkge1xuICAgICAgICBlbCA9IGVsWzBdO1xuICAgIH1cbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIChyZWN0LnRvcCA8PSAwXG4gICAgICAgICAgICAmJiByZWN0LmJvdHRvbSA+PSAwKVxuICAgICAgICB8fFxuICAgICAgICAocmVjdC5ib3R0b20gPj0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgICAgICAgcmVjdC50b3AgPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSlcbiAgICAgICAgfHxcbiAgICAgICAgKHJlY3QudG9wID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkpXG4gICAgKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==