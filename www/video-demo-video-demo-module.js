(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-demo-video-demo-module"],{

/***/ "./src/app/video-demo/video-demo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/video-demo/video-demo.module.ts ***!
  \*************************************************/
/*! exports provided: VideoDemoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDemoPageModule", function() { return VideoDemoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_demo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-demo.page */ "./src/app/video-demo/video-demo.page.ts");







var routes = [
    {
        path: '',
        component: _video_demo_page__WEBPACK_IMPORTED_MODULE_6__["VideoDemoPage"]
    }
];
var VideoDemoPageModule = /** @class */ (function () {
    function VideoDemoPageModule() {
    }
    VideoDemoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_demo_page__WEBPACK_IMPORTED_MODULE_6__["VideoDemoPage"]]
        })
    ], VideoDemoPageModule);
    return VideoDemoPageModule;
}());



/***/ }),

/***/ "./src/app/video-demo/video-demo.page.html":
/*!*************************************************!*\
  !*** ./src/app/video-demo/video-demo.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>-->\n  <!--<ion-toolbar>-->\n    <!--<ion-title>video-demo</ion-title>-->\n  <!--</ion-toolbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n\n  <!--<ion-button></ion-button>-->\n\n  <!--<button (click)=\"palyer()\">player</button>-->\n\n  <!--<ion-content>-->\n    <!--<ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">-->\n      <!--<ion-refresher-content></ion-refresher-content>-->\n    <!--</ion-refresher>-->\n  <!--</ion-content>-->\n\n  <!-- Custom Refresher Properties -->\n  <!--<ion-content>-->\n    <!--<ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">-->\n      <!--<ion-refresher-content></ion-refresher-content>-->\n    <!--</ion-refresher>-->\n  <!--</ion-content>-->\n\n  <!-- Custom Refresher Content -->\n  <!--<ion-content>-->\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n              pullingIcon=\"arrow-dropdown\"\n              pullingText=\"Pull to refresh\"\n              refreshingSpinner=\"circles\"\n              refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n\n  <!-- Item Dividers in a List -->\n  <!--<ion-list>-->\n\n    <!--<ion-item *ngFor=\"let item of videoArr\" style=\"display: flex;flex-direction: column\">-->\n      <div *ngFor=\"let item of videoArr\" (click)=\"testParams(item)\">\n        <div style=\"position: absolute;padding: 0.5rem;background-color:grey;opacity: 0.5\">\n          <ion-text style=\"color: white;\">{{item.title}}</ion-text>\n        </div>\n        <img style=\"width: 100vw;height: 40vh;object-fit: cover\" src=\"{{item.poster}}\" alt=\"\">\n      </div>\n    <!--</ion-item>-->\n\n  <!--</ion-list>-->\n  <!--</ion-content>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/video-demo/video-demo.page.scss":
/*!*************************************************!*\
  !*** ./src/app/video-demo/video-demo.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWRlbW8vdmlkZW8tZGVtby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-demo/video-demo.page.ts":
/*!***********************************************!*\
  !*** ./src/app/video-demo/video-demo.page.ts ***!
  \***********************************************/
/*! exports provided: VideoDemoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDemoPage", function() { return VideoDemoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_android_exoplayer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-exoplayer/ngx */ "./node_modules/@ionic-native/android-exoplayer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _player_player_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player/player.page */ "./src/app/player/player.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var VideoDemoPage = /** @class */ (function () {
    function VideoDemoPage(androidExoPlayer, modalController, router) {
        this.androidExoPlayer = androidExoPlayer;
        this.modalController = modalController;
        this.router = router;
        this.videoArr = [
            {
                id: 1,
                src: 'assets/video/test1.mp4',
                poster: 'assets/shapes.svg',
                title: '就是他爱科技那几家世纪东方自己是加 机票的风景  几点女警 家地方拿 奥别的那片'
            },
            {
                id: 2,
                src: 'https://ttq.tiantianquan.xyz/sqnu.bak/assets/test.mp4',
                poster: 'assets/shapes.svg',
                title: '就是他爱科技那几家世纪东方自己是加 机票的风景  几点女警 家地方拿 奥别的那片'
            },
            {
                id: 1,
                src: 'assets/video/test1.mp4',
                poster: 'assets/shapes.svg',
                title: '就是他爱科技那几家世纪东方自己是加 机票的风景  几点女警 家地方拿 奥别的那片'
            }
        ];
    }
    VideoDemoPage.prototype.ngOnInit = function () {
    };
    VideoDemoPage.prototype.palyer = function () {
        var _this = this;
        console.log('test');
        this.androidExoPlayer.show({ url: 'https://ttq.tiantianquan.xyz/sqnu.bak/assets/test.mp4' }).subscribe(function (res) {
            console.log(res);
            _this.androidExoPlayer.showController().then(function () {
                console.log('fff');
            });
        });
    };
    VideoDemoPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    VideoDemoPage.prototype.testParams = function (e) {
        console.log(e);
        // this.router.navigate(['/player']);
        this.presentModal(e);
    };
    VideoDemoPage.prototype.presentModal = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _player_player_page__WEBPACK_IMPORTED_MODULE_4__["PlayerPage"],
                            componentProps: e,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoDemoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-demo',
            template: __webpack_require__(/*! ./video-demo.page.html */ "./src/app/video-demo/video-demo.page.html"),
            styles: [__webpack_require__(/*! ./video-demo.page.scss */ "./src/app/video-demo/video-demo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_android_exoplayer_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidExoplayer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], VideoDemoPage);
    return VideoDemoPage;
}());



/***/ })

}]);
//# sourceMappingURL=video-demo-video-demo-module.js.map