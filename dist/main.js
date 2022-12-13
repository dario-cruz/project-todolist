/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Quicksilver.otf */ "./src/fonts/Quicksilver.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Quicksilver Italic.otf */ "./src/fonts/Quicksilver Italic.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS Style reset. */\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid black;\r\n\r\n}\r\n/* Define all of the custom fonts used. */\r\n@font-face {\r\n    font-family: \"quicksilver-reg\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face{\r\n    font-family: \"quicksilver-itl\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n/* Setup grid for main page and task display */\r\n#content {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template: 6rem 1fr 1fr 1fr 4rem / 1fr 3fr;\r\n    grid-template-areas:\r\n    \"header header\" \r\n    \"left right\"\r\n    \"left right\"\r\n    \"left right\"\r\n    \"footer footer\";\r\n}\r\n/* Set grid positions for divs */\r\n.header-panel {\r\n    grid-area: header;\r\n}\r\n.right-panel {\r\n    grid-area: right;\r\n    display: grid;\r\n    grid-template-rows: repeat(4, 6rem);\r\n    grid-template-columns: 1fr;\r\n    grid-auto-rows: 6rem;\r\n}\r\n.left-panel {\r\n    display: grid;\r\n    grid-area: left;\r\n    grid-template-rows: repeat(5, 4rem);\r\n    grid-template-columns: 1fr;\r\n    grid-auto-rows: 6rem;\r\n}\r\n.footer-panel {\r\n    grid-area: footer;\r\n}\r\n/* Style the text elements. */\r\n.page-title {\r\n    font-family: \"quicksilver-itl\";\r\n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,uBAAuB;;AAE3B;AACA,yCAAyC;AACzC;IACI,8BAA8B;IAC9B,4CAAiC;AACrC;AACA;IACI,8BAA8B;IAC9B,4CAAyC;AAC7C;;AAEA,8CAA8C;AAC9C;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,8CAA8C;IAC9C;;;;;mBAKe;AACnB;AACA,gCAAgC;AAChC;IACI,iBAAiB;AACrB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,mCAAmC;IACnC,0BAA0B;IAC1B,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,eAAe;IACf,mCAAmC;IACnC,0BAA0B;IAC1B,oBAAoB;AACxB;AACA;IACI,iBAAiB;AACrB;AACA,6BAA6B;AAC7B;IACI,8BAA8B;AAClC","sourcesContent":["/* CSS Style reset. */\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid black;\r\n\r\n}\r\n/* Define all of the custom fonts used. */\r\n@font-face {\r\n    font-family: \"quicksilver-reg\";\r\n    src: url(./fonts/Quicksilver.otf);\r\n}\r\n@font-face{\r\n    font-family: \"quicksilver-itl\";\r\n    src: url(./fonts/Quicksilver\\ Italic.otf);\r\n}\r\n\r\n/* Setup grid for main page and task display */\r\n#content {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template: 6rem 1fr 1fr 1fr 4rem / 1fr 3fr;\r\n    grid-template-areas:\r\n    \"header header\" \r\n    \"left right\"\r\n    \"left right\"\r\n    \"left right\"\r\n    \"footer footer\";\r\n}\r\n/* Set grid positions for divs */\r\n.header-panel {\r\n    grid-area: header;\r\n}\r\n.right-panel {\r\n    grid-area: right;\r\n    display: grid;\r\n    grid-template-rows: repeat(4, 6rem);\r\n    grid-template-columns: 1fr;\r\n    grid-auto-rows: 6rem;\r\n}\r\n.left-panel {\r\n    display: grid;\r\n    grid-area: left;\r\n    grid-template-rows: repeat(5, 4rem);\r\n    grid-template-columns: 1fr;\r\n    grid-auto-rows: 6rem;\r\n}\r\n.footer-panel {\r\n    grid-area: footer;\r\n}\r\n/* Style the text elements. */\r\n.page-title {\r\n    font-family: \"quicksilver-itl\";\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/dom-manipulation.js":
/*!********************************************!*\
  !*** ./src/components/dom-manipulation.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectToDom": () => (/* binding */ projectToDom)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _domappender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domappender */ "./src/components/domappender.js");



const projectToDom = (projectObj) => {
    // Define all of the elements that need to be added to the dom. 
    let projectTab = document.createElement('div')
    let projectTabHeading = document.createElement('h1')

    // Process the project name to a string with no spaces so that we can use it as an identifier. 
    let processedProjectName = projectObj.projectName.toString().replaceAll(" ", "-").toLowerCase()
    projectTab.setAttribute('class', `${processedProjectName}-tab`)
    projectTabHeading.setAttribute('class', `${processedProjectName}-heading`)
    projectTabHeading.innerText = `${projectObj.projectName}`
    
    // Append the project-heading to the project-tab div.
    projectTab.append(projectTabHeading)
    
    // Append the project-tab to the left-panel DOM element.
    ___WEBPACK_IMPORTED_MODULE_0__.leftPanel.append(projectTab)

    // Iterate over the tasks items on the array and add then to the DOM. 
    projectObj.projectTasks.forEach(task => {
    
        // Create a div for each of the tasks. Headings and Notes will be attached to this.
        let parentElement = document.createElement('div')
        parentElement.setAttribute('class', 'task')
        ___WEBPACK_IMPORTED_MODULE_0__.rightPanel.append(parentElement)
        ;(0,_domappender__WEBPACK_IMPORTED_MODULE_1__.domAppender)('h1', 'task-title', parentElement, task.taskName)
        ;(0,_domappender__WEBPACK_IMPORTED_MODULE_1__.domAppender)('p', 'task-notes', parentElement, task.taskNotes)
    });
}



/***/ }),

/***/ "./src/components/domappender.js":
/*!***************************************!*\
  !*** ./src/components/domappender.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domAppender": () => (/* binding */ domAppender)
/* harmony export */ });
function domAppender(element, className, appendTo, content) {
    let appendageElem = document.createElement(element)
    appendageElem.setAttribute('class', className)
    appendageElem.innerText = content
    appendTo.append(appendageElem)   
}



/***/ }),

/***/ "./src/components/localStorageManipulator.js":
/*!***************************************************!*\
  !*** ./src/components/localStorageManipulator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearAllStorage": () => (/* binding */ clearAllStorage),
/* harmony export */   "getAllLocalStorage": () => (/* binding */ getAllLocalStorage),
/* harmony export */   "placeInStorage": () => (/* binding */ placeInStorage),
/* harmony export */   "processAllLocalStorage": () => (/* binding */ processAllLocalStorage),
/* harmony export */   "removeFromStorage": () => (/* binding */ removeFromStorage),
/* harmony export */   "retrieveFromStorage": () => (/* binding */ retrieveFromStorage)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/components/dom-manipulation.js");


// Place project object into localStorage with identifier being the projectname.
// Convert to JSON so object can be placed in localStorge. 
const placeInStorage = (projectObj) => {
    window.localStorage.setItem(`${projectObj.projectName}`, JSON.stringify(projectObj))
}
// Get the store project object from storage and parse it into js object and return it. 
const retrieveFromStorage = (projectObj) => {
    let unParsedItem = window.localStorage.getItem(`${projectObj.projectName}`)
    return JSON.parse(unParsedItem)
}

// Remove item from localStorage by native js object name.
const removeFromStorage = (projectObj) => {
    window.localStorage.removeItem(`${projectObj.projectName}`)
}

// Clear all data from localStorage.
const clearAllStorage = () => {
    window.localStorage.clear()
    console.log('All the data has been cleared.')
}

// Get all items in localStorage
const getAllLocalStorage = () => {
    const localObjs = {...localStorage}
    const logTheObjs = () => {
        console.log(localObjs)
    }
    return {
        localObjs,
        logTheObjs,
    }
}

// Process list of json and stringified objs into native JS objs.
const processAllLocalStorage = (listOfLocalObjs) => {
    for (const property in listOfLocalObjs) {
        // Parse all stringified objs to JS objects.
        console.log(property)
        let processedObj = JSON.parse(localStorage.getItem(`${property}`))
        ;(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.projectToDom)(processedObj)
    }
}

// Export all the functionality


/***/ }),

/***/ "./src/components/pageElement-class.js":
/*!*********************************************!*\
  !*** ./src/components/pageElement-class.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementReset": () => (/* binding */ elementReset),
/* harmony export */   "pageElement": () => (/* binding */ pageElement)
/* harmony export */ });
class pageElement {
    constructor(type, className, content) {
        this.type = type
        this.className = className
        this.content = content
    }
    info() {
        console.log(`Type = ${this.type}, Class = ${this.className}, Content = ${content}, Appends to = ${this.appendToWhat}`)
    }
    appendElement(element) {
        element.innerHTML = `<${this.type} class="${this.className}">${this.content}</${this.type}>`
    }
}

const elementReset = (elem) => {
    elem.innerHTML = ""
}




/***/ }),

/***/ "./src/components/project-generator.js":
/*!*********************************************!*\
  !*** ./src/components/project-generator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-generator */ "./src/components/task-generator.js");


class Project {
    // Make an array to hold all of the tasks that are included in a project. 
    constructor(projectName) {
        this.projectName = projectName
        this.projectTasks = []
    }
   
    // Make new task using imported task module and store it in the associated projectTasks array. 
    makeNewTask(name, priority, notes) {
        let newTask = new _task_generator__WEBPACK_IMPORTED_MODULE_0__.Task(name, priority, notes)
        this.projectTasks.push(newTask)
        return newTask
    }
   
    // Display all tasks related to the project object. 
    getAllTasks() {
        console.log(this.projectTasks)
        return this.projectTasks
    }
   
    // Allow for changing of the project name. 
    set changeProjectName(newName) {
        this.projectName = newName
    }
}



/***/ }),

/***/ "./src/components/task-generator.js":
/*!******************************************!*\
  !*** ./src/components/task-generator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    // Gather Information on task. 
    constructor(taskName, taskPriority, taskNotes, taskDueDate) {
        this.taskName = taskName
        this.taskPriority = taskPriority
        this.taskNotes = taskNotes
        this.taskDueDate = taskDueDate
    }
    // Change task property functions for when the user  edits the task. 
    changeName(newName) {
        this.taskName = newName
    }
    changePriority(newPriority) {
        this.taskPriority = newPriority
    }
    changeNotes(newNotes) {
        this.taskNotes = newNotes
    }
    changeDueDate(newDueDate) {
        this.taskDueDate = newDueDate
    }
}



/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inboxProject": () => (/* binding */ inboxProject)
/* harmony export */ });
/* harmony import */ var _components_project_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-generator */ "./src/components/project-generator.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _components_domappender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/domappender */ "./src/components/domappender.js");
/* harmony import */ var _components_dom_manipulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dom-manipulation */ "./src/components/dom-manipulation.js");





// Define the elements needed.

// Create default project "inbox" and add default task to the project.
const inboxProject = new _components_project_generator__WEBPACK_IMPORTED_MODULE_0__.Project('Inbox')
// Create elements for the left-panel. 
inboxProject.makeNewTask('Clean the Kitchen', 1, 'Make sure to clean under the cabinet')
inboxProject.makeNewTask('Take out Trash', 2, 'Remember to sort the recycling')
inboxProject.getAllTasks()





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectButton": () => (/* binding */ addProjectButton),
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "footerPanel": () => (/* binding */ footerPanel),
/* harmony export */   "headerPanel": () => (/* binding */ headerPanel),
/* harmony export */   "leftPanel": () => (/* binding */ leftPanel),
/* harmony export */   "newProjectDiv": () => (/* binding */ newProjectDiv),
/* harmony export */   "rightPanel": () => (/* binding */ rightPanel)
/* harmony export */ });
/* harmony import */ var _components_domappender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/domappender */ "./src/components/domappender.js");
/* harmony import */ var _components_pageElement_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pageElement-class */ "./src/components/pageElement-class.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _components_dom_manipulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dom-manipulation */ "./src/components/dom-manipulation.js");
/* harmony import */ var _components_project_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-generator */ "./src/components/project-generator.js");
/* harmony import */ var _components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/localStorageManipulator */ "./src/components/localStorageManipulator.js");









// Add main content div to body for all other content to append to. 
const contentDiv = document.createElement('div')
contentDiv.setAttribute('id', 'content')
document.body.append(contentDiv)


// Define the elements of the page to append,
const headerPanel = document.createElement('div')
const leftPanel = document.createElement('div')
const rightPanel = document.createElement('div')
const footerPanel = document.createElement('div')
const pageTitle = document.createElement('h1')
const newProjectDiv = document.createElement('div')
const addProjectButton = document.createElement('button')

// Set needed attributes for page elements. 
headerPanel.setAttribute('class', 'header-panel')
leftPanel.setAttribute('class', 'left-panel')
rightPanel.setAttribute('class', 'right-panel')
footerPanel.setAttribute('class', 'footer-panel')
pageTitle.setAttribute('class', 'page-title')
addProjectButton.setAttribute('class', 'add-project-button')
newProjectDiv.setAttribute('class', 'project-div')

// Content for main page elements.
pageTitle.innerText = "- Just Do It! -"
addProjectButton.innerHTML = "Add Project"

// Append all the elements needed to root elements.
newProjectDiv.append(addProjectButton)
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(pageTitle)

// Testing localStorage
console.log(_inbox__WEBPACK_IMPORTED_MODULE_3__.inboxProject)
window.localStorage.setItem("inboxProject", JSON.stringify(_inbox__WEBPACK_IMPORTED_MODULE_3__.inboxProject))

const testItem = window.localStorage.getItem("inboxProject")
console.log(JSON.parse(testItem))

// Process the project object and add the project to the DOM via various defined elements.
// projectToDom(inboxProject)
// Append the add project div to the end of the left-panel div. 
leftPanel.append(newProjectDiv)


// Add events to elements appended to the dom. 
addProjectButton.addEventListener('click', () => {
    // Create form for input element and submit button
    const newProjectForm = document.createElement('form')
    newProjectForm.setAttribute('action', '')
    newProjectDiv.append(newProjectForm)
    // Create input element and on button click replace the button with the input dialog. 
    const newProjectInput = document.createElement('input')
    newProjectInput.setAttribute('id', 'new-project-input')
    newProjectInput.setAttribute('type', 'text')
    newProjectInput.setAttribute('placeholder', 'Project Name')
    newProjectForm.append(newProjectInput)
    // Create submit button for input.
    const newProjectInputButton = document.createElement('input')
    newProjectInputButton.setAttribute('type', 'submit')
    newProjectInputButton.setAttribute('value', 'Submit')
    newProjectForm.append(newProjectInputButton)
    // Replace add project button with form element.
    addProjectButton.replaceWith(newProjectForm)
    
    // On submit of input for new project, create project with name and add it to the dom. 
    newProjectForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newName = document.getElementById('new-project-input').value
        // newName = newName.toString.replaceAll(' ', '')
        console.log(newName)
        
        // Process the project name from the form.
        // Create a new project using the name. 
        // Add the project into local storage.
        projectObjectNamer(document.getElementById('new-project-input').value)
        
        // Not working need to add elem back
        newProjectForm.replaceWith(addProjectButton)
        newProjectDiv.remove(newProjectInputButton)
        
        // Update the list of localStorage Stringified Objs
        ;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_6__.getAllLocalStorage)()
    })
    
    const projectObjectNamer = (name) => {
        name = new _components_project_generator__WEBPACK_IMPORTED_MODULE_5__.Project(name)
        console.log(name)
        // Place item into local storage
        ;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_6__.placeInStorage)(name)
        return name
    }
    
    return newProjectInput
})

;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_6__.getAllLocalStorage)()
;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_6__.processAllLocalStorage)(_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_6__.getAllLocalStorage.localObjs)



/***/ }),

/***/ "./src/fonts/Quicksilver Italic.otf":
/*!******************************************!*\
  !*** ./src/fonts/Quicksilver Italic.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e203ce68db4f2fe842ef.otf";

/***/ }),

/***/ "./src/fonts/Quicksilver.otf":
/*!***********************************!*\
  !*** ./src/fonts/Quicksilver.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f46d90c66892197af6b7.otf";

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUNBLHdGQUFrQjtBQUNsQiw0RkFBc0IsQ0FBQyw2RkFBNEI7QUFDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9kb21hcHBlbmRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvbG9jYWxTdG9yYWdlTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL3BhZ2VFbGVtZW50LWNsYXNzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFzay1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2lsdmVyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVpY2tzaWx2ZXIgSXRhbGljLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDU1MgU3R5bGUgcmVzZXQuICovXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxufVxcclxcbi8qIERlZmluZSBhbGwgb2YgdGhlIGN1c3RvbSBmb250cyB1c2VkLiAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInF1aWNrc2lsdmVyLXJlZ1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJxdWlja3NpbHZlci1pdGxcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbi8qIFNldHVwIGdyaWQgZm9yIG1haW4gcGFnZSBhbmQgdGFzayBkaXNwbGF5ICovXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDZyZW0gMWZyIDFmciAxZnIgNHJlbSAvIDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXHJcXG4gICAgXFxcImxlZnQgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCByaWdodFxcXCJcXHJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcclxcbn1cXHJcXG4vKiBTZXQgZ3JpZCBwb3NpdGlvbnMgZm9yIGRpdnMgKi9cXHJcXG4uaGVhZGVyLXBhbmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcbi5yaWdodC1wYW5lbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDZyZW0pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDZyZW07XFxyXFxufVxcclxcbi5sZWZ0LXBhbmVsIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA0cmVtKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiA2cmVtO1xcclxcbn1cXHJcXG4uZm9vdGVyLXBhbmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxufVxcclxcbi8qIFN0eWxlIHRoZSB0ZXh0IGVsZW1lbnRzLiAqL1xcclxcbi5wYWdlLXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJxdWlja3NpbHZlci1pdGxcXFwiO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7QUFFM0I7QUFDQSx5Q0FBeUM7QUFDekM7SUFDSSw4QkFBOEI7SUFDOUIsNENBQWlDO0FBQ3JDO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsNENBQXlDO0FBQzdDOztBQUVBLDhDQUE4QztBQUM5QztJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDhDQUE4QztJQUM5Qzs7Ozs7bUJBS2U7QUFDbkI7QUFDQSxnQ0FBZ0M7QUFDaEM7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBLDZCQUE2QjtBQUM3QjtJQUNJLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBDU1MgU3R5bGUgcmVzZXQuICovXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuXFxyXFxufVxcclxcbi8qIERlZmluZSBhbGwgb2YgdGhlIGN1c3RvbSBmb250cyB1c2VkLiAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInF1aWNrc2lsdmVyLXJlZ1xcXCI7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvUXVpY2tzaWx2ZXIub3RmKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJxdWlja3NpbHZlci1pdGxcXFwiO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL1F1aWNrc2lsdmVyXFxcXCBJdGFsaWMub3RmKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0dXAgZ3JpZCBmb3IgbWFpbiBwYWdlIGFuZCB0YXNrIGRpc3BsYXkgKi9cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNnJlbSAxZnIgMWZyIDFmciA0cmVtIC8gMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcclxcbiAgICBcXFwibGVmdCByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IHJpZ2h0XFxcIlxcclxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxyXFxufVxcclxcbi8qIFNldCBncmlkIHBvc2l0aW9ucyBmb3IgZGl2cyAqL1xcclxcbi5oZWFkZXItcGFuZWwge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuLnJpZ2h0LXBhbmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgNnJlbSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogNnJlbTtcXHJcXG59XFxyXFxuLmxlZnQtcGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWFyZWE6IGxlZnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDRyZW0pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDZyZW07XFxyXFxufVxcclxcbi5mb290ZXItcGFuZWwge1xcclxcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXHJcXG59XFxyXFxuLyogU3R5bGUgdGhlIHRleHQgZWxlbWVudHMuICovXFxyXFxuLnBhZ2UtdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInF1aWNrc2lsdmVyLWl0bFxcXCI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBsZWZ0UGFuZWwsIHJpZ2h0UGFuZWwgfSBmcm9tIFwiLi5cIlxyXG5pbXBvcnQgeyBkb21BcHBlbmRlciB9IGZyb20gXCIuL2RvbWFwcGVuZGVyXCJcclxuXHJcbmNvbnN0IHByb2plY3RUb0RvbSA9IChwcm9qZWN0T2JqKSA9PiB7XHJcbiAgICAvLyBEZWZpbmUgYWxsIG9mIHRoZSBlbGVtZW50cyB0aGF0IG5lZWQgdG8gYmUgYWRkZWQgdG8gdGhlIGRvbS4gXHJcbiAgICBsZXQgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgcHJvamVjdFRhYkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcblxyXG4gICAgLy8gUHJvY2VzcyB0aGUgcHJvamVjdCBuYW1lIHRvIGEgc3RyaW5nIHdpdGggbm8gc3BhY2VzIHNvIHRoYXQgd2UgY2FuIHVzZSBpdCBhcyBhbiBpZGVudGlmaWVyLiBcclxuICAgIGxldCBwcm9jZXNzZWRQcm9qZWN0TmFtZSA9IHByb2plY3RPYmoucHJvamVjdE5hbWUudG9TdHJpbmcoKS5yZXBsYWNlQWxsKFwiIFwiLCBcIi1cIikudG9Mb3dlckNhc2UoKVxyXG4gICAgcHJvamVjdFRhYi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7cHJvY2Vzc2VkUHJvamVjdE5hbWV9LXRhYmApXHJcbiAgICBwcm9qZWN0VGFiSGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7cHJvY2Vzc2VkUHJvamVjdE5hbWV9LWhlYWRpbmdgKVxyXG4gICAgcHJvamVjdFRhYkhlYWRpbmcuaW5uZXJUZXh0ID0gYCR7cHJvamVjdE9iai5wcm9qZWN0TmFtZX1gXHJcbiAgICBcclxuICAgIC8vIEFwcGVuZCB0aGUgcHJvamVjdC1oZWFkaW5nIHRvIHRoZSBwcm9qZWN0LXRhYiBkaXYuXHJcbiAgICBwcm9qZWN0VGFiLmFwcGVuZChwcm9qZWN0VGFiSGVhZGluZylcclxuICAgIFxyXG4gICAgLy8gQXBwZW5kIHRoZSBwcm9qZWN0LXRhYiB0byB0aGUgbGVmdC1wYW5lbCBET00gZWxlbWVudC5cclxuICAgIGxlZnRQYW5lbC5hcHBlbmQocHJvamVjdFRhYilcclxuXHJcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRhc2tzIGl0ZW1zIG9uIHRoZSBhcnJheSBhbmQgYWRkIHRoZW4gdG8gdGhlIERPTS4gXHJcbiAgICBwcm9qZWN0T2JqLnByb2plY3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGl2IGZvciBlYWNoIG9mIHRoZSB0YXNrcy4gSGVhZGluZ3MgYW5kIE5vdGVzIHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhpcy5cclxuICAgICAgICBsZXQgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2snKVxyXG4gICAgICAgIHJpZ2h0UGFuZWwuYXBwZW5kKHBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAgZG9tQXBwZW5kZXIoJ2gxJywgJ3Rhc2stdGl0bGUnLCBwYXJlbnRFbGVtZW50LCB0YXNrLnRhc2tOYW1lKVxyXG4gICAgICAgIGRvbUFwcGVuZGVyKCdwJywgJ3Rhc2stbm90ZXMnLCBwYXJlbnRFbGVtZW50LCB0YXNrLnRhc2tOb3RlcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0VG9Eb20gfSIsImZ1bmN0aW9uIGRvbUFwcGVuZGVyKGVsZW1lbnQsIGNsYXNzTmFtZSwgYXBwZW5kVG8sIGNvbnRlbnQpIHtcclxuICAgIGxldCBhcHBlbmRhZ2VFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KVxyXG4gICAgYXBwZW5kYWdlRWxlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKVxyXG4gICAgYXBwZW5kYWdlRWxlbS5pbm5lclRleHQgPSBjb250ZW50XHJcbiAgICBhcHBlbmRUby5hcHBlbmQoYXBwZW5kYWdlRWxlbSkgICBcclxufVxyXG5cclxuZXhwb3J0IHsgZG9tQXBwZW5kZXIgfSIsImltcG9ydCB7IHByb2plY3RUb0RvbSB9IGZyb20gXCIuL2RvbS1tYW5pcHVsYXRpb25cIlxyXG5cclxuLy8gUGxhY2UgcHJvamVjdCBvYmplY3QgaW50byBsb2NhbFN0b3JhZ2Ugd2l0aCBpZGVudGlmaWVyIGJlaW5nIHRoZSBwcm9qZWN0bmFtZS5cclxuLy8gQ29udmVydCB0byBKU09OIHNvIG9iamVjdCBjYW4gYmUgcGxhY2VkIGluIGxvY2FsU3RvcmdlLiBcclxuY29uc3QgcGxhY2VJblN0b3JhZ2UgPSAocHJvamVjdE9iaikgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Byb2plY3RPYmoucHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iaikpXHJcbn1cclxuLy8gR2V0IHRoZSBzdG9yZSBwcm9qZWN0IG9iamVjdCBmcm9tIHN0b3JhZ2UgYW5kIHBhcnNlIGl0IGludG8ganMgb2JqZWN0IGFuZCByZXR1cm4gaXQuIFxyXG5jb25zdCByZXRyaWV2ZUZyb21TdG9yYWdlID0gKHByb2plY3RPYmopID0+IHtcclxuICAgIGxldCB1blBhcnNlZEl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJvamVjdE9iai5wcm9qZWN0TmFtZX1gKVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodW5QYXJzZWRJdGVtKVxyXG59XHJcblxyXG4vLyBSZW1vdmUgaXRlbSBmcm9tIGxvY2FsU3RvcmFnZSBieSBuYXRpdmUganMgb2JqZWN0IG5hbWUuXHJcbmNvbnN0IHJlbW92ZUZyb21TdG9yYWdlID0gKHByb2plY3RPYmopID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtwcm9qZWN0T2JqLnByb2plY3ROYW1lfWApXHJcbn1cclxuXHJcbi8vIENsZWFyIGFsbCBkYXRhIGZyb20gbG9jYWxTdG9yYWdlLlxyXG5jb25zdCBjbGVhckFsbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgIGNvbnNvbGUubG9nKCdBbGwgdGhlIGRhdGEgaGFzIGJlZW4gY2xlYXJlZC4nKVxyXG59XHJcblxyXG4vLyBHZXQgYWxsIGl0ZW1zIGluIGxvY2FsU3RvcmFnZVxyXG5jb25zdCBnZXRBbGxMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2NhbE9ianMgPSB7Li4ubG9jYWxTdG9yYWdlfVxyXG4gICAgY29uc3QgbG9nVGhlT2JqcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbE9ianMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvY2FsT2JqcyxcclxuICAgICAgICBsb2dUaGVPYmpzLFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBQcm9jZXNzIGxpc3Qgb2YganNvbiBhbmQgc3RyaW5naWZpZWQgb2JqcyBpbnRvIG5hdGl2ZSBKUyBvYmpzLlxyXG5jb25zdCBwcm9jZXNzQWxsTG9jYWxTdG9yYWdlID0gKGxpc3RPZkxvY2FsT2JqcykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBsaXN0T2ZMb2NhbE9ianMpIHtcclxuICAgICAgICAvLyBQYXJzZSBhbGwgc3RyaW5naWZpZWQgb2JqcyB0byBKUyBvYmplY3RzLlxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BlcnR5KVxyXG4gICAgICAgIGxldCBwcm9jZXNzZWRPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3Byb3BlcnR5fWApKVxyXG4gICAgICAgIHByb2plY3RUb0RvbShwcm9jZXNzZWRPYmopXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhbGwgdGhlIGZ1bmN0aW9uYWxpdHlcclxuZXhwb3J0IHsgcGxhY2VJblN0b3JhZ2UsIHJldHJpZXZlRnJvbVN0b3JhZ2UsIHJlbW92ZUZyb21TdG9yYWdlLCBjbGVhckFsbFN0b3JhZ2UsIGdldEFsbExvY2FsU3RvcmFnZSwgcHJvY2Vzc0FsbExvY2FsU3RvcmFnZSB9IiwiY2xhc3MgcGFnZUVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgY2xhc3NOYW1lLCBjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZVxyXG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudFxyXG4gICAgfVxyXG4gICAgaW5mbygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVHlwZSA9ICR7dGhpcy50eXBlfSwgQ2xhc3MgPSAke3RoaXMuY2xhc3NOYW1lfSwgQ29udGVudCA9ICR7Y29udGVudH0sIEFwcGVuZHMgdG8gPSAke3RoaXMuYXBwZW5kVG9XaGF0fWApXHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGA8JHt0aGlzLnR5cGV9IGNsYXNzPVwiJHt0aGlzLmNsYXNzTmFtZX1cIj4ke3RoaXMuY29udGVudH08LyR7dGhpcy50eXBlfT5gXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGVsZW1lbnRSZXNldCA9IChlbGVtKSA9PiB7XHJcbiAgICBlbGVtLmlubmVySFRNTCA9IFwiXCJcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHBhZ2VFbGVtZW50LCBlbGVtZW50UmVzZXQgfSIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2stZ2VuZXJhdG9yJ1xyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICAvLyBNYWtlIGFuIGFycmF5IHRvIGhvbGQgYWxsIG9mIHRoZSB0YXNrcyB0aGF0IGFyZSBpbmNsdWRlZCBpbiBhIHByb2plY3QuIFxyXG4gICAgY29uc3RydWN0b3IocHJvamVjdE5hbWUpIHtcclxuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcclxuICAgICAgICB0aGlzLnByb2plY3RUYXNrcyA9IFtdXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gTWFrZSBuZXcgdGFzayB1c2luZyBpbXBvcnRlZCB0YXNrIG1vZHVsZSBhbmQgc3RvcmUgaXQgaW4gdGhlIGFzc29jaWF0ZWQgcHJvamVjdFRhc2tzIGFycmF5LiBcclxuICAgIG1ha2VOZXdUYXNrKG5hbWUsIHByaW9yaXR5LCBub3Rlcykge1xyXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sobmFtZSwgcHJpb3JpdHksIG5vdGVzKVxyXG4gICAgICAgIHRoaXMucHJvamVjdFRhc2tzLnB1c2gobmV3VGFzaylcclxuICAgICAgICByZXR1cm4gbmV3VGFza1xyXG4gICAgfVxyXG4gICBcclxuICAgIC8vIERpc3BsYXkgYWxsIHRhc2tzIHJlbGF0ZWQgdG8gdGhlIHByb2plY3Qgb2JqZWN0LiBcclxuICAgIGdldEFsbFRhc2tzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdFRhc2tzKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RUYXNrc1xyXG4gICAgfVxyXG4gICBcclxuICAgIC8vIEFsbG93IGZvciBjaGFuZ2luZyBvZiB0aGUgcHJvamVjdCBuYW1lLiBcclxuICAgIHNldCBjaGFuZ2VQcm9qZWN0TmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IG5ld05hbWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdCB9IiwiY2xhc3MgVGFzayB7XHJcbiAgICAvLyBHYXRoZXIgSW5mb3JtYXRpb24gb24gdGFzay4gXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgdGFza1ByaW9yaXR5LCB0YXNrTm90ZXMsIHRhc2tEdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy50YXNrTmFtZSA9IHRhc2tOYW1lXHJcbiAgICAgICAgdGhpcy50YXNrUHJpb3JpdHkgPSB0YXNrUHJpb3JpdHlcclxuICAgICAgICB0aGlzLnRhc2tOb3RlcyA9IHRhc2tOb3Rlc1xyXG4gICAgICAgIHRoaXMudGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZVxyXG4gICAgfVxyXG4gICAgLy8gQ2hhbmdlIHRhc2sgcHJvcGVydHkgZnVuY3Rpb25zIGZvciB3aGVuIHRoZSB1c2VyICBlZGl0cyB0aGUgdGFzay4gXHJcbiAgICBjaGFuZ2VOYW1lKG5ld05hbWUpIHtcclxuICAgICAgICB0aGlzLnRhc2tOYW1lID0gbmV3TmFtZVxyXG4gICAgfVxyXG4gICAgY2hhbmdlUHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eSA9IG5ld1ByaW9yaXR5XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VOb3RlcyhuZXdOb3Rlcykge1xyXG4gICAgICAgIHRoaXMudGFza05vdGVzID0gbmV3Tm90ZXNcclxuICAgIH1cclxuICAgIGNoYW5nZUR1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMudGFza0R1ZURhdGUgPSBuZXdEdWVEYXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFRhc2sgfSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IGxlZnRQYW5lbCwgcmlnaHRQYW5lbCwgaGVhZGVyUGFuZWwgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBkb21BcHBlbmRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvZG9tYXBwZW5kZXJcIjtcclxuaW1wb3J0IHsgcHJvamVjdFRvRG9tIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kb20tbWFuaXB1bGF0aW9uXCI7XHJcblxyXG4vLyBEZWZpbmUgdGhlIGVsZW1lbnRzIG5lZWRlZC5cclxuXHJcbi8vIENyZWF0ZSBkZWZhdWx0IHByb2plY3QgXCJpbmJveFwiIGFuZCBhZGQgZGVmYXVsdCB0YXNrIHRvIHRoZSBwcm9qZWN0LlxyXG5jb25zdCBpbmJveFByb2plY3QgPSBuZXcgUHJvamVjdCgnSW5ib3gnKVxyXG4vLyBDcmVhdGUgZWxlbWVudHMgZm9yIHRoZSBsZWZ0LXBhbmVsLiBcclxuaW5ib3hQcm9qZWN0Lm1ha2VOZXdUYXNrKCdDbGVhbiB0aGUgS2l0Y2hlbicsIDEsICdNYWtlIHN1cmUgdG8gY2xlYW4gdW5kZXIgdGhlIGNhYmluZXQnKVxyXG5pbmJveFByb2plY3QubWFrZU5ld1Rhc2soJ1Rha2Ugb3V0IFRyYXNoJywgMiwgJ1JlbWVtYmVyIHRvIHNvcnQgdGhlIHJlY3ljbGluZycpXHJcbmluYm94UHJvamVjdC5nZXRBbGxUYXNrcygpXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7aW5ib3hQcm9qZWN0fSIsImltcG9ydCB7IGRvbUFwcGVuZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kb21hcHBlbmRlclwiO1xyXG5pbXBvcnQgeyBwYWdlRWxlbWVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZUVsZW1lbnQtY2xhc3NcIjtcclxuaW1wb3J0ICcuL2luZGV4LmNzcydcclxuaW1wb3J0IHsgSW5ib3hUb0RvbSB9IGZyb20gXCIuL2luYm94XCI7XHJcbmltcG9ydCB7IHByb2plY3RUb0RvbSB9IGZyb20gXCIuL2NvbXBvbmVudHMvZG9tLW1hbmlwdWxhdGlvblwiO1xyXG5pbXBvcnQgeyBpbmJveFByb2plY3QgfSBmcm9tIFwiLi9pbmJveFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0LWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRBbGxMb2NhbFN0b3JhZ2UsIHByb2Nlc3NBbGxMb2NhbFN0b3JhZ2UsIHBsYWNlSW5TdG9yYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2NhbFN0b3JhZ2VNYW5pcHVsYXRvclwiO1xyXG5cclxuLy8gQWRkIG1haW4gY29udGVudCBkaXYgdG8gYm9keSBmb3IgYWxsIG90aGVyIGNvbnRlbnQgdG8gYXBwZW5kIHRvLiBcclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudERpdilcclxuXHJcblxyXG4vLyBEZWZpbmUgdGhlIGVsZW1lbnRzIG9mIHRoZSBwYWdlIHRvIGFwcGVuZCxcclxuY29uc3QgaGVhZGVyUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCByaWdodFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3QgZm9vdGVyUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbmNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbi8vIFNldCBuZWVkZWQgYXR0cmlidXRlcyBmb3IgcGFnZSBlbGVtZW50cy4gXHJcbmhlYWRlclBhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyLXBhbmVsJylcclxubGVmdFBhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGVmdC1wYW5lbCcpXHJcbnJpZ2h0UGFuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyaWdodC1wYW5lbCcpXHJcbmZvb3RlclBhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vdGVyLXBhbmVsJylcclxucGFnZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZS10aXRsZScpXHJcbmFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtcHJvamVjdC1idXR0b24nKVxyXG5uZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1kaXYnKVxyXG5cclxuLy8gQ29udGVudCBmb3IgbWFpbiBwYWdlIGVsZW1lbnRzLlxyXG5wYWdlVGl0bGUuaW5uZXJUZXh0ID0gXCItIEp1c3QgRG8gSXQhIC1cIlxyXG5hZGRQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIlxyXG5cclxuLy8gQXBwZW5kIGFsbCB0aGUgZWxlbWVudHMgbmVlZGVkIHRvIHJvb3QgZWxlbWVudHMuXHJcbm5ld1Byb2plY3REaXYuYXBwZW5kKGFkZFByb2plY3RCdXR0b24pXHJcbmNvbnRlbnREaXYuYXBwZW5kKGhlYWRlclBhbmVsLCBsZWZ0UGFuZWwsIHJpZ2h0UGFuZWwsIGZvb3RlclBhbmVsKVxyXG5oZWFkZXJQYW5lbC5hcHBlbmQocGFnZVRpdGxlKVxyXG5cclxuLy8gVGVzdGluZyBsb2NhbFN0b3JhZ2VcclxuY29uc29sZS5sb2coaW5ib3hQcm9qZWN0KVxyXG53aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpbmJveFByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkoaW5ib3hQcm9qZWN0KSlcclxuXHJcbmNvbnN0IHRlc3RJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaW5ib3hQcm9qZWN0XCIpXHJcbmNvbnNvbGUubG9nKEpTT04ucGFyc2UodGVzdEl0ZW0pKVxyXG5cclxuLy8gUHJvY2VzcyB0aGUgcHJvamVjdCBvYmplY3QgYW5kIGFkZCB0aGUgcHJvamVjdCB0byB0aGUgRE9NIHZpYSB2YXJpb3VzIGRlZmluZWQgZWxlbWVudHMuXHJcbi8vIHByb2plY3RUb0RvbShpbmJveFByb2plY3QpXHJcbi8vIEFwcGVuZCB0aGUgYWRkIHByb2plY3QgZGl2IHRvIHRoZSBlbmQgb2YgdGhlIGxlZnQtcGFuZWwgZGl2LiBcclxubGVmdFBhbmVsLmFwcGVuZChuZXdQcm9qZWN0RGl2KVxyXG5cclxuXHJcbi8vIEFkZCBldmVudHMgdG8gZWxlbWVudHMgYXBwZW5kZWQgdG8gdGhlIGRvbS4gXHJcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgZm9ybSBmb3IgaW5wdXQgZWxlbWVudCBhbmQgc3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJycpXHJcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZChuZXdQcm9qZWN0Rm9ybSlcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50IGFuZCBvbiBidXR0b24gY2xpY2sgcmVwbGFjZSB0aGUgYnV0dG9uIHdpdGggdGhlIGlucHV0IGRpYWxvZy4gXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvamVjdC1pbnB1dCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgbmV3UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJylcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZChuZXdQcm9qZWN0SW5wdXQpXHJcbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvbiBmb3IgaW5wdXQuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKVxyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kKG5ld1Byb2plY3RJbnB1dEJ1dHRvbilcclxuICAgIC8vIFJlcGxhY2UgYWRkIHByb2plY3QgYnV0dG9uIHdpdGggZm9ybSBlbGVtZW50LlxyXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5yZXBsYWNlV2l0aChuZXdQcm9qZWN0Rm9ybSlcclxuICAgIFxyXG4gICAgLy8gT24gc3VibWl0IG9mIGlucHV0IGZvciBuZXcgcHJvamVjdCwgY3JlYXRlIHByb2plY3Qgd2l0aCBuYW1lIGFuZCBhZGQgaXQgdG8gdGhlIGRvbS4gXHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGV0IG5ld05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtaW5wdXQnKS52YWx1ZVxyXG4gICAgICAgIC8vIG5ld05hbWUgPSBuZXdOYW1lLnRvU3RyaW5nLnJlcGxhY2VBbGwoJyAnLCAnJylcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdOYW1lKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBmb3JtLlxyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IHVzaW5nIHRoZSBuYW1lLiBcclxuICAgICAgICAvLyBBZGQgdGhlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICAgIHByb2plY3RPYmplY3ROYW1lcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtaW5wdXQnKS52YWx1ZSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBOb3Qgd29ya2luZyBuZWVkIHRvIGFkZCBlbGVtIGJhY2tcclxuICAgICAgICBuZXdQcm9qZWN0Rm9ybS5yZXBsYWNlV2l0aChhZGRQcm9qZWN0QnV0dG9uKVxyXG4gICAgICAgIG5ld1Byb2plY3REaXYucmVtb3ZlKG5ld1Byb2plY3RJbnB1dEJ1dHRvbilcclxuICAgICAgICBcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGxpc3Qgb2YgbG9jYWxTdG9yYWdlIFN0cmluZ2lmaWVkIE9ianNcclxuICAgICAgICBnZXRBbGxMb2NhbFN0b3JhZ2UoKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdE9iamVjdE5hbWVyID0gKG5hbWUpID0+IHtcclxuICAgICAgICBuYW1lID0gbmV3IFByb2plY3QobmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgICAgIC8vIFBsYWNlIGl0ZW0gaW50byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgcGxhY2VJblN0b3JhZ2UobmFtZSlcclxuICAgICAgICByZXR1cm4gbmFtZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbmV3UHJvamVjdElucHV0XHJcbn0pXHJcblxyXG5nZXRBbGxMb2NhbFN0b3JhZ2UoKVxyXG5wcm9jZXNzQWxsTG9jYWxTdG9yYWdlKGdldEFsbExvY2FsU3RvcmFnZS5sb2NhbE9ianMpXHJcblxyXG5leHBvcnQge2xlZnRQYW5lbCwgcmlnaHRQYW5lbCwgY29udGVudERpdiwgZm9vdGVyUGFuZWwsIGhlYWRlclBhbmVsLCBuZXdQcm9qZWN0RGl2LCBhZGRQcm9qZWN0QnV0dG9ufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==