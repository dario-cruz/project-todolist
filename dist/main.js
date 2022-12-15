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
/* harmony export */   "processList": () => (/* binding */ processList),
/* harmony export */   "projectToDom": () => (/* binding */ projectToDom)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _domappender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domappender */ "./src/components/domappender.js");
/* harmony import */ var _project_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-generator */ "./src/components/project-generator.js");




const projectToDom = (projectObj) => {
    // Define all of the elements that need to be added to the dom. 
    const projectTab = document.createElement('div')
    const projectTabHeading = document.createElement('h1')
    const addTaskButton = document.createElement('button')

    // Create string for attribute setting. So we can style and add eventlisteners. 
    let projectName = projectObj.projectName.toString()
    // Process the project name to a string with spaces so that we can use it as the heading.  
    let processedProjectName = projectObj.projectName.toString().replaceAll("-", " ")
    // Set attributes for dynamically added content.
    projectTab.setAttribute('id', `${projectName}-tab`)
    projectTabHeading.setAttribute('id', `${projectName}-heading`)
    projectTab.setAttribute('class', 'project-tab')
    projectTabHeading.setAttribute('class', 'project-heading')
    addTaskButton.setAttribute('class', 'task-button')

    // Set the text content for elements. 
    projectTabHeading.innerText = `${processedProjectName}`
    addTaskButton.innerText = 'Add Task'

    // Append the project-heading to the project-tab div.
    projectTab.append(projectTabHeading)
    
    // Append the project-tab to the left-panel DOM element.
    ___WEBPACK_IMPORTED_MODULE_0__.leftPanel.append(projectTab)

    // Add event for changing displayed tasks related to projects.
    projectTab.addEventListener('click', () => {
        // Remove all content form the task panel.
        ___WEBPACK_IMPORTED_MODULE_0__.rightPanel.innerHTML = ""        
        
        // Set location to append button because we do not want it hovering on top of the h1 heading.
        projectTab.appendChild(addTaskButton)
        
        // On button click allow for adding of task.
        addTaskButton.addEventListener('click', () => {

        })
        // Set data attribute that changes with data being displayed.
        // We can reference this when we want to add tasks to the object and update the dom. 
        ___WEBPACK_IMPORTED_MODULE_0__.rightPanel.setAttribute('data-object', `${projectName}`)

        // Iterate over the tasks items on the array and add then to the DOM. 
        projectObj.projectTasks.forEach(task => {
        // Create a div for each of the tasks. Headings and Notes will be attached to this.
        let parentElement = document.createElement('div')
        parentElement.setAttribute('class', 'task')
        ___WEBPACK_IMPORTED_MODULE_0__.rightPanel.append(parentElement)
        ;(0,_domappender__WEBPACK_IMPORTED_MODULE_1__.domAppender)('h1', 'task-title', parentElement, task.taskName)
        ;(0,_domappender__WEBPACK_IMPORTED_MODULE_1__.domAppender)('p', 'task-notes', parentElement, task.taskNotes)
    });
    })

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

// Process all of the objects in the projectList array and place them in the dom. 
const processList = (arrayOfObjs) => {
    arrayOfObjs.forEach(item => {
        projectToDom(item)
    })
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
/* harmony export */   "processProjectList": () => (/* binding */ processProjectList),
/* harmony export */   "removeFromStorage": () => (/* binding */ removeFromStorage),
/* harmony export */   "retrieveFromStorage": () => (/* binding */ retrieveFromStorage)
/* harmony export */ });
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ "./src/components/dom-manipulation.js");
/* harmony import */ var _project_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-generator */ "./src/components/project-generator.js");



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

// Process all of the objects created to localStorage JSON
const processProjectList = () => {
    _project_generator__WEBPACK_IMPORTED_MODULE_1__.projectList.forEach(item => {
        item = JSON.stringify(item)
        localStorage.setItem(item)
    })
}

// Process list of json and stringified objs into native JS objs.
const processAllLocalStorage = (destinationArray) => {
    // Get a list of all items in localStorage.
    let localStorageList = {...localStorage}
    // For each value, parse the object out of JSON
    Object.keys(localStorageList).forEach(key => {
        let unprocessedItem = localStorage.getItem(`${key}`)
        destinationArray.push(JSON.parse(`${unprocessedItem}`))
        // Check the status of the destination array.
        console.log(destinationArray)
    })
}

// Export all the functionality


/***/ }),

/***/ "./src/components/project-generator.js":
/*!*********************************************!*\
  !*** ./src/components/project-generator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addProjectToArray": () => (/* binding */ addProjectToArray),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _task_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-generator */ "./src/components/task-generator.js");


// Maintain a list of all projects created. 
const projectList = []

// Make function to add project to array
const addProjectToArray = (Obj, Array) => {
    // Append Object to the designated array.
    Array.push(Obj)
    console.log(Array)
}

class Project {
    // Make an array to hold all of the tasks that are included in a project. 
    constructor(projectName) {
        this.projectName = projectName
        this.projectTasks = []
    }
   
    // Make new task using imported task module and store it in the associated projectTasks array. 
    makeNewTask(name, priority, notes, dueDate) {
        let newTask = new _task_generator__WEBPACK_IMPORTED_MODULE_0__.Task(name, priority, notes, dueDate)
        this.projectTasks.push(newTask)
    }
   
    // Display all tasks related to the project object. 
    get getAllTasks() {
        console.log(this.projectTasks)
        return this.projectTasks
    }
    
    // Allow for changing of the project name. 
    set changeProjectName(newName) {
        this.projectName = newName
    }

    // Add the project to the array. 
    set addThisProjectTooArray(array) {
        array.push(this)
        // Check if object was placed.
        console.log(array)
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
    
    // Getters for needed task elements
    get getName() {
        return this.taskName
    }
    get getPriority() {
        return this.taskPriority
    }
    get getNotes() {
        return this.taskNotes
    }
    get getDueDate() {
        return this.taskDueDate
    }

    //Setters for changing task properties for when the user edits the task. 
    set changeName(newName) {
        this.taskName = newName
    }
    set changePriority(newPriority) {
        this.taskPriority = newPriority
    }
    set changeNotes(newNotes) {
        this.taskNotes = newNotes
    }
    set changeDueDate(newDueDate) {
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
/* harmony export */   "makeDefaultProject": () => (/* binding */ makeDefaultProject)
/* harmony export */ });
/* harmony import */ var _components_project_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-generator */ "./src/components/project-generator.js");
/* harmony import */ var _components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/localStorageManipulator */ "./src/components/localStorageManipulator.js");



// Make IIFE that will create the default task. 
const makeDefaultProject = (() => {
    // Make condition to check localStorage for items. If items are present, do not add the default project.
    if (localStorage.length == 0) {
        // Create default project "inbox" and add default task to the project.
        const inboxProject = new _components_project_generator__WEBPACK_IMPORTED_MODULE_0__.Project('Inbox')
        // Create elements for the left-panel. 
        inboxProject.makeNewTask('Clean the Kitchen', 1, 'Make sure to clean under the cabinet.')
        inboxProject.makeNewTask('Take out Trash', 2, 'Remember to sort the recycling.')
        
        //Add it to the project list. 
        ;(0,_components_project_generator__WEBPACK_IMPORTED_MODULE_0__.addProjectToArray)(inboxProject, _components_project_generator__WEBPACK_IMPORTED_MODULE_0__.projectList)
        //Add to localStorage
        ;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_1__.placeInStorage)(inboxProject)
    } else {
        console.log('Items present in localStorage.')
        console.log('Not creating default project.')
    }
})()




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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _components_project_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/project-generator */ "./src/components/project-generator.js");
/* harmony import */ var _components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/localStorageManipulator */ "./src/components/localStorageManipulator.js");
/* harmony import */ var _components_dom_manipulation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dom-manipulation */ "./src/components/dom-manipulation.js");






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
leftPanel.setAttribute('id', 'project-panel')
rightPanel.setAttribute('class', 'right-panel')
rightPanel.setAttribute('id', 'task-panel')
footerPanel.setAttribute('class', 'footer-panel')
pageTitle.setAttribute('class', 'page-title')
addProjectButton.setAttribute('class', 'add-project-button')
newProjectDiv.setAttribute('class', 'project-div')

// Content for main page elements.
pageTitle.innerText = "- Just Do It! - a Todo List by Dario Cruz"
addProjectButton.innerHTML = "Add Project"

// Append all the elements needed to root elements.
newProjectDiv.append(addProjectButton)
contentDiv.append(headerPanel, leftPanel, rightPanel, footerPanel)
headerPanel.append(pageTitle)
leftPanel.append(newProjectDiv)

// Check all localStorage items, convert, and add to array for dom appending.
;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_3__.processAllLocalStorage)(_components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList)
// Append all items put in the array to the dom.
;(0,_components_dom_manipulation__WEBPACK_IMPORTED_MODULE_4__.processList)(_components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList)


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
        // Prevent the default form post and refresh of the page.
        event.preventDefault()

        // Process the project name from the form.
        let newProjectName = document.getElementById('new-project-input').value
        newProjectName = newProjectName.replaceAll(' ', '-')
        
        // Create a new project using the name. 
        const processFormSubmit = ((objectName) => {
            // Create object from the given name argument.
            let newObject = new _components_project_generator__WEBPACK_IMPORTED_MODULE_2__.Project(objectName)
            console.log(newObject)
            
            // Push to the list for appending to dom later. 
            _components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList.push(newObject)
            
            // Add the project into local storage.
            ;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_3__.placeInStorage)(newObject)
            
            // Check the contents of the array.
            console.log(_components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList)

            // Allow for access of new object outside of function. So we can append to the dom.
            return newObject
        })(newProjectName)
        
        
        // Add project to the dom
        ;(0,_components_dom_manipulation__WEBPACK_IMPORTED_MODULE_4__.projectToDom)(_components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList[_components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList.length - 1])


        // Replace the add new project form with the add project button.
        newProjectForm.replaceWith(addProjectButton)

    })
    

    return newProjectInput
})






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL2RvbWFwcGVuZGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9sb2NhbFN0b3JhZ2VNYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2stZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NpbHZlci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2lsdmVyIEl0YWxpYy5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ1NTIFN0eWxlIHJlc2V0LiAqL1xcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG4vKiBEZWZpbmUgYWxsIG9mIHRoZSBjdXN0b20gZm9udHMgdXNlZC4gKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJxdWlja3NpbHZlci1yZWdcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicXVpY2tzaWx2ZXItaXRsXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXR1cCBncmlkIGZvciBtYWluIHBhZ2UgYW5kIHRhc2sgZGlzcGxheSAqL1xcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA2cmVtIDFmciAxZnIgMWZyIDRyZW0gLyAxZnIgM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxyXFxuICAgIFxcXCJsZWZ0IHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXHJcXG59XFxyXFxuLyogU2V0IGdyaWQgcG9zaXRpb25zIGZvciBkaXZzICovXFxyXFxuLmhlYWRlci1wYW5lbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG4ucmlnaHQtcGFuZWwge1xcclxcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCA2cmVtKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiA2cmVtO1xcclxcbn1cXHJcXG4ubGVmdC1wYW5lbCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXJlYTogbGVmdDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNHJlbSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogNnJlbTtcXHJcXG59XFxyXFxuLmZvb3Rlci1wYW5lbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbn1cXHJcXG4vKiBTdHlsZSB0aGUgdGV4dCBlbGVtZW50cy4gKi9cXHJcXG4ucGFnZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicXVpY2tzaWx2ZXItaXRsXFxcIjtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0Qix1QkFBdUI7O0FBRTNCO0FBQ0EseUNBQXlDO0FBQ3pDO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUFpQztBQUNyQztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUF5QztBQUM3Qzs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUM7Ozs7O21CQUtlO0FBQ25CO0FBQ0EsZ0NBQWdDO0FBQ2hDO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQSw2QkFBNkI7QUFDN0I7SUFDSSw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTIFN0eWxlIHJlc2V0LiAqL1xcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcblxcclxcbn1cXHJcXG4vKiBEZWZpbmUgYWxsIG9mIHRoZSBjdXN0b20gZm9udHMgdXNlZC4gKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJxdWlja3NpbHZlci1yZWdcXFwiO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL1F1aWNrc2lsdmVyLm90Zik7XFxyXFxufVxcclxcbkBmb250LWZhY2V7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicXVpY2tzaWx2ZXItaXRsXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoLi9mb250cy9RdWlja3NpbHZlclxcXFwgSXRhbGljLm90Zik7XFxyXFxufVxcclxcblxcclxcbi8qIFNldHVwIGdyaWQgZm9yIG1haW4gcGFnZSBhbmQgdGFzayBkaXNwbGF5ICovXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDZyZW0gMWZyIDFmciAxZnIgNHJlbSAvIDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIiBcXHJcXG4gICAgXFxcImxlZnQgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCByaWdodFxcXCJcXHJcXG4gICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcclxcbn1cXHJcXG4vKiBTZXQgZ3JpZCBwb3NpdGlvbnMgZm9yIGRpdnMgKi9cXHJcXG4uaGVhZGVyLXBhbmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcbi5yaWdodC1wYW5lbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDZyZW0pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDZyZW07XFxyXFxufVxcclxcbi5sZWZ0LXBhbmVsIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCA0cmVtKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiA2cmVtO1xcclxcbn1cXHJcXG4uZm9vdGVyLXBhbmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxyXFxufVxcclxcbi8qIFN0eWxlIHRoZSB0ZXh0IGVsZW1lbnRzLiAqL1xcclxcbi5wYWdlLXRpdGxlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJxdWlja3NpbHZlci1pdGxcXFwiO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgbGVmdFBhbmVsLCByaWdodFBhbmVsIH0gZnJvbSBcIi4uXCJcclxuaW1wb3J0IHsgZG9tQXBwZW5kZXIgfSBmcm9tIFwiLi9kb21hcHBlbmRlclwiXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LWdlbmVyYXRvclwiXHJcblxyXG5jb25zdCBwcm9qZWN0VG9Eb20gPSAocHJvamVjdE9iaikgPT4ge1xyXG4gICAgLy8gRGVmaW5lIGFsbCBvZiB0aGUgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGJlIGFkZGVkIHRvIHRoZSBkb20uIFxyXG4gICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBwcm9qZWN0VGFiSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgIC8vIENyZWF0ZSBzdHJpbmcgZm9yIGF0dHJpYnV0ZSBzZXR0aW5nLiBTbyB3ZSBjYW4gc3R5bGUgYW5kIGFkZCBldmVudGxpc3RlbmVycy4gXHJcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBwcm9qZWN0T2JqLnByb2plY3ROYW1lLnRvU3RyaW5nKClcclxuICAgIC8vIFByb2Nlc3MgdGhlIHByb2plY3QgbmFtZSB0byBhIHN0cmluZyB3aXRoIHNwYWNlcyBzbyB0aGF0IHdlIGNhbiB1c2UgaXQgYXMgdGhlIGhlYWRpbmcuICBcclxuICAgIGxldCBwcm9jZXNzZWRQcm9qZWN0TmFtZSA9IHByb2plY3RPYmoucHJvamVjdE5hbWUudG9TdHJpbmcoKS5yZXBsYWNlQWxsKFwiLVwiLCBcIiBcIilcclxuICAgIC8vIFNldCBhdHRyaWJ1dGVzIGZvciBkeW5hbWljYWxseSBhZGRlZCBjb250ZW50LlxyXG4gICAgcHJvamVjdFRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cHJvamVjdE5hbWV9LXRhYmApXHJcbiAgICBwcm9qZWN0VGFiSGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7cHJvamVjdE5hbWV9LWhlYWRpbmdgKVxyXG4gICAgcHJvamVjdFRhYi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtdGFiJylcclxuICAgIHByb2plY3RUYWJIZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1oZWFkaW5nJylcclxuICAgIGFkZFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrLWJ1dHRvbicpXHJcblxyXG4gICAgLy8gU2V0IHRoZSB0ZXh0IGNvbnRlbnQgZm9yIGVsZW1lbnRzLiBcclxuICAgIHByb2plY3RUYWJIZWFkaW5nLmlubmVyVGV4dCA9IGAke3Byb2Nlc3NlZFByb2plY3ROYW1lfWBcclxuICAgIGFkZFRhc2tCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJ1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgcHJvamVjdC1oZWFkaW5nIHRvIHRoZSBwcm9qZWN0LXRhYiBkaXYuXHJcbiAgICBwcm9qZWN0VGFiLmFwcGVuZChwcm9qZWN0VGFiSGVhZGluZylcclxuICAgIFxyXG4gICAgLy8gQXBwZW5kIHRoZSBwcm9qZWN0LXRhYiB0byB0aGUgbGVmdC1wYW5lbCBET00gZWxlbWVudC5cclxuICAgIGxlZnRQYW5lbC5hcHBlbmQocHJvamVjdFRhYilcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgZm9yIGNoYW5naW5nIGRpc3BsYXllZCB0YXNrcyByZWxhdGVkIHRvIHByb2plY3RzLlxyXG4gICAgcHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGNvbnRlbnQgZm9ybSB0aGUgdGFzayBwYW5lbC5cclxuICAgICAgICByaWdodFBhbmVsLmlubmVySFRNTCA9IFwiXCIgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCBsb2NhdGlvbiB0byBhcHBlbmQgYnV0dG9uIGJlY2F1c2Ugd2UgZG8gbm90IHdhbnQgaXQgaG92ZXJpbmcgb24gdG9wIG9mIHRoZSBoMSBoZWFkaW5nLlxyXG4gICAgICAgIHByb2plY3RUYWIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbilcclxuICAgICAgICBcclxuICAgICAgICAvLyBPbiBidXR0b24gY2xpY2sgYWxsb3cgZm9yIGFkZGluZyBvZiB0YXNrLlxyXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gU2V0IGRhdGEgYXR0cmlidXRlIHRoYXQgY2hhbmdlcyB3aXRoIGRhdGEgYmVpbmcgZGlzcGxheWVkLlxyXG4gICAgICAgIC8vIFdlIGNhbiByZWZlcmVuY2UgdGhpcyB3aGVuIHdlIHdhbnQgdG8gYWRkIHRhc2tzIHRvIHRoZSBvYmplY3QgYW5kIHVwZGF0ZSB0aGUgZG9tLiBcclxuICAgICAgICByaWdodFBhbmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1vYmplY3QnLCBgJHtwcm9qZWN0TmFtZX1gKVxyXG5cclxuICAgICAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRhc2tzIGl0ZW1zIG9uIHRoZSBhcnJheSBhbmQgYWRkIHRoZW4gdG8gdGhlIERPTS4gXHJcbiAgICAgICAgcHJvamVjdE9iai5wcm9qZWN0VGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAvLyBDcmVhdGUgYSBkaXYgZm9yIGVhY2ggb2YgdGhlIHRhc2tzLiBIZWFkaW5ncyBhbmQgTm90ZXMgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGlzLlxyXG4gICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzaycpXHJcbiAgICAgICAgcmlnaHRQYW5lbC5hcHBlbmQocGFyZW50RWxlbWVudClcclxuICAgICAgICBkb21BcHBlbmRlcignaDEnLCAndGFzay10aXRsZScsIHBhcmVudEVsZW1lbnQsIHRhc2sudGFza05hbWUpXHJcbiAgICAgICAgZG9tQXBwZW5kZXIoJ3AnLCAndGFzay1ub3RlcycsIHBhcmVudEVsZW1lbnQsIHRhc2sudGFza05vdGVzKVxyXG4gICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdGFza3MgaXRlbXMgb24gdGhlIGFycmF5IGFuZCBhZGQgdGhlbiB0byB0aGUgRE9NLiBcclxuICAgIHByb2plY3RPYmoucHJvamVjdFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICBcclxuICAgICAgICAvLyBDcmVhdGUgYSBkaXYgZm9yIGVhY2ggb2YgdGhlIHRhc2tzLiBIZWFkaW5ncyBhbmQgTm90ZXMgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGlzLlxyXG4gICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzaycpXHJcbiAgICAgICAgcmlnaHRQYW5lbC5hcHBlbmQocGFyZW50RWxlbWVudClcclxuICAgICAgICBkb21BcHBlbmRlcignaDEnLCAndGFzay10aXRsZScsIHBhcmVudEVsZW1lbnQsIHRhc2sudGFza05hbWUpXHJcbiAgICAgICAgZG9tQXBwZW5kZXIoJ3AnLCAndGFzay1ub3RlcycsIHBhcmVudEVsZW1lbnQsIHRhc2sudGFza05vdGVzKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFByb2Nlc3MgYWxsIG9mIHRoZSBvYmplY3RzIGluIHRoZSBwcm9qZWN0TGlzdCBhcnJheSBhbmQgcGxhY2UgdGhlbSBpbiB0aGUgZG9tLiBcclxuY29uc3QgcHJvY2Vzc0xpc3QgPSAoYXJyYXlPZk9ianMpID0+IHtcclxuICAgIGFycmF5T2ZPYmpzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgcHJvamVjdFRvRG9tKGl0ZW0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0VG9Eb20sIHByb2Nlc3NMaXN0IH0iLCJmdW5jdGlvbiBkb21BcHBlbmRlcihlbGVtZW50LCBjbGFzc05hbWUsIGFwcGVuZFRvLCBjb250ZW50KSB7XHJcbiAgICBsZXQgYXBwZW5kYWdlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGFwcGVuZGFnZUVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSlcclxuICAgIGFwcGVuZGFnZUVsZW0uaW5uZXJUZXh0ID0gY29udGVudFxyXG4gICAgYXBwZW5kVG8uYXBwZW5kKGFwcGVuZGFnZUVsZW0pICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IGRvbUFwcGVuZGVyIH0iLCJpbXBvcnQgeyBwcm9qZWN0VG9Eb20gfSBmcm9tIFwiLi9kb20tbWFuaXB1bGF0aW9uXCJcclxuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0LWdlbmVyYXRvclwiXHJcblxyXG4vLyBQbGFjZSBwcm9qZWN0IG9iamVjdCBpbnRvIGxvY2FsU3RvcmFnZSB3aXRoIGlkZW50aWZpZXIgYmVpbmcgdGhlIHByb2plY3RuYW1lLlxyXG4vLyBDb252ZXJ0IHRvIEpTT04gc28gb2JqZWN0IGNhbiBiZSBwbGFjZWQgaW4gbG9jYWxTdG9yZ2UuIFxyXG5jb25zdCBwbGFjZUluU3RvcmFnZSA9IChwcm9qZWN0T2JqKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJvamVjdE9iai5wcm9qZWN0TmFtZX1gLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqKSlcclxufVxyXG4vLyBHZXQgdGhlIHN0b3JlIHByb2plY3Qgb2JqZWN0IGZyb20gc3RvcmFnZSBhbmQgcGFyc2UgaXQgaW50byBqcyBvYmplY3QgYW5kIHJldHVybiBpdC4gXHJcbmNvbnN0IHJldHJpZXZlRnJvbVN0b3JhZ2UgPSAocHJvamVjdE9iaikgPT4ge1xyXG4gICAgbGV0IHVuUGFyc2VkSXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcm9qZWN0T2JqLnByb2plY3ROYW1lfWApXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh1blBhcnNlZEl0ZW0pXHJcbn1cclxuXHJcbi8vIFJlbW92ZSBpdGVtIGZyb20gbG9jYWxTdG9yYWdlIGJ5IG5hdGl2ZSBqcyBvYmplY3QgbmFtZS5cclxuY29uc3QgcmVtb3ZlRnJvbVN0b3JhZ2UgPSAocHJvamVjdE9iaikgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3Byb2plY3RPYmoucHJvamVjdE5hbWV9YClcclxufVxyXG5cclxuLy8gQ2xlYXIgYWxsIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2UuXHJcbmNvbnN0IGNsZWFyQWxsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgY29uc29sZS5sb2coJ0FsbCB0aGUgZGF0YSBoYXMgYmVlbiBjbGVhcmVkLicpXHJcbn1cclxuXHJcbi8vIEdldCBhbGwgaXRlbXMgaW4gbG9jYWxTdG9yYWdlXHJcbmNvbnN0IGdldEFsbExvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvY2FsT2JqcyA9IHsuLi5sb2NhbFN0b3JhZ2V9XHJcbiAgICBjb25zdCBsb2dUaGVPYmpzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsT2JqcylcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9jYWxPYmpzLFxyXG4gICAgICAgIGxvZ1RoZU9ianMsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFByb2Nlc3MgYWxsIG9mIHRoZSBvYmplY3RzIGNyZWF0ZWQgdG8gbG9jYWxTdG9yYWdlIEpTT05cclxuY29uc3QgcHJvY2Vzc1Byb2plY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtKVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gUHJvY2VzcyBsaXN0IG9mIGpzb24gYW5kIHN0cmluZ2lmaWVkIG9ianMgaW50byBuYXRpdmUgSlMgb2Jqcy5cclxuY29uc3QgcHJvY2Vzc0FsbExvY2FsU3RvcmFnZSA9IChkZXN0aW5hdGlvbkFycmF5KSA9PiB7XHJcbiAgICAvLyBHZXQgYSBsaXN0IG9mIGFsbCBpdGVtcyBpbiBsb2NhbFN0b3JhZ2UuXHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlTGlzdCA9IHsuLi5sb2NhbFN0b3JhZ2V9XHJcbiAgICAvLyBGb3IgZWFjaCB2YWx1ZSwgcGFyc2UgdGhlIG9iamVjdCBvdXQgb2YgSlNPTlxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlTGlzdCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGxldCB1bnByb2Nlc3NlZEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YClcclxuICAgICAgICBkZXN0aW5hdGlvbkFycmF5LnB1c2goSlNPTi5wYXJzZShgJHt1bnByb2Nlc3NlZEl0ZW19YCkpXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHN0YXR1cyBvZiB0aGUgZGVzdGluYXRpb24gYXJyYXkuXHJcbiAgICAgICAgY29uc29sZS5sb2coZGVzdGluYXRpb25BcnJheSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhbGwgdGhlIGZ1bmN0aW9uYWxpdHlcclxuZXhwb3J0IHsgcGxhY2VJblN0b3JhZ2UsIHJldHJpZXZlRnJvbVN0b3JhZ2UsIHJlbW92ZUZyb21TdG9yYWdlLCBjbGVhckFsbFN0b3JhZ2UsIGdldEFsbExvY2FsU3RvcmFnZSwgcHJvY2Vzc0FsbExvY2FsU3RvcmFnZSwgcHJvY2Vzc1Byb2plY3RMaXN0IH0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrLWdlbmVyYXRvcidcclxuXHJcbi8vIE1haW50YWluIGEgbGlzdCBvZiBhbGwgcHJvamVjdHMgY3JlYXRlZC4gXHJcbmNvbnN0IHByb2plY3RMaXN0ID0gW11cclxuXHJcbi8vIE1ha2UgZnVuY3Rpb24gdG8gYWRkIHByb2plY3QgdG8gYXJyYXlcclxuY29uc3QgYWRkUHJvamVjdFRvQXJyYXkgPSAoT2JqLCBBcnJheSkgPT4ge1xyXG4gICAgLy8gQXBwZW5kIE9iamVjdCB0byB0aGUgZGVzaWduYXRlZCBhcnJheS5cclxuICAgIEFycmF5LnB1c2goT2JqKVxyXG4gICAgY29uc29sZS5sb2coQXJyYXkpXHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgLy8gTWFrZSBhbiBhcnJheSB0byBob2xkIGFsbCBvZiB0aGUgdGFza3MgdGhhdCBhcmUgaW5jbHVkZWQgaW4gYSBwcm9qZWN0LiBcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFza3MgPSBbXVxyXG4gICAgfVxyXG4gICBcclxuICAgIC8vIE1ha2UgbmV3IHRhc2sgdXNpbmcgaW1wb3J0ZWQgdGFzayBtb2R1bGUgYW5kIHN0b3JlIGl0IGluIHRoZSBhc3NvY2lhdGVkIHByb2plY3RUYXNrcyBhcnJheS4gXHJcbiAgICBtYWtlTmV3VGFzayhuYW1lLCBwcmlvcml0eSwgbm90ZXMsIGR1ZURhdGUpIHtcclxuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUsIHByaW9yaXR5LCBub3RlcywgZHVlRGF0ZSlcclxuICAgICAgICB0aGlzLnByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gRGlzcGxheSBhbGwgdGFza3MgcmVsYXRlZCB0byB0aGUgcHJvamVjdCBvYmplY3QuIFxyXG4gICAgZ2V0IGdldEFsbFRhc2tzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdFRhc2tzKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RUYXNrc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBbGxvdyBmb3IgY2hhbmdpbmcgb2YgdGhlIHByb2plY3QgbmFtZS4gXHJcbiAgICBzZXQgY2hhbmdlUHJvamVjdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBuZXdOYW1lXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBhcnJheS4gXHJcbiAgICBzZXQgYWRkVGhpc1Byb2plY3RUb29BcnJheShhcnJheSkge1xyXG4gICAgICAgIGFycmF5LnB1c2godGhpcylcclxuICAgICAgICAvLyBDaGVjayBpZiBvYmplY3Qgd2FzIHBsYWNlZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdExpc3QsIGFkZFByb2plY3RUb0FycmF5IH0iLCJjbGFzcyBUYXNrIHtcclxuICAgIC8vIEdhdGhlciBJbmZvcm1hdGlvbiBvbiB0YXNrLiBcclxuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCB0YXNrUHJpb3JpdHksIHRhc2tOb3RlcywgdGFza0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWVcclxuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eVxyXG4gICAgICAgIHRoaXMudGFza05vdGVzID0gdGFza05vdGVzXHJcbiAgICAgICAgdGhpcy50YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdldHRlcnMgZm9yIG5lZWRlZCB0YXNrIGVsZW1lbnRzXHJcbiAgICBnZXQgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrTmFtZVxyXG4gICAgfVxyXG4gICAgZ2V0IGdldFByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tQcmlvcml0eVxyXG4gICAgfVxyXG4gICAgZ2V0IGdldE5vdGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tOb3Rlc1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0R1ZURhdGVcclxuICAgIH1cclxuXHJcbiAgICAvL1NldHRlcnMgZm9yIGNoYW5naW5nIHRhc2sgcHJvcGVydGllcyBmb3Igd2hlbiB0aGUgdXNlciBlZGl0cyB0aGUgdGFzay4gXHJcbiAgICBzZXQgY2hhbmdlTmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy50YXNrTmFtZSA9IG5ld05hbWVcclxuICAgIH1cclxuICAgIHNldCBjaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGFza1ByaW9yaXR5ID0gbmV3UHJpb3JpdHlcclxuICAgIH1cclxuICAgIHNldCBjaGFuZ2VOb3RlcyhuZXdOb3Rlcykge1xyXG4gICAgICAgIHRoaXMudGFza05vdGVzID0gbmV3Tm90ZXNcclxuICAgIH1cclxuICAgIHNldCBjaGFuZ2VEdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRhc2tEdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUYXNrIH0iLCJpbXBvcnQgeyBhZGRQcm9qZWN0VG9BcnJheSwgcHJvamVjdExpc3QsIFByb2plY3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHBsYWNlSW5TdG9yYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2NhbFN0b3JhZ2VNYW5pcHVsYXRvclwiO1xyXG5cclxuLy8gTWFrZSBJSUZFIHRoYXQgd2lsbCBjcmVhdGUgdGhlIGRlZmF1bHQgdGFzay4gXHJcbmNvbnN0IG1ha2VEZWZhdWx0UHJvamVjdCA9ICgoKSA9PiB7XHJcbiAgICAvLyBNYWtlIGNvbmRpdGlvbiB0byBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGl0ZW1zLiBJZiBpdGVtcyBhcmUgcHJlc2VudCwgZG8gbm90IGFkZCB0aGUgZGVmYXVsdCBwcm9qZWN0LlxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IHByb2plY3QgXCJpbmJveFwiIGFuZCBhZGQgZGVmYXVsdCB0YXNrIHRvIHRoZSBwcm9qZWN0LlxyXG4gICAgICAgIGNvbnN0IGluYm94UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdJbmJveCcpXHJcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgbGVmdC1wYW5lbC4gXHJcbiAgICAgICAgaW5ib3hQcm9qZWN0Lm1ha2VOZXdUYXNrKCdDbGVhbiB0aGUgS2l0Y2hlbicsIDEsICdNYWtlIHN1cmUgdG8gY2xlYW4gdW5kZXIgdGhlIGNhYmluZXQuJylcclxuICAgICAgICBpbmJveFByb2plY3QubWFrZU5ld1Rhc2soJ1Rha2Ugb3V0IFRyYXNoJywgMiwgJ1JlbWVtYmVyIHRvIHNvcnQgdGhlIHJlY3ljbGluZy4nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vQWRkIGl0IHRvIHRoZSBwcm9qZWN0IGxpc3QuIFxyXG4gICAgICAgIGFkZFByb2plY3RUb0FycmF5KGluYm94UHJvamVjdCwgcHJvamVjdExpc3QpXHJcbiAgICAgICAgLy9BZGQgdG8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgcGxhY2VJblN0b3JhZ2UoaW5ib3hQcm9qZWN0KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSXRlbXMgcHJlc2VudCBpbiBsb2NhbFN0b3JhZ2UuJylcclxuICAgICAgICBjb25zb2xlLmxvZygnTm90IGNyZWF0aW5nIGRlZmF1bHQgcHJvamVjdC4nKVxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5cclxuZXhwb3J0IHttYWtlRGVmYXVsdFByb2plY3R9IiwiaW1wb3J0ICcuL2luZGV4LmNzcydcclxuaW1wb3J0IHsgbWFrZURlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vaW5ib3hcIjtcclxuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IGdldEFsbExvY2FsU3RvcmFnZSwgcHJvY2Vzc0FsbExvY2FsU3RvcmFnZSwgcGxhY2VJblN0b3JhZ2UgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xvY2FsU3RvcmFnZU1hbmlwdWxhdG9yXCI7XHJcbmltcG9ydCB7IHByb2Nlc3NMaXN0LCBwcm9qZWN0VG9Eb20gfSBmcm9tICcuL2NvbXBvbmVudHMvZG9tLW1hbmlwdWxhdGlvbic7XHJcblxyXG4vLyBBZGQgbWFpbiBjb250ZW50IGRpdiB0byBib2R5IGZvciBhbGwgb3RoZXIgY29udGVudCB0byBhcHBlbmQgdG8uIFxyXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50RGl2KVxyXG5cclxuXHJcbi8vIERlZmluZSB0aGUgZWxlbWVudHMgb2YgdGhlIHBhZ2UgdG8gYXBwZW5kLFxyXG5jb25zdCBoZWFkZXJQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IGxlZnRQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IHJpZ2h0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBmb290ZXJQYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuLy8gU2V0IG5lZWRlZCBhdHRyaWJ1dGVzIGZvciBwYWdlIGVsZW1lbnRzLiBcclxuaGVhZGVyUGFuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXItcGFuZWwnKVxyXG5sZWZ0UGFuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdsZWZ0LXBhbmVsJylcclxubGVmdFBhbmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1wYW5lbCcpXHJcbnJpZ2h0UGFuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyaWdodC1wYW5lbCcpXHJcbnJpZ2h0UGFuZWwuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXBhbmVsJylcclxuZm9vdGVyUGFuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb290ZXItcGFuZWwnKVxyXG5wYWdlVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYWdlLXRpdGxlJylcclxuYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1wcm9qZWN0LWJ1dHRvbicpXHJcbm5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWRpdicpXHJcblxyXG4vLyBDb250ZW50IGZvciBtYWluIHBhZ2UgZWxlbWVudHMuXHJcbnBhZ2VUaXRsZS5pbm5lclRleHQgPSBcIi0gSnVzdCBEbyBJdCEgLSBhIFRvZG8gTGlzdCBieSBEYXJpbyBDcnV6XCJcclxuYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCJcclxuXHJcbi8vIEFwcGVuZCBhbGwgdGhlIGVsZW1lbnRzIG5lZWRlZCB0byByb290IGVsZW1lbnRzLlxyXG5uZXdQcm9qZWN0RGl2LmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uKVxyXG5jb250ZW50RGl2LmFwcGVuZChoZWFkZXJQYW5lbCwgbGVmdFBhbmVsLCByaWdodFBhbmVsLCBmb290ZXJQYW5lbClcclxuaGVhZGVyUGFuZWwuYXBwZW5kKHBhZ2VUaXRsZSlcclxubGVmdFBhbmVsLmFwcGVuZChuZXdQcm9qZWN0RGl2KVxyXG5cclxuLy8gQ2hlY2sgYWxsIGxvY2FsU3RvcmFnZSBpdGVtcywgY29udmVydCwgYW5kIGFkZCB0byBhcnJheSBmb3IgZG9tIGFwcGVuZGluZy5cclxucHJvY2Vzc0FsbExvY2FsU3RvcmFnZShwcm9qZWN0TGlzdClcclxuLy8gQXBwZW5kIGFsbCBpdGVtcyBwdXQgaW4gdGhlIGFycmF5IHRvIHRoZSBkb20uXHJcbnByb2Nlc3NMaXN0KHByb2plY3RMaXN0KVxyXG5cclxuXHJcbi8vIEFkZCBldmVudHMgdG8gZWxlbWVudHMgYXBwZW5kZWQgdG8gdGhlIGRvbS4gXHJcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgZm9ybSBmb3IgaW5wdXQgZWxlbWVudCBhbmQgc3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIG5ld1Byb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJycpXHJcbiAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZChuZXdQcm9qZWN0Rm9ybSlcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50IGFuZCBvbiBidXR0b24gY2xpY2sgcmVwbGFjZSB0aGUgYnV0dG9uIHdpdGggdGhlIGlucHV0IGRpYWxvZy4gXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXctcHJvamVjdC1pbnB1dCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxyXG4gICAgbmV3UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJylcclxuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZChuZXdQcm9qZWN0SW5wdXQpXHJcbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvbiBmb3IgaW5wdXQuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKVxyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kKG5ld1Byb2plY3RJbnB1dEJ1dHRvbilcclxuICAgIC8vIFJlcGxhY2UgYWRkIHByb2plY3QgYnV0dG9uIHdpdGggZm9ybSBlbGVtZW50LlxyXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5yZXBsYWNlV2l0aChuZXdQcm9qZWN0Rm9ybSlcclxuICAgIFxyXG4gICAgLy8gT24gc3VibWl0IG9mIGlucHV0IGZvciBuZXcgcHJvamVjdCwgY3JlYXRlIHByb2plY3Qgd2l0aCBuYW1lIGFuZCBhZGQgaXQgdG8gdGhlIGRvbS4gXHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gcG9zdCBhbmQgcmVmcmVzaCBvZiB0aGUgcGFnZS5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIHByb2plY3QgbmFtZSBmcm9tIHRoZSBmb3JtLlxyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1pbnB1dCcpLnZhbHVlXHJcbiAgICAgICAgbmV3UHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0TmFtZS5yZXBsYWNlQWxsKCcgJywgJy0nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IHVzaW5nIHRoZSBuYW1lLiBcclxuICAgICAgICBjb25zdCBwcm9jZXNzRm9ybVN1Ym1pdCA9ICgob2JqZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgb2JqZWN0IGZyb20gdGhlIGdpdmVuIG5hbWUgYXJndW1lbnQuXHJcbiAgICAgICAgICAgIGxldCBuZXdPYmplY3QgPSBuZXcgUHJvamVjdChvYmplY3ROYW1lKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdPYmplY3QpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBQdXNoIHRvIHRoZSBsaXN0IGZvciBhcHBlbmRpbmcgdG8gZG9tIGxhdGVyLiBcclxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdPYmplY3QpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICAgICAgICBwbGFjZUluU3RvcmFnZShuZXdPYmplY3QpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgY29udGVudHMgb2YgdGhlIGFycmF5LlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdClcclxuXHJcbiAgICAgICAgICAgIC8vIEFsbG93IGZvciBhY2Nlc3Mgb2YgbmV3IG9iamVjdCBvdXRzaWRlIG9mIGZ1bmN0aW9uLiBTbyB3ZSBjYW4gYXBwZW5kIHRvIHRoZSBkb20uXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdPYmplY3RcclxuICAgICAgICB9KShuZXdQcm9qZWN0TmFtZSlcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgcHJvamVjdCB0byB0aGUgZG9tXHJcbiAgICAgICAgcHJvamVjdFRvRG9tKHByb2plY3RMaXN0W3Byb2plY3RMaXN0Lmxlbmd0aCAtIDFdKVxyXG5cclxuXHJcbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgYWRkIG5ldyBwcm9qZWN0IGZvcm0gd2l0aCB0aGUgYWRkIHByb2plY3QgYnV0dG9uLlxyXG4gICAgICAgIG5ld1Byb2plY3RGb3JtLnJlcGxhY2VXaXRoKGFkZFByb2plY3RCdXR0b24pXHJcblxyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBuZXdQcm9qZWN0SW5wdXRcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7bGVmdFBhbmVsLCByaWdodFBhbmVsLCBjb250ZW50RGl2LCBmb290ZXJQYW5lbCwgaGVhZGVyUGFuZWwsIG5ld1Byb2plY3REaXYsIGFkZFByb2plY3RCdXR0b259IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9