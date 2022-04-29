"use strict";
(self["webpackChunkmatngular"] = self["webpackChunkmatngular"] || []).push([["common"],{

/***/ 40704:
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": function() { return /* binding */ AlertService; }
/* harmony export */ });
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var AlertService = /*#__PURE__*/function () {
  function AlertService() {
    (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AlertService);
  }

  (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AlertService, [{
    key: "alert",
    value: function alert(message) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Green Indie', message); // alertify.alert('Payarya Alert', message);
    }
  }, {
    key: "success",
    value: function success(message) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        html: message,
        timer: 1000,
        showConfirmButton: false,
        icon: 'success'
      });
    }
  }, {
    key: "error",
    value: function error(message) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        html: message,
        timer: 2000,
        showConfirmButton: true,
        confirmButtonText: 'Try Again',
        icon: 'error'
      });
    }
  }, {
    key: "showLoading",
    value: function showLoading() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();
    }
  }, {
    key: "hideLoading",
    value: function hideLoading() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
    }
  }]);

  return AlertService;
}();

AlertService.ɵfac = function AlertService_Factory(t) {
  return new (t || AlertService)();
};

AlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AlertService,
  factory: AlertService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map