/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() \n{\n    const contactInformation = document.createElement('div');\n    contactInformation.classList.add('contact')\n\n    const phoneNumber = document.createElement('p')\n    phoneNumber.textContent = '📞 +48 123 456 789';\n\n    const address = document.createElement('p')\n    address.textContent = 'Nowogrodzka 47A, Warszawa 00-686';\n\n    const facebook = document.createElement('p')\n    facebook.textContent = 'facebook.com/GigaKoksBurger/';\n\n    const instagram = document.createElement('p')\n    instagram.textContent = 'Instagram - @GigaKoksBurger';\n\n    const locationMap = document.createElement('img');\n    locationMap.src = 'images/location.png';\n    locationMap.alt = 'Giga Koks Burgir location';\n\n    contactInformation.appendChild(phoneNumber);\n    contactInformation.appendChild(facebook);\n    contactInformation.appendChild(instagram);\n    contactInformation.appendChild(address);\n    contactInformation.appendChild(locationMap);\n\n    return contactInformation;\n}\n\nfunction initializeContact()\n{\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome()\n{\n    const home = document.createElement('div');\n    home.classList.add('home');\n    \n    home.appendChild(createText('Best burgirs in Laczki Brzeskie'));\n    home.appendChild(createText('Only freshest ingredients'));\n\n    const orderButton = document.createElement('button');\n    orderButton.classList.add('order-btn');\n    orderButton.textContent = 'order';\n    \n    home.appendChild(orderButton);\n    home.appendChild(createInfo());\n\n    return home;\n}\n\nfunction createText(text) \n{\n    const para = document.createElement('p')\n    para.textContent = text;\n\n    return para;\n}\n\nfunction createInfo()\n{\n    const info = document.createElement('div');\n    info.classList.add('info')\n    info.appendChild(createAddress());\n    info.appendChild(createHours());\n\n    return info;\n}\n\nfunction createAddress() \n{\n    const address = document.createElement('div');\n    address.classList.add('addres');\n    address.appendChild(createText('')).innerHTML = 'Nowogrodzka 47A <br> Warszawa 00-686';\n\n    return address;\n}\n\nfunction createHours()\n{\n    const hours = document.createElement('div');\n    hours.classList.add('hours');\n    hours.appendChild(createText('')).innerHTML = '<span>Mon-Fri </span>\"8am - 8pm\"<br><span>Sat-Sun </span>\"8am - 11pm\"';\n\n    return hours;\n}\n\nfunction initializeHome()\n{\n    const main = document.querySelector('.main');\n    main.textContent = '';\n    main.appendChild(createHome());\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-site */ \"./src/main-site.js\");\n\n\n(0,_main_site__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconsole.log('Hello does this work')\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main-site.js":
/*!**************************!*\
  !*** ./src/main-site.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader()\n{\n    const header = document.createElement('header')\n    header.classList.add('header')\n\n    const restName = document.createElement('h1')\n    restName.classList.add('rest-name');\n    restName.textContent = 'Giga Koks Burgir';\n\n    header.appendChild(restName);\n    header.appendChild(createNavButtons());\n\n    return header;\n}\n\nfunction createNavButtons() \n{\n    const nav = document.createElement('nav');\n\n    const homeButton = document.createElement('button');\n    homeButton.classList.add('nav-btn', 'home-btn');\n    homeButton.textContent = 'Home'\n    homeButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const menuButton = document.createElement('button');\n    menuButton.classList.add('nav-btn', 'menu-btn');\n    menuButton.textContent = 'Menu'\n    menuButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(menuButton);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    const contactButton = document.createElement('button');\n    contactButton.classList.add('nav-btn', 'contact-btn');\n    contactButton.textContent = 'Contact'\n    contactButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    \n\n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(contactButton);\n\n    return nav;\n}\n\nfunction setActiveButton(button)\n{\n    const buttons = document.querySelectorAll('.nav-btn');\n\n    buttons.forEach((button) => {\n        if (button !== this)\n        {\n            button.classList.remove('active')\n        }\n    });\n\n    button.classList.add('active');\n}\n\nfunction createMainContent()\n{\n    const main = document.createElement('main');\n    main.classList.add('main');\n\n    return main;\n}\n\nfunction createFooter() \n{\n    const footer = document.createElement('footer')\n    footer.classList.add('footer');\n\n    const signature = document.createElement('p');\n    signature.textContent = 'GBN6@2022';\n\n    footer.appendChild(signature);\n\n    return footer;\n}\n\nfunction startWebsite()\n{\n    const wholePage = document.querySelector('#content')\n    wholePage.appendChild(createHeader());\n    wholePage.appendChild(createMainContent());\n    wholePage.appendChild(createFooter());\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/main-site.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createBurgerMenu()\n{\n    const burgerMenu = document.createElement('div')\n    burgerMenu.classList.add('menu');\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'Hamburger',\n            'Burger Bun, Beef Patty(200g), Lettuce, Tomatoes, Sauce'\n        )\n    );\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'Cheese Burger',\n            'Burger Bun, Beef Patty(200g),Cheese Slice, Onions, Sauce'\n        )\n    );\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'Chicken Burger',\n            'Burger Bun, Chicken Filet(200g),Cheese Slice, Lettuce, Sauce'\n        )\n    );\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'Mexican Burger',\n            'Burger Bun, Beef Patty(200g), Nachos, Cheese Slice, Lettuce, Onions, Hot Sauce'\n        )\n    );\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'Double Burger',\n            'Burger Bun, Double Beef Patty(200g), Cheese Slice, Lettuce, Onions, Tomatoes, Sauce'\n        )\n    );\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'Village Burger',\n            'Grain Burger Bun, Beef Patty(200g), Tomatoes, Cheese Slice, Lettuce, Onions, Pickles, Sauce'\n        )\n    );\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'French Fries',\n            'French Fries, Salt, Ketchup'\n        )\n    );\n\n    burgerMenu.appendChild(\n        createMenuTile(\n            'Nachos',\n            'Nachos, Cheese, Sauce'\n        )\n    );\n\n    return burgerMenu;\n}\n\nfunction createMenuTile(name, info)\n{\n    const menuTile = document.createElement('div');\n    menuTile.classList.add('menu-tile');\n\n    const burgerName = document.createElement('h2');\n    burgerName.textContent = name;\n\n    const burgerInfo = document.createElement('p')\n    burgerInfo.textContent = info;\n\n    const burgerImage = document.createElement('img');\n    burgerImage.src = `images/burgers/${name.split(' ').join('').toLowerCase()}.png`;\n    burgerImage.alt = `${name}`;\n\n    menuTile.appendChild(burgerImage);\n    menuTile.appendChild(burgerName);\n    menuTile.appendChild(burgerInfo);\n\n    return menuTile;\n} \n\nfunction initializeMenu()\n{\n    const main = document.querySelector('.main')\n    main.textContent = \"\";\n    main.appendChild(createBurgerMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;