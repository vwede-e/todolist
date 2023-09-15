/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `header {
    background-color: #8449BA;
    border: 1px solid #fff;
}

.nav-logo-container {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: space-between;
}

nav {
    flex-grow: 1;
}

.hamburger-container {
    display: none;
}

#current-section {
    background-color: darkblue;
}

.logo-container {
    flex-basis: 130px;
    flex-shrink: 0;
    color: white;
    font-weight: bolder;
    font-size: 1.2rem;
}


.menu-list {
    list-style-type: none;
    display: flex;
    gap: 10px;
    justify-content: end;
}

.menu-list li {
    color: #fff;
    font-weight: 600;
    padding: 10px;
    flex-basis: 100px;
    text-align: center;    
}

.mobile-menu-container {
    background: #8449BA;
    display: block;
}

.mobile-menu-container li {
    border: 1px solid white;
}

.mobile-menu-container li:last-of-type {
    border-bottom: 2px solid white
}

.menu-list li:hover {
    background-color: #351E5F;
}

main {
    flex-grow: 1;
    background: beige;
}

main > .search-section {
    display: flex;
    padding: 20px 30px;
    justify-content: center;
    gap: 20px;
    align-items: center;
}


.search {
    font-size: 0.8rem;
    padding: 5px;
    font-weight: 600;
    height: 35px;
    width: clamp(150px, 25vw, 250px);
}

.search:focus {
    border: none;
}

.add-container {
    display: flex;
    gap: 7px;
    background-color: #351E5F;
    font-size: 0.9rem;
    color: #fff;
    padding: 5px 8px;
    font-weight: 600;
    align-items: center;
    cursor: pointer;
    width: clamp(150px, 25vw, 250px);
    justify-content: center;
}

.add-container > span {
    font-weight: bold;
    font-size: 1.3rem;
    color: blueviolet;
}

.form-section, .edit-form-section, .task-form-section, .task-modal-section, .edit-task-form-section {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgb(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}

.form-container,.edit-form-container, .task-form-container, .task-modal-container, .edit-task-form-container {
    width: max(30%, 300px);
    background-color: #8449BA;
    padding: 30px;
}

form input, select {
    font-size: 1rem;
    border-radius: 3px;
    width: 100%;
    padding: 5px;
    margin-bottom: 8px;
}

form > div {
    text-align: center;
    font-size: 1.3rem;
}

form {
    color: #fff;
    font-weight: 600;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #E6E6E6;
}

label{
    display: block;
    margin-top: 5px;
    margin-bottom: 2px;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 5px;
}

.button-container  > * {
    width: 70px;
    height: 30px;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #000;
}

.close-modal, .close-task-form-modal, .close-edit-project-modal, .close-task-modal, .close-edit-task-form-modal {
    cursor: pointer;
}

.form-title {
    margin-bottom: 15px;
}

.close-form-modal-container {
    display: flex;
    justify-content: end;
}

.project-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    padding: 20px 30px;
}

.project-container {
    display: flex;
    box-shadow: 1px 1px 5px black;
    background-color: #fff;
    border-radius: 6px;
    padding: 35px 10px;
    gap: 20px;
    align-items: center;
}

.project-functions {
    flex-basis: 30px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: 2px solid rgb(0,0,0,0.5);
}

.project-details {
    display: flex;
    flex-direction: column;
    gap: 25px;
    flex-grow: 1;
    text-align: center;
}

.project-details > .title {
    font-size: 1.8rem;
    font-weight: bold;
}

.project-details > .id {
    font-size: 1.5rem;
    color: red;
}

.project-details > div:last-of-type {
    font-size: 1.5rem;
    font-weight: bold;
}


.task-title {
    text-align: center;
    font-weight: bolder;
    font-size: 1.5rem;
    margin: 20px 0;
}

.task-modal-container {
    background-color: wheat;
}

.tasks {
    text-align: center;
    height: 350px;
    overflow: auto;
}

.tasks img {
    height: 19px;
    width: 19px;
}

.task-container {
    display: grid;
    grid-template-columns: 1fr 1fr 30px 30px;
    column-gap: 10px;
    margin-top: 10px;
    text-align: start;
    align-items: center;
}

@media only screen and (max-width: 500px) {
    nav {
        display: none;
    }

    .hamburger-container {
        display: block;
    }

    .nav-logo-container {
        justify-content: space-between;
    }

}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["header {\n    background-color: #8449BA;\n    border: 1px solid #fff;\n}\n\n.nav-logo-container {\n    padding: 20px 30px;\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    justify-content: space-between;\n}\n\nnav {\n    flex-grow: 1;\n}\n\n.hamburger-container {\n    display: none;\n}\n\n#current-section {\n    background-color: darkblue;\n}\n\n.logo-container {\n    flex-basis: 130px;\n    flex-shrink: 0;\n    color: white;\n    font-weight: bolder;\n    font-size: 1.2rem;\n}\n\n\n.menu-list {\n    list-style-type: none;\n    display: flex;\n    gap: 10px;\n    justify-content: end;\n}\n\n.menu-list li {\n    color: #fff;\n    font-weight: 600;\n    padding: 10px;\n    flex-basis: 100px;\n    text-align: center;    \n}\n\n.mobile-menu-container {\n    background: #8449BA;\n    display: block;\n}\n\n.mobile-menu-container li {\n    border: 1px solid white;\n}\n\n.mobile-menu-container li:last-of-type {\n    border-bottom: 2px solid white\n}\n\n.menu-list li:hover {\n    background-color: #351E5F;\n}\n\nmain {\n    flex-grow: 1;\n    background: beige;\n}\n\nmain > .search-section {\n    display: flex;\n    padding: 20px 30px;\n    justify-content: center;\n    gap: 20px;\n    align-items: center;\n}\n\n\n.search {\n    font-size: 0.8rem;\n    padding: 5px;\n    font-weight: 600;\n    height: 35px;\n    width: clamp(150px, 25vw, 250px);\n}\n\n.search:focus {\n    border: none;\n}\n\n.add-container {\n    display: flex;\n    gap: 7px;\n    background-color: #351E5F;\n    font-size: 0.9rem;\n    color: #fff;\n    padding: 5px 8px;\n    font-weight: 600;\n    align-items: center;\n    cursor: pointer;\n    width: clamp(150px, 25vw, 250px);\n    justify-content: center;\n}\n\n.add-container > span {\n    font-weight: bold;\n    font-size: 1.3rem;\n    color: blueviolet;\n}\n\n.form-section, .edit-form-section, .task-form-section, .task-modal-section, .edit-task-form-section {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0,0,0,0.9);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    display: none;\n}\n\n.form-container,.edit-form-container, .task-form-container, .task-modal-container, .edit-task-form-container {\n    width: max(30%, 300px);\n    background-color: #8449BA;\n    padding: 30px;\n}\n\nform input, select {\n    font-size: 1rem;\n    border-radius: 3px;\n    width: 100%;\n    padding: 5px;\n    margin-bottom: 8px;\n}\n\nform > div {\n    text-align: center;\n    font-size: 1.3rem;\n}\n\nform {\n    color: #fff;\n    font-weight: 600;\n}\n\nfooter {\n    text-align: center;\n    padding: 20px;\n    background-color: #E6E6E6;\n}\n\nlabel{\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 2px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-top: 5px;\n}\n\n.button-container  > * {\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    border-radius: 4px;\n    box-shadow: 0px 0px 10px #000;\n}\n\n.close-modal, .close-task-form-modal, .close-edit-project-modal, .close-task-modal, .close-edit-task-form-modal {\n    cursor: pointer;\n}\n\n.form-title {\n    margin-bottom: 15px;\n}\n\n.close-form-modal-container {\n    display: flex;\n    justify-content: end;\n}\n\n.project-section {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 30px;\n    padding: 20px 30px;\n}\n\n.project-container {\n    display: flex;\n    box-shadow: 1px 1px 5px black;\n    background-color: #fff;\n    border-radius: 6px;\n    padding: 35px 10px;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-functions {\n    flex-basis: 30px;\n    flex-shrink: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-right: 2px solid rgb(0,0,0,0.5);\n}\n\n.project-details {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    flex-grow: 1;\n    text-align: center;\n}\n\n.project-details > .title {\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\n.project-details > .id {\n    font-size: 1.5rem;\n    color: red;\n}\n\n.project-details > div:last-of-type {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n\n.task-title {\n    text-align: center;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    margin: 20px 0;\n}\n\n.task-modal-container {\n    background-color: wheat;\n}\n\n.tasks {\n    text-align: center;\n    height: 350px;\n    overflow: auto;\n}\n\n.tasks img {\n    height: 19px;\n    width: 19px;\n}\n\n.task-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 30px 30px;\n    column-gap: 10px;\n    margin-top: 10px;\n    text-align: start;\n    align-items: center;\n}\n\n@media only screen and (max-width: 500px) {\n    nav {\n        display: none;\n    }\n\n    .hamburger-container {\n        display: block;\n    }\n\n    .nav-logo-container {\n        justify-content: space-between;\n    }\n\n}\n"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/components/createTaskForm.js":
/*!******************************************!*\
  !*** ./src/components/createTaskForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function createTaskForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("task-form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("task-form-container");

    const form = document.createElement("form");
    form.classList.add("create-task-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-task-form-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Create Task";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Add Task Name*";
    taskNameLabel.setAttribute("for", "taskName");
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "ID");
    taskNameInput.setAttribute("type", "text");

    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);


    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Select Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput);


    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.setAttribute("type", "button");

    const resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Reset";

    buttonContainer.appendChild(createButton);
    buttonContainer.appendChild(resetButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskForm);

/***/ }),

/***/ "./src/components/editProjectForm.js":
/*!*******************************************!*\
  !*** ./src/components/editProjectForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function editProjectForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("edit-form-section");
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("edit-form-container");

    const form = document.createElement("form");
    form.classList.add("edit-project-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-edit-project-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Edit To-Do";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const idLabel = document.createElement("label");
    idLabel.textContent = "Add Project ID*";
    idLabel.setAttribute("for", "editID");
    const idInput = document.createElement("input");
    idInput.setAttribute("id", "edit-ID");
    idInput.setAttribute("type", "number");
    idInput.setAttribute("min", 0);

    form.appendChild(idLabel);
    form.appendChild(idInput);

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Add Project Title*";
    titleLabel.setAttribute("for", "editTitle");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "edit-Title");
    titleInput.setAttribute("type", "text");

    form.appendChild(titleLabel);
    form.appendChild(titleInput)


    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    descriptionLabel.textContent = "Add Project Description";
    descriptionLabel.setAttribute("for", "editDescription");
    descriptionInput.setAttribute("id", "edit-Description");
    descriptionInput.setAttribute("type", "text");

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    
    /*
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Pick Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput); */


    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Select Category";
    selectLabel.setAttribute("for", "editCategory");
    const selectInput = document.createElement("select");
    selectInput.setAttribute("id", "edit-Category");
    
    const workOption = document.createElement("option");
    workOption.value = "Work";
    workOption.textContent = "Work";

    const gymOption = document.createElement("option");
    gymOption.value = "Gym";
    gymOption.textContent = "Gym";

    const schoolOption = document.createElement("option");
    schoolOption.value = "School";
    schoolOption.textContent = "School";

    const choreOption = document.createElement("option");
    choreOption.value = "Chores";
    choreOption.textContent = "Chores";

    selectInput.appendChild(workOption);
    selectInput.appendChild(gymOption);
    selectInput.appendChild(schoolOption);
    selectInput.appendChild(choreOption);

    form.appendChild(selectLabel);
    form.appendChild(selectInput);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("type", "button");


    buttonContainer.appendChild(editButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editProjectForm);

/***/ }),

/***/ "./src/components/editTaskForm.js":
/*!****************************************!*\
  !*** ./src/components/editTaskForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function EditTaskForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("edit-task-form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("edit-task-form-container");

    const form = document.createElement("form");
    form.classList.add("edit-task-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-edit-task-form-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Edit Task";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Add Task Name*";
    taskNameLabel.setAttribute("for", "taskName");
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "ID");
    taskNameInput.setAttribute("type", "text");

    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);


    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Select Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput);


    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("type", "button");


    buttonContainer.appendChild(editButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditTaskForm);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function Footer () {
    const footer = document.createElement("footer");
    footer.textContent = "TO-DO-LIST BY VWEDE ESIN"
    return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function Form() {

    const formSection = document.createElement("section");
    formSection.classList.add("form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const form = document.createElement("form");
    form.classList.add("create-project-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Create To-Do";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const idLabel = document.createElement("label");
    idLabel.textContent = "Add Project ID*";
    idLabel.setAttribute("for", "ID");
    const idInput = document.createElement("input");
    idInput.setAttribute("id", "ID");
    idInput.setAttribute("type", "number");
    idInput.setAttribute("min", 0);
    idInput.setAttribute("placeholder", "25");

    form.appendChild(idLabel);
    form.appendChild(idInput);

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Add Project Title*";
    titleLabel.setAttribute("for", "Title");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "Title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Create a to-do list")

    form.appendChild(titleLabel);
    form.appendChild(titleInput)


    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    descriptionLabel.textContent = "Add Project Description";
    descriptionLabel.setAttribute("for", "Description");
    descriptionInput.setAttribute("id", "Description");
    descriptionInput.setAttribute("type", "text");

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    
    /*
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Pick Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput); */


    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Select Category";
    selectLabel.setAttribute("for", "Category");
    const selectInput = document.createElement("select");
    selectInput.setAttribute("id", "Category");
    
    const workOption = document.createElement("option");
    workOption.value = "Work";
    workOption.textContent = "Work";

    const gymOption = document.createElement("option");
    gymOption.value = "Gym";
    gymOption.textContent = "Gym";

    const schoolOption = document.createElement("option");
    schoolOption.value = "School";
    schoolOption.textContent = "School";

    const choreOption = document.createElement("option");
    choreOption.value = "Chores";
    choreOption.textContent = "Chores";

    selectInput.appendChild(workOption);
    selectInput.appendChild(gymOption);
    selectInput.appendChild(schoolOption);
    selectInput.appendChild(choreOption);

    form.appendChild(selectLabel);
    form.appendChild(selectInput);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.setAttribute("type", "button");

    const resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Reset";

    buttonContainer.appendChild(createButton);
    buttonContainer.appendChild(resetButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");



function Header() {
    //header container
    const header = document.createElement("header");

    const navLogoContainer = document.createElement("div");
    navLogoContainer.classList.add("nav-logo-container");

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    logoContainer.textContent = "To-Do List";
    /*const logoImage = new Image();
    logoImage.src = "../images/";
    logoImage.classList.add("logo-image");
    logoContainer.appendChild(logoImage); */

    navLogoContainer.appendChild(logoContainer);

    const nav = document.createElement("nav");
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    const all = document.createElement("li");
    all.textContent = "ALL";

    const work = document.createElement("li");
    work.textContent = "WORK";

    const gym = document.createElement("li");
    gym.textContent = "GYM";

    const school = document.createElement("li");
    school.textContent = "SCHOOL";

    const chores = document.createElement("li");
    chores.textContent = "CHORES"

    menuList.appendChild(all);
    menuList.appendChild(work);
    menuList.appendChild(gym);
    menuList.appendChild(school);
    menuList.appendChild(chores);

    nav.appendChild(menuList);

    const mobiLeMenuHamburgerContainer = document.createElement("div");
    mobiLeMenuHamburgerContainer.classList.add("hamburger-container");
    const mobileMenuHamburger = new Image();
    mobileMenuHamburger.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__;
    mobileMenuHamburger.classList.add("mobile-menu-hamburger")

    mobiLeMenuHamburgerContainer.appendChild(mobileMenuHamburger);

    navLogoContainer.appendChild(nav);

    navLogoContainer.appendChild(mobiLeMenuHamburgerContainer);
    header.appendChild(navLogoContainer);


    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function Main() {
    const main = document.createElement("main");

    const searchSection = document.createElement("div");
    searchSection.classList.add("search-section");

    //const searchContainer = document.createElement("div");
    const addNewProjectContainer = document.createElement("div");

   // const search = document.createElement("input");
    //search.setAttribute("type", "search");
    //search.setAttribute("placeholder", "Search by title");
   // search.classList.add("search");
   // searchContainer.appendChild(search);

    const addContainer = document.createElement("div");
    addContainer.innerHTML = "<span>&plus;</span>Add New Project";
    addNewProjectContainer.appendChild(addContainer);
    addNewProjectContainer.classList.add("new-project-container")
    addContainer.classList.add("add-container");

   // searchSection.appendChild(searchContainer);
    searchSection.appendChild(addNewProjectContainer);

    main.appendChild(searchSection);

    const projectSection = document.createElement("section");
    projectSection.classList.add("project-section");

    main.appendChild(projectSection);
   
    return main;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ }),

/***/ "./src/components/mobileMenuContainer.js":
/*!***********************************************!*\
  !*** ./src/components/mobileMenuContainer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function MobileMenu() {

    const mobileMenuSection = document.createElement("section");
    mobileMenuSection.classList.add("mobile-menu-section");


    const mobileMenuContainer = document.createElement("ul");
    mobileMenuContainer.classList.add("menu-list");
    mobileMenuContainer.classList.add("mobile-menu-container");

    const all = document.createElement("li");
    all.textContent = "ALL";

    const work = document.createElement("li");
    work.textContent = "WORK";

    const gym = document.createElement("li");
    gym.textContent = "GYM";

    const school = document.createElement("li");
    school.textContent = "SCHOOL";

    const chores = document.createElement("li");
    chores.textContent = "CHORES";

    mobileMenuContainer.appendChild(all);
    mobileMenuContainer.appendChild(work);
    mobileMenuContainer.appendChild(gym);
    mobileMenuContainer.appendChild(school);
    mobileMenuContainer.appendChild(chores);

    mobileMenuSection.appendChild(mobileMenuContainer);

    return mobileMenuSection
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/components/taskModal.js":
/*!*************************************!*\
  !*** ./src/components/taskModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function createTaskModal() {

    const taskModalSection = document.createElement("section");
    taskModalSection.classList.add("task-modal-section")
    
    const taskModalContainer = document.createElement("div");
    taskModalContainer.classList.add("task-modal-container");

    const taskModalContent = document.createElement("div");
    taskModalContent.classList.add("task-modal-content");

    const closeTaskModalContainer = document.createElement("div");
    const closeTaskModal = document.createElement("div");
    closeTaskModal.innerHTML = "&times;"
    closeTaskModal.classList.add("close-task-modal");
    closeTaskModalContainer.appendChild(closeTaskModal);
    closeTaskModalContainer.classList.add("close-form-modal-container");

    taskModalContent.appendChild(closeTaskModalContainer);

    
    const taskTitle = document.createElement("div");
    taskTitle.textContent = "Tasks";
    taskTitle.classList.add("task-title");

    taskModalContent.appendChild(taskTitle);


    const tasks = document.createElement("div");
    tasks.classList.add("tasks");

    taskModalContent.appendChild(tasks);
    
    taskModalContainer.appendChild(taskModalContent);
    taskModalSection.appendChild(taskModalContainer);

    return taskModalSection
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskModal);

/***/ }),

/***/ "./src/domUpdate.js":
/*!**************************!*\
  !*** ./src/domUpdate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_view_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/view.svg */ "./src/images/view.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");






const dom = (() => {

    const createProjectUI = (projectObject) => {
        
        const projectSection = document.querySelector(".project-section");

        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");

        const projectFunctions = document.createElement("div");
        projectFunctions.classList.add("project-functions");

        const projectEdit = document.createElement("div");
        const editImage = new Image()
        editImage.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__;
        editImage.setAttribute("id", "edit")
        projectEdit.appendChild(editImage);

        const projectView = document.createElement("div");
        const viewImage = new Image()
        viewImage.src = _images_view_svg__WEBPACK_IMPORTED_MODULE_3__;
        projectView.appendChild(viewImage);
        viewImage.setAttribute("id", "view")

        const projectAdd = document.createElement("div");
        const addImage = new Image();
        addImage.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_1__;
        projectAdd.appendChild(addImage);
        addImage.setAttribute("id","add");

        const projectDelete = document.createElement("div");
        const deleteImage = new Image();
        deleteImage.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        projectDelete.appendChild(deleteImage);
        deleteImage.setAttribute("id", "delete")
        
        projectFunctions.appendChild(projectEdit);
        projectFunctions.appendChild(projectView);
        projectFunctions.appendChild(projectAdd);
        projectFunctions.appendChild(projectDelete);

        const projectDetails = document.createElement("div");
        projectDetails.classList.add("project-details");

        const projectId = document.createElement("div");
        const projectTitle = document.createElement("div");
        const projectDescription = document.createElement("div");
        const projectCategory = document.createElement("div");

        projectId.textContent = projectObject.id;
        projectTitle.textContent = projectObject.title;
        projectDescription.textContent = projectObject.description;
        projectCategory.textContent = projectObject.category;

        projectTitle.classList.add("title");
        projectId.classList.add("id");

        projectDetails.appendChild(projectId);
        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectCategory);

        projectContainer.appendChild(projectFunctions);
        projectContainer.appendChild(projectDetails);
        projectContainer.setAttribute("data-value", projectId.textContent);

        projectSection.appendChild(projectContainer);
    }

    const deleteProjectUI = (projectId) => {
        const project = document.querySelector(`div[data-value="${projectId}"]`);
        const projectSection = document.querySelector(".project-section");
        projectSection.removeChild(project);
    }

    const editProjectUI = (projectId, title, description, category) => {
        const project = document.querySelector(`div[data-value="${projectId}"]`);
        const projectDetailUI = project.lastElementChild;
        const projectDetailUIChildren = projectDetailUI.children;
        projectDetailUIChildren[1].textContent = title;
        projectDetailUIChildren[2].textContent = description;
        projectDetailUIChildren[3].textContent = category;        
    }

    const renderTask = (taskObject) => {
        const tasks = document.querySelector(".tasks");

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        
        const taskTitle = document.createElement("div");
        taskTitle.textContent = taskObject.taskName;

        const taskDueDate = document.createElement("div");
        taskDueDate.textContent = taskObject.taskDueDate;

        const taskEdit = new Image();
        taskEdit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__;
        taskEdit.classList.add("edit-task");

        const taskDelete = new Image();
        taskDelete.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        taskDelete.classList.add("delete-task");

        taskContainer.appendChild(taskTitle);
        taskContainer.appendChild(taskDueDate);
        taskContainer.appendChild(taskEdit);
        taskContainer.appendChild(taskDelete);
        taskContainer.setAttribute("data-value", `${taskObject.getUniqueId()}`)
        taskContainer.setAttribute("data-parent", `${taskObject.taskParent}`)

        tasks.appendChild(taskContainer);
    }

    const renderEmptyTasks = () => {
        const tasks = document.querySelector(".tasks");
        tasks.textContent = "Nothing to see here...";
    }

    const deleteTask = (taskUniqueId) => {
        const tasks = document.querySelector(".tasks");
        const taskToDelete = tasks.querySelector(`div[data-value = "${taskUniqueId}"]`);
        tasks.removeChild(taskToDelete);
    }

    const editTask = (oldUniqueId, newUniqueId, taskName, dueDate) => {
        const tasks = document.querySelector(".tasks");
        const taskToEdit = tasks.querySelector(`div[data-value = "${oldUniqueId}"]`);

        console.log(oldUniqueId);
        console.log(newUniqueId);

        taskToEdit.querySelector("div:first-of-type").textContent = taskName;
        taskToEdit.querySelector("div:last-of-type").textContent = dueDate;
        taskToEdit.setAttribute("data-value", `${newUniqueId}`);
    }

    return {createProjectUI, deleteProjectUI, editProjectUI, renderTask, renderEmptyTasks, deleteTask, editTask}
}) ()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/manager.js":
/*!************************!*\
  !*** ./src/manager.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStore */ "./src/projectStore.js");
/* harmony import */ var _projectObjectCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectObjectCreator */ "./src/projectObjectCreator.js");
/* harmony import */ var _domUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdate */ "./src/domUpdate.js");




const manager = (() => {

    let currentSection = "ALL";

    const handleNewProjectCreation = (id, title, description, category) => {
        const obj = (0,_projectObjectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(id, title, description, category);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].addNewProject(obj);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI(obj);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();

        // udpate DOM ADDITION
    }

    const handleProjectRemoval = (project, projectId) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProjectUI(projectId);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
        // update DOM REMOVAL
    }

    const handleProjectEdit = (project, projectId, title, description, category) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(project, title, description, category);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].editProjectUI(projectId, title, description, category);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
        // udpdate DOM EDITING
    }

    /*const handleGetAllProjects = () => {
       const projects = projectStorage.getProjects();
       return projects;
       // dom stuff for display projects 
    } */

    const handleGetProjectsByCategories = (category) => {
        if (category == "all") {
            console.log(category)
            const projects = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()
            console.log(projects)
            if (projects.length > 0) {
                projects.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI)
            }
        }

        else {
            const projects = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectByCategory(category);
            console.log(projects);
            if (projects.length > 0) {
                projects.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI)
        }
        // dom stuff for projets display by category
    }
}

    const handleAddTask = (projectToEdit, taskName, taskDueDate) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(projectToEdit, taskName, taskDueDate);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
        // dom stuff for project task
    }

    const getCurrentSection = () => currentSection;

    const setCurrentSection = (newCurrentSection) => {
        currentSection = newCurrentSection
    }

    const handleFindProject = (id) => _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].findProjectById(id);

    const handleFindTask = (project, taskId) => _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].findTaskById(project, taskId);

    const handleRemoveTask = (project, task) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(project, task);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(task.getUniqueId());
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage()
    }

    const handleGetTasks = (project) => {
        const tasks = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(project);
        if (tasks && tasks.length > 0) {
            tasks.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].renderTask);
        }
        else {
            _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].renderEmptyTasks();
        }
        console.log(tasks);
    }

    const handleEditTask = (project, task, taskName, dueDate) => {
        const oldUniqueId = task.getUniqueId();
        const newUniqueId = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(project, task, taskName, dueDate);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].editTask(oldUniqueId, newUniqueId, taskName, dueDate);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
    }

    const handleWriteToLocalStorage = () => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();

    }

    const handleReadFromLocalStorage =() => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].readFromLocalStorage();
        const projects = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
        if (projects.length > 0) {
            projects.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI)
        }
    }

    return {
        handleNewProjectCreation,
        handleProjectRemoval,
        handleProjectEdit,
        handleGetProjectsByCategories,
        getCurrentSection,
        setCurrentSection,
        handleAddTask,
        handleFindProject,
        handleGetTasks,
        handleFindTask,
        handleRemoveTask,
        handleEditTask,
        handleReadFromLocalStorage,
        handleWriteToLocalStorage
    }

}) ()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manager);

/***/ }),

/***/ "./src/projectObjectCreator.js":
/*!*************************************!*\
  !*** ./src/projectObjectCreator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNewProjectObject = (id, title, description, /*dueDate,*/ category) => {

    /*getters 
    const getId = () => id;

    const getTitle = () => title;

    const getDescription = () => description;


    const getCategory = () => category;

    const setNewId = (newId) => {
        id = newId;
    };

    //setters    
    const setNewTitle = (newTitle) => {
        title = newTitle;
    };
    const setNewDescription = (newDescription) => {
        description = newDescription;
    };
    const setNewCategory = (newCategory) => {
        category = newCategory;
    };
    
    return {
        getId, getTitle, getDescription, getCategory, setNewId, setNewTitle, setNewDescription, setNewCategory
    }
    } */

    return {id, title, description, category}
 }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewProjectObject);


/***/ }),

/***/ "./src/projectStore.js":
/*!*****************************!*\
  !*** ./src/projectStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectStorage = (() => {
    let projects = []

    const addNewProject = (newProject) => projects.push(newProject);

    const removeProject = (unwantedProject) => {
        const index = projects.indexOf(unwantedProject);
        projects.splice(index, 1);
    }
    
    const editProject = (projectToEdit, title, description, category) => {
        const index = projects.indexOf(projectToEdit);

        projects[index].title = title;
        projects[index].description = description;
        projects[index].category = category;
    }

    const addTask = (projectToEdit, taskName, taskDueDate) => {
        const index = projects.indexOf(projectToEdit);
        if ("task" in projects[index]) {
            const newIndex = projects[index]["task"].length;
            projects[index]["task"][newIndex] = {taskParent: projects[index].id, taskName: taskName, taskDueDate: taskDueDate};
            console.log(projects[index]["task"]);
            console.log(projects[index].id)
        }

        else {
            projects[index]["task"] = [];
            projects[index]["task"][0] = {taskParent: projects[index].id, taskName: taskName, taskDueDate: taskDueDate, getUniqueId() { return this.taskName+this.taskDueDate}}
            console.log(projects[index]["task"]);
        }
    }

    const getProjects = () => {
        return projects
    }

    const getProjectByCategory = (category) => {
       return projects.filter((project) => project.category.toLowerCase() === category)
    }

    const findProjectById = (id) => projects.find((project) => project.id === id)

    function getUniqueId() {return this.taskName+this.taskDueDate};

    const getTasks = (project) => {
        const index = projects.indexOf(project);
        const taskList = projects[index]["task"];
        console.log(taskList);

        if (!taskList || taskList.length === 0) {return taskList}

        if (!(taskList[0].hasOwnProperty("getUniqueId"))) {
            taskList.map((task) => task["getUniqueId"] = getUniqueId);
        } 
        taskList.map((task) => task["getUniqueId"] = getUniqueId);
        return taskList;
    }

    const findTaskById = (project, taskId) => {
        const index = projects.indexOf(project);
        console.log(projects[index]["task"]);
        if (!(projects[index]["task"][0].hasOwnProperty("getUniqueId"))) {
            project[index]["task"].map((task)=> task["getUniqueId"] = getUniqueId);
        }
        const task = projects[index]["task"].find((taskObject) => taskObject.getUniqueId() === taskId);
        return task;
    }

    const removeTask = (project, task) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex]["task"].indexOf(task);
        projects[projectIndex]["task"].splice(taskIndex, 1)
    }

    const editTask = (project, task, taskName, dueDate) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex]["task"].indexOf(task);
        projects[projectIndex]["task"][taskIndex]["taskName"] = taskName;
        projects[projectIndex]["task"][taskIndex]["taskDueDate"] = dueDate;
        return projects[projectIndex]["task"][taskIndex].getUniqueId();        
    }

    const readFromLocalStorage = () => {
        const projectStorage = JSON.parse(localStorage.getItem("projectStorage"));
        if (projectStorage && projectStorage.length > 0) {
            projects = projects.concat(projectStorage);
        }
    }

    const writeToLocalStorage = () => {
        localStorage.setItem("projectStorage", JSON.stringify(projects));
        console.log(projects);
    }

    return {addNewProject, removeProject, editProject, getProjects, getProjectByCategory, 
        addTask, findProjectById, getTasks, findTaskById, removeTask, editTask, 
        readFromLocalStorage, writeToLocalStorage}

}) ()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectStorage);


/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be0ea4ac64cead2bf95.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "642da2f9203fed7e99a0.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c8f3ce5c9c3fc997861.svg";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bbb4eb157f3c142fd98.svg";

/***/ }),

/***/ "./src/images/view.svg":
/*!*****************************!*\
  !*** ./src/images/view.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83b4018a1f8c5cf87f50.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_mobileMenuContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mobileMenuContainer */ "./src/components/mobileMenuContainer.js");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager */ "./src/manager.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_editProjectForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/editProjectForm */ "./src/components/editProjectForm.js");
/* harmony import */ var _components_createTaskForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/createTaskForm */ "./src/components/createTaskForm.js");
/* harmony import */ var _components_taskModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/taskModal */ "./src/components/taskModal.js");
/* harmony import */ var _components_editTaskForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/editTaskForm */ "./src/components/editTaskForm.js");

 











//load components into the DOM
document.body.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
document.body.appendChild((0,_components_mobileMenuContainer__WEBPACK_IMPORTED_MODULE_3__["default"])());
document.body.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
document.body.appendChild((0,_components_form__WEBPACK_IMPORTED_MODULE_5__["default"])());
document.body.appendChild((0,_components_editProjectForm__WEBPACK_IMPORTED_MODULE_7__["default"])());
document.body.appendChild((0,_components_createTaskForm__WEBPACK_IMPORTED_MODULE_8__["default"])());
document.body.appendChild((0,_components_taskModal__WEBPACK_IMPORTED_MODULE_9__["default"])());
document.body.appendChild((0,_components_editTaskForm__WEBPACK_IMPORTED_MODULE_10__["default"])());

_manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleReadFromLocalStorage();

const mobileMenuSection = document.querySelector(".mobile-menu-section");
mobileMenuSection.style.display = "none";

const projectSection = document.querySelector("section.project-section");


const mobileMenuHamburger = document.querySelector(".mobile-menu-hamburger");
mobileMenuHamburger.addEventListener("click", ()=> {
    if (mobileMenuSection.style.display === "none") {
        mobileMenuSection.style.display = "block";
    }

    else {
        mobileMenuSection.style.display = "none";
    }

})


//event listeners
const navigationsNodeList = document.querySelectorAll(".menu-list > li");
const navigationsArray = [...navigationsNodeList];


//event listener for navigations

navigationsArray.forEach((navigation) => { 
    navigation.addEventListener("click", (event) => {
        handleCorrectNav(event.target.textContent);
        projectSection.innerHTML = "";
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleGetProjectsByCategories(event.target.textContent.toLowerCase());
        if (event.target.parentElement.classList.contains("mobile-menu-container")) {
            event.target.parentElement.parentElement.style.display = "none";
        }
    }
     )
    });


//event listener for add new project button   

const addProjectButton = document.querySelector(".new-project-container");
const formModal = document.querySelector(".form-section");
const editFormModal = document.querySelector(".edit-form-section");
const taskFormSection = document.querySelector(".task-form-section");
const taskModalSection = document.querySelector(".task-modal-section");
const editTaskFormSection = document.querySelector(".edit-task-form-section");

const createProjectForm = document.querySelector(".create-project-form");
const editForm = document.querySelector(".edit-project-form");
const taskForm = document.querySelector(".create-task-form");
const editTaskForm = document.querySelector(".edit-task-form");

const tasksContainer = taskModalSection.querySelector(".tasks");
tasksContainer.addEventListener("click", (event) => {

    if (event.target.getAttribute("class") === "delete-task") {
        const projectId = event.target.parentElement.getAttribute("data-parent");
        const taskId = event.target.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        const task = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindTask(project, taskId);
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleRemoveTask(project, task);
        return;
    }

    if (event.target.getAttribute("class") === "edit-task") {

        editTaskFormSection.style.display = "flex";

        const projectId = event.target.parentElement.getAttribute("data-parent");
        const taskId = event.target.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        const task = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindTask(project, taskId);

        editTaskFormSection.querySelector('div > form input[type="text"]').value = task.taskName;
        editTaskFormSection.querySelector('div > form input[type="date"]').value = task.taskDueDate;

        const initialiseEditTaskButton = ()=> {
            handleEditTaskButtonClick(project, task);
            editButton.removeEventListener("click", initialiseEditTaskButton)
        }

        const editButton = editTaskFormSection.querySelector("div > form button");
        editButton.addEventListener("click", initialiseEditTaskButton);
    }

})

function handleEditTaskButtonClick(project, task) {
    const taskInputName = document.querySelector('.edit-task-form input[type="text"]').value;
    const taskDueDate = document.querySelector('.edit-task-form input[type="date"]').value;


    if (taskInputName && taskDueDate) {
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleEditTask(project, task, taskInputName, taskDueDate);
    }

    else {
        alert("All Task Input Field Must Be Filled");
    }

    editTaskFormSection.style.display = "none";
    editTaskForm.reset();
}

addProjectButton.addEventListener("click", ()=> {
    formModal.style.display = "flex";
    }
)

// event listener for close form modal


const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", ()=> {
    formModal.style.display = "none";
    createProjectForm.reset()
})

const closeEditProjectModal = document.querySelector(".close-edit-project-modal");
closeEditProjectModal.addEventListener("click", ()=> {
    editFormModal.style.display = "none";
    editForm.reset();
})

const closeTaskFormModal = document.querySelector(".close-task-form-modal");
closeTaskFormModal.addEventListener("click", ()=> {
    taskFormSection.style.display = "none";
    taskForm.reset();
})

const closeTaskModal = document.querySelector(".close-task-modal");
closeTaskModal.addEventListener("click", ()=> {
    taskModalSection.style.display = "none";
    taskModalSection.querySelector(".tasks").innerHTML = "";
})

const createProjectButton = document.querySelector('button[type="button"]');
createProjectButton.addEventListener("click", ()=> {
    const id = document.querySelector('input[id="ID"]').value;
    const title = document.querySelector('input[id="Title"]').value;
    const description = document.querySelector('input[id="Description"]').value;
    //const date = document.querySelector('input[id="Date"]').value;
    const select = document.querySelector("select").value;

    const checkId = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(id);
    
    if (checkId) {
        alert("ID already exists! Pick a new one");
        console.log("ID exists");
        return;
    }
    
    if (id && title) {
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleNewProjectCreation(id, title, description, select);
       // console.log(manager.handleGetAllProjects())
        createProjectForm.reset();
        formModal.style.display = "none";
    }
    else {
        alert("Sections Marked with Asterisk Can't be Empty");
    }
})

// event listener to project section

projectSection.addEventListener("click", (event)=> {

    //if the event target is the add function, get the project ID it belongs to
    if (event.target.getAttribute("id") === "add") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");

        taskFormSection.style.display = "flex";
        const createTaskButton = document.querySelector(".create-task-form > .button-container > button:first-of-type");
        
        const initalisehandleTaskButton = () => {
            const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
            handleAddTaskButtonClick(project);
            createTaskButton.removeEventListener("click", initalisehandleTaskButton);
        }

        createTaskButton.addEventListener("click", initalisehandleTaskButton);

        //set process for adding tasks manager.handleAddTask(id, )
        return
    }

    if (event.target.getAttribute("id") === "delete") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleProjectRemoval(project, projectId);
        return;
    }

    if (event.target.getAttribute("id") === "edit") {
        const projectDetailsUI = event.target.parentElement.parentElement.nextElementSibling;
        const projectDetailsUIChildren = projectDetailsUI.children;

        editFormModal.style.display = "flex";

        const editInputId = document.querySelector(".edit-form-section #edit-ID");
        editInputId.value = projectDetailsUIChildren[0].textContent;
        editInputId.disabled = true;

        const editInputTitle = document.querySelector(".edit-form-section #edit-Title");
        editInputTitle.value = projectDetailsUIChildren[1].textContent;

        const editInputDescription = document.querySelector(".edit-form-section #edit-Description");
        editInputDescription.value = projectDetailsUIChildren[2].textContent;

        const editSelect = document.querySelector(".edit-form-section #edit-Category");
        editSelect.value = projectDetailsUIChildren[3].textContent;

        const editProjectButton = document.querySelector(".edit-form-section button");
        editProjectButton.addEventListener("click", handleEditProjectButtonClick);
        return;
    }

    if (event.target.getAttribute("id") === "view") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        taskModalSection.style.display = "flex";
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleGetTasks(project);     
    }
})

function handleAddTaskButtonClick(project) {

    const taskInputName = document.querySelector('.create-task-form input[type="text"]').value;
    const taskDueDate = document.querySelector('.create-task-form input[type="date"]').value;


    if (taskInputName && taskDueDate) {
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleAddTask(project, taskInputName, taskDueDate);
    }

    else {
        alert("All Task Input Field Must Be Filled");
    }

    taskFormSection.style.display = "none";
    taskForm.reset();
    
}

function handleEditProjectButtonClick() {
    const id = document.querySelector('input[id="edit-ID"]').value;
    const title = document.querySelector('input[id="edit-Title"]').value;
    const description = document.querySelector('input[id="edit-Description"]').value;
    //const date = document.querySelector('input[id="Date"]').value;
    const select = document.querySelector('select[id="edit-Category"]').value;

    if (title) {

        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(id);
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleProjectEdit(project, id, title, description, select);

        editFormModal.style.display = "none";
        const editForm = document.querySelector(".edit-project-form");
        editForm.reset();
    }
    else {
        alert("Sections Marked with Asterisk Can't be Empty");

    }
}

function handleCorrectNav(section) {
    // get name of current section
    const currSection = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentSection(); 

    const currNavigation = navigationsArray.find((navigation)=> navigation.textContent === section);
    const prevSection = document.getElementById("current-section");
    if (prevSection) {
        prevSection.removeAttribute("id", "current-section");
    }
    currNavigation.setAttribute("id", "current-section");
    _manager__WEBPACK_IMPORTED_MODULE_4__["default"].setCurrentSection(currNavigation.textContent);
}


handleCorrectNav("ALL");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNic0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ3hFUDs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDekhSOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVMOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ1JDOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJ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RUEsd0JBQXdCLGdEQUFPO0FBQy9CLFFBQVEsZ0RBQU87O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixnREFBTzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBTztBQUNYOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlVGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL21vYmlsZU1lbnVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZG9tVXBkYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdE9iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdFN0b3JlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0NDlCQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4ubmF2LWxvZ28tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbm5hdiB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uaGFtYnVyZ2VyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2N1cnJlbnQtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gICAgZmxleC1iYXNpczogMTMwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cblxuLm1lbnUtbGlzdCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ubWVudS1saXN0IGxpIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxleC1iYXNpczogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbn1cblxuLm1vYmlsZS1tZW51LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzg0NDlCQTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1vYmlsZS1tZW51LWNvbnRhaW5lciBsaSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5tb2JpbGUtbWVudS1jb250YWluZXIgbGk6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGVcbn1cblxuLm1lbnUtbGlzdCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MUU1Rjtcbn1cblxubWFpbiB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQ6IGJlaWdlO1xufVxuXG5tYWluID4gLnNlYXJjaC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uc2VhcmNoIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCAyNXZ3LCAyNTBweCk7XG59XG5cbi5zZWFyY2g6Zm9jdXMge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmFkZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MUU1RjtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCAyNXZ3LCAyNTBweCk7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZGQtY29udGFpbmVyID4gc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XG59XG5cbi5mb3JtLXNlY3Rpb24sIC5lZGl0LWZvcm0tc2VjdGlvbiwgLnRhc2stZm9ybS1zZWN0aW9uLCAudGFzay1tb2RhbC1zZWN0aW9uLCAuZWRpdC10YXNrLWZvcm0tc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMC45KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvcm0tY29udGFpbmVyLC5lZGl0LWZvcm0tY29udGFpbmVyLCAudGFzay1mb3JtLWNvbnRhaW5lciwgLnRhc2stbW9kYWwtY29udGFpbmVyLCAuZWRpdC10YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogbWF4KDMwJSwgMzAwcHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDQ5QkE7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuZm9ybSBpbnB1dCwgc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmZvcm0gPiBkaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuZm9ybSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xufVxuXG5sYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciAgPiAqIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDtcbn1cblxuLmNsb3NlLW1vZGFsLCAuY2xvc2UtdGFzay1mb3JtLW1vZGFsLCAuY2xvc2UtZWRpdC1wcm9qZWN0LW1vZGFsLCAuY2xvc2UtdGFzay1tb2RhbCwgLmNsb3NlLWVkaXQtdGFzay1mb3JtLW1vZGFsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5wcm9qZWN0LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAzNXB4IDEwcHg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWZ1bmN0aW9ucyB7XG4gICAgZmxleC1iYXNpczogMzBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigwLDAsMCwwLjUpO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyNXB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gLmlkIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLnRhc2stdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG4udGFzay1tb2RhbC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xufVxuXG4udGFza3Mge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udGFza3MgaW1nIHtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgd2lkdGg6IDE5cHg7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMzBweCAzMHB4O1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgbmF2IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5uYXYtbG9nby1jb250YWluZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDQ5QkE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5uYXYtbG9nby1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5uYXYge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5oYW1idXJnZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2N1cnJlbnQtc2VjdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgICBmbGV4LWJhc2lzOiAxMzBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcblxcbi5tZW51LWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tZW51LWxpc3QgbGkge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleC1iYXNpczogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxufVxcblxcbi5tb2JpbGUtbWVudS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjODQ0OUJBO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vYmlsZS1tZW51LWNvbnRhaW5lciBsaSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUtY29udGFpbmVyIGxpOmxhc3Qtb2YtdHlwZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZVxcbn1cXG5cXG4ubWVudS1saXN0IGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MUU1RjtcXG59XFxuXFxubWFpbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYmFja2dyb3VuZDogYmVpZ2U7XFxufVxcblxcbm1haW4gPiAuc2VhcmNoLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5zZWFyY2gge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgMjV2dywgMjUwcHgpO1xcbn1cXG5cXG4uc2VhcmNoOmZvY3VzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxRTVGO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCAyNXZ3LCAyNTBweCk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4uZm9ybS1zZWN0aW9uLCAuZWRpdC1mb3JtLXNlY3Rpb24sIC50YXNrLWZvcm0tc2VjdGlvbiwgLnRhc2stbW9kYWwtc2VjdGlvbiwgLmVkaXQtdGFzay1mb3JtLXNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwLjkpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLC5lZGl0LWZvcm0tY29udGFpbmVyLCAudGFzay1mb3JtLWNvbnRhaW5lciwgLnRhc2stbW9kYWwtY29udGFpbmVyLCAuZWRpdC10YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IG1heCgzMCUsIDMwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0NDlCQTtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuZm9ybSBpbnB1dCwgc2VsZWN0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuZm9ybSA+IGRpdiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xcbn1cXG5cXG5sYWJlbHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIgID4gKiB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDtcXG59XFxuXFxuLmNsb3NlLW1vZGFsLCAuY2xvc2UtdGFzay1mb3JtLW1vZGFsLCAuY2xvc2UtZWRpdC1wcm9qZWN0LW1vZGFsLCAuY2xvc2UtdGFzay1tb2RhbCwgLmNsb3NlLWVkaXQtdGFzay1mb3JtLW1vZGFsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5jbG9zZS1mb3JtLW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ucHJvamVjdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogMzVweCAxMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZ1bmN0aW9ucyB7XFxuICAgIGZsZXgtYmFzaXM6IDMwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYigwLDAsMCwwLjUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IC5pZCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gZGl2Omxhc3Qtb2YtdHlwZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuLnRhc2stdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLnRhc2stbW9kYWwtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50YXNrcyBpbWcge1xcbiAgICBoZWlnaHQ6IDE5cHg7XFxuICAgIHdpZHRoOiAxOXB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMzBweCAzMHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICBuYXYge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaGFtYnVyZ2VyLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICAubmF2LWxvZ28tY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCkge1xuXG4gICAgY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBmb3JtU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtLXNlY3Rpb25cIilcbiAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS10YXNrLWZvcm1cIik7XG5cbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLXRhc2stZm9ybS1tb2RhbFwiKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUZvcm1Nb2RhbCk7XG4gICAgY2xvc2VGb3JtTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNsb3NlLWZvcm0tbW9kYWwtY29udGFpbmVyXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm1Nb2RhbENvbnRhaW5lcik7XG5cbiAgICBcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRhc2tcIjtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0tdGl0bGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrIE5hbWUqXCI7XG4gICAgdGFza05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrTmFtZVwiKTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJJRFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgRHVlIERhdGUqXCI7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIkRhdGVcIik7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcbiAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIGZvcm1TZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrRm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gZWRpdFByb2plY3RGb3JtKCkge1xuXG4gICAgY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBmb3JtU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb3JtLXNlY3Rpb25cIik7XG4gICAgXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb2plY3QtZm9ybVwiKTtcblxuICAgIGNvbnN0IGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VGb3JtTW9kYWwuaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZWRpdC1wcm9qZWN0LW1vZGFsXCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyKTtcblxuICAgIFxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRvLURvXCI7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgY29uc3QgaWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpZExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdCBJRCpcIjtcbiAgICBpZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRJRFwiKTtcbiAgICBjb25zdCBpZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LUlEXCIpO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbiAgICBpZElucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCAwKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaWRMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpZElucHV0KTtcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgVGl0bGUqXCI7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0VGl0bGVcIik7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1UaXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXG5cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdCBEZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdERlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LURlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBcbiAgICAvKlxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIlBpY2sgRHVlIERhdGUqXCI7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIkRhdGVcIik7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTsgKi9cblxuXG4gICAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgc2VsZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBDYXRlZ29yeVwiO1xuICAgIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRDYXRlZ29yeVwiKTtcbiAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LUNhdGVnb3J5XCIpO1xuICAgIFxuICAgIGNvbnN0IHdvcmtPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHdvcmtPcHRpb24udmFsdWUgPSBcIldvcmtcIjtcbiAgICB3b3JrT3B0aW9uLnRleHRDb250ZW50ID0gXCJXb3JrXCI7XG5cbiAgICBjb25zdCBneW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGd5bU9wdGlvbi52YWx1ZSA9IFwiR3ltXCI7XG4gICAgZ3ltT3B0aW9uLnRleHRDb250ZW50ID0gXCJHeW1cIjtcblxuICAgIGNvbnN0IHNjaG9vbE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgc2Nob29sT3B0aW9uLnZhbHVlID0gXCJTY2hvb2xcIjtcbiAgICBzY2hvb2xPcHRpb24udGV4dENvbnRlbnQgPSBcIlNjaG9vbFwiO1xuXG4gICAgY29uc3QgY2hvcmVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGNob3JlT3B0aW9uLnZhbHVlID0gXCJDaG9yZXNcIjtcbiAgICBjaG9yZU9wdGlvbi50ZXh0Q29udGVudCA9IFwiQ2hvcmVzXCI7XG5cbiAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZCh3b3JrT3B0aW9uKTtcbiAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChneW1PcHRpb24pO1xuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKHNjaG9vbE9wdGlvbik7XG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQoY2hvcmVPcHRpb24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RJbnB1dCk7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIGZvcm1TZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0UHJvamVjdEZvcm07IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEVkaXRUYXNrRm9ybSgpIHtcblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1mb3JtLXNlY3Rpb25cIilcbiAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWZvcm1cIik7XG5cbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLWVkaXQtdGFzay1mb3JtLW1vZGFsXCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyKTtcblxuICAgIFxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0tdGl0bGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrIE5hbWUqXCI7XG4gICAgdGFza05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrTmFtZVwiKTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJJRFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgRHVlIERhdGUqXCI7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIkRhdGVcIik7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBmb3JtU2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFRhc2tGb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBGb290ZXIgKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJUTy1ETy1MSVNUIEJZIFZXRURFIEVTSU5cIlxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZvcm0tc2VjdGlvblwiKVxuICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1wcm9qZWN0LWZvcm1cIik7XG5cbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLW1vZGFsXCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyKTtcblxuICAgIFxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8tRG9cIjtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0tdGl0bGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjb25zdCBpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlkTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0IElEKlwiO1xuICAgIGlkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiSURcIik7XG4gICAgY29uc3QgaWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpZElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiSURcIik7XG4gICAgaWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIDApO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIyNVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaWRMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpZElucHV0KTtcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgVGl0bGUqXCI7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJUaXRsZVwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJUaXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJDcmVhdGUgYSB0by1kbyBsaXN0XCIpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcblxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0IERlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIFxuICAgIC8qXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUGljayBEdWUgRGF0ZSpcIjtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiRGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpOyAqL1xuXG5cbiAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IENhdGVnb3J5XCI7XG4gICAgc2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiQ2F0ZWdvcnlcIik7XG4gICAgY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiQ2F0ZWdvcnlcIik7XG4gICAgXG4gICAgY29uc3Qgd29ya09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgd29ya09wdGlvbi52YWx1ZSA9IFwiV29ya1wiO1xuICAgIHdvcmtPcHRpb24udGV4dENvbnRlbnQgPSBcIldvcmtcIjtcblxuICAgIGNvbnN0IGd5bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZ3ltT3B0aW9uLnZhbHVlID0gXCJHeW1cIjtcbiAgICBneW1PcHRpb24udGV4dENvbnRlbnQgPSBcIkd5bVwiO1xuXG4gICAgY29uc3Qgc2Nob29sT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBzY2hvb2xPcHRpb24udmFsdWUgPSBcIlNjaG9vbFwiO1xuICAgIHNjaG9vbE9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2Nob29sXCI7XG5cbiAgICBjb25zdCBjaG9yZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY2hvcmVPcHRpb24udmFsdWUgPSBcIkNob3Jlc1wiO1xuICAgIGNob3JlT3B0aW9uLnRleHRDb250ZW50ID0gXCJDaG9yZXNcIjtcblxuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKHdvcmtPcHRpb24pO1xuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKGd5bU9wdGlvbik7XG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQoc2Nob29sT3B0aW9uKTtcbiAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChjaG9yZU9wdGlvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG4gICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBmb3JtU2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuLi9pbWFnZXMvbWVudS5zdmdcIlxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgLy9oZWFkZXIgY29udGFpbmVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IG5hdkxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1sb2dvLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGFpbmVyXCIpO1xuICAgIGxvZ29Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICAvKmNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ29JbWFnZS5zcmMgPSBcIi4uL2ltYWdlcy9cIjtcbiAgICBsb2dvSW1hZ2UuY2xhc3NMaXN0LmFkZChcImxvZ28taW1hZ2VcIik7XG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpOyAqL1xuXG4gICAgbmF2TG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcblxuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhbGwudGV4dENvbnRlbnQgPSBcIkFMTFwiO1xuXG4gICAgY29uc3Qgd29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB3b3JrLnRleHRDb250ZW50ID0gXCJXT1JLXCI7XG5cbiAgICBjb25zdCBneW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZ3ltLnRleHRDb250ZW50ID0gXCJHWU1cIjtcblxuICAgIGNvbnN0IHNjaG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzY2hvb2wudGV4dENvbnRlbnQgPSBcIlNDSE9PTFwiO1xuXG4gICAgY29uc3QgY2hvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNob3Jlcy50ZXh0Q29udGVudCA9IFwiQ0hPUkVTXCJcblxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGFsbCk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQod29yayk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoZ3ltKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChzY2hvb2wpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNob3Jlcyk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gICAgY29uc3QgbW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBtb2JpbGVNZW51SGFtYnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgbW9iaWxlTWVudUhhbWJ1cmdlci5zcmMgPSBtZW51O1xuICAgIG1vYmlsZU1lbnVIYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51LWhhbWJ1cmdlclwiKVxuXG4gICAgbW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2JpbGVNZW51SGFtYnVyZ2VyKTtcblxuICAgIG5hdkxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIG5hdkxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxvZ29Db250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VhcmNoU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLXNlY3Rpb25cIik7XG5cbiAgICAvL2NvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkTmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgIC8vIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAvL3NlYXJjaC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2VhcmNoXCIpO1xuICAgIC8vc2VhcmNoLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoIGJ5IHRpdGxlXCIpO1xuICAgLy8gc2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG4gICAvLyBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcblxuICAgIGNvbnN0IGFkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPHNwYW4+JnBsdXM7PC9zcGFuPkFkZCBOZXcgUHJvamVjdFwiO1xuICAgIGFkZE5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQ29udGFpbmVyKTtcbiAgICBhZGROZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb250YWluZXJcIilcbiAgICBhZGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC1jb250YWluZXJcIik7XG5cbiAgIC8vIHNlYXJjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgICBzZWFyY2hTZWN0aW9uLmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3RDb250YWluZXIpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWFyY2hTZWN0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VjdGlvblwiKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xuICAgXG4gICAgcmV0dXJuIG1haW47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE1vYmlsZU1lbnUoKSB7XG5cbiAgICBjb25zdCBtb2JpbGVNZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1vYmlsZU1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudS1zZWN0aW9uXCIpO1xuXG5cbiAgICBjb25zdCBtb2JpbGVNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgYWxsLnRleHRDb250ZW50ID0gXCJBTExcIjtcblxuICAgIGNvbnN0IHdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgd29yay50ZXh0Q29udGVudCA9IFwiV09SS1wiO1xuXG4gICAgY29uc3QgZ3ltID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGd5bS50ZXh0Q29udGVudCA9IFwiR1lNXCI7XG5cbiAgICBjb25zdCBzY2hvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc2Nob29sLnRleHRDb250ZW50ID0gXCJTQ0hPT0xcIjtcblxuICAgIGNvbnN0IGNob3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjaG9yZXMudGV4dENvbnRlbnQgPSBcIkNIT1JFU1wiO1xuXG4gICAgbW9iaWxlTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGwpO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQod29yayk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChneW0pO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Nob29sKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNob3Jlcyk7XG5cbiAgICBtb2JpbGVNZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtb2JpbGVNZW51Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBtb2JpbGVNZW51U2VjdGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tNb2RhbCgpIHtcblxuICAgIGNvbnN0IHRhc2tNb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICB0YXNrTW9kYWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsLXNlY3Rpb25cIilcbiAgICBcbiAgICBjb25zdCB0YXNrTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0YXNrTW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsLWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjbG9zZVRhc2tNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlVGFza01vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLXRhc2stbW9kYWxcIik7XG4gICAgY2xvc2VUYXNrTW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VUYXNrTW9kYWwpO1xuICAgIGNsb3NlVGFza01vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLW1vZGFsLWNvbnRhaW5lclwiKTtcblxuICAgIHRhc2tNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VUYXNrTW9kYWxDb250YWluZXIpO1xuXG4gICAgXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuXG4gICAgdGFza01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xuXG4gICAgdGFza01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgXG4gICAgdGFza01vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tNb2RhbENvbnRlbnQpO1xuICAgIHRhc2tNb2RhbFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza01vZGFsQ29udGFpbmVyKTtcblxuICAgIHJldHVybiB0YXNrTW9kYWxTZWN0aW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tNb2RhbDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgYWRkIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5pbXBvcnQgZGVsIGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgdmlldyBmcm9tIFwiLi9pbWFnZXMvdmlldy5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuL2ltYWdlcy9lZGl0LnN2Z1wiO1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdFVJID0gKHByb2plY3RPYmplY3QpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb25cIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RGdW5jdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZ1bmN0aW9uc1wiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGVkaXRJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGVkaXRJbWFnZS5zcmMgPSBlZGl0O1xuICAgICAgICBlZGl0SW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0XCIpXG4gICAgICAgIHByb2plY3RFZGl0LmFwcGVuZENoaWxkKGVkaXRJbWFnZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB2aWV3SW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB2aWV3SW1hZ2Uuc3JjID0gdmlldztcbiAgICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodmlld0ltYWdlKTtcbiAgICAgICAgdmlld0ltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmlld1wiKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBhZGRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhZGRJbWFnZS5zcmMgPSBhZGQ7XG4gICAgICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQoYWRkSW1hZ2UpO1xuICAgICAgICBhZGRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWRkXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkZWxldGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSBkZWw7XG4gICAgICAgIHByb2plY3REZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpO1xuICAgICAgICBkZWxldGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZVwiKVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdCk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdFZpZXcpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmFwcGVuZENoaWxkKHByb2plY3RBZGQpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmFwcGVuZENoaWxkKHByb2plY3REZWxldGUpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdERldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGV0YWlsc1wiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHByb2plY3RJZC50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QuaWQ7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QudGl0bGU7XG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QuZGVzY3JpcHRpb247XG4gICAgICAgIHByb2plY3RDYXRlZ29yeS50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QuY2F0ZWdvcnk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgcHJvamVjdElkLmNsYXNzTGlzdC5hZGQoXCJpZFwiKTtcblxuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0SWQpO1xuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0Q2F0ZWdvcnkpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZ1bmN0aW9ucyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgcHJvamVjdElkLnRleHRDb250ZW50KTtcblxuICAgICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0VUkgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS12YWx1ZT1cIiR7cHJvamVjdElkfVwiXWApO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWN0aW9uXCIpO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5yZW1vdmVDaGlsZChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdFVJID0gKHByb2plY3RJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdmFsdWU9XCIke3Byb2plY3RJZH1cIl1gKTtcbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbFVJID0gcHJvamVjdC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsVUlDaGlsZHJlbiA9IHByb2plY3REZXRhaWxVSS5jaGlsZHJlbjtcbiAgICAgICAgcHJvamVjdERldGFpbFVJQ2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgcHJvamVjdERldGFpbFVJQ2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvamVjdERldGFpbFVJQ2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBjYXRlZ29yeTsgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclRhc2sgPSAodGFza09iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza09iamVjdC50YXNrTmFtZTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iamVjdC50YXNrRHVlRGF0ZTtcblxuICAgICAgICBjb25zdCB0YXNrRWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0YXNrRWRpdC5zcmMgPSBlZGl0O1xuICAgICAgICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGFza0RlbGV0ZS5zcmMgPSBkZWw7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIpO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgYCR7dGFza09iamVjdC5nZXRVbmlxdWVJZCgpfWApXG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wYXJlbnRcIiwgYCR7dGFza09iamVjdC50YXNrUGFyZW50fWApXG5cbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRW1wdHlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICAgICAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiTm90aGluZyB0byBzZWUgaGVyZS4uLlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza1VuaXF1ZUlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgICAgICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGFza3MucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdmFsdWUgPSBcIiR7dGFza1VuaXF1ZUlkfVwiXWApO1xuICAgICAgICB0YXNrcy5yZW1vdmVDaGlsZCh0YXNrVG9EZWxldGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUYXNrID0gKG9sZFVuaXF1ZUlkLCBuZXdVbmlxdWVJZCwgdGFza05hbWUsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gdGFza3MucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdmFsdWUgPSBcIiR7b2xkVW5pcXVlSWR9XCJdYCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cob2xkVW5pcXVlSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdVbmlxdWVJZCk7XG5cbiAgICAgICAgdGFza1RvRWRpdC5xdWVyeVNlbGVjdG9yKFwiZGl2OmZpcnN0LW9mLXR5cGVcIikudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcbiAgICAgICAgdGFza1RvRWRpdC5xdWVyeVNlbGVjdG9yKFwiZGl2Omxhc3Qtb2YtdHlwZVwiKS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRhc2tUb0VkaXQuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBgJHtuZXdVbmlxdWVJZH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RVSSwgZGVsZXRlUHJvamVjdFVJLCBlZGl0UHJvamVjdFVJLCByZW5kZXJUYXNrLCByZW5kZXJFbXB0eVRhc2tzLCBkZWxldGVUYXNrLCBlZGl0VGFza31cbn0pICgpXG5cbmV4cG9ydCBkZWZhdWx0IGRvbSIsImltcG9ydCBwcm9qZWN0U3RvcmFnZSBmcm9tIFwiLi9wcm9qZWN0U3RvcmVcIjtcbmltcG9ydCBjcmVhdGVOZXdQcm9qZWN0T2JqZWN0IGZyb20gXCIuL3Byb2plY3RPYmplY3RDcmVhdG9yXCI7XG5pbXBvcnQgZG9tIGZyb20gXCIuL2RvbVVwZGF0ZVwiO1xuXG5jb25zdCBtYW5hZ2VyID0gKCgpID0+IHtcblxuICAgIGxldCBjdXJyZW50U2VjdGlvbiA9IFwiQUxMXCI7XG5cbiAgICBjb25zdCBoYW5kbGVOZXdQcm9qZWN0Q3JlYXRpb24gPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gY3JlYXRlTmV3UHJvamVjdE9iamVjdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLmFkZE5ld1Byb2plY3Qob2JqKTtcbiAgICAgICAgZG9tLmNyZWF0ZVByb2plY3RVSShvYmopO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgLy8gdWRwYXRlIERPTSBBRERJVElPTlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByb2plY3RSZW1vdmFsID0gKHByb2plY3QsIHByb2plY3RJZCkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBkb20uZGVsZXRlUHJvamVjdFVJKHByb2plY3RJZCk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgLy8gdXBkYXRlIERPTSBSRU1PVkFMXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJvamVjdEVkaXQgPSAocHJvamVjdCwgcHJvamVjdElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLmVkaXRQcm9qZWN0KHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpO1xuICAgICAgICBkb20uZWRpdFByb2plY3RVSShwcm9qZWN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIC8vIHVkcGRhdGUgRE9NIEVESVRJTkdcbiAgICB9XG5cbiAgICAvKmNvbnN0IGhhbmRsZUdldEFsbFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcbiAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgICAgLy8gZG9tIHN0dWZmIGZvciBkaXNwbGF5IHByb2plY3RzIFxuICAgIH0gKi9cblxuICAgIGNvbnN0IGhhbmRsZUdldFByb2plY3RzQnlDYXRlZ29yaWVzID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmIChjYXRlZ29yeSA9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSlcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFN0b3JhZ2UuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcChkb20uY3JlYXRlUHJvamVjdFVJKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RTdG9yYWdlLmdldFByb2plY3RCeUNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKGRvbS5jcmVhdGVQcm9qZWN0VUkpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9tIHN0dWZmIGZvciBwcm9qZXRzIGRpc3BsYXkgYnkgY2F0ZWdvcnlcbiAgICB9XG59XG5cbiAgICBjb25zdCBoYW5kbGVBZGRUYXNrID0gKHByb2plY3RUb0VkaXQsIHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5hZGRUYXNrKHByb2plY3RUb0VkaXQsIHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgLy8gZG9tIHN0dWZmIGZvciBwcm9qZWN0IHRhc2tcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50U2VjdGlvbiA9ICgpID0+IGN1cnJlbnRTZWN0aW9uO1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudFNlY3Rpb24gPSAobmV3Q3VycmVudFNlY3Rpb24pID0+IHtcbiAgICAgICAgY3VycmVudFNlY3Rpb24gPSBuZXdDdXJyZW50U2VjdGlvblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZpbmRQcm9qZWN0ID0gKGlkKSA9PiBwcm9qZWN0U3RvcmFnZS5maW5kUHJvamVjdEJ5SWQoaWQpO1xuXG4gICAgY29uc3QgaGFuZGxlRmluZFRhc2sgPSAocHJvamVjdCwgdGFza0lkKSA9PiBwcm9qZWN0U3RvcmFnZS5maW5kVGFza0J5SWQocHJvamVjdCwgdGFza0lkKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZVRhc2sgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5yZW1vdmVUYXNrKHByb2plY3QsIHRhc2spO1xuICAgICAgICBkb20uZGVsZXRlVGFzayh0YXNrLmdldFVuaXF1ZUlkKCkpO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVHZXRUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdFN0b3JhZ2UuZ2V0VGFza3MocHJvamVjdCk7XG4gICAgICAgIGlmICh0YXNrcyAmJiB0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXNrcy5tYXAoZG9tLnJlbmRlclRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnJlbmRlckVtcHR5VGFza3MoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRWRpdFRhc2sgPSAocHJvamVjdCwgdGFzaywgdGFza05hbWUsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkVW5pcXVlSWQgPSB0YXNrLmdldFVuaXF1ZUlkKCk7XG4gICAgICAgIGNvbnN0IG5ld1VuaXF1ZUlkID0gcHJvamVjdFN0b3JhZ2UuZWRpdFRhc2socHJvamVjdCwgdGFzaywgdGFza05hbWUsIGR1ZURhdGUpO1xuICAgICAgICBkb20uZWRpdFRhc2sob2xkVW5pcXVlSWQsIG5ld1VuaXF1ZUlkLCB0YXNrTmFtZSwgZHVlRGF0ZSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVXcml0ZVRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZWFkRnJvbUxvY2FsU3RvcmFnZSA9KCkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5yZWFkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5tYXAoZG9tLmNyZWF0ZVByb2plY3RVSSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZU5ld1Byb2plY3RDcmVhdGlvbixcbiAgICAgICAgaGFuZGxlUHJvamVjdFJlbW92YWwsXG4gICAgICAgIGhhbmRsZVByb2plY3RFZGl0LFxuICAgICAgICBoYW5kbGVHZXRQcm9qZWN0c0J5Q2F0ZWdvcmllcyxcbiAgICAgICAgZ2V0Q3VycmVudFNlY3Rpb24sXG4gICAgICAgIHNldEN1cnJlbnRTZWN0aW9uLFxuICAgICAgICBoYW5kbGVBZGRUYXNrLFxuICAgICAgICBoYW5kbGVGaW5kUHJvamVjdCxcbiAgICAgICAgaGFuZGxlR2V0VGFza3MsXG4gICAgICAgIGhhbmRsZUZpbmRUYXNrLFxuICAgICAgICBoYW5kbGVSZW1vdmVUYXNrLFxuICAgICAgICBoYW5kbGVFZGl0VGFzayxcbiAgICAgICAgaGFuZGxlUmVhZEZyb21Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGhhbmRsZVdyaXRlVG9Mb2NhbFN0b3JhZ2VcbiAgICB9XG5cbn0pICgpXG5cbmV4cG9ydCBkZWZhdWx0IG1hbmFnZXIiLCJjb25zdCBjcmVhdGVOZXdQcm9qZWN0T2JqZWN0ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIC8qZHVlRGF0ZSwqLyBjYXRlZ29yeSkgPT4ge1xuXG4gICAgLypnZXR0ZXJzIFxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiBjYXRlZ29yeTtcblxuICAgIGNvbnN0IHNldE5ld0lkID0gKG5ld0lkKSA9PiB7XG4gICAgICAgIGlkID0gbmV3SWQ7XG4gICAgfTtcblxuICAgIC8vc2V0dGVycyAgICBcbiAgICBjb25zdCBzZXROZXdUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIH07XG4gICAgY29uc3Qgc2V0TmV3RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHNldE5ld0NhdGVnb3J5ID0gKG5ld0NhdGVnb3J5KSA9PiB7XG4gICAgICAgIGNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJZCwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRDYXRlZ29yeSwgc2V0TmV3SWQsIHNldE5ld1RpdGxlLCBzZXROZXdEZXNjcmlwdGlvbiwgc2V0TmV3Q2F0ZWdvcnlcbiAgICB9XG4gICAgfSAqL1xuXG4gICAgcmV0dXJuIHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeX1cbiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5ld1Byb2plY3RPYmplY3RcbiIsImNvbnN0IHByb2plY3RTdG9yYWdlID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXVxuXG4gICAgY29uc3QgYWRkTmV3UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh1bndhbnRlZFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHVud2FudGVkUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gKHByb2plY3RUb0VkaXQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0VkaXQpO1xuXG4gICAgICAgIHByb2plY3RzW2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBwcm9qZWN0c1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvamVjdHNbaW5kZXhdLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFzayA9IChwcm9qZWN0VG9FZGl0LCB0YXNrTmFtZSwgdGFza0R1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0VkaXQpO1xuICAgICAgICBpZiAoXCJ0YXNrXCIgaW4gcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByb2plY3RzW2luZGV4XVtcInRhc2tcIl0ubGVuZ3RoO1xuICAgICAgICAgICAgcHJvamVjdHNbaW5kZXhdW1widGFza1wiXVtuZXdJbmRleF0gPSB7dGFza1BhcmVudDogcHJvamVjdHNbaW5kZXhdLmlkLCB0YXNrTmFtZTogdGFza05hbWUsIHRhc2tEdWVEYXRlOiB0YXNrRHVlRGF0ZX07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2luZGV4XS5pZClcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdHNbaW5kZXhdW1widGFza1wiXSA9IFtdO1xuICAgICAgICAgICAgcHJvamVjdHNbaW5kZXhdW1widGFza1wiXVswXSA9IHt0YXNrUGFyZW50OiBwcm9qZWN0c1tpbmRleF0uaWQsIHRhc2tOYW1lOiB0YXNrTmFtZSwgdGFza0R1ZURhdGU6IHRhc2tEdWVEYXRlLCBnZXRVbmlxdWVJZCgpIHsgcmV0dXJuIHRoaXMudGFza05hbWUrdGhpcy50YXNrRHVlRGF0ZX19XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0QnlDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnkpXG4gICAgfVxuXG4gICAgY29uc3QgZmluZFByb2plY3RCeUlkID0gKGlkKSA9PiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZClcblxuICAgIGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge3JldHVybiB0aGlzLnRhc2tOYW1lK3RoaXMudGFza0R1ZURhdGV9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gcHJvamVjdHNbaW5kZXhdW1widGFza1wiXTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xuXG4gICAgICAgIGlmICghdGFza0xpc3QgfHwgdGFza0xpc3QubGVuZ3RoID09PSAwKSB7cmV0dXJuIHRhc2tMaXN0fVxuXG4gICAgICAgIGlmICghKHRhc2tMaXN0WzBdLmhhc093blByb3BlcnR5KFwiZ2V0VW5pcXVlSWRcIikpKSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHRhc2tbXCJnZXRVbmlxdWVJZFwiXSA9IGdldFVuaXF1ZUlkKTtcbiAgICAgICAgfSBcbiAgICAgICAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB0YXNrW1wiZ2V0VW5pcXVlSWRcIl0gPSBnZXRVbmlxdWVJZCk7XG4gICAgICAgIHJldHVybiB0YXNrTGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kVGFza0J5SWQgPSAocHJvamVjdCwgdGFza0lkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaW5kZXhdW1widGFza1wiXSk7XG4gICAgICAgIGlmICghKHByb2plY3RzW2luZGV4XVtcInRhc2tcIl1bMF0uaGFzT3duUHJvcGVydHkoXCJnZXRVbmlxdWVJZFwiKSkpIHtcbiAgICAgICAgICAgIHByb2plY3RbaW5kZXhdW1widGFza1wiXS5tYXAoKHRhc2spPT4gdGFza1tcImdldFVuaXF1ZUlkXCJdID0gZ2V0VW5pcXVlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdLmZpbmQoKHRhc2tPYmplY3QpID0+IHRhc2tPYmplY3QuZ2V0VW5pcXVlSWQoKSA9PT0gdGFza0lkKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW3Byb2plY3RJbmRleF1bXCJ0YXNrXCJdLmluZGV4T2YodGFzayk7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF1bXCJ0YXNrXCJdLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRhc2sgPSAocHJvamVjdCwgdGFzaywgdGFza05hbWUsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XVtcInRhc2tcIl0uaW5kZXhPZih0YXNrKTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XVtcInRhc2tcIl1bdGFza0luZGV4XVtcInRhc2tOYW1lXCJdID0gdGFza05hbWU7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF1bXCJ0YXNrXCJdW3Rhc2tJbmRleF1bXCJ0YXNrRHVlRGF0ZVwiXSA9IGR1ZURhdGU7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1twcm9qZWN0SW5kZXhdW1widGFza1wiXVt0YXNrSW5kZXhdLmdldFVuaXF1ZUlkKCk7ICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCByZWFkRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFN0b3JhZ2VcIikpO1xuICAgICAgICBpZiAocHJvamVjdFN0b3JhZ2UgJiYgcHJvamVjdFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5jb25jYXQocHJvamVjdFN0b3JhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd3JpdGVUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGROZXdQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBlZGl0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFByb2plY3RCeUNhdGVnb3J5LCBcbiAgICAgICAgYWRkVGFzaywgZmluZFByb2plY3RCeUlkLCBnZXRUYXNrcywgZmluZFRhc2tCeUlkLCByZW1vdmVUYXNrLCBlZGl0VGFzaywgXG4gICAgICAgIHJlYWRGcm9tTG9jYWxTdG9yYWdlLCB3cml0ZVRvTG9jYWxTdG9yYWdlfVxuXG59KSAoKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0U3RvcmFnZVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjsgXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21vYmlsZU1lbnVDb250YWluZXJcIjtcbmltcG9ydCBtYW5hZ2VyIGZyb20gXCIuL21hbmFnZXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBlZGl0UHJvamVjdEZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0UHJvamVjdEZvcm1cIjtcbmltcG9ydCBjcmVhdGVUYXNrRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL2NyZWF0ZVRhc2tGb3JtXCI7XG5pbXBvcnQgY3JlYXRlVGFza01vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvdGFza01vZGFsXCI7XG5pbXBvcnQgRWRpdFRhc2tGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvZWRpdFRhc2tGb3JtXCI7XG5cblxuLy9sb2FkIGNvbXBvbmVudHMgaW50byB0aGUgRE9NXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTW9iaWxlTWVudSgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTWFpbigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChGb3JtKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEZvcm0oKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb3JtKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrTW9kYWwoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEVkaXRUYXNrRm9ybSgpKTtcblxubWFuYWdlci5oYW5kbGVSZWFkRnJvbUxvY2FsU3RvcmFnZSgpO1xuXG5jb25zdCBtb2JpbGVNZW51U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUtc2VjdGlvblwiKTtcbm1vYmlsZU1lbnVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvbi5wcm9qZWN0LXNlY3Rpb25cIik7XG5cblxuY29uc3QgbW9iaWxlTWVudUhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUtaGFtYnVyZ2VyXCIpO1xubW9iaWxlTWVudUhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgaWYgKG1vYmlsZU1lbnVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIG1vYmlsZU1lbnVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIG1vYmlsZU1lbnVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbn0pXG5cblxuLy9ldmVudCBsaXN0ZW5lcnNcbmNvbnN0IG5hdmlnYXRpb25zTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbGlzdCA+IGxpXCIpO1xuY29uc3QgbmF2aWdhdGlvbnNBcnJheSA9IFsuLi5uYXZpZ2F0aW9uc05vZGVMaXN0XTtcblxuXG4vL2V2ZW50IGxpc3RlbmVyIGZvciBuYXZpZ2F0aW9uc1xuXG5uYXZpZ2F0aW9uc0FycmF5LmZvckVhY2goKG5hdmlnYXRpb24pID0+IHsgXG4gICAgbmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGhhbmRsZUNvcnJlY3ROYXYoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcbiAgICAgICAgcHJvamVjdFNlY3Rpb24uaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbWFuYWdlci5oYW5kbGVHZXRQcm9qZWN0c0J5Q2F0ZWdvcmllcyhldmVudC50YXJnZXQudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2JpbGUtbWVudS1jb250YWluZXJcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgICApXG4gICAgfSk7XG5cblxuLy9ldmVudCBsaXN0ZW5lciBmb3IgYWRkIG5ldyBwcm9qZWN0IGJ1dHRvbiAgIFxuXG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1jb250YWluZXJcIik7XG5jb25zdCBmb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tc2VjdGlvblwiKTtcbmNvbnN0IGVkaXRGb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybS1zZWN0aW9uXCIpO1xuY29uc3QgdGFza0Zvcm1TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm0tc2VjdGlvblwiKTtcbmNvbnN0IHRhc2tNb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWwtc2VjdGlvblwiKTtcbmNvbnN0IGVkaXRUYXNrRm9ybVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1mb3JtLXNlY3Rpb25cIik7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtcHJvamVjdC1mb3JtXCIpO1xuY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1mb3JtXCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWZvcm1cIik7XG5jb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1mb3JtXCIpO1xuXG5jb25zdCB0YXNrc0NvbnRhaW5lciA9IHRhc2tNb2RhbFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbnRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT09IFwiZGVsZXRlLXRhc2tcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudFwiKTtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG1hbmFnZXIuaGFuZGxlRmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgY29uc3QgdGFzayA9IG1hbmFnZXIuaGFuZGxlRmluZFRhc2socHJvamVjdCwgdGFza0lkKTtcbiAgICAgICAgbWFuYWdlci5oYW5kbGVSZW1vdmVUYXNrKHByb2plY3QsIHRhc2spO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PT0gXCJlZGl0LXRhc2tcIikge1xuXG4gICAgICAgIGVkaXRUYXNrRm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50XCIpO1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0YXNrID0gbWFuYWdlci5oYW5kbGVGaW5kVGFzayhwcm9qZWN0LCB0YXNrSWQpO1xuXG4gICAgICAgIGVkaXRUYXNrRm9ybVNlY3Rpb24ucXVlcnlTZWxlY3RvcignZGl2ID4gZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlID0gdGFzay50YXNrTmFtZTtcbiAgICAgICAgZWRpdFRhc2tGb3JtU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdkaXYgPiBmb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdJykudmFsdWUgPSB0YXNrLnRhc2tEdWVEYXRlO1xuXG4gICAgICAgIGNvbnN0IGluaXRpYWxpc2VFZGl0VGFza0J1dHRvbiA9ICgpPT4ge1xuICAgICAgICAgICAgaGFuZGxlRWRpdFRhc2tCdXR0b25DbGljayhwcm9qZWN0LCB0YXNrKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRpYWxpc2VFZGl0VGFza0J1dHRvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBlZGl0VGFza0Zvcm1TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoXCJkaXYgPiBmb3JtIGJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdGlhbGlzZUVkaXRUYXNrQnV0dG9uKTtcbiAgICB9XG5cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZUVkaXRUYXNrQnV0dG9uQ2xpY2socHJvamVjdCwgdGFzaykge1xuICAgIGNvbnN0IHRhc2tJbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLnZhbHVlO1xuXG5cbiAgICBpZiAodGFza0lucHV0TmFtZSAmJiB0YXNrRHVlRGF0ZSkge1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZUVkaXRUYXNrKHByb2plY3QsIHRhc2ssIHRhc2tJbnB1dE5hbWUsIHRhc2tEdWVEYXRlKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJBbGwgVGFzayBJbnB1dCBGaWVsZCBNdXN0IEJlIEZpbGxlZFwiKTtcbiAgICB9XG5cbiAgICBlZGl0VGFza0Zvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlZGl0VGFza0Zvcm0ucmVzZXQoKTtcbn1cblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgZm9ybU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4pXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBjbG9zZSBmb3JtIG1vZGFsXG5cblxuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbW9kYWxcIik7XG5jbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBmb3JtTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNyZWF0ZVByb2plY3RGb3JtLnJlc2V0KClcbn0pXG5cbmNvbnN0IGNsb3NlRWRpdFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtZWRpdC1wcm9qZWN0LW1vZGFsXCIpO1xuY2xvc2VFZGl0UHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBlZGl0Rm9ybU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBlZGl0Rm9ybS5yZXNldCgpO1xufSlcblxuY29uc3QgY2xvc2VUYXNrRm9ybU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS10YXNrLWZvcm0tbW9kYWxcIik7XG5jbG9zZVRhc2tGb3JtTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIHRhc2tGb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbn0pXG5cbmNvbnN0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS10YXNrLW1vZGFsXCIpO1xuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIHRhc2tNb2RhbFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHRhc2tNb2RhbFNlY3Rpb24ucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xufSlcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwiYnV0dG9uXCJdJyk7XG5jcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiSURcIl0nKS52YWx1ZTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiVGl0bGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiRGVzY3JpcHRpb25cIl0nKS52YWx1ZTtcbiAgICAvL2NvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cIkRhdGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLnZhbHVlO1xuXG4gICAgY29uc3QgY2hlY2tJZCA9IG1hbmFnZXIuaGFuZGxlRmluZFByb2plY3QoaWQpO1xuICAgIFxuICAgIGlmIChjaGVja0lkKSB7XG4gICAgICAgIGFsZXJ0KFwiSUQgYWxyZWFkeSBleGlzdHMhIFBpY2sgYSBuZXcgb25lXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIklEIGV4aXN0c1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAoaWQgJiYgdGl0bGUpIHtcbiAgICAgICAgbWFuYWdlci5oYW5kbGVOZXdQcm9qZWN0Q3JlYXRpb24oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgc2VsZWN0KTtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhtYW5hZ2VyLmhhbmRsZUdldEFsbFByb2plY3RzKCkpXG4gICAgICAgIGNyZWF0ZVByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgICAgIGZvcm1Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIlNlY3Rpb25zIE1hcmtlZCB3aXRoIEFzdGVyaXNrIENhbid0IGJlIEVtcHR5XCIpO1xuICAgIH1cbn0pXG5cbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHByb2plY3Qgc2VjdGlvblxuXG5wcm9qZWN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+IHtcblxuICAgIC8vaWYgdGhlIGV2ZW50IHRhcmdldCBpcyB0aGUgYWRkIGZ1bmN0aW9uLCBnZXQgdGhlIHByb2plY3QgSUQgaXQgYmVsb25ncyB0b1xuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiYWRkXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG5cbiAgICAgICAgdGFza0Zvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybSA+IC5idXR0b24tY29udGFpbmVyID4gYnV0dG9uOmZpcnN0LW9mLXR5cGVcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBpbml0YWxpc2VoYW5kbGVUYXNrQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG1hbmFnZXIuaGFuZGxlRmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgICAgIGhhbmRsZUFkZFRhc2tCdXR0b25DbGljayhwcm9qZWN0KTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRhbGlzZWhhbmRsZVRhc2tCdXR0b24pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdGFsaXNlaGFuZGxlVGFza0J1dHRvbik7XG5cbiAgICAgICAgLy9zZXQgcHJvY2VzcyBmb3IgYWRkaW5nIHRhc2tzIG1hbmFnZXIuaGFuZGxlQWRkVGFzayhpZCwgKVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZVByb2plY3RSZW1vdmFsKHByb2plY3QsIHByb2plY3RJZCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImVkaXRcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsc1VJID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzVUlDaGlsZHJlbiA9IHByb2plY3REZXRhaWxzVUkuY2hpbGRyZW47XG5cbiAgICAgICAgZWRpdEZvcm1Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybS1zZWN0aW9uICNlZGl0LUlEXCIpO1xuICAgICAgICBlZGl0SW5wdXRJZC52YWx1ZSA9IHByb2plY3REZXRhaWxzVUlDaGlsZHJlblswXS50ZXh0Q29udGVudDtcbiAgICAgICAgZWRpdElucHV0SWQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm0tc2VjdGlvbiAjZWRpdC1UaXRsZVwiKTtcbiAgICAgICAgZWRpdElucHV0VGl0bGUudmFsdWUgPSBwcm9qZWN0RGV0YWlsc1VJQ2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybS1zZWN0aW9uICNlZGl0LURlc2NyaXB0aW9uXCIpO1xuICAgICAgICBlZGl0SW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IHByb2plY3REZXRhaWxzVUlDaGlsZHJlblsyXS50ZXh0Q29udGVudDtcblxuICAgICAgICBjb25zdCBlZGl0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm0tc2VjdGlvbiAjZWRpdC1DYXRlZ29yeVwiKTtcbiAgICAgICAgZWRpdFNlbGVjdC52YWx1ZSA9IHByb2plY3REZXRhaWxzVUlDaGlsZHJlblszXS50ZXh0Q29udGVudDtcblxuICAgICAgICBjb25zdCBlZGl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtLXNlY3Rpb24gYnV0dG9uXCIpO1xuICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRWRpdFByb2plY3RCdXR0b25DbGljayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInZpZXdcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG1hbmFnZXIuaGFuZGxlRmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgdGFza01vZGFsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlR2V0VGFza3MocHJvamVjdCk7ICAgICBcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrQnV0dG9uQ2xpY2socHJvamVjdCkge1xuXG4gICAgY29uc3QgdGFza0lucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzay1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWU7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRhc2stZm9ybSBpbnB1dFt0eXBlPVwiZGF0ZVwiXScpLnZhbHVlO1xuXG5cbiAgICBpZiAodGFza0lucHV0TmFtZSAmJiB0YXNrRHVlRGF0ZSkge1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZUFkZFRhc2socHJvamVjdCwgdGFza0lucHV0TmFtZSwgdGFza0R1ZURhdGUpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIkFsbCBUYXNrIElucHV0IEZpZWxkIE11c3QgQmUgRmlsbGVkXCIpO1xuICAgIH1cblxuICAgIHRhc2tGb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICBcbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3RCdXR0b25DbGljaygpIHtcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZWRpdC1JRFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJlZGl0LVRpdGxlXCJdJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImVkaXQtRGVzY3JpcHRpb25cIl0nKS52YWx1ZTtcbiAgICAvL2NvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cIkRhdGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbaWQ9XCJlZGl0LUNhdGVnb3J5XCJdJykudmFsdWU7XG5cbiAgICBpZiAodGl0bGUpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChpZCk7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlUHJvamVjdEVkaXQocHJvamVjdCwgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgc2VsZWN0KTtcblxuICAgICAgICBlZGl0Rm9ybU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1mb3JtXCIpO1xuICAgICAgICBlZGl0Rm9ybS5yZXNldCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJTZWN0aW9ucyBNYXJrZWQgd2l0aCBBc3RlcmlzayBDYW4ndCBiZSBFbXB0eVwiKTtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ29ycmVjdE5hdihzZWN0aW9uKSB7XG4gICAgLy8gZ2V0IG5hbWUgb2YgY3VycmVudCBzZWN0aW9uXG4gICAgY29uc3QgY3VyclNlY3Rpb24gPSBtYW5hZ2VyLmdldEN1cnJlbnRTZWN0aW9uKCk7IFxuXG4gICAgY29uc3QgY3Vyck5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uc0FycmF5LmZpbmQoKG5hdmlnYXRpb24pPT4gbmF2aWdhdGlvbi50ZXh0Q29udGVudCA9PT0gc2VjdGlvbik7XG4gICAgY29uc3QgcHJldlNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtc2VjdGlvblwiKTtcbiAgICBpZiAocHJldlNlY3Rpb24pIHtcbiAgICAgICAgcHJldlNlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW50LXNlY3Rpb25cIik7XG4gICAgfVxuICAgIGN1cnJOYXZpZ2F0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVudC1zZWN0aW9uXCIpO1xuICAgIG1hbmFnZXIuc2V0Q3VycmVudFNlY3Rpb24oY3Vyck5hdmlnYXRpb24udGV4dENvbnRlbnQpO1xufVxuXG5cbmhhbmRsZUNvcnJlY3ROYXYoXCJBTExcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=