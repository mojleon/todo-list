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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bebas-kai.woff2 */ \"./src/bebas-kai.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./bebas-kai.woff */ \"./src/bebas-kai.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"bebas-kai\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\n  font-weight: 600;\\n  font-style: normal;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: Arial, Helvetica, sans-serif;\\n\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100vh;\\n}\\n\\nbutton {\\n  border-radius: 12px;\\n  text-align: left;\\n  padding: 14px 16px;\\n  margin: 8px 0;\\n  border: none;\\n  cursor: pointer;\\n  width: 100%;\\n\\n  display: flex;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\nbutton svg path {\\n  fill: #333;\\n}\\n\\nbutton > img {\\n  width: 20px;\\n}\\n\\nbutton:hover {\\n  background-color: #ddd;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nnav {\\n  display: flex;\\n  height: 70px;\\n  /* box-shadow: #333 0px 0px 10px; */\\n  gap: 35px;\\n  background-color: white;\\n  color: #333;\\n  padding: calc(20px * 2);\\n  z-index: 10;\\n  align-items: center;\\n}\\n\\nnav img {\\n  width: 60px;\\n  height: 60px;\\n}\\n\\n.container {\\n  z-index: 6;\\n  display: grid;\\n  grid-template-columns: 1fr 4fr;\\n  min-height: calc(100vh - 200px);\\n}\\n\\n.sidebar {\\n  display: flex;\\n  flex-direction: column;\\n  flex-grow: 1;\\n  padding: 20px;\\n  border-right: #333 1px solid;\\n}\\n\\n.tasks {\\n  padding: 20px;\\n}\\n\\nfooter {\\n  padding-left: 20px;\\n  color: #333;\\n  text-align: left;\\n  margin-top: auto;\\n  height: 50px;\\n}\\n\\nfooter a {\\n  color: #333;\\n}\\n\\n.add-input input {\\n  padding: 20px;\\n  width: calc(100% - 45px);\\n}\\n\\n.add-input .flex-buttons {\\n  display: flex;\\n  gap: 10px;\\n}\\n\\n.task {\\n  margin: 16px 0;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.project {\\n  /* display: flex;\\n  align-items: center;\\n  gap: 10px;\\n  margin-bottom: 10px; */\\n}\\n\\n.task input[type=\\\"checkbox\\\"] {\\n  margin-right: 10px;\\n}\\n\\n.task input[type=\\\"date\\\"] {\\n  border: none;\\n  margin-right: 0;\\n  margin-left: auto;\\n}\\n\\n.disabled,\\n.disabled:hover,\\n.disabled svg path {\\n  fill: #aaa;\\n  color: #aaa;\\n  background-color: #eee;\\n}\\n\\n.content {\\n  padding-inline-start: 0;\\n}\\n\\n.project-content {\\n  padding: 0;\\n}\\n\\n.task-input {\\n  width: 100%;\\n  border: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-list-v3/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-list-v3/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ eventListeners)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\n\nclass eventListeners {\n  constructor() {\n    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.visibleInput = false;\n    this.input = new _input__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  addEventListenerToElement(id, element) {\n    element.addEventListener(\"change\", (e) => {\n      if (id.includes(\"checkbox\"))\n        this.storage.saveCheckbox(id, e.target.checked);\n      else if (id.includes(\"input\")) this.storage.saveInput(id, e.target.value);\n      else this.storage.saveDate(id, e.target.value);\n    });\n  }\n\n  addProjectEventListener(id) {\n    if (!id.includes(\"project\")) return;\n\n    const project = document.querySelectorAll(`#${id}_button`);\n    project[0].addEventListener(\"click\", (e) => {\n      this.sideBarEventListeners(project);\n    });\n  }\n\n  sideBarEventListeners(selector) {\n    this.list = new _list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    selector.forEach((select) => {\n      select.addEventListener(\"click\", (e) => {\n        e.stopImmediatePropagation();\n\n        if (\n          !e.target.dataset.type.includes(\"add\") &&\n          !e.target.dataset.type.includes(\"cancel\")\n        ) {\n          localStorage.setItem(\"projectTimeType\", e.target.dataset.type);\n          this.storage.clearTaskList();\n          this.list.updateTaskList();\n        }\n\n        if (e.target.dataset.type.includes(\"input\"))\n          this.input.showInput(e.target.dataset.type);\n\n        if (e.target.dataset.type === \"clear-storage\") {\n          sessionStorage.clear();\n          document.querySelector(\".project-content\").innerHTML = \"\";\n          document.querySelector(\"button[data-type='inbox']\").click();\n        }\n      });\n    });\n  }\n\n  activateDomButtons() {\n    this.buttons = document.querySelectorAll(\"button\");\n    this.sideBarEventListeners(this.buttons);\n  }\n\n  updateList(button, type) {\n    button.addEventListener(\"click\", (e) => {\n      e.stopImmediatePropagation();\n      const value = document\n        .querySelector(`#${e.target.id}`)\n        .parentNode.parentElement.querySelector(\".input\").value;\n      if (type.includes(\"add_\")) this.storage.addList(value, type);\n      if (type.includes(\"cancel\")) this.input.disableAddInputs(type);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://odin-list-v3/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n// import _ from \"lodash\";\n\n\n\n\n\n\n\nlet pageBuilder = new _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\npageBuilder.navbar();\npageBuilder.createContent();\n\nlet list = new _list__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nlist.updateTaskList();\nlist.updateProjectList();\n\nconst defaultSetting = new _setup__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\ndefaultSetting.defaultLocalStorage();\n\nlet eListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\neListeners.activateDomButtons();\n\n// console.log(sessionStorage);\n// localStorage.clear();\n// sessionStorage.clear();\n\n\n//# sourceURL=webpack://odin-list-v3/./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ input)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\nclass input {\n  constructor() {}\n\n  showInput(inputType) {\n    if (inputType === \"add-task-input\") this.showTaskInput();\n    if (inputType === \"add-project-input\") this.showProjectInput();\n  }\n\n  showTaskInput() {\n    if (document.querySelector(\"#tasks-input\") !== null) return;\n\n    document\n      .querySelector(\"button[data-type='add-task-input']\")\n      .classList.add(\"disabled\");\n\n    const main = document.querySelector(\".tasks\");\n    const container = this.createContainer(\"tasks\");\n    main.appendChild(container);\n    this.addInput(container);\n    this.addInputControls(container, \"task\");\n  }\n\n  showProjectInput() {\n    if (document.querySelector(\"#projects-input\") !== null) return;\n\n    document\n      .querySelector(\"button[data-type='add-project-input']\")\n      .classList.add(\"disabled\");\n\n    const main = document.querySelector(\".projects\");\n    const container = this.createContainer(\"projects\");\n    main.appendChild(container);\n    this.addInput(container);\n    this.addInputControls(container, \"project\");\n  }\n\n  addInput(container) {\n    const input = document.createElement(\"input\");\n    input.classList.add(\"input\");\n    container.appendChild(input);\n  }\n\n  addButton(container, text, backgroundColor, type) {\n    this.eventListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    const button = document.createElement(\"button\");\n    button.innerHTML = text;\n    button.id = type;\n    button.style.backgroundColor = backgroundColor;\n    container.appendChild(button);\n    this.eventListeners.updateList(button, type);\n  }\n\n  disableAddInputs(type) {\n    if (type.includes(\"task\")) this.disableTaskInput();\n    else this.disableProjectInput();\n  }\n\n  disableTaskInput() {\n    console.log(\"disableTaskInput\");\n    document.querySelector(`#tasks-input`).remove();\n    document\n      .querySelector(`button[data-type='add-task-input']`)\n      .classList.remove(\"disabled\");\n  }\n\n  disableProjectInput() {\n    document.querySelector(`#projects-input`).remove();\n    document\n      .querySelector(`button[data-type='add-project-input']`)\n      .classList.remove(\"disabled\");\n  }\n\n  addInputControls(container, type) {\n    const flexButtons = document.createElement(\"div\");\n    flexButtons.classList.add(\"flex-buttons\");\n    container.appendChild(flexButtons);\n    this.addButton(\n      flexButtons,\n      \"ADD \" + type.toUpperCase(),\n      \"#9ACD32\",\n      \"add_\" + type\n    );\n    this.addButton(flexButtons, \"CANCEL\", \"red\", \"cancel_adding_\" + type);\n  }\n\n  createContainer(type) {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"add-input\");\n    container.setAttribute(\"id\", type + \"-input\");\n    return container;\n  }\n}\n\n\n//# sourceURL=webpack://odin-list-v3/./src/input.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ list)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n\nclass list {\n  constructor() {\n    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.eventListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.date = new Date().toLocaleDateString(\"en-US\");\n    this.content = null;\n  }\n\n  listHeader() {\n    document.querySelector(\"#header\").innerHTML = localStorage\n      .getItem(\"projectTimeType\")\n      .replace(\"_\", \" \");\n  }\n\n  formatDate(date) {\n    if (date === null || date === false || date === undefined) return;\n\n    let dateFormated = date.split(\"-\").reverse();\n    dateFormated = [dateFormated[1], dateFormated[0], dateFormated[2]];\n\n    if (dateFormated.includes(\"task_\")) return;\n\n    return dateFormated\n      .join(\",\")\n      .replace(/,/g, \"/\")\n      .replace(/0(?=\\d\\/)/, \"\");\n  }\n\n  getStorageKeys(updateType) {\n    const projectTimeType = localStorage.getItem(\"projectTimeType\");\n    if (projectTimeType === \"inbox\") {\n      return Object.keys(sessionStorage).filter((item) => item);\n    } else if (projectTimeType === \"today\") {\n      return Object.keys(sessionStorage).filter(\n        (item) =>\n          this.formatDate(JSON.parse(sessionStorage.getItem(item)).date) ===\n            this.date ?? item\n      );\n    } else if (projectTimeType === \"this_week\") {\n      return Object.keys(sessionStorage).filter((item, index) => {\n        const getTaskDate = JSON.parse(sessionStorage.getItem(item)).date;\n        if (!getTaskDate) return;\n        const day = 86400000; //number of milliseconds in a day\n        const typeTaskDate = new Date(this.formatDate(getTaskDate)).getTime();\n        console.log();\n        if (typeTaskDate - new Date(this.date).getTime() + day * 7 >= 0)\n          return item;\n      });\n    } else {\n      return Object.keys(sessionStorage).filter((item) => {\n        const getProjectType = JSON.parse(\n          sessionStorage.getItem(item)\n        ).projectType;\n        if (getProjectType === projectTimeType) return item;\n      });\n    }\n  }\n\n  updateTaskList() {\n    const updateType = \"task_\";\n    let storageKeys = this.getStorageKeys(updateType);\n\n    if (storageKeys === undefined) return;\n    this.content = document.querySelector(\".content\");\n\n    storageKeys.forEach((id) => {\n      if (document.getElementById(id)) return;\n\n      const value = JSON.parse(sessionStorage.getItem(id))?.value;\n      this.appendList(id, value);\n    });\n\n    if (localStorage.getItem(\"projectTimeType\") !== null) this.listHeader();\n  }\n\n  updateProjectList() {\n    const updateType = \"project_\";\n    let storageKeys = Object.keys(localStorage).filter((e) =>\n      e.includes(updateType)\n    );\n\n    this.content = document.querySelector(\".project-content\");\n\n    for (let i = 0; i <= storageKeys.length; i++) {\n      const id = updateType + i;\n\n      if (\n        document.getElementById(id) ||\n        document.querySelector(`#` + updateType + i)\n      )\n        continue;\n\n      this.appendList(updateType + i, localStorage.getItem(updateType + i));\n    }\n\n    if (localStorage.getItem(\"projectTimeType\") !== null) this.listHeader();\n  }\n\n  appendList(id, value) {\n    if (value === null || value === undefined) return;\n\n    let element = document.createElement(\"li\");\n    if (id.includes(\"task\"))\n      return this.appendTask(id, value, element, this.eventListeners);\n    this.appendProject(id, value, element);\n  }\n\n  appendTask(id, value, element) {\n    const checkbox = this.createCheckbox(id, this.eventListeners);\n    const date = this.createDate(id, this.eventListeners);\n    const input = this.createInput(id, value);\n\n    element.id = id;\n    element.classList.add(\"task\");\n    element.appendChild(checkbox);\n    element.appendChild(input);\n    element.appendChild(date);\n\n    this.content.append(element);\n  }\n\n  appendProject(id, value, element) {\n    const icon = this.createIcon(id);\n    const button = this.createButton(id);\n\n    button.appendChild(icon);\n    button.innerHTML += value;\n\n    button.setAttribute(\"data-type\", value);\n\n    element.id = id;\n    element.appendChild(button);\n\n    this.content.append(element);\n  }\n\n  createCheckbox(id) {\n    const checkbox = document.createElement(\"input\");\n    checkbox.setAttribute(\"type\", \"checkbox\");\n    checkbox.setAttribute(\"id\", id + \"_checkbox\");\n    checkbox.checked = JSON.parse(sessionStorage.getItem(id)).checkbox == true;\n    this.eventListeners.addEventListenerToElement(id + \"_checkbox\", checkbox);\n    return checkbox;\n  }\n\n  createDate(id) {\n    const date = document.createElement(\"input\");\n    date.setAttribute(\"type\", \"date\");\n    date.value = JSON.parse(sessionStorage.getItem(id)).date;\n    this.eventListeners.addEventListenerToElement(id + \"_date\", date);\n    return date;\n  }\n\n  createInput(id, value) {\n    const input = document.createElement(\"input\");\n    input.value = value;\n    input.setAttribute(\"id\", id + \"_input\");\n    input.setAttribute(\"class\", \"task-input\");\n    this.eventListeners.addEventListenerToElement(id + \"_input\", input);\n    return input;\n  }\n\n  createIcon(id) {\n    const icon = document.createElement(\"img\");\n    icon.src = \"./assets/icons/project.svg\";\n    icon.setAttribute(\"id\", id + \"_icon\");\n    return icon;\n  }\n\n  createButton(id) {\n    const button = document.createElement(\"button\");\n    button.setAttribute(\"id\", id + \"_button\");\n    return button;\n  }\n}\n\n\n//# sourceURL=webpack://odin-list-v3/./src/list.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setup)\n/* harmony export */ });\nclass setup {\n  constructor() {}\n\n  defaultLocalStorage() {\n    if (localStorage.getItem(\"taskNumber\") === null)\n      localStorage.setItem(\"taskNumber\", 0);\n    if (localStorage.getItem(\"projectNumber\") === null)\n      localStorage.setItem(\"projectNumber\", 0);\n    if (localStorage.getItem(\"projectTimeType\") === null)\n      localStorage.setItem(\"projectTimeType\", \"inbox\");\n  }\n}\n\n\n//# sourceURL=webpack://odin-list-v3/./src/setup.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\n\nclass storage {\n  constructor() {}\n\n  clearTaskList() {\n    const content = document.querySelector(\".content\");\n    while (content.firstChild) {\n      content.removeChild(content.firstChild);\n    }\n  }\n\n  addList(value, type) {\n    const list = new _list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    const updateType = type === \"add_task\" ? \"task_\" : \"project_\";\n    if (type === \"add_task\") {\n      sessionStorage.setItem(\n        `${updateType}${localStorage.getItem(\n          `${updateType.slice(0, -1)}Number`\n        )}`,\n        JSON.stringify({\n          checkbox: null,\n          value: value,\n          date: null,\n          projectType: localStorage.getItem(\"projectTimeType\"),\n        })\n      );\n    } else\n      localStorage.setItem(\n        `${updateType}${localStorage.getItem(\n          `${updateType.slice(0, -1)}Number`\n        )}`,\n        value\n      );\n\n    type.includes(\"task\") ? list.updateTaskList() : list.updateProjectList();\n    const eventListenersClass = new _eventListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    eventListenersClass.addProjectEventListener(\n      `${updateType}${localStorage.getItem(`${updateType.slice(0, -1)}Number`)}`\n    );\n    this.incrementListNumber(type);\n  }\n\n  incrementListNumber(type) {\n    const number = type === \"add_task\" ? \"taskNumber\" : \"projectNumber\";\n    let incrementNumber =\n      localStorage.getItem(number) !== null\n        ? parseInt(localStorage.getItem(number))\n        : 0;\n    incrementNumber += 1;\n    localStorage.setItem(number, incrementNumber);\n  }\n\n  saveCheckbox(id, value) {\n    id = id.replace(\"_checkbox\", \"\");\n    let sessionStorageObject = JSON.parse(sessionStorage.getItem(id));\n    sessionStorageObject.checkbox = value;\n    sessionStorage.setItem(id, JSON.stringify(sessionStorageObject));\n  }\n\n  saveDate(id, value) {\n    id = id.replace(\"_date\", \"\");\n    let sessionStorageObject = JSON.parse(sessionStorage.getItem(id));\n    sessionStorageObject.date = value;\n    sessionStorage.setItem(id, JSON.stringify(sessionStorageObject));\n  }\n\n  saveInput(id, value) {\n    id = id.replace(\"_input\", \"\");\n    let sessionStorageObject = JSON.parse(sessionStorage.getItem(id));\n    sessionStorageObject.value = value;\n    sessionStorage.setItem(id, JSON.stringify(sessionStorageObject));\n    console.log(sessionStorage.getItem(id));\n  }\n}\n\n\n//# sourceURL=webpack://odin-list-v3/./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ui)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n\nclass ui {\n  constructor() {\n    this.body = document.querySelector(\"body\");\n    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.eventListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.date = new Date().toLocaleDateString(\"en-US\");\n  }\n\n  navbar() {\n    const nav = document.createElement(\"nav\");\n    nav.innerHTML = \"<img src='./assets/logo.svg'><h1>TO-DO</h1>\";\n    this.body.appendChild(nav);\n  }\n\n  createContent() {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"container\");\n    this.body.appendChild(container);\n\n    this.sideBar(container);\n    this.main(container);\n    this.footer(container);\n  }\n\n  sideBar(container) {\n    const sideBar = document.createElement(\"div\");\n    sideBar.classList.add(\"sidebar\");\n    sideBar.innerHTML = `<h2>SIDEBAR</h2>\n      <li><button data-type='inbox'><img src='./assets/icons/inbox.svg'> INBOX</button></li>\n      <li><button data-type='today'><img src='./assets/icons/calendar-today.svg'> TODAY</button></li>\n      <li><button data-type='this_week'><img src='./assets/icons/calendar-week.svg'> THIS WEEK</button></li>\n      <h2>PROJECTS</h2>\n      <div class=\"projects\">\n        <ul class='project-content'></ul>\n        <button data-type='add-project-input'><img src='./assets/icons/plus-small.svg'> ADD PROJECT</button>\n      </div>\n      <li><button data-type='clear-storage'>CLEAR STORAGE</button></li> `;\n    container.appendChild(sideBar);\n  }\n\n  main(container) {\n    const main = document.createElement(\"div\");\n    main.classList.add(\"tasks\");\n    main.innerHTML = `<h2 id=\"header\">INBOX</h2>\n    <ul class='content'></ul>\n    <button data-type='add-task-input'>\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M13.0741 6.00299L7.99703 6.00299V0.925964H6.00299V6.00299L0.925964 6.00299L0.925964 7.99703H6.00299V13.0741H7.99703V7.99703H13.0741V6.00299Z\"/>\n    </svg>\n    ADD TASK</button>`;\n    container.appendChild(main);\n  }\n\n  footer() {\n    const footer = document.createElement(\"footer\");\n    footer.innerHTML = `<p>Copyright © 2021 <a href=\"http://github.com/mojleon/todo-list\" target=\"_blank\">Mojleon</a></p>`;\n    this.body.appendChild(footer);\n  }\n}\n\n\n//# sourceURL=webpack://odin-list-v3/./src/ui.js?");

/***/ }),

/***/ "./src/bebas-kai.woff":
/*!****************************!*\
  !*** ./src/bebas-kai.woff ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"43706a607a2e997e58a0.woff\";\n\n//# sourceURL=webpack://odin-list-v3/./src/bebas-kai.woff?");

/***/ }),

/***/ "./src/bebas-kai.woff2":
/*!*****************************!*\
  !*** ./src/bebas-kai.woff2 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b0bd7b27960327dcd41.woff2\";\n\n//# sourceURL=webpack://odin-list-v3/./src/bebas-kai.woff2?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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