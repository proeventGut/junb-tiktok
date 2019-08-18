(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-create-module"],{

/***/ "./src/app/create/create.module.ts":
/*!*****************************************!*\
  !*** ./src/app/create/create.module.ts ***!
  \*****************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/create/create.page.ts");







var routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]
    }
];
var CreatePageModule = /** @class */ (function () {
    function CreatePageModule() {
    }
    CreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"]]
        })
    ], CreatePageModule);
    return CreatePageModule;
}());



/***/ }),

/***/ "./src/app/create/create.page.html":
/*!*****************************************!*\
  !*** ./src/app/create/create.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar mode=\"ios\" color=\"header\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button [text]=\"' '\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>视频发布</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"content-bg\">\n        <img src=\"./assets/img/feeds-bg.jpg\" alt=\"\">\n    </div>\n\n    <div style=\"text-align: center; margin-top: 1rem;margin-bottom: 1rem;\">\n\n        <ion-item color=\"air\" class=\"title\">\n            <ion-label color=\"light\" slot=\"start\">标题</ion-label>\n            <ion-textarea [(ngModel)]=\"title\" rows=\"6\" cols=\"20\" placeholder=\"给您的视频添加一个有趣的标题吧！\"></ion-textarea>\n        </ion-item>\n\n        <!--<ion-item>-->\n            <!--<ion-label>預覽圖</ion-label>-->\n        <!--预览图 给您的视频添加一个有趣的标题吧！-->\n            <!--<img style=\"object-fit: cover;width: 8rem;height: 10rem\" src=\"assets/shapes.svg\">-->\n        <!--</ion-item>-->\n\n        <div style=\"display: flex\">\n            <!--<button ion-button (click)=\"openCamera()\">打开摄像头</button>-->\n\n            <!--<button ion-button (click)=\"recordVideo()\">录像</button>-->\n\n\n\n        </div>\n\n        <!--<ion-item class=\"title\" color=\"air\">-->\n            <!--<ion-label color=\"light\">封面</ion-label>-->\n            <!--<img *ngIf=\"!imageSource\" style=\"object-fit: cover;width: 8rem;height: 10rem\" src=\"assets/shapes.svg\">-->\n            <!--<div *ngIf=\"imageSource\">-->\n                <!--<img style=\"object-fit: cover;width: 8rem;height: 10rem\"-->\n                     <!--src=\"{{'http://tiktok.tiantianquan.xyz/storage' + imageSource}}\" alt=\"\">-->\n            <!--</div>-->\n        <!--</ion-item>-->\n\n        <div class=\"video\">\n            <ion-button *ngIf=\"!imageSource\" (click)=\"selectVideo()\">\n                选择视频\n                <ion-icon slot=\"end\" name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n            <!--<div *ngIf=\"!imageSource\" class=\"check\">-->\n                <!--<img src=\"assets/shapes.svg\" alt=\"\">-->\n                <!--<span>封面</span>-->\n            <!--</div>-->\n            <div *ngIf=\"imageSource\" class=\"check\">\n                <img src=\"{{'http://tiktok.tiantianquan.xyz/storage' + imageSource}}\" alt=\"\">\n                <span>封面</span>\n            </div>\n        </div>\n\n    </div>\n\n    <div *ngIf=\"upLoading\">\n        <ion-spinner name=\"crescent\"></ion-spinner>\n    </div>\n\n    <!--<div>-->\n        <!--<ion-progress-bar value=\"{{progresss}}\"></ion-progress-bar>-->\n    <!--</div>-->\n\n\n\n    <div class=\"release\" (click)=\"publish()\">发布</div>\n\n\n</ion-content>\n\n\n<!--ionSlideTransitionEnd\tEmitted when the slide transition has ended.-->\n<!--ionSlideTransitionStart-->\n"

/***/ }),

/***/ "./src/app/create/create.page.scss":
/*!*****************************************!*\
  !*** ./src/app/create/create.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background: linear-gradient(to right, #0B0F19, #172034);\n  color: white; }\n\n.content-bg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 0; }\n\n.content-bg img {\n    width: 100%;\n    height: 100%; }\n\n.release {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  width: 90%;\n  height: 2.5rem;\n  border-radius: 2.5rem;\n  background: #4F98C7;\n  color: white;\n  text-align: center;\n  line-height: 2.5rem;\n  margin: 3rem auto 1rem; }\n\n.title {\n  margin: 0 20px; }\n\nion-item {\n  --color: #121E2A;\n  --border-color: #121E2A;\n  --border-width: 0 0 .55px;\n  --border-style: solid;\n  --padding-start: 0;\n  --padding-end: 0; }\n\nion-textarea {\n  --color: white;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 2px;\n  --padding-bottom: 0; }\n\n.video {\n  margin: 10px 20px;\n  position: relative;\n  display: flex; }\n\n.video .check {\n    position: relative;\n    width: 128px;\n    height: 160px; }\n\n.video .check img {\n      -o-object-fit: cover;\n         object-fit: cover;\n      width: 128px;\n      height: 160px;\n      border-radius: 10px; }\n\n.video .check span {\n      position: absolute;\n      bottom: 10px;\n      left: 10px;\n      color: black;\n      background: white;\n      border-radius: 40px;\n      width: 60px;\n      height: 30px;\n      line-height: 30px;\n      font-size: 12px; }\n\nion-button {\n  --background: #23375d;\n  --border-radius: 5px;\n  --color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96aGFuZ2p1bmJhby9wcm9qZWN0L3Rpa3Rvay90aWt0b2stbWFzdGVyL2FwcC9wYXRjaC9zcmMvYXBwL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQXVEO0VBQ3ZELFlBQVksRUFBQTs7QUFFZDtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFLTixVQUFVLEVBQUE7O0FBVFo7SUFNSSxXQUFXO0lBQ1gsWUFBWSxFQUFBOztBQUtoQjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQUUsUUFBUTtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQixFQUFBOztBQUV4QjtFQUVFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxnQkFBUTtFQUNSLHVCQUFlO0VBQ2YseUJBQWU7RUFDZixxQkFBZTtFQUNmLGtCQUFnQjtFQUNoQixnQkFBYyxFQUFBOztBQUVoQjtFQUNFLGNBQVE7RUFDUixrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxrQkFBYztFQUNkLG1CQUFpQixFQUFBOztBQUVuQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQUhmO0lBS0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhLEVBQUE7O0FBUGpCO01BU00sb0JBQWlCO1NBQWpCLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQixFQUFBOztBQVp6QjtNQWVNLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osVUFBVTtNQUNWLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTs7QUFJckI7RUFDRSxxQkFBYTtFQUNiLG9CQUFnQjtFQUNoQixjQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUvY3JlYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwQjBGMTksICMxNzIwMzQpO1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29udGVudC1iZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICB6LWluZGV4OiAwO1xuXG59XG4ucmVsZWFzZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDsgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIuNXJlbTtcbiAgYmFja2dyb3VuZDogIzRGOThDNztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIG1hcmdpbjogM3JlbSBhdXRvIDFyZW07XG59XG4udGl0bGUge1xuICAvL2NvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5pb24taXRlbSB7XG4gIC0tY29sb3I6ICMxMjFFMkE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMTIxRTJBO1xuICAtLWJvcmRlci13aWR0aDogMCAwIC41NXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy10b3A6IDJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbn1cbi52aWRlbyB7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC5jaGVjayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGltZyB7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHdpZHRoOiAxMjhweDtcbiAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzIzMzc1ZDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/create/create.page.ts":
/*!***************************************!*\
  !*** ./src/app/create/create.page.ts ***!
  \***************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/video-editor/ngx */ "./node_modules/@ionic-native/video-editor/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");











var CreatePage = /** @class */ (function () {
    function CreatePage(camera, imagePicker, transfer, file, filePath, http, loadingCtrl, videoEditor, router) {
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.videoEditor = videoEditor;
        this.router = router;
        this.items = [];
        this.progresss = 0;
        this.upLoading = false;
        for (var i = 0; i < 1000; i++) {
            this.items.push('test' + 1);
        }
    }
    CreatePage.prototype.ngOnInit = function () {
    };
    /**
     * 打开摄像头
     */
    CreatePage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            // quality: 100,
            // destinationType: this.camera.DestinationType.FILE_URI,
            // encodingType: this.camera.EncodingType.JPEG,
            // mediaType: this.camera.MediaType.PICTURE
            quality: 90,
            destinationType: this.camera.DestinationType.DATA_URL,
            // encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.VIDEO,
            saveToPhotoAlbum: true,
        };
        console.log('test camera');
        this.camera.getPicture(options).then(function (imageData) {
            // console.log("got file: " + imageData);
            // alert(imageData)
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.path = base64Image;
        }, function (err) {
            console.log(err);
            // Handle error
        });
    };
    CreatePage.prototype.recordVideo = function () {
        this.imagePicker.getPictures({ maximumImagesCount: 3 }).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    CreatePage.prototype.selectVideo = function () {
        var _this = this;
        this.camera.getPicture({ destinationType: this.camera.DestinationType.DATA_URL, mediaType: this.camera.MediaType.VIDEO, sourceType: this.camera.PictureSourceType.PHOTOLIBRARY }).then(function (res) {
            console.log(res);
            _this.upload(res);
            // this.videoEditor.transcodeVideo({
            //     fileUri: 'file://' + res,
            //     outputFileName: 'output.mp4',
            //     outputFileType: this.videoEditor.OutputFileType.MPEG4
            // })
            //     .then((fileUri: string) => console.log('video transcode success', fileUri))
            //     .catch((error: any) => console.log('video transcode error', error));
            _this.videoEditor.createThumbnail({
                fileUri: 'file://' + res,
                outputFileName: 'temp'
            })
                .then(function (fileUri) {
                console.log('video createThumbnail success', fileUri);
                var fileTransfer = _this.transfer.create();
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
                        var res_1 = JSON.parse(data['response']);
                        console.log(res_1);
                        if (res_1['code'] === 200) {
                            _this.imageSource = res_1['data']['img'][0]['url'];
                            console.log(_this.imageSource);
                        }
                    }
                    // success
                }, function (err) {
                    console.log(err);
                    console.log(err.body);
                    // error
                });
            })
                .catch(function (error) { return console.log('video createThumbnail error', error); });
        });
    };
    CreatePage.prototype.upload = function (path) {
        var _this = this;
        var fileTransfer = this.transfer.create();
        console.log(path);
        var options = {
            fileKey: 'file',
            fileName: 'test.mp4',
            mimeType: 'video/mp4',
            headers: {}
        };
        var now = 0;
        fileTransfer.onProgress(function (progess) {
            if (progess.lengthComputable) {
                now = progess.total / progess.loaded * 100;
            }
        });
        this.upLoading = true;
        fileTransfer.upload(path, ROOT_URL + '/video/upload', options)
            .then(function (data) {
            console.log(data);
            if (data['responseCode'] === 200) {
                console.log(data['response']);
                var res = JSON.parse(data['response']);
                console.log(res);
                if (res['code'] === 200) {
                    _this.videoSource = res['data']['video'][0]['url'];
                    _this.upLoading = false;
                    console.log(_this.videoSource);
                }
            }
            // success
        }, function (err) {
            console.log(err);
            console.log(err.body);
            // error
        });
        var timer = setInterval(function () {
            // loading.setContent('上传中 ' + Math.floor(now) + '%');
            _this.progresss = Math.floor(now);
            console.log(now);
            if (now >= 99) {
                clearInterval(timer);
            }
        }, 500);
    };
    CreatePage.prototype.publish = function () {
        var _this = this;
        var params = {
            title: this.title,
            video_url: this.videoSource,
            poster: this.imageSource,
            cookie: localStorage.getItem('anshi_cookie')
        };
        console.log(params);
        this.http.post(ROOT_URL + 'post', params).subscribe(function (res) {
            console.log(res);
            if (res['code'] === 200) {
                _this.router.navigate(['/home']);
            }
        });
    };
    CreatePage.prototype.tcookie = function () {
        this.http.get(ROOT_URL + 'test/test_cookie', { params: { cookie: localStorage.getItem('anshi_cookie') } }).subscribe(function (res) {
            console.log(res);
        });
    };
    CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.page.html */ "./src/app/create/create.page.html"),
            styles: [__webpack_require__(/*! ./create.page.scss */ "./src/app/create/create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
            _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_9__["VideoEditor"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], CreatePage);
    return CreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=create-create-module.js.map