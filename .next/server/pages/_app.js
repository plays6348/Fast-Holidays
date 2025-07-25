module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	__webpack_require__.p = "/_next/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "01I4":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Facebook");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0HQ6":
/***/ (function(module, exports) {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./context/appContext.js

const AppContext = /*#__PURE__*/external_react_default.a.createContext();
/* harmony default export */ var appContext = (AppContext);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./components/layout.js + 4 modules
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// EXTERNAL MODULE: ./styles/theme.js
var theme = __webpack_require__("NVT0");

// EXTERNAL MODULE: external "react-gtm-module"
var external_react_gtm_module_ = __webpack_require__("hI02");
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_);

// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  const {
    0: state,
    1: setstate
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    external_react_gtm_module_default.a.initialize({
      gtmId: 'GTM-N5P3RPG'
    }); // Tawk.to Script

    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/67c6b55dbda626190db7a4a7/1ilg38tgt';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["ThemeProvider"], {
    theme: theme["a" /* theme */],
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(appContext.Provider, {
      value: state,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "1kpQ":
/***/ (function(module, exports) {

module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ "2JGS":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Help");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "9/qt":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer_footer__2I8Xl",
	"footer__contactUs": "footer_footer__contactUs__2hovQ",
	"footer__contact_grid": "footer_footer__contact_grid__1IFnx",
	"footer__links": "footer_footer__links__14ysS",
	"logo": "footer_logo__gJjTt",
	"footer__logo": "footer_footer__logo__2OtaJ",
	"followUs": "footer_followUs__1cu4t",
	"followUs__links": "footer_followUs__links__1M0hE",
	"tiktok__link": "footer_tiktok__link__SFZYV"
};


/***/ }),

/***/ "98FW":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "AShN":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__3ViEy",
	"link": "header_link__2g61F",
	"logoContainer": "header_logoContainer__22QzE",
	"logo": "header_logo__1F2A6",
	"logoLinks": "header_logoLinks__1IjvC",
	"mobileheadernumber": "header_mobileheadernumber__3N55A",
	"logInBtn": "header_logInBtn__2VS0z",
	"dvdr": "header_dvdr__1zUv2",
	"simpleLink": "header_simpleLink__X1PFB",
	"highlightedLink": "header_highlightedLink__1DI4i",
	"headerTop": "header_headerTop__1hpIf",
	"menuIconContainer": "header_menuIconContainer__2JI9M",
	"divider": "header_divider__3ICgG",
	"numberContainer": "header_numberContainer__13SyB",
	"number": "header_number__YC7Im",
	"header_images": "header_header_images__TdN5d"
};


/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "ByeH":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Flight");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");

// EXTERNAL MODULE: ./styles/components/header.module.css
var header_module = __webpack_require__("AShN");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__("wyBh");

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__("yZmr");

// EXTERNAL MODULE: ./styles/theme.js
var theme = __webpack_require__("NVT0");

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__("0HQ6");

// EXTERNAL MODULE: external "@mui/icons-material/Close"
var Close_ = __webpack_require__("SOQo");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__("x5Hn");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@mui/icons-material/Phone"
var Phone_ = __webpack_require__("ImLx");
var Phone_default = /*#__PURE__*/__webpack_require__.n(Phone_);

// CONCATENATED MODULE: ./components/header.js














const muiStyles = {
  text: {
    color: '#01a22e',
    whiteSpace: 'noWrap'
  },
  clickable: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: '#01a22e',
    fontSize: '13px'
  },
  icon: {
    fontSize: '20px',
    opacity: '0.4'
  },
  menuIcon: {
    color: 'white',
    fontSize: '35px' // marginRight: "30px",

  },
  logoLink: {
    fontSize: '1.1rem'
  },
  number: {
    fontWeight: 'bold'
  }
};
function Header({
  onMenuClick,
  clicked,
  onConnectClick
}) {
  const router = Object(router_["useRouter"])();
  const [anchorEl, setAnchorEl] = external_react_default.a.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
    className: header_module_default.a.header,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
      theme: theme["a" /* theme */],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: header_module_default.a.headerTop,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: header_module_default.a.logoContainer,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: header_module_default.a.logo,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "/logo.png",
                  alt: "Fast Travels' logo",
                  style: {
                    width: '80%'
                  }
                })
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: header_module_default.a.mobileheadernumber,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Phone_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: `tel:${constants["h" /* number */]}`,
              children: constants["h" /* number */]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: header_module_default.a.header_images,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "./atol.png",
              alt: "atol"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "./iata.png",
              alt: "atol"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: header_module_default.a.dvdr,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {
              sx: {
                height: '40px',
                backgroundColor: 'white',
                opacity: '0.5'
              },
              orientation: "vertical"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: header_module_default.a.logoLinks,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: router.pathname == '/' ? header_module_default.a.highlightedLink : header_module_default.a.simpleLink,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                  sx: muiStyles.logoLink,
                  children: "Home"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/destinations",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: router.pathname.includes('/destinations') ? header_module_default.a.highlightedLink : header_module_default.a.simpleLink,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                  sx: muiStyles.logoLink,
                  children: "Destinations"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/flights",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: router.pathname.includes('/flights') ? header_module_default.a.highlightedLink : header_module_default.a.simpleLink,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                  sx: muiStyles.logoLink,
                  children: "Flights"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/holidays",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: router.pathname.includes('/holidays') ? header_module_default.a.highlightedLink : header_module_default.a.simpleLink,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                  sx: muiStyles.logoLink,
                  children: "Holidays"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/airlines",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: router.pathname.includes('/airlines') ? header_module_default.a.highlightedLink : header_module_default.a.simpleLink,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                  sx: muiStyles.logoLink,
                  children: "Airlines"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/visa-service",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: router.pathname.includes('/visa-service') ? header_module_default.a.highlightedLink : header_module_default.a.simpleLink,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                  sx: muiStyles.logoLink,
                  children: "Visa Services"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/send-inquiry",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: router.pathname.includes('/send-inquiry') ? header_module_default.a.highlightedLink : header_module_default.a.simpleLink,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                  sx: muiStyles.logoLink,
                  children: "Send Inquiry"
                })
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: header_module_default.a.simpleLink,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                onClick: handleClick,
                sx: muiStyles.logoLink,
                children: "More"
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: header_module_default.a.menuIconContainer,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["IconButton"], {
            onClick: () => onMenuClick(),
            color: "primary",
            children: !clicked ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu_default.a, {
              sx: muiStyles.menuIcon
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Close_default.a, {
              sx: muiStyles.menuIcon
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `tel:${constants["h" /* number */]}`,
          className: header_module_default.a.numberContainer,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: header_module_default.a.number,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Phone_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
              sx: muiStyles.number,
              children: constants["h" /* number */]
            })]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["Menu"], {
        id: "demo-positioned-menu",
        "aria-labelledby": "demo-positioned-button",
        anchorEl: anchorEl,
        open: open,
        onClose: handleClose,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/beat-my-quote",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["MenuItem"], {
            onClick: handleClose,
            children: "Beat My Quote"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/contact-us",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["MenuItem"], {
            onClick: handleClose,
            children: "Contact Us"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/privacy-policy",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["MenuItem"], {
            onClick: handleClose,
            children: "Privacy Policy"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/booking-conditions",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["MenuItem"], {
            onClick: handleClose,
            children: "Booking Conditions"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/terms-conditions",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["MenuItem"], {
            onClick: handleClose,
            children: "Terms & Conditions"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/faqs",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["MenuItem"], {
            onClick: handleClose,
            children: "FAQs"
          })
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./styles/components/footer.module.css
var footer_module = __webpack_require__("9/qt");
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);

// EXTERNAL MODULE: external "@mui/icons-material/Facebook"
var Facebook_ = __webpack_require__("01I4");
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);

// EXTERNAL MODULE: external "@mui/icons-material/Instagram"
var Instagram_ = __webpack_require__("RcIx");
var Instagram_default = /*#__PURE__*/__webpack_require__.n(Instagram_);

// EXTERNAL MODULE: external "@mui/icons-material/YouTube"
var YouTube_ = __webpack_require__("J6lO");

// EXTERNAL MODULE: external "@mui/icons-material/Twitter"
var Twitter_ = __webpack_require__("acVP");
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);

// EXTERNAL MODULE: external "@mui/icons-material/LocationOn"
var LocationOn_ = __webpack_require__("D6MM");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: external "@mui/icons-material/LocalPhone"
var LocalPhone_ = __webpack_require__("U/Gh");
var LocalPhone_default = /*#__PURE__*/__webpack_require__.n(LocalPhone_);

// EXTERNAL MODULE: external "@mui/icons-material/Email"
var Email_ = __webpack_require__("ZLke");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_);

// CONCATENATED MODULE: ./components/footer.js














const footer_muiStyles = {
  copyright: {
    whiteSpace: 'nowrap',
    // opacity: '0.5',
    marginLeft: '2rem'
  },
  footer__link: {
    // opacity: '0.8',
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
    '&:hover': {// opacity: '1',
    }
  }
};
function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: footer_module_default.a.footer,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: footer_module_default.a.footer__logo,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: footer_module_default.a.logo,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/logo.png",
          alt: "app logo",
          style: {
            width: '100%'
          }
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["Typography"], {
        variant: "body2",
        sx: footer_muiStyles.copyright,
        children: ["\xA9 ", constants["c" /* appName */]]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: footer_module_default.a.footer__contactUs,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: footer_module_default.a.footer__contact_grid,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LocalPhone_default.a, {
          sx: footer_muiStyles.footer__link
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `tel:${constants["h" /* number */]}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
            children: constants["h" /* number */]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: footer_module_default.a.footer__contact_grid,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Email_default.a, {
          sx: footer_muiStyles.footer__link
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `mailto:${constants["e" /* email */]}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
            children: constants["e" /* email */]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: footer_module_default.a.footer__contact_grid,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Email_default.a, {
          sx: footer_muiStyles.footer__link
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `mailto:${constants["d" /* bookingEmail */]}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
            children: constants["d" /* bookingEmail */]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: footer_module_default.a.footer__contact_grid,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationOn_default.a, {
          sx: footer_muiStyles.footer__link
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: ``,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
            children: constants["a" /* address */]
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: footer_module_default.a.footer__contact_grid,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["For any complaints, please call", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "tel:020 3650 7866",
            style: {
              fontWeight: 'bold'
            },
            children: "020 3650 7866"
          }), ". Our support team is ready to assist you."]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: footer_module_default.a.footer__links,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "body1",
          sx: footer_muiStyles.footer__link,
          children: constants["c" /* appName */]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/contact-us",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "body2",
          sx: footer_muiStyles.footer__link,
          children: "Contact us"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/privacy-policy",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "body2",
          sx: footer_muiStyles.footer__link,
          children: "Privacy Policy"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/booking-conditions",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "body2",
          sx: footer_muiStyles.footer__link,
          children: "Booking Conditions"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/terms-conditions",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "body2",
          sx: footer_muiStyles.footer__link,
          children: "Terms & Conditions"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/faqs",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "body2",
          sx: footer_muiStyles.footer__link,
          children: "FAQs"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: footer_module_default.a.followUs,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
        children: "Follow Us"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: footer_module_default.a.followUs__links,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: constants["f" /* fbLink */],
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Facebook_default.a, {
            sx: footer_muiStyles.footer__link
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: constants["i" /* twitterLink */],
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Twitter_default.a, {
            sx: footer_muiStyles.footer__link
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: constants["g" /* instagramLink */],
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Instagram_default.a, {
            sx: footer_muiStyles.footer__link
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: footer_module_default.a.footer__contact_grid,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["For Complaints Please Fill the Form", " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "https://docs.google.com/forms/d/11ThuhWo4jJ8Rik7HYabq64ajAqs4b1jcQcJQgV1WkDc/viewform?pli=1%5D&pli=1%5D&edit_requested=true",
            style: {
              fontWeight: 'bold'
            },
            children: "(Open Form)"
          })]
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: ./styles/components/layout.module.css
var layout_module = __webpack_require__("KA5q");
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);

// EXTERNAL MODULE: external "@mui/icons-material/ExpandMore"
var ExpandMore_ = __webpack_require__("c+zK");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: external "@mui/icons-material/ArrowForwardIosSharp"
var ArrowForwardIosSharp_ = __webpack_require__("LZg0");
var ArrowForwardIosSharp_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIosSharp_);

// EXTERNAL MODULE: external "@mui/material/Accordion"
var Accordion_ = __webpack_require__("pIoF");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);

// EXTERNAL MODULE: external "@mui/material/AccordionSummary"
var AccordionSummary_ = __webpack_require__("HEkh");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);

// EXTERNAL MODULE: external "@mui/material/AccordionDetails"
var AccordionDetails_ = __webpack_require__("1kpQ");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);

// EXTERNAL MODULE: external "@mui/icons-material/Home"
var Home_ = __webpack_require__("L4yX");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "@mui/icons-material/WhatsApp"
var WhatsApp_ = __webpack_require__("Euio");
var WhatsApp_default = /*#__PURE__*/__webpack_require__.n(WhatsApp_);

// EXTERNAL MODULE: external "@mui/icons-material/Call"
var Call_ = __webpack_require__("WL4M");
var Call_default = /*#__PURE__*/__webpack_require__.n(Call_);

// CONCATENATED MODULE: ./utils/cookies.js
const setCookie = (key, value) => {
  window.document.cookie = key + '=' + value + ';' + 'expires=0'; // console.log(key, value);
};
function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function removeCookie(name) {
  // console.log("removed");
  document.cookie = name + '=0; expires=Thu, 01 Jan 1800 00:00:00 UTC;';
}
// EXTERNAL MODULE: ./styles/components/common/dialog.module.css
var dialog_module = __webpack_require__("G6ir");
var dialog_module_default = /*#__PURE__*/__webpack_require__.n(dialog_module);

// CONCATENATED MODULE: ./components/common/dialog.js












const dialog_muiStyles = {
  avatar: {
    width: '70px',
    height: '70px'
  },
  button: {// padding: "0.2rem",
    // border: '1px solid black'
  }
};

function DialogComponent() {
  const {
    0: showDialog,
    1: setShowDialog
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    const showedCount = localStorage.getItem('showCount');

    if (!showedCount) {
      setTimeout(() => {
        setShowDialog(true);
        localStorage.setItem('showCount', 1);
      }, 2000);
    } else if (showedCount == 1) {
      setTimeout(() => {
        setShowDialog(true);
        localStorage.setItem('showCount', 1);
      }, 1000);
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Dialog"], {
    open: showDialog,
    keepMounted: true,
    onClose: () => setShowDialog(false),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: dialog_module_default.a.dialogContainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: dialog_module_default.a.cancelBtn,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["IconButton"], {
          onClick: () => setShowDialog(false),
          sx: dialog_muiStyles.button,
          variant: "outlined",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Close_default.a, {
            sx: {
              color: 'black'
            }
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: dialog_module_default.a.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "h3",
          children: "Get 45% Off"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "h4",
          children: "on Call Only Deals!"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
          variant: "h5",
          children: "Avail Early Bird Discount!"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `tel:${constants["h" /* number */]}`,
          className: dialog_module_default.a.dialog__numberContainer,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["Button"], {
            variant: "outlined",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Phone_default.a, {}), constants["h" /* number */]]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: `https://wa.me/${constants["j" /* whatsapp */]}`,
          target: "_blank",
          rel: "noreferrer",
          className: dialog_module_default.a.dialog__numberContainer,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["Button"], {
            variant: "outlined",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(WhatsApp_default.a, {}), constants["j" /* whatsapp */]]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/send-inquiry",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Button"], {
            variant: "contained",
            children: "Send Inquiry"
          })
        })]
      })]
    })
  });
}

/* harmony default export */ var dialog = (DialogComponent);
// EXTERNAL MODULE: external "@mui/icons-material/ContactSupport"
var ContactSupport_ = __webpack_require__("s7Oc");
var ContactSupport_default = /*#__PURE__*/__webpack_require__.n(ContactSupport_);

// EXTERNAL MODULE: external "@mui/icons-material/Policy"
var Policy_ = __webpack_require__("iI69");
var Policy_default = /*#__PURE__*/__webpack_require__.n(Policy_);

// EXTERNAL MODULE: external "@mui/icons-material/Gavel"
var Gavel_ = __webpack_require__("G9xY");
var Gavel_default = /*#__PURE__*/__webpack_require__.n(Gavel_);

// EXTERNAL MODULE: external "@mui/icons-material/Help"
var Help_ = __webpack_require__("2JGS");
var Help_default = /*#__PURE__*/__webpack_require__.n(Help_);

// EXTERNAL MODULE: external "@mui/icons-material/QuestionAnswer"
var QuestionAnswer_ = __webpack_require__("X5At");
var QuestionAnswer_default = /*#__PURE__*/__webpack_require__.n(QuestionAnswer_);

// EXTERNAL MODULE: external "@mui/icons-material/AddLocationAlt"
var AddLocationAlt_ = __webpack_require__("hdtj");
var AddLocationAlt_default = /*#__PURE__*/__webpack_require__.n(AddLocationAlt_);

// EXTERNAL MODULE: external "@mui/icons-material/Airlines"
var Airlines_ = __webpack_require__("e/zF");
var Airlines_default = /*#__PURE__*/__webpack_require__.n(Airlines_);

// EXTERNAL MODULE: external "@mui/icons-material/Send"
var Send_ = __webpack_require__("N17z");
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);

// EXTERNAL MODULE: external "@mui/icons-material/RequestQuote"
var RequestQuote_ = __webpack_require__("rNrn");
var RequestQuote_default = /*#__PURE__*/__webpack_require__.n(RequestQuote_);

// EXTERNAL MODULE: external "@mui/icons-material/Flight"
var Flight_ = __webpack_require__("ByeH");
var Flight_default = /*#__PURE__*/__webpack_require__.n(Flight_);

// EXTERNAL MODULE: external "@mui/icons-material/HolidayVillage"
var HolidayVillage_ = __webpack_require__("W2iA");
var HolidayVillage_default = /*#__PURE__*/__webpack_require__.n(HolidayVillage_);

// EXTERNAL MODULE: external "@mui/icons-material/Public"
var Public_ = __webpack_require__("rLKd");
var Public_default = /*#__PURE__*/__webpack_require__.n(Public_);

// CONCATENATED MODULE: ./components/layout.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




































const drawerWidth = 280;
const layout_muiStyles = {
  avatar: {
    width: '5rem',
    height: '5rem'
  },
  closeBtn: {
    padding: '5px 0',
    width: '20px'
  }
};
function Layout({
  title,
  keywords,
  author,
  description,
  children,
  addProductJson,
  window,
  robots,
  ogTitle,
  ogType,
  ogDescription,
  ogImage,
  ogSiteName
}) {
  const router = Object(router_["useRouter"])();
  const {
    0: showSideBar,
    1: setShowSideBar
  } = Object(external_react_["useState"])(false);
  const {
    0: showDialog,
    1: setShowDialog
  } = Object(external_react_["useState"])(false);

  const handleSideBar = () => {
    setShowSideBar(!showSideBar); // console.log(showSideBar);
  };

  const drawer = /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: layout_module_default.a.drawer,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
      theme: theme["a" /* theme */],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: layout_module_default.a.drawerLinks,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["List"], {
          sx: {
            padding: 0,
            marginTop: '5px'
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/' ? false : true,
              sx: router.pathname == '/' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Home_default.a, {
                  sx: router.pathname == '/' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Home"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/destinations",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/destinations' ? false : true,
              sx: router.pathname == '/destinations' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AddLocationAlt_default.a, {
                  sx: router.pathname == '/destinations' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Destinations"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/flights",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/flights' ? false : true,
              sx: router.pathname == '/flights' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Flight_default.a, {
                  sx: router.pathname == '/flights' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Flights"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/holidays",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/holidays' ? false : true,
              sx: router.pathname == '/holidays' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HolidayVillage_default.a, {
                  sx: router.pathname == '/holidays' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Holidays"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/airlines",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/airlines' ? false : true,
              sx: router.pathname == '/airlines' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Airlines_default.a, {
                  sx: router.pathname == '/airlines' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Airlines"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/visa-service",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/visa-service' ? false : true,
              sx: router.pathname == '/visa-service' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Public_default.a, {
                  sx: router.pathname == '/visa-service' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Visa Service"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/send-inquiry",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/send-inquiry' ? false : true,
              sx: router.pathname == '/send-inquiry' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Send_default.a, {
                  sx: router.pathname == '/send-inquiry' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Send Inquiry"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/beat-my-quote",
            className: layout_module_default.a.link,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
              button: router.pathname == '/beat-my-quote' ? false : true,
              sx: router.pathname == '/beat-my-quote' ? {
                backgroundColor: '#cc1817',
                cursor: 'pointer',
                color: 'white'
              } : {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(RequestQuote_default.a, {
                  sx: router.pathname == '/beat-my-quote' ? {
                    color: 'white'
                  } : {
                    color: '#cc1817'
                  }
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                className: layout_module_default.a.listItemText,
                children: "Beat My Quote"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Accordion, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AccordionSummary, {
              expandIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExpandMore_default.a, {}),
              "aria-controls": "panel1a-content",
              id: "panel1a-header",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Typography"], {
                children: "More"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AccordionDetails, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["List"], {
                sx: {
                  padding: 0,
                  marginTop: '0'
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: `/contact-us`,
                  className: layout_module_default.a.link,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
                    button: router.pathname == '/contact-us' ? false : true,
                    sx: router.pathname == '/contact-us' ? {
                      backgroundColor: '#cc1817',
                      cursor: 'pointer',
                      color: 'white'
                    } : {
                      cursor: 'pointer'
                    },
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactSupport_default.a, {
                        sx: router.pathname == '/contact-us' ? {
                          color: 'white'
                        } : {
                          color: '#cc1817'
                        }
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                      className: layout_module_default.a.listItemText,
                      children: "Contact us"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: `/privacy-policy`,
                  className: layout_module_default.a.link,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
                    button: router.pathname == '/privacy-policy' ? false : true,
                    sx: router.pathname == '/privacy-policy' ? {
                      backgroundColor: '#cc1817',
                      cursor: 'pointer',
                      color: 'white'
                    } : {
                      cursor: 'pointer'
                    },
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Policy_default.a, {
                        sx: router.pathname == '/privacy-policy' ? {
                          color: 'white'
                        } : {
                          color: '#cc1817'
                        }
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                      className: layout_module_default.a.listItemText,
                      children: "Privacy Policy"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: `/booking-conditions`,
                  className: layout_module_default.a.link,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
                    button: router.pathname == '/booking-conditions' ? false : true,
                    sx: router.pathname == '/booking-conditions' ? {
                      backgroundColor: '#cc1817',
                      cursor: 'pointer',
                      color: 'white'
                    } : {
                      cursor: 'pointer'
                    },
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Gavel_default.a, {
                        sx: router.pathname == '/booking-conditions' ? {
                          color: 'white'
                        } : {
                          color: '#cc1817'
                        }
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                      className: layout_module_default.a.listItemText,
                      children: "Booking Conditions"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: `/terms-conditions`,
                  className: layout_module_default.a.link,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
                    button: router.pathname == '/terms-conditions' ? false : true,
                    sx: router.pathname == '/terms-conditions' ? {
                      backgroundColor: '#cc1817',
                      cursor: 'pointer',
                      color: 'white'
                    } : {
                      cursor: 'pointer'
                    },
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Help_default.a, {
                        sx: router.pathname == '/terms-conditions' ? {
                          color: 'white'
                        } : {
                          color: '#cc1817'
                        }
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                      className: layout_module_default.a.listItemText,
                      children: "Terms & Conditions"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: `/faqs`,
                  className: layout_module_default.a.link,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(material_["ListItem"], {
                    button: router.pathname == '/faqs' ? false : true,
                    sx: router.pathname == '/faqs' ? {
                      backgroundColor: '#cc1817',
                      cursor: 'pointer',
                      color: 'white'
                    } : {
                      cursor: 'pointer'
                    },
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemIcon"], {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(QuestionAnswer_default.a, {
                        sx: router.pathname == '/faqs' ? {
                          color: 'white'
                        } : {
                          color: '#cc1817'
                        }
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["ListItemText"], {
                      className: layout_module_default.a.listItemText,
                      children: "FAQs"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Divider"], {})]
              })
            })]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {})]
    })
  }); // useEffect(() => {
  //   setCookie('showCount', 0);
  //   const showedCount = getCookie('showCount');
  //   if (showedCount == 0) {
  //     setShowDialog(true);
  //     setCookie('showCount', 1);
  //   } else if (showedCount == 1 || showedCount == 2) {
  //     setTimeout(() => {
  //       setShowDialog(true);
  //       setCookie('showCount', 2);
  //     }, 4000);
  //   }
  // }, []);


  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'TravelAgency',
    name: 'Fast Holidays',
    description: 'Fast Holidays is a travel agency that offers affordable and convenient travel packages.',
    url: 'https://https://fastholidays.org/',
    logo: 'https://https://fastholidays.org/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ' 71-75 Shelton St ',
      addressLocality: 'London',
      postalCode: ' WC2H 9JQ',
      addressCountry: 'UK'
    },
    telephone: '+44-20-37441171',
    email: 'info@fastholidays.org',
    sameAs: ['https://www.facebook.com/fastholidays', 'https://twitter.com/fastholidays', 'https://www.instagram.com/fastholidays']
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/jsx_runtime_["jsx"]("link", {
        rel: "shortcut icon",
        href: "",
        type: "image/x-icon"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: title
      }), robots && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "robots",
        content: robots
      }), keywords && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "keywords",
        content: keywords
      }), description && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: description
      }), author && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "author",
        content: author
      }), ogTitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:title",
        content: ogTitle
      }), ogType && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:type",
        content: ogType
      }), ogDescription && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:description",
        content: ogDescription
      }), ogImage && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:image",
        content: ogImage
      }), ogSiteName && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:site_name",
        content: ogSiteName
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(schemaData)
        }
      }, "product-jsonld")]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {
      onMenuClick: handleSideBar,
      clicked: showSideBar
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Box"], {
      className: "drawer",
      component: "nav",
      sx: {
        width: {
          sm: drawerWidth
        },
        flexShrink: {
          sm: 0
        }
      },
      "aria-label": "mailbox folders",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Drawer"], {
        container: container,
        variant: "temporary",
        open: showSideBar,
        anchor: "right",
        onClose: handleSideBar,
        ModalProps: {
          keepMounted: true
        },
        sx: {
          display: {
            xs: 'block',
            sm: 'block',
            md: 'block',
            lg: 'none'
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            background: 'white'
          }
        },
        children: drawer
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(material_["Box"], {
      component: layout_module_default.a.main,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: layout_module_default.a.child,
        children: children
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: layout_module_default.a.fabContainer,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: `https://wa.me/${constants["j" /* whatsapp */]}`,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: layout_module_default.a.fab1 // onClick={() => handleSideBar(!showSideBar)}
          ,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(WhatsApp_default.a, {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: `tel:${constants["h" /* number */]}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: layout_module_default.a.fab2 // onClick={() => handleSideBar(!showSideBar)}
          ,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Call_default.a, {}), constants["h" /* number */]]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(dialog, {})]
  });
}
Layout.defaultProps = {
  title: 'Fast Holidays',
  description: '',
  keywords: ''
};
const Accordion = Object(styles_["styled"])(props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Accordion_default.a, _objectSpread({
  disableGutters: true,
  elevation: 0,
  square: true
}, props)))(({
  theme
}) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));
const AccordionSummary = Object(styles_["styled"])(props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(AccordionSummary_default.a, _objectSpread({
  expandIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArrowForwardIosSharp_default.a, {
    sx: {
      fontSize: '0.9rem'
    }
  })
}, props)))(({
  theme
}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(4)
  }
}));
const AccordionDetails = Object(styles_["styled"])(AccordionDetails_default.a)(({
  theme
}) => ({
  padding: theme.spacing(0),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  marginTop: 0
}));

/***/ }),

/***/ "D6MM":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/LocationOn");

/***/ }),

/***/ "Euio":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/WhatsApp");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "G6ir":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dialogContainer": "dialog_dialogContainer__wrOur",
	"cancelBtn": "dialog_cancelBtn__3_UJF",
	"content": "dialog_content__tSG4y",
	"dialog__numberContainer": "dialog_dialog__numberContainer__2SqJm"
};


/***/ }),

/***/ "G9xY":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Gavel");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "HEkh":
/***/ (function(module, exports) {

module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ "ImLx":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Phone");

/***/ }),

/***/ "J6lO":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/YouTube");

/***/ }),

/***/ "KA5q":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sideBarHeader": "layout_sideBarHeader__X6S_H",
	"drawer": "layout_drawer__7r1DM",
	"drawerLinks": "layout_drawerLinks__28DdP",
	"fab1": "layout_fab1__1r4L2",
	"fab2": "layout_fab2__3gNNj"
};


/***/ }),

/***/ "Kps4":
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "L4yX":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ "LZg0":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/ArrowForwardIosSharp");

/***/ }),

/***/ "N17z":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Send");

/***/ }),

/***/ "NVT0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0HQ6");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({
  palette: {
    primary: {
      main: '#cc1817',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff'
    }
  },
  typography: {}
});

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RcIx":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ "SOQo":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Close");

/***/ }),

/***/ "U/Gh":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/LocalPhone");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "W2iA":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/HolidayVillage");

/***/ }),

/***/ "WL4M":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Call");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "X5At":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/QuestionAnswer");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZLke":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Email");

/***/ }),

/***/ "acVP":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Twitter");

/***/ }),

/***/ "c+zK":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (false) {} else {
    child = _react.Children.only(children);
  }

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image/","loader":"imgix"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "e/zF":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Airlines");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hI02":
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hdtj":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/AddLocationAlt");

/***/ }),

/***/ "iI69":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Policy");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pIoF":
/***/ (function(module, exports) {

module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ "rLKd":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Public");

/***/ }),

/***/ "rNrn":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/RequestQuote");

/***/ }),

/***/ "s7Oc":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/ContactSupport");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wyBh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return whatsapp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return bookingEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fbLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return twitterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return instagramLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appLink; });
const number = '020 3650 7866';
const whatsapp = '+447476959202';
const appName = 'Fast Holidays';
const email = 'info@fastholidays.org';
const bookingEmail = 'booking@fastholidays.org';
const address = 'London, United Kingdom';
const fbLink = 'https://www.facebook.com/fastholidays';
const twitterLink = 'https://twitter.com/Fast_Holidays';
const instagramLink = 'https://www.instagram.com/fastholidaysofficial/';
const appLink = 'https://fastholidays.org';

/***/ }),

/***/ "x5Hn":
/***/ (function(module, exports) {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yZmr":
/***/ (function(module, exports) {

module.exports = require("@mui/material");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });