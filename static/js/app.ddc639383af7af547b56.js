webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  "data-v-31b45c5c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(57)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(66),
  /* scopeId */
  "data-v-7a10144e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onify;
function onify(element) {
  'use strict'

  if (element.on) return false

  let root = new Proxy(element, ProxyHandler())
  element.on = root
  return true

  function ProxyHandler(namespace = []) {
    let $handlers = {}
    let $namespaces = {}
    return { 
      get(el, prop) {
        let space = namespace.reduce((p,c)=>p[c], root)
        
        // Provide a function to remove all event handlers
        if (prop === `clear`) {
          return function clearNamespace(handlers = Object.keys($handlers)) {

            if (typeof handlers === `string`) handlers = [handlers]

            Object.keys($namespaces).forEach(namespace=>{
              $namespaces[namespace].clear(handlers)
            })

            handlers.forEach(name=>{
              let handler = $handlers[name]
            
              el.removeEventListener(name, handler)
            })
          }
        }

        if (prop === `$handlers`) {
          return $handlers
        }

        // Return the Proxy in the desired namespace and make it if needed
        if (!$namespaces[prop]) {
          $namespaces[prop] = new Proxy(el, ProxyHandler(namespace.concat(prop))) 
        }
        return $namespaces[prop]
      },

      set(el, prop, value) {
        let space = namespace.reduce((p,c)=>p[c], root)

        // Clear handler if setting to falsy
        if (!prop) {
          el.removeEventListener(prop, space.$handlers[prop])
          delete space.$handlers[prop]
          return true
        }

        // Only one handler of each event type per namespace
        if (space.$handlers[prop]) {
          el.removeEventListener(prop, space.$handlers[prop])
        }

        el.addEventListener(prop, value)

        space.$handlers[prop] = value
        return true
      }

    }
  }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Contact__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Contact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Contact__);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home___default.a
  }, {
    path: '/contact',
    name: __WEBPACK_IMPORTED_MODULE_3__components_Contact___default.a,
    component: __WEBPACK_IMPORTED_MODULE_3__components_Contact___default.a
  }]
}));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drag__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__follow__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__drag__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__follow__["a"]; });



/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__drag__["a" /* default */]);



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_dragon__ = __webpack_require__(16);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].directive('drag', __WEBPACK_IMPORTED_MODULE_3_vue_dragon__["a" /* drag */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].directive('follow', __WEBPACK_IMPORTED_MODULE_3_vue_dragon__["b" /* follow */]);

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Showcase_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Showcase_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Showcase_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__My_header_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__My_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__My_header_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  components: {
    MyHeader: __WEBPACK_IMPORTED_MODULE_1__My_header_vue___default.a,
    Showcase: __WEBPACK_IMPORTED_MODULE_0__Showcase_vue___default.a
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Showcase_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Showcase_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Showcase_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__My_header_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__My_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__My_header_vue__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hello',
  components: {
    MyHeader: __WEBPACK_IMPORTED_MODULE_1__My_header_vue___default.a,
    Showcase: __WEBPACK_IMPORTED_MODULE_0__Showcase_vue___default.a
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MyHeader'
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShowcaseCard__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShowcaseCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ShowcaseCard__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'showcase',
  components: {
    ShowcaseCard: __WEBPACK_IMPORTED_MODULE_0__ShowcaseCard___default.a
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      isUp: false
    };
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'showcase-card',
  props: ['color', 'links', 'dragging'],
  data: function data() {
    return {
      up: false,
      droppedColor: ''
    };
  },

  methods: {
    upHandler: function upHandler(e) {
      this.up = true;
      this.$emit('up', e);
    },
    downHandler: function downHandler(e) {
      this.up = false;
      this.$emit('down', e);
    },
    dropHandler: function dropHandler(e) {
      this.droppedColor = e.detail.value;
    }
  },
  computed: {
    styleObject: function styleObject() {
      var baseObject = { background: this.color };
      if (!this.up) return baseObject;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        'border-radius': '5em',
        'z-index': '5',
        opacity: 0.2
      }, baseObject);
    },
    detailStyleObject: function detailStyleObject() {
      if (this.droppedColor) {
        return {
          background: this.droppedColor
        };
      }
    },
    translucentColor: function translucentColor() {
      return this.color.replace(/,[^,]*\)$/, ',0.6)');
    }
  }
});

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  "data-v-1cc83bb8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(58)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  "data-v-e842c7ea",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  "data-v-21674489",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('My-header'), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "centerContent"
  }, [_c('div', {
    staticClass: "me"
  }, [_c('img', {
    staticClass: "meImg",
    attrs: {
      "src": "/static/me.jpg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('label', [_vm._v("E-Mail")]), _c('span', [_vm._v("justinstonecontact@gmail.com")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', [_vm._v("GitHub")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://github.com/Ntropish"
    }
  }, [_vm._v("ntropish")])])])
}]}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "drag",
      rawName: "v-drag",
      value: (_vm.translucentColor),
      expression: "translucentColor"
    }, {
      name: "follow",
      rawName: "v-follow"
    }],
    staticClass: "showcaseCard invert-text",
    style: (_vm.styleObject),
    on: {
      "up": _vm.upHandler,
      "down": _vm.downHandler,
      "drop": _vm.dropHandler
    }
  }, [(!_vm.up) ? _vm._t("default") : _vm._e(), _vm._v(" "), (!_vm.up) ? _c('div', {
    staticClass: "details default-background normal-text",
    style: (_vm.detailStyleObject)
  }, [_vm._t("description"), _vm._v(" "), _c('div', {
    staticClass: "links",
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      }
    }
  }, _vm._l((_vm.links), function(href, name) {
    return _c('a', {
      attrs: {
        "href": href
      }
    }, [_vm._v(_vm._s(name))])
  })), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [(_vm.dragging) ? _c('div', {
    staticClass: "dropMessage"
  }, [_vm._v("\n        Drop it here!\n      ")]) : _vm._e()])], 2) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('nav', [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Contact")])], 1), _vm._v(" "), _c('header', [_c('h1', [_vm._t("default")], 2)])])
},staticRenderFns: []}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "showcase"
  }, [_c('showcase-card', {
    attrs: {
      "dragging": _vm.isUp,
      "color": "hsla(160, 60%, 40%, 0.8)",
      "links": {
        Github: 'https://github.com/Ntropish/vue-dragon',
        'npm': 'https://www.npmjs.com/package/vue-dragon'
      }
    },
    on: {
      "up": function($event) {
        _vm.isUp = true
      },
      "down": function($event) {
        _vm.isUp = false
      }
    }
  }, [_vm._v("\n  vue-dragon\n    "), _c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("A vue directive for drag and drop. Try it out on these cards!")]), _vm._v(" "), _c('p', [_vm._v("This directive makes it easy to send expressions\n      from one component to another.")])])]), _vm._v(" "), _c('showcase-card', {
    attrs: {
      "dragging": _vm.isUp,
      "color": "hsla(200, 50%, 20%, 0.8)",
      "links": {
        Github: 'https://github.com/Ntropish/vue-studio'
      }
    },
    on: {
      "up": function($event) {
        _vm.isUp = true
      },
      "down": function($event) {
        _vm.isUp = false
      }
    }
  }, [_vm._v("\n    vue-studio\n    "), _c('div', {
    slot: "description"
  }, [_vm._v("\n      An electon app for building Vue projects. It's still a work in progress\n      but feel free to check out the repo.\n    ")])]), _vm._v(" "), _c('showcase-card', {
    attrs: {
      "dragging": _vm.isUp,
      "color": "hsla(0, 60%, 40%, 0.8)",
      "links": {
        Github: 'https://github.com/Ntropish/onify',
        npm: 'https://www.npmjs.com/package/onify'
      }
    },
    on: {
      "up": function($event) {
        _vm.isUp = true
      },
      "down": function($event) {
        _vm.isUp = false
      }
    }
  }, [_vm._v("\n    onify\n    "), _c('div', {
    slot: "description"
  }, [_c('p', [_vm._v("\n        An npm package for making event handling easy.\n      ")]), _vm._v(" "), _c('p', [_vm._v("\n        Check out the fancy API that's possible with Proxies!\n      ")])])])], 1)
},staticRenderFns: []}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "home"
  }, [_c('My-header', [_vm._v("Justin Stone")]), _vm._v(" "), _c('section', {
    staticClass: "centerContent"
  }, [_vm._m(0), _vm._v(" "), _c('showcase')], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "aboutMe"
  }, [_c('p', [_vm._v("Hi, I'm a web developer. I like JavaScript and building applications.")]), _vm._v(" "), _c('p', [_vm._v("Here are some recent things I've done:")])])
}]}

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_onify__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_throttle_debounce_throttle__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_throttle_debounce_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_throttle_debounce_throttle__);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_onify__["a" /* default */])(document)

let draggables = 0
/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding) {
    let id = draggables++
    el.dataset.dragId = id

    // Flag to block last mousemove from firing
    let isUp = false

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_onify__["a" /* default */])(el)
    el.on.mousedown = downHandler

    function downHandler(e) {
      isUp = true
      e.stopPropagation()
      document.on[id].mousemove = __WEBPACK_IMPORTED_MODULE_1_throttle_debounce_throttle___default()(15, moveHandler)
      // document.on[id].mouseover = mouseOverHandler
      document.on[id].mouseout  = mouseOutHandler
      document.on[id].mouseup = upHandler


      // Kill default drag and drop
      e.preventDefault()
      el.dispatchEvent(new CustomEvent('up', {detail: e, bubbles: true, cancelable: true}))
    }

    function moveHandler(e) {
      if (!isUp) return
      el.dispatchEvent(new CustomEvent('drag', {detail: e, bubbles: true, cancelable: true}))
      e.target.dispatchEvent(new CustomEvent('dragover', {detail: {value: binding.value, e}, bubbles: true, cancelable: true}))
    }

    function mouseOutHandler(e) {
      e.target.dispatchEvent(new CustomEvent('dragout', {detail: binding.value, bubbles: true, cancelable: true}))
    }

    function upHandler(e) {
      isUp = false
      document.on[id].mouseup = null
      document.on[id].mousemove = null
      document.on[id].mouseover = null
      document.on[id].mouseout = null
      e.target.dispatchEvent(new CustomEvent('drop', {detail: {value: binding.value, e, el}, bubbles: true, cancelable: true}))
      el.dispatchEvent(new CustomEvent('down', {detail: e, bubbles: true, cancelable: true}))
    }
  },

  unbind(el, binding) {
    el.on.clear()
    document.on[el.dataset.dragId].clear()
  }
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_onify__ = __webpack_require__(13);


let usedStyles = [
  'top',
  'left',
  'position',
  'pointer-events'
]

/* harmony default export */ __webpack_exports__["a"] = ({
  bind(el, binding, {context}) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_onify__["a" /* default */])(el)
    el.on.follow.up   = upHandler
    el.on.follow.down = downHandler
    el.on.follow.drag = dragHandler

    let savedStyles = {}
    let baseTop = 0
    let baseLeft = 0

    function upHandler(e) {
      e.stopPropagation()
      baseTop = e.detail.clientY
      baseLeft = e.detail.clientX

      usedStyles.forEach(function(style) {
        savedStyles[style] = el.style[style]
      })

      el.style.position = 'relative'
      el.style.top = 0
      el.style.left = 0
      el.style['pointer-events'] = 'none'
    }

    function dragHandler(e) {
      e.stopPropagation()
      el.style.top = e.detail.clientY - baseTop + 'px'
      el.style.left = e.detail.clientX - baseLeft + 'px'
    }

    function downHandler(e) {
      e.stopPropagation()
      baseTop = 0
      baseLeft = 0

      usedStyles.forEach(function(style) {
        el.style[style] = savedStyles[style] || null
        delete savedStyles[style]
      })
    }
  },

  unbind(el, binding, {context: {_uid: id}}) {
    el.on.follow.clear()
  }
});


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
module.exports = function ( delay, noTrailing, callback, debounceMode ) {

	// After wrapper has stopped being called, this timeout ensures that
	// `callback` is executed at the proper times in `throttle` and `end`
	// debounce modes.
	var timeoutID;

	// Keep track of the last time `callback` was executed.
	var lastExec = 0;

	// `noTrailing` defaults to falsy.
	if ( typeof noTrailing !== 'boolean' ) {
		debounceMode = callback;
		callback = noTrailing;
		noTrailing = undefined;
	}

	// The `wrapper` function encapsulates all of the throttling / debouncing
	// functionality and when executed will limit the rate at which `callback`
	// is executed.
	function wrapper () {

		var self = this;
		var elapsed = Number(new Date()) - lastExec;
		var args = arguments;

		// Execute `callback` and update the `lastExec` timestamp.
		function exec () {
			lastExec = Number(new Date());
			callback.apply(self, args);
		}

		// If `debounceMode` is true (at begin) this is used to clear the flag
		// to allow future `callback` executions.
		function clear () {
			timeoutID = undefined;
		}

		if ( debounceMode && !timeoutID ) {
			// Since `wrapper` is being called for the first time and
			// `debounceMode` is true (at begin), execute `callback`.
			exec();
		}

		// Clear any existing timeout.
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}

		if ( debounceMode === undefined && elapsed > delay ) {
			// In throttle mode, if `delay` time has been exceeded, execute
			// `callback`.
			exec();

		} else if ( noTrailing !== true ) {
			// In trailing throttle mode, since `delay` time has not been
			// exceeded, schedule `callback` to execute `delay` ms after most
			// recent execution.
			//
			// If `debounceMode` is true (at begin), schedule `clear` to execute
			// after `delay` ms.
			//
			// If `debounceMode` is false (at end), schedule `callback` to
			// execute after `delay` ms.
			timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
		}

	}

	// Return the wrapper function.
	return wrapper;

};


/***/ })
],[17]);
//# sourceMappingURL=app.ddc639383af7af547b56.js.map