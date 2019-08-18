(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feeds-feeds-module"],{

/***/ "./src/app/feeds/feeds.module.ts":
/*!***************************************!*\
  !*** ./src/app/feeds/feeds.module.ts ***!
  \***************************************/
/*! exports provided: FeedsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsPageModule", function() { return FeedsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feeds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feeds.page */ "./src/app/feeds/feeds.page.ts");







var routes = [
    {
        path: '',
        component: _feeds_page__WEBPACK_IMPORTED_MODULE_6__["FeedsPage"]
    }
];
var FeedsPageModule = /** @class */ (function () {
    function FeedsPageModule() {
    }
    FeedsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_feeds_page__WEBPACK_IMPORTED_MODULE_6__["FeedsPage"]]
        })
    ], FeedsPageModule);
    return FeedsPageModule;
}());



/***/ }),

/***/ "./src/app/feeds/feeds.page.html":
/*!***************************************!*\
  !*** ./src/app/feeds/feeds.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"third\">\n    <ion-header>\n        <div style=\"width: 1rem;height: 2rem\"></div>\n        <!--<ion-toolbar color=\"primary\">-->\n        <!--<ion-title>菜单</ion-title>-->\n        <!--</ion-toolbar>-->\n    </ion-header>\n    <ion-content>\n        <ion-list>\n\n            <ion-item (click)=\"noSupport()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/rank.png\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <ion-label>排行榜</ion-label>\n                <!--<ion-button style=\"color: black;\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/rank.png\">排行榜</ion-button>-->\n            </ion-item>\n\n            <ion-item (click)=\"noSupport()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/support.png\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <ion-label>我的支持</ion-label>\n                <!--<ion-button style=\"color: black;\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/support.png\">我的支持</ion-button>-->\n            </ion-item>\n\n            <ion-item (click)=\"noSupport()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/help.png\">\n                <ion-label>攻略论坛</ion-label>\n            </ion-item>\n            <!--<ion-button style=\"color: black;\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/support.png\">我的支持</ion-button>-->\n\n\n            <ion-item (click)=\"goNote()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/tip.png\">\n                <ion-label>便签墙</ion-label>\n            </ion-item>\n            <!--<ion-button style=\"color: black;\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/tip.png\">便签墙</ion-button>-->\n\n\n            <ion-item (click)=\"noSupport()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/market.png\">\n                <ion-label>兼职市场</ion-label>\n            </ion-item>\n            <!--<ion-button style=\"color: black;\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/market.png\">兼职市场</ion-button>-->\n\n\n            <ion-item (click)=\"noSupport()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/pic.png\">\n                <ion-label>美颜模板</ion-label>\n            </ion-item>\n            <!--<ion-button style=\"color: black;\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/pic.png\">美颜模板</ion-button>-->\n\n\n            <ion-item (click)=\"noSupport()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/near.png\">\n                <ion-label>附近的人</ion-label>\n            </ion-item>\n            <!--<ion-button style=\"color: black;\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/near.png\">附近的人</ion-button>-->\n\n\n            <ion-item (click)=\"noSupport()\">\n                <img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/wlt.png\">\n                <ion-label>我的钱包</ion-label>\n            </ion-item>\n            <!--<ion-button style=\"color: black;display: flex;justify-content: flex-start\" expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\"><img style=\"width: 2rem;margin-right: 0.5rem\" src=\"assets/icon/wlt.png\">我的钱包</ion-button>-->\n\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-router-outlet main>\n\n    <ion-header>\n        <!--<ion-toolbar>-->\n            <!--<ion-title>no-support</ion-title>-->\n        <!--</ion-toolbar>-->\n        <ion-toolbar mode=\"ios\" color=\"header\">\n            <ion-buttons slot=\"start\">\n                <ion-menu-button autoHide=\"false\"></ion-menu-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-button>\n                    <!--<ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>-->\n                    <img src=\"assets/icon/search.png\" alt=\"\" style=\"width: 2rem;height: 2rem\" (click)=\"goSearch()\">\n                </ion-button>\n            </ion-buttons>\n            <ion-title>热门挑战</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n\n        <div class=\"content-bg\">\n            <img src=\"./assets/img/feeds-bg.jpg\" alt=\"\">\n        </div>\n\n        <!--<div style=\"position: fixed; top: 2rem; left: 1rem; z-index: 999\">-->\n            <!--<ion-icon style=\"font-size: 2rem;color: white\" name=\"menu\" (click)=\"openThird()\"></ion-icon>-->\n        <!--</div>-->\n\n        <!--<div style=\"position: fixed; top: 2rem; right: 1rem; z-index: 999\">-->\n            <!--<img src=\"assets/icon/search.png\" alt=\"\" style=\"width: 2rem;height: 2rem\" (click)=\"goSearch()\">-->\n        <!--</div>-->\n\n        <div class=\"content-list\">\n            <div *ngFor=\"let item of remoteVideoSourceArr\" (click)=\"getCurPlayer(item)\">\n                <div class=\"item\">\n                    <img src=\"{{storageBaseUrl + item.poster}}\" alt=\"\">\n                </div>\n            </div>\n        </div>\n\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n                    loadingSpinner=\"bubbles\"\n                    loadingText=\"Loading more data...\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n\n        <div style=\"height: 10px;\"></div>\n\n    </ion-content>\n    <ion-footer>\n        <div style=\"position: fixed; bottom: 0;z-index: 99\">\n\n            <div style=\"display: flex;justify-content: space-around;align-items: center; width: 100vw;height: 50px; background-color:black;opacity: 0.8;\">\n\n                <div (click)=\"goIndex()\" style=\"color: white\">首页</div>\n\n                <ion-icon  name=\"add-circle-outline\" (click)=\"goPublish()\"\n                          style=\" width: 2rem; height: 2rem;color: white;font-size: 3rem;\"></ion-icon>\n\n                <!--<ion-button ></ion-button>-->\n\n                <div (click)=\"goMine()\" style=\"color: white\">我的</div>\n\n            </div>\n\n        </div>\n    </ion-footer>\n</ion-router-outlet>\n"

/***/ }),

/***/ "./src/app/feeds/feeds.page.scss":
/*!***************************************!*\
  !*** ./src/app/feeds/feeds.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: linear-gradient(to right, #0B0F19, #172034);\n  color: white; }\n\n.content-bg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 0; }\n\n.content-bg img {\n    width: 100%;\n    height: 100%; }\n\n.content-list {\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  position: relative;\n  z-index: 1; }\n\n.content-list .item {\n    margin: 2px 0;\n    width: 49.5vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    overflow: hidden;\n    opacity: 0.8; }\n\n.content-list .item img {\n      width: 50vw;\n      -o-object-fit: cover;\n         object-fit: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2p1bmJhby9wcm9qZWN0L3Rpa3Rvay90aWt0b2stbWFzdGVyL2FwcC9wYXRjaC9zcmMvYXBwL2ZlZWRzL2ZlZWRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVEQUF1RDtFQUN2RCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBS04sVUFBVSxFQUFBOztBQVRaO0lBTUksV0FBVztJQUNYLFlBQVksRUFBQTs7QUFLaEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFOWjtJQVFJLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7O0FBZmhCO01BaUJNLFdBQVc7TUFDWCxvQkFBaUI7U0FBakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWVkcy9mZWVkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMEIwRjE5LCAjMTcyMDM0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbnRlbnQtYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgei1pbmRleDogMDtcblxufVxuLmNvbnRlbnQtbGlzdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgLml0ZW0ge1xuICAgIG1hcmdpbjogMnB4IDA7XG4gICAgd2lkdGg6IDQ5LjV2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogNTB2dztcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/feeds/feeds.page.ts":
/*!*************************************!*\
  !*** ./src/app/feeds/feeds.page.ts ***!
  \*************************************/
/*! exports provided: FeedsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedsPage", function() { return FeedsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");






var FeedsPage = /** @class */ (function () {
    function FeedsPage(router, http, toastController, menu, modalController) {
        this.router = router;
        this.http = http;
        this.toastController = toastController;
        this.menu = menu;
        this.modalController = modalController;
        this.remoteVideoSourceArr = [];
        this.storageBaseUrl = ROOT_URL + 'storage';
    }
    FeedsPage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    FeedsPage.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('anshi_id') && localStorage.getItem('anshi_id') !== '') {
            console.log('test');
            // this.router.navigate(['/mine']).then(res => {
            //     console.log(res);
            // });
            // this.router.navigate(['/welcome']).then(res => {
            //     console.log(res);
            // });
        }
        else {
            if (localStorage.getItem('welcomeTime') && localStorage.getItem('welcomeTime') == '1') {
                console.log('we');
            }
            else {
                localStorage.setItem('welcomeTime', '1');
                this.router.navigate(['/welcome']).then(function (res) {
                    console.log(res);
                });
            }
        }
        this.http.get(ROOT_URL + 'feeds').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                res['data']['data'].forEach(function (item) {
                    // item['playId'] = this.playId;
                    _this.remoteVideoSourceArr.push(item);
                });
            }
        });
    };
    FeedsPage.prototype.goIndex = function () {
        this.router.navigate(['/feeds']).then(function (res) {
            console.log(res);
        });
    };
    FeedsPage.prototype.goPublish = function () {
        if (localStorage.getItem('anshi_id') && localStorage.getItem('anshi_id') !== '') {
            this.router.navigate(['/create']).then(function (res) {
                console.log(res);
            });
        }
        else {
            this.router.navigate(['/login']).then(function (res) {
                console.log(res);
            });
        }
    };
    FeedsPage.prototype.goMine = function () {
        if (localStorage.getItem('anshi_id') && localStorage.getItem('anshi_id') !== '') {
            this.router.navigate(['/mine']).then(function (res) {
                console.log(res);
            });
        }
        else {
            this.router.navigate(['/login']).then(function (res) {
                console.log(res);
            });
        }
    };
    FeedsPage.prototype.getCurPlayer = function (e) {
        console.log(e);
        // this.router.navigate(['/player']);
        // this.presentModal(e);
        this.router.navigate(['home'], { queryParams: { insertId: e['id'] } }).then(function (res) {
            console.log(res);
        });
    };
    FeedsPage.prototype.presentModal = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(e);
                        return [4 /*yield*/, this.modalController.create({
                                component: _home_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
                                componentProps: { insertId: e['id'] },
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
    FeedsPage.prototype.noSupport = function () {
        var _this = this;
        this.presentToast('功能暂未开放！').then(function () {
            console.log('功能暂未开放！');
            _this.menu.close('third');
        });
    };
    FeedsPage.prototype.openThird = function () {
        this.menu.enable(true, 'third');
        this.menu.open('third');
    };
    FeedsPage.prototype.goSearch = function () {
        console.log('功能暂未开放！');
        this.noSupport();
    };
    FeedsPage.prototype.presentToast = function (msg) {
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
    FeedsPage.prototype.goNote = function () {
        this.router.navigate(['/note']).then(function () {
            console.log('note');
        });
    };
    FeedsPage.prototype.loadData = function (event) {
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], FeedsPage.prototype, "infiniteScroll", void 0);
    FeedsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feeds',
            template: __webpack_require__(/*! ./feeds.page.html */ "./src/app/feeds/feeds.page.html"),
            styles: [__webpack_require__(/*! ./feeds.page.scss */ "./src/app/feeds/feeds.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], FeedsPage);
    return FeedsPage;
}());



/***/ })

}]);
//# sourceMappingURL=feeds-feeds-module.js.map