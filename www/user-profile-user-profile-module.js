(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");







var routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]
    }
];
var UserProfilePageModule = /** @class */ (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.page.html":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <!--<div>-->\n  <img src=\"assets/user_background.png\" alt=\"\" style=\"width: 100vw;height: 20vh;\">\n  <!--</div>-->\n  <div>\n\n\n    <ion-card>\n      <div>\n        <div style=\"display: flex;flex-direction: column\">\n\n          <div style=\"display: flex; flex-direction: row;align-items: center\">\n            <div style=\"margin-right: 1rem;margin-left: 1rem; display: flex; align-items: center\">\n              <img *ngIf=\"!userProfile\" src=\"assets/shapes.svg\" alt=\"\"\n                   style=\"width: 5rem;height: 5rem;border-radius: 50%;object-fit: cover\">\n\n              <img *ngIf=\"userProfile\"\n                   src=\"{{(userProfile['avatar'] && userProfile['avatar'] == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ userProfile['avatar']}}\"\n                   alt=\"\"\n                   style=\"width: 5rem;height: 5rem;border-radius: 50%;object-fit: cover\">\n              <ion-text style=\"font-size: 2rem;color: black;opacity: 0.9;margin-left: 1rem\"\n                        *ngIf=\"userProfile\">{{userProfile['name']}}\n              </ion-text>\n\n              <ion-button *ngIf=\"!isFollow\" style=\"margin-left: 3rem\"  shape=\"round\"  (click)=\"follow()\">关注</ion-button>\n              <ion-button *ngIf=\"isFollow\" style=\"margin-left: 2rem\"  shape=\"round\"  (click)=\"follow()\">取消关注</ion-button>\n            </div>\n          </div>\n\n          <div style=\"color: grey; margin-left: 1.5rem;margin-top: 1rem;margin-bottom: 1rem\">\n            <div style=\"margin: 0.5rem\">邮箱</div>\n            <ion-text style=\"margin: 0.5rem\" *ngIf=\"userProfile\">{{userProfile['email']}}</ion-text>\n          </div>\n          <!--<div>安石</div>-->\n          <!--<div>我帶著書和詩、去去尋找運放鋒利的乳汁</div>-->\n        </div>\n\n      </div>\n    </ion-card>\n\n    <!--<div>-->\n      <!--<div style=\"display: flex;flex-direction: column\">-->\n\n        <!--&lt;!&ndash;<div style=\"display: flex; flex-direction: row; align-items: center\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<div>&ndash;&gt;-->\n            <!--&lt;!&ndash;<img src=\"assets/shapes.svg\" alt=\"\" style=\"width: 4rem;height: 4rem;border-radius: 50%\">&ndash;&gt;-->\n          <!--&lt;!&ndash;</div>&ndash;&gt;-->\n          <!--&lt;!&ndash;<ion-text style=\"font-size: 2rem;\" *ngIf=\"userProfile\">{{userProfile['name']}}</ion-text>&ndash;&gt;-->\n\n          <!--&lt;!&ndash;<ion-button  shape=\"round\"  (click)=\"follow()\">关注</ion-button>&ndash;&gt;-->\n        <!--&lt;!&ndash;</div>&ndash;&gt;-->\n\n        <!--<div style=\"display: flex; flex-direction: row;align-items: center\">-->\n          <!--<div style=\"margin-right: 1rem;margin-left: 1rem\">-->\n            <!--<img src=\"assets/shapes.svg\" alt=\"\" style=\"width: 4rem;height: 4rem;border-radius: 50%\">-->\n          <!--</div>-->\n          <!--<ion-text style=\"font-size: 2rem;color: black;opacity: 0.9\" *ngIf=\"userProfile\">{{userProfile['name']}}</ion-text>-->\n\n          <!--<ion-button *ngIf=\"!isFollow\" style=\"margin-left: 5rem\"  shape=\"round\"  (click)=\"follow()\">关注</ion-button>-->\n          <!--<ion-button *ngIf=\"isFollow\" style=\"margin-left: 5rem\"  shape=\"round\"  (click)=\"follow()\">取消关注</ion-button>-->\n        <!--</div>-->\n\n        <!--<div style=\"color: grey; margin-left: 1.5rem;margin-top: 1rem;\">-->\n          <!--<div style=\"margin: 0.5rem\">账号</div>-->\n          <!--<ion-text style=\"margin: 0.5rem\" *ngIf=\"userProfile\">{{userProfile['email']}}</ion-text>-->\n        <!--</div>-->\n\n      <!--</div>-->\n\n    <!--</div>-->\n\n    <div>\n\n\n      <ion-segment (ionChange)=\"segmentChanged($event)\" color=\"secondary\">\n        <ion-segment-button value=\"publish\" checked>\n          <ion-label>作品</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"fans\" >\n          <ion-label>粉丝</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"following\">\n          <ion-label>关注</ion-label>\n        </ion-segment-button>\n        <!--<ion-segment-button value=\"sat\">-->\n        <!--<ion-label>关注</ion-label>-->\n        <!--</ion-segment-button>-->\n      </ion-segment>\n\n    </div>\n\n    <div *ngIf=\"segmentValue == 'publish'\">\n      <!--<ion-virtual-scroll [items]=\"feedArr\" approxItemHeight=\"50px\" style=\"height: 600px\">-->\n      <!--<ion-item *virtualItem=\"let item\" style=\"height: 100px\">-->\n      <!--&lt;!&ndash;<ion-text (click)=\"getCurPlayer(item)\"> {{ item }} </ion-text>&ndash;&gt;-->\n      <!--<ion-img [src]=\"'http://tiktok.tiantianquan.xyz/storage' + item.poster\"></ion-img>-->\n      <!--</ion-item>-->\n      <!--</ion-virtual-scroll>-->\n\n      <div style=\"width: 100vw;display: flex;flex-wrap: wrap;justify-content: space-between\">\n        <div *ngFor=\"let item of feedArr\" (click)=\"getCurPlayer(item)\">\n          <div style=\"width: 33vw\">\n            <!--<div style=\"width: 100%; position: absolute;padding: 0.5rem;background-color:grey;opacity: 0.5\">-->\n            <!--<ion-text style=\"color: white;\">{{item.title}}</ion-text>-->\n            <!--</div>-->\n            <img style=\"width: 8rem;height: 10rem;object-fit: cover;\"\n                 src=\"{{storageBaseUrl + item.poster}}\"\n                 alt=\"\">\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"feedArr && feedArr.length == 0\"\n           style=\"display: flex;justify-content: center;margin: 1rem\">\n        <ion-text>暂无更多内容...</ion-text>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"segmentValue == 'fans'\">\n\n\n      <ion-list>\n        <ion-item *ngFor=\"let item of followerArr\">\n\n          <ion-avatar>\n            <img src=\"{{( item.avatar && item.avatar == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ item.avatar}}\">\n          </ion-avatar>\n\n          <!--<ion-img style=\"width: 3rem;height: 3rem;border-radius: 50%;object-fit: cover\" [src]=\"\"></ion-img>-->\n          <ion-text style=\"margin: 1rem;\" (click)=\"goUserProfile(item['follower_id'])\"> {{ item['name'] }}\n          </ion-text>\n\n          <ion-icon name=\"arrow-dropright\" style=\"margin-left: 10rem;\"></ion-icon>\n\n        </ion-item>\n      </ion-list>\n\n\n      <!--<ion-virtual-scroll [items]=\"followerArr\" approxItemHeight=\"50px\" style=\"height: 600px\">-->\n        <!--&lt;!&ndash;<ion-item *virtualItem=\"let item\" style=\"height: 50px\">&ndash;&gt;-->\n          <!--&lt;!&ndash;<ion-text (click)=\"goUserProfile(item)\"> {{ item['name'] }} </ion-text>&ndash;&gt;-->\n        <!--&lt;!&ndash;</ion-item>&ndash;&gt;-->\n        <!--<ion-item *virtualItem=\"let item\" style=\"height: 50px\">-->\n          <!--<ion-avatar slot=\"start\">-->\n            <!--<img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">-->\n          <!--</ion-avatar>-->\n          <!--<ion-label (click)=\"goUserProfile(item)\">{{ item['name'] }}</ion-label>-->\n        <!--</ion-item>-->\n      <!--</ion-virtual-scroll>-->\n\n      <div *ngIf=\"followerArr && followerArr.length == 0\" style=\"display: flex;justify-content: center;margin: 1rem\">\n        <ion-text>暂无更多内容...</ion-text>\n      </div>\n    </div>\n\n\n    <div *ngIf=\"segmentValue == 'following'\">\n\n      <ion-list>\n        <ion-item *ngFor=\"let item of followingArr\">\n\n          <ion-avatar>\n            <img src=\"{{( item.avatar && item.avatar == 'default.jpg') ? 'assets/shapes.svg' : storageBaseUrl+ item.avatar}}\">\n          </ion-avatar>\n          <ion-text style=\"margin: 1rem\" (click)=\"goUserProfile(item['user_id'])\"> {{ item['name'] }}\n          </ion-text>\n\n          <ion-icon name=\"arrow-dropright\" style=\"margin-left: 10rem;\"></ion-icon>\n\n        </ion-item>\n      </ion-list>\n      <!---->\n      <!--<ion-virtual-scroll [items]=\"followingArr\" approxItemHeight=\"50px\" style=\"height: 600px\">-->\n        <!--<ion-item *virtualItem=\"let item\" style=\"height: 50px\">-->\n          <!--<ion-text (click)=\"goUserProfile(item)\"> {{ item['name'] }} </ion-text>-->\n        <!--</ion-item>-->\n      <!--</ion-virtual-scroll>-->\n\n      <div *ngIf=\"followingArr && followingArr.length == 0\" style=\"display: flex;justify-content: center;margin: 1rem\">\n        <ion-text>暂无更多内容...</ion-text>\n      </div>\n    </div>\n\n    <!--<ion-virtual-scroll [items]=\"videoArr\" approxItemHeight=\"50px\" style=\"height: 600px\">-->\n      <!--<ion-item *virtualItem=\"let item\" style=\"height: 50px\">-->\n        <!--{{ item }}-->\n      <!--</ion-item>-->\n    <!--</ion-virtual-scroll>-->\n\n    <!--<div *ngFor=\"let item of videoArr\" (click)=\"testParams(item)\">-->\n      <!--<div style=\"position: absolute;padding: 0.5rem;background-color:grey;opacity: 0.5\">-->\n        <!--<ion-text style=\"color: white;\">{{item.title}}</ion-text>-->\n      <!--</div>-->\n      <!--<img style=\"width: 100vw;height: 30vh;object-fit: cover\" src=\"{{item.poster}}\" alt=\"\">-->\n    <!--</div>-->\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n              loadingSpinner=\"bubbles\"\n              loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n\n  <div style=\"position: fixed; bottom: 0;z-index: 99\">\n\n    <div style=\"display: flex;justify-content: space-around;align-items: center; width: 100vw;background-color:black;opacity: 0.9;\">\n\n      <div (click)=\"goIndex()\" style=\"color: white\">首页</div>\n\n      <ion-icon name=\"add-circle-outline\" (click)=\"goPublish()\" style=\"color: white;font-size: 3rem;\"></ion-icon>\n\n      <div (click)=\"goMine()\" style=\"color: white\">我的</div>\n\n    </div>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _player_player_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../player/player.page */ "./src/app/player/player.page.ts");






var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(route, router, http, modalController, toastController) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.modalController = modalController;
        this.toastController = toastController;
        this.segmentValue = 'fans';
        this.isFollow = false;
        this.storageBaseUrl = ROOT_URL + 'storage';
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
    UserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.uid);
        this.route.queryParams.subscribe(function (res) {
            console.log(res);
            _this.uid = res['uid'];
            _this.initUserInfo();
        });
    };
    UserProfilePage.prototype.initUserInfo = function () {
        var _this = this;
        var baseUrl = ROOT_URL + 'user/' + this.uid;
        this.http.get(baseUrl + '/profile' + ("?cookie=" + localStorage.getItem('anshi_cookie'))).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.userProfile = res['data'];
                _this.isFollow = res['data']['is_follow'] == 1 ? true : false;
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
        this.http.get(baseUrl + '/followers').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                // this.userProfile = res['data'];
                _this.followerArr = res['data'];
                console.log(_this.followerArr);
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
        this.http.get(baseUrl + '/followings').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.followingArr = res['data'];
                console.log(_this.followingArr);
                // this.userProfile = res['data'];
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
        this.http.get(baseUrl + '/feeds').subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.feedArr = res['data'];
                console.log(_this.feedArr);
                // this.userProfile = res['data'];
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
    };
    UserProfilePage.prototype.loadData = function (event) {
        var _this = this;
        console.log('Done');
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            _this.videoArr.push({
                id: 1,
                src: 'assets/video/test1.mp4',
                poster: 'assets/shapes.svg',
                title: '就是他爱科技那几家世纪东方自己是加 机票的风景  几点女警 家地方拿 奥别的那片'
            });
        }, 500);
    };
    UserProfilePage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    UserProfilePage.prototype.goIndex = function () {
        this.router.navigate(['/home']).then(function (res) {
            console.log(res);
        });
    };
    UserProfilePage.prototype.goPublish = function () {
        this.router.navigate(['/create']).then(function (res) {
            console.log(res);
        });
    };
    UserProfilePage.prototype.goMine = function () {
        this.router.navigate(['/mine']).then(function (res) {
            console.log(res);
        });
    };
    UserProfilePage.prototype.testParams = function (e) {
        console.log(e);
        // this.router.navigate(['/player']);
        this.presentModal(e);
    };
    UserProfilePage.prototype.presentModal = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _player_player_page__WEBPACK_IMPORTED_MODULE_5__["PlayerPage"],
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
    UserProfilePage.prototype.segmentChanged = function (ev) {
        this.segmentValue = ev.detail.value;
        console.log(this.segmentValue, 'Segment changed', ev);
        console.log(this.segmentValue == 'following');
    };
    UserProfilePage.prototype.follow = function () {
        var _this = this;
        this.http.post(ROOT_URL + ("user/" + this.uid + "/follow"), { cookie: localStorage.getItem('anshi_cookie') }).subscribe(function (res) {
            console.log(res);
            _this.presentToast(res['msg']).then(function (r) {
                console.log(r);
            });
            _this.initUserInfo();
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
    };
    UserProfilePage.prototype.goUserProfile = function (id) {
        console.log(id);
        var uid = id;
        if (uid == this.uid) {
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
    UserProfilePage.prototype.getCurPlayer = function (e) {
        console.log(e);
        // this.router.navigate(['/player']);
        this.presentModal(e);
    };
    UserProfilePage.prototype.presentToast = function (msg) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], UserProfilePage.prototype, "infiniteScroll", void 0);
    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.page.html */ "./src/app/user-profile/user-profile.page.html"),
            styles: [__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], UserProfilePage);
    return UserProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map