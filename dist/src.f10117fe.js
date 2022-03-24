// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/lib/widgets/Wrapper.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Wrapper = function Wrapper(props) {
  return __assign({
    tag: "div"
  }, props);
};

exports.default = Wrapper;
},{}],"src/lib/widgets/Button.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Button = function Button(props) {
  return __assign({
    tag: "button"
  }, props);
};

exports.default = Button;
},{}],"src/lib/components/carousel/CarouselControl.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Button_1 = __importDefault(require("../../../lib/widgets/Button"));

var style = function style(props) {
  var _a;

  return _a = {
    position: "absolute",
    width: "75px",
    height: "100%",
    background: "rgba(0, 0, 0, 0.9)",
    fontWeight: "bold",
    fontSize: "32px",
    color: "white",
    border: "0",
    borderRadius: "5px"
  }, _a[props.left ? "left" : "right"] = "0", _a.top = "0", _a;
};

var CarouselControl = function CarouselControl(props) {
  return (0, Button_1.default)({
    text: props.left ? "<" : ">",
    style: style(props),
    events: {
      click: function click() {
        var _a;

        var carousel = document.getElementById(props.carousel);
        var children = carousel.children;
        var active = (_a = carousel.getAttribute("active")) !== null && _a !== void 0 ? _a : "";
        var newActive = props.left ? +active - 1 : +active + 1;
        if (newActive < 0 || newActive >= children.length) return;
        children[newActive].scrollIntoView({
          block: "end",
          behavior: "smooth"
        });
        carousel.setAttribute("active", "" + newActive);
      }
    }
  });
};

exports.default = CarouselControl;
},{"../../../lib/widgets/Button":"src/lib/widgets/Button.ts"}],"src/lib/components/carousel/CarouselItems.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Wrapper_1 = __importDefault(require("../../../lib/widgets/Wrapper"));

var style = function style(props) {
  return {
    display: "flex",
    width: props.items.length * 100 + "vw"
  };
};

var CarouselItems = function CarouselItems(props) {
  return (0, Wrapper_1.default)({
    children: props.items.map(props.CarouselItem),
    style: style(props),
    attr: {
      id: props.id,
      active: "0"
    }
  });
};

exports.default = CarouselItems;
},{"../../../lib/widgets/Wrapper":"src/lib/widgets/Wrapper.ts"}],"src/lib/components/carousel/Carousel.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Wrapper_1 = __importDefault(require("../../../lib/widgets/Wrapper"));

var CarouselControl_1 = __importDefault(require("./CarouselControl"));

var CarouselItems_1 = __importDefault(require("./CarouselItems"));

var style = {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "100%",
  width: "100%"
};

var Carousel = function Carousel(props) {
  return (0, Wrapper_1.default)({
    children: [(0, CarouselControl_1.default)({
      left: true,
      carousel: props.id
    }), (0, CarouselItems_1.default)(props), (0, CarouselControl_1.default)({
      left: false,
      carousel: props.id
    })],
    style: style
  });
};

exports.default = Carousel;
},{"../../../lib/widgets/Wrapper":"src/lib/widgets/Wrapper.ts","./CarouselControl":"src/lib/components/carousel/CarouselControl.ts","./CarouselItems":"src/lib/components/carousel/CarouselItems.ts"}],"src/lib/widgets/Layout.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Layout = function Layout(props) {
  return __assign(__assign({}, props), {
    tag: "div",
    style: __assign({
      display: !props.path || window.location.hash === "#" + props.path ? "" : "none"
    }, props.style)
  });
};

exports.default = Layout;
},{}],"src/app/layout/HomePage.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Carousel_1 = __importDefault(require("../../lib/components/carousel/Carousel"));

var Layout_1 = __importDefault(require("../../lib/widgets/Layout"));

var Wrapper_1 = __importDefault(require("../../lib/widgets/Wrapper"));

var style = {
  page: {
    color: "white",
    background: "linear-gradient(133deg, rgba(0,89,150,1) 0%, rgba(115,0,204,1) 100%, rgba(17,0,75,1) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    overflow: "hidden"
  },
  title: {
    fontSize: "54px",
    position: "absolute",
    top: "0"
  }
};

var getLocale = function getLocale() {
  return "" || "ar";
};

var HomePage = function HomePage(props) {
  return (0, Layout_1.default)({
    children: [(0, Wrapper_1.default)({
      children: [
      /*Title({
        text: props.title(getLocale()),
        style: style.title
      }),*/
      (0, Carousel_1.default)(props.carousel(getLocale()))],
      style: style.page
    })]
  });
};

exports.default = HomePage;
},{"../../lib/components/carousel/Carousel":"src/lib/components/carousel/Carousel.ts","../../lib/widgets/Layout":"src/lib/widgets/Layout.ts","../../lib/widgets/Wrapper":"src/lib/widgets/Wrapper.ts"}],"src/lib/Widget.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Widget = function Widget(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;

  var widget = document.createElement(props.tag);
  var children = (_a = props.children) === null || _a === void 0 ? void 0 : _a.map(Widget);
  (_c = Object.entries((_b = props.attr) !== null && _b !== void 0 ? _b : {})) === null || _c === void 0 ? void 0 : _c.forEach(function (_a) {
    var key = _a[0],
        value = _a[1];
    return widget.setAttribute(key, value);
  });
  (_e = Object.entries((_d = props.style) !== null && _d !== void 0 ? _d : {})) === null || _e === void 0 ? void 0 : _e.forEach(function (_a) {
    var key = _a[0],
        value = _a[1];
    return widget.style[key] = value;
  });
  (_g = Object.entries((_f = props.events) !== null && _f !== void 0 ? _f : {})) === null || _g === void 0 ? void 0 : _g.forEach(function (_a) {
    var event = _a[0],
        listener = _a[1];
    return widget.addEventListener(event, listener);
  });
  widget.textContent = (_h = props.text) !== null && _h !== void 0 ? _h : null;
  children === null || children === void 0 ? void 0 : children.forEach(function (child) {
    return widget.append(child);
  });
  return widget;
};

exports.default = Widget;
},{}],"src/app/App.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HomePage_1 = __importDefault(require("./layout/HomePage"));

var Widget_1 = __importDefault(require("../lib/Widget"));

var App = function App(props) {
  return (0, Widget_1.default)({
    tag: "div",
    children: [(0, HomePage_1.default)(props.home)]
  });
};

exports.default = App;
},{"./layout/HomePage":"src/app/layout/HomePage.ts","../lib/Widget":"src/lib/Widget.ts"}],"src/lib/widgets/Text.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Text = function Text(props) {
  return __assign({
    tag: "p"
  }, props);
};

exports.default = Text;
},{}],"src/app/helpers/DateHelper.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var DateHelper =
/** @class */
function () {
  function DateHelper() {}

  DateHelper.calculateDifference = function (dateTo) {
    var now = new Date();
    var time = (dateTo.getTime() - now.getTime() + 1000) / 1000;
    var seconds = ("0" + Math.floor(time % 60)).slice(-2);
    var minutes = ("0" + Math.floor(time / 60 % 60)).slice(-2);
    var hours = ("0" + Math.floor(time / 3600 % 24)).slice(-2);
    var days = Math.floor(time / (3600 * 24));
    return {
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days,
      time: time
    };
  };

  DateHelper.getDateFromProps = function (props) {
    return new Date(new Date().getFullYear(), props.date.month - 1, props.date.day);
  };

  DateHelper.getDifferenceDays = function (props) {
    return DateHelper.calculateDifference(DateHelper.getDateFromProps(props)).days + 1;
  };

  DateHelper.getDateWording = function (props) {
    return DateHelper.getDateFromProps(props).toLocaleDateString("es-AR", DateHelper.getDateOptions);
  };

  DateHelper.getDateWordingFormatted = function (props) {
    var wording = DateHelper.getDateWording(props);
    return "" + wording[0].toUpperCase() + wording.substring(1);
  };

  DateHelper.getDateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric"
  };
  DateHelper.Wordings = {
    getRemaining: function getRemaining(props) {
      return "Faltan " + DateHelper.getDifferenceDays(props) + " d\xEDas";
    },
    getDate: function getDate(props) {
      return DateHelper.getDateWordingFormatted(props);
    },
    getName: function getName(props) {
      return props.name;
    }
  };

  DateHelper.isNext = function (props) {
    return DateHelper.getDateFromProps(props).getTime() > Date.now();
  };

  return DateHelper;
}();

exports.default = DateHelper;
},{}],"src/app/components/date/DateWrapper.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Text_1 = __importDefault(require("../../../lib/widgets/Text"));

var Wrapper_1 = __importDefault(require("../../../lib/widgets/Wrapper"));

var DateHelper_1 = __importDefault(require("../../helpers/DateHelper"));

var style = {
  wrapper: {
    textAlign: "center",
    width: "100vw",
    padding: "0px 150px",
    textShadow: "#000 3px 2px 5px"
  },
  date: {
    fontSize: "60px"
  },
  name: {
    fontSize: "40px",
    fontWeight: "bold"
  },
  remaining: {
    fontSize: "75px",
    fontWeight: "bold"
  }
};

var DateWrapper = function DateWrapper(props) {
  return (0, Wrapper_1.default)({
    children: [(0, Text_1.default)({
      text: DateHelper_1.default.Wordings.getRemaining(props),
      style: style.remaining
    }), (0, Text_1.default)({
      text: DateHelper_1.default.Wordings.getDate(props),
      style: style.date
    }), (0, Text_1.default)({
      text: DateHelper_1.default.Wordings.getName(props),
      style: style.name
    })],
    style: style.wrapper
  });
};

exports.default = DateWrapper;
},{"../../../lib/widgets/Text":"src/lib/widgets/Text.ts","../../../lib/widgets/Wrapper":"src/lib/widgets/Wrapper.ts","../../helpers/DateHelper":"src/app/helpers/DateHelper.ts"}],"src/app/data/holidays.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var holidays = {
  ar: [{
    date: {
      month: 3,
      day: 24
    },
    lang: "es",
    name: "Día Nacional de la Memoria por la Verdad y la Justicia"
  }, {
    date: {
      month: 4,
      day: 2
    },
    lang: "es",
    name: "Día del Veterano y de los Caídos en la Guerra de Malvinas"
  }, {
    date: {
      month: 4,
      day: 14
    },
    lang: "es",
    name: "Jueves Santo"
  }, {
    date: {
      month: 4,
      day: 15
    },
    lang: "es",
    name: "Viernes Santo"
  }, {
    date: {
      month: 5,
      day: 1
    },
    lang: "es",
    name: "Día del Trabajador"
  }, {
    date: {
      month: 5,
      day: 18
    },
    lang: "es",
    name: "Censo nacional 2022"
  }, {
    date: {
      month: 5,
      day: 25
    },
    lang: "es",
    name: "Día de la Revolución de Mayo"
  }, {
    date: {
      month: 6,
      day: 17
    },
    lang: "es",
    name: "Paso a la Inmortalidad del Gral. Don Martín Miguel de Güemes"
  }, {
    date: {
      month: 6,
      day: 20
    },
    lang: "es",
    name: "Paso a la Inmortalidad del Gral. Manuel Belgrano"
  }, {
    date: {
      month: 7,
      day: 9
    },
    lang: "es",
    name: "Día de la Independencia"
  }, {
    date: {
      month: 8,
      day: 15
    },
    lang: "es",
    name: "Paso a la Inmortalidad del Gral. José de San Martín"
  }, {
    date: {
      month: 10,
      day: 7
    },
    lang: "es",
    name: "Feriado con fines turísticos"
  }, {
    date: {
      month: 10,
      day: 10
    },
    lang: "es",
    name: "Día del Respeto a la Diversidad Cultural "
  }, {
    date: {
      month: 11,
      day: 21
    },
    lang: "es",
    name: "Día de la Soberanía Nacional"
  }, {
    date: {
      month: 12,
      day: 8
    },
    lang: "es",
    name: "Inmaculada Concepción de María"
  }, {
    date: {
      month: 12,
      day: 9
    },
    lang: "es",
    name: "Feriado con fines turísticos"
  }, {
    date: {
      month: 12,
      day: 25
    },
    lang: "es",
    name: "Navidad"
  }]
};
exports.default = holidays;
},{}],"src/app/data/app-data.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var DateWrapper_1 = __importDefault(require("../components/date/DateWrapper"));

var DateHelper_1 = __importDefault(require("../helpers/DateHelper"));

var holidays_1 = __importDefault(require("./holidays"));

var getTitle = function getTitle(locale) {
  return {
    ar: "Feriados"
  }[locale];
};

var getCarousel = function getCarousel(locale) {
  return {
    id: "dates",
    CarouselItem: DateWrapper_1.default,
    items: holidays_1.default[locale].filter(DateHelper_1.default.isNext)
  };
};

var homePage = {
  title: getTitle,
  carousel: getCarousel
};
var data = {
  home: homePage
};
exports.default = data;
},{"../components/date/DateWrapper":"src/app/components/date/DateWrapper.ts","../helpers/DateHelper":"src/app/helpers/DateHelper.ts","./holidays":"src/app/data/holidays.ts"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var App_1 = __importDefault(require("./app/App"));

var app_data_1 = __importDefault(require("./app/data/app-data"));

require("./styles.css");

var render = function render(component, targetId) {
  var target = document.getElementById(targetId);
  target === null || target === void 0 ? void 0 : target.append(component);
};

render((0, App_1.default)(app_data_1.default), "app");
},{"./app/App":"src/app/App.ts","./app/data/app-data":"src/app/data/app-data.ts","./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52665" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map