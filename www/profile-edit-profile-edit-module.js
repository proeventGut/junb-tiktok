(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-edit-profile-edit-module"],{

/***/ "./src/app/profile-edit/profile-edit.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfileEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/profile-edit/profile-edit.page.ts");







var routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]
    }
];
var ProfileEditPageModule = /** @class */ (function () {
    function ProfileEditPageModule() {
    }
    ProfileEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]]
        })
    ], ProfileEditPageModule);
    return ProfileEditPageModule;
}());



/***/ }),

/***/ "./src/app/profile-edit/profile-edit.page.html":
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"header\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\" \"></ion-back-button>\n    </ion-buttons>\n    <ion-title>编辑资料</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!--<div style=\"padding: 1rem\">-->\n\n    <!--<div style=\"width: 100%; text-align: center;margin:1.5rem 0 4.5rem;\">-->\n    <!--<img src=\"assets/shapes.svg\" alt=\"\" style=\"height: 6rem\">-->\n    <!--</div>-->\n\n    <!--<div>-->\n\n      <!--<ion-item>-->\n        <!--<ion-label position=\"floating\">用户名</ion-label>-->\n        <!--<ion-input type=\"text\" [(ngModel)]=\"name\" name=\"name\"></ion-input>-->\n      <!--</ion-item>-->\n\n      <!--<ion-item>-->\n        <!--<ion-label>预览图</ion-label>-->\n        <!--<img *ngIf=\"!imageSource\" style=\"object-fit: cover;width: 8rem;height: 10rem\" src=\"assets/shapes.svg\">-->\n        <!--<div *ngIf=\"imageSource\">-->\n          <!--<img style=\"object-fit: cover;width: 8rem;height: 10rem\"-->\n               <!--src=\"{{baseUrl + imageSource}}\" alt=\"\">-->\n        <!--</div>-->\n      <!--</ion-item>-->\n\n      <!--<ion-button (click)=\"selectPictrue()\">-->\n        <!--选择头像-->\n        <!--<ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon>-->\n      <!--</ion-button>-->\n\n      <!--<ion-item>-->\n        <!--<ion-label position=\"floating\">邮箱</ion-label>-->\n        <!--<ion-input type=\"text\" [(ngModel)]=\"email\" name=\"email\"></ion-input>-->\n      <!--</ion-item>-->\n\n      <!--<ion-item>-->\n        <!--<ion-label position=\"floating\">个性签名</ion-label>-->\n        <!--<ion-input type=\"text\" [(ngModel)]=\"signature\" name=\"signature\"></ion-input>-->\n      <!--</ion-item>-->\n\n\n      <!--<ion-button style=\"margin-top: 2rem;\" expand=\"block\" (click)=\"saveProfile()\">保存</ion-button>-->\n\n\n    <!--</div>-->\n  <!--</div>-->\n\n  <div class=\"block\">\n\n    <div class=\"register-logo\" (click)=\"selectPictrue()\">\n      <div class=\"logo-box\">\n        <img *ngIf=\"!imageSource\" src=\"./assets/img/login-logo.png\" alt=\"\">\n        <img *ngIf=\"imageSource\"  src=\"{{baseUrl + imageSource}}\" alt=\"\">\n      </div>\n    </div>\n\n\n    <div class=\"content-register\">\n\n      <div class=\"user\">\n        <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"用户名\">\n      </div>\n      <div class=\"user\">\n        <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"邮箱\">\n      </div>\n      <div class=\"user\">\n        <input type=\"text\" [(ngModel)]=\"signature\" placeholder=\"个性签名\">\n      </div>\n\n      <div class=\"login-btn\" (click)=\"saveProfile()\" >保存</div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: #101F25;\n  color: white; }\n\n.login-bg {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1; }\n\n.login-bg img {\n    width: 100%; }\n\n.block {\n  background-image: url('login-bg.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  width: 100%;\n  height: 100%;\n  position: absolute; }\n\n.register-logo {\n  width: 6rem;\n  height: 12rem;\n  margin: 0 auto;\n  border-top: 1px solid transparent; }\n\n.register-logo .logo-box {\n    margin: 3rem 0;\n    width: 6rem;\n    height: 6rem;\n    border-radius: 50%;\n    border: 1px solid #23375d;\n    overflow: hidden; }\n\n.register-logo .logo-box img {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover; }\n\n.user {\n  width: 90%;\n  margin: .8rem auto;\n  border-bottom: 1px solid #121E2A; }\n\n.user input {\n    margin-left: 1rem;\n    font-size: .8rem;\n    color: white;\n    width: 90%;\n    height: 2.5rem;\n    border: 0;\n    outline: none;\n    background-color: rgba(0, 0, 0, 0); }\n\n.login-btn {\n  width: 90%;\n  height: 2.5rem;\n  border-radius: 2.5rem;\n  background: #4F98C7;\n  color: white;\n  text-align: center;\n  line-height: 2.5rem;\n  margin: 3rem auto 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2p1bmJhby9wcm9qZWN0L3Rpa3Rvay90aWt0b2stbWFzdGVyL2FwcC9wYXRjaC9zcmMvYXBwL3Byb2ZpbGUtZWRpdC9wcm9maWxlLWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixNQUFLO0VBQ0wsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFKYjtJQU1JLFdBQVcsRUFBQTs7QUFHZjtFQUNFLHFDQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUNBQWlDLEVBQUE7O0FBSm5DO0lBTUksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBQTs7QUFYcEI7TUFhTSxXQUFXO01BQ1gsWUFBWTtNQUNaLG9CQUFpQjtTQUFqQixpQkFBaUIsRUFBQTs7QUFLdkI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFnQyxFQUFBOztBQUhsQztJQU1JLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMTAxRjI1O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4tYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5ibG9jayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvbG9naW4tYmcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucmVnaXN0ZXItbG9nbyB7XG4gIHdpZHRoOiA2cmVtO1xuICBoZWlnaHQ6IDEycmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAubG9nby1ib3gge1xuICAgIG1hcmdpbjogM3JlbSAwO1xuICAgIHdpZHRoOiA2cmVtO1xuICAgIGhlaWdodDogNnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIzMzc1ZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuXG59XG4udXNlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogLjhyZW0gYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjFFMkE7XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyOiAwOyAgLy8g5Y676Zmk5pyq6YCJ5Lit54q25oCB6L655qGGXG4gICAgb3V0bGluZTogbm9uZTsgLy8g5Y676Zmk6YCJ5Lit54q25oCB6L655qGGXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTsvLyDpgI/mmI7og4zmma9cbiAgfVxufVxuLmxvZ2luLWJ0biB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XG4gIGJhY2tncm91bmQ6ICM0Rjk4Qzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICBtYXJnaW46IDNyZW0gYXV0byAxcmVtO1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/profile-edit/profile-edit.page.ts":
/*!***************************************************!*\
  !*** ./src/app/profile-edit/profile-edit.page.ts ***!
  \***************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ProfileEditPage = /** @class */ (function () {
    function ProfileEditPage(router, transfer, http, camera, toastController) {
        this.router = router;
        this.transfer = transfer;
        this.http = http;
        this.camera = camera;
        this.toastController = toastController;
        this.baseUrl = ROOT_URL + 'storage';
    }
    ProfileEditPage.prototype.ngOnInit = function () {
    };
    ProfileEditPage.prototype.selectPictrue = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.FILE_URI, mediaType: this.camera.MediaType.PICTURE, sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }).then(function (res) {
            console.log(res);
            _this.upload(res);
        });
    };
    ProfileEditPage.prototype.upload = function (fileUri) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'file',
            fileName: 'test.jpg',
            mimeType: 'image/jpeg',
            headers: {}
        };
        fileTransfer.upload(fileUri, ROOT_URL + '/image/upload', options)
            .then(function (data) {
            console.log(data);
            if (data['responseCode'] === 200) {
                console.log(data['response']);
                var res = JSON.parse(data['response']);
                console.log(res);
                if (res['code'] === 200) {
                    _this.imageSource = res['data']['img'][0]['url'];
                    console.log(_this.imageSource);
                }
            }
            // success
        }, function (err) {
            console.log(err);
            console.log(err.body);
            // error
        });
    };
    ProfileEditPage.prototype.saveProfile = function () {
        var _this = this;
        var params = {
            avatar: this.imageSource,
            name: this.name,
            email: this.email,
            signature: this.signature,
            cookie: localStorage.getItem('anshi_cookie')
        };
        console.log(params);
        this.http.post(ROOT_URL + 'user/profile/edit', params).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.goMine();
            }
            ;
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
    };
    ProfileEditPage.prototype.presentToast = function (msg) {
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
    ProfileEditPage.prototype.goMine = function () {
        this.router.navigate(['/mine']).then(function (res) {
            console.log('mine');
        });
    };
    ProfileEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! ./profile-edit.page.html */ "./src/app/profile-edit/profile-edit.page.html"),
            styles: [__webpack_require__(/*! ./profile-edit.page.scss */ "./src/app/profile-edit/profile-edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__["FileTransfer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], ProfileEditPage);
    return ProfileEditPage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-edit-profile-edit-module.js.map