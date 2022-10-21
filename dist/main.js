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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font-color: #c5c4c4;\r\n  --primary-color: #e64d52;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Nunito\", sans-serif;\r\n  box-sizing: border-box;\r\n  color: var(--font-color);\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #303030;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 1rem;\r\n  padding: 1em;\r\n  margin-bottom: 8rem;\r\n}\r\n\r\n.logo-img {\r\n  height: 2.5rem;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 2rem;\r\n  margin-right: 2rem;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link:visited {\r\n  color: var(--font-color);\r\n}\r\n\r\n.nav-item:hover .nav-link {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.main-sector {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  gap: 1rem;\r\n  overflow-x: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.main-sector::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.previous-btn,\r\n.next-btn {\r\n  position: absolute;\r\n  top: 40%;\r\n  padding: 0 1rem;\r\n  color: var(--font-color);\r\n  font-size: 4rem;\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n}\r\n\r\n.previous-btn {\r\n  left: 0;\r\n}\r\n\r\n.next-btn {\r\n  right: 0;\r\n}\r\n\r\n.previous-btn:hover,\r\n.next-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.fa-solid {\r\n  text-shadow:\r\n    -1px 2px 0 #000,\r\n    1px 1px 0 #000,\r\n    1px -1px 0 #000,\r\n    -1px -1px 0 #000;\r\n}\r\n\r\n.movie-details {\r\n  height: 23rem;\r\n  width: 12rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(80, 80, 80);\r\n  padding: 0.3rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.mov-details {\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.movie-img {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.movie-name {\r\n  flex: 2;\r\n  font-size: 1.2em;\r\n  font-weight: 700;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.like-btn {\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  -webkit-filter: invert(100%);\r\n  filter: invert(100%);\r\n}\r\n\r\n.like-btn:hover {\r\n  scale: 1.1;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.number-likes {\r\n  text-align: right;\r\n  margin: 0 0;\r\n}\r\n\r\n.comments-btn {\r\n  flex: 2;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  color: var(--font-color);\r\n  text-align: left;\r\n  padding: 0;\r\n}\r\n\r\n.comments-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.comment-popup {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  position: relative;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  height: 71vh;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  right: 1rem;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.close-icon {\r\n  width: 2.5rem;\r\n}\r\n\r\n.division {\r\n  display: flex;\r\n  gap: 5rem;\r\n}\r\n\r\n.thumbnail {\r\n  height: 70vh;\r\n  margin: auto;\r\n}\r\n\r\n.comment-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.movie-title {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.details {\r\n  width: 50vw;\r\n  text-align: left;\r\n  max-height: 8rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.details::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-div {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comments-display {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  font-size: 1.1rem;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  max-height: 16rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comments-list::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-item {\r\n  font-size: 1rem;\r\n  margin: 0.2rem 0;\r\n}\r\n\r\n.comments-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.name-input,\r\n.comment-input {\r\n  font-size: 1.1rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  padding: 0.5rem;\r\n  font-family: \"Nunito\", sans-serif;\r\n  background-color: lightgray;\r\n  outline: none;\r\n}\r\n\r\n.comment-input {\r\n  height: 8rem;\r\n}\r\n\r\n.addacomment {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-comment-btn {\r\n  border: 3px solid var(--font-color);\r\n  background-color: transparent;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  padding: 0.5rem;\r\n  color: var(--font-color);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.form-comment-btn:hover {\r\n  color: var(--primary-color);\r\n  border: 3px solid var(--primary-color);\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-self: flex-end;\r\n  flex-direction: column;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n}\r\n\r\n.upper-footer {\r\n  background-color: var(--primary-color);\r\n  color: #303030;\r\n  font-weight: 800;\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  margin: 0 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.lower-footer {\r\n  height: 1rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --font-color: #c5c4c4;\r\n  --primary-color: #e64d52;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Nunito\", sans-serif;\r\n  box-sizing: border-box;\r\n  color: var(--font-color);\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #303030;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 1rem;\r\n  padding: 1em;\r\n  margin-bottom: 8rem;\r\n}\r\n\r\n.logo-img {\r\n  height: 2.5rem;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  list-style: none;\r\n  gap: 2rem;\r\n  margin-right: 2rem;\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link:visited {\r\n  color: var(--font-color);\r\n}\r\n\r\n.nav-item:hover .nav-link {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.main-sector {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin: auto;\r\n  gap: 1rem;\r\n  overflow-x: auto;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.main-sector::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.previous-btn,\r\n.next-btn {\r\n  position: absolute;\r\n  top: 40%;\r\n  padding: 0 1rem;\r\n  color: var(--font-color);\r\n  font-size: 4rem;\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n}\r\n\r\n.previous-btn {\r\n  left: 0;\r\n}\r\n\r\n.next-btn {\r\n  right: 0;\r\n}\r\n\r\n.previous-btn:hover,\r\n.next-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.fa-solid {\r\n  text-shadow:\r\n    -1px 2px 0 #000,\r\n    1px 1px 0 #000,\r\n    1px -1px 0 #000,\r\n    -1px -1px 0 #000;\r\n}\r\n\r\n.movie-details {\r\n  height: 23rem;\r\n  width: 12rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgb(80, 80, 80);\r\n  padding: 0.3rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.mov-details {\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.movie-img {\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.movie-name {\r\n  flex: 2;\r\n  font-size: 1.2em;\r\n  font-weight: 700;\r\n  margin: 0.5rem 0;\r\n}\r\n\r\n.like-btn {\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  -webkit-filter: invert(100%);\r\n  filter: invert(100%);\r\n}\r\n\r\n.like-btn:hover {\r\n  scale: 1.1;\r\n}\r\n\r\n.likes-div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 0.3rem;\r\n}\r\n\r\n.number-likes {\r\n  text-align: right;\r\n  margin: 0 0;\r\n}\r\n\r\n.comments-btn {\r\n  flex: 2;\r\n  background-color: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-size: 1em;\r\n  color: var(--font-color);\r\n  text-align: left;\r\n  padding: 0;\r\n}\r\n\r\n.comments-btn:hover {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.comment-popup {\r\n  display: none;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border: 2px solid black;\r\n  position: relative;\r\n  padding: 1rem;\r\n  margin-bottom: 2rem;\r\n  height: 71vh;\r\n}\r\n\r\n.close-btn {\r\n  position: absolute;\r\n  right: 1rem;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.close-icon {\r\n  width: 2.5rem;\r\n}\r\n\r\n.division {\r\n  display: flex;\r\n  gap: 5rem;\r\n}\r\n\r\n.thumbnail {\r\n  height: 70vh;\r\n  margin: auto;\r\n}\r\n\r\n.comment-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.movie-title {\r\n  font-size: 2.5rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.details {\r\n  width: 50vw;\r\n  text-align: left;\r\n  max-height: 8rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.details::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-div {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n.show-comments {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.comments-display {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.comments-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  font-size: 1.1rem;\r\n  padding: 0;\r\n  margin-top: 0;\r\n  max-height: 16rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.comments-list::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.comments-item {\r\n  font-size: 1rem;\r\n  margin: 0.2rem 0;\r\n}\r\n\r\n.comments-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.name-input,\r\n.comment-input {\r\n  font-size: 1.1rem;\r\n  border: none;\r\n  border-radius: 0.5rem;\r\n  padding: 0.5rem;\r\n  font-family: \"Nunito\", sans-serif;\r\n  background-color: lightgray;\r\n  outline: none;\r\n}\r\n\r\n.comment-input {\r\n  height: 8rem;\r\n}\r\n\r\n.addacomment {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.form-comment-btn {\r\n  border: 3px solid var(--font-color);\r\n  background-color: transparent;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  padding: 0.5rem;\r\n  color: var(--font-color);\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n.form-comment-btn:hover {\r\n  color: var(--primary-color);\r\n  border: 3px solid var(--primary-color);\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-self: flex-end;\r\n  flex-direction: column;\r\n  bottom: 0;\r\n  margin-top: auto;\r\n}\r\n\r\n.upper-footer {\r\n  background-color: var(--primary-color);\r\n  color: #303030;\r\n  font-weight: 800;\r\n  padding: 1rem;\r\n  border-radius: 1rem;\r\n  margin: 0 2rem;\r\n  text-align: center;\r\n}\r\n\r\n.lower-footer {\r\n  height: 1rem;\r\n}\r\n"],"sourceRoot":""}]);
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
      likeBtn.setAttribute('src', '../assets/heart.png');
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
    navNumbers.innerHTML = `Movies (${main.children.length})`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFdBQVcsaUZBQWlGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQWE7QUFDbkI7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBEQUFPO0FBQ2YsT0FBTztBQUNQO0FBQ0EsUUFBUSx3REFBUTtBQUNoQixtQkFBbUIsNkRBQWE7QUFDaEM7QUFDQTtBQUNBLHlDQUF5QyxZQUFZO0FBQ3JEO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEVBQUUsNkRBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvRTVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQkFBcUI7QUFDM0Q7QUFDQTs7QUFFQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ1Q1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvbW9kdWxlcy9hZGRMaWtlcy5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLWNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8veW91LWZsZXgvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LXBvcHVwLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL21vZHVsZXMvZGlzcGxheVNob3dzLmpzIiwid2VicGFjazovL3lvdS1mbGV4Ly4vc3JjL21vZHVsZXMvbW92aWVzQ291bnRlci5qcyIsIndlYnBhY2s6Ly95b3UtZmxleC8uL3NyYy9tb2R1bGVzL3JldHJpZXZlTGlrZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWZvbnQtY29sb3I6ICNjNWM0YzQ7XFxyXFxuICAtLXByaW1hcnktY29sb3I6ICNlNjRkNTI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWcge1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOnZpc2l0ZWQge1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2VjdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tc2VjdG9yOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnRuLFxcclxcbi5uZXh0LWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDQwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ0biB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dC1idG4ge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wcmV2aW91cy1idG46aG92ZXIsXFxyXFxuLm5leHQtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXNvbGlkIHtcXHJcXG4gIHRleHQtc2hhZG93OlxcclxcbiAgICAtMXB4IDJweCAwICMwMDAsXFxyXFxuICAgIDFweCAxcHggMCAjMDAwLFxcclxcbiAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgIC0xcHggLTFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gIGhlaWdodDogMjNyZW07XFxyXFxuICB3aWR0aDogMTJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdi1kZXRhaWxzIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbWcge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLW5hbWUge1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XFxyXFxuICBmaWx0ZXI6IGludmVydCgxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIHNjYWxlOiAxLjE7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyLWxpa2VzIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgbWFyZ2luOiAwIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1idG4ge1xcclxcbiAgZmxleDogMjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBoZWlnaHQ6IDcxdmg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1idG4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpdmlzaW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi50aHVtYm5haWwge1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyB7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBtYXgtaGVpZ2h0OiA4cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb21tZW50cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWRpc3BsYXkge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNnJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1hcmdpbjogMC4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnB1dCxcXHJcXG4uY29tbWVudC1pbnB1dCB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWlucHV0IHtcXHJcXG4gIGhlaWdodDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGFjb21tZW50IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbW1lbnQtYnRuIHtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb21tZW50LWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udXBwZXItZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgY29sb3I6ICMzMDMwMzA7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBtYXJnaW46IDAgMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvd2VyLWZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNl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Q2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsMkJBQTJCO0VBQzNCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tZm9udC1jb2xvcjogI2M1YzRjNDtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2U2NGQ1MjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6ICMzMDMwMzA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWltZyB7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbms6dmlzaXRlZCB7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbTpob3ZlciAubmF2LWxpbmsge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zZWN0b3Ige1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1zZWN0b3I6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmV2aW91cy1idG4sXFxyXFxuLm5leHQtYnRuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNDAlO1xcclxcbiAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnRuIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5uZXh0LWJ0biB7XFxyXFxuICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ0bjpob3ZlcixcXHJcXG4ubmV4dC1idG46aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtc29saWQge1xcclxcbiAgdGV4dC1zaGFkb3c6XFxyXFxuICAgIC0xcHggMnB4IDAgIzAwMCxcXHJcXG4gICAgMXB4IDFweCAwICMwMDAsXFxyXFxuICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgLTFweCAtMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWRldGFpbHMge1xcclxcbiAgaGVpZ2h0OiAyM3JlbTtcXHJcXG4gIHdpZHRoOiAxMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgwLCA4MCwgODApO1xcclxcbiAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92LWRldGFpbHMge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWltZyB7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtbmFtZSB7XFxyXFxuICBmbGV4OiAyO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBtYXJnaW46IDAuNXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46aG92ZXIge1xcclxcbiAgc2NhbGU6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5udW1iZXItbGlrZXMge1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBtYXJnaW46IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJ0biB7XFxyXFxuICBmbGV4OiAyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGhlaWdodDogNzF2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWJ0biB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtaWNvbiB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGl2aXNpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1ibmFpbCB7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIG1heC1oZWlnaHQ6IDhyZW07XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbW1lbnRzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtZGlzcGxheSB7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1heC1oZWlnaHQ6IDE2cmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWl0ZW0ge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjJyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0LFxcclxcbi5jb21tZW50LWlucHV0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW5wdXQge1xcclxcbiAgaGVpZ2h0OiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkYWNvbW1lbnQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29tbWVudC1idG4ge1xcclxcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbW1lbnQtYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi51cHBlci1mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogIzMwMzAzMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIG1hcmdpbjogMCAycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubG93ZXItZm9vdGVyIHtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGRpc3BsYXlTaG93cyBmcm9tICcuL21vZHVsZXMvZGlzcGxheVNob3dzLmpzJztcclxuaW1wb3J0IG1vdmllc0NvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL21vdmllc0NvdW50ZXIuanMnO1xyXG5cclxuZGlzcGxheVNob3dzKCk7XHJcbm1vdmllc0NvdW50ZXIoKTtcclxuXHJcbmNvbnN0IG1haW5TZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNlY3RvcicpO1xyXG5jb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZCdG4nKTtcclxuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnRuJyk7XHJcblxyXG5jb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgbWFpblNlY3Rvci5zY3JvbGxMZWZ0IC09IDcwMDtcclxufTtcclxuXHJcbmNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICBtYWluU2VjdG9yLnNjcm9sbExlZnQgKz0gNzAwO1xyXG59O1xyXG5cclxucHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XHJcbm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xyXG4iLCJjb25zdCBhZGRMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBhZGRMaWtlc1VybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9DbGVWWllDT1JnYk4zbmlRVGpIYy9saWtlcyc7XG4gIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQgfSksXG4gIH07XG4gIGF3YWl0IGZldGNoKGFkZExpa2VzVXJsLCBwYXJhbWV0ZXJzKTtcbn07XG5leHBvcnQgZGVmYXVsdCBhZGRMaWtlczsiLCJjb25zdCBjb21tZW50c0Rpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHNEaXNwbGF5Jyk7XHJcblxyXG5jb25zdCBjb21tZW50c0NvdW50ZXIgPSAoZWxlbWVudCkgPT4ge1xyXG4gIGNvbW1lbnRzRGlzcGxheS5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7ZWxlbWVudC5jaGlsZHJlbi5sZW5ndGh9KWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21tZW50c0NvdW50ZXI7IiwiaW1wb3J0IGNvbW1lbnRzQ291bnRlciBmcm9tICcuL2NvbW1lbnRzLWNvdW50ZXIuanMnO1xyXG5cclxuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VCdG4nKTtcclxuY29uc3QgY29tbWVudFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRQb3B1cCcpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuY29uc3QgdGh1bWJuYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RodW1ibmFpbCcpO1xyXG5jb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllVGl0bGUnKTtcclxuY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzJyk7XHJcbmNvbnN0IGZvcm1Db21tZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1Db21tZW50QnRuJyk7XHJcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXQnKTtcclxuY29uc3QgY29tbWVudElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRJbnB1dCcpO1xyXG5jb25zdCBjb21tZW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudHNMaXN0Jyk7XHJcbmNvbnN0IGNvbW1lbnRzRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50c0Rpc3BsYXknKTtcclxubGV0IGFxdWlyZWREYXRhID0gW107XHJcbmxldCBjb21tZW50c0RhdGEgPSBbXTtcclxuXHJcbmNvbnN0IGdldENvbW1lbnRzQXBpID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvQ2xlVlpZQ09SZ2JOM25pUVRqSGMvY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xyXG4gIGNvbW1lbnRzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICBjb21tZW50c0NvbnRlbnQoY29tbWVudHNEYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3B1cENvbnRlbnQgPSAobW92aWVEYXRhKSA9PiB7XHJcbiAgdGh1bWJuYWlsLnNyYyA9IG1vdmllRGF0YS5pbWFnZS5vcmlnaW5hbDtcclxuICBtb3ZpZVRpdGxlLmlubmVySFRNTCA9IG1vdmllRGF0YS5uYW1lO1xyXG4gIGRldGFpbHMuaW5uZXJIVE1MID0gbW92aWVEYXRhLnN1bW1hcnk7XHJcbiAgZ2V0Q29tbWVudHNBcGkoYXF1aXJlZERhdGEuaWQpO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0QXBpID0gYXN5bmMgKG1vdmllKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaW5nbGVzZWFyY2gvc2hvd3M/cT0ke21vdmllfWApO1xyXG4gIGFxdWlyZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHBvcHVwQ29udGVudChhcXVpcmVkRGF0YSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29tbWVudHNDb250ZW50ID0gKGNvbW1lbnQpID0+IHtcclxuICBpZiAoY29tbWVudCkge1xyXG4gICAgY29tbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBjb21tZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdjb21tZW50cy1pdGVtJyk7XHJcbiAgICAgIGNvbW1lbnRJdGVtLmlubmVySFRNTCA9IGAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9YDtcclxuICAgICAgY29tbWVudHNMaXN0LmFwcGVuZENoaWxkKGNvbW1lbnRJdGVtKTtcclxuICAgIH0pO1xyXG4gICAgY29tbWVudHNDb3VudGVyKGNvbW1lbnRzTGlzdCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSAoZSkgPT4ge1xyXG4gIGNvbW1lbnRQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIG1haW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBjb25zdCBtb3ZpZU5hbWUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uaW5uZXJIVE1MO1xyXG4gIGdldEFwaShtb3ZpZU5hbWUpO1xyXG59O1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29tbWVudHNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbW1lbnRzRGlzcGxheS5pbm5lckhUTUwgPSAnJztcclxuICBjb21tZW50UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBtYWluLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KTtcclxuXHJcbmNvbnN0IHNlbmREYXRhID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICBjb25zdCBwb3N0VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NsZVZaWUNPUmdiTjNuaVFUakhjL2NvbW1lbnRzJztcclxuICBjb25zdCBwYXJhbWV0ZXJzID0ge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgfTtcclxuXHJcbiAgYXdhaXQgZmV0Y2gocG9zdFVybCwgcGFyYW1ldGVycyk7XHJcbn07XHJcblxyXG5mb3JtQ29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHNlbmREYXRhKHtcclxuICAgIGl0ZW1faWQ6IGFxdWlyZWREYXRhLmlkLFxyXG4gICAgdXNlcm5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcclxuICAgIGNvbW1lbnQ6IGNvbW1lbnRJbnB1dC52YWx1ZSxcclxuICB9KTtcclxuICBuYW1lSW5wdXQudmFsdWUgPSAnJztcclxuICBjb21tZW50SW5wdXQudmFsdWUgPSAnJztcclxufSk7XHJcbiIsImltcG9ydCBhZGRMaWtlcyBmcm9tICcuL2FkZExpa2VzLmpzJztcclxuaW1wb3J0IHJldHJpZXZlTGlrZXMgZnJvbSAnLi9yZXRyaWV2ZUxpa2VzLmpzJztcclxuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheS1wb3B1cC5qcyc7XHJcbmltcG9ydCBtb3ZpZXNDb3VudGVyIGZyb20gJy4vbW92aWVzQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBtYWluU2VjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdG9yJyk7XHJcblxyXG5jb25zdCBkaXNwbGF5U2hvd3MgPSAoc2hvd3MpID0+IHtcclxuICBpZiAoc2hvd3MpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBtb3ZpZURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbW92aWVEZXRhaWxzLmNsYXNzTmFtZSA9ICdtb3ZpZS1kZXRhaWxzJztcclxuICAgICAgbWFpblNlY3Rvci5hcHBlbmRDaGlsZChtb3ZpZURldGFpbHMpO1xyXG5cclxuICAgICAgY29uc3QgbW92aWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBtb3ZpZUltYWdlLmNsYXNzTmFtZSA9ICdtb3ZpZS1pbWcnO1xyXG4gICAgICBtb3ZpZURldGFpbHMuYXBwZW5kQ2hpbGQobW92aWVJbWFnZSk7XHJcbiAgICAgIG1vdmllSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBzaG93c1tpXS5pbWFnZS5tZWRpdW0pO1xyXG4gICAgICBjb25zdCBtb3ZpZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgIG1vdmllTmFtZS5jbGFzc0xpc3QuYWRkKCdtb3ZpZS1uYW1lJyk7XHJcbiAgICAgIG1vdmllRGV0YWlscy5hcHBlbmRDaGlsZChtb3ZpZU5hbWUpO1xyXG5cclxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHNob3dzW2ldLm5hbWUpO1xyXG4gICAgICBtb3ZpZU5hbWUuYXBwZW5kQ2hpbGQobmFtZSk7XHJcblxyXG4gICAgICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGxpa2VCdG4uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vYXNzZXRzL2hlYXJ0LnBuZycpO1xyXG4gICAgICBsaWtlQnRuLmNsYXNzTGlzdC5hZGQoJ2xpa2UtYnRuJyk7XHJcblxyXG4gICAgICBjb25zdCBsaWtlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBsaWtlc0Rpdi5jbGFzc05hbWUgPSAnbGlrZXMtZGl2JztcclxuICAgICAgbW92aWVEZXRhaWxzLmFwcGVuZENoaWxkKGxpa2VzRGl2KTtcclxuXHJcbiAgICAgIGNvbnN0IG51bWJlckxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICBudW1iZXJMaWtlcy5jbGFzc0xpc3QuYWRkKCdudW1iZXItbGlrZXMnKTtcclxuICAgICAgbnVtYmVyTGlrZXMuaW5uZXJIVE1MID0gJzAgTGlrZXMnO1xyXG5cclxuICAgICAgcmV0cmlldmVMaWtlcygpLnRoZW4oKGxpa2VzKSA9PiB7XHJcbiAgICAgICAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gc2hvd3NbaV0uaWQpIHtcclxuICAgICAgICAgICAgbnVtYmVyTGlrZXMuaW5uZXJIVE1MID0gYCR7bGlrZS5saWtlc30gTGlrZXNgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgY29tbWVudEJ0bi5jbGFzc0xpc3QuYWRkKCdjb21tZW50cy1idG4nKTtcclxuICAgICAgY29uc3QgY29tbWVudEJ0blR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdDb21tZW50Jyk7XHJcbiAgICAgIGxpa2VzRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRCdG4pO1xyXG4gICAgICBjb21tZW50QnRuLmFwcGVuZENoaWxkKGNvbW1lbnRCdG5UeHQpO1xyXG4gICAgICBsaWtlc0Rpdi5hcHBlbmRDaGlsZChsaWtlQnRuKTtcclxuICAgICAgbGlrZXNEaXYuYXBwZW5kQ2hpbGQobnVtYmVyTGlrZXMpO1xyXG4gICAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBkaXNwbGF5KGUpO1xyXG4gICAgICB9KTtcclxuICAgICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBhZGRMaWtlcyhzaG93c1tpXS5pZCk7XHJcbiAgICAgICAgc2V0VGltZW91dChyZXRyaWV2ZUxpa2VzKCkudGhlbigobGlrZXMpID0+IHtcclxuICAgICAgICAgIGxpa2VzLmZvckVhY2goKGxpa2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxpa2UuaXRlbV9pZCA9PT0gc2hvd3NbaV0uaWQpIHtcclxuICAgICAgICAgICAgICBudW1iZXJMaWtlcy5pbm5lckhUTUwgPSBgJHtsaWtlLmxpa2VzfSBMaWtlc2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLCAxMDAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vdmllc0NvdW50ZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IGZldGNoU2hvd3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZmV0Y2hVcmwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cz9wYWdlPTEnO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hVcmwpO1xyXG4gIGNvbnN0IGZldGNoZWREYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGRpc3BsYXlTaG93cyhmZXRjaGVkRGF0YSk7XHJcbn07XHJcblxyXG5mZXRjaFNob3dzKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5U2hvd3M7XHJcbiIsImNvbnN0IG5hdk51bWJlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVycycpO1xuXG5jb25zdCBtb3ZpZXNDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdG9yJyk7XG4gIGlmIChtYWluLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIG5hdk51bWJlcnMuaW5uZXJIVE1MID0gYE1vdmllcyAoJHttYWluLmNoaWxkcmVuLmxlbmd0aH0pYDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW92aWVzQ291bnRlcjsiLCJjb25zdCByZXRyaWV2ZUxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXRyaWV2ZUxpa2VzVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0NsZVZaWUNPUmdiTjNuaVFUakhjL2xpa2VzJztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXRyaWV2ZUxpa2VzVXJsKTtcblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcbnJldHJpZXZlTGlrZXMoKTtcbmV4cG9ydCBkZWZhdWx0IHJldHJpZXZlTGlrZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9