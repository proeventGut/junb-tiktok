(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.page.html":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>-->\n  <!--<ion-toolbar>-->\n    <!--<ion-title>welcome</ion-title>-->\n  <!--</ion-toolbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n  <ion-slides #slidesRef pager=\"true\" [options]=\"slideOpts\"\n              (ionSlideReachEnd)=\"sldend()\"\n              (ionSlideReachStart)=\"sldpre()\"\n  >\n    <ion-slide>\n      <!--<img style=\"width: 100vw;height: 100vh;object-fit: cover\" src=\"assets/lunch-a.jpg\">-->\n      <div style=\"position: absolute; right: 2vw;top: 50vh;\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </div>\n\n    </ion-slide>\n    <ion-slide>\n      <img style=\"width: 100vw;height: 100vh;object-fit: cover\" src=\"assets/lunch1.png\">\n    </ion-slide>\n    <ion-slide>\n      <!--<img style=\"width: 100vw;height: 100vh;object-fit: cover\" src=\"assets/lunch-a.jpg\">-->\n      <div style=\"position: absolute; left: 2vw;top: 50vh;\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WelcomePage = /** @class */ (function () {
    function WelcomePage(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
    }
    WelcomePage.prototype.ngOnInit = function () {
    };
    WelcomePage.prototype.sldnxt = function () {
        var _this = this;
        var sli = this.slidesRef;
        console.log(sli);
        sli.getActiveIndex().then(function (re) {
            console.log(re);
            if (re == 2) {
                _this.router.navigate(['/login']).then(function (res) {
                    console.log(res);
                });
            }
        });
    };
    WelcomePage.prototype.sldpre = function () {
        this.router.navigate(['/feeds']).then(function (res) {
            console.log(res);
        });
    };
    WelcomePage.prototype.sldend = function () {
        var _this = this;
        this.router.navigate(['/login']).then(function (res) {
            console.log(res);
            _this.slidesRef.slideTo(1);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidesRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WelcomePage.prototype, "slidesRef", void 0);
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.page.html */ "./src/app/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module.js.map