/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// app.js\r\nconst operaciones = __webpack_require__(/*! ./modules/operaciones.js */ \"./modules/operaciones.js\");\r\n\r\nfunction calcular() {\r\n  // Obtener los valores ingresados por el usuario\r\n  var num1 = parseFloat(document.getElementById(\"num1\").value);\r\n  var num2 = parseFloat(document.getElementById(\"num2\").value);\r\n  var operador = document.getElementById(\"operador\").value;\r\n  var resultado;\r\n\r\n  // Realizar el cálculo adecuado basado en el operador ingresado\r\n  if (operador === \"+\") {\r\n    resultado = operaciones.sumar(num1, num2);\r\n  } else if (operador === \"-\") {\r\n    resultado = operaciones.restar(num1, num2);\r\n  } else if (operador === \"*\") {\r\n    resultado = operaciones.multiplicar(num1, num2);\r\n  } else if (operador === \"/\") {\r\n    resultado = operaciones.dividir(num1, num2);\r\n  }\r\n\r\n  // Mostrar el resultado en la página\r\n  document.getElementById(\"resultado\").textContent = resultado;\r\n}\r\n\r\n// Exporta la función calcular para poder accederla desde el HTML\r\nwindow.calcular = calcular;\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./modules/operaciones.js":
/*!********************************!*\
  !*** ./modules/operaciones.js ***!
  \********************************/
/***/ ((module) => {

eval("// modules/operaciones.js\r\n\r\nfunction sumar(a, b) {\r\n    return a + b;\r\n  }\r\n  \r\n  function restar(a, b) {\r\n    return a - b;\r\n  }\r\n  \r\n  function multiplicar(a, b) {\r\n    return a * b;\r\n  }\r\n  \r\n  function dividir(a, b) {\r\n    return a / b;\r\n  }\r\n  \r\n  module.exports = {\r\n    sumar,\r\n    restar,\r\n    multiplicar,\r\n    dividir,\r\n  };\r\n  \n\n//# sourceURL=webpack:///./modules/operaciones.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;