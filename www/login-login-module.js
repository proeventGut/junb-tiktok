(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\" \"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n\n  <div class=\"block\">\n\n    <div class=\"content-logo\" [ngClass]=\"registerBool ? 'register-logo' : ''\">\n      <img src=\"./assets/img/login-logo.png\" alt=\"\">\n    </div>\n\n    <div class=\"content-login\" *ngIf=\"!registerBool\">\n      <div class=\"user\">\n        <input type=\"text\" [(ngModel)]=\"account\" placeholder=\"用户名\">\n      </div>\n      <div class=\"user\">\n        <input type=\"password\" [(ngModel)]=\"pass\" placeholder=\"密码\">\n      </div>\n      <div class=\"login-btn\" (click)=\"login()\">登录</div>\n      <div class=\"content-btm\">\n        <div (click)=\"forgetPass()\">忘记密码？</div>\n        <div (click)=\"changeRegister()\">注册</div>\n      </div>\n    </div>\n\n    <div class=\"content-register\" *ngIf=\"registerBool\">\n\n      <div class=\"user\">\n        <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"用户名\">\n      </div>\n      <div class=\"user\">\n        <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"邮箱\">\n      </div>\n      <div class=\"user\">\n        <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"密码\">\n      </div>\n      <div class=\"user\">\n        <input type=\"password\" [(ngModel)]=\"confirmPassword\" placeholder=\"确认密码\">\n      </div>\n\n      <div class=\"content-btm\">\n        <div class=\"btm-protocol\">\n          <ion-checkbox [(ngModel)]=\"protocolStatus\"></ion-checkbox>\n          <span class=\"protocol\" (click)=\"goUserProtocol()\">用户协议</span>\n        </div>\n      </div>\n\n      <div class=\"login-btn2\" (click)=\"register()\">注册</div>\n      <div class=\"content-btm content-btm-c\">\n        <div (click)=\"goLogin()\">已有账号去登录</div>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: #101F25;\n  color: white; }\n\n.login-bg {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1; }\n\n.login-bg img {\n    width: 100%; }\n\n.block {\n  background-image: url('login-bg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.content-logo {\n  width: 10rem;\n  margin: 0 auto 2rem;\n  height: 20rem;\n  transition: all 0.75s; }\n\n.content-logo img {\n    margin: 4rem 0;\n    width: 100%; }\n\n.register-logo {\n  width: 6rem;\n  height: 12rem; }\n\n.register-logo img {\n    margin: 3rem 0;\n    width: 100%; }\n\n.user {\n  width: 90%;\n  margin: .8rem auto;\n  border-bottom: 1px solid #121E2A; }\n\n.user input {\n    margin-left: 1rem;\n    font-size: .8rem;\n    color: white;\n    width: 90%;\n    height: 2.5rem;\n    border: 0;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0); }\n\n.login-btn {\n  width: 90%;\n  height: 2.5rem;\n  border-radius: 2.5rem;\n  background: #4F98C7;\n  color: white;\n  text-align: center;\n  line-height: 2.5rem;\n  margin: 3rem auto 1rem; }\n\n.login-btn2 {\n  width: 90%;\n  height: 2.5rem;\n  border-radius: 2.5rem;\n  background: #4F98C7;\n  color: white;\n  text-align: center;\n  line-height: 2.5rem;\n  margin: 1rem auto; }\n\n.content-btm {\n  height: 3rem;\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: auto; }\n\n.content-btm div {\n    line-height: 3rem;\n    color: #4472D7;\n    font-size: .8rem; }\n\n.btm-protocol {\n  display: flex;\n  align-items: center; }\n\n.protocol {\n  text-decoration: underline; }\n\nion-checkbox {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.5rem; }\n\n.content-btm-c {\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2p1bmJhby9wcm9qZWN0L3Rpa3Rvay90aWt0b2stbWFzdGVyL2FwcC9wYXRjaC9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsTUFBSztFQUNMLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBSmI7SUFNSSxXQUFXLEVBQUE7O0FBR2Y7RUFDRSxxQ0FBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFzQixFQUFBOztBQUp4QjtJQU9JLGNBQWM7SUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUZmO0lBSUksY0FBYztJQUNkLFdBQVcsRUFBQTs7QUFHZjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0NBQWdDLEVBQUE7O0FBSGxDO0lBTUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGtDQUFrQyxFQUFBOztBQUd0QztFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFMZDtJQU9JLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzEwMUYyNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uYmxvY2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2xvZ2luLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50LWxvZ28ge1xuICB3aWR0aDogMTByZW07XG4gIG1hcmdpbjogMCBhdXRvIDJyZW07XG4gIGhlaWdodDogMjByZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjc1cyA7XG4gIC8vYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICBpbWcge1xuICAgIG1hcmdpbjogNHJlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucmVnaXN0ZXItbG9nbyB7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDEycmVtO1xuICBpbWcge1xuICAgIG1hcmdpbjogM3JlbSAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4udXNlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogLjhyZW0gYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjFFMkE7XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyOiAwOyAgLy8g5Y676Zmk5pyq6YCJ5Lit54q25oCB6L655qGGXG4gICAgb3V0bGluZTogbm9uZTsgLy8g5Y676Zmk6YCJ5Lit54q25oCB6L655qGGXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsvLyDpgI/mmI7og4zmma9cbiAgfVxufVxuLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIGJhY2tncm91bmQ6ICM0Rjk4Qzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICBtYXJnaW46IDNyZW0gYXV0byAxcmVtO1xufVxuLmxvZ2luLWJ0bjIge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xuICBiYWNrZ3JvdW5kOiAjNEY5OEM3O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4uY29udGVudC1idG0ge1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXYge1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgIGNvbG9yOiAjNDQ3MkQ3O1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gIH1cbn1cbi5idG0tcHJvdG9jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb3RvY29sIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5jb250ZW50LWJ0bS1jIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(http, router, toastController) {
        this.http = http;
        this.router = router;
        this.toastController = toastController;
        this.registerBool = false;
        this.title = '登录';
        this.protocolStatus = true;
        this.loading = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.http.get(ROOT_URL + 'feeds').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                // console.log(res['data']);
                var token = res['data']['csrf_token'];
                console.log(token);
                localStorage.setItem('csxfToken', token);
            }
        });
    };
    // 登录
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.account || !this.pass) {
            console.log('帐号/密码不能为空');
            this.presentToast('帐号/密码不能为空').then(function (res) {
                console.log(res);
            });
            return;
        }
        console.log(localStorage.getItem('csxfToken'));
        var params = {
            name: this.account,
            password: this.pass
        };
        this.http.post(ROOT_URL + 'login', params).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                console.log(res, '登陆');
                localStorage.setItem('anshi_cookie', res['data']['cookie']);
                localStorage.setItem('anshi_id', res['data']['id']);
                localStorage.setItem('session_id', res['data']['session_id']);
                // this.goIndex();
                _this.router.navigate(['/login-succeed']).then();
            }
            else {
                _this.presentToast(res['msg']).then(function (r) {
                    console.log(r);
                });
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
    };
    LoginPage.prototype.forgetPass = function () {
        this.presentToast('请联系管理员 q: 1175902641').then(function (r) {
            console.log(r);
        });
    };
    LoginPage.prototype.goIndex = function () {
        // this.api.pause();
        this.router.navigate(['/home']).then(function (res) {
            console.log(res);
        });
    };
    LoginPage.prototype.goRegister = function () {
        this.router.navigate(['/register']).then(function (res) {
            console.log(res);
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
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
    // 注册
    LoginPage.prototype.changeRegister = function () {
        this.registerBool = true;
        this.title = '注册';
    };
    // 登录
    LoginPage.prototype.register = function () {
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
                _this.presentToast('注册成功请登录');
                setTimeout(function () {
                    _this.registerBool = false;
                    _this.title = '登录';
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
    // 用户协议
    LoginPage.prototype.goUserProtocol = function () {
        this.router.navigate(['/user-portocol']).then(function (res) {
            console.log(res);
        });
    };
    LoginPage.prototype.goLogin = function () {
        this.registerBool = false;
        this.title = '登录';
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map