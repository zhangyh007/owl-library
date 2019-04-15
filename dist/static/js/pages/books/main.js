global.webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6465e82a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6465e82a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_TopSwiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6465e82a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_TopSwiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\TopSwiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TopSwiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6465e82a", Component.options)
  } else {
    hotAPI.reload("data-v-6465e82a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
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
  name: 'TopSwiper',
  props: {
    topList: {
      type: Array,
      required: true
    }
  },
  methods: {
    goDetail: function goDetail(id) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + id
      });
    }
  },
  computed: {
    imgChunk: function imgChunk() {
      // console.log(lodash.chunk(this.topList, 3))
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.chunk(this.topList, 3);
    }
  }
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": "true",
      "indicator-active-color": "#EA5149",
      "autoplay": "true",
      "interval": "3000",
      "duration": "500",
      "circular": "true"
    }
  }, _vm._l((_vm.imgChunk), function(top, imgIndex) {
    return _c('div', {
      key: imgIndex
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + imgIndex
      }
    }, _vm._l((top), function(img, index) {
      return _c('img', {
        key: img.id,
        staticClass: "slide-image",
        attrs: {
          "mode": "aspectFit",
          "src": img.image,
          "alt": img.title,
          "eventid": '0-' + imgIndex + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.goDetail(img.id)
          }
        }
      })
    }))], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6465e82a", esExports)
  }
}

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "books"
  }, [_c('div', {
    staticClass: "search-box"
  }, [_c('div', {
    staticClass: "search-input"
  }, [_c('div', {
    staticClass: "search-icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchKeyword),
      expression: "searchKeyword"
    }],
    staticClass: "search",
    attrs: {
      "type": "text",
      "confirm-type": "search",
      "placeholder": "请输入要搜索的图书名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.searchKeyword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.searchKeyword = $event.target.value
      }, _vm.searchBook]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "search-word",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.cancelSearch
    }
  }, [_vm._v(_vm._s(_vm.searchKeyword ? '取消' : ''))])]), _vm._v(" "), (_vm.searchKeyword) ? _c('div', {
    staticClass: "searchList"
  }, [_vm._l((_vm.searchBookList), function(book, index) {
    return _c('div', {
      key: book.id,
      staticClass: "book-item",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.goDetail(book.id)
        }
      }
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": book.image,
        "mode": "aspectFit"
      }
    }), _vm._v(" "), _c('span', {
      staticStyle: {
        "color": "#ea5a49",
        "word-wrap": "break-word",
        "white-space": "pre-wrap"
      }
    }, [_vm._v(_vm._s(book.title))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "white-space": "nowrap"
      }
    }, [_vm._v(_vm._s(book.author))])])
  }), _vm._v(" "), (_vm.searchBookList.length === 0) ? _c('div', {
    staticClass: "text"
  }, [_vm._v("没有找到您要的图书")]) : _vm._e()], 2) : _vm._e()]), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100rpx"
    }
  }), _vm._v(" "), _c('TopSwiper', {
    attrs: {
      "topList": _vm.topList,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._l((_vm.books), function(item, index) {
    return _c('Card', {
      key: item.id,
      attrs: {
        "book": item,
        "mpcomid": '1-' + index
      }
    })
  }), _vm._v(" "), (_vm.books.length === 0) ? _c('p', {
    staticClass: "footer-text"
  }, [_vm._v("\n    还没有图书，赶紧添加吧！\n  ")]) : _vm._e(), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loadmore),
      expression: "!loadmore"
    }],
    staticClass: "loadmore-text footer-text"
  }, [_c('span', {
    staticClass: "line-bottom"
  }, [_c('span', {
    staticStyle: {
      "border-bottom": "1rpx solid #f0f0f0"
    }
  }), _vm._v(" "), _c('span')]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin": "0 10px"
    }
  }, [_vm._v("数据全部加载")]), _vm._v(" "), _c('span', {
    staticClass: "line-bottom"
  }, [_c('span', {
    staticStyle: {
      "border-bottom": "1rpx solid #f0f0f0"
    }
  }), _vm._v(" "), _c('span')])])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3632ce34", esExports)
  }
}

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Books__ = __webpack_require__(92);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Books__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    backgroundColor: '#dadada'
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Books_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3632ce34_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Books_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3632ce34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Books_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3632ce34_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Books_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\books\\Books.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Books.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3632ce34", Component.options)
  } else {
    hotAPI.reload("data-v-3632ce34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Card__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TopSwiper__ = __webpack_require__(101);


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
  name: 'Books',
  components: {
    Card: __WEBPACK_IMPORTED_MODULE_3__components_Card__["a" /* default */],
    TopSwiper: __WEBPACK_IMPORTED_MODULE_4__components_TopSwiper__["a" /* default */]
  },
  data: function data() {
    return {
      topList: [],
      books: [],
      pageNo: 0,
      pageSize: 10,
      loadmore: true,
      searchKeyword: '',
      searchBookList: []
    };
  },

  methods: {
    getBookList: function getBookList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                wx.showNavigationBarLoading(); // 显示加载loading
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/booklist', 'GET', { pageNo: _this.pageNo, pageSize: _this.pageSize });

              case 4:
                res = _context.sent;

                console.log(res);
                _this.books = _this.books.concat(res.bookList);
                if (res.bookList.length < _this.pageSize) {
                  _this.loadmore = false;
                } else {
                  _this.pageNo++;
                }
                wx.stopPullDownRefresh(); // 停止下拉加载动画
                wx.hideNavigationBarLoading(); // 隐藏加载loading
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 12]]);
      }))();
    },
    getTopBooks: function getTopBooks() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/top', 'Get');

              case 3:
                res = _context2.sent;

                _this2.topList = res.topList;
                // console.log('topList', this.topList)
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 7]]);
      }))();
    },
    searchBook: function searchBook() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this3.searchKeyword) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                console.log(_this3.searchKeyword);
                _context3.prev = 3;
                _context3.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/searchBooks', 'POST', { keyword: _this3.searchKeyword });

              case 6:
                res = _context3.sent;

                // console.log(res)
                _this3.searchBookList = res.bookList;
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](3);

                Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('错误', _context3.t0.msg);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[3, 10]]);
      }))();
    },
    goDetail: function goDetail(id) {
      this.searchKeyword = '';
      wx.navigateTo({
        url: '/pages/detail/main?id=' + id
      });
    },
    cancelSearch: function cancelSearch() {
      this.searchKeyword = '';
      this.searchBookList = [];
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    this.pageNo = 0;
    this.loadmore = true;
    this.books = [];
    this.getBookList();
    this.getTopBooks();
  },
  onReachBottom: function onReachBottom() {
    if (this.loadmore) {
      this.getBookList();
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log('转发', res.target);
    }
    return {
      text: '猫头鹰图书室',
      path: 'pages/books/main'
    };
  },
  mounted: function mounted() {
    this.getBookList();
    this.getTopBooks();
  }
});

/***/ })

},[91]);
//# sourceMappingURL=main.js.map