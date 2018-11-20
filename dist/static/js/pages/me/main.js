global.webpackJsonp([1],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Me__ = __webpack_require__(128);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Me__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c8dafed_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c8dafed"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Me_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7c8dafed_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Me_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\me\\Me.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Me.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c8dafed", Component.options)
  } else {
    hotAPI.reload("data-v-7c8dafed", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_wafer2_client_sdk__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_wafer2_client_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_wafer2_client_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_YearProgress__ = __webpack_require__(139);



//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Me',
  components: {
    YearProgress: __WEBPACK_IMPORTED_MODULE_6__components_YearProgress__["a" /* default */]
  },
  data: function data() {
    return {
      userInfo: {
        avatarUrl: __webpack_require__(143),
        nickName: '未登录'
      },
      visible: false,
      sesstion: ''
    };
  },

  methods: {
    login: function login() {
      var vm = this;
      __WEBPACK_IMPORTED_MODULE_4_wafer2_client_sdk___default.a.setLoginUrl(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].login);
      __WEBPACK_IMPORTED_MODULE_4_wafer2_client_sdk___default.a.login({
        success: function success(userInfo) {
          __WEBPACK_IMPORTED_MODULE_4_wafer2_client_sdk___default.a.request({
            url: __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].user,
            login: true,
            success: function success(res) {
              Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Toast */])('登录成功', 'success', 2000);
              wx.setStorageSync('userInfo', res.data.data);
              vm.userInfo = res.data.data;
            }
          });
        },
        fail: function fail(err) {
          console.log('登录失败', err);
          Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* Toast */])('登录失败', 'none', 2000);
        }
      });
    },
    addBook: function addBook(isbn) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('isbn', isbn);
                _context.prev = 1;
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__util__["b" /* request */])('/weapp/addbook', 'POST', {
                  isbn: isbn,
                  openId: _this.userInfo.openId
                });

              case 4:
                res = _context.sent;

                console.log(res);
                if (res.title) {
                  Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* showModal */])('添加成功', res.title + '\u6DFB\u52A0\u6210\u529F');
                }
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](1);

                Object(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* showModal */])('失败', _context.t0.data.msg);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 9]]);
      }))();
    },
    scanBook: function scanBook() {
      var _this2 = this;

      // 扫描条形码
      console.log('添加图书');
      wx.scanCode({
        onlyFromCamera: true,
        success: function success(res) {
          // console.log(res)
          if (res.result) {
            _this2.addBook(res.result);
          }
        }
      });
    }
  },
  created: function created() {
    this.session = __WEBPACK_IMPORTED_MODULE_4_wafer2_client_sdk___default.a.Session.get();
    var userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.userInfo = userInfo;
    } else {
      this.visible = true;
    }
  },

  watch: {
    userInfo: function userInfo() {
      if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.userInfo).length === 0) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }
  },
  session: function session() {
    console.log('session', this.session);
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7250076c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__ = __webpack_require__(142);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7250076c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_YearProgress_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7250076c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_YearProgress_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\YearProgress.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] YearProgress.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7250076c", Component.options)
  } else {
    hotAPI.reload("data-v-7250076c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'YearProgress',
  computed: {
    isLeadYear: function isLeadYear() {
      // 判断闰年
      var today = new Date();
      if (today % 400 === 0) {
        return true;
      } else if (today % 4 === 0 && today % 100 !== 0) {
        return true;
      } else {
        return false;
      }
    },
    getDaysofYear: function getDaysofYear() {
      // 得到今年的天数
      return this.isLeadYear ? 366 : 365;
    },
    getRestDays: function getRestDays() {
      // 得到今年剩下的天数
      return this.getDaysofYear - this.days;
    },
    getPercent: function getPercent() {
      // 得到百分比
      return (this.days / this.getDaysofYear * 100).toFixed(1);
    },
    year: function year() {
      // 得到年数
      return new Date().getFullYear();
    },
    days: function days() {
      // 得到今年已经过去的天数
      var start = new Date();
      // 今年第一天
      start.setMonth(0);
      start.setDate(1);
      // 现在的时间戳-今年的第一天的时间戳
      var offset = new Date().getTime() - start.getTime();
      return parseInt(offset / (1000 * 3600 * 24) + 1);
    },
    notice: function notice() {
      if (this.getPercent < 25 && this.getPercent >= 0) {
        return '不要以为一年才开始，不到四分之一，就懈怠，读书吧！';
      } else if (this.getPercent >= 25 && this.getPercent < 50) {
        return '现在已经过了四分之一，赶紧读书吧！';
      } else if (this.getPercent >= 50 && this.getPercent < 75) {
        return '今年已经过了一半了，还在等什么，抓紧读书吧！';
      } else {
        return '今年没剩下多少天了，冲刺吧！超额完成读书计划。';
      }
    }
  }
});

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "year-progress"
  }, [_c('progress', {
    attrs: {
      "percent": _vm.getPercent,
      "activeColor": "#EA5A49",
      "active": "true",
      "show-info": "true"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "progress-word"
  }, [_vm._v(_vm._s(_vm.year) + "年已经过去了" + _vm._s(_vm.days) + "天，" + _vm._s(_vm.getPercent) + "%，还剩" + _vm._s(_vm.getRestDays) + "天")]), _vm._v(" "), _c('p', {
    staticClass: "notice"
  }, [_vm._v("温馨提示："), _c('span', {
    staticStyle: {
      "color": "#aaa"
    }
  }, [_vm._v(_vm._s(_vm.notice))])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7250076c", esExports)
  }
}

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "me"
  }, [_c('div', {
    staticClass: "user-info"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "alt": ""
    }
  }), _vm._v(" "), (_vm.visible) ? _c('button', {
    staticClass: "login",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("\n      " + _vm._s(_vm.session ? '获取用户信息' : '点击登录') + "\n    ")]) : _c('p', {
    staticClass: "nickname"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))])], 1), _vm._v(" "), _c('YearProgress', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.userInfo.openId) ? _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.scanBook
    }
  }, [_vm._v("添加图书")]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c8dafed", esExports)
  }
}

/***/ })

},[127]);
//# sourceMappingURL=main.js.map