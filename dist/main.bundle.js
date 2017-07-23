webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* define a fixed width for the entire menu */\n.suggest {\n  width: 180px;\n  border: 1px solid #efefef;\n  position: absolute;\n  background: white;\n  top: 56px;\n}\n\n/* reset our lists to remove bullet points and padding */\n.mainmenu, .submenu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n/* make ALL links (main and submenu) have padding and background color */\n.mainmenu a {\n  display: block;\n  border-bottom: 1px solid #e5e5e5;\n  text-decoration: none;\n  padding: 10px;\n  color: #000;\n}\n\n/* add hover behaviour */\n.mainmenu a:hover {\n  background-color: #f3f3f3;\n}\n\n\n/* when hovering over a .mainmenu item,\n  display the submenu inside it.\n  we're changing the submenu's max-height from 0 to 200px;\n  */\n\n  .mainmenu li:hover .submenu {\n    display: block;\n    max-height: 200px;\n  }\n\n/*\n  we now overwrite the background-color for .submenu links only.\n  CSS reads down the page, so code at the bottom will overwrite the code at the top.\n  */\n\n  .submenu a {\n    background-color: #999;\n  }\n\n  /* hover behaviour for links inside .submenu */\n  .submenu a:hover {\n    background-color: #666;\n  }\n\n/* this is the initial state of all submenus.\n  we set it to max-height: 0, and hide the overflowed content.\n  */\n  .submenu {\n    overflow: hidden;\n    max-height: 0;\n    -webkit-transition: all 0.5s ease-out;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container  animated fadeIn\">\n\t<div class=\"row ntop\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"md-form\">\n\t\t\t\t<input mdbActive type=\"text\" (keyup)=\"getSug($event)\" [(ngModel)]=\"search\" [value]=\"search\" id=\"form1\" class=\"form-control\">\n\t\t\t\t<label for=\"form1\" class=\"\">Enter Word</label>\n\t\t\t</div>\n\t\t\t<div class=\"suggest\" *ngIf=\"showSug\">\n\t\t\t\t<ul class=\"mainmenu\" *ngFor=\"let item of result\">\n\t\t\t\t\t<li><a (click)=\"srch(item);showSug=!showSug;search=item\" href=\"javascript:void(0)\">{{item}}</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<h4><p>Hourly Trendings</p></h4>\n\t\t\t<div class=\"tags\">\n\t\t\t\t<button *ngFor=\"let tags of hourTrends;let i=index\" type=\"button\" class=\"btn btn-sm\" [ngClass]=\"{'btn-success':i%2==0,'btn-primary':i%3==0,'btn-danger':i%5==0,'btn-info':i%4==0}\" ripple-radius  (click)=\"srchHourTrends(tags);\">{{tags}}</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<app-home [mydata]=\"searchVal\"></app-home>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gif_service__ = __webpack_require__("../../../../../src/app/services/gif.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(gif) {
        this.gif = gif;
        this.title = 'app';
        this.search = "";
        this.showSug = false;
        this.result = [];
        this.getKeyCode = function (str) {
            return str.charCodeAt(str.length);
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gif.hourlyTrends().subscribe(function (data) {
            _this.hourTrends = data.results;
            console.log(_this.hourTrends);
        });
    };
    AppComponent.prototype.getSug = function (event) {
        var _this = this;
        var charKeyCode = event.keyCode || event.which;
        if (charKeyCode == 0 || charKeyCode == 229) {
            charKeyCode = this.getKeyCode(this.search);
        }
        else {
        }
        if (charKeyCode == 13) {
            this.searchVal = this.search;
        }
        this.gif.getAutoSuggestion(this.search)
            .subscribe(function (data) {
            _this.result = data.results;
            if (_this.result.length > 0) {
                _this.showSug = true;
            }
            if (_this.result.length == 0 || _this.result[0] == "love") {
                _this.showSug = false;
            }
        });
        //alert(this.search);
    };
    AppComponent.prototype.srch = function (item) {
        this.searchVal = item;
    };
    AppComponent.prototype.srchHourTrends = function (item) {
        this.searchVal = item;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gif_service__["a" /* GifService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gif_service__["a" /* GifService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__ = __webpack_require__("../../../../angular-bootstrap-md/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gif_service__ = __webpack_require__("../../../../../src/app/services/gif.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/component/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__ = __webpack_require__("../../../../../src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_clipboard__ = __webpack_require__("../../../../ng2-clipboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_clipboard__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__component_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_home_home_component__["a" /* HomeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular_bootstrap_md__["a" /* MDBBootstrapModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_clipboard__["ClipboardModule"]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_gif_service__["a" /* GifService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{heading}}</h2>\n<div class=\"row\" *ngIf=\"showGIF; else load\">\n\t<div class=\"col-md-4 animated fadeIn\" *ngFor=\"let gif of gif_data; let i=index\">\n\t\t<div *ngFor=\"let media of gif.media\">\n\t\t\t<div style=\"margin-bottom: 20px;\" class=\"card\" ripple-radius>\n\t\t\t\t<!--Card image-->\n\t\t\t\t<img id=\"gif_{{i}}\" #image class=\"img-fluid\" [src]=\"media?.tinygif.preview\" (mouseenter)=\"viewGif(media?.tinygif.url,image)\" (mouseleave)=\"removeGif(media?.tinygif.preview,image)\" alt=\"Card image cap\">\n\t\t\t\t<p><i  (click)=\"shareFB(media?.tinygif.url)\" class=\"fa fa-facebook-official bgicon fb\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<a href=\"whatsapp://send?data-text=Take a look at this awesome GIF&data-href={{media?.tinygif.url}}&data-action=are/whatsapp/share \"><i class=\"fa fa-whatsapp bgicon ws\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<i  (click)=\"copyGif(media?.tinygif.url)\" class=\"fa fa-link bgicon\" aria-hidden=\"true\"></i>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<ng-template #load>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\"></div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<img style=\"width: 150px;\" src=\"https://cdn.dribbble.com/users/108390/screenshots/2882839/spinner-loop.gif\" alt=\"Loading...\">\n\t\t</div>\n\t\t<div class=\"col-md-4\"></div>\n\t</div>\t\t\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-fluid:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gif_service__ = __webpack_require__("../../../../../src/app/services/gif.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_clipboard_ng2_clipboard__ = __webpack_require__("../../../../ng2-clipboard/ng2-clipboard/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_clipboard_ng2_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_clipboard_ng2_clipboard__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(gif, clipboard) {
        this.gif = gif;
        this.clipboard = clipboard;
        this.search_home = "";
        this.heading = "Trending";
        this.showGIF = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search_home = this.mydata;
        this.gif.getTrending().subscribe(function (data) {
            _this.gif_data = data.results;
        });
        this.ShowGif();
    };
    HomeComponent.prototype.ngOnChanges = function () {
        this.search_home = this.mydata;
        if (this.search_home != undefined && this.search_home !== "") {
            console.log("here");
            this.searchgif(this.search_home);
            this.ShowGif();
        }
    };
    HomeComponent.prototype.shareFB = function (url) {
        window.open('http://www.facebook.com/sharer.php?u=' + url, 'facebook-share-dialog', 'width=626,height=436');
    };
    HomeComponent.prototype.searchgif = function (item) {
        var _this = this;
        this.showGIF = false;
        this.gif.searchGIF(item)
            .subscribe(function (data) {
            _this.gif_data = data.results;
            _this.heading = "Your Search \"" + item + "\"";
        });
    };
    HomeComponent.prototype.ShowGif = function () {
        var root = this;
        setTimeout(function () {
            root.showGIF = true;
        }, 3000);
    };
    HomeComponent.prototype.viewGif = function (gif_url, image) {
        image.src = gif_url;
    };
    HomeComponent.prototype.removeGif = function (img_url, image) {
        image.src = img_url;
    };
    HomeComponent.prototype.copyGif = function (gif_url) {
        this.clipboard.copy(gif_url);
        alert('URL Copied' + gif_url);
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HomeComponent.prototype, "mydata", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/component/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/home/home.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gif_service__["a" /* GifService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gif_service__["a" /* GifService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_clipboard_ng2_clipboard__["ClipboardService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_clipboard_ng2_clipboard__["ClipboardService"]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar SideClass=\"navbar navbar-toggleable-md navbar-dark blue  animated fadeIn\">\n    <logo><a class=\"logo navbar-brand \" href=\"#\" ripple-radius><i class=\"fa fa-film\" aria-hidden=\"true\"></i> GIF App</a></logo>\n    <links>\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\" ripple-radius>\n                <a class=\"nav-link\">Home<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\" ripple-radius>\n                <a class=\"nav-link\">Features</a>\n            </li>\n        </ul>\n    </links>\n</navbar>\n\n"

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/component/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/component/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/gif.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GifService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GifService = (function () {
    function GifService(http) {
        this.http = http;
    }
    GifService.prototype.getTrending = function () {
        return this.http.get("https://api.tenor.com/v1/trending?key=UMH7AAOIAOP3")
            .map(function (res) { return res.json(); });
    };
    GifService.prototype.getAutoSuggestion = function (keyword) {
        return this.http.get("https://api.tenor.com/v1/autocomplete?key=UMH7AAOIAOP3&limit=15&tag=" + keyword)
            .map(function (res) { return res.json(); });
    };
    GifService.prototype.searchGIF = function (item) {
        return this.http.get("https://api.tenor.com/v1/search?key=UMH7AAOIAOP3&tag=" + item)
            .map(function (res) { return res.json(); });
    };
    GifService.prototype.hourlyTrends = function () {
        return this.http.get("https://api.tenor.com/v1/autocomplete?type=trending&key=UMH7AAOIAOP3")
            .map(function (res) { return res.json(); });
    };
    return GifService;
}());
GifService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GifService);

var _a;
//# sourceMappingURL=gif.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map