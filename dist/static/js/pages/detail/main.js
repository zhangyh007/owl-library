global.webpackJsonp([2],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Detail__ = __webpack_require__(117);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Detail__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bee547e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2bee547e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2bee547e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\Detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2bee547e", Component.options)
  } else {
    hotAPI.reload("data-v-2bee547e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CommentList__ = __webpack_require__(49);


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
  name: 'Detail',
  components: {
    BookInfo: __WEBPACK_IMPORTED_MODULE_3__components_BookInfo__["a" /* default */],
    CommentList: __WEBPACK_IMPORTED_MODULE_4__components_CommentList__["a" /* default */]
  },
  data: function data() {
    return {
      commentList: [],
      userInfo: {},
      bookId: '',
      bookInfo: {},
      comment: '',
      location: '',
      phone: ''
    };
  },

  computed: {
    showAdd: function showAdd() {
      var _this = this;

      // 未登录
      if (!this.userInfo.openId) {
        return false;
      }
      // 评论列表里有自己的openId
      if (this.commentList.filter(function (v) {
        return v.openId === _this.userInfo.openId;
      }).length) {
        return false;
      }
      return true;
    }
  },
  methods: {
    getDetail: function getDetail() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/bookdetail', 'GET', { id: _this2.bookId });

              case 3:
                res = _context.sent;

                _this2.bookInfo = res;
                wx.setNavigationBarTitle({
                  title: _this2.bookInfo.title
                });
                console.log('detail', res);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 9]]);
      }))();
    },
    getComment: function getComment() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var commentList;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/commentlist', 'GET', { bookId: _this3.bookId });

              case 3:
                commentList = _context2.sent;

                _this3.commentList = commentList.commentList || [];
                console.log('commentList', commentList);
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);
                Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('失败', _context2.t0.data.msg);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 8]]);
      }))();
    },
    getLocation: function getLocation(e) {
      var _this4 = this;

      // ak
      var ak = 'okMyLjN7YCazQkd6Dra1FhY8KqTlPIDg';
      var url = 'http://api.map.baidu.com/geocoder/v2/';
      if (e.target.value) {
        wx.getLocation({
          success: function success(res) {
            // console.log('location', res)
            wx.request({
              url: url,
              data: {
                ak: ak,
                output: 'json',
                location: res.latitude + ',' + res.longitude
              },
              success: function success(response) {
                console.log('location', response);
                if (response.data.status === 0) {
                  _this4.location = response.data.result.formatted_address;
                }
              }
            });
          }
        });
      } else {
        this.location = '';
      }
    },
    getPhone: function getPhone(e) {
      if (e.target.value) {
        var phone = wx.getSystemInfoSync();
        this.phone = phone.model;
        console.log('phone', phone);
      } else {
        this.phone = '';
      }
    },
    addComment: function addComment() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this5.comment) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                data = {
                  comment: _this5.comment,
                  location: _this5.location,
                  phone: _this5.phone,
                  bookId: _this5.$root.$mp.query.id,
                  openId: _this5.userInfo.openId
                };

                console.log('评论', data);
                _context3.prev = 4;
                _context3.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* request */])('/weapp/addcomment', 'POST', data);

              case 7:
                res = _context3.sent;

                console.log('comment', res);
                Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('成功', '评论成功！');
                _this5.comment = '';
                _this5.getComment();
                _context3.next = 18;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3['catch'](4);

                Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* showModal */])('失败', _context3.t0.data.msg);
                console.log(_context3.t0);

              case 18:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this5, [[4, 14]]);
      }))();
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log('转发', res.target);
    }
    return {
      path: 'pages/detail/main?id=' + this.$root.$mp.query.id
    };
  },
  mounted: function mounted() {
    this.bookId = this.$root.$mp.query.id;
    this.getDetail();
    this.getComment();
    var userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.userInfo = userInfo;
    }
    // this.comment = '.......'
  }
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1bd2d86c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bd2d86c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_BookInfo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1bd2d86c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_BookInfo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\BookInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BookInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1bd2d86c", Component.options)
  } else {
    hotAPI.reload("data-v-1bd2d86c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rate__ = __webpack_require__(48);
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
  name: 'BookInfo',
  components: {
    Rate: __WEBPACK_IMPORTED_MODULE_0__components_Rate__["a" /* default */]
  },
  props: {
    bookInfo: {
      type: Object,
      required: true
    }
  },
  computed: {
    userInfo: function userInfo() {
      console.log(this.bookInfo.user_info);
      return this.bookInfo.user_info || {};
    }
  },
  watch: {
    bookInfo: function bookInfo() {
      console.log('bookInfo', this.bookInfo);
    }
  }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "book-info"
  }, [_c('div', {
    staticClass: "thumb"
  }, [_c('img', {
    staticClass: "backImage",
    attrs: {
      "src": _vm.bookInfo.image,
      "alt": _vm.bookInfo.alt,
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img",
    attrs: {
      "src": _vm.bookInfo.image,
      "mode": "aspectFit"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n        " + _vm._s(_vm.bookInfo.title) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "author"
  }, [_vm._v("\n        " + _vm._s(_vm.bookInfo.author) + "\n      ")])])]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('span', [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.userInfo.image
    }
  }), _vm._v("\n      " + _vm._s(_vm.userInfo.nickName) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "right color-primary",
    staticStyle: {
      "display": "flex"
    }
  }, [_c('span', {
    staticStyle: {
      "margin-right": "10px"
    }
  }, [_vm._v(_vm._s(_vm.bookInfo.rate) + "分")]), _vm._v(" "), _c('Rate', {
    attrs: {
      "rate": _vm.bookInfo.rate,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_vm._v("\n    " + _vm._s(_vm.bookInfo.publisher) + "\n    "), _c('div', {
    staticClass: "right"
  }, [_vm._v("\n      价格：\n      " + _vm._s(_vm.bookInfo.price) + "\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.bookInfo.tags), function(tag, index) {
    return _c('div', {
      key: tag,
      staticClass: "badage"
    }, [_vm._v(_vm._s(tag))])
  })), _vm._v(" "), _c('div', {
    staticClass: "summary"
  }, [_vm._v("\n    简介：\n    "), _vm._l((_vm.bookInfo.summary), function(summary, i) {
    return _c('p', {
      key: i
    }, [_vm._v(_vm._s(summary))])
  })], 2)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1bd2d86c", esExports)
  }
}

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail"
  }, [_c('BookInfo', {
    attrs: {
      "bookInfo": _vm.bookInfo,
      "mpcomid": '0'
    }
  }), _vm._v(" "), (_vm.commentList.length !== 0) ? _c('CommentList', {
    attrs: {
      "commentList": _vm.commentList,
      "mpcomid": '1'
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showAdd) ? _c('div', {
    staticClass: "comment"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.comment),
      expression: "comment"
    }],
    attrs: {
      "placeholder": "评论区：大侠，请积极发言",
      "maxlength": 100,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.comment)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.comment = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "location"
  }, [_c('span', [_vm._v("\n        地理位置:\n        "), _c('span', {
    staticClass: "color-primary"
  }, [_vm._v("\n          " + _vm._s(_vm.location || '无') + "\n        ")])]), _vm._v(" "), _c('switch', {
    staticClass: "location-switch",
    attrs: {
      "checked": _vm.location,
      "color": "#EA5A49",
      "eventid": '1'
    },
    on: {
      "change": _vm.getLocation
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "phone"
  }, [_c('span', [_vm._v("\n        手机型号:\n        "), _c('span', {
    staticClass: "color-primary"
  }, [_vm._v("\n          " + _vm._s(_vm.phone || '无') + "\n        ")])]), _vm._v(" "), _c('switch', {
    staticClass: "phone-switch",
    attrs: {
      "checked": _vm.phone,
      "color": "#EA5A49",
      "eventid": '2'
    },
    on: {
      "change": _vm.getPhone
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addComment
    }
  }, [_vm._v("评论")])], 1) : _c('div', {
    staticClass: "loadmore-text"
  }, [_vm._v("\n    提示：未登录或已评论无法评论\n  ")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    style: (_vm.showAdd ? {
      'margin-top': '20px'
    } : ''),
    attrs: {
      "open-type": "share",
      "eventid": '4'
    },
    on: {
      "click": _vm.share
    }
  }, [_vm._v("转发给好友")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2bee547e", esExports)
  }
}

/***/ })

},[116]);
//# sourceMappingURL=main.js.map