global.webpackJsonp([4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Comments__ = __webpack_require__(109);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Comments__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    backgroundColor: '#dadada',
    navigationBarTitleText: '评论列表'
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Comments_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5d7108de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Comments_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d7108de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Comments_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5d7108de_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Comments_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\comments\\Comments.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Comments.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d7108de", Component.options)
  } else {
    hotAPI.reload("data-v-5d7108de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CommentList__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Card__ = __webpack_require__(47);


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
  name: 'Comments',
  data: function data() {
    return {
      comments: [],
      userInfo: {},
      bookList: [],
      current: 0
    };
  },

  components: {
    CommentList: __WEBPACK_IMPORTED_MODULE_3__components_CommentList__["a" /* default */],
    Card: __WEBPACK_IMPORTED_MODULE_4__components_Card__["a" /* default */]
  },
  methods: {
    init: function init() {
      wx.showNavigationBarLoading();
      this.getComments();
      this.getBooks();
      wx.hideNavigationBarLoading();
    },

    // 获取用户的所有的评论列表
    getComments: function getComments() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var comments;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/commentlist', 'GET', {
                  openId: _this.userInfo.openId
                });

              case 2:
                comments = _context.sent;

                _this.comments = comments.commentList || [];

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getBooks: function getBooks() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var books;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/booklist', 'GET', {
                  openId: _this2.userInfo.openId
                });

              case 2:
                books = _context2.sent;

                _this2.bookList = books.bookList || [];

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    ChangeTab: function ChangeTab(current) {
      this.current = current;
    },
    getUserInfo: function getUserInfo() {
      var userInfo = wx.getStorageSync('userInfo');
      if (userInfo) {
        this.userInfo = userInfo;
      }
    }
  },
  created: function created() {
    this.getUserInfo();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.init();
    // this.getUserInfo()
    wx.stopPullDownRefresh();
  },
  onShow: function onShow() {
    this.getUserInfo();
    this.init();
  }
});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comments"
  }, [_c('div', {
    staticClass: "control-box"
  }, [_c('div', {
    staticClass: "control-item left",
    class: _vm.current === 0 ? 'active' : '',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.ChangeTab(0)
      }
    }
  }, [_vm._v("\n      我的评论\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "control-item right",
    class: _vm.current === 1 ? 'active' : '',
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.ChangeTab(1)
      }
    }
  }, [_vm._v("\n      我的图书\n    ")])]), _vm._v(" "), (_vm.userInfo.openId) ? _c('div', {
    staticStyle: {
      "position": "relative",
      "height": "200px"
    }
  }, [(_vm.current === 0) ? _c('CommentList', {
    attrs: {
      "type": "user",
      "commentList": _vm.comments,
      "color": true,
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.current === 1) ? _c('div', [_c('div', {
    staticClass: "page-title"
  }, [_vm._v("\n        我的图书\n      ")]), _vm._v(" "), _vm._l((_vm.bookList), function(book, index) {
    return _c('Card', {
      key: book.id,
      attrs: {
        "book": book,
        "mpcomid": '1-' + index
      }
    })
  }), _vm._v(" "), (_vm.bookList.length === 0) ? _c('div', {
    staticClass: "notice"
  }, [_vm._v("还没有添加过图书，快去添加吧！")]) : _vm._e()], 2) : _vm._e()], 1) : _c('div', {
    staticClass: "notice",
    staticStyle: {
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    }
  }, [_c('div', {
    staticClass: "sorry"
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#ea5a49",
      "margin-left": "20px"
    }
  }, [_vm._v("很抱歉!您还没有登录")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d7108de", esExports)
  }
}

/***/ })

},[108]);
//# sourceMappingURL=main.js.map