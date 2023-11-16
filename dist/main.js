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

eval("const url = \"http://api.weatherapi.com/v1/current.json?key=ffd100d9b42e4e71aa0162306231211&q=London&aqi=no\"\r\n\r\n//async function to call the API\r\nasync function getWeatherData() {\r\n    try {\r\n        const response = await fetch(url);\r\n        const weatherData = await response.json();\r\n        return weatherData;\r\n    }\r\n    catch (error) {\r\n        alert(error);\r\n    }\r\n}\r\n\r\n//invoke the function\r\nlet weatherData  = getWeatherData();\r\n\r\n//use .then() to capture the results regardless of the promise state.\r\n//Promises are forward direction only; You can only resolve them once. \r\n//The resolved value of a Promise is passed to its .then or .catch methods.\r\nweatherData.then(function(response) {\r\n    console.log(response);\r\n})\r\n\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

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