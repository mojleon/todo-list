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

/***/ "./node_modules/webpack/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/webpack/lib/index.js ***!
  \*******************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Damir\\\\Desktop\\\\OdinProject\\\\todo-list\\\\node_modules\\\\webpack\\\\lib\\\\index.js'\");\n\n//# sourceURL=webpack://todo-list/./node_modules/webpack/lib/index.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventListeners\": () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"./node_modules/webpack/lib/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\n\r\nclass eventListeners {\r\n  constructor() {\r\n    this.buttons = document.querySelectorAll(\"button\");\r\n    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_1__.storage();\r\n    this.visibleInput = false;\r\n  }\r\n\r\n  addEventListenerToElement(id, element) {\r\n    element.addEventListener(\"change\", (e) => {\r\n      if (id.includes(\"checkbox\")) localStorage.setItem(id, e.target.checked);\r\n      else localStorage.setItem(id, e.target.value);\r\n    });\r\n  }\r\n\r\n  domButtons() {\r\n    this.buttons.forEach((button) => {\r\n      button.addEventListener(\"click\", (e) => {\r\n        e.stopImmediatePropagation();\r\n\r\n        if (e.target.dataset.type.includes(\"input\"))\r\n          this.showInput(e.target.dataset.type);\r\n      });\r\n    });\r\n  }\r\n\r\n  showInput(inputType) {\r\n    if (inputType === \"add-task-input\") this.showTaskInput();\r\n    if (inputType === \"add-project-input\") this.showProjectInput();\r\n  }\r\n\r\n  addInput(container) {\r\n    const input = document.createElement(\"input\");\r\n    input.classList.add(\"input\");\r\n    container.appendChild(input);\r\n  }\r\n\r\n  addButton(container, text, backgroundColor, type) {\r\n    const button = document.createElement(\"button\");\r\n    button.innerHTML = text;\r\n    button.id = type;\r\n    button.style.backgroundColor = backgroundColor;\r\n    container.appendChild(button);\r\n\r\n    button.addEventListener(\"click\", (e) => {\r\n      e.stopImmediatePropagation();\r\n      const value = document.querySelector(\".input\").value;\r\n      if (type === \"add_task\") this.storage.addList(value, type);\r\n      if (type === \"cancel_adding_task\") this.enableButton();\r\n    });\r\n  }\r\n\r\n  enableButton() {\r\n    this.visibleInput = false;\r\n\r\n    console.log(document.querySelector(\".add-input\"));\r\n    // document.querySelector(`.add-input`).remove();\r\n    // document\r\n    //   .querySelector(`button[data-type='add-input']`)\r\n    //   .classList.remove(\"disabled\");\r\n\r\n    localStorage.clear();\r\n  }\r\n\r\n  showTaskInput() {\r\n    if (this.visibleInput) return;\r\n    this.visibleInput = true;\r\n\r\n    document\r\n      .querySelector(\"button[data-type='add-task-input']\")\r\n      .classList.add(\"disabled\");\r\n\r\n    const main = document.querySelector(\".tasks\");\r\n\r\n    const container = this.createContainer();\r\n\r\n    main.appendChild(container);\r\n\r\n    this.addInput(container);\r\n\r\n    this.addInputControls(container, \"task\");\r\n  }\r\n\r\n  showProjectInput() {\r\n    const main = document.querySelector(\".projects\");\r\n    const container = this.createContainer();\r\n\r\n    main.appendChild(container);\r\n\r\n    this.addInput(container);\r\n\r\n    this.addInputControls(container, \"project\");\r\n  }\r\n\r\n  addInputControls(container, type) {\r\n    const flexButtons = document.createElement(\"div\");\r\n    flexButtons.classList.add(\"flex-buttons\");\r\n    container.appendChild(flexButtons);\r\n    this.addButton(\r\n      flexButtons,\r\n      \"ADD \" + type.toUpperCase(),\r\n      \"#9ACD32\",\r\n      \"add_\" + type\r\n    );\r\n    this.addButton(flexButtons, \"CANCEL\", \"red\", \"cancel_adding_\" + type);\r\n  }\r\n\r\n  createContainer() {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"add-input\");\r\n    return container;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\nfunction component() {\r\n  const element = document.createElement(\"div\");\r\n\r\n  // Lodash, currently included via a script, is required for this line to work\r\n  element.innerHTML = _.join([\"Hello\", \"webpack\"], \" \");\r\n\r\n  return element;\r\n}\r\n\r\n// document.body.appendChild(component());\r\n\r\nlet pageBuilder = new _setup__WEBPACK_IMPORTED_MODULE_0__.setup();\r\n\r\npageBuilder.navbar();\r\npageBuilder.createContent();\r\n\r\nlet eListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_1__.eventListeners();\r\neListeners.domButtons();\r\n\r\nconst localStorage = new _storage__WEBPACK_IMPORTED_MODULE_2__.storage();\r\nlocalStorage.updateTasks();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\nclass setup {\r\n  constructor() {\r\n    this.body = document.querySelector(\"body\");\r\n  }\r\n\r\n  navbar() {\r\n    const nav = document.createElement(\"nav\");\r\n    nav.innerHTML = \"<img src='../assets/images/logo.svg'><h1>TO-DO</h1>\";\r\n    this.body.appendChild(nav);\r\n  }\r\n\r\n  createContent() {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"container\");\r\n    this.body.appendChild(container);\r\n\r\n    this.sideBar(container);\r\n    this.main(container);\r\n    this.footer(container);\r\n  }\r\n\r\n  sideBar(container) {\r\n    const sideBar = document.createElement(\"div\");\r\n    sideBar.classList.add(\"sidebar\");\r\n    sideBar.innerHTML = `<h2>SIDEBAR</h2>\r\n      <li><button data-type='inbox'><img src='../assets/images/icons/inbox.svg'> INBOX</button></li>\r\n      <li><button data-type='today'><img src='../assets/images/icons/calendar-today.svg'> TODAY</button></li>\r\n      <li><button data-type='this_week'><img src='../assets/images/icons/calendar-week.svg'> THIS WEEK</button></li>\r\n      <h2>PROJECTS</h2>\r\n      <div class=\"projects\">\r\n        <button data-type='add-project-input'><img src='../assets/images/icons/plus-small.svg'> ADD PROJECT</button>\r\n      </div>\r\n      `;\r\n    container.appendChild(sideBar);\r\n  }\r\n\r\n  main(container) {\r\n    const main = document.createElement(\"div\");\r\n    main.classList.add(\"tasks\");\r\n    main.innerHTML = `<h2>Main</h2>\r\n    <ul class='content'></ul>\r\n    <button data-type='add-task-input'>\r\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M13.0741 6.00299L7.99703 6.00299V0.925964H6.00299V6.00299L0.925964 6.00299L0.925964 7.99703H6.00299V13.0741H7.99703V7.99703H13.0741V6.00299Z\"/>\r\n    </svg>\r\n    ADD TASK</button>`;\r\n    container.appendChild(main);\r\n  }\r\n\r\n  footer() {\r\n    const footer = document.createElement(\"footer\");\r\n    footer.innerHTML = \"<p>Footer</p>\";\r\n    this.body.appendChild(footer);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/setup.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\r\n\r\nclass storage {\r\n  constructor() {}\r\n\r\n  addList(value, type) {\r\n    console.log(value, type);\r\n    localStorage.setItem(`task_${localStorage.getItem(\"taskNumber\")}`, value);\r\n    this.incrementListNumber();\r\n    this.updateTasks(value);\r\n  }\r\n\r\n  incrementListNumber() {\r\n    let taskNumber =\r\n      localStorage.getItem(\"taskNumber\") !== null\r\n        ? parseInt(localStorage.getItem(\"taskNumber\"))\r\n        : 0;\r\n    taskNumber += 1;\r\n    localStorage.setItem(\"taskNumber\", taskNumber);\r\n  }\r\n\r\n  updateTasks(value) {\r\n    let storageKeys = Object.keys(localStorage).filter((e) =>\r\n      e.includes(\"task_\")\r\n    );\r\n\r\n    const eventListenersClass = new _eventListeners__WEBPACK_IMPORTED_MODULE_0__.eventListeners();\r\n\r\n    const content = document.querySelector(\".content\");\r\n\r\n    for (let i = 0; i <= storageKeys.length; i++) {\r\n      if (document.querySelector(\"#task_\" + i)) continue;\r\n      const index = i == 0 ? \"null\" : i;\r\n      this.appendTask(\r\n        \"task_\" + i,\r\n        localStorage.getItem(\"task_\" + index),\r\n        content,\r\n        eventListenersClass\r\n      );\r\n    }\r\n    // const content = document.querySelector(\".content\");\r\n    // const element = document.createElement(\"li\");\r\n    // element.innerHTML = task;\r\n    // content.append(element);\r\n  }\r\n\r\n  appendTask(id, task, content, eventListeners) {\r\n    if (task === null) return;\r\n    let element = document.createElement(\"li\");\r\n\r\n    const checkbox = this.createCheckbox(id, eventListeners);\r\n    const date = this.createDate(id, eventListeners);\r\n    const paragraph = this.createParagraph(id, task);\r\n\r\n    element.id = id;\r\n    element.classList.add(\"task\");\r\n    element.appendChild(checkbox);\r\n    element.appendChild(paragraph);\r\n    element.appendChild(date);\r\n\r\n    content.append(element);\r\n  }\r\n\r\n  createCheckbox(id, eventListeners) {\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.setAttribute(\"type\", \"checkbox\");\r\n    checkbox.setAttribute(\"id\", id + \"_checkbox\");\r\n    checkbox.checked = localStorage.getItem(id + \"_checkbox\") == \"true\";\r\n    eventListeners.addEventListenerToElement(id + \"_checkbox\", checkbox);\r\n    return checkbox;\r\n  }\r\n\r\n  createDate(id, eventListeners) {\r\n    const date = document.createElement(\"input\");\r\n    date.setAttribute(\"type\", \"date\");\r\n    date.value = localStorage.getItem(id + \"_date\");\r\n    eventListeners.addEventListenerToElement(id + \"_date\", date);\r\n    return date;\r\n  }\r\n\r\n  createParagraph(id, task) {\r\n    const label = document.createElement(\"label\");\r\n    label.innerHTML = task;\r\n    label.setAttribute(\"for\", id + \"_checkbox\");\r\n    return label;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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