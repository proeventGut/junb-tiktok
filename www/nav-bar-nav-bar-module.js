(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nav-bar-nav-bar-module"],{

/***/ "./src/app/nav-bar/nav-bar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav-bar/nav-bar.module.ts ***!
  \*******************************************/
/*! exports provided: NavBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarPageModule", function() { return NavBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nav_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar.page */ "./src/app/nav-bar/nav-bar.page.ts");







var routes = [
    {
        path: '',
        component: _nav_bar_page__WEBPACK_IMPORTED_MODULE_6__["NavBarPage"]
    }
];
var NavBarPageModule = /** @class */ (function () {
    function NavBarPageModule() {
    }
    NavBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nav_bar_page__WEBPACK_IMPORTED_MODULE_6__["NavBarPage"]]
        })
    ], NavBarPageModule);
    return NavBarPageModule;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.page.html":
/*!*******************************************!*\
  !*** ./src/app/nav-bar/nav-bar.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"background-color: grey;color: white\">\n\n  <div style=\"position: fixed; bottom: 5px;z-index: 99\">\n\n    <div style=\"display: flex;justify-content: space-around;align-items: center; width: 100vw;\">\n\n      <div (click)=\"goIndex()\" style=\"color: white\">首页</div>\n\n      <ion-icon name=\"add-circle-outline\" (click)=\"goPublish()\" style=\"color: white;font-size: 3rem;\"></ion-icon>\n\n      <div (click)=\"goMine()\" style=\"color: white\">我的</div>\n\n    </div>\n\n  </div>\n\n  <ion-button>Default</ion-button>\n\n  <!-- Anchor -->\n  <ion-button href=\"#\">Anchor</ion-button>\n\n  <!-- Colors -->\n  <ion-button color=\"primary\">Primary</ion-button>\n  <ion-button color=\"secondary\">Secondary</ion-button>\n  <ion-button color=\"tertiary\">Tertiary</ion-button>\n  <ion-button color=\"success\">Success</ion-button>\n  <ion-button color=\"warning\">Warning</ion-button>\n  <ion-button color=\"danger\">Danger</ion-button>\n  <ion-button color=\"light\">Light</ion-button>\n  <ion-button color=\"medium\">Medium</ion-button>\n  <ion-button color=\"dark\">Dark</ion-button>\n\n  <!-- Expand -->\n  <ion-button expand=\"full\">Full Button</ion-button>\n  <ion-button expand=\"block\">Block Button</ion-button>\n\n  <!-- Round -->\n  <ion-button shape=\"round\">Round Button</ion-button>\n\n  <!-- Fill -->\n  <ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\n  <ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button>\n\n  <!-- Icons -->\n  <ion-button>\n    <ion-icon slot=\"start\" name=\"star\"></ion-icon>\n    Left Icon\n  </ion-button>\n\n  <ion-button>\n    Right Icon\n    <ion-icon slot=\"end\" name=\"star\"></ion-icon>\n  </ion-button>\n\n  <ion-button>\n    <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n  </ion-button>\n\n  <!-- Sizes -->\n  <ion-button size=\"large\">Large</ion-button>\n  <ion-button>Default</ion-button>\n  <ion-button size=\"small\">Small</ion-button>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/nav-bar/nav-bar.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/nav-bar/nav-bar.page.ts ***!
  \*****************************************/
/*! exports provided: NavBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarPage", function() { return NavBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavBarPage = /** @class */ (function () {
    function NavBarPage(router) {
        this.router = router;
    }
    NavBarPage.prototype.ngOnInit = function () {
    };
    NavBarPage.prototype.goIndex = function () {
        this.router.navigate(['/home']).then(function (res) {
            console.log(res);
        });
    };
    NavBarPage.prototype.goPublish = function () {
        this.router.navigate(['/create']).then(function (res) {
            console.log(res);
        });
    };
    NavBarPage.prototype.goMine = function () {
        this.router.navigate(['/mine']).then(function (res) {
            console.log(res);
        });
    };
    NavBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.page.html */ "./src/app/nav-bar/nav-bar.page.html"),
            styles: [__webpack_require__(/*! ./nav-bar.page.scss */ "./src/app/nav-bar/nav-bar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarPage);
    return NavBarPage;
}());



/***/ })

}]);
//# sourceMappingURL=nav-bar-nav-bar-module.js.map