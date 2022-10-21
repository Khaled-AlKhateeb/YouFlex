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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font-color: #c5c4c4;\r\n  --primary-color: #e64d52;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Nunito\", sans-serif;\r\n  box-sizing: border-box;\r\n  color: var(--font-color);\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #303030;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 1rem;\r\n  padding: 1em;\r\n  margin-bottom: 8rem;\r\n}\r\n\r\n.logo-img {\r\n  height: 2.5rem;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 2rem;\r\n  margin-right: 2rem;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link:visited {\r\n  color: var(--font-color);\r\n}\r\n\r\n.nav-item:hover .nav-link {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.numbers {\r\n  color: var(--font-color);\r\n}\r\n\r\n.main-sector {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  gap: 1rem;\r\n  overflow-x: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.main-sector::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.previous-btn,\r\n.next-btn {\r\n  position: absolute;\r\n  top: 40%;\r\n  padding: 0 1rem;\r\n  color: var(--font-color);\r\n  font-size: 4rem;\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n}\r\n\r\n.previous-btn {\r\n  left: 0;\r\n}\r\n\r\n.next-btn {\r\n  right: 0;\r\n}\r\n\r\n.previous-btn:hover,\r\n.next-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.fa-solid {\r\n  text-shadow:\r\n    -1px 2px 0 #000,\r\n    1px 1px 0 #000,\r\n    1px -1px 0 #000,\r\n    -1px -1px 0 #000;\r\n}\r\n\r\n.movie-details {\r\n  height: 23rem;\r\n  width: 12rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(80, 80, 80);\r\n  padding: 0.3rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.mov-details {\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.movie-img {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.movie-name {\r\n  flex: 2;\r\n  font-size: 1.2em;\r\n  font-weight: 700;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.like-btn {\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  -webkit-filter: invert(100%);\r\n  filter: invert(100%);\r\n}\r\n\r\n.like-btn:hover {\r\n  scale: 1.1;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.number-likes {\r\n  text-align: right;\r\n  margin: 0 0;\r\n}\r\n\r\n.comments-btn {\r\n  flex: 2;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  color: var(--font-color);\r\n  text-align: left;\r\n  padding: 0;\r\n}\r\n\r\n.comments-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.comment-popup {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  position: relative;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  height: 71vh;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  right: 1rem;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.close-icon {\r\n  width: 2.5rem;\r\n}\r\n\r\n.division {\r\n  display: flex;\r\n  gap: 5rem;\r\n}\r\n\r\n.thumbnail {\r\n  height: 70vh;\r\n  margin: auto;\r\n}\r\n\r\n.comment-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.movie-title {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.details {\r\n  width: 50vw;\r\n  text-align: left;\r\n  max-height: 8rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.details::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-div {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comments-display {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  font-size: 1.1rem;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  max-height: 16rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comments-list::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-item {\r\n  font-size: 1rem;\r\n  margin: 0.2rem 0;\r\n}\r\n\r\n.comments-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.name-input,\r\n.comment-input {\r\n  font-size: 1.1rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  padding: 0.5rem;\r\n  font-family: \"Nunito\", sans-serif;\r\n  background-color: lightgray;\r\n  outline: none;\r\n}\r\n\r\n.comment-input {\r\n  height: 8rem;\r\n}\r\n\r\n.addacomment {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-comment-btn {\r\n  border: 3px solid var(--font-color);\r\n  background-color: transparent;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  padding: 0.5rem;\r\n  color: var(--font-color);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.form-comment-btn:hover {\r\n  color: var(--primary-color);\r\n  border: 3px solid var(--primary-color);\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-self: flex-end;\r\n  flex-direction: column;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n}\r\n\r\n.upper-footer {\r\n  background-color: var(--primary-color);\r\n  color: #303030;\r\n  font-weight: 800;\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  margin: 0 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.lower-footer {\r\n  height: 1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --font-color: #c5c4c4;\r\n  --primary-color: #e64d52;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Nunito\", sans-serif;\r\n  box-sizing: border-box;\r\n  color: var(--font-color);\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #303030;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 1rem;\r\n  padding: 1em;\r\n  margin-bottom: 8rem;\r\n}\r\n\r\n.logo-img {\r\n  height: 2.5rem;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 2rem;\r\n  margin-right: 2rem;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link:visited {\r\n  color: var(--font-color);\r\n}\r\n\r\n.nav-item:hover .nav-link {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.numbers {\r\n  color: var(--font-color);\r\n}\r\n\r\n.main-sector {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  gap: 1rem;\r\n  overflow-x: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.main-sector::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.previous-btn,\r\n.next-btn {\r\n  position: absolute;\r\n  top: 40%;\r\n  padding: 0 1rem;\r\n  color: var(--font-color);\r\n  font-size: 4rem;\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n}\r\n\r\n.previous-btn {\r\n  left: 0;\r\n}\r\n\r\n.next-btn {\r\n  right: 0;\r\n}\r\n\r\n.previous-btn:hover,\r\n.next-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.fa-solid {\r\n  text-shadow:\r\n    -1px 2px 0 #000,\r\n    1px 1px 0 #000,\r\n    1px -1px 0 #000,\r\n    -1px -1px 0 #000;\r\n}\r\n\r\n.movie-details {\r\n  height: 23rem;\r\n  width: 12rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(80, 80, 80);\r\n  padding: 0.3rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.mov-details {\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.movie-img {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.movie-name {\r\n  flex: 2;\r\n  font-size: 1.2em;\r\n  font-weight: 700;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.like-btn {\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  -webkit-filter: invert(100%);\r\n  filter: invert(100%);\r\n}\r\n\r\n.like-btn:hover {\r\n  scale: 1.1;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.number-likes {\r\n  text-align: right;\r\n  margin: 0 0;\r\n}\r\n\r\n.comments-btn {\r\n  flex: 2;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  color: var(--font-color);\r\n  text-align: left;\r\n  padding: 0;\r\n}\r\n\r\n.comments-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.comment-popup {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  position: relative;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  height: 71vh;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  right: 1rem;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.close-icon {\r\n  width: 2.5rem;\r\n}\r\n\r\n.division {\r\n  display: flex;\r\n  gap: 5rem;\r\n}\r\n\r\n.thumbnail {\r\n  height: 70vh;\r\n  margin: auto;\r\n}\r\n\r\n.comment-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.movie-title {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.details {\r\n  width: 50vw;\r\n  text-align: left;\r\n  max-height: 8rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.details::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-div {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comments-display {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  font-size: 1.1rem;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  max-height: 16rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comments-list::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-item {\r\n  font-size: 1rem;\r\n  margin: 0.2rem 0;\r\n}\r\n\r\n.comments-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.name-input,\r\n.comment-input {\r\n  font-size: 1.1rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  padding: 0.5rem;\r\n  font-family: \"Nunito\", sans-serif;\r\n  background-color: lightgray;\r\n  outline: none;\r\n}\r\n\r\n.comment-input {\r\n  height: 8rem;\r\n}\r\n\r\n.addacomment {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-comment-btn {\r\n  border: 3px solid var(--font-color);\r\n  background-color: transparent;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  padding: 0.5rem;\r\n  color: var(--font-color);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.form-comment-btn:hover {\r\n  color: var(--primary-color);\r\n  border: 3px solid var(--primary-color);\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-self: flex-end;\r\n  flex-direction: column;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n}\r\n\r\n.upper-footer {\r\n  background-color: var(--primary-color);\r\n  color: #303030;\r\n  font-weight: 800;\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  margin: 0 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.lower-footer {\r\n  height: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
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
const commentsDisplay = document.getElementById('commentsDisplay');

const commentsCounter = (element) => {
  commentsDisplay.innerHTML = `Comments (${element.children.length})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);

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
let commentsData = [];

const getCommentsApi = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/comments?item_id=${id}`);
  commentsData = await response.json();
  // eslint-disable-next-line no-use-before-define
  commentsContent(commentsData);
};

const popupContent = (movieData) => {
  thumbnail.src = movieData.image.original;
  movieTitle.innerHTML = movieData.name;
  details.innerHTML = movieData.summary;
  getCommentsApi(aquiredData.id);
};

const getApi = async (movie) => {
  const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${movie}`);
  aquiredData = await response.json();
  popupContent(aquiredData);
};

const commentsContent = (comment) => {
  if (comment) {
    comment.forEach((element) => {
      const commentItem = document.createElement('i');
      commentItem.classList.add('comments-item');
      commentItem.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;
      commentsList.appendChild(commentItem);
    });
    (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(commentsList);
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

formCommentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  sendData({
    item_id: aquiredData.id,
    username: nameInput.value,
    comment: commentInput.value,
  });
  nameInput.value = '';
  commentInput.value = '';
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





const mainSector = document.querySelector('.main-sector');

const displayShows = (shows) => {
  if (shows) {
    for (let i = 0; i < 20; i += 1) {
      const movieDetails = document.createElement('div');
      movieDetails.className = 'movie-details';
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

      const commentBtn = document.createElement('button');
      commentBtn.classList.add('comments-btn');
      const commentBtnTxt = document.createTextNode('Comment');
      likesDiv.appendChild(commentBtn);
      commentBtn.appendChild(commentBtnTxt);
      likesDiv.appendChild(likeBtn);
      likesDiv.appendChild(numberLikes);
      commentBtn.addEventListener('click', (e) => {
        (0,_display_popup_js__WEBPACK_IMPORTED_MODULE_2__.display)(e);
      });
      likeBtn.addEventListener('click', () => {
        (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(shows[i].id);
        setTimeout((0,_retrieveLikes_js__WEBPACK_IMPORTED_MODULE_1__["default"])().then((likes) => {
          likes.forEach((like) => {
            if (like.item_id === shows[i].id) {
              numberLikes.innerHTML = `${like.likes} Likes`;
            }
          });
        }), 1000);
      });
    }
  }
  (0,_moviesCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
retrieveLikes();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveLikes);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLHVCQUF1QixtQkFBbUIsS0FBSyxXQUFXLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLGdDQUFnQyw0QkFBNEIsK0JBQStCLEtBQUssY0FBYywwQ0FBMEMsNkJBQTZCLCtCQUErQixnQkFBZ0IsaUJBQWlCLDBCQUEwQixLQUFLLGNBQWMsd0JBQXdCLG9CQUFvQiw2QkFBNkIsS0FBSyxpQkFBaUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLG1CQUFtQiwwQkFBMEIsS0FBSyxtQkFBbUIscUJBQXFCLEtBQUssbUJBQW1CLG9CQUFvQix1QkFBdUIsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLEtBQUssbUJBQW1CLDRCQUE0QixLQUFLLDJCQUEyQiwrQkFBK0IsS0FBSyxtQ0FBbUMsa0NBQWtDLEtBQUssa0JBQWtCLCtCQUErQixLQUFLLHNCQUFzQixvQkFBb0IsOEJBQThCLG1CQUFtQixnQkFBZ0IsdUJBQXVCLDhCQUE4QixLQUFLLHlDQUF5QyxvQkFBb0IsS0FBSyxxQ0FBcUMseUJBQXlCLGVBQWUsc0JBQXNCLCtCQUErQixzQkFBc0IsbUJBQW1CLG9DQUFvQyxvQkFBb0IsS0FBSyx1QkFBdUIsY0FBYyxLQUFLLG1CQUFtQixlQUFlLEtBQUssaURBQWlELGtDQUFrQyxLQUFLLG1CQUFtQixrSEFBa0gsS0FBSyx3QkFBd0Isb0JBQW9CLG1CQUFtQixvQkFBb0IsNkJBQTZCLHdDQUF3QyxzQkFBc0IsNEJBQTRCLEtBQUssc0JBQXNCLDBCQUEwQixnQkFBZ0IsS0FBSyxvQkFBb0Isa0NBQWtDLG1DQUFtQyxLQUFLLHFCQUFxQixjQUFjLHVCQUF1Qix1QkFBdUIsdUJBQXVCLEtBQUssbUJBQW1CLG9CQUFvQixzQkFBc0Isa0JBQWtCLG1DQUFtQywyQkFBMkIsS0FBSyx5QkFBeUIsaUJBQWlCLEtBQUssb0JBQW9CLG9CQUFvQixxQ0FBcUMsa0JBQWtCLEtBQUssdUJBQXVCLHdCQUF3QixrQkFBa0IsS0FBSyx1QkFBdUIsY0FBYyxvQ0FBb0MsbUJBQW1CLHNCQUFzQixxQkFBcUIsK0JBQStCLHVCQUF1QixpQkFBaUIsS0FBSyw2QkFBNkIsa0NBQWtDLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixtQkFBbUIsS0FBSyxvQkFBb0IseUJBQXlCLGtCQUFrQixtQkFBbUIsb0NBQW9DLEtBQUsscUJBQXFCLG9CQUFvQixLQUFLLG1CQUFtQixvQkFBb0IsZ0JBQWdCLEtBQUssb0JBQW9CLG1CQUFtQixtQkFBbUIsS0FBSyx1QkFBdUIsb0JBQW9CLDZCQUE2QixLQUFLLHNCQUFzQix3QkFBd0IsdUJBQXVCLEtBQUssa0JBQWtCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHlCQUF5QixLQUFLLHFDQUFxQyxvQkFBb0IsS0FBSyx1QkFBdUIsb0JBQW9CLGdCQUFnQixLQUFLLHdCQUF3QixvQkFBb0IsNkJBQTZCLEtBQUssMkJBQTJCLHdCQUF3QixLQUFLLHdCQUF3QixvQkFBb0IsNkJBQTZCLHVCQUF1Qix3QkFBd0IsaUJBQWlCLG9CQUFvQix3QkFBd0IseUJBQXlCLEtBQUssMkNBQTJDLG9CQUFvQixLQUFLLHdCQUF3QixzQkFBc0IsdUJBQXVCLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEtBQUssd0NBQXdDLHdCQUF3QixtQkFBbUIsNEJBQTRCLHNCQUFzQiwwQ0FBMEMsa0NBQWtDLG9CQUFvQixLQUFLLHdCQUF3QixtQkFBbUIsS0FBSyxzQkFBc0IsdUJBQXVCLEtBQUssMkJBQTJCLDBDQUEwQyxvQ0FBb0Msc0JBQXNCLHVCQUF1QixzQkFBc0IsK0JBQStCLDRCQUE0QixLQUFLLGlDQUFpQyxrQ0FBa0MsNkNBQTZDLEtBQUssaUJBQWlCLG9CQUFvQiw2QkFBNkIsNkJBQTZCLGdCQUFnQix1QkFBdUIsS0FBSyx1QkFBdUIsNkNBQTZDLHFCQUFxQix1QkFBdUIsb0JBQW9CLDBCQUEwQixxQkFBcUIseUJBQXlCLEtBQUssdUJBQXVCLG1CQUFtQixLQUFLLHVCQUF1QjtBQUN0bGE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmc0I7QUFDK0I7QUFDRTtBQUN2RDtBQUNBLG9FQUFZO0FBQ1oscUVBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUNYdkI7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSkFBZ0osR0FBRztBQUNuSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSxNQUFNO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxnQkFBZ0I7QUFDL0Y7QUFDQSxLQUFLO0FBQ0wsSUFBSSxnRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZvQztBQUNVO0FBQ0Y7QUFDRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBYTtBQUNuQjtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQU87QUFDZixPQUFPO0FBQ1A7QUFDQSxRQUFRLHdEQUFRO0FBQ2hCLG1CQUFtQiw2REFBYTtBQUNoQztBQUNBO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsRUFBRSw2REFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9FNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUNWNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL21vZHVsZXMvYWRkTGlrZXMuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvbW9kdWxlcy9jb21tZW50cy1jb3VudGVyLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL21vZHVsZXMvZGlzcGxheS1wb3B1cC5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlTaG93cy5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9tb2R1bGVzL21vdmllc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvbW9kdWxlcy9yZXRyaWV2ZUxpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1mb250LWNvbG9yOiAjYzVjNGM0O1xcclxcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZTY0ZDUyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taW1nIHtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluazp2aXNpdGVkIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5udW1iZXJzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2VjdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2VjdG9yOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnRuLFxcclxcbi5uZXh0LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ0biB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dC1idG4ge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wcmV2aW91cy1idG46aG92ZXIsXFxyXFxuLm5leHQtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIHRleHQtc2hhZG93OlxcclxcbiAgICAtMXB4IDJweCAwICMwMDAsXFxyXFxuICAgIDFweCAxcHggMCAjMDAwLFxcclxcbiAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgIC0xcHggLTFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gIGhlaWdodDogMjNyZW07XFxyXFxuICB3aWR0aDogMTJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdi1kZXRhaWxzIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWcge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW5hbWUge1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIHNjYWxlOiAxLjE7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyLWxpa2VzIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgbWFyZ2luOiAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1idG4ge1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBoZWlnaHQ6IDcxdmg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdmlzaW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWwge1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBtYXgtaGVpZ2h0OiA4cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWRpc3BsYXkge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNnJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnB1dCxcXHJcXG4uY29tbWVudC1pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWlucHV0IHtcXHJcXG4gIGhlaWdodDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGFjb21tZW50IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbW1lbnQtYnRuIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udXBwZXItZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6ICMzMDMwMzA7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBtYXJnaW46IDAgMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvd2VyLWZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7Ozs7b0JBSWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsT0FBTztFQUNQLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tZm9udC1jb2xvcjogI2M1YzRjNDtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2U2NGQ1MjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6ICMzMDMwMzA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWltZyB7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVycyB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXNlY3RvciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXNlY3Rvcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ0bixcXHJcXG4ubmV4dC1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA0MCU7XFxyXFxuICBwYWRkaW5nOiAwIDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmV2aW91cy1idG4ge1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnRuIHtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnRuOmhvdmVyLFxcclxcbi5uZXh0LWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mYS1zb2xpZCB7XFxyXFxuICB0ZXh0LXNoYWRvdzpcXHJcXG4gICAgLTFweCAycHggMCAjMDAwLFxcclxcbiAgICAxcHggMXB4IDAgIzAwMCxcXHJcXG4gICAgMXB4IC0xcHggMCAjMDAwLFxcclxcbiAgICAtMXB4IC0xcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtZGV0YWlscyB7XFxyXFxuICBoZWlnaHQ6IDIzcmVtO1xcclxcbiAgd2lkdGg6IDEycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3YtZGV0YWlscyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaW1nIHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1uYW1lIHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0biB7XFxyXFxuICB3aWR0aDogMS41cmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjpob3ZlciB7XFxyXFxuICBzY2FsZTogMS4xO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm51bWJlci1saWtlcyB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIG1hcmdpbjogMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuIHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgaGVpZ2h0OiA3MXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXZpc2lvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWJuYWlsIHtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgbWF4LWhlaWdodDogOHJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29tbWVudHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1kaXNwbGF5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgbWF4LWhlaWdodDogMTZyZW07XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBtYXJnaW46IDAuMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtaW5wdXQsXFxyXFxuLmNvbW1lbnQtaW5wdXQge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dCB7XFxyXFxuICBoZWlnaHQ6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRhY29tbWVudCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb21tZW50LWJ0biB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnVwcGVyLWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiAjMzAzMDMwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwIDJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb3dlci1mb290ZXIge1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgZGlzcGxheVNob3dzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5U2hvd3MuanMnO1xyXG5pbXBvcnQgbW92aWVzQ291bnRlciBmcm9tICcuL21vZHVsZXMvbW92aWVzQ291bnRlci5qcyc7XHJcblxyXG5kaXNwbGF5U2hvd3MoKTtcclxubW92aWVzQ291bnRlcigpO1xyXG5cclxuY29uc3QgbWFpblNlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU2VjdG9yJyk7XHJcbmNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldkJ0bicpO1xyXG5jb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRCdG4nKTtcclxuXHJcbmNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcclxuICBtYWluU2VjdG9yLnNjcm9sbExlZnQgLT0gNzAwO1xyXG59O1xyXG5cclxuY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gIG1haW5TZWN0b3Iuc2Nyb2xsTGVmdCArPSA3MDA7XHJcbn07XHJcblxyXG5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcclxubmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XHJcbiIsImNvbnN0IGFkZExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGFkZExpa2VzVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NsZVZaWUNPUmdiTjNuaVFUakhjL2xpa2VzJztcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2goYWRkTGlrZXNVcmwsIHBhcmFtZXRlcnMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGFkZExpa2VzOyIsImNvbnN0IGNvbW1lbnRzRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50c0Rpc3BsYXknKTtcclxuXHJcbmNvbnN0IGNvbW1lbnRzQ291bnRlciA9IChlbGVtZW50KSA9PiB7XHJcbiAgY29tbWVudHNEaXNwbGF5LmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtlbGVtZW50LmNoaWxkcmVuLmxlbmd0aH0pYDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzQ291bnRlcjsiLCJpbXBvcnQgY29tbWVudHNDb3VudGVyIGZyb20gJy4vY29tbWVudHMtY291bnRlci5qcyc7XHJcblxyXG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ0bicpO1xyXG5jb25zdCBjb21tZW50UG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudFBvcHVwJyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5jb25zdCB0aHVtYm5haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGh1bWJuYWlsJyk7XHJcbmNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92aWVUaXRsZScpO1xyXG5jb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMnKTtcclxuY29uc3QgZm9ybUNvbW1lbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUNvbW1lbnRCdG4nKTtcclxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJbnB1dCcpO1xyXG5jb25zdCBjb21tZW50SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudElucHV0Jyk7XHJcbmNvbnN0IGNvbW1lbnRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50c0xpc3QnKTtcclxuY29uc3QgY29tbWVudHNEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzRGlzcGxheScpO1xyXG5sZXQgYXF1aXJlZERhdGEgPSBbXTtcclxubGV0IGNvbW1lbnRzRGF0YSA9IFtdO1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudHNBcGkgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9DbGVWWllDT1JnYk4zbmlRVGpIYy9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCk7XHJcbiAgY29tbWVudHNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIGNvbW1lbnRzQ29udGVudChjb21tZW50c0RhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVwQ29udGVudCA9IChtb3ZpZURhdGEpID0+IHtcclxuICB0aHVtYm5haWwuc3JjID0gbW92aWVEYXRhLmltYWdlLm9yaWdpbmFsO1xyXG4gIG1vdmllVGl0bGUuaW5uZXJIVE1MID0gbW92aWVEYXRhLm5hbWU7XHJcbiAgZGV0YWlscy5pbm5lckhUTUwgPSBtb3ZpZURhdGEuc3VtbWFyeTtcclxuICBnZXRDb21tZW50c0FwaShhcXVpcmVkRGF0YS5pZCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRBcGkgPSBhc3luYyAobW92aWUpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3NpbmdsZXNlYXJjaC9zaG93cz9xPSR7bW92aWV9YCk7XHJcbiAgYXF1aXJlZERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcG9wdXBDb250ZW50KGFxdWlyZWREYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tZW50c0NvbnRlbnQgPSAoY29tbWVudCkgPT4ge1xyXG4gIGlmIChjb21tZW50KSB7XHJcbiAgICBjb21tZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgY29tbWVudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGNvbW1lbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzLWl0ZW0nKTtcclxuICAgICAgY29tbWVudEl0ZW0uaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSAke2VsZW1lbnQudXNlcm5hbWV9OiAke2VsZW1lbnQuY29tbWVudH1gO1xyXG4gICAgICBjb21tZW50c0xpc3QuYXBwZW5kQ2hpbGQoY29tbWVudEl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICBjb21tZW50c0NvdW50ZXIoY29tbWVudHNMaXN0KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheSA9IChlKSA9PiB7XHJcbiAgY29tbWVudFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgbWFpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIGNvbnN0IG1vdmllTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5pbm5lckhUTUw7XHJcbiAgZ2V0QXBpKG1vdmllTmFtZSk7XHJcbn07XHJcblxyXG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb21tZW50c0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29tbWVudHNEaXNwbGF5LmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIG1haW4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn0pO1xyXG5cclxuY29uc3Qgc2VuZERhdGEgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHBvc3RVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ2xlVlpZQ09SZ2JOM25pUVRqSGMvY29tbWVudHMnO1xyXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9O1xyXG5cclxuICBhd2FpdCBmZXRjaChwb3N0VXJsLCBwYXJhbWV0ZXJzKTtcclxufTtcclxuXHJcbmZvcm1Db21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc2VuZERhdGEoe1xyXG4gICAgaXRlbV9pZDogYXF1aXJlZERhdGEuaWQsXHJcbiAgICB1c2VybmFtZTogbmFtZUlucHV0LnZhbHVlLFxyXG4gICAgY29tbWVudDogY29tbWVudElucHV0LnZhbHVlLFxyXG4gIH0pO1xyXG4gIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIGNvbW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xyXG59KTtcclxuIiwiaW1wb3J0IGFkZExpa2VzIGZyb20gJy4vYWRkTGlrZXMuanMnO1xyXG5pbXBvcnQgcmV0cmlldmVMaWtlcyBmcm9tICcuL3JldHJpZXZlTGlrZXMuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5LXBvcHVwLmpzJztcclxuaW1wb3J0IG1vdmllc0NvdW50ZXIgZnJvbSAnLi9tb3ZpZXNDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IG1haW5TZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zZWN0b3InKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlTaG93cyA9IChzaG93cykgPT4ge1xyXG4gIGlmIChzaG93cykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSArPSAxKSB7XHJcbiAgICAgIGNvbnN0IG1vdmllRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBtb3ZpZURldGFpbHMuY2xhc3NOYW1lID0gJ21vdmllLWRldGFpbHMnO1xyXG4gICAgICBtYWluU2VjdG9yLmFwcGVuZENoaWxkKG1vdmllRGV0YWlscyk7XHJcblxyXG4gICAgICBjb25zdCBtb3ZpZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIG1vdmllSW1hZ2UuY2xhc3NOYW1lID0gJ21vdmllLWltZyc7XHJcbiAgICAgIG1vdmllRGV0YWlscy5hcHBlbmRDaGlsZChtb3ZpZUltYWdlKTtcclxuICAgICAgbW92aWVJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNob3dzW2ldLmltYWdlLm1lZGl1bSk7XHJcbiAgICAgIGNvbnN0IG1vdmllTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgbW92aWVOYW1lLmNsYXNzTGlzdC5hZGQoJ21vdmllLW5hbWUnKTtcclxuICAgICAgbW92aWVEZXRhaWxzLmFwcGVuZENoaWxkKG1vdmllTmFtZSk7XHJcblxyXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc2hvd3NbaV0ubmFtZSk7XHJcbiAgICAgIG1vdmllTmFtZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuXHJcbiAgICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgbGlrZUJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2Fzc2V0cy9oZWFydC5wbmcnKTtcclxuICAgICAgbGlrZUJ0bi5jbGFzc0xpc3QuYWRkKCdsaWtlLWJ0bicpO1xyXG5cclxuICAgICAgY29uc3QgbGlrZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbGlrZXNEaXYuY2xhc3NOYW1lID0gJ2xpa2VzLWRpdic7XHJcbiAgICAgIG1vdmllRGV0YWlscy5hcHBlbmRDaGlsZChsaWtlc0Rpdik7XHJcblxyXG4gICAgICBjb25zdCBudW1iZXJMaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgbnVtYmVyTGlrZXMuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLWxpa2VzJyk7XHJcbiAgICAgIG51bWJlckxpa2VzLmlubmVySFRNTCA9ICcwIExpa2VzJztcclxuXHJcbiAgICAgIHJldHJpZXZlTGlrZXMoKS50aGVuKChsaWtlcykgPT4ge1xyXG4gICAgICAgIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgICAgICAgIGlmIChsaWtlLml0ZW1faWQgPT09IHNob3dzW2ldLmlkKSB7XHJcbiAgICAgICAgICAgIG51bWJlckxpa2VzLmlubmVySFRNTCA9IGAke2xpa2UubGlrZXN9IExpa2VzYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgIGNvbW1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtYnRuJyk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCdG5UeHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29tbWVudCcpO1xyXG4gICAgICBsaWtlc0Rpdi5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcclxuICAgICAgY29tbWVudEJ0bi5hcHBlbmRDaGlsZChjb21tZW50QnRuVHh0KTtcclxuICAgICAgbGlrZXNEaXYuYXBwZW5kQ2hpbGQobGlrZUJ0bik7XHJcbiAgICAgIGxpa2VzRGl2LmFwcGVuZENoaWxkKG51bWJlckxpa2VzKTtcclxuICAgICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZGlzcGxheShlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkTGlrZXMoc2hvd3NbaV0uaWQpO1xyXG4gICAgICAgIHNldFRpbWVvdXQocmV0cmlldmVMaWtlcygpLnRoZW4oKGxpa2VzKSA9PiB7XHJcbiAgICAgICAgICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsaWtlLml0ZW1faWQgPT09IHNob3dzW2ldLmlkKSB7XHJcbiAgICAgICAgICAgICAgbnVtYmVyTGlrZXMuaW5uZXJIVE1MID0gYCR7bGlrZS5saWtlc30gTGlrZXNgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KSwgMTAwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBtb3ZpZXNDb3VudGVyKCk7XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaFNob3dzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGZldGNoVXJsID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3M/cGFnZT0xJztcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZldGNoVXJsKTtcclxuICBjb25zdCBmZXRjaGVkRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBkaXNwbGF5U2hvd3MoZmV0Y2hlZERhdGEpO1xyXG59O1xyXG5cclxuZmV0Y2hTaG93cygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVNob3dzO1xyXG4iLCJjb25zdCBuYXZOdW1iZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm51bWJlcnMnKTtcclxuXHJcbmNvbnN0IG1vdmllc0NvdW50ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3RvcicpO1xyXG4gIGlmIChtYWluLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgY29uc3QgbnVtYmVyID0gbWFpbi5jaGlsZEVsZW1lbnRDb3VudCAtIDI7XHJcbiAgICBuYXZOdW1iZXJzLmlubmVySFRNTCA9IGBNb3ZpZXMgKCR7bnVtYmVyfSlgO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vdmllc0NvdW50ZXI7IiwiY29uc3QgcmV0cmlldmVMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmV0cmlldmVMaWtlc1VybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9DbGVWWllDT1JnYk4zbmlRVGpIYy9saWtlcyc7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmV0cmlldmVMaWtlc1VybCk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5yZXRyaWV2ZUxpa2VzKCk7XG5leHBvcnQgZGVmYXVsdCByZXRyaWV2ZUxpa2VzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==