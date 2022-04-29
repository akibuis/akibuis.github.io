"use strict";
(self["webpackChunkmatngular"] = self["webpackChunkmatngular"] || []).push([["src_app_pages_content-pages_content-pages_module_ts"],{

/***/ 62354:
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentPagesRoutingModule": function() { return /* binding */ ContentPagesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error-page.component */ 15243);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login-page.component */ 89415);
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register/register.component */ 30090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








var routes = [{
  path: '',
  children: [{
    path: 'error',
    component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_2__.ErrorPageComponent,
    data: {
      title: 'Error Page'
    }
  }, {
    path: 'login',
    component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPageComponent,
    data: {
      title: 'Login Page'
    }
  }, {
    path: 'register',
    component: _register_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
    data: {
      title: 'Login Page'
    }
  }]
}];
var ContentPagesRoutingModule = /*#__PURE__*/(0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ContentPagesRoutingModule() {
  (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentPagesRoutingModule);
});

ContentPagesRoutingModule.ɵfac = function ContentPagesRoutingModule_Factory(t) {
  return new (t || ContentPagesRoutingModule)();
};

ContentPagesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ContentPagesRoutingModule
});
ContentPagesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ContentPagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 92321:
/*!*************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentPagesModule": function() { return /* binding */ ContentPagesModule; }
/* harmony export */ });
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-pages-routing.module */ 62354);
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error-page.component */ 15243);
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login-page.component */ 89415);
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register/register.component */ 30090);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











var ContentPagesModule = /*#__PURE__*/(0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ContentPagesModule() {
  (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContentPagesModule);
});

ContentPagesModule.ɵfac = function ContentPagesModule_Factory(t) {
  return new (t || ContentPagesModule)();
};

ContentPagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: ContentPagesModule
});
ContentPagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContentPagesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ContentPagesModule, {
    declarations: [_error_error_page_component__WEBPACK_IMPORTED_MODULE_3__.ErrorPageComponent, _login_login_page_component__WEBPACK_IMPORTED_MODULE_4__.LoginPageComponent, _register_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__.ContentPagesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 15243:
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": function() { return /* binding */ ErrorPageComponent; }
/* harmony export */ });
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);





var _c0 = function _c0() {
  return ["/"];
};

var ErrorPageComponent = /*#__PURE__*/(0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ErrorPageComponent() {
  (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ErrorPageComponent);
});

ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
  return new (t || ErrorPageComponent)();
};

ErrorPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ErrorPageComponent,
  selectors: [["app-error-page"]],
  decls: 14,
  vars: 2,
  consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]],
  template: function ErrorPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "404 - Page Not Found!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Back To Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 89415:
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": function() { return /* binding */ LoginPageComponent; }
/* harmony export */ });
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth.service */ 10629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/alert.service */ 40704);
/* harmony import */ var app_shared_services_shared_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/shared-events.service */ 70127);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);














function LoginPageComponent_ngb_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function LoginPageComponent_ngb_alert_13_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r2.isLoginFailed = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Login failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

var LoginPageComponent = /*#__PURE__*/function () {
  function LoginPageComponent(_auth, router, _router, alert, events) {
    (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginPageComponent);

    this._auth = _auth;
    this.router = router;
    this._router = _router;
    this.alert = alert;
    this.events = events;
    this.loginFormSubmitted = false;
    this.isLoginFailed = false;
    this.obj = {
      email: '',
      password: ''
    };
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('guest@apex.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('Password', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(true)
    });

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginPageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();

      this._auth.loginUser(this.obj).subscribe(function (res) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userinfo', res.data.lastname + ', ' + res.data.firstname);
        localStorage.setItem('role', res.data.role);
        localStorage.setItem('userid', res.data._id);
        localStorage.setItem('userphoto', res.data.image);

        _this._router.navigate(['dashboard']);

        _this.alert.success(res.message);
      }, function (err) {
        console.log(err);

        _this.alert.error(err.error.message); // swal.fire(
        //   'Something went wrong!',
        //   err.error.message,
        //   'error',
        // );

      });
    }
  }]);

  return LoginPageComponent;
}();

LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
  return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_shared_events_service__WEBPACK_IMPORTED_MODULE_5__.MySharedEvent));
};

LoginPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LoginPageComponent,
  selectors: [["app-login-page"]],
  decls: 47,
  vars: 4,
  consts: [[1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3", "vhy"], [1, "col-lg-6", "d-lg-flex", "justify-content-center", "align-items-center", "px-4", "py-3", "vhy"], [1, "mb-2", "card-title"], ["type", "light-danger", "class", "mb-2", 3, "close", 4, "ngIf"], ["name", "form", 1, "auth-login-form", "mt-2", 3, "submit"], ["form", "ngForm"], [1, "mb-1"], ["for", "login-email", 1, "form-label"], ["id", "login-email", "type", "text", "name", "email", "placeholder", "email", "aria-describedby", "login-email", "autofocus", "", "tabindex", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between"], ["for", "login-password", 1, "form-label"], ["href", "/"], [1, "input-group", "input-group-merge", "form-password-toggle"], ["id", "password", "type", "password", "id", "password", "placeholder", "Password", "name", "password", "required", "", "aria-describedby", "login-password", "tabindex", "2", 1, "form-control", "form-control-merge", 3, "ngModel", "ngModelChange"], [1, "input-group-text", "cursor-pointer"], ["data-feather", "eye"], [1, "form-check"], ["id", "remember-me", "type", "checkbox", "tabindex", "3", 1, "form-check-input"], ["for", "remember-me", 1, "form-check-label"], ["tabindex", "4", "type", "submit", 1, "btn", "btn-success", "w-100", 3, "disabled"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-success", "m-0"], ["routerLink", "/pages/register"], ["type", "light-danger", 1, "mb-2", 3, "close"], [1, "mb-0"]],
  template: function LoginPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Welcome back, please login to your account.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, LoginPageComponent_ngb_alert_13_Template, 3, 0, "ngb-alert", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "form", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function LoginPageComponent_Template_form_submit_14_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.obj.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Forgot Password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LoginPageComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.obj.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, " Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Sign in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "h6", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "New on our platform?");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "\xA0Create an account");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _r1.invalid);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbAlert],
  styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n\n.vhy[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7QUFBRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWxpZ2h0LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRUZEMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjRjU1MjUyICAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI0ZFRUZEMDtcclxufVxyXG5cclxuXHJcbi52aHkge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 30090:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register/register.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": function() { return /* binding */ RegisterComponent; }
/* harmony export */ });
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth.service */ 10629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/alert.service */ 40704);
/* harmony import */ var app_shared_services_shared_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/shared-events.service */ 70127);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 45365);














function RegisterComponent_ngb_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngb-alert", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function RegisterComponent_ngb_alert_13_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r2.isLoginFailed = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Login failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

var RegisterComponent = /*#__PURE__*/function () {
  function RegisterComponent(_auth, router, _router, alert, events) {
    (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RegisterComponent);

    this._auth = _auth;
    this.router = router;
    this._router = _router;
    this.alert = alert;
    this.events = events;
    this.loginFormSubmitted = false;
    this.isLoginFailed = false;
    this.obj = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "" // dOb: "",

    };
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('guest@apex.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('Password', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(true)
    });

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  (0,_Users_ismailakibu_Documents_Trigonal_GIT_Green_Indie_Angular_13_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RegisterComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();

      this._auth.registerUser(this.obj).subscribe(function (res) {
        // console.log(res);
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem(
        //   "userinfo",
        //   res.data.lastname + ", " + res.data.firstname
        // );
        // localStorage.setItem("role", res.data.role);
        // localStorage.setItem("userid", res.data._id);
        // if (res.data.role === "admin") {
        //   this._router.navigate(["dashboard"]);
        // } else {
        _this._router.navigate(["/pages/login"]); // }


        _this.alert.success(res.message);
      }, function (err) {
        console.log(err);

        _this.alert.error(err.error.message); // swal.fire(
        //   'Something went wrong!',
        //   err.error.message,
        //   'error',
        // );

      });
    }
  }]);

  return RegisterComponent;
}();

RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_services_shared_events_service__WEBPACK_IMPORTED_MODULE_5__.MySharedEvent));
};

RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 75,
  vars: 9,
  consts: [[1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3", "vhy"], [1, "col-lg-6", "d-lg-flex", "justify-content-center", "align-items-center", "px-4", "py-3", "vhy"], [1, "mb-2", "card-title"], ["type", "light-danger", "class", "mb-2", 3, "close", 4, "ngIf"], ["name", "form", 1, "auth-login-form", "mt-2", 3, "submit"], ["form", "ngForm"], [1, "row"], [1, "col-md-6", "col-12"], [1, "mb-1"], ["for", "firstname", 1, "form-label"], ["id", "firstname", "type", "text", "name", "firstname", "placeholder", "firstname", "aria-describedby", "login-firstname", "autofocus", "", "tabindex", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "lastname", 1, "form-label"], ["id", "lastname", "type", "text", "name", "lastname", "placeholder", "lastname", "aria-describedby", "lastname", "autofocus", "", "tabindex", "2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "username", 1, "form-label"], ["id", "username", "type", "text", "name", "username", "placeholder", "Stage Name", "aria-describedby", "username", "autofocus", "", "tabindex", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Email", 1, "form-label"], ["id", "email", "type", "text", "name", "email", "placeholder", "E-mail", "aria-describedby", "email", "autofocus", "", "tabindex", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "company-column", 1, "form-label"], ["id", "phone", "type", "text", "name", "phone", "placeholder", "phone", "aria-describedby", "phone", "autofocus", "", "tabindex", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "paswword", 1, "form-label"], [1, "input-group", "input-group-merge", "form-password-toggle"], ["id", "password", "type", "text", "name", "password", "placeholder", "", "aria-describedby", "password", "tabindex", "7", "aria-invalid", "false", 1, "form-control", "form-control-merge", 3, "ngModel", "ngModelChange"], [1, "input-group-text", "cursor-pointer"], ["data-feather", "eye"], [1, "d-flex", "justify-content-between"], ["for", "confirmPassword", 1, "form-label"], ["id", "confirmPassword", "type", "confirmPassword", "id", "confirmPassword", "placeholder", "", "name", "confirmPassword", "required", "", "aria-describedby", "confirmPassword", "tabindex", "8", 1, "form-control", "form-control-merge", 3, "ngModel", "ngModelChange"], [1, "form-check"], ["id", "remember-me", "type", "checkbox", "required", "", "tabindex", "9", 1, "form-check-input"], ["for", "remember-me", 1, "form-check-label"], ["tabindex", "10", "type", "submit", 1, "btn", "btn-success", "w-100", 3, "disabled"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-success", "m-0"], ["routerLink", "/pages/login"], ["type", "light-danger", 1, "mb-2", 3, "close"], [1, "mb-0"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h4", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Welcome back, please login to your account.");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RegisterComponent_ngb_alert_13_Template, 3, 0, "ngb-alert", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "form", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_14_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.obj.firstname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) {
        return ctx.obj.lastname = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Stage Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.obj.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "E-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) {
        return ctx.obj.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Phone Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_41_listener($event) {
        return ctx.obj.phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_47_listener($event) {
        return ctx.obj.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_56_listener($event) {
        return ctx.obj.confirmPassword = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " I agree to privacy policy & terms");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, " Create Account ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "h6", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Have an Account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\xA0Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "ngx-spinner");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.firstname);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.lastname);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.obj.confirmPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", _r1.invalid);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbAlert],
  styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252 !important;\n  border-color: #FEEFD0;\n}\n\n.vhy[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBR0U7RUFDRSxhQUFBO0FBQUoiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtbGlnaHQtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVFRkQwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNGNTUyNTIgICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjRkVFRkQwO1xuICB9XG4gIFxuICBcbiAgLnZoeSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfSJdfQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_content-pages_content-pages_module_ts.js.map