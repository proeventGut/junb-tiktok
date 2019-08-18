(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["note-note-module"],{

/***/ "./src/app/note/note.module.ts":
/*!*************************************!*\
  !*** ./src/app/note/note.module.ts ***!
  \*************************************/
/*! exports provided: NotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePageModule", function() { return NotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note.page */ "./src/app/note/note.page.ts");







var routes = [
    {
        path: '',
        component: _note_page__WEBPACK_IMPORTED_MODULE_6__["NotePage"]
    }
];
var NotePageModule = /** @class */ (function () {
    function NotePageModule() {
    }
    NotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_note_page__WEBPACK_IMPORTED_MODULE_6__["NotePage"]]
        })
    ], NotePageModule);
    return NotePageModule;
}());



/***/ }),

/***/ "./src/app/note/note.page.html":
/*!*************************************!*\
  !*** ./src/app/note/note.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>-->\n<!--<ion-toolbar>-->\n<!--<ion-title>便签墙</ion-title>-->\n<!--</ion-toolbar>-->\n<!--</ion-header>-->\n\n<ion-content>\n    <div style=\"position: fixed;top: 0;left: 0;z-index: 1\">\n        <img style=\"width: 100vw;height: 100vh;object-fit: cover;\" src=\"assets/note_ground.png\">\n    </div>\n    <div style=\"position: fixed;top: 0;left: 0;width: 100vw;height: 100vh;z-index: 99;\" (click)=\"testPoint($event)\">\n\n    </div>\n\n    <div *ngFor=\"let item of points\">\n        <div style=\"position: absolute;z-index: 100\"\n             [ngStyle]=\"{\n      left: item.offsetX,\n      top: item.offsetY\n      }\" (click)=\"showDetal(item)\">\n            <ion-card>\n                <div style=\"margin: 1rem\">\n                    {{item['content']}}\n                </div>\n            </ion-card>\n\n        </div>\n    </div>\n\n    <div style=\"width: 100vw; height: 20vh; position: fixed;left: 0;z-index: 101;\" [ngStyle]=\"{\n    top: textPosition }\">\n        <ion-card>\n            <div style=\"background-color: wheat;\">\n                <div>\n                    <ion-textarea #inputRef [required]=\"true\"  rows=\"8\" cols=\"20\" [placeholder]=\"'输入便签内容吧'\" [(ngModel)]=\"context\"></ion-textarea>\n                </div>\n                <div style=\"display: flex;justify-content: flex-end\">\n                    <ion-button shape=\"round\" (click)=\"sendNote()\">发布</ion-button>\n                </div>\n            </div>\n        </ion-card>\n    </div>\n\n    <!--<div *ngIf=\"edit\" style=\"position: absolute; top: 20vh;left: 40vw\">-->\n    <!--<ion-textarea #inputRef [placeholder]=\"'添加便签吧'\" [ngModel]=\"context\"></ion-textarea>-->\n    <!--</div>-->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/note/note.page.scss":
/*!*************************************!*\
  !*** ./src/app/note/note.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGUvbm90ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/note/note.page.ts":
/*!***********************************!*\
  !*** ./src/app/note/note.page.ts ***!
  \***********************************/
/*! exports provided: NotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePage", function() { return NotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _note_editor_note_editor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../note-editor/note-editor.page */ "./src/app/note-editor/note-editor.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var NotePage = /** @class */ (function () {
    function NotePage(modalController, http, toastController) {
        this.modalController = modalController;
        this.http = http;
        this.toastController = toastController;
        this.textPosition = '-40vh';
        this.edit = false;
        this.curOffsetX = 0;
        this.curOffsetY = 0;
        this.context = '';
        this.points = [];
    }
    NotePage.prototype.ngOnInit = function () {
        this.loadData();
    };
    NotePage.prototype.loadData = function () {
        var _this = this;
        this.http.get(ROOT_URL + 'note/list?cookie=' + localStorage.getItem('anshi_cookie')).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                res['data']['data'].forEach(function (item) {
                    console.log(item);
                    _this.points.push({
                        id: item['id'],
                        content: item['content'],
                        offsetX: item['offset_x'] + 'px',
                        offsetY: item['offset_y'] + 'px'
                    });
                });
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
    };
    NotePage.prototype.testPoint = function (e) {
        console.log(e);
        this.curOffsetX = e.offsetX;
        this.curOffsetY = e.offsetY;
        this.textPosition = '5vh';
        this.inputRef.setFocus().then(function (res) {
            console.log('input focus');
        });
        //
        // this.points.push({
        //     content: 'hahhah',
        //     offsetX: e.offsetX + 'px',
        //     offsetY: e.offsetY + 'px'
        // });
    };
    NotePage.prototype.presentEditorModal = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _note_editor_note_editor_page__WEBPACK_IMPORTED_MODULE_3__["NoteEditorPage"],
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
    NotePage.prototype.sendNote = function () {
        var _this = this;
        var params = {
            content: this.context,
            offset_x: this.curOffsetX,
            offset_y: this.curOffsetY,
            cookie: localStorage.getItem('anshi_cookie')
        };
        console.log(params);
        this.http.post(ROOT_URL + 'note/add', params).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.context = '';
                _this.textPosition = '-40vh';
                _this.points = [];
                _this.loadData();
                // this.loadComment();
            }
        }, function (err) {
            console.log(err);
            _this.presentToast(err['error']['msg']).then(function (r) {
                console.log(r);
            });
        });
    };
    NotePage.prototype.presentToast = function (msg) {
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
    NotePage.prototype.showDetal = function (e) {
        var _this = this;
        console.log(e);
        this.presentEditorModal(e).then(function (res) {
            _this.points = [];
            _this.loadData();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotePage.prototype, "inputRef", void 0);
    NotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(/*! ./note.page.html */ "./src/app/note/note.page.html"),
            styles: [__webpack_require__(/*! ./note.page.scss */ "./src/app/note/note.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], NotePage);
    return NotePage;
}());



/***/ })

}]);
//# sourceMappingURL=note-note-module.js.map