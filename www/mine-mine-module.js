(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mine-mine-module"],{

/***/ "./src/app/mine/mine.module.ts":
/*!*************************************!*\
  !*** ./src/app/mine/mine.module.ts ***!
  \*************************************/
/*! exports provided: MinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinePageModule", function() { return MinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mine.page */ "./src/app/mine/mine.page.ts");







var routes = [
    {
        path: '',
        component: _mine_page__WEBPACK_IMPORTED_MODULE_6__["MinePage"]
    }
];
var MinePageModule = /** @class */ (function () {
    function MinePageModule() {
    }
    MinePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mine_page__WEBPACK_IMPORTED_MODULE_6__["MinePage"]]
        })
    ], MinePageModule);
    return MinePageModule;
}());



/***/ }),

/***/ "./src/app/mine/mine.page.html":
/*!*************************************!*\
  !*** ./src/app/mine/mine.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"end\" menuId=\"second\">\n    <ion-header>\n        <ion-toolbar color=\"primary\">\n            <ion-title>设置</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <!--登录 注册 首页-->\n            <!--<ion-item>-->\n            <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/home']\">首页</ion-button>\n\n            <!--<ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/welcome']\">欢迎页</ion-button>-->\n            <!--</ion-item>-->\n            <!--<ion-item>-->\n            <ion-button expand=\"full\" fill=\"solid\" [routerLink]=\"['/login']\">登录</ion-button>\n            <!--</ion-item>-->\n            <!--<ion-item>-->\n            <ion-button expand=\"block\" fill=\"outline\" [routerLink]=\"['/register']\">注册</ion-button>\n\n            <ion-button expand=\"full\" fill=\"clear\" (click)=\"logout()\">退出登录</ion-button>\n            <!--</ion-item>-->\n\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-router-outlet main>\n\n    <ion-content>\n\n        <div style=\"position: fixed; top: 2rem; right: 1rem; z-index: 999\">\n            <ion-icon style=\"font-size: 2rem;color: white\" name=\"menu\" (click)=\"openSecond()\"></ion-icon>\n        </div>\n\n        <div>\n\n            <!--<div>-->\n            <img *ngIf=\"!userProfile\" src=\"assets/user_background.png\" alt=\"\" style=\"position:relative;z-index: 1; width: 100vw;height: 20vh;\" (click)=\"goEditBackground()\">\n            <img *ngIf=\"imgError\" src=\"assets/user_background.png\" alt=\"\" style=\"position:relative;z-index: 1; width: 100vw;height: 20vh;\" (click)=\"goEditBackground()\">\n            <img *ngIf=\"userProfile\"\n                 src=\"{{(userProfile['background_image'] && userProfile['background_image'] == 'default.jpg') ? 'assets/user_background.png' : storageBaseUrl+ userProfile['background_image']}}\"\n                 alt=\"\" style=\"position:relative;z-index: 1; width: 100vw;height: 20vh;\" (click)=\"goEditBackground()\" (error)=\"showDefaultSrc()\">\n            <!--</div>-->\n            <div class=\"box\">\n                <div class=\"content-bg\">\n                    <img src=\"./assets/img/feeds-bg.jpg\" alt=\"\">\n                </div>\n\n                <ion-card>\n                    <div>\n                        <div style=\"display: flex;flex-direction: column\">\n\n                            <div style=\"display: flex; flex-direction: row;align-items: center\">\n                                <div style=\"width: 100%;margin-top: 10px; margin-right: 1rem;margin-left: 1rem; display: flex; align-items: center;\">\n                                    <img *ngIf=\"!userProfile\" src=\"assets/shapes.svg\" alt=\"\"\n                                         style=\"width: 5rem;height: 5rem;border-radius: 50%;object-fit: cover\">\n\n                                    <img *ngIf=\"userProfile\"\n                                         src=\"{{(userProfile['avatar'] && userProfile['avatar'] == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ userProfile['avatar']}}\"\n                                         alt=\"\"\n                                         style=\"width: 5rem;height: 5rem;border-radius: 50%;object-fit: cover\">\n                                    <ion-text style=\"width: 57%;font-size: 2rem;color: white;opacity: 0.9;margin-left: 1rem\"\n                                              *ngIf=\"userProfile\">{{userProfile['name']}}\n                                    </ion-text>\n                                    <ion-icon (click)=\"editUserProfile()\" class=\"edit-icon\" name=\"md-open\"></ion-icon>\n                                    <!--<ion-button (click)=\"editUserProfile()\" expand=\"block\" fill=\"outline\"-->\n                                                <!--style=\"margin-left: 3rem\">-->\n                                    <!--</ion-button>-->\n                                </div>\n                            </div>\n\n                            <div style=\"color: grey; margin-left: 1.5rem;margin-top: 1rem;margin-bottom: 1rem\">\n                                <div style=\"margin: 0.5rem\">邮箱</div>\n                                <ion-text style=\"margin: 0.5rem\" *ngIf=\"userProfile\">{{userProfile['email']}}</ion-text>\n                            </div>\n\n                            <div style=\"color: grey; margin-left: 1.5rem; margin-bottom: 1rem\">\n                                <ion-text style=\"margin: 0.5rem\" *ngIf=\"(userProfile && !userProfile['signature'])\">您还没有个性签名赶快去编辑资料吧！</ion-text>\n                                <ion-text style=\"margin: 0.5rem\" *ngIf=\"userProfile && userProfile['signature']\">{{userProfile['signature']}}</ion-text>\n                            </div>\n                        </div>\n\n                    </div>\n                </ion-card>\n                <div class=\"bar\">\n\n                    <!-- Segment with secondary color -->\n                    <!--<ion-segment  mode=\"md\" (ionChange)=\"segmentChanged($event)\" >-->\n                        <!--<ion-segment-button mode=\"md\" value=\"publish\" checked>-->\n                            <!--<ion-label>我的发布</ion-label>-->\n                        <!--</ion-segment-button>-->\n                        <!--<ion-segment-button mode=\"md\" value=\"fans\">-->\n                            <!--<ion-label>粉丝</ion-label>-->\n                        <!--</ion-segment-button>-->\n                        <!--<ion-segment-button mode=\"md\" value=\"following\">-->\n                            <!--<ion-label>关注的人</ion-label>-->\n                        <!--</ion-segment-button>-->\n                    <!--</ion-segment>-->\n\n                    <div class=\"top-bar\">\n                        <div *ngFor=\"let item of bar\" (click)=\"selBar(item.val)\" [ngClass]=\"segmentValue == item.val ? 'activated' : '' \">{{item.name}}</div>\n                    </div>\n\n                </div>\n\n\n                <div *ngIf=\"segmentValue == 'publish'\" class=\"bar-item\">\n                    <!--<ion-virtual-scroll [items]=\"feedArr\" approxItemHeight=\"50px\" style=\"height: 600px\">-->\n                    <!--<ion-item *virtualItem=\"let item\" style=\"height: 100px\">-->\n                    <!--&lt;!&ndash;<ion-text (click)=\"getCurPlayer(item)\"> {{ item }} </ion-text>&ndash;&gt;-->\n                    <!--<ion-img [src]=\"'http://tiktok.tiantianquan.xyz/storage' + item.poster\"></ion-img>-->\n                    <!--</ion-item>-->\n                    <!--</ion-virtual-scroll>-->\n\n                    <div style=\"width: 100vw;display: flex;flex-wrap: wrap;justify-content: space-between\">\n                        <div *ngFor=\"let item of feedArr\" (click)=\"getCurPlayer(item)\">\n                            <!--<div style=\"width: 33vw\">-->\n                                <!--&lt;!&ndash;<div style=\"width: 100%; position: absolute;padding: 0.5rem;background-color:grey;opacity: 0.5\">&ndash;&gt;-->\n                                <!--&lt;!&ndash;<ion-text style=\"color: white;\">{{item.title}}</ion-text>&ndash;&gt;-->\n                                <!--&lt;!&ndash;</div>&ndash;&gt;-->\n                                <!--<img style=\"width: 8rem;height: 10rem;object-fit: cover;\"-->\n                                     <!--src=\"{{storageBaseUrl + item.poster}}\"-->\n                                     <!--alt=\"\">-->\n                            <!--</div>-->\n\n                            <div style=\"width: 33vw; display: flex;justify-content: center;align-items: center\">\n\n                                <img style=\"width: 32vw;height: 22vh;object-fit: cover;margin-bottom: 1vw\"\n                                     src=\"{{storageBaseUrl + item.poster}}\"\n                                     alt=\"\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"feedArr && feedArr.length == 0\"\n                         style=\"color: grey;display: flex;justify-content: center;margin: 1rem\">\n                        <ion-text>暂无更多内容...</ion-text>\n                    </div>\n\n                </div>\n\n                <div *ngIf=\"segmentValue == 'fans'\" class=\"bar-item\">\n\n                    <ion-item *ngFor=\"let item of followerArr\">\n\n                        <ion-avatar>\n                            <img src=\"{{( item.avatar && item.avatar == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ item.avatar}}\">\n                        </ion-avatar>\n\n                        <!--<ion-img style=\"width: 3rem;height: 3rem;border-radius: 50%;object-fit: cover\" [src]=\"\"></ion-img>-->\n                        <ion-text style=\"margin: 1rem;\" (click)=\"goUserProfile(item['follower_id'])\"> {{ item['name'] }}\n                        </ion-text>\n\n                        <ion-icon name=\"arrow-dropright\" style=\"margin-left: 10rem;\"></ion-icon>\n\n                    </ion-item>\n                    <!--<ion-virtual-scroll [items]=\"followerArr\" approxItemHeight=\"50px\" style=\"height: 600px\">-->\n\n                    <!--<ion-card *virtualItem=\"let item\" style=\"height: 4rem\">-->\n                    <!--<ion-item>-->\n\n                    <!--<ion-avatar>-->\n                    <!--<img src=\"{{( item.avatar && item.avatar == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ item.avatar}}\">-->\n                    <!--</ion-avatar>-->\n\n                    <!--&lt;!&ndash;<ion-img style=\"width: 3rem;height: 3rem;border-radius: 50%;object-fit: cover\" [src]=\"\"></ion-img>&ndash;&gt;-->\n                    <!--<ion-text style=\"margin: 1rem;\" (click)=\"goUserProfile(item)\"> {{ item['name'] }}-->\n                    <!--</ion-text>-->\n\n                    <!--<ion-icon name=\"arrow-dropright\" style=\"margin-left: 10rem;\"></ion-icon>-->\n\n                    <!--</ion-item>-->\n                    <!--</ion-card>-->\n\n                    <!--</ion-virtual-scroll>-->\n\n                    <div *ngIf=\"followerArr && followerArr.length == 0\"\n                         style=\"color: grey;display: flex;justify-content: center;margin: 1rem\">\n                        <ion-text>暂无更多内容...</ion-text>\n                    </div>\n\n                </div>\n\n\n                <div *ngIf=\"segmentValue == 'following'\" class=\"bar-item\">\n\n                    <ion-list>\n                        <ion-item *ngFor=\"let item of followingArr\">\n\n                            <ion-avatar>\n                                <img src=\"{{( item.avatar && item.avatar == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ item.avatar}}\">\n                            </ion-avatar>\n                            <ion-text style=\"margin: 1rem\" (click)=\"goUserProfile(item['user_id'])\"> {{ item['name'] }}\n                            </ion-text>\n\n                            <ion-icon name=\"arrow-dropright\" style=\"margin-left: 10rem;\"></ion-icon>\n\n                        </ion-item>\n                    </ion-list>\n                    <!--<ion-virtual-scroll [items]=\"followingArr\" approxItemHeight=\"50px\" style=\"height: 600px\">-->\n\n                    <!--<ion-card *virtualItem=\"let item\" style=\"height: 6rem\">-->\n                    <!--<ion-item>-->\n\n                    <!--<ion-avatar>-->\n                    <!--<img src=\"{{( item.avatar && item.avatar == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ item.avatar}}\">-->\n                    <!--</ion-avatar>-->\n                    <!--<ion-text style=\"margin: 1rem\" (click)=\"goUserProfile(item)\"> {{ item['name'] }}-->\n                    <!--</ion-text>-->\n\n                    <!--<ion-icon name=\"arrow-dropright\" style=\"margin-left: 10rem;\"></ion-icon>-->\n\n                    <!--</ion-item>-->\n                    <!--</ion-card>-->\n\n                    <!--</ion-virtual-scroll>-->\n\n                    <div *ngIf=\"followingArr && followingArr.length == 0\"\n                         style=\"color: grey;display: flex;justify-content: center;\">\n                        <ion-text>暂无更多内容...</ion-text>\n                    </div>\n                </div>\n\n\n                <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n                    <ion-infinite-scroll-content\n                            loadingSpinner=\"bubbles\"\n                            loadingText=\"加载更多内容...\">\n                    </ion-infinite-scroll-content>\n                </ion-infinite-scroll>\n\n            </div>\n        </div>\n\n\n        <div style=\"position: fixed; bottom: 0;z-index: 99\">\n\n            <div style=\"display: flex;justify-content: space-around;align-items: center; width: 100vw;height: 50px;background-color:black;opacity: 0.8;\">\n\n                <div (click)=\"goIndex()\" style=\"color: white\">首页</div>\n\n                <ion-icon name=\"add-circle-outline\" (click)=\"goPublish()\"\n                          style=\"color: white;font-size: 2rem;\"></ion-icon>\n\n                <div (click)=\"goMine()\" style=\"color: white\">我的</div>\n\n            </div>\n\n        </div>\n\n    </ion-content>\n</ion-router-outlet>\n"

/***/ }),

/***/ "./src/app/mine/mine.page.scss":
/*!*************************************!*\
  !*** ./src/app/mine/mine.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-bg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 0; }\n  .content-bg img {\n    width: 100%;\n    height: 100%; }\n  ion-card {\n  --background: rgba(250, 250, 250, .1)\n; }\n  .edit-icon {\n  position: relative;\n  right: 0;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: white; }\n  .bar {\n  position: relative;\n  z-index: 1;\n  color: white; }\n  .bar-item {\n  position: relative;\n  z-index: 1; }\n  ion-segment {\n  --color: white; }\n  ion-segment-button {\n  --broder-style: solid;\n  --border-color: red;\n  --border-width: 0 0 0.55px;\n  --color: #354970;\n  --color-activated: white;\n  --color-checked: white;\n  --border-color-checked: red;\n  --color-focused: white;\n  --ripple-color: transparent; }\n  .top-bar {\n  display: flex;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  color: #354970;\n  font-size: 14px;\n  width: 100%; }\n  .top-bar div {\n    width: 33.3%;\n    border-bottom: 2px solid #202E49; }\n  .top-bar .activated {\n    border-bottom: 2px solid #67C7E2;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2p1bmJhby9wcm9qZWN0L3Rpa3Rvay90aWt0b2stbWFzdGVyL2FwcC9wYXRjaC9zcmMvYXBwL21pbmUvbWluZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBS04sVUFBVSxFQUFBO0VBVFo7SUFNSSxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBS2hCO0VBQ0U7QUFBYSxFQUFBO0VBRWY7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWSxFQUFBO0VBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVksRUFBQTtFQUVkO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUVaO0VBQ0UsY0FBUSxFQUFBO0VBRVY7RUFDRSxxQkFBZTtFQUNmLG1CQUFlO0VBQ2YsMEJBQWU7RUFDZixnQkFBUTtFQUNSLHdCQUFrQjtFQUNsQixzQkFBZ0I7RUFDaEIsMkJBQXVCO0VBQ3ZCLHNCQUFnQjtFQUNoQiwyQkFBZSxFQUFBO0VBR2pCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVyxFQUFBO0VBUGI7SUFTSSxZQUFZO0lBQ1osZ0NBQWdDLEVBQUE7RUFWcEM7SUFhSSxnQ0FBZ0M7SUFDaEMsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWluZS9taW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWJnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIHotaW5kZXg6IDA7XG5cbn1cbmlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIC4xKVxufVxuLmVkaXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYmFyLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5pb24tc2VnbWVudCB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1icm9kZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci1jb2xvcjogcmVkO1xuICAtLWJvcmRlci13aWR0aDogMCAwIDAuNTVweDtcbiAgLS1jb2xvcjogIzM1NDk3MDtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHdoaXRlO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiByZWQ7XG4gIC0tY29sb3ItZm9jdXNlZDogd2hpdGU7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcblxufVxuLnRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzU0OTcwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXYge1xuICAgIHdpZHRoOiAzMy4zJTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzIwMkU0OTtcbiAgfVxuICAuYWN0aXZhdGVkIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzY3QzdFMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mine/mine.page.ts":
/*!***********************************!*\
  !*** ./src/app/mine/mine.page.ts ***!
  \***********************************/
/*! exports provided: MinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinePage", function() { return MinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_player_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player/player.page */ "./src/app/player/player.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _edit_backgound_edit_backgound_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-backgound/edit-backgound.page */ "./src/app/edit-backgound/edit-backgound.page.ts");







var MinePage = /** @class */ (function () {
    function MinePage(router, http, modalController, menu, popoverController) {
        this.router = router;
        this.http = http;
        this.modalController = modalController;
        this.menu = menu;
        this.popoverController = popoverController;
        this.imgError = false;
        this.segmentValue = 'fans';
        this.storageBaseUrl = ROOT_URL + 'storage';
        this.bar = [
            {
                name: '我的发布',
                val: 'publish'
            },
            {
                name: '粉丝',
                val: 'fans'
            },
            {
                name: '关注的人',
                val: 'following'
            }
        ];
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
        this.data = [];
    }
    MinePage.prototype.ngOnInit = function () {
        var _this = this;
        var baseUrl = ROOT_URL + 'user/' + localStorage.getItem('anshi_id');
        this.http.get(baseUrl + '/profile').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.userProfile = res['data'];
            }
        });
        this.http.get(baseUrl + '/followers').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                // this.userProfile = res['data'];
                _this.followerArr = res['data'];
                console.log(_this.followerArr);
            }
        });
        this.http.get(baseUrl + '/feeds').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.feedArr = res['data'];
                console.log(_this.feedArr);
                // this.userProfile = res['data'];
            }
        });
        this.http.get(baseUrl + '/followings').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                // this.userProfile = res['data'];
                _this.followingArr = res['data'];
                console.log(_this.followingArr);
            }
        });
    };
    MinePage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: "<div>hahahha</div>",
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MinePage.prototype.loadData = function (event) {
        var _this = this;
        console.log('Done');
        var baseUrl = ROOT_URL + 'user/' + localStorage.getItem('anshi_id');
        this.http.get(baseUrl + '/feeds').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.feedArr = res['data'];
                console.log(_this.feedArr);
                event.target.complete();
                // this.userProfile = res['data'];
            }
        });
        // setTimeout(() => {
        //     console.log('Done');
        //     event.target.complete();
        //     this.videoArr.push({
        //         id: 1,
        //         src: 'assets/video/test1.mp4',
        //         poster: 'assets/shapes.svg',
        //         title: '就是他爱科技那几家世纪东方自己是加 机票的风景  几点女警 家地方拿 奥别的那片'
        //     });
        // }, 500);
    };
    MinePage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    MinePage.prototype.goIndex = function () {
        this.router.navigate(['/feeds']).then(function (res) {
            console.log(res);
        });
    };
    MinePage.prototype.goPublish = function () {
        this.router.navigate(['/create']).then(function (res) {
            console.log(res);
        });
    };
    MinePage.prototype.goMine = function () {
        this.router.navigate(['/mine']).then(function (res) {
            console.log('mine');
        });
    };
    MinePage.prototype.logout = function () {
        localStorage.setItem('anshi_id', '');
        localStorage.setItem('welcomeTime', '');
        this.router.navigate(['/feeds'], { queryParams: { statue: 1 } }).then(function (res) {
            console.log('welcome');
        });
    };
    MinePage.prototype.getCurPlayer = function (e) {
        console.log(e);
        // this.router.navigate(['/player']);
        this.presentModal(e);
    };
    MinePage.prototype.presentModal = function (e) {
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
    MinePage.prototype.segmentChanged = function (ev) {
        this.segmentValue = ev.detail.value;
        // console.log(this.segmentValue, 'Segment changed', ev);
        console.log(this.segmentValue == 'following');
    };
    MinePage.prototype.goUserProfile = function (id) {
        console.log(id);
        var uid = id;
        if (uid == localStorage.getItem('anshi_id')) {
            console.log('not click me');
            this.router.navigate(['/mine'], { queryParams: { uid: uid } }).then(function (res) {
                console.log(res, 'mine');
            });
        }
        else {
            this.router.navigate(['/user-profile'], { queryParams: { uid: uid } }).then(function (res) {
                console.log(res);
            });
        }
    };
    MinePage.prototype.editUserProfile = function () {
        this.router.navigate(['/profile-edit']).then(function (res) {
            console.log(res);
        });
    };
    MinePage.prototype.openSecond = function () {
        this.menu.enable(true, 'second');
        this.menu.open('second');
    };
    MinePage.prototype.goEditBackground = function () {
        this.presentEditBackgroundModal({ path: this.userProfile['background_image'] }).then(function (res) {
            console.log(res);
        });
    };
    MinePage.prototype.presentEditBackgroundModal = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _edit_backgound_edit_backgound_page__WEBPACK_IMPORTED_MODULE_6__["EditBackgoundPage"],
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
    MinePage.prototype.showDefaultSrc = function () {
        console.log('image error');
        this.imgError = true;
    };
    MinePage.prototype.selBar = function (val) {
        this.segmentValue = val;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], MinePage.prototype, "infiniteScroll", void 0);
    MinePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mine',
            template: __webpack_require__(/*! ./mine.page.html */ "./src/app/mine/mine.page.html"),
            styles: [__webpack_require__(/*! ./mine.page.scss */ "./src/app/mine/mine.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], MinePage);
    return MinePage;
}());



/***/ })

}]);
//# sourceMappingURL=mine-mine-module.js.map