/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bebas-kai.woff2 */ \"./src/bebas-kai.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./bebas-kai.woff */ \"./src/bebas-kai.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: \\\"bebas-kai\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\r\\n  font-weight: 600;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  margin: 0;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  text-align: left;\\r\\n  padding: 14px 16px;\\r\\n  margin: 8px 0;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  width: 100%;\\r\\n\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\nbutton svg path {\\r\\n  fill: #333;\\r\\n}\\r\\n\\r\\nbutton > img {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: #ddd;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  height: 70px;\\r\\n  box-shadow: #333 0px 0px 10px;\\r\\n  gap: 35px;\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n  padding: calc(20px * 2);\\r\\n  z-index: 10;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nnav img {\\r\\n  width: 60px;\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  z-index: 6;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 4fr;\\r\\n  min-height: calc(100vh - 200px);\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  flex-grow: 1;\\r\\n  padding: 20px;\\r\\n  background-color: #f2f2f2;\\r\\n}\\r\\n\\r\\n.tasks {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n  margin-top: auto;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.add-input input {\\r\\n  padding: 20px;\\r\\n  width: calc(100% - 45px);\\r\\n}\\r\\n\\r\\n.add-input .flex-buttons {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.task {\\r\\n  margin: 16px 0;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.project {\\r\\n  /* display: flex;\\r\\n  align-items: center;\\r\\n  gap: 10px;\\r\\n  margin-bottom: 10px; */\\r\\n}\\r\\n\\r\\n.task input[type=\\\"checkbox\\\"] {\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.task input[type=\\\"date\\\"] {\\r\\n  margin-right: 0;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.disabled,\\r\\n.disabled:hover,\\r\\n.disabled svg path {\\r\\n  fill: #aaa;\\r\\n  color: #aaa;\\r\\n  background-color: #eee;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  padding-inline-start: 0;\\r\\n}\\r\\n\\r\\n.project-content {\\r\\n  padding: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-list-v3/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-list-v3/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-list-v3/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ eventListeners; }\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\r\n\r\n\r\n\r\nclass eventListeners {\r\n  constructor() {\r\n    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.visibleInput = false;\r\n    this.input = new _input__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  }\r\n\r\n  addEventListenerToElement(id, element) {\r\n    element.addEventListener(\"change\", (e) => {\r\n      if (id.includes(\"checkbox\"))\r\n        this.storage.saveCheckbox(id, e.target.checked);\r\n      else this.storage.saveDate(id, e.target.value);\r\n    });\r\n  }\r\n\r\n  addProjectEventListener(id) {\r\n    if (!id.includes(\"project\")) return;\r\n\r\n    const project = document.querySelectorAll(`#${id}_button`);\r\n    project[0].addEventListener(\"click\", (e) => {\r\n      this.sideBarEventListeners(project);\r\n    });\r\n  }\r\n\r\n  sideBarEventListeners(selector) {\r\n    this.list = new _list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    selector.forEach((select) => {\r\n      select.addEventListener(\"click\", (e) => {\r\n        e.stopImmediatePropagation();\r\n\r\n        if (\r\n          !e.target.dataset.type.includes(\"add\") &&\r\n          !e.target.dataset.type.includes(\"cancel\")\r\n        ) {\r\n          localStorage.setItem(\"projectTimeType\", e.target.dataset.type);\r\n          this.storage.clearTaskList();\r\n          this.list.updateTaskList();\r\n        }\r\n\r\n        if (e.target.dataset.type.includes(\"input\"))\r\n          this.input.showInput(e.target.dataset.type);\r\n\r\n        if (e.target.dataset.type === \"clear-storage\") {\r\n          localStorage.clear();\r\n          document.querySelector(\".project-content\").innerHTML = \"\";\r\n        }\r\n      });\r\n    });\r\n  }\r\n\r\n  activateDomButtons() {\r\n    this.buttons = document.querySelectorAll(\"button\");\r\n    this.sideBarEventListeners(this.buttons);\r\n  }\r\n\r\n  updateList(button, type) {\r\n    button.addEventListener(\"click\", (e) => {\r\n      e.stopImmediatePropagation();\r\n      const value = document\r\n        .querySelector(`#${e.target.id}`)\r\n        .parentNode.parentElement.querySelector(\".input\").value;\r\n      if (type.includes(\"add_\")) this.storage.addList(value, type);\r\n      if (type.includes(\"cancel\")) this.input.disableAddInputs(type);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-list-v3/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup */ \"./src/setup.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n// import _ from \"lodash\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet pageBuilder = new _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\npageBuilder.navbar();\r\npageBuilder.createContent();\r\n\r\nlet list = new _list__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\nlist.updateTaskList();\r\nlist.updateProjectList();\r\n\r\nconst defaultSetting = new _setup__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\ndefaultSetting.defaultLocalStorage();\r\n\r\nlet eListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\neListeners.activateDomButtons();\r\n\r\n// localStorage.clear();\r\n\n\n//# sourceURL=webpack://odin-list-v3/./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ input; }\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\r\n\r\nclass input {\r\n  constructor() {}\r\n\r\n  showInput(inputType) {\r\n    if (inputType === \"add-task-input\") this.showTaskInput();\r\n    if (inputType === \"add-project-input\") this.showProjectInput();\r\n  }\r\n\r\n  showTaskInput() {\r\n    if (document.querySelector(\"#tasks-input\") !== null) return;\r\n\r\n    document\r\n      .querySelector(\"button[data-type='add-task-input']\")\r\n      .classList.add(\"disabled\");\r\n\r\n    const main = document.querySelector(\".tasks\");\r\n    const container = this.createContainer(\"tasks\");\r\n    main.appendChild(container);\r\n    this.addInput(container);\r\n    this.addInputControls(container, \"task\");\r\n  }\r\n\r\n  showProjectInput() {\r\n    if (document.querySelector(\"#projects-input\") !== null) return;\r\n\r\n    document\r\n      .querySelector(\"button[data-type='add-project-input']\")\r\n      .classList.add(\"disabled\");\r\n\r\n    const main = document.querySelector(\".projects\");\r\n    const container = this.createContainer(\"projects\");\r\n    main.appendChild(container);\r\n    this.addInput(container);\r\n    this.addInputControls(container, \"project\");\r\n  }\r\n\r\n  addInput(container) {\r\n    const input = document.createElement(\"input\");\r\n    input.classList.add(\"input\");\r\n    container.appendChild(input);\r\n  }\r\n\r\n  addButton(container, text, backgroundColor, type) {\r\n    this.eventListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    const button = document.createElement(\"button\");\r\n    button.innerHTML = text;\r\n    button.id = type;\r\n    button.style.backgroundColor = backgroundColor;\r\n    container.appendChild(button);\r\n    this.eventListeners.updateList(button, type);\r\n  }\r\n\r\n  disableAddInputs(type) {\r\n    if (type.includes(\"task\")) this.disableTaskInput();\r\n    else this.disableProjectInput();\r\n  }\r\n\r\n  disableTaskInput() {\r\n    console.log(\"disableTaskInput\");\r\n    document.querySelector(`#tasks-input`).remove();\r\n    document\r\n      .querySelector(`button[data-type='add-task-input']`)\r\n      .classList.remove(\"disabled\");\r\n  }\r\n\r\n  disableProjectInput() {\r\n    document.querySelector(`#projects-input`).remove();\r\n    document\r\n      .querySelector(`button[data-type='add-project-input']`)\r\n      .classList.remove(\"disabled\");\r\n  }\r\n\r\n  addInputControls(container, type) {\r\n    const flexButtons = document.createElement(\"div\");\r\n    flexButtons.classList.add(\"flex-buttons\");\r\n    container.appendChild(flexButtons);\r\n    this.addButton(\r\n      flexButtons,\r\n      \"ADD \" + type.toUpperCase(),\r\n      \"#9ACD32\",\r\n      \"add_\" + type\r\n    );\r\n    this.addButton(flexButtons, \"CANCEL\", \"red\", \"cancel_adding_\" + type);\r\n  }\r\n\r\n  createContainer(type) {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"add-input\");\r\n    container.setAttribute(\"id\", type + \"-input\");\r\n    return container;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-list-v3/./src/input.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ list; }\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\r\n\r\n\r\nclass list {\r\n  constructor() {\r\n    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.eventListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.date = new Date().toLocaleDateString(\"en-US\");\r\n    this.content = null;\r\n  }\r\n\r\n  listHeader() {\r\n    document.querySelector(\"#header\").innerHTML = localStorage\r\n      .getItem(\"projectTimeType\")\r\n      .replace(\"_\", \" \");\r\n  }\r\n\r\n  updateTaskList() {\r\n    const updateType = \"task_\";\r\n    let storageKeys = Object.keys(localStorage).filter((e) =>\r\n      e.includes(updateType)\r\n    );\r\n\r\n    this.content = document.querySelector(\".content\");\r\n\r\n    for (let i = 0; i <= storageKeys.length; i++) {\r\n      const id =\r\n        updateType +\r\n        i +\r\n        \"_\" +\r\n        localStorage.getItem(\"projectTimeType\") +\r\n        \"_\" +\r\n        this.date;\r\n\r\n      if (\r\n        document.getElementById(id) ||\r\n        document.querySelector(`#` + updateType + i)\r\n      )\r\n        continue;\r\n\r\n      const value = JSON.parse(localStorage.getItem(id))?.value;\r\n      this.appendList(id, value);\r\n    }\r\n\r\n    if (localStorage.getItem(\"projectTimeType\") !== null) this.listHeader();\r\n  }\r\n\r\n  updateProjectList() {\r\n    const updateType = \"project_\";\r\n    let storageKeys = Object.keys(localStorage).filter((e) =>\r\n      e.includes(updateType)\r\n    );\r\n\r\n    this.content = document.querySelector(\".project-content\");\r\n\r\n    for (let i = 0; i <= storageKeys.length; i++) {\r\n      const id =\r\n        updateType +\r\n        i +\r\n        \"_\" +\r\n        localStorage.getItem(\"projectTimeType\") +\r\n        \"_\" +\r\n        this.date;\r\n\r\n      if (\r\n        document.getElementById(id) ||\r\n        document.querySelector(`#` + updateType + i)\r\n      )\r\n        continue;\r\n\r\n      this.appendList(updateType + i, localStorage.getItem(updateType + i));\r\n    }\r\n\r\n    if (localStorage.getItem(\"projectTimeType\") !== null) this.listHeader();\r\n  }\r\n\r\n  appendList(id, value) {\r\n    if (value === null || value === undefined) return;\r\n\r\n    let element = document.createElement(\"li\");\r\n    if (id.includes(\"task\"))\r\n      return this.appendTask(id, value, element, this.eventListeners);\r\n    this.appendProject(id, value, element);\r\n  }\r\n\r\n  appendTask(id, value, element) {\r\n    const checkbox = this.createCheckbox(id, this.eventListeners);\r\n    const date = this.createDate(id, this.eventListeners);\r\n    const paragraph = this.createParagraph(id, value);\r\n\r\n    element.id = id;\r\n    element.classList.add(\"task\");\r\n    element.appendChild(checkbox);\r\n    element.appendChild(paragraph);\r\n    element.appendChild(date);\r\n\r\n    this.content.append(element);\r\n  }\r\n\r\n  appendProject(id, value, element) {\r\n    const icon = this.createIcon(id);\r\n    const button = this.createButton(id);\r\n\r\n    button.appendChild(icon);\r\n    button.innerHTML += value;\r\n\r\n    button.setAttribute(\"data-type\", value);\r\n\r\n    element.id = id;\r\n    element.appendChild(button);\r\n\r\n    this.content.append(element);\r\n  }\r\n\r\n  createCheckbox(id) {\r\n    const checkbox = document.createElement(\"input\");\r\n    checkbox.setAttribute(\"type\", \"checkbox\");\r\n    checkbox.setAttribute(\"id\", id + \"_checkbox\");\r\n    checkbox.checked = JSON.parse(localStorage.getItem(id)).checkbox == true;\r\n    this.eventListeners.addEventListenerToElement(id + \"_checkbox\", checkbox);\r\n    return checkbox;\r\n  }\r\n\r\n  createDate(id) {\r\n    const date = document.createElement(\"input\");\r\n    date.setAttribute(\"type\", \"date\");\r\n    date.value = JSON.parse(localStorage.getItem(id)).date;\r\n    this.eventListeners.addEventListenerToElement(id + \"_date\", date);\r\n    return date;\r\n  }\r\n\r\n  createParagraph(id, value) {\r\n    const label = document.createElement(\"label\");\r\n    label.innerHTML = value;\r\n    label.setAttribute(\"for\", id + \"_checkbox\");\r\n    return label;\r\n  }\r\n\r\n  createIcon(id) {\r\n    const icon = document.createElement(\"img\");\r\n    icon.src = \"./assets/icons/project.svg\";\r\n    icon.setAttribute(\"id\", id + \"_icon\");\r\n    return icon;\r\n  }\r\n\r\n  createButton(id) {\r\n    const button = document.createElement(\"button\");\r\n    button.setAttribute(\"id\", id + \"_button\");\r\n    return button;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-list-v3/./src/list.js?");

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ setup; }\n/* harmony export */ });\nclass setup {\r\n  constructor() {}\r\n\r\n  defaultLocalStorage() {\r\n    if (localStorage.getItem(\"taskNumber\") === null)\r\n      localStorage.setItem(\"taskNumber\", 0);\r\n    if (localStorage.getItem(\"projectNumber\") === null)\r\n      localStorage.setItem(\"projectNumber\", 0);\r\n    if (localStorage.getItem(\"projectTimeType\") === null)\r\n      localStorage.setItem(\"projectTimeType\", \"inbox\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-list-v3/./src/setup.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ storage; }\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n\r\n\r\nclass storage {\r\n  constructor() {\r\n    this.date = new Date().toLocaleDateString(\"en-US\");\r\n  }\r\n\r\n  clearTaskList() {\r\n    const content = document.querySelector(\".content\");\r\n    while (content.firstChild) {\r\n      content.removeChild(content.firstChild);\r\n    }\r\n  }\r\n\r\n  addList(value, type) {\r\n    const list = new _list__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n    const updateType = type === \"add_task\" ? \"task_\" : \"project_\";\r\n    if (type === \"add_task\")\r\n      localStorage.setItem(\r\n        `${updateType}${localStorage.getItem(\r\n          `${updateType.slice(0, -1)}Number`\r\n        )}_${localStorage.getItem(\"projectTimeType\")}_${this.date}`,\r\n        JSON.stringify({\r\n          checkbox: null,\r\n          value: value,\r\n          date: null,\r\n        })\r\n      );\r\n    else\r\n      localStorage.setItem(\r\n        `${updateType}${localStorage.getItem(\r\n          `${updateType.slice(0, -1)}Number`\r\n        )}`,\r\n        value\r\n      );\r\n\r\n    type.includes(\"task\") ? list.updateTaskList() : list.updateProjectList();\r\n    const eventListenersClass = new _eventListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    eventListenersClass.addProjectEventListener(\r\n      `${updateType}${localStorage.getItem(`${updateType.slice(0, -1)}Number`)}`\r\n    );\r\n    this.incrementListNumber(type);\r\n  }\r\n\r\n  incrementListNumber(type) {\r\n    const number = type === \"add_task\" ? \"taskNumber\" : \"projectNumber\";\r\n    let incrementNumber =\r\n      localStorage.getItem(number) !== null\r\n        ? parseInt(localStorage.getItem(number))\r\n        : 0;\r\n    incrementNumber += 1;\r\n    localStorage.setItem(number, incrementNumber);\r\n  }\r\n\r\n  saveCheckbox(id, value) {\r\n    id = id.replace(\"_checkbox\", \"\");\r\n    let localStorageObject = JSON.parse(localStorage.getItem(id));\r\n    localStorageObject.checkbox = value;\r\n    localStorage.setItem(id, JSON.stringify(localStorageObject));\r\n    console.log(localStorage.getItem(id));\r\n  }\r\n\r\n  saveDate(id, value) {\r\n    id = id.replace(\"_date\", \"\");\r\n    let localStorageObject = JSON.parse(localStorage.getItem(id));\r\n    localStorageObject.date = value;\r\n    localStorage.setItem(id, JSON.stringify(localStorageObject));\r\n    console.log(localStorage.getItem(id));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-list-v3/./src/storage.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ui; }\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\r\n\r\n\r\nclass ui {\r\n  constructor() {\r\n    this.body = document.querySelector(\"body\");\r\n    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.eventListeners = new _eventListeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this.date = new Date().toLocaleDateString(\"en-US\");\r\n  }\r\n\r\n  navbar() {\r\n    const nav = document.createElement(\"nav\");\r\n    nav.innerHTML = \"<img src='./assets/logo.svg'><h1>TO-DO</h1>\";\r\n    this.body.appendChild(nav);\r\n  }\r\n\r\n  createContent() {\r\n    const container = document.createElement(\"div\");\r\n    container.classList.add(\"container\");\r\n    this.body.appendChild(container);\r\n\r\n    this.sideBar(container);\r\n    this.main(container);\r\n    this.footer(container);\r\n  }\r\n\r\n  sideBar(container) {\r\n    const sideBar = document.createElement(\"div\");\r\n    sideBar.classList.add(\"sidebar\");\r\n    sideBar.innerHTML = `<h2>SIDEBAR</h2>\r\n      <li><button data-type='inbox'><img src='./assets/icons/inbox.svg'> INBOX</button></li>\r\n      <li><button data-type='today'><img src='./assets/icons/calendar-today.svg'> TODAY</button></li>\r\n      <li><button data-type='this_week'><img src='./assets/icons/calendar-week.svg'> THIS WEEK</button></li>\r\n      <h2>PROJECTS</h2>\r\n      <div class=\"projects\">\r\n        <ul class='project-content'></ul>\r\n        <button data-type='add-project-input'><img src='./assets/icons/plus-small.svg'> ADD PROJECT</button>\r\n      </div>\r\n      <li><button data-type='clear-storage'>CLEAR STORAGE</button></li> `;\r\n    container.appendChild(sideBar);\r\n  }\r\n\r\n  main(container) {\r\n    const main = document.createElement(\"div\");\r\n    main.classList.add(\"tasks\");\r\n    main.innerHTML = `<h2 id=\"header\">INBOX</h2>\r\n    <ul class='content'></ul>\r\n    <button data-type='add-task-input'>\r\n    <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <path d=\"M13.0741 6.00299L7.99703 6.00299V0.925964H6.00299V6.00299L0.925964 6.00299L0.925964 7.99703H6.00299V13.0741H7.99703V7.99703H13.0741V6.00299Z\"/>\r\n    </svg>\r\n    ADD TASK</button>`;\r\n    container.appendChild(main);\r\n  }\r\n\r\n  footer() {\r\n    const footer = document.createElement(\"footer\");\r\n    footer.innerHTML = \"<p>Footer</p>\";\r\n    this.body.appendChild(footer);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://odin-list-v3/./src/ui.js?");

/***/ }),

/***/ "./src/bebas-kai.woff":
/*!****************************!*\
  !*** ./src/bebas-kai.woff ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"43706a607a2e997e58a0.woff\";\n\n//# sourceURL=webpack://odin-list-v3/./src/bebas-kai.woff?");

/***/ }),

/***/ "./src/bebas-kai.woff2":
/*!*****************************!*\
  !*** ./src/bebas-kai.woff2 ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
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