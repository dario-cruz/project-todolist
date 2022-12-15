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
        inboxProject.makeNewTask('Clean the Kitchen', 1, 'Make sure to clean under the cabinet')
        inboxProject.makeNewTask('Take out Trash', 2, 'Remember to sort the recycling')
        
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
rightPanel.setAttribute('class', 'right-panel')
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
        const createObjAndPush = ((objectName) => {
            // Create object from the given name argument.
            objectName = new _components_project_generator__WEBPACK_IMPORTED_MODULE_2__.Project(objectName)
            console.log(objectName)
            
            // Push to the list for appending to dom later. 
            _components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList.push(objectName)
            
            // Add the project into local storage.
            ;(0,_components_localStorageManipulator__WEBPACK_IMPORTED_MODULE_3__.placeInStorage)(objectName)
            
            // Check the contents of the array.
            console.log(_components_project_generator__WEBPACK_IMPORTED_MODULE_2__.projectList)
        })(newProjectName)
        
        
        // Add project to the dom
        


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFlBQVksMkVBQWdCO0FBQzVCO0FBQ0E7QUFDQSxZQUFZLG9GQUFjO0FBQzFCO0FBQ0E7QUFDQSx3QkFBd0Isc0VBQVc7QUFDbkMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9kb21hcHBlbmRlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvbG9jYWxTdG9yYWdlTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0Ly4vc3JjL2luYm94LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVpY2tzaWx2ZXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NpbHZlciBJdGFsaWMub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENTUyBTdHlsZSByZXNldC4gKi9cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG59XFxyXFxuLyogRGVmaW5lIGFsbCBvZiB0aGUgY3VzdG9tIGZvbnRzIHVzZWQuICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicXVpY2tzaWx2ZXItcmVnXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNle1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInF1aWNrc2lsdmVyLWl0bFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0dXAgZ3JpZCBmb3IgbWFpbiBwYWdlIGFuZCB0YXNrIGRpc3BsYXkgKi9cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNnJlbSAxZnIgMWZyIDFmciA0cmVtIC8gMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiIFxcclxcbiAgICBcXFwibGVmdCByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IHJpZ2h0XFxcIlxcclxcbiAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxyXFxufVxcclxcbi8qIFNldCBncmlkIHBvc2l0aW9ucyBmb3IgZGl2cyAqL1xcclxcbi5oZWFkZXItcGFuZWwge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuLnJpZ2h0LXBhbmVsIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiByaWdodDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgNnJlbSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogNnJlbTtcXHJcXG59XFxyXFxuLmxlZnQtcGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWFyZWE6IGxlZnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDRyZW0pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDZyZW07XFxyXFxufVxcclxcbi5mb290ZXItcGFuZWwge1xcclxcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXHJcXG59XFxyXFxuLyogU3R5bGUgdGhlIHRleHQgZWxlbWVudHMuICovXFxyXFxuLnBhZ2UtdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInF1aWNrc2lsdmVyLWl0bFxcXCI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCOztBQUUzQjtBQUNBLHlDQUF5QztBQUN6QztJQUNJLDhCQUE4QjtJQUM5Qiw0Q0FBaUM7QUFDckM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qiw0Q0FBeUM7QUFDN0M7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsOENBQThDO0lBQzlDOzs7OzttQkFLZTtBQUNuQjtBQUNBLGdDQUFnQztBQUNoQztJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0EsNkJBQTZCO0FBQzdCO0lBQ0ksOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENTUyBTdHlsZSByZXNldC4gKi9cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG5cXHJcXG59XFxyXFxuLyogRGVmaW5lIGFsbCBvZiB0aGUgY3VzdG9tIGZvbnRzIHVzZWQuICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicXVpY2tzaWx2ZXItcmVnXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoLi9mb250cy9RdWlja3NpbHZlci5vdGYpO1xcclxcbn1cXHJcXG5AZm9udC1mYWNle1xcclxcbiAgICBmb250LWZhbWlseTogXFxcInF1aWNrc2lsdmVyLWl0bFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvUXVpY2tzaWx2ZXJcXFxcIEl0YWxpYy5vdGYpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXR1cCBncmlkIGZvciBtYWluIHBhZ2UgYW5kIHRhc2sgZGlzcGxheSAqL1xcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA2cmVtIDFmciAxZnIgMWZyIDRyZW0gLyAxZnIgM2ZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxyXFxuICAgIFxcXCJsZWZ0IHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXHJcXG59XFxyXFxuLyogU2V0IGdyaWQgcG9zaXRpb25zIGZvciBkaXZzICovXFxyXFxuLmhlYWRlci1wYW5lbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG4ucmlnaHQtcGFuZWwge1xcclxcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCA2cmVtKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiA2cmVtO1xcclxcbn1cXHJcXG4ubGVmdC1wYW5lbCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXJlYTogbGVmdDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNHJlbSk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogNnJlbTtcXHJcXG59XFxyXFxuLmZvb3Rlci1wYW5lbCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcclxcbn1cXHJcXG4vKiBTdHlsZSB0aGUgdGV4dCBlbGVtZW50cy4gKi9cXHJcXG4ucGFnZS10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicXVpY2tzaWx2ZXItaXRsXFxcIjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGxlZnRQYW5lbCwgcmlnaHRQYW5lbCB9IGZyb20gXCIuLlwiXHJcbmltcG9ydCB7IGRvbUFwcGVuZGVyIH0gZnJvbSBcIi4vZG9tYXBwZW5kZXJcIlxyXG5cclxuY29uc3QgcHJvamVjdFRvRG9tID0gKHByb2plY3RPYmopID0+IHtcclxuICAgIC8vIERlZmluZSBhbGwgb2YgdGhlIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZG9tLiBcclxuICAgIGxldCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGxldCBwcm9qZWN0VGFiSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuXHJcbiAgICAvLyBQcm9jZXNzIHRoZSBwcm9qZWN0IG5hbWUgdG8gYSBzdHJpbmcgd2l0aCBubyBzcGFjZXMgc28gdGhhdCB3ZSBjYW4gdXNlIGl0IGFzIGFuIGlkZW50aWZpZXIuIFxyXG4gICAgbGV0IHByb2Nlc3NlZFByb2plY3ROYW1lID0gcHJvamVjdE9iai5wcm9qZWN0TmFtZS50b1N0cmluZygpLnJlcGxhY2VBbGwoXCIgXCIsIFwiLVwiKS50b0xvd2VyQ2FzZSgpXHJcbiAgICBwcm9qZWN0VGFiLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtwcm9jZXNzZWRQcm9qZWN0TmFtZX0tdGFiYClcclxuICAgIHByb2plY3RUYWJIZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgJHtwcm9jZXNzZWRQcm9qZWN0TmFtZX0taGVhZGluZ2ApXHJcbiAgICBwcm9qZWN0VGFiSGVhZGluZy5pbm5lclRleHQgPSBgJHtwcm9qZWN0T2JqLnByb2plY3ROYW1lfWBcclxuICAgIFxyXG4gICAgLy8gQXBwZW5kIHRoZSBwcm9qZWN0LWhlYWRpbmcgdG8gdGhlIHByb2plY3QtdGFiIGRpdi5cclxuICAgIHByb2plY3RUYWIuYXBwZW5kKHByb2plY3RUYWJIZWFkaW5nKVxyXG4gICAgXHJcbiAgICAvLyBBcHBlbmQgdGhlIHByb2plY3QtdGFiIHRvIHRoZSBsZWZ0LXBhbmVsIERPTSBlbGVtZW50LlxyXG4gICAgbGVmdFBhbmVsLmFwcGVuZChwcm9qZWN0VGFiKVxyXG5cclxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdGFza3MgaXRlbXMgb24gdGhlIGFycmF5IGFuZCBhZGQgdGhlbiB0byB0aGUgRE9NLiBcclxuICAgIHByb2plY3RPYmoucHJvamVjdFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICBcclxuICAgICAgICAvLyBDcmVhdGUgYSBkaXYgZm9yIGVhY2ggb2YgdGhlIHRhc2tzLiBIZWFkaW5ncyBhbmQgTm90ZXMgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGlzLlxyXG4gICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzaycpXHJcbiAgICAgICAgcmlnaHRQYW5lbC5hcHBlbmQocGFyZW50RWxlbWVudClcclxuICAgICAgICBkb21BcHBlbmRlcignaDEnLCAndGFzay10aXRsZScsIHBhcmVudEVsZW1lbnQsIHRhc2sudGFza05hbWUpXHJcbiAgICAgICAgZG9tQXBwZW5kZXIoJ3AnLCAndGFzay1ub3RlcycsIHBhcmVudEVsZW1lbnQsIHRhc2sudGFza05vdGVzKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFByb2Nlc3MgYWxsIG9mIHRoZSBvYmplY3RzIGluIHRoZSBwcm9qZWN0TGlzdCBhcnJheSBhbmQgcGxhY2UgdGhlbSBpbiB0aGUgZG9tLiBcclxuY29uc3QgcHJvY2Vzc0xpc3QgPSAoYXJyYXlPZk9ianMpID0+IHtcclxuICAgIGFycmF5T2ZPYmpzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgcHJvamVjdFRvRG9tKGl0ZW0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyBwcm9qZWN0VG9Eb20sIHByb2Nlc3NMaXN0IH0iLCJmdW5jdGlvbiBkb21BcHBlbmRlcihlbGVtZW50LCBjbGFzc05hbWUsIGFwcGVuZFRvLCBjb250ZW50KSB7XHJcbiAgICBsZXQgYXBwZW5kYWdlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudClcclxuICAgIGFwcGVuZGFnZUVsZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSlcclxuICAgIGFwcGVuZGFnZUVsZW0uaW5uZXJUZXh0ID0gY29udGVudFxyXG4gICAgYXBwZW5kVG8uYXBwZW5kKGFwcGVuZGFnZUVsZW0pICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IGRvbUFwcGVuZGVyIH0iLCJpbXBvcnQgeyBwcm9qZWN0VG9Eb20gfSBmcm9tIFwiLi9kb20tbWFuaXB1bGF0aW9uXCJcclxuaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0LWdlbmVyYXRvclwiXHJcblxyXG4vLyBQbGFjZSBwcm9qZWN0IG9iamVjdCBpbnRvIGxvY2FsU3RvcmFnZSB3aXRoIGlkZW50aWZpZXIgYmVpbmcgdGhlIHByb2plY3RuYW1lLlxyXG4vLyBDb252ZXJ0IHRvIEpTT04gc28gb2JqZWN0IGNhbiBiZSBwbGFjZWQgaW4gbG9jYWxTdG9yZ2UuIFxyXG5jb25zdCBwbGFjZUluU3RvcmFnZSA9IChwcm9qZWN0T2JqKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJvamVjdE9iai5wcm9qZWN0TmFtZX1gLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqKSlcclxufVxyXG4vLyBHZXQgdGhlIHN0b3JlIHByb2plY3Qgb2JqZWN0IGZyb20gc3RvcmFnZSBhbmQgcGFyc2UgaXQgaW50byBqcyBvYmplY3QgYW5kIHJldHVybiBpdC4gXHJcbmNvbnN0IHJldHJpZXZlRnJvbVN0b3JhZ2UgPSAocHJvamVjdE9iaikgPT4ge1xyXG4gICAgbGV0IHVuUGFyc2VkSXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcm9qZWN0T2JqLnByb2plY3ROYW1lfWApXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh1blBhcnNlZEl0ZW0pXHJcbn1cclxuXHJcbi8vIFJlbW92ZSBpdGVtIGZyb20gbG9jYWxTdG9yYWdlIGJ5IG5hdGl2ZSBqcyBvYmplY3QgbmFtZS5cclxuY29uc3QgcmVtb3ZlRnJvbVN0b3JhZ2UgPSAocHJvamVjdE9iaikgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke3Byb2plY3RPYmoucHJvamVjdE5hbWV9YClcclxufVxyXG5cclxuLy8gQ2xlYXIgYWxsIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2UuXHJcbmNvbnN0IGNsZWFyQWxsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgY29uc29sZS5sb2coJ0FsbCB0aGUgZGF0YSBoYXMgYmVlbiBjbGVhcmVkLicpXHJcbn1cclxuXHJcbi8vIEdldCBhbGwgaXRlbXMgaW4gbG9jYWxTdG9yYWdlXHJcbmNvbnN0IGdldEFsbExvY2FsU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvY2FsT2JqcyA9IHsuLi5sb2NhbFN0b3JhZ2V9XHJcbiAgICBjb25zdCBsb2dUaGVPYmpzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsT2JqcylcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9jYWxPYmpzLFxyXG4gICAgICAgIGxvZ1RoZU9ianMsXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFByb2Nlc3MgYWxsIG9mIHRoZSBvYmplY3RzIGNyZWF0ZWQgdG8gbG9jYWxTdG9yYWdlIEpTT05cclxuY29uc3QgcHJvY2Vzc1Byb2plY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtID0gSlNPTi5zdHJpbmdpZnkoaXRlbSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpdGVtKVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gUHJvY2VzcyBsaXN0IG9mIGpzb24gYW5kIHN0cmluZ2lmaWVkIG9ianMgaW50byBuYXRpdmUgSlMgb2Jqcy5cclxuY29uc3QgcHJvY2Vzc0FsbExvY2FsU3RvcmFnZSA9IChkZXN0aW5hdGlvbkFycmF5KSA9PiB7XHJcbiAgICAvLyBHZXQgYSBsaXN0IG9mIGFsbCBpdGVtcyBpbiBsb2NhbFN0b3JhZ2UuXHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlTGlzdCA9IHsuLi5sb2NhbFN0b3JhZ2V9XHJcbiAgICAvLyBGb3IgZWFjaCB2YWx1ZSwgcGFyc2UgdGhlIG9iamVjdCBvdXQgb2YgSlNPTlxyXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlTGlzdCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGxldCB1bnByb2Nlc3NlZEl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtrZXl9YClcclxuICAgICAgICBkZXN0aW5hdGlvbkFycmF5LnB1c2goSlNPTi5wYXJzZShgJHt1bnByb2Nlc3NlZEl0ZW19YCkpXHJcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHN0YXR1cyBvZiB0aGUgZGVzdGluYXRpb24gYXJyYXkuXHJcbiAgICAgICAgY29uc29sZS5sb2coZGVzdGluYXRpb25BcnJheSlcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhbGwgdGhlIGZ1bmN0aW9uYWxpdHlcclxuZXhwb3J0IHsgcGxhY2VJblN0b3JhZ2UsIHJldHJpZXZlRnJvbVN0b3JhZ2UsIHJlbW92ZUZyb21TdG9yYWdlLCBjbGVhckFsbFN0b3JhZ2UsIGdldEFsbExvY2FsU3RvcmFnZSwgcHJvY2Vzc0FsbExvY2FsU3RvcmFnZSwgcHJvY2Vzc1Byb2plY3RMaXN0IH0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrLWdlbmVyYXRvcidcclxuXHJcbi8vIE1haW50YWluIGEgbGlzdCBvZiBhbGwgcHJvamVjdHMgY3JlYXRlZC4gXHJcbmNvbnN0IHByb2plY3RMaXN0ID0gW11cclxuXHJcbi8vIE1ha2UgZnVuY3Rpb24gdG8gYWRkIHByb2plY3QgdG8gYXJyYXlcclxuY29uc3QgYWRkUHJvamVjdFRvQXJyYXkgPSAoT2JqLCBBcnJheSkgPT4ge1xyXG4gICAgLy8gQXBwZW5kIE9iamVjdCB0byB0aGUgZGVzaWduYXRlZCBhcnJheS5cclxuICAgIEFycmF5LnB1c2goT2JqKVxyXG4gICAgY29uc29sZS5sb2coQXJyYXkpXHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgLy8gTWFrZSBhbiBhcnJheSB0byBob2xkIGFsbCBvZiB0aGUgdGFza3MgdGhhdCBhcmUgaW5jbHVkZWQgaW4gYSBwcm9qZWN0LiBcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0VGFza3MgPSBbXVxyXG4gICAgfVxyXG4gICBcclxuICAgIC8vIE1ha2UgbmV3IHRhc2sgdXNpbmcgaW1wb3J0ZWQgdGFzayBtb2R1bGUgYW5kIHN0b3JlIGl0IGluIHRoZSBhc3NvY2lhdGVkIHByb2plY3RUYXNrcyBhcnJheS4gXHJcbiAgICBtYWtlTmV3VGFzayhuYW1lLCBwcmlvcml0eSwgbm90ZXMsIGR1ZURhdGUpIHtcclxuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKG5hbWUsIHByaW9yaXR5LCBub3RlcywgZHVlRGF0ZSlcclxuICAgICAgICB0aGlzLnByb2plY3RUYXNrcy5wdXNoKG5ld1Rhc2spXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLy8gRGlzcGxheSBhbGwgdGFza3MgcmVsYXRlZCB0byB0aGUgcHJvamVjdCBvYmplY3QuIFxyXG4gICAgZ2V0IGdldEFsbFRhc2tzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdFRhc2tzKVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RUYXNrc1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBbGxvdyBmb3IgY2hhbmdpbmcgb2YgdGhlIHByb2plY3QgbmFtZS4gXHJcbiAgICBzZXQgY2hhbmdlUHJvamVjdE5hbWUobmV3TmFtZSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBuZXdOYW1lXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBwcm9qZWN0IHRvIHRoZSBhcnJheS4gXHJcbiAgICBzZXQgYWRkVGhpc1Byb2plY3RUb29BcnJheShhcnJheSkge1xyXG4gICAgICAgIGFycmF5LnB1c2godGhpcylcclxuICAgICAgICAvLyBDaGVjayBpZiBvYmplY3Qgd2FzIHBsYWNlZC5cclxuICAgICAgICBjb25zb2xlLmxvZyhhcnJheSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUHJvamVjdCwgcHJvamVjdExpc3QsIGFkZFByb2plY3RUb0FycmF5IH0iLCJjbGFzcyBUYXNrIHtcclxuICAgIC8vIEdhdGhlciBJbmZvcm1hdGlvbiBvbiB0YXNrLiBcclxuICAgIGNvbnN0cnVjdG9yKHRhc2tOYW1lLCB0YXNrUHJpb3JpdHksIHRhc2tOb3RlcywgdGFza0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRhc2tOYW1lID0gdGFza05hbWVcclxuICAgICAgICB0aGlzLnRhc2tQcmlvcml0eSA9IHRhc2tQcmlvcml0eVxyXG4gICAgICAgIHRoaXMudGFza05vdGVzID0gdGFza05vdGVzXHJcbiAgICAgICAgdGhpcy50YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdldHRlcnMgZm9yIG5lZWRlZCB0YXNrIGVsZW1lbnRzXHJcbiAgICBnZXQgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrTmFtZVxyXG4gICAgfVxyXG4gICAgZ2V0IGdldFByaW9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tQcmlvcml0eVxyXG4gICAgfVxyXG4gICAgZ2V0IGdldE5vdGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tOb3Rlc1xyXG4gICAgfVxyXG4gICAgZ2V0IGdldER1ZURhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0R1ZURhdGVcclxuICAgIH1cclxuXHJcbiAgICAvL1NldHRlcnMgZm9yIGNoYW5naW5nIHRhc2sgcHJvcGVydGllcyBmb3Igd2hlbiB0aGUgdXNlciBlZGl0cyB0aGUgdGFzay4gXHJcbiAgICBzZXQgY2hhbmdlTmFtZShuZXdOYW1lKSB7XHJcbiAgICAgICAgdGhpcy50YXNrTmFtZSA9IG5ld05hbWVcclxuICAgIH1cclxuICAgIHNldCBjaGFuZ2VQcmlvcml0eShuZXdQcmlvcml0eSkge1xyXG4gICAgICAgIHRoaXMudGFza1ByaW9yaXR5ID0gbmV3UHJpb3JpdHlcclxuICAgIH1cclxuICAgIHNldCBjaGFuZ2VOb3RlcyhuZXdOb3Rlcykge1xyXG4gICAgICAgIHRoaXMudGFza05vdGVzID0gbmV3Tm90ZXNcclxuICAgIH1cclxuICAgIHNldCBjaGFuZ2VEdWVEYXRlKG5ld0R1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRhc2tEdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBUYXNrIH0iLCJpbXBvcnQgeyBhZGRQcm9qZWN0VG9BcnJheSwgcHJvamVjdExpc3QsIFByb2plY3QgfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3QtZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IHBsYWNlSW5TdG9yYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2NhbFN0b3JhZ2VNYW5pcHVsYXRvclwiO1xyXG5cclxuLy8gTWFrZSBJSUZFIHRoYXQgd2lsbCBjcmVhdGUgdGhlIGRlZmF1bHQgdGFzay4gXHJcbmNvbnN0IG1ha2VEZWZhdWx0UHJvamVjdCA9ICgoKSA9PiB7XHJcbiAgICAvLyBNYWtlIGNvbmRpdGlvbiB0byBjaGVjayBsb2NhbFN0b3JhZ2UgZm9yIGl0ZW1zLiBJZiBpdGVtcyBhcmUgcHJlc2VudCwgZG8gbm90IGFkZCB0aGUgZGVmYXVsdCBwcm9qZWN0LlxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IHByb2plY3QgXCJpbmJveFwiIGFuZCBhZGQgZGVmYXVsdCB0YXNrIHRvIHRoZSBwcm9qZWN0LlxyXG4gICAgICAgIGNvbnN0IGluYm94UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdJbmJveCcpXHJcbiAgICAgICAgLy8gQ3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgbGVmdC1wYW5lbC4gXHJcbiAgICAgICAgaW5ib3hQcm9qZWN0Lm1ha2VOZXdUYXNrKCdDbGVhbiB0aGUgS2l0Y2hlbicsIDEsICdNYWtlIHN1cmUgdG8gY2xlYW4gdW5kZXIgdGhlIGNhYmluZXQnKVxyXG4gICAgICAgIGluYm94UHJvamVjdC5tYWtlTmV3VGFzaygnVGFrZSBvdXQgVHJhc2gnLCAyLCAnUmVtZW1iZXIgdG8gc29ydCB0aGUgcmVjeWNsaW5nJylcclxuICAgICAgICBcclxuICAgICAgICAvL0FkZCBpdCB0byB0aGUgcHJvamVjdCBsaXN0LiBcclxuICAgICAgICBhZGRQcm9qZWN0VG9BcnJheShpbmJveFByb2plY3QsIHByb2plY3RMaXN0KVxyXG4gICAgICAgIC8vQWRkIHRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIHBsYWNlSW5TdG9yYWdlKGluYm94UHJvamVjdClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0l0ZW1zIHByZXNlbnQgaW4gbG9jYWxTdG9yYWdlLicpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBjcmVhdGluZyBkZWZhdWx0IHByb2plY3QuJylcclxuICAgIH1cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCB7bWFrZURlZmF1bHRQcm9qZWN0fSIsImltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7IG1ha2VEZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL2luYm94XCI7XHJcbmltcG9ydCB7IFByb2plY3QsIHByb2plY3RMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9wcm9qZWN0LWdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRBbGxMb2NhbFN0b3JhZ2UsIHByb2Nlc3NBbGxMb2NhbFN0b3JhZ2UsIHBsYWNlSW5TdG9yYWdlIH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2NhbFN0b3JhZ2VNYW5pcHVsYXRvclwiO1xyXG5pbXBvcnQgeyBwcm9jZXNzTGlzdCwgcHJvamVjdFRvRG9tIH0gZnJvbSAnLi9jb21wb25lbnRzL2RvbS1tYW5pcHVsYXRpb24nO1xyXG5cclxuLy8gQWRkIG1haW4gY29udGVudCBkaXYgdG8gYm9keSBmb3IgYWxsIG90aGVyIGNvbnRlbnQgdG8gYXBwZW5kIHRvLiBcclxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50JylcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudERpdilcclxuXHJcblxyXG4vLyBEZWZpbmUgdGhlIGVsZW1lbnRzIG9mIHRoZSBwYWdlIHRvIGFwcGVuZCxcclxuY29uc3QgaGVhZGVyUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBsZWZ0UGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCByaWdodFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3QgZm9vdGVyUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbmNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbi8vIFNldCBuZWVkZWQgYXR0cmlidXRlcyBmb3IgcGFnZSBlbGVtZW50cy4gXHJcbmhlYWRlclBhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyLXBhbmVsJylcclxubGVmdFBhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGVmdC1wYW5lbCcpXHJcbnJpZ2h0UGFuZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyaWdodC1wYW5lbCcpXHJcbmZvb3RlclBhbmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vdGVyLXBhbmVsJylcclxucGFnZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGFnZS10aXRsZScpXHJcbmFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtcHJvamVjdC1idXR0b24nKVxyXG5uZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1kaXYnKVxyXG5cclxuLy8gQ29udGVudCBmb3IgbWFpbiBwYWdlIGVsZW1lbnRzLlxyXG5wYWdlVGl0bGUuaW5uZXJUZXh0ID0gXCItIEp1c3QgRG8gSXQhIC0gYSBUb2RvIExpc3QgYnkgRGFyaW8gQ3J1elwiXHJcbmFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiXHJcblxyXG4vLyBBcHBlbmQgYWxsIHRoZSBlbGVtZW50cyBuZWVkZWQgdG8gcm9vdCBlbGVtZW50cy5cclxubmV3UHJvamVjdERpdi5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbilcclxuY29udGVudERpdi5hcHBlbmQoaGVhZGVyUGFuZWwsIGxlZnRQYW5lbCwgcmlnaHRQYW5lbCwgZm9vdGVyUGFuZWwpXHJcbmhlYWRlclBhbmVsLmFwcGVuZChwYWdlVGl0bGUpXHJcbmxlZnRQYW5lbC5hcHBlbmQobmV3UHJvamVjdERpdilcclxuXHJcbi8vIENoZWNrIGFsbCBsb2NhbFN0b3JhZ2UgaXRlbXMsIGNvbnZlcnQsIGFuZCBhZGQgdG8gYXJyYXkgZm9yIGRvbSBhcHBlbmRpbmcuXHJcbnByb2Nlc3NBbGxMb2NhbFN0b3JhZ2UocHJvamVjdExpc3QpXHJcblxyXG5cclxuLy8gQWRkIGV2ZW50cyB0byBlbGVtZW50cyBhcHBlbmRlZCB0byB0aGUgZG9tLiBcclxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIENyZWF0ZSBmb3JtIGZvciBpbnB1dCBlbGVtZW50IGFuZCBzdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgbmV3UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnJylcclxuICAgIG5ld1Byb2plY3REaXYuYXBwZW5kKG5ld1Byb2plY3RGb3JtKVxyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnQgYW5kIG9uIGJ1dHRvbiBjbGljayByZXBsYWNlIHRoZSBidXR0b24gd2l0aCB0aGUgaW5wdXQgZGlhbG9nLiBcclxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIG5ld1Byb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy1wcm9qZWN0LWlucHV0JylcclxuICAgIG5ld1Byb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICBuZXdQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKVxyXG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kKG5ld1Byb2plY3RJbnB1dClcclxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uIGZvciBpbnB1dC5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RJbnB1dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIG5ld1Byb2plY3RJbnB1dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcclxuICAgIG5ld1Byb2plY3RJbnB1dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1N1Ym1pdCcpXHJcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmQobmV3UHJvamVjdElucHV0QnV0dG9uKVxyXG4gICAgLy8gUmVwbGFjZSBhZGQgcHJvamVjdCBidXR0b24gd2l0aCBmb3JtIGVsZW1lbnQuXHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnJlcGxhY2VXaXRoKG5ld1Byb2plY3RGb3JtKVxyXG4gICAgXHJcbiAgICAvLyBPbiBzdWJtaXQgb2YgaW5wdXQgZm9yIG5ldyBwcm9qZWN0LCBjcmVhdGUgcHJvamVjdCB3aXRoIG5hbWUgYW5kIGFkZCBpdCB0byB0aGUgZG9tLiBcclxuICAgIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBwb3N0IGFuZCByZWZyZXNoIG9mIHRoZSBwYWdlLlxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgcHJvamVjdCBuYW1lIGZyb20gdGhlIGZvcm0uXHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWlucHV0JykudmFsdWVcclxuICAgICAgICBuZXdQcm9qZWN0TmFtZSA9IG5ld1Byb2plY3ROYW1lLnJlcGxhY2VBbGwoJyAnLCAnLScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgdXNpbmcgdGhlIG5hbWUuIFxyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU9iakFuZFB1c2ggPSAoKG9iamVjdE5hbWUpID0+IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIG9iamVjdCBmcm9tIHRoZSBnaXZlbiBuYW1lIGFyZ3VtZW50LlxyXG4gICAgICAgICAgICBvYmplY3ROYW1lID0gbmV3IFByb2plY3Qob2JqZWN0TmFtZSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0TmFtZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFB1c2ggdG8gdGhlIGxpc3QgZm9yIGFwcGVuZGluZyB0byBkb20gbGF0ZXIuIFxyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG9iamVjdE5hbWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHByb2plY3QgaW50byBsb2NhbCBzdG9yYWdlLlxyXG4gICAgICAgICAgICBwbGFjZUluU3RvcmFnZShvYmplY3ROYW1lKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGNvbnRlbnRzIG9mIHRoZSBhcnJheS5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXHJcbiAgICAgICAgfSkobmV3UHJvamVjdE5hbWUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRkIHByb2plY3QgdG8gdGhlIGRvbVxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgYWRkIG5ldyBwcm9qZWN0IGZvcm0gd2l0aCB0aGUgYWRkIHByb2plY3QgYnV0dG9uLlxyXG4gICAgICAgIG5ld1Byb2plY3RGb3JtLnJlcGxhY2VXaXRoKGFkZFByb2plY3RCdXR0b24pXHJcblxyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgIHJldHVybiBuZXdQcm9qZWN0SW5wdXRcclxufSlcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7bGVmdFBhbmVsLCByaWdodFBhbmVsLCBjb250ZW50RGl2LCBmb290ZXJQYW5lbCwgaGVhZGVyUGFuZWwsIG5ld1Byb2plY3REaXYsIGFkZFByb2plY3RCdXR0b259IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9