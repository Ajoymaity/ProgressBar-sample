webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, zone) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.progress = 0;
    }
    HomePage.prototype.downloading = function () {
        var _this = this;
        var path = new Array("http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/robertskruid900.jpg", "http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/hertshooi900.jpg", "http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/koekoeksbloem900.jpg", "http://www.boschfoto.nl/html/breedbeeld/breedbeeldfotos/blauwe_bloem900.jpg");
        var count = 1;
        for (var i = 0; i < path.length; i++) {
            if (count > i) {
                window.DownloadManager.enqueue(path[i], function (success) {
                    console.log(success);
                    _this.zone.run(function () {
                        _this.progress = success;
                        if (_this.progress == 100) {
                            count++;
                        }
                    });
                }, function (fail) {
                    console.log(fail);
                    alert("fail");
                    count++;
                });
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/home/ajoy/Documents/Tarento/DownloadManagerSample/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <a href="https://images.unsplash.com/photo-1494756159834-6fdaee7a9b7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=57bd7742abbd36a624db41be23f63053&auto=format&fit=crop&w=1350&q=80">https://images.unsplash.com/photo</a>\n    <button ion-button (click)="downloading()">download</button>\n    <progress-bar progress="{{progress}}" ></progress-bar>\n  </ion-content>'/*ion-inline-end:"/home/ajoy/Documents/Tarento/DownloadManagerSample/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajoy/Documents/Tarento/DownloadManagerSample/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ajoy/Documents/Tarento/DownloadManagerSample/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_bar_progress_bar__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__progress_bar_progress_bar__["a" /* ProgressBarComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__progress_bar_progress_bar__["a" /* ProgressBarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        console.log("Progress" + this.progress);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/home/ajoy/Documents/Tarento/DownloadManagerSample/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div [style.width]="progress + \'%\'" class="progress-inner">\n    {{progress}}%\n  </div>\n</div>'/*ion-inline-end:"/home/ajoy/Documents/Tarento/DownloadManagerSample/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ })

},[194]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eSIsIi4uLy4uL3NyYyBsYXp5IiwiLi4vLi4vc3JjL3BhZ2VzL2hvbWUvaG9tZS50cyIsIi4uLy4uL3NyYy9hcHAvbWFpbi50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4uLy4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0Esa0M7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZrRDtBQUNKO0FBTTlDO0lBQ0Usa0JBQW1CLE9BQXNCLEVBQVMsSUFBWTtRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUM5RCxhQUFRLEdBQVcsQ0FBQyxDQUFDO0lBRDRDLENBQUM7SUFFbEUsOEJBQVcsR0FBWDtRQUFBLGlCQXlCQztRQXhCQyxJQUFJLElBQUksR0FBVyxJQUFJLEtBQUssQ0FBQyw2RUFBNkUsRUFBRSwwRUFBMEUsRUFBRSw4RUFBOEUsRUFBRSw2RUFBNkUsQ0FBQyxDQUFDO1FBQ3hWLElBQUksS0FBSyxHQUFDLENBQUMsQ0FBQztRQUNYLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM3QixFQUFFLEVBQUMsS0FBSyxH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Ozs7R0FLRztBQUtIO0lBR0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUhrQjtRQUFsQixvRUFBSyxDQUFDLFVBQVUsQ0FBQzs7MERBQVU7SUFGakIsb0JBQW9CO1FBSmhDLHdFQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztXQUNRO1NBQ2pDLENBQUM7O09BQ1csb0JBQW9CLENBT2hDO0lBQUQsQ0FBQztBQUFBO1NBUFksb0JBQW9CLFciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDEwODtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2VzbTUgbGF6eVxuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdGNoZWQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IDE0OTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYyBsYXp5XG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gXCJpb25pYy1hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJwYWdlLWhvbWVcIixcbiAgdGVtcGxhdGVVcmw6IFwiaG9tZS5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmF2Q3RybDogTmF2Q29udHJvbGxlciwgcHVibGljIHpvbmU6IE5nWm9uZSkge31cbiAgcHJvZ3Jlc3M6IG51bWJlciA9IDA7XG4gIGRvd25sb2FkaW5nKCkge1xuICAgIHZhciBwYXRoOlN0cmluZ1tdPSBuZXcgQXJyYXkoXCJodHRwOi8vd3d3LmJvc2NoZm90by5ubC9odG1sL2JyZWVkYmVlbGQvYnJlZWRiZWVsZGZvdG9zL3JvYmVydHNrcnVpZDkwMC5qcGdcIiwgXCJodHRwOi8vd3d3LmJvc2NoZm90by5ubC9odG1sL2JyZWVkYmVlbGQvYnJlZWRiZWVsZGZvdG9zL2hlcnRzaG9vaTkwMC5qcGdcIiwgXCJodHRwOi8vd3d3LmJvc2NoZm90by5ubC9odG1sL2JyZWVkYmVlbGQvYnJlZWRiZWVsZGZvdG9zL2tvZWtvZWtzYmxvZW05MDAuanBnXCIsIFwiaHR0cDovL3d3dy5ib3NjaGZvdG8ubmwvaHRtbC9icmVlZGJlZWxkL2JyZWVkYmVlbGRmb3Rvcy9ibGF1d2VfYmxvZW05MDAuanBnXCIpO1xuICAgdmFyIGNvdW50PTE7XG4gICAgZm9yKHZhciBpPTA7aTxwYXRoLmxlbmd0aDtpKyspe1xuICAgICAgaWYoY291bnQ+aSkge1xuICAgICAgKDxhbnk+d2luZG93KS5Eb3dubG9hZE1hbmFnZXIuZW5xdWV1ZShcbiAgICAgICBwYXRoW2ldLFxuICAgICAgICBzdWNjZXNzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdWNjZXNzKTtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzID0gc3VjY2VzcztcbiAgICAgICAgICBpZih0aGlzLnByb2dyZXNzPT0xMDApIHtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhmYWlsKTtcbiAgICAgICAgICBhbGVydChcImZhaWxcIik7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIFxuICAgIH1cbiAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvaG9tZS9ob21lLnRzIiwiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFpbi50cyIsImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEVycm9ySGFuZGxlciwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmljQXBwLCBJb25pY0Vycm9ySGFuZGxlciwgSW9uaWNNb2R1bGUgfSBmcm9tICdpb25pYy1hbmd1bGFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0YXR1cy1iYXInO1xuXG5pbXBvcnQgeyBNeUFwcCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lUGFnZSB9IGZyb20gJy4uL3BhZ2VzL2hvbWUvaG9tZSc7XG5pbXBvcnQgeyBDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wb25lbnRzLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTXlBcHAsXG4gICAgSG9tZVBhZ2VcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUuZm9yUm9vdChNeUFwcCksXG4gICAgQ29tcG9uZW50c01vZHVsZVxuICBdLFxuICBib290c3RyYXA6IFtJb25pY0FwcF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE15QXBwLFxuICAgIEhvbWVQYWdlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0YXR1c0JhcixcbiAgICBTcGxhc2hTY3JlZW4sXG4gICAge3Byb3ZpZGU6IEVycm9ySGFuZGxlciwgdXNlQ2xhc3M6IElvbmljRXJyb3JIYW5kbGVyfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zdGF0dXMtYmFyJztcbmltcG9ydCB7IFNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3BsYXNoLXNjcmVlbic7XG5cbmltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSAnLi4vcGFnZXMvaG9tZS9ob21lJztcbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJ2FwcC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBNeUFwcCB7XG4gIHJvb3RQYWdlOmFueSA9IEhvbWVQYWdlO1xuXG4gIGNvbnN0cnVjdG9yKHBsYXRmb3JtOiBQbGF0Zm9ybSwgc3RhdHVzQmFyOiBTdGF0dXNCYXIsIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuKSB7XG4gICAgcGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIE9rYXksIHNvIHRoZSBwbGF0Zm9ybSBpcyByZWFkeSBhbmQgb3VyIHBsdWdpbnMgYXJlIGF2YWlsYWJsZS5cbiAgICAgIC8vIEhlcmUgeW91IGNhbiBkbyBhbnkgaGlnaGVyIGxldmVsIG5hdGl2ZSB0aGluZ3MgeW91IG1pZ2h0IG5lZWQuXG4gICAgICBzdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgICBzcGxhc2hTY3JlZW4uaGlkZSgpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhcic7XG5ATmdNb2R1bGUoe1xuXHRkZWNsYXJhdGlvbnM6IFtQcm9ncmVzc0JhckNvbXBvbmVudF0sXG5cdGltcG9ydHM6IFtdLFxuXHRleHBvcnRzOiBbUHJvZ3Jlc3NCYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudHMubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBjbGFzcyBmb3IgdGhlIFByb2dyZXNzQmFyQ29tcG9uZW50IGNvbXBvbmVudC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb3JlL0NvbXBvbmVudCBmb3IgbW9yZSBpbmZvIG9uIEFuZ3VsYXJcbiAqIENvbXBvbmVudHMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Byb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MtYmFyLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3Byb2dyZXNzJykgcHJvZ3Jlc3M7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUHJvZ3Jlc3NcIit0aGlzLnByb2dyZXNzKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==