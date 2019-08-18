(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-succeed-login-succeed-module"],{

/***/ "./src/app/login-succeed/login-succeed.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/login-succeed/login-succeed.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginSucceedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSucceedPageModule", function() { return LoginSucceedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_succeed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-succeed.page */ "./src/app/login-succeed/login-succeed.page.ts");







var routes = [
    {
        path: '',
        component: _login_succeed_page__WEBPACK_IMPORTED_MODULE_6__["LoginSucceedPage"]
    }
];
var LoginSucceedPageModule = /** @class */ (function () {
    function LoginSucceedPageModule() {
    }
    LoginSucceedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_succeed_page__WEBPACK_IMPORTED_MODULE_6__["LoginSucceedPage"]]
        })
    ], LoginSucceedPageModule);
    return LoginSucceedPageModule;
}());



/***/ }),

/***/ "./src/app/login-succeed/login-succeed.page.html":
/*!*******************************************************!*\
  !*** ./src/app/login-succeed/login-succeed.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <ion-slides #slidesRef pager=\"true\" [options]=\"slideOpts\"\n              (ionSlideReachEnd)=\"sldend()\"\n  >\n    <ion-slide>\n      <div style=\"position: absolute; right: 2vw;top: 50vh;\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <img style=\"width: 100vw;height: 100vh;object-fit: cover\" src=\"assets/lunch3.png\">\n    </ion-slide>\n    <ion-slide>\n      <div style=\"position: absolute; left: 2vw;top: 50vh;\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login-succeed/login-succeed.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/login-succeed/login-succeed.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXN1Y2NlZWQvbG9naW4tc3VjY2VlZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/login-succeed/login-succeed.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/login-succeed/login-succeed.page.ts ***!
  \*****************************************************/
/*! exports provided: LoginSucceedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSucceedPage", function() { return LoginSucceedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginSucceedPage = /** @class */ (function () {
    function LoginSucceedPage(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    LoginSucceedPage.prototype.ngOnInit = function () {
    };
    LoginSucceedPage.prototype.sldend = function () {
        this.router.navigate(['/feeds']).then();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidesRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginSucceedPage.prototype, "slidesRef", void 0);
    LoginSucceedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-succeed',
            template: __webpack_require__(/*! ./login-succeed.page.html */ "./src/app/login-succeed/login-succeed.page.html"),
            styles: [__webpack_require__(/*! ./login-succeed.page.scss */ "./src/app/login-succeed/login-succeed.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginSucceedPage);
    return LoginSucceedPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-succeed-login-succeed-module.js.map