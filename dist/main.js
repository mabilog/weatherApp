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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function call() {\r\n  return (async () => {\r\n    const city = 'montreal';\r\n    console.log(city);\r\n    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${\"fd924f95635e1935b5fa084c746c3b1d\"}`, { mode: 'cors' });\r\n    console.log(response);\r\n    console.log('hello');\r\n    const data = await response.json();\r\n    console.log(data);\r\n  })\r\n}\r\n\r\ncall();\r\n\r\nconsole.log('hello?');\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;