(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar mode=\"ios\" color=\"header\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\" \"></ion-back-button>\n        </ion-buttons>\n        <ion-title>注册</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!--<div style=\"padding: 1rem\">-->\n\n        <!--&lt;!&ndash;<div style=\"width: 100%; text-align: center;margin:1.5rem 0 4.5rem;\">&ndash;&gt;-->\n        <!--&lt;!&ndash;<img src=\"assets/shapes.svg\" alt=\"\" style=\"height: 6rem\">&ndash;&gt;-->\n        <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n        <!--<div>-->\n\n            <!--<ion-item>-->\n                <!--<ion-label position=\"floating\">用户名</ion-label>-->\n                <!--<ion-input type=\"text\" [(ngModel)]=\"name\" name=\"name\"></ion-input>-->\n            <!--</ion-item>-->\n\n            <!--<ion-item>-->\n                <!--<ion-label position=\"floating\">邮箱</ion-label>-->\n                <!--<ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>-->\n            <!--</ion-item>-->\n\n            <!--<ion-item>-->\n                <!--<ion-label position=\"floating\">密码</ion-label>-->\n                <!--<ion-input type=\"password\" [(ngModel)]=\"password\" name=\"password\"></ion-input>-->\n            <!--</ion-item>-->\n\n            <!--<ion-item>-->\n                <!--<ion-label position=\"floating\">确认密码</ion-label>-->\n                <!--<ion-input type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\"></ion-input>-->\n            <!--</ion-item>-->\n\n            <!--<div style=\"display: flex;flex-direction: row;justify-content: center;align-items: center; margin-top: 2rem\">-->\n                <!--<ion-checkbox [(ngModel)]=\"portocolStatu\"></ion-checkbox><a (click)=\"goUserPortocol()\">用户协议</a>-->\n            <!--</div>-->\n\n\n\n            <!--<ion-button style=\"margin-top: 2rem;\" expand=\"block\" (click)=\"register()\">注册</ion-button>-->\n\n\n        <!--</div>-->\n    <!--</div>-->\n\n    <div class=\"block\">\n        <div class=\"content-logo register-logo\">\n            <img src=\"./assets/img/login-logo.png\" alt=\"\">\n        </div>\n        <div class=\"content-register\" >\n\n            <div class=\"user\">\n                <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"用户名\">\n            </div>\n            <div class=\"user\">\n                <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"邮箱\">\n            </div>\n            <div class=\"user\">\n                <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"密码\">\n            </div>\n            <div class=\"user\">\n                <input type=\"password\" [(ngModel)]=\"confirmPassword\" placeholder=\"确认密码\">\n            </div>\n\n            <div class=\"content-btm\">\n                <div class=\"btm-protocol\">\n                    <ion-checkbox [(ngModel)]=\"portocolStatu\"></ion-checkbox>\n                    <span class=\"protocol\" (click)=\"goUserPortocol()\">用户协议</span>\n                </div>\n            </div>\n\n            <div class=\"login-btn2\" (click)=\"register()\">注册</div>\n            <div class=\"content-btm content-btm-c\">\n                <div (click)=\"goLogin()\">已有账号去登录</div>\n            </div>\n        </div>\n    </div>\n\n    <img *ngIf=\"loading\" style=\"width: 100vw;height: 100vh;object-fit: cover;z-index: 999;position: fixed;top: 0\" src=\"assets/lunch2.png\">\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: #101F25;\n  color: white; }\n\n.login-bg {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1; }\n\n.login-bg img {\n    width: 100%; }\n\n.block {\n  background-image: url('login-bg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.content-logo {\n  width: 10rem;\n  margin: 0 auto 2rem;\n  height: 20rem;\n  transition: all 0.75s; }\n\n.content-logo img {\n    margin: 4rem 0;\n    width: 100%; }\n\n.register-logo {\n  width: 6rem;\n  height: 12rem; }\n\n.register-logo img {\n    margin: 3rem 0;\n    width: 100%; }\n\n.user {\n  width: 90%;\n  margin: .8rem auto;\n  border-bottom: 1px solid #121E2A; }\n\n.user input {\n    margin-left: 1rem;\n    font-size: .8rem;\n    color: white;\n    width: 90%;\n    height: 2.5rem;\n    border: 0;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0); }\n\n.login-btn2 {\n  width: 90%;\n  height: 2.5rem;\n  border-radius: 2.5rem;\n  background: #4F98C7;\n  color: white;\n  text-align: center;\n  line-height: 2.5rem;\n  margin: 1rem auto; }\n\n.content-btm {\n  height: 3rem;\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: auto; }\n\n.content-btm div {\n    line-height: 3rem;\n    color: #4472D7;\n    font-size: .8rem; }\n\n.btm-protocol {\n  display: flex;\n  align-items: center; }\n\n.protocol {\n  text-decoration: underline; }\n\nion-checkbox {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.5rem; }\n\n.content-btm-c {\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2p1bmJhby9wcm9qZWN0L3Rpa3Rvay90aWt0b2stbWFzdGVyL2FwcC9wYXRjaC9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsTUFBSztFQUNMLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBSmI7SUFNSSxXQUFXLEVBQUE7O0FBR2Y7RUFDRSxxQ0FBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFzQixFQUFBOztBQUp4QjtJQU9JLGNBQWM7SUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUZmO0lBSUksY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUE7O0FBSGxDO0lBTUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGtDQUFrQyxFQUFBOztBQUd0QztFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUxkO0lBT0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXJCO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUFFdEI7RUFDRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMTAxRjI1O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4tYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5ibG9jayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbG9naW4tYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRlbnQtbG9nbyB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luOiAwIGF1dG8gMnJlbTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIDtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gIGltZyB7XG4gICAgbWFyZ2luOiA0cmVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5yZWdpc3Rlci1sb2dvIHtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogMTJyZW07XG4gIGltZyB7XG4gICAgbWFyZ2luOiAzcmVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi51c2VyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAuOHJlbSBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEyMUUyQTtcblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXI6IDA7ICAvLyDljrvpmaTmnKrpgInkuK3nirbmgIHovrnmoYZcbiAgICBvdXRsaW5lOiBub25lOyAvLyDljrvpmaTpgInkuK3nirbmgIHovrnmoYZcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApOy8vIOmAj+aYjuiDjOaZr1xuICB9XG59XG4ubG9naW4tYnRuMiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIGJhY2tncm91bmQ6ICM0Rjk4Qzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbn1cbi5jb250ZW50LWJ0bSB7XG4gIGhlaWdodDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpdiB7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgY29sb3I6ICM0NDcyRDc7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgfVxufVxuLmJ0bS1wcm90b2NvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvdG9jb2wge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLmNvbnRlbnQtYnRtLWMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(http, router, toastController) {
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.portocolStatu = true;
        this.loading = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    // 登录
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (!this.name || !this.email) {
            console.log('帐号/密码不能为空');
            this.presentToast('帐号/密码不能为空').then();
            return;
        }
        var params = {
            name: this.name,
            email: this.email,
            password: this.password,
            confirm_password: this.confirmPassword
        };
        console.log(params);
        this.loading = true;
        this.http.post(ROOT_URL + 'register', params).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                console.log(res, '注册成功');
                setTimeout(function () {
                    _this.router.navigate(['/login']).then(function (res) {
                        console.log(res);
                    });
                    _this.loading = false;
                }, 800);
            }
            else {
                _this.loading = false;
                _this.presentToast(res['msg']);
            }
        }, function (err) {
            _this.loading = false;
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.goUserPortocol = function () {
        this.router.navigate(['/user-portocol']).then(function (res) {
            console.log(res);
        });
    };
    RegisterPage.prototype.goLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map