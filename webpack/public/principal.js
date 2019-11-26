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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Pessoa.js":
/*!***********************!*\
  !*** ./src/Pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\n/* harmony import */ var _modulos_ModuloA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/ModuloA */ \"./src/modulos/ModuloA.js\");\n/* harmony import */ var _modulos_ModuloA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modulos_ModuloA__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Pessoa {\r\n    cumprimentar(){\r\n        return 'Bom dia';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Pessoa.js?");

/***/ }),

/***/ "./src/Principal.js":
/*!**************************!*\
  !*** ./src/Principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pessoa */ \"./src/Pessoa.js\");\n/* harmony import */ var _assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/estilo.css */ \"./src/assets/css/estilo.css\");\n/* harmony import */ var _assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_estilo_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst atendente = new _Pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconsole.log(atendente.cumprimentar());\n\n//# sourceURL=webpack:///./src/Principal.js?");

/***/ }),

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/modulos/ModuloA.js":
/*!********************************!*\
  !*** ./src/modulos/ModuloA.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduloB = __webpack_require__(/*! ./ModuloB */ \"./src/modulos/ModuloB.js\");\n\n//# sourceURL=webpack:///./src/modulos/ModuloA.js?");

/***/ }),

/***/ "./src/modulos/ModuloB.js":
/*!********************************!*\
  !*** ./src/modulos/ModuloB.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(" module.exports = {\r\n     saudacao() {return 'Olá sou modulo B!';}\r\n }\n\n//# sourceURL=webpack:///./src/modulos/ModuloB.js?");

/***/ })

/******/ });