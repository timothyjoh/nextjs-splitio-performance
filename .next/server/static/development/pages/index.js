module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/SplitProvider.js":
/*!*************************************!*\
  !*** ./components/SplitProvider.js ***!
  \*************************************/
/*! exports provided: anonymousCookie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anonymousCookie", function() { return anonymousCookie; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_splitio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-splitio */ "react-splitio");
/* harmony import */ var react_splitio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_splitio__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ "nanoid");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/timothyjohnson/wrk/leafly/nextjs-splitio-performance/components/SplitProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ANON_COOKIE_KEY = "leafly_anon";
const anonymousCookie = ctx => {
  let anon = nookies__WEBPACK_IMPORTED_MODULE_2___default.a.get(ctx)[ANON_COOKIE_KEY];

  if (!anon) {
    anon = nanoid__WEBPACK_IMPORTED_MODULE_3___default()();
    nookies__WEBPACK_IMPORTED_MODULE_2___default.a.set(ctx, ANON_COOKIE_KEY, anon, {
      maxAge: 60 * 24 * 60 * 60,
      path: "/",
      sameSite: "strict"
    });
  }

  return anon;
};

const NewSplitProvider = ({
  trafficType,
  splitKey,
  children
}) => {
  const config = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    core: {
      authorizationKey: 'js604eki2au6d26oetgbj33jfi1t3i3dh4ov',
      trafficType,
      labelsEnabled: true
    },
    startup: {
      requestTimeoutBeforeReady: 800,
      // 800ms
      retriesOnFailureBeforeReady: 5,
      // 1 sec
      readyTimeout: 1.5,
      // 1.5 sec
      eventsFirstPushWindow: 10 // 10 sec

    },
    scheduler: {
      featuresRefreshRate: 30,
      // 30 sec
      segmentsRefreshRate: 60,
      // 60 sec
      metricsRefreshRate: 60,
      // 60 sec
      impressionsRefreshRate: 60,
      // 60 sec
      eventsPushRate: 15,
      // 60 sec
      eventsQueueSize: 500 // 500 items

    }
  }), [trafficType]);
  return __jsx(react_splitio__WEBPACK_IMPORTED_MODULE_1__["SplitProvider"], {
    config: config,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(react_splitio__WEBPACK_IMPORTED_MODULE_1__["SplitClient"], {
    splitKey: splitKey || anonymousCookie(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (NewSplitProvider);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_splitio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-splitio */ "react-splitio");
/* harmony import */ var react_splitio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_splitio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SplitProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SplitProvider */ "./components/SplitProvider.js");
var _jsxFileName = "/Users/timothyjohnson/wrk/leafly/nextjs-splitio-performance/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-5682176",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "5682176",
      __self: this
    }, "h1.jsx-5682176{font-family:'Helvetica Neue',Helvetica,sans-serif;font-size:25em;margin:0px;padding:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1vdGh5am9obnNvbi93cmsvbGVhZmx5L25leHRqcy1zcGxpdGlvLXBlcmZvcm1hbmNlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdTLEFBR2lFLGtEQUNyQyxlQUNKLFdBQWEsWUFDMUIiLCJmaWxlIjoiL1VzZXJzL3RpbW90aHlqb2huc29uL3dyay9sZWFmbHkvbmV4dGpzLXNwbGl0aW8tcGVyZm9ybWFuY2UvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3BsaXQgfSBmcm9tIFwicmVhY3Qtc3BsaXRpb1wiO1xuaW1wb3J0IFNwbGl0UHJvdmlkZXIsIHtcbiAgYW5vbnltb3VzQ29va2llXG59IGZyb20gXCIuLi9jb21wb25lbnRzL1NwbGl0UHJvdmlkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4OyBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8aDE+Q29udHJvbDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/timothyjohnson/wrk/leafly/nextjs-splitio-performance/pages/index.js */"), __jsx("h1", {
      className: "jsx-5682176",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Control"));
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timothyjohnson/wrk/leafly/nextjs-splitio-performance/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nanoid");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-splitio":
/*!********************************!*\
  !*** external "react-splitio" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-splitio");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map