"use strict";
(self["webpackChunkyou_flex"] = self["webpackChunkyou_flex"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-color: #c5c4c4;\n  --primary-color: #e64d52;\n}\n\nhtml {\n  font-family: \"Nunito\", sans-serif;\n  box-sizing: border-box;\n  color: var(--font-color);\n  margin: 0;\n  padding: 0;\n  background: #303030;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 1rem;\n  padding: 1em;\n  margin-bottom: 8rem;\n}\n\n.logo-img {\n  height: 2.5rem;\n}\n\n.nav-list {\n  display: flex;\n  list-style: none;\n  gap: 2rem;\n  margin-right: 2rem;\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\n.nav-link {\n  text-decoration: none;\n}\n\n.nav-link:visited {\n  color: var(--font-color);\n}\n\n.nav-item:hover .nav-link {\n  color: var(--primary-color);\n}\n\n.numbers {\n  color: var(--font-color);\n}\n\n.main-sector {\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  gap: 1rem;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n}\n\n.main-sector::-webkit-scrollbar {\n  display: none;\n}\n\n.previous-btn,\n.next-btn {\n  position: absolute;\n  top: 40%;\n  padding: 0 1rem;\n  color: var(--font-color);\n  font-size: 4rem;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\n.previous-btn {\n  left: 0;\n}\n\n.next-btn {\n  right: 0;\n}\n\n.previous-btn:hover,\n.next-btn:hover {\n  color: var(--primary-color);\n}\n\n.fa-solid {\n  text-shadow:\n    -1px 2px 0 #000,\n    1px 1px 0 #000,\n    1px -1px 0 #000,\n    -1px -1px 0 #000;\n}\n\n.movie-details {\n  height: 23rem;\n  width: 12rem;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(80, 80, 80);\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n}\n\n.mov-details {\n  align-items: center;\n  gap: 10px;\n}\n\n.movie-img {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.movie-name {\n  flex: 2;\n  font-size: 1.2em;\n  font-weight: 700;\n  margin: 0.5rem 0;\n}\n\n.like-btn {\n  width: 1.5rem;\n  cursor: pointer;\n  color: #fff;\n  -webkit-filter: invert(100%);\n  filter: invert(100%);\n}\n\n.like-btn:hover {\n  scale: 1.1;\n}\n\n.likes-div {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.3rem;\n}\n\n.number-likes {\n  text-align: right;\n  margin: 0 0;\n}\n\n.comments-btn {\n  flex: 2;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 1em;\n  color: var(--font-color);\n  text-align: left;\n  padding: 0;\n}\n\n.comments-btn:hover {\n  color: var(--primary-color);\n}\n\n.comment-popup {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid black;\n  position: relative;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  height: 71vh;\n}\n\n.close-btn {\n  position: absolute;\n  right: 1rem;\n  border: none;\n  background-color: transparent;\n}\n\n.close-icon {\n  width: 2.5rem;\n}\n\n.division {\n  display: flex;\n  gap: 5rem;\n}\n\n.thumbnail {\n  height: 70vh;\n  margin: auto;\n}\n\n.comment-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.movie-title {\n  font-size: 2.5rem;\n  margin-bottom: 0;\n}\n\n.details {\n  width: 50vw;\n  text-align: left;\n  max-height: 8rem;\n  overflow-y: scroll;\n}\n\n.details::-webkit-scrollbar {\n  display: none;\n}\n\n.comments-div {\n  display: flex;\n  gap: 3rem;\n}\n\n.show-comments {\n  display: flex;\n  flex-direction: column;\n}\n\n.comments-display {\n  font-size: 1.1rem;\n  color: var(--font-color);\n}\n\n.comments-list {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  font-size: 1.1rem;\n  padding: 0;\n  margin-top: 0;\n  max-height: 16rem;\n  overflow-y: scroll;\n}\n\n.comments-list::-webkit-scrollbar {\n  display: none;\n}\n\n.comments-item {\n  font-size: 1rem;\n  margin: 0.2rem 0;\n}\n\n.comments-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.name-input,\n.comment-input {\n  font-size: 1.1rem;\n  border: none;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  background-color: lightgray;\n  outline: none;\n}\n\n.comment-input {\n  height: 8rem;\n}\n\n.addacomment {\n  margin-bottom: 0;\n}\n\n.form-comment-btn {\n  border: 3px solid var(--font-color);\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.5rem;\n  color: var(--font-color);\n  border-radius: 0.5rem;\n}\n\n.form-comment-btn:hover {\n  color: var(--primary-color);\n  border: 3px solid var(--primary-color);\n}\n\n.footer {\n  display: flex;\n  justify-self: flex-end;\n  flex-direction: column;\n  bottom: 0;\n  margin-top: auto;\n}\n\n.upper-footer {\n  background-color: var(--primary-color);\n  color: #303030;\n  font-weight: 800;\n  padding: 1rem;\n  border-radius: 1rem;\n  margin: 0 2rem;\n  text-align: center;\n}\n\n.lower-footer {\n  height: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --font-color: #c5c4c4;\n  --primary-color: #e64d52;\n}\n\nhtml {\n  font-family: \"Nunito\", sans-serif;\n  box-sizing: border-box;\n  color: var(--font-color);\n  margin: 0;\n  padding: 0;\n  background: #303030;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 1rem;\n  padding: 1em;\n  margin-bottom: 8rem;\n}\n\n.logo-img {\n  height: 2.5rem;\n}\n\n.nav-list {\n  display: flex;\n  list-style: none;\n  gap: 2rem;\n  margin-right: 2rem;\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\n.nav-link {\n  text-decoration: none;\n}\n\n.nav-link:visited {\n  color: var(--font-color);\n}\n\n.nav-item:hover .nav-link {\n  color: var(--primary-color);\n}\n\n.numbers {\n  color: var(--font-color);\n}\n\n.main-sector {\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  gap: 1rem;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n}\n\n.main-sector::-webkit-scrollbar {\n  display: none;\n}\n\n.previous-btn,\n.next-btn {\n  position: absolute;\n  top: 40%;\n  padding: 0 1rem;\n  color: var(--font-color);\n  font-size: 4rem;\n  border: none;\n  background-color: transparent;\n  outline: none;\n}\n\n.previous-btn {\n  left: 0;\n}\n\n.next-btn {\n  right: 0;\n}\n\n.previous-btn:hover,\n.next-btn:hover {\n  color: var(--primary-color);\n}\n\n.fa-solid {\n  text-shadow:\n    -1px 2px 0 #000,\n    1px 1px 0 #000,\n    1px -1px 0 #000,\n    -1px -1px 0 #000;\n}\n\n.movie-details {\n  height: 23rem;\n  width: 12rem;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(80, 80, 80);\n  padding: 0.3rem;\n  border-radius: 0.3rem;\n}\n\n.mov-details {\n  align-items: center;\n  gap: 10px;\n}\n\n.movie-img {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.movie-name {\n  flex: 2;\n  font-size: 1.2em;\n  font-weight: 700;\n  margin: 0.5rem 0;\n}\n\n.like-btn {\n  width: 1.5rem;\n  cursor: pointer;\n  color: #fff;\n  -webkit-filter: invert(100%);\n  filter: invert(100%);\n}\n\n.like-btn:hover {\n  scale: 1.1;\n}\n\n.likes-div {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.3rem;\n}\n\n.number-likes {\n  text-align: right;\n  margin: 0 0;\n}\n\n.comments-btn {\n  flex: 2;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 1em;\n  color: var(--font-color);\n  text-align: left;\n  padding: 0;\n}\n\n.comments-btn:hover {\n  color: var(--primary-color);\n}\n\n.comment-popup {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  border: 2px solid black;\n  position: relative;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  height: 71vh;\n}\n\n.close-btn {\n  position: absolute;\n  right: 1rem;\n  border: none;\n  background-color: transparent;\n}\n\n.close-icon {\n  width: 2.5rem;\n}\n\n.division {\n  display: flex;\n  gap: 5rem;\n}\n\n.thumbnail {\n  height: 70vh;\n  margin: auto;\n}\n\n.comment-info {\n  display: flex;\n  flex-direction: column;\n}\n\n.movie-title {\n  font-size: 2.5rem;\n  margin-bottom: 0;\n}\n\n.details {\n  width: 50vw;\n  text-align: left;\n  max-height: 8rem;\n  overflow-y: scroll;\n}\n\n.details::-webkit-scrollbar {\n  display: none;\n}\n\n.comments-div {\n  display: flex;\n  gap: 3rem;\n}\n\n.show-comments {\n  display: flex;\n  flex-direction: column;\n}\n\n.comments-display {\n  font-size: 1.1rem;\n  color: var(--font-color);\n}\n\n.comments-list {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  font-size: 1.1rem;\n  padding: 0;\n  margin-top: 0;\n  max-height: 16rem;\n  overflow-y: scroll;\n}\n\n.comments-list::-webkit-scrollbar {\n  display: none;\n}\n\n.comments-item {\n  font-size: 1rem;\n  margin: 0.2rem 0;\n}\n\n.comments-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.name-input,\n.comment-input {\n  font-size: 1.1rem;\n  border: none;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  font-family: \"Nunito\", sans-serif;\n  background-color: lightgray;\n  outline: none;\n}\n\n.comment-input {\n  height: 8rem;\n}\n\n.addacomment {\n  margin-bottom: 0;\n}\n\n.form-comment-btn {\n  border: 3px solid var(--font-color);\n  background-color: transparent;\n  font-size: 1rem;\n  font-weight: 700;\n  padding: 0.5rem;\n  color: var(--font-color);\n  border-radius: 0.5rem;\n}\n\n.form-comment-btn:hover {\n  color: var(--primary-color);\n  border: 3px solid var(--primary-color);\n}\n\n.footer {\n  display: flex;\n  justify-self: flex-end;\n  flex-direction: column;\n  bottom: 0;\n  margin-top: auto;\n}\n\n.upper-footer {\n  background-color: var(--primary-color);\n  color: #303030;\n  font-weight: 800;\n  padding: 1rem;\n  border-radius: 1rem;\n  margin: 0 2rem;\n  text-align: center;\n}\n\n.lower-footer {\n  height: 1rem;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_displayShows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayShows.js */ "./src/modules/displayShows.js");
/* harmony import */ var _modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/moviesCounter.js */ "./src/modules/moviesCounter.js");




window.addEventListener('load', () => {
  (0,_modules_displayShows_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_moviesCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const mainSector = document.getElementById('mainSector');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const nextSlide = () => {
    mainSector.scrollLeft -= 700;
  };

  const prevSlide = () => {
    mainSector.scrollLeft += 700;
  };

  prevBtn.addEventListener('click', nextSlide);
  nextBtn.addEventListener('click', prevSlide);
});


/***/ }),

/***/ "./src/modules/addLikes.js":
/*!*********************************!*\
  !*** ./src/modules/addLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addLikes = async (id) => {
  const addLikesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/likes';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  };
  await fetch(addLikesUrl, parameters);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);

/***/ }),

/***/ "./src/modules/comments-counter.js":
/*!*****************************************!*\
  !*** ./src/modules/comments-counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCounter = (response, elementid) => {
  const el = document.getElementById(elementid);
  const commentBtn = el.querySelector('.comments-btn');
  commentBtn.innerHTML = `Comment ${response.length}`;
};

const getCommentCounterApi = async (cArr) => {
  for (let i = 0; i < cArr.length; i += 1) {
    const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/comments?item_id=${cArr[i]}`;
    // eslint-disable-next-line no-await-in-loop
    await fetch(commentUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((json) => {
          commentsCounter(json, cArr[i]);
        });
      } else {
        commentsCounter([], cArr[i]);
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCommentCounterApi);

/***/ }),

/***/ "./src/modules/display-popup.js":
/*!**************************************!*\
  !*** ./src/modules/display-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentsContent": () => (/* binding */ commentsContent),
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "getCommentsApi": () => (/* binding */ getCommentsApi),
/* harmony export */   "popupContent": () => (/* binding */ popupContent)
/* harmony export */ });
/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-counter.js */ "./src/modules/comments-counter.js");


const closeBtn = document.getElementById('closeBtn');
const commentPopup = document.getElementById('commentPopup');
const main = document.querySelector('.main');
const thumbnail = document.getElementById('thumbnail');
const movieTitle = document.getElementById('movieTitle');
const details = document.getElementById('details');
const formCommentBtn = document.getElementById('formCommentBtn');
const nameInput = document.getElementById('nameInput');
const commentInput = document.getElementById('commentInput');
const commentsList = document.getElementById('commentsList');
const commentsDisplay = document.getElementById('commentsDisplay');
let aquiredData = [];

const getCommentsApi = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/comments?item_id=${id}`);
  const commentsData = await response.json();
  // eslint-disable-next-line no-use-before-define
  commentsContent(commentsData);
};

const popupContent = (movieData) => {
  formCommentBtn.setAttribute('data', movieData.id);
  thumbnail.src = movieData.image.original;
  movieTitle.innerHTML = movieData.name;
  details.innerHTML = movieData.summary;
  commentsDisplay.innerHTML = 'Comments';
  getCommentsApi(movieData.id);
};

const getApi = async (movie) => {
  const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${movie}`);
  aquiredData = await response.json();
  popupContent(aquiredData);
};

const commentsContent = (comment) => {
  if (!comment.error) {
    for (let i = 0; i < comment.length; i += 1) {
      const commentItem = document.createElement('i');
      commentItem.classList.add('comments-item');
      commentItem.innerHTML = `${comment[i].creation_date} ${comment[i].username}: ${comment[i].comment}`;
      commentsList.appendChild(commentItem);
    }
  }
};

const display = (e) => {
  commentPopup.style.display = 'flex';
  main.style.display = 'none';
  const movieName = e.target.parentNode.parentNode.children[1].innerHTML;
  getApi(movieName);
};

closeBtn.addEventListener('click', () => {
  commentsList.innerHTML = '';
  commentsDisplay.innerHTML = '';
  commentPopup.style.display = 'none';
  main.style.display = 'block';
});

const sendData = async (data) => {
  const postUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/comments';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch(postUrl, parameters);
};

const submitBtn = async () => {
  await sendData({
    item_id: aquiredData.id,
    username: nameInput.value,
    comment: commentInput.value,
  });
  commentsList.innerHTML = '';
  nameInput.value = '';
  commentInput.value = '';
};

formCommentBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await submitBtn();
  await getCommentsApi(e.target.getAttribute('data'));
  await (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])([e.target.getAttribute('data')]);
});


/***/ }),

/***/ "./src/modules/displayShows.js":
/*!*************************************!*\
  !*** ./src/modules/displayShows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addLikes.js */ "./src/modules/addLikes.js");
/* harmony import */ var _retrieveLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retrieveLikes.js */ "./src/modules/retrieveLikes.js");
/* harmony import */ var _display_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-popup.js */ "./src/modules/display-popup.js");
/* harmony import */ var _moviesCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moviesCounter.js */ "./src/modules/moviesCounter.js");
/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comments-counter.js */ "./src/modules/comments-counter.js");






const mainSector = document.querySelector('.main-sector');
const commentsIdArr = [];

const displayShows = (shows) => {
  if (shows) {
    for (let i = 0; i < 20; i += 1) {
      const movieDetails = document.createElement('div');
      movieDetails.className = 'movie-details';
      movieDetails.setAttribute('id', shows[i].id);
      mainSector.appendChild(movieDetails);

      const movieImage = document.createElement('img');
      movieImage.className = 'movie-img';
      movieDetails.appendChild(movieImage);
      movieImage.setAttribute('src', shows[i].image.medium);
      
      const movieName = document.createElement('p');
      movieName.classList.add('movie-name');
      movieDetails.appendChild(movieName);

      const name = document.createTextNode(shows[i].name);
      movieName.appendChild(name);

      const likeBtn = document.createElement('img');
      likeBtn.setAttribute('src', './assets/heart.png');
      likeBtn.classList.add('like-btn');

      const likesDiv = document.createElement('div');
      likesDiv.className = 'likes-div';
      movieDetails.appendChild(likesDiv);

      const numberLikes = document.createElement('p');
      numberLikes.classList.add('number-likes');
      numberLikes.innerHTML = '0 Likes';

      (0,_retrieveLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then((likes) => {
        likes.forEach((like) => {
          if (like.item_id === shows[i].id) {
            numberLikes.innerHTML = `${like.likes} Likes`;
          }
        });
      });
      commentsIdArr.push(shows[i].id);

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comments-btn');
      likesDiv.appendChild(commentBtn);
      likesDiv.appendChild(likeBtn);
      likesDiv.appendChild(numberLikes);
      commentBtn.addEventListener('click', (e) => {
        (0,_display_popup_js__WEBPACK_IMPORTED_MODULE_2__.display)(e);
      });
      likeBtn.addEventListener('click', async () => {
        const showId = shows[i].id;
        await (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(showId);
        await (0,_retrieveLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then((likes) => {
          likes.forEach((like) => {
            if (like.item_id === shows[i].id) {
              numberLikes.innerHTML = `${like.likes} Likes`;
            }
          });
        });
      });
    }
  }
  (0,_moviesCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(commentsIdArr);
};

const fetchShows = async () => {
  const fetchUrl = 'https://api.tvmaze.com/shows?page=1';
  const response = await fetch(fetchUrl);
  const fetchedData = await response.json();
  displayShows(fetchedData);
};

fetchShows();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShows);


/***/ }),

/***/ "./src/modules/moviesCounter.js":
/*!**************************************!*\
  !*** ./src/modules/moviesCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const navNumbers = document.querySelector('.numbers');

const moviesCounter = () => {
  const main = document.querySelector('.main-sector');
  if (main.children.length) {
    const number = main.childElementCount - 2;
    navNumbers.innerHTML = `Movies (${number})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesCounter);

/***/ }),

/***/ "./src/modules/retrieveLikes.js":
/*!**************************************!*\
  !*** ./src/modules/retrieveLikes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const retrieveLikes = async () => {
  const retrieveLikesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/likes';
  const response = await fetch(retrieveLikesUrl);

  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveLikes);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFL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QUFRLGdFQUFvQjtBQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGb0M7QUFDVTtBQUNGO0FBQ0U7QUFDVTs7QUFFekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0sNkRBQWE7QUFDbkI7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFPO0FBQ2YsT0FBTztBQUNQO0FBQ0E7QUFDQSxjQUFjLHdEQUFRO0FBQ3RCLGNBQWMsNkRBQWE7QUFDM0I7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEVBQUUsNkRBQWE7QUFDZixFQUFFLGdFQUFvQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNwRjVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ1Y1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9tb2R1bGVzL2FkZExpa2VzLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL21vZHVsZXMvY29tbWVudHMtY291bnRlci5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXktcG9wdXAuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvbW9kdWxlcy9kaXNwbGF5U2hvd3MuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvbW9kdWxlcy9tb3ZpZXNDb3VudGVyLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL21vZHVsZXMvcmV0cmlldmVMaWtlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZm9udC1jb2xvcjogI2M1YzRjNDtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2U2NGQ1MjtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQ6ICMzMDMwMzA7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMXJlbTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxufVxcblxcbi5sb2dvLWltZyB7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ubnVtYmVycyB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5tYWluLXNlY3RvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDFyZW07XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi5tYWluLXNlY3Rvcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByZXZpb3VzLWJ0bixcXG4ubmV4dC1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcmV2aW91cy1idG4ge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLm5leHQtYnRuIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4ucHJldmlvdXMtYnRuOmhvdmVyLFxcbi5uZXh0LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5mYS1zb2xpZCB7XFxuICB0ZXh0LXNoYWRvdzpcXG4gICAgLTFweCAycHggMCAjMDAwLFxcbiAgICAxcHggMXB4IDAgIzAwMCxcXG4gICAgMXB4IC0xcHggMCAjMDAwLFxcbiAgICAtMXB4IC0xcHggMCAjMDAwO1xcbn1cXG5cXG4ubW92aWUtZGV0YWlscyB7XFxuICBoZWlnaHQ6IDIzcmVtO1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbi5tb3YtZGV0YWlscyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubW92aWUtaW1nIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tb3ZpZS1uYW1lIHtcXG4gIGZsZXg6IDI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbi5saWtlLWJ0biB7XFxuICB3aWR0aDogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxufVxcblxcbi5saWtlLWJ0bjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4ubGlrZXMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuM3JlbTtcXG59XFxuXFxuLm51bWJlci1saWtlcyB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1hcmdpbjogMCAwO1xcbn1cXG5cXG4uY29tbWVudHMtYnRuIHtcXG4gIGZsZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb21tZW50cy1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgaGVpZ2h0OiA3MXZoO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5jbG9zZS1pY29uIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxufVxcblxcbi5kaXZpc2lvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gIGhlaWdodDogNzB2aDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNvbW1lbnQtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vdmllLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgd2lkdGg6IDUwdnc7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWF4LWhlaWdodDogOHJlbTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmRldGFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb21tZW50cy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLnNob3ctY29tbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb21tZW50cy1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY29tbWVudHMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWF4LWhlaWdodDogMTZyZW07XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jb21tZW50cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29tbWVudHMtaXRlbSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW46IDAuMnJlbSAwO1xcbn1cXG5cXG4uY29tbWVudHMtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5hbWUtaW5wdXQsXFxuLmNvbW1lbnQtaW5wdXQge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uY29tbWVudC1pbnB1dCB7XFxuICBoZWlnaHQ6IDhyZW07XFxufVxcblxcbi5hZGRhY29tbWVudCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZm9ybS1jb21tZW50LWJ0biB7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tY29tbWVudC1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLnVwcGVyLWZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiAjMzAzMDMwO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWFyZ2luOiAwIDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb3dlci1mb290ZXIge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztB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YzVjNGM0O1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZTY0ZDUyO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5uYXYtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5uYXYtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5udW1iZXJzIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLm1haW4tc2VjdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMXJlbTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLm1haW4tc2VjdG9yOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJldmlvdXMtYnRuLFxcbi5uZXh0LWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwJTtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByZXZpb3VzLWJ0biB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4ubmV4dC1idG4ge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5wcmV2aW91cy1idG46aG92ZXIsXFxuLm5leHQtYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZhLXNvbGlkIHtcXG4gIHRleHQtc2hhZG93OlxcbiAgICAtMXB4IDJweCAwICMwMDAsXFxuICAgIDFweCAxcHggMCAjMDAwLFxcbiAgICAxcHggLTFweCAwICMwMDAsXFxuICAgIC0xcHggLTFweCAwICMwMDA7XFxufVxcblxcbi5tb3ZpZS1kZXRhaWxzIHtcXG4gIGhlaWdodDogMjNyZW07XFxuICB3aWR0aDogMTJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuLm1vdi1kZXRhaWxzIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb3ZpZS1pbWcge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vdmllLW5hbWUge1xcbiAgZmxleDogMjtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLmxpa2UtYnRuIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXG59XFxuXFxuLmxpa2UtYnRuOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi5saWtlcy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG5cXG4ubnVtYmVyLWxpa2VzIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luOiAwIDA7XFxufVxcblxcbi5jb21tZW50cy1idG4ge1xcbiAgZmxleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmNvbW1lbnRzLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5jb21tZW50LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBoZWlnaHQ6IDcxdmg7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNsb3NlLWljb24ge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG59XFxuXFxuLmRpdmlzaW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi50aHVtYm5haWwge1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uY29tbWVudC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW92aWUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICB3aWR0aDogNTB2dztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXgtaGVpZ2h0OiA4cmVtO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uZGV0YWlsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnRzLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uc2hvdy1jb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnRzLWRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5jb21tZW50cy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXgtaGVpZ2h0OiAxNnJlbTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb21tZW50cy1pdGVtIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxufVxcblxcbi5jb21tZW50cy1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubmFtZS1pbnB1dCxcXG4uY29tbWVudC1pbnB1dCB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5jb21tZW50LWlucHV0IHtcXG4gIGhlaWdodDogOHJlbTtcXG59XFxuXFxuLmFkZGFjb21tZW50IHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5mb3JtLWNvbW1lbnQtYnRuIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1jb21tZW50LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4udXBwZXItZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6ICMzMDMwMzA7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBtYXJnaW46IDAgMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvd2VyLWZvb3RlciB7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgZGlzcGxheVNob3dzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5U2hvd3MuanMnO1xuaW1wb3J0IG1vdmllc0NvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL21vdmllc0NvdW50ZXIuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgZGlzcGxheVNob3dzKCk7XG4gIG1vdmllc0NvdW50ZXIoKTtcbiAgY29uc3QgbWFpblNlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU2VjdG9yJyk7XG4gIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldkJ0bicpO1xuICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRCdG4nKTtcblxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgbWFpblNlY3Rvci5zY3JvbGxMZWZ0IC09IDcwMDtcbiAgfTtcblxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XG4gICAgbWFpblNlY3Rvci5zY3JvbGxMZWZ0ICs9IDcwMDtcbiAgfTtcblxuICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcbiAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XG59KTtcbiIsImNvbnN0IGFkZExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGFkZExpa2VzVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NsZVZaWUNPUmdiTjNuaVFUakhjL2xpa2VzJztcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2goYWRkTGlrZXNVcmwsIHBhcmFtZXRlcnMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkTGlrZXM7IiwiY29uc3QgY29tbWVudHNDb3VudGVyID0gKHJlc3BvbnNlLCBlbGVtZW50aWQpID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50aWQpO1xuICBjb25zdCBjb21tZW50QnRuID0gZWwucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWJ0bicpO1xuICBjb21tZW50QnRuLmlubmVySFRNTCA9IGBDb21tZW50ICR7cmVzcG9uc2UubGVuZ3RofWA7XG59O1xuXG5jb25zdCBnZXRDb21tZW50Q291bnRlckFwaSA9IGFzeW5jIChjQXJyKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNvbW1lbnRVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ2xlVlpZQ09SZ2JOM25pUVRqSGMvY29tbWVudHM/aXRlbV9pZD0ke2NBcnJbaV19YDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgIGF3YWl0IGZldGNoKGNvbW1lbnRVcmwsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgY29tbWVudHNDb3VudGVyKGpzb24sIGNBcnJbaV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1lbnRzQ291bnRlcihbXSwgY0FycltpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRDb3VudGVyQXBpOyIsImltcG9ydCBnZXRDb21tZW50Q291bnRlckFwaSBmcm9tICcuL2NvbW1lbnRzLWNvdW50ZXIuanMnO1xuXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ0bicpO1xuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRQb3B1cCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5jb25zdCB0aHVtYm5haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGh1bWJuYWlsJyk7XG5jb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllVGl0bGUnKTtcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscycpO1xuY29uc3QgZm9ybUNvbW1lbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUNvbW1lbnRCdG4nKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXQnKTtcbmNvbnN0IGNvbW1lbnRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50SW5wdXQnKTtcbmNvbnN0IGNvbW1lbnRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50c0xpc3QnKTtcbmNvbnN0IGNvbW1lbnRzRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50c0Rpc3BsYXknKTtcbmxldCBhcXVpcmVkRGF0YSA9IFtdO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHNBcGkgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ2xlVlpZQ09SZ2JOM25pUVRqSGMvY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBjb21tZW50c0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb21tZW50c0NvbnRlbnQoY29tbWVudHNEYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBwb3B1cENvbnRlbnQgPSAobW92aWVEYXRhKSA9PiB7XG4gIGZvcm1Db21tZW50QnRuLnNldEF0dHJpYnV0ZSgnZGF0YScsIG1vdmllRGF0YS5pZCk7XG4gIHRodW1ibmFpbC5zcmMgPSBtb3ZpZURhdGEuaW1hZ2Uub3JpZ2luYWw7XG4gIG1vdmllVGl0bGUuaW5uZXJIVE1MID0gbW92aWVEYXRhLm5hbWU7XG4gIGRldGFpbHMuaW5uZXJIVE1MID0gbW92aWVEYXRhLnN1bW1hcnk7XG4gIGNvbW1lbnRzRGlzcGxheS5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICBnZXRDb21tZW50c0FwaShtb3ZpZURhdGEuaWQpO1xufTtcblxuY29uc3QgZ2V0QXBpID0gYXN5bmMgKG1vdmllKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2luZ2xlc2VhcmNoL3Nob3dzP3E9JHttb3ZpZX1gKTtcbiAgYXF1aXJlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHBvcHVwQ29udGVudChhcXVpcmVkRGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tbWVudHNDb250ZW50ID0gKGNvbW1lbnQpID0+IHtcbiAgaWYgKCFjb21tZW50LmVycm9yKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tZW50Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb21tZW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGNvbW1lbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzLWl0ZW0nKTtcbiAgICAgIGNvbW1lbnRJdGVtLmlubmVySFRNTCA9IGAke2NvbW1lbnRbaV0uY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50W2ldLnVzZXJuYW1lfTogJHtjb21tZW50W2ldLmNvbW1lbnR9YDtcbiAgICAgIGNvbW1lbnRzTGlzdC5hcHBlbmRDaGlsZChjb21tZW50SXRlbSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheSA9IChlKSA9PiB7XG4gIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBtYWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IG1vdmllTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5pbm5lckhUTUw7XG4gIGdldEFwaShtb3ZpZU5hbWUpO1xufTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgY29tbWVudHNEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICBjb21tZW50UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jb25zdCBzZW5kRGF0YSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IHBvc3RVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ2xlVlpZQ09SZ2JOM25pUVRqSGMvY29tbWVudHMnO1xuICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2gocG9zdFVybCwgcGFyYW1ldGVycyk7XG59O1xuXG5jb25zdCBzdWJtaXRCdG4gPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNlbmREYXRhKHtcbiAgICBpdGVtX2lkOiBhcXVpcmVkRGF0YS5pZCxcbiAgICB1c2VybmFtZTogbmFtZUlucHV0LnZhbHVlLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnRJbnB1dC52YWx1ZSxcbiAgfSk7XG4gIGNvbW1lbnRzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgbmFtZUlucHV0LnZhbHVlID0gJyc7XG4gIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xufTtcblxuZm9ybUNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGF3YWl0IHN1Ym1pdEJ0bigpO1xuICBhd2FpdCBnZXRDb21tZW50c0FwaShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKSk7XG4gIGF3YWl0IGdldENvbW1lbnRDb3VudGVyQXBpKFtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEnKV0pO1xufSk7XG4iLCJpbXBvcnQgYWRkTGlrZXMgZnJvbSAnLi9hZGRMaWtlcy5qcyc7XG5pbXBvcnQgcmV0cmlldmVMaWtlcyBmcm9tICcuL3JldHJpZXZlTGlrZXMuanMnO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS1wb3B1cC5qcyc7XG5pbXBvcnQgbW92aWVzQ291bnRlciBmcm9tICcuL21vdmllc0NvdW50ZXIuanMnO1xuaW1wb3J0IGdldENvbW1lbnRDb3VudGVyQXBpIGZyb20gJy4vY29tbWVudHMtY291bnRlci5qcyc7XG5cbmNvbnN0IG1haW5TZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zZWN0b3InKTtcbmNvbnN0IGNvbW1lbnRzSWRBcnIgPSBbXTtcblxuY29uc3QgZGlzcGxheVNob3dzID0gKHNob3dzKSA9PiB7XG4gIGlmIChzaG93cykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbW92aWVEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBtb3ZpZURldGFpbHMuY2xhc3NOYW1lID0gJ21vdmllLWRldGFpbHMnO1xuICAgICAgbW92aWVEZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLCBzaG93c1tpXS5pZCk7XG4gICAgICBtYWluU2VjdG9yLmFwcGVuZENoaWxkKG1vdmllRGV0YWlscyk7XG5cbiAgICAgIGNvbnN0IG1vdmllSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIG1vdmllSW1hZ2UuY2xhc3NOYW1lID0gJ21vdmllLWltZyc7XG4gICAgICBtb3ZpZURldGFpbHMuYXBwZW5kQ2hpbGQobW92aWVJbWFnZSk7XG4gICAgICBtb3ZpZUltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgc2hvd3NbaV0uaW1hZ2UubWVkaXVtKTtcbiAgICAgIFxuICAgICAgY29uc3QgbW92aWVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbW92aWVOYW1lLmNsYXNzTGlzdC5hZGQoJ21vdmllLW5hbWUnKTtcbiAgICAgIG1vdmllRGV0YWlscy5hcHBlbmRDaGlsZChtb3ZpZU5hbWUpO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2hvd3NbaV0ubmFtZSk7XG4gICAgICBtb3ZpZU5hbWUuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIGxpa2VCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9hc3NldHMvaGVhcnQucG5nJyk7XG4gICAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2xpa2UtYnRuJyk7XG5cbiAgICAgIGNvbnN0IGxpa2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBsaWtlc0Rpdi5jbGFzc05hbWUgPSAnbGlrZXMtZGl2JztcbiAgICAgIG1vdmllRGV0YWlscy5hcHBlbmRDaGlsZChsaWtlc0Rpdik7XG5cbiAgICAgIGNvbnN0IG51bWJlckxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbnVtYmVyTGlrZXMuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWxpa2VzJyk7XG4gICAgICBudW1iZXJMaWtlcy5pbm5lckhUTUwgPSAnMCBMaWtlcyc7XG5cbiAgICAgIHJldHJpZXZlTGlrZXMoKS50aGVuKChsaWtlcykgPT4ge1xuICAgICAgICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gc2hvd3NbaV0uaWQpIHtcbiAgICAgICAgICAgIG51bWJlckxpa2VzLmlubmVySFRNTCA9IGAke2xpa2UubGlrZXN9IExpa2VzYDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb21tZW50c0lkQXJyLnB1c2goc2hvd3NbaV0uaWQpO1xuXG4gICAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb21tZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzLWJ0bicpO1xuICAgICAgbGlrZXNEaXYuYXBwZW5kQ2hpbGQoY29tbWVudEJ0bik7XG4gICAgICBsaWtlc0Rpdi5hcHBlbmRDaGlsZChsaWtlQnRuKTtcbiAgICAgIGxpa2VzRGl2LmFwcGVuZENoaWxkKG51bWJlckxpa2VzKTtcbiAgICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBkaXNwbGF5KGUpO1xuICAgICAgfSk7XG4gICAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBzaG93SWQgPSBzaG93c1tpXS5pZDtcbiAgICAgICAgYXdhaXQgYWRkTGlrZXMoc2hvd0lkKTtcbiAgICAgICAgYXdhaXQgcmV0cmlldmVMaWtlcygpLnRoZW4oKGxpa2VzKSA9PiB7XG4gICAgICAgICAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gc2hvd3NbaV0uaWQpIHtcbiAgICAgICAgICAgICAgbnVtYmVyTGlrZXMuaW5uZXJIVE1MID0gYCR7bGlrZS5saWtlc30gTGlrZXNgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBtb3ZpZXNDb3VudGVyKCk7XG4gIGdldENvbW1lbnRDb3VudGVyQXBpKGNvbW1lbnRzSWRBcnIpO1xufTtcblxuY29uc3QgZmV0Y2hTaG93cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmV0Y2hVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPTEnO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoVXJsKTtcbiAgY29uc3QgZmV0Y2hlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGRpc3BsYXlTaG93cyhmZXRjaGVkRGF0YSk7XG59O1xuXG5mZXRjaFNob3dzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlTaG93cztcbiIsImNvbnN0IG5hdk51bWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVycycpO1xuXG5jb25zdCBtb3ZpZXNDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdG9yJyk7XG4gIGlmIChtYWluLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGNvbnN0IG51bWJlciA9IG1haW4uY2hpbGRFbGVtZW50Q291bnQgLSAyO1xuICAgIG5hdk51bWJlcnMuaW5uZXJIVE1MID0gYE1vdmllcyAoJHtudW1iZXJ9KWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmllc0NvdW50ZXI7IiwiY29uc3QgcmV0cmlldmVMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmV0cmlldmVMaWtlc1VybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9DbGVWWllDT1JnYk4zbmlRVGpIYy9saWtlcyc7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmV0cmlldmVMaWtlc1VybCk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJldHJpZXZlTGlrZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9