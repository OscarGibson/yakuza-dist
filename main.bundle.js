webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/LiqPayModule/LiqPayModule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LiqPayCheckout {
	factory(t,e){t.LiqPayCheckout=new function(){var i,o,n=t.encodeURIComponent,r={},a=(new Date).getTime().toString();this.init=function(t){var o=(t.host||"https://www.liqpay.ua/")+(t.language||"ru")+"/checkoutjs";o+="?hostname="+n(location.hostname),o+="&port="+n(location.port),o+="&protocol="+n(location.protocol),o+="&uid="+a;for(var r in t)o+="&"+n(r)+"="+n(t[r]);(i=e.createElement("iframe")).setAttribute("frameborder","0"),i.setAttribute("allowtransparency","true"),i.setAttribute("scrolling","no"),i.setAttribute("style","width:100%;height:0px;background-color:transparent;"),i.setAttribute("src",o);try{"popup"==t.mode?this.popup(i):e.querySelector(t.embedTo||"body").appendChild(i)}catch(t){console.error(t)}return this},this.popup=function(t){(o=e.createElement("div")).innerHTML='<div id="liqpay_widget_popup_container" style="position: fixed !important;top: 0 !important;right: 0 !important;bottom: 0 !important;left: 0 !important;z-index: 3000 !important"><div id="liqpay_widget_popup_background" style="width: 100% !important;height: 100% !important;background: #000 !important;opacity: .4 !important"></div><div id="liqpay_widget_popup_iframe" style="position: absolute !important;\ttop: 50% !important;left: 50% !important;width: 385px !important;border-radius: 6px !important;\ttransform: translate(-50%, -50%) !important;-moz-transform: translate(-50%, -50%) !important;-ms-transform: translate(-50%, -50%) !important;-webkit-transform: translate(-50%, -50%) !important;-o-transform: translate(-50%, -50%) !important"></div></div>',e.querySelector("body").appendChild(o),e.querySelector("#liqpay_widget_popup_iframe").appendChild(t)},this.on=function(t,e){if("function"==typeof e)return t in r||(r[t]=[]),r[t].push(e),this},this.off=function(t,e){if(t in r){for(var i=[],o=0;o<r[t].length;o++)r[t][o]!=e&&i.push(r[t][o]);return r[t]=i,this}},this.call=function(t,e){if(t in r){for(var i=0;i<r[t].length;i++)r[t][i](e);return this}};var p=function(t){if("object"!=typeof t.data)try{var e=JSON.parse(t.data);if(!e)return;if(e.uid!=a)return;this.call(e.params.cmd,e.params),this.call("_",e.params)}catch(t){}}.bind(this);t.addEventListener?t.addEventListener("message",p,!1):t.attachEvent("onmessage",p),this.on("window.resize",function(t){i.style.height=t.height+"px"}),this.on("window.redirect",function(t){e.location.href=t.redirect_to}),this.on("window.html_add",function(t){var i=e.createElement("div");i.innerHTML=t.html,e.querySelector(t.container).appendChild(i)}),this.on("window.html_remove",function(t){try{var i=e.querySelector(t.selector);i.parentNode.removeChild(i)}catch(t){}}),this.on("liqpay.close",function(){i.parentNode.removeChild(i),o&&o.parentNode.removeChild(o)})},t.LiqPayCheckoutCallback&&t.LiqPayCheckoutCallback()};
	constructor() {
		this.factory(window, document);
		this.liqPayCheckout = window.LiqPayCheckout;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LiqPayCheckout;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'opacity-0':app_ready_checker.app_ready}\" class=\"preloader\">\n    <img class=\"preloader-logo\" src=\"{{ logo_path }}\">\n\t<div class=\"sk-circle\">\n\t  <div class=\"sk-circle1 sk-child\"></div>\n\t  <div class=\"sk-circle2 sk-child\"></div>\n\t  <div class=\"sk-circle3 sk-child\"></div>\n\t  <div class=\"sk-circle4 sk-child\"></div>\n\t  <div class=\"sk-circle5 sk-child\"></div>\n\t  <div class=\"sk-circle6 sk-child\"></div>\n\t  <div class=\"sk-circle7 sk-child\"></div>\n\t  <div class=\"sk-circle8 sk-child\"></div>\n\t  <div class=\"sk-circle9 sk-child\"></div>\n\t  <div class=\"sk-circle10 sk-child\"></div>\n\t  <div class=\"sk-circle11 sk-child\"></div>\n\t  <div class=\"sk-circle12 sk-child\"></div>\n\t</div>\n</div>\n\n<div class=\"main-wrapper\">\n\t<app-header></app-header>\n\t<app-body></app-body>\n\t<app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-wrapper {\n  margin: auto; }\n\n.preloader {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  z-index: 100;\n  opacity: 1;\n  transition: opacity .3s; }\n  .preloader-logo {\n    margin: auto;\n    width: 200px;\n    display: block;\n    top: calc(45% - 52px);\n    position: relative; }\n  .preloader.opacity-0 {\n    opacity: 0;\n    z-index: -100; }\n\n.sk-circle {\n  top: calc(45% - 40px);\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #aaa;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both; }\n\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Yakuza';
        this.logo_path = '/assets/logo/Yakudza.svg';
        this.app_ready_checker = __WEBPACK_IMPORTED_MODULE_1__app_globals__["a" /* AppReady */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FilterObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppReady; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = Globals_1 = (function () {
    function Globals() {
    }
    Globals._get_path = function (name) {
        return Globals_1._domain + Globals_1._api_path + name;
    };
    Globals.display_message = function (message) {
        Globals_1.show_message = true;
        Globals_1.message = message;
    };
    Globals.get_ancors_position = function () {
        for (var i = 0; i < Globals_1.categories.length; i++) {
            var offset = document.getElementById(Globals_1.categories[i].slug).offsetTop;
            Globals_1.categories[i].position = offset;
        }
    };
    return Globals;
}());
// public static local_domain: string = 'http://localhost:4200';
// public static backend_domain: string = 'http://localhost:8000/backend';
// private static _domain: string = 'http://localhost:8000/backend';
Globals.local_domain = 'http://www.yakuzalviv.com';
Globals.backend_domain = 'http://www.yakuzalviv.com/backend';
Globals._domain = 'http://www.yakuzalviv.com/backend';
Globals._api_path = '/api/v1/';
Globals.categories_get_path = Globals_1._get_path('category');
Globals.order_post_path = Globals_1._get_path('order/');
Globals.tags_get_path = Globals_1._get_path('tag');
Globals.menu_get_path = Globals_1._get_path('section/menu');
Globals.order_get_path = Globals_1._get_path('section/order');
Globals.callback_post_path = Globals_1._get_path('callback');
Globals.feedback_post_path = Globals_1._get_path('feedback');
Globals.subs_post_path = Globals_1._get_path('subs');
Globals.current_page = {
    'title': 'main'
};
Globals.section_get_path = Globals_1._get_path('section/');
// public static categories_main: Array<any> = [
//   {'slug': '', 'products': []},
// ];
Globals.categories = [
    { 'slug': '', 'name': '', 'products': [], 'position': -1 },
];
Globals.feedback_path = Globals_1._get_path('feedback');
Globals.current_category = {
    'products': []
};
Globals.shares_content = [
    { 'image': '', 'content': '' }
];
Globals.document_content = [
    {
        'id': '',
        'title': '',
        'content': '',
        'image_1': '',
        'image_2': '',
        'image_3': '',
        'image_4': '',
        'image_5': '',
        'image_6': '',
    }
];
Globals.how_to_content = [
    {
        "id": 0,
        "title": "",
        "content": "",
        "icon": ""
    },
];
Globals.contact_content = [
    {
        "id": 0,
        "icon": "",
        "phone": ""
    },
];
Globals.email_content = [
    {
        "id": 0,
        "email": ""
    },
];
Globals.social_content = [
    {
        "id": '',
        "icon": "facebook",
        "link": ""
    },
];
Globals.feedback_content = [
    {
        'id': '',
        'author': '',
        'content': '',
    }
];
// public static order_content = {
//     "content": [
//           {
//             "id": -1,
//             "title": "",
//             "content": [],
//           },
//       "current_content" : {
//         "id"    : -1,
//         "title" : "",
//         "image" : "",
//         "price" : "",
//         "next_id" : -1,
//         "prew_id" : -1,
//       },
//     ],
//   };
Globals.order_content = [
    {
        "content": {
            "id": -1,
            "title": "",
            "content": [],
        },
        "current_content": {
            "id": -1,
            "title": "",
            "image": "",
            "price": "",
            "next_id": -1,
            "prew_id": -1,
        }
    }
];
Globals.show_callback = false;
Globals.show_subs = false;
Globals.show_product = false;
Globals.show_message = false;
Globals.current_product = {
    "item_id": "",
    "id": '',
    "title": "",
    "slug": "",
    "description": "",
    "image": "",
    "price": 0,
    "weight": 0,
    "kkal": 0,
};
Globals = Globals_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Globals);

var Cart = Cart_1 = (function () {
    function Cart() {
    }
    Cart.findElement = function (item_id) {
        for (var index = 0; index < Cart_1.items.length; index++) {
            if (Cart_1.items[index].item_id == item_id) {
                return index;
            }
        }
        return -1;
    };
    Cart.addItem = function (item_id) {
        var break_loop = false;
        for (var _i = 0, _a = Globals.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            for (var _b = 0, _c = category.products; _b < _c.length; _b++) {
                var product = _c[_b];
                if (product.id == item_id) {
                    var is_in_cart = Cart_1.findElement(item_id);
                    if (is_in_cart != -1) {
                        Cart_1.plusItem(is_in_cart);
                        break_loop = true;
                        break;
                    }
                    var item = new CartItem(item_id, product.title, product.price, 1, product.image, product.weight, product.kkal);
                    Cart_1.items.push(item);
                    Cart_1.total += item.item_price;
                    localStorage.setItem(item_id.toString(), '1');
                    break_loop = true;
                    break;
                }
            }
            if (break_loop)
                break;
        }
    };
    Cart.addItemSimple = function (item_id, title, price, count, image, weight, kkal) {
        var item = new CartItem(item_id, title, price, count, image, weight, kkal);
        Cart_1.items[item_id] = item;
        Cart_1.total += item.item_price;
    };
    Cart.plusItem = function (item_id) {
        Cart_1.items[item_id].item_count += 1;
        Cart_1.items[item_id].item_total = +(Cart_1.items[item_id].item_count * Cart_1.items[item_id].item_price).toFixed(2);
        Cart_1.total += +(Cart_1.items[item_id].item_price).toFixed(2);
        localStorage.setItem(item_id.toString(), Cart_1.items[item_id].item_count.toString());
    };
    Cart.minusItem = function (item_id) {
        if (Cart_1.items[item_id].item_count > 1) {
            Cart_1.items[item_id].item_count -= 1;
            Cart_1.items[item_id].item_total = +(Cart_1.items[item_id].item_count * Cart_1.items[item_id].item_price).toFixed(2);
            Cart_1.total -= Cart_1.items[item_id].item_price;
            Cart_1.total = +(Cart_1.total).toFixed(2);
            localStorage.setItem(item_id.toString(), Cart_1.items[item_id].item_count.toString());
        }
    };
    Cart.removeItem = function (item_id) {
        Cart_1.total -= Cart_1.items[item_id].item_price * Cart_1.items[item_id].item_count;
        Cart_1.total = +(Cart_1.total).toFixed(2);
        localStorage.removeItem(item_id.toString());
        Cart_1.items.splice(item_id, 1);
    };
    Cart.clearCart = function () {
        Cart_1.total = 0;
        for (var key in Cart_1.items) {
            localStorage.removeItem(Cart_1.items[key].item_id.toString());
        }
        Cart_1.items = [];
    };
    return Cart;
}());
Cart.items = [];
Cart.total = 0;
Cart = Cart_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], Cart);

var CartItem = (function () {
    function CartItem(item_id, item_name, item_price, item_count, item_image, item_weight, item_kkal) {
        this.item_id = item_id;
        this.item_name = item_name;
        this.item_price = item_price;
        this.item_count = item_count;
        this.item_image = item_image;
        this.item_weight = item_weight;
        this.item_kkal = item_kkal;
        this.item_total = this.item_price * this.item_count;
    }
    return CartItem;
}());
var Product = (function () {
    function Product(title, description, price, weight, kkal, image) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.weight = weight;
        this.kkal = kkal;
        this.image = image;
    }
    return Product;
}());
var FilterObject = (function () {
    function FilterObject(filters) {
        this.iterator = [];
        this.dict = {};
        for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
            var filter = filters_1[_i];
            this.addElement(new FilterElement(filter.id, filter.name, filter.slug, 0));
        }
    }
    FilterObject.prototype.addElement = function (filter_element) {
        this.iterator.push(filter_element);
        this.dict[filter_element.id] = filter_element;
    };
    FilterObject.prototype.getElement = function (id) {
        return this.dict[id];
    };
    FilterObject.prototype.setElement = function (id, status) {
        try {
            this.dict[id].status = status;
            return true;
        }
        catch (e) {
            return false;
        }
    };
    FilterObject.prototype.isFilterActive = function () {
        for (var _i = 0, _a = this.iterator; _i < _a.length; _i++) {
            var filter_element = _a[_i];
            if (filter_element.status !== 0)
                return true;
        }
        return false;
    };
    return FilterObject;
}());

var FilterElement = (function () {
    function FilterElement(id, name, slug, status) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.status = status;
    }
    return FilterElement;
}());
var AppReady = AppReady_1 = (function () {
    function AppReady() {
    }
    AppReady.oneComponentReady = function () {
        AppReady_1.count++;
        AppReady_1.check();
    };
    AppReady.check = function () {
        if (AppReady_1.count == AppReady_1.max_count) {
            AppReady_1.app_ready = true;
        }
    };
    return AppReady;
}());
AppReady.count = 0;
AppReady.max_count = 3;
AppReady.app_ready = false;
AppReady = AppReady_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AppReady);

var Globals_1, Cart_1, AppReady_1;
//# sourceMappingURL=app.globals.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body_body_component__ = __webpack_require__("../../../../../src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__body_body_pipe__ = __webpack_require__("../../../../../src/app/body/body.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { InlineSVGModule } from 'ng-inline-svg';
// import { LiqPayCheckout } from './LiqPayModule/LiqPayModule';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__body_body_pipe__["b" /* PhoneFormatPipe */],
            __WEBPACK_IMPORTED_MODULE_8__body_body_pipe__["a" /* NumberFormatPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
            // InlineSVGModule
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n\t<div class=\"proposition row\" *ngIf=\"globals.current_page.title == 'main'\">\n\t\t<div class=\"col-md-4 col-lg-4 hidden-sm hidden-xs\">\n\t\t\t<img src=\"{{ shares_path }}\">\n\t\t</div>\n\t\t<div class=\"col-md-4 col-lg-4 hidden-sm hidden-xs\">\n\t\t\t<img src=\"{{ shares_path }}\">\n\t\t</div>\n\t\t<div class=\"col-md-4 col-lg-4 hidden-sm hidden-xs\">\n\t\t\t<img src=\"{{ shares_path }}\">\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"globals.current_page.title != 'main'\" class=\"breadcrumb\">\n\t\t<p>\n\t\t\t<span class=\"go-to-main\" (click)=\"go_to_main()\">Головна</span> <span class=\"breadcrumb-separator\">></span> <span class=\"red\">{{ globals.current_page.title }}</span>\n\t\t</p>\n\t</div>\n\t<div class=row>\n\t\t<div id=\"cart\" class=\"cart col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n\t\t<div *ngIf=\"globals.current_page.title == 'main'\" class=\"cart-wrapper\" [ngClass]=\"{'top' : cart_in_top, 'out' : cart_out}\">\n\t\t\t<div class=\"cart-head\">\n\t\t\t\t<embed class=\"cart-head-img\" src=\"/assets/svg/elips.svg\">\n\t\t\t\t<h1 class=\"cart-head-text\">Ваш кошик</h1>\n\t\t\t\t<embed class=\"cart-head-sticks\" src=\"/assets/svg/stick.svg\">\n\t\t\t</div>\n\n\t\t\t<div class=\"cart-body\">\n\t\t\t\t<div class=\"cart-item\" *ngFor=\"let item of cart.items; let i=index;\">\n\t\t\t\t\t<div class=\"cart-item-close\">\n\t\t\t\t\t\t<!-- <embed class=\"cart-item-close\" src=\"/assets/svg/X.svg\"> -->\n\t\t\t\t\t\t<img class=\"cart-item-close\" src=\"/assets/img/X.png\">\n\t\t\t\t\t\t<div class=\"cart-item-close-click\" (click)=\"remove_cart_item(i)\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cart-item-name\">{{ item.item_name }}</div>\n\t\t\t\t\t<div class=\"cart-item-counter\">\n\t\t\t\t\t\t<div class=\"cart-item-counter-minus\">\n\t\t\t\t\t\t\t<!-- <embed class=\"cart-item-counter-minus\" src=\"/assets/svg/minus.svg\"> -->\n\t\t\t\t\t\t\t<img class=\"cart-item-counter-minus\" src=\"/assets/img/minus.png\">\n\t\t\t\t\t\t<div class=\"cart-item-counter-click\" (click)=\"minus_cart_item(i)\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"cart-item-counter-count\">{{ item.item_count }}</div>\n\t\t\t\t\t\t<div class=\"cart-item-counter-plus\">\n\t\t\t\t\t\t\t<!-- <embed class=\"cart-item-counter-plus\" src=\"/assets/svg/plus.svg\"> -->\n\t\t\t\t\t\t\t<img class=\"cart-item-counter-minus\" src=\"/assets/img/plus.png\">\n\t\t\t\t\t\t<div class=\"cart-item-counter-click\" (click)=\"plus_cart_item(i)\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cart-item-price\">{{ item.item_total }} грн.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t<div class=\"cart-total\">\n\t\t\t\t<span>ВСЬОГО: {{ cart.total | to_fixed : 2 }} грн.</span>\n\t\t\t</div>\n\t\t\t<div class=\"cart-button\" (click)=\"show_order()\">\n\t\t\t\t<button>Оформити замовлення</button>\n\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\n\t</div>\n\n\t\t<!-- Product section -->\n\t\t<div *ngIf=\"globals.current_page.title == 'main'\" class=\"product col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n\t\t\t\n\t\t\t<!-- Filters -->\n\t\t\t<div class=\"product-filters\">\n\t\t\t\t<div *ngFor=\"let filter of filter_object.iterator; let i = index\" class=\"product-filters-item\">\n\t\t\t\t\t<fa *ngIf='filter.status === 1' class=\"product-filters-item-add active-add\" id=\"{{ i }}\" name=\"heart-o\" (click)=\"changeFilter(filter.id, 0)\"></fa>\n\t\t\t\t\t<fa *ngIf='filter.status !== 1' class=\"product-filters-item-add\" id=\"{{ i }}\" name=\"heart-o\" (click)=\"changeFilter(filter.id, 1)\"></fa>\n\t\t\t\t\t<p class=\"product-filters-item-name\">{{ filter.name }}</p>\n\n\t\t\t\t\t<div *ngIf='filter.status === -1'>\n\t\t\t\t\t\t<!-- <embed src=\"/assets/svg/X_red.svg\" class=\"product-filters-item-remove\"> -->\n\t\t\t\t\t\t<img src=\"/assets/img/X_red.png\" class=\"product-filters-item-remove\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf='filter.status === -1' class=\"product-filters-item-hover\" (click)=\"changeFilter(filter.id, 0)\"></div>\n\n\t\t\t\t\t<div *ngIf='filter.status !== -1'>\n\t\t\t\t\t\t<!-- <embed src=\"/assets/svg/X.svg\" class=\"product-filters-item-remove\"> -->\n\t\t\t\t\t\t<img src=\"/assets/img/X.png\" class=\"product-filters-item-remove\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf='filter.status !== -1' class=\"product-filters-item-hover\" (click)=\"changeFilter(filter.id, -1)\"></div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"product-title\" id=\"null\"></div>\n\n\t\t\t<div *ngFor=\"let category of globals.categories_filter\" class=\"rols\">\n\n\t\t\t\t<div *ngIf=\"category.products.length\" class=\"product-title\" id=\"section-{{ category.id }}\">\n\t\t\t\t\t<h1>{{ category.name }}</h1>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"category.products.length\" class=\"product-area row\">\n\t\t\t\t\t<div *ngFor=\"let product of category.products\"\n\t\t\t\t\t class=\"col-lg-4 col-md-4 col-sm-6 col-xs-10  product-area-item\">\n\t\t\t\t\t  <!-- <div *ngIf='check_filter_add(product.tags, false, true)'> -->\n\t\t\t\t\t  <div>\n\t\t\t\t\t  \t<div class=\"product-area-item-inner\">\n\t\t\t\t\t  \t<div class=\"product-area-item-labels\">\n\t\t\t\t\t  \t\t<div *ngFor=\"let label of product.label_serializer\" class=\"product-area-item-label\">\n\t\t\t\t\t  \t\t\t<img src=\"{{globals.backend_domain}}{{ label.icon }}\">\n\t\t\t\t\t  \t\t</div>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t\t<img (click)=\"show_product(product.id)\" src=\"{{globals.backend_domain}}{{ product.image }}\">\n\t\t\t\t\t\t<h3 class=\"product-area-item-title\">{{ product.title }}</h3>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span class=\"product-area-item-weight\">{{product.weight}}г</span>\n\t\t\t\t\t\t\t<span *ngIf=\"product.pieces\" class=\"product-area-item-pieces\">{{product.pieces}} кусків</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p class=\"product-area-item-description\">{{ product.description }}</p>\n\t\t\t\t\t\t<div class=\"product-area-item-bottom\">\n\t\t\t\t\t\t\t<span class=\"product-area-item-price\">{{ product.price }}грн</span>\n\t\t\t\t\t\t\t<button (click)=\"add_cart_item(product.id)\" class=\"product-area-item-buy\">Замовити</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Shares section -->\n\t\t<div *ngIf=\"globals.current_page.title == 'Акції'\" class=\"shares col-lg-12 col-md-12 col-sm-12\">\n\t\t\t<h1>Акція</h1>\n\t\t\t<div class=\"shares-block\" *ngFor=\"let share of globals.shares_content\">\n\t\t\t\t<p class=\"shares-block-text\">{{ share.content }}</p>\n\t\t\t\t<img class=\"shares-block-image\" src=\"{{ globals.backend_domain}}{{ share.image }}\">\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Documents section -->\n\t\t<!-- <div *ngIf=\"globals.current_page.title == 'Документи'\" class=\"documents col-lg-12 col-md-12\">\n\t\t\t<div class=\"documents-wrapper\">\n\t\t\t\t<h1 class=\"documents-header\">Документи</h1>\n\t\t\t\t<div class=\"documents-content\" *ngFor=\"let document of globals.document_content\">\n\t\t\t\t\t<h3 class=\"documents-content-header\">\n\t\t\t\t\t\t{{ document.title }}\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p class=\"documents-content-text\">\n\t\t\t\t\t\t{{ document.content }}\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"row documents-content-images\">\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-xs-5 col-sm-offset-1 col-xs-offset-1\">\n\t\t\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ document.image_1 }}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-xs-5 col-sm-offset-1 col-xs-offset-1\">\n\t\t\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ document.image_2 }}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-xs-5 col-sm-offset-1 col-xs-offset-1\">\n\t\t\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ document.image_3 }}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-xs-5 col-sm-offset-1 col-xs-offset-1\">\n\t\t\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ document.image_4 }}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-xs-5 col-sm-offset-1 col-xs-offset-1\">\n\t\t\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ document.image_5 }}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-4 col-md-offset-0 col-sm-5 col-xs-5 col-sm-offset-1 col-xs-offset-1\">\n\t\t\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ document.image_6 }}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\n\t\t<!-- HowTo section -->\n\t\t<div *ngIf=\"globals.current_page.title == 'Як замовити'\" class=\"howTo col-lg-12 col-md-12 col-sm-12\">\n\t\t\t<h1 class=\"howTo-header\">Як замовити</h1>\n\t\t\t<div class=\"howTo-content\">\n\n\t\t\t\t<p>Замовлення приймаємо  щодня з 11.00 до 23.00 через наш сайт \n\t\t\t\t<a href=\"http://www.yakuzalviv.com\">http://www.yakuzalviv.com</a>  або по телефону: <br>\n\t\t\t\t+38 (073) 80 05 009<br>\n\t\t\t\t+38 (050) 53 42 556<br>\n\t\t\t\t+38 (098) 26 37 505<br>\n\t\t\t\tОплатити за замовлення  Ви можете готівкою при отриманні або за допомогою банківської картки на нашому сайті.<br>\n\t\t\t\tДостака  <span><b>безкоштовна</b></span> при замовленні на мінімально вказану суму.<br>\n\t\t\t\t<b>Сума мінімального замовлення в межах міста  – <span>199 грн</span></b>.<br>\n\t\t\t\t<b>Сума мінімального замовлення за межі міста  <span>від 300</span> грн.</b><br>\n\t\t\t\tТривалість доставки становить від 20 до 80 хвилин.<br>\n\t\t\t\tПісля оформлення замовлення на сайті з Вами зв'яжуться найближчим часом.<br>\n\t\t\t\t<u>Переконливе прохання: будь ласка, великі замовлення оформляйте зазделегідь.</u></p>\n\n\t\t\t\t<!-- <div class=\"row howTo-block\" *ngFor=\"let ht of globals.how_to_content\">\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6\">\n\t\t\t\t\t\t<img class=\"howTo-block-icon\" src=\"{{ globals.backend_domain}}{{ ht.icon }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 col-md-6 col-sm-6\">\n\t\t\t\t\t\t<div class=\"howTo-block-header\">{{ ht.title }}</div>\n\t\t\t\t\t\t<div class=\"howTo-block-text\">{{ ht.content }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Contacts section -->\n\t\t<div *ngIf=\"globals.current_page.title == 'Контакти'\" class=\"contacts col-lg-12 col-md-12\">\n\t\t\t<div class=\"contacts-wrapper\">\n\t\t\t\t<h1 class=\"contacts-header\">Контакти</h1>\n\t\t\t\t<div class=\"contacts-content\">\n\t\t\t\t\t<div class=\"contacts-content-social\">\n\t\t\t\t\t<div *ngFor=\"let social of globals.social_content\">\n\t\t\t\t\t\t<a href=\"{{ social.link }}\"><fa class=\"{{ social.icon }}\" name=\"{{ social.icon }}\"></fa></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<h3 class=\"contacts-content-header red\">\n\t\t\t\t\t\tДля замовлення телефонуйте\n\t\t\t\t\t</h3>\n\t\t\t\t\t<p class=\"contacts-content-text\">\n\t\t\t\t\t\t+38 (073) 80 05 009\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"contacts-content-text\">\n\t\t\t\t\t\t+38 (098) 26 37 505\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"contacts-content-text\">\n\t\t\t\t\t\t+38 (050) 53 42 556\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"contacts-content-logo\">\n\t\t\t\t\t\t<img src=\"{{ logo_path }}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let email of globals.email_content\" class=\"contacts-content-mail\">\n\t\t\t\t\t\t{{ email.email }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"contacts-content-site\">\n\t\t\t\t\t\t<a href=\"http://www.yakuzalviv.com\">www.yakuzalviv.com</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Feedback section -->\n\t\t<div *ngIf=\"globals.current_page.title == 'Відгуки'\" class=\"feedback col-lg-12 col-md-12 col-sm-12\">\n\t\t\t<div class=\"feedback-form\">\n\t\t\t\t<h2 class=\"feedback-header\">Відгуки</h2>\n\t\t\t\t<div class=\"feedback-header-wrapper\">\n\t\t\t\t<h3 class=\"feedback-header-wrapper-header green\">\n\t\t\t\t\tЗалишити відгук\n\t\t\t\t</h3>\n\t\t\t\t\t<form id=\"feedback-from\">\n\t\t\t\t\t\t<label for=\"feedback-form-name\">\n\t\t\t\t\t\tВведіть ваше ім'я</label>\n\t\t\t\t\t\t<input id=\"feedback-form-name\" type=\"text\" name=\"feedback-form-name\">\n\t\t\t\t\t\t<label for=\"feedback-form-cell\">\n\t\t\t\t\t\tВведіть номер телефону</label>\n\t\t\t\t\t\t<input id=\"feedback-form-cell\" type=\"number\" name=\"feedback-form-cell\">\n\t\t\t\t\t\t<label for=\"feedback-form-text\">\n\t\t\t\t\t\tТекст відгуку</label>\n\t\t\t\t\t\t<textarea id=\"feedback-form-text\" type=\"text\" name=\"feedback-form-text\"></textarea>\n\t\t\t\t\t\t<button (click)=\"create_feedback('feedback-from')\" type=\"button\" class=\"green-bg\">Відправити відгук</button>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"feedback-comments\">\n\t\t\t\t<!-- Single comment -->\n\t\t\t\t<div class=\"feedback-comment row\" *ngFor=\"let feedback of globals.feedback_content\">\n\t\t\t\t\t<div class=\"feedback-comment-author col-sm-2\">\n\t\t\t\t\t\t<p class=\"feedback-comment-author-name\">\n\t\t\t\t\t\t\t{{ feedback.author }}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"feedback-comment-author-date\">\n\t\t\t\t\t\t\t{{ feedback.created_at | date: 'short' }}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"feedback-comment-body col-sm-offset-1 col-sm-9\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{ feedback.content }}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Callback modal window -->\n\t\t<div *ngIf=\"globals.show_callback\" class=\"call-modal\">\n\t\t\t<div class=\"call-modal-bg\"></div>\n\t\t\t<div class=\"call-modal-form\">\n\t\t\t\t<div class=\"call-modal-form-X\">\n\t\t\t\t\t<fa name=\"times\" (click)=\"close_modal('callback')\"></fa>\n\t\t\t\t</div>\n\t\t\t\t<form id=\"callback-form\" action=\"\">\n\t\t\t\t\t<label for=\"call-modal-form-name\">\n\t\t\t\t\tВведіть ваше ім'я</label>\n\t\t\t\t\t<input id=\"call-modal-form-name\" type=\"text\" name=\"call-modal-form-name\">\n\t\t\t\t\t<label for=\"call-modal-form-cell\">\n\t\t\t\t\tВведіть номер телефону</label>\n\t\t\t\t\t<input id=\"call-modal-form-cell\" type=\"number\" name=\"call-modal-form-cell\">\n\t\t\t\t\t<span class=\"call-modal-form-info\">\n\t\t\t\t\t\tНаші оператори звяжуться з вами\n\t\t\t\t\t</span>\n\t\t\t\t\t<button (click)=\"create_callback('callback-form')\" type=\"button\">Замовити дзвінок</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Subscription modal window -->\n\t\t<div *ngIf=\"globals.show_subs\" class=\"subs-modal\">\n\t\t\t<div class=\"subs-modal-bg\"></div>\n\t\t\t<div class=\"subs-modal-form\">\n\t\t\t\t<div class=\"subs-modal-X\" (click)=\"close_modal('subs')\">\n\t\t\t\t\t<fa name=\"times\"></fa>\n\t\t\t\t</div>\n\t\t\t\t<form id=\"subs-form\" action=\"\">\n\t\t\t\t\t<span class=\"subs-modal-form-info\">\n\t\t\t\t\t\tВи можете підписаться на щотижневу розсилку\n\t\t\t\t\t</span>\n\t\t\t\t\t<label for=\"subs-modal-form-email\">\n\t\t\t\t\tВведіть емейл</label>\n\t\t\t\t\t<input id=\"subs-modal-form-email\" type=\"email\" name=\"subs-modal-form-email\">\t\n\t\t\t\t\t<button (click)=\"create_subs('subs-form')\" type=\"button\">Підписатись</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Product modal window -->\n\t\t<div *ngIf=\"globals.show_product\" class=\"prod-modal\">\n\n\t\t\t<div class=\"prod-modal-wrapper\">\n\t\t\t\t<div class=\"prod-modal-X\">\n\t\t\t\t\t<fa (click)=\"close_modal('product')\" name=\"times\"></fa>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"prod-modal-header\">\n\t\t\t\t\t<h2>{{ globals.current_product.title }}</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"prod-modal-image\">\n\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ globals.current_product.image }}\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"prod-modal-info\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<span>{{ globals.current_product.weight }}г</span>\n\t\t\t\t\t\t<span *ngIf=\"globals.current_product.pieces\">{{ globals.current_product.pieces }} кусків</span>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"prod-modal-text\">\n\t\t\t\t\t<p>{{ globals.current_product.description }}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"prod-modal-price\">\n\t\t\t\t\t<p>{{ globals.current_product.price }}грн</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"prod-modal-button\">\n\t\t\t\t\t<button (click)=\"add_cart_item(globals.current_product.id)\">Замовити</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"prod-modal-arrows\">\n\t\t\t\t\t<div class=\"prod-modal-arrows-left\" (click)=\"show_product(prew_product_id)\">\n\t\t\t\t\t\t<fa name=\"angle-left\"></fa>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"prod-modal-arrows-right\" (click)=\"show_product(next_product_id)\">\n\t\t\t\t\t\t<fa name=\"angle-right\"></fa>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- Order section -->\n\t\t<div *ngIf=\"globals.current_page.title == 'Оформлення замовлення'\" class=\"order row\">\n\t\t\t<h1 class=\"order-header red\">ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h1>\n\t\t\t<div class=\"order-list col-sm-6 col-sm-offset-1 col-xs-12\">\n\t\t\t\t<div *ngFor=\"let item of cart.items; let i = index\" class=\"order-item row\">\n\t\t\t\t\t<div class=\"order-item-close\">\n\t\t\t\t\t\t<!-- <embed class=\"order-item-close-img\" src=\"/assets/svg/X.svg\"> -->\n\t\t\t\t\t\t<img class=\"order-item-close-img\" src=\"/assets/img/X.png\">\n\t\t\t\t\t\t<div class=\"order-item-close-click\" (click)=\"remove_cart_item(i)\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"order-item-img col-sm-3\">\n\t\t\t\t\t\t<img src=\"{{ globals.backend_domain}}{{ item.item_image}}\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"order-item-content col-sm-6\">\n\t\t\t\t\t\t<p class=\"order-item-content-title\">{{ item.item_name }}</p>\n\t\t\t\t\t\t<p class=\"order-item-content-description\">{{ item.item_description }}</p>\n\t\t\t\t\t\t<div class=\"order-item-counter\">\n\t\t\t\t\t\t\t<div class=\"order-item-counter-minus\">\n\t\t\t\t\t\t\t\t<!-- <embed class=\"order-item-counter-minus\" src=\"/assets/svg/minus.svg\"> -->\n\t\t\t\t\t\t\t\t<img class=\"order-item-counter-minus\" src=\"/assets/img/minus.png\">\n\t\t\t\t\t\t\t\t<div class=\"order-item-counter-click\" (click)=\"minus_cart_item(i)\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"order-item-counter-count\">{{ item.item_count }} шт.</div>\n\t\t\t\t\t\t\t<div class=\"order-item-counter-plus order-item-counter-button\">\n\t\t\t\t\t\t\t\t<!-- <embed class=\"order-item-counter-plus\" src=\"/assets/svg/plus.svg\"> -->\n\t\t\t\t\t\t\t\t<img class=\"order-item-counter-plus\" src=\"/assets/img/plus.png\">\n\t\t\t\t\t\t\t\t<div class=\"order-item-counter-click\" (click)=\"plus_cart_item(i)\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"order-item-info col-sm-3\">\n\t\t\t\t\t\t<p *ngIf=\"item.item_pieces\" class=\"order-item-info-info\">{{ item.item_weight }}г {{ item.item_pieces }} кусків</p>\n\t\t\t\t\t\t<div class=\"order-item-info-price\">{{ item.item_total }}грн</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"red\"><h1>Всього: {{ cart.total }}грн</h1></div>\n\n\t\t\t\t<!-- <div class=\"order-adds\">\n\t\t\t\t\t<div class=\"order-adds-item\">\n\t\t\t\t\t\t<img src=\"{{ product_path }}\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n -->\n\n\t\t\t</div>\n\n\t\t\t<div class=\"order-propos col-sm-3\" id=\"propos\" [ngClass]=\"{'top' : propos_in_top, 'out' : propos_out}\">\n\n\t\t\t\t<div *ngFor=\"let category of globals.order_content; let index = index\" class=\"prder-propos-block\">\n\t\t\t\t\t<h2>{{ category.content.title }}</h2>\n\t\t\t\t\t<div class=\"order-propos-item\">\n\n\t\t\t\t\t\t<fa name=\"chevron-circle-left\" class=\"order-propos-item-left\" (click)=\"changeCurrentPropos('left', index)\"></fa>\n\t\t\t\t\t\t<img src=\"{{globals.backend_domain}}{{ category.current_content.image }}\">\n\t\t\t\t\t\t<fa name=\"chevron-circle-right\" class=\"order-propos-item-right\" (click)=\"changeCurrentPropos('right', index)\"></fa>\n\n\t\t\t\t\t\t<h3>{{ category.current_content.title }}</h3>\n\t\t\t\t\t\t<div class=\"order-propos-price\">{{ category.current_content.price }}грн</div>\n\t\t\t\t\t\t<div class=\"order-propos-button\" (click)=\"add_cart_item(category.current_content.id)\">Додати</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"order-form col-md-6 col-md-offset-1 col-sm-12 col-xs-12\">\n\t\t\t\t<form id=\"order-form\">\n\t\t\t\t\t<label for=\"order-form-name\">\n\t\t\t\t\tВведіть вашу адресу доставки</label>\n\t\t\t\t\t<input id=\"order-form-name\" type=\"text\" name=\"order-form-name\">\n\t\t\t\t\t<label for=\"order-form-cell\">\n\t\t\t\t\tВведіть ваш номер телефону</label>\n\t\t\t\t\t<input id=\"order-form-cell\" type=\"number\" name=\"order-form-cell\">\n\t\t\t\t\t<label for=\"order-form-name\">\n\t\t\t\t\tВведіть ваше ім'я</label>\n\t\t\t\t\t<input id=\"order-form-name\" type=\"text\" name=\"order-form-name\" min=\"1\" default=\"1\">\n\t\t\t\t\t<label for=\"order-form-count\">\n\t\t\t\t\tВведіть кількість осіб</label>\n\t\t\t\t\t<input id=\"order-form-count\" type=\"number\" name=\"order-form-count\">\n\n\t\t\t\t\t<label for=\"order-form-email\">\n\t\t\t\t\tВведіть email для разової знижки</label>\n\t\t\t\t\t<input id=\"order-form-email\" type=\"email\" name=\"order-form-email\">\n\n\t\t\t\t\t<label for=\"order-form-text\">\n\t\t\t\t\tКоментарій</label>\n\t\t\t\t\t<textarea id=\"order-form-text\" type=\"text\" name=\"order-form-text\"></textarea>\n\t\t\t\t\t<button type=\"button\" class=\"order-form-button-red red-bg\" (click)=\"create_order('order-form', 0)\">Замовити</button>\n\t\t\t\t\t<button type=\"button\" class=\"order-form-button-green\" (click)=\"create_order('order-form', 1)\">Оплатити карткою</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t\t<!-- Message modal window -->\n\t\t<div *ngIf=\"globals.show_message\" class=\"message-modal\">\n\t\t\t<div class=\"message-modal-bg\"></div>\n\t\t\t<div class=\"message-modal-form\">\n\t\t\t\t<div class=\"message-modal-form-X\">\n\t\t\t\t\t<fa name=\"times\" (click)=\"close_modal('message')\"></fa>\n\t\t\t\t</div>\n\t\t\t\t<form action=\"\">\n\t\t\t\t\t<span class=\"message-modal-form-info\">\n\t\t\t\t\t\t{{ globals.message }}\n\t\t\t\t\t</span>\n\t\t\t\t\t<button type=\"button\" (click)=\"close_modal('message')\">Закрити</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  margin-bottom: 72px; }\n\n.active-add {\n  color: green; }\n\n.active-remove {\n  color: red; }\n\n.proposition {\n  margin-top: 39px;\n  text-align: center; }\n\n.proposition div {\n  margin-bottom: 20px; }\n\n.cart-wrapper.top {\n  position: fixed;\n  top: 30px;\n  left: 0; }\n\n.cart-wrapper.out {\n  left: -358px; }\n\n.cart-wrapper {\n  top: 0;\n  left: 0;\n  width: 328px;\n  margin-top: 56px;\n  margin-left: 30px;\n  background-color: #080806;\n  padding-bottom: 29px;\n  border: 1px solid #444;\n  border-radius: 5px;\n  transition: .3s;\n  overflow-x: hidden; }\n\n.cart-head {\n  position: relative;\n  text-align: center;\n  height: 76px; }\n  .cart-head-img {\n    position: absolute;\n    top: -31px;\n    left: 104px;\n    width: 121px; }\n  .cart-head-text {\n    color: #fff;\n    font-family: times new roman;\n    font-size: 26px;\n    text-transform: uppercase;\n    line-height: 43px;\n    background-color: #0e0e0c;\n    position: absolute;\n    top: -13px;\n    left: -3px;\n    width: 102%; }\n  .cart-head-sticks {\n    position: absolute;\n    top: 53px;\n    left: 133px;\n    width: 62px; }\n\n.cart-body {\n  overflow-y: scroll;\n  max-height: 267px;\n  margin-right: -17px; }\n\n.cart-item {\n  color: #fff;\n  margin: 24px 19px 10px;\n  position: relative;\n  border: 1px solid green;\n  border-radius: 5px;\n  height: 78px;\n  -webkit-animation: slide-up 0.7s ease;\n          animation: slide-up 0.7s ease; }\n  .cart-item-close {\n    position: absolute;\n    right: -1px;\n    top: -1px;\n    width: 10px;\n    height: 10px;\n    background-color: #1a1b13;\n    cursor: pointer; }\n    .cart-item-close embed {\n      width: 12px;\n      height: 12px; }\n    .cart-item-close-click {\n      position: absolute;\n      height: 10px;\n      width: 10px; }\n  .cart-item-name {\n    font-weight: bold;\n    font-size: 14px;\n    margin-top: 12px;\n    margin-left: 14px; }\n  .cart-item-counter {\n    display: inline-block;\n    position: relative;\n    width: 100px;\n    margin-top: 10px;\n    margin-left: 21px; }\n    .cart-item-counter-click {\n      height: 13px;\n      width: 13px;\n      position: absolute;\n      top: 3px; }\n    .cart-item-counter * {\n      cursor: pointer;\n      display: inline-block;\n      width: 10px;\n      height: 10px; }\n  .cart-item-price {\n    display: inline-block;\n    width: 141px;\n    text-align: right;\n    font-weight: bold; }\n\n.cart-total {\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n  margin-top: 25px; }\n\n.cart-button {\n  text-align: center;\n  margin-top: 27px; }\n  .cart-button button {\n    padding: 6px 39px;\n    background-color: #b42e23;\n    border: none;\n    color: #fff;\n    font-weight: bold; }\n\n.product {\n  text-align: center;\n  padding-top: 57px; }\n  .product-title h1 {\n    font-family: 'Times new roman';\n    font-size: 26px;\n    color: #fff;\n    text-transform: uppercase;\n    text-align: left; }\n  .product-filters {\n    display: inline-block;\n    border: 1px solid #444;\n    border-radius: 5px; }\n    .product-filters-item {\n      position: relative;\n      display: inline-block;\n      width: 85px;\n      text-align: center;\n      color: #fff;\n      padding-bottom: 3px; }\n      .product-filters-item fa {\n        display: block; }\n      .product-filters-item img {\n        width: 13px; }\n      .product-filters-item-add {\n        font-size: 20px; }\n      .product-filters-item-remove {\n        font-size: 17px; }\n        .product-filters-item-remove .cls-1 {\n          fill: red;\n          fill-rule: none;\n          -webkit-filter: none;\n                  filter: none; }\n      .product-filters-item-hover {\n        width: 20px;\n        height: 20px;\n        position: absolute;\n        left: 32px;\n        bottom: 2px; }\n      .product-filters-item p {\n        font-weight: bold;\n        text-align: center;\n        margin-bottom: 0; }\n      .product-filters-item-name {\n        font-family: \"Open sans\";\n        color: #fff; }\n  .product-area {\n    padding: 9px 8px; }\n    .product-area-item {\n      padding: 5px 6px; }\n      .product-area-item-inner {\n        min-height: 297px;\n        padding: 10px 11px;\n        border: 1px solid #555; }\n        .product-area-item-inner img {\n          max-width: 225px; }\n      .product-area-item-labels {\n        height: 20px;\n        width: 100%; }\n      .product-area-item-label {\n        display: inline-block;\n        float: right; }\n        .product-area-item-label img {\n          width: 16px;\n          height: 16px;\n          margin-bottom: 4px; }\n      .product-area-item-title {\n        margin-top: 4px;\n        margin-bottom: 6px;\n        color: #fe683a;\n        font-size: 15px;\n        text-align: center; }\n      .product-area-item-weight {\n        color: #555;\n        font-size: 12px; }\n      .product-area-item-pieces {\n        float: right;\n        color: #555;\n        font-size: 12px; }\n      .product-area-item-description {\n        margin-top: 10px;\n        font-size: 13px;\n        color: #ccc; }\n      .product-area-item-bottom {\n        margin: 0 8px 0 0; }\n      .product-area-item-price {\n        color: #fe683a;\n        font-size: 18px;\n        display: inline-block;\n        margin-top: 9px;\n        margin-bottom: 10px; }\n      .product-area-item-buy {\n        color: #ccc;\n        background-color: #fe683a;\n        float: right;\n        font-size: 15px;\n        font-family: \"Open Sans\";\n        font-weight: bold;\n        padding: 7px 22px;\n        border: none; }\n\n.shares {\n  color: #fff;\n  text-align: center; }\n  .shares h1 {\n    margin-bottom: 20px;\n    font-family: \"Times New Roman\"; }\n  .shares-block {\n    margin-bottom: 20px; }\n    .shares-block-text {\n      margin-bottom: 20px;\n      font-size: 20px; }\n\n.documents {\n  color: #fff; }\n  .documents-header {\n    text-align: center;\n    font-family: \"Times New Roman\"; }\n  .documents-content {\n    padding: 24px;\n    background-color: #1a1b13;\n    border: 1px solid #777;\n    border-radius: 5px; }\n    .documents-content-images img {\n      margin: 24px 0; }\n\n.howTo {\n  color: #fff; }\n  .howTo-header {\n    margin-bottom: 24px;\n    text-align: center;\n    font-family: \"Times New Roman\"; }\n  .howTo-content {\n    background-color: #1a1b13;\n    border: 1px solid #777;\n    border-radius: 5px;\n    text-align: center;\n    padding: 0 77px; }\n    .howTo-content p {\n      font-size: 19px;\n      line-height: 35px; }\n      .howTo-content p span {\n        color: #3ca930; }\n      .howTo-content p a {\n        color: #bd0505; }\n  .howTo-block {\n    margin: 24px;\n    padding-bottom: 16px;\n    border-bottom: 2px dotted #777; }\n    .howTo-block-icon {\n      margin-top: 41px;\n      width: 30%; }\n    .howTo-block-header {\n      margin-bottom: 16px;\n      color: #f00; }\n\n.contacts {\n  color: #fff;\n  text-align: center; }\n  .contacts-header {\n    font-family: \"Times NEw Roman\"; }\n  .contacts-content {\n    background-color: #1a1b13;\n    border: 1px solid #777;\n    border-radius: 5px; }\n    .contacts-content-social div {\n      display: inline-block;\n      margin: 0 9px; }\n    .contacts-content-social fa {\n      font-size: 34px; }\n    .contacts-content-logo {\n      margin-bottom: 14px; }\n      .contacts-content-logo img {\n        width: 256px; }\n    .contacts-content-mail {\n      margin-bottom: 14px;\n      font-size: 25px; }\n    .contacts-content-text {\n      font-size: 30px; }\n    .contacts-content-site a {\n      color: #bd0505;\n      font-size: 30px; }\n\n.feedback {\n  color: #fff; }\n  .feedback-header {\n    text-align: center;\n    font-family: \"Times new roman\";\n    font-size: 35px;\n    text-transform: uppercase;\n    margin-bottom: 21px; }\n    .feedback-header-wrapper {\n      width: 800px;\n      margin: auto;\n      padding: 24px 47px;\n      background-color: #1a1b13;\n      border: 1px solid #3ca930;\n      border-radius: 5px;\n      margin-bottom: 105px; }\n      .feedback-header-wrapper-header {\n        text-align: center;\n        font-family: \"times new roman\";\n        font-size: 25px;\n        text-transform: uppercase;\n        margin-top: 34px;\n        color: #36a140;\n        margin-bottom: 49px; }\n  .feedback-form {\n    margin-bottom: 24px;\n    padding: 0 38px; }\n    .feedback-form label {\n      font-size: 23px;\n      margin-bottom: 13px; }\n    .feedback-form input {\n      display: block;\n      width: 100%;\n      height: 45px;\n      margin-bottom: 27px; }\n    .feedback-form textarea {\n      display: block;\n      width: 100%;\n      height: 164px; }\n    .feedback-form button {\n      padding: 6px 93px;\n      margin-top: 29px;\n      color: #fff;\n      font-weight: bold;\n      font-size: 21px;\n      border: none; }\n  .feedback-comments {\n    width: 100%;\n    margin: auto; }\n  .feedback-comment {\n    padding: 0 53px;\n    margin-bottom: 23px; }\n    .feedback-comment-author {\n      text-align: center;\n      font-style: italic;\n      padding: 32px; }\n    .feedback-comment-body {\n      background-color: #1a1b13;\n      border: 1px solid #777;\n      border-radius: 5px;\n      padding: 32px; }\n\n.call-modal, .message-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n  overflow-y: scroll; }\n  .call-modal-form, .message-modal-form {\n    width: 853px;\n    margin: auto;\n    margin-top: 10%;\n    border: 1px solid #777;\n    border-radius: 5px;\n    background-color: #1a1b13;\n    color: #fff; }\n    .call-modal-form-cell, .message-modal-form-cell {\n      margin-bottom: 16px; }\n    .call-modal-form-info, .message-modal-form-info {\n      margin-bottom: 30px;\n      display: block; }\n    .call-modal-form form, .message-modal-form form {\n      padding: 0 63px; }\n    .call-modal-form-X, .message-modal-form-X {\n      text-align: right;\n      padding-right: 13px; }\n      .call-modal-form-X fa, .message-modal-form-X fa {\n        font-size: 32px;\n        color: green; }\n    .call-modal-form label, .message-modal-form label {\n      font-size: 24px;\n      font-style: italic;\n      font-weight: 400; }\n    .call-modal-form span, .message-modal-form span {\n      font-size: 16px;\n      font-style: italic; }\n    .call-modal-form input, .message-modal-form input {\n      display: block;\n      width: 100%;\n      height: 46px;\n      margin-bottom: 32px; }\n    .call-modal-form button, .message-modal-form button {\n      display: block;\n      height: 42px;\n      width: 353px;\n      font-size: 23px;\n      background-color: green;\n      font-weight: bold;\n      border: none;\n      margin-bottom: 32px; }\n\n.subs-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n  overflow-y: scroll; }\n  .subs-modal-X {\n    font-size: 26px;\n    text-align: right;\n    color: #3ca930;\n    cursor: pointer; }\n  .subs-modal-form {\n    width: 854px;\n    margin: auto;\n    margin-top: 10%;\n    padding: 8px 39px;\n    border: 1px solid #777;\n    border-radius: 5px;\n    background-color: #1a1b13;\n    color: #fff; }\n    .subs-modal-form label {\n      display: block;\n      margin-top: 52px;\n      font-style: italic;\n      margin-bottom: 9px;\n      font-size: 24px; }\n    .subs-modal-form span {\n      font-size: 20px;\n      font-style: italic;\n      color: red; }\n    .subs-modal-form input {\n      display: block;\n      margin-bottom: 59px;\n      width: 100%;\n      height: 45px; }\n    .subs-modal-form button {\n      display: block;\n      width: 209px;\n      padding: 16px;\n      background-color: red;\n      font-weight: bold;\n      border: none;\n      margin-bottom: 32px;\n      border: 1px solid red; }\n\n.prod-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n  overflow-y: scroll; }\n  .prod-modal-X {\n    font-size: 26px;\n    text-align: right;\n    color: #3ca930;\n    cursor: pointer; }\n  .prod-modal-header {\n    padding-left: 106px;\n    color: #fe683a;\n    margin-top: 3px; }\n  .prod-modal-wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: auto;\n    margin-top: 5%;\n    padding: 8px 24px;\n    border: 1px solid #777;\n    border-radius: 5px;\n    background-color: #1a1b13;\n    color: #fff; }\n  .prod-modal-image {\n    text-align: center;\n    padding-bottom: 18px; }\n    .prod-modal-image img {\n      width: 60%; }\n  .prod-modal-info {\n    color: #ccc; }\n    .prod-modal-info p {\n      margin-bottom: 18px; }\n      .prod-modal-info p span {\n        margin-left: 108px;\n        font-size: 15px; }\n  .prod-modal-text {\n    padding-left: 107px;\n    margin-bottom: 35px;\n    font-style: italic; }\n  .prod-modal-price {\n    display: inline-block;\n    margin-left: 109px; }\n    .prod-modal-price p {\n      font-size: 26px;\n      color: #fe683a; }\n  .prod-modal-button {\n    margin-left: 77px;\n    display: inline-block; }\n    .prod-modal-button button {\n      background-color: #fe683a;\n      border: none;\n      padding: 10px 50px; }\n  .prod-modal-arrows {\n    position: absolute;\n    top: 241px;\n    width: 920px;\n    font-size: 84px; }\n    .prod-modal-arrows-left {\n      float: left;\n      cursor: pointer; }\n    .prod-modal-arrows-right {\n      float: right;\n      cursor: pointer; }\n\n/* Helpers classes */\n.red {\n  color: #f00; }\n\n.green-bg {\n  background-color: #3ca930; }\n\n.red-bg {\n  background-color: #b42e23; }\n\n.breadcrumb {\n  background: none;\n  color: #fff; }\n  .breadcrumb-separator {\n    padding: 0 12px; }\n\n.go-to-main {\n  cursor: pointer; }\n\ninput, textarea {\n  color: #000;\n  font-size: 24px; }\n\n.order {\n  color: #fff;\n  margin-left: 0;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-bottom: 45px; }\n  .order-header {\n    font-weight: bold;\n    font-family: \"Times new roman\";\n    font-size: 33px;\n    margin-top: 0;\n    margin-bottom: 27px; }\n  .order-item {\n    background-color: #1a1b13;\n    border: 1px solid #444;\n    border-radius: 5px;\n    margin-left: 0;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    margin-bottom: 21px; }\n    .order-item-close {\n      position: relative;\n      padding-right: 7px;\n      float: right; }\n      .order-item-close-img {\n        width: 13px;\n        height: 13px; }\n      .order-item-close-click {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        right: 4px;\n        top: -2px;\n        cursor: pointer; }\n    .order-item-img img {\n      max-width: 111px; }\n    .order-item-content {\n      padding-top: 22px;\n      padding-left: 55px; }\n      .order-item-content-title {\n        font-weight: bold;\n        color: #f17138;\n        margin-bottom: 20px; }\n      .order-item-content-description {\n        font-style: italic;\n        font-size: 13px; }\n    .order-item-counter {\n      position: relative; }\n      .order-item-counter * {\n        display: inline-block; }\n        .order-item-counter * embed {\n          width: 13px; }\n      .order-item-counter-click {\n        top: 0;\n        height: 13px;\n        width: 13px;\n        position: absolute;\n        cursor: pointer; }\n    .order-item-info {\n      padding-top: 11px;\n      padding-left: 45px; }\n      .order-item-info-info {\n        color: #ccc;\n        font-style: italic;\n        margin-bottom: 74px; }\n      .order-item-info-price {\n        font-size: 21px;\n        font-weight: bold;\n        color: #f17138; }\n  .order-propos {\n    float: right;\n    margin-right: 29px;\n    top: 0;\n    right: 0;\n    transition: .3s; }\n    .order-propos.top {\n      position: fixed;\n      top: 30px;\n      right: 0; }\n    .order-propos.out {\n      right: -358px; }\n    .order-propos-item {\n      background-color: #1a1b13;\n      border: 1px solid #444;\n      border-radius: 5px;\n      position: relative; }\n      .order-propos-item-right {\n        position: absolute;\n        font-size: 26px;\n        top: 102px;\n        right: 6px;\n        color: #333;\n        cursor: pointer; }\n      .order-propos-item-left {\n        position: absolute;\n        font-size: 26px;\n        top: 102px;\n        left: 6px;\n        color: #333;\n        cursor: pointer; }\n      .order-propos-item img {\n        width: 229px;\n        margin: auto;\n        display: block; }\n    .order-propos-price {\n      color: #f17138;\n      margin-top: 25px;\n      margin-left: 24px;\n      font-size: 25px;\n      display: inline-block;\n      font-weight: bold; }\n    .order-propos h2 {\n      font-size: 22px;\n      font-style: italic; }\n    .order-propos h3 {\n      color: #f17138;\n      margin: 0;\n      font-size: 16px;\n      text-align: center; }\n    .order-propos-button {\n      display: inline-block;\n      margin-left: 36px;\n      background-color: #3ca930;\n      padding: 7px 17px;\n      margin-bottom: 20px;\n      font-weight: bold;\n      cursor: pointer; }\n  .order-adds {\n    background-color: #1a1b13;\n    border: 1px solid #444;\n    border-radius: 5px;\n    position: relative; }\n  .order-form {\n    margin-bottom: 24px;\n    margin-top: 56px;\n    padding: 0 38px; }\n    .order-form label {\n      font-size: 23px;\n      margin-bottom: 13px; }\n    .order-form input {\n      display: block;\n      width: 100%;\n      height: 45px;\n      margin-bottom: 27px; }\n    .order-form textarea {\n      display: block;\n      width: 100%;\n      height: 164px; }\n    .order-form button {\n      margin-top: 29px;\n      color: #fff;\n      font-weight: bold;\n      font-size: 21px; }\n    .order-form-button-green {\n      background: none;\n      border: 3px solid #3ca930;\n      color: #3ca930;\n      padding: 3px 29px; }\n    .order-form-button-red {\n      border: none;\n      padding: 6px 49px; }\n\n.facebook {\n  color: #3b5998; }\n\n.vk {\n  color: #4c75a3; }\n\n.twitter {\n  color: #00aced; }\n\n.google-plus {\n  color: #dd4b39; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LiqPayModule_LiqPayModule__ = __webpack_require__("../../../../../src/app/LiqPayModule/LiqPayModule.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BodyComponent = (function () {
    function BodyComponent(http) {
        this.http = http;
        this.shares_path = 'assets/img/shares.jpg';
        this.product_path = 'assets/img/havka.jpg';
        this.shares_2_path = 'assets/img/shares_image.jpg';
        this.document_image = 'assets/img/document.jpg';
        this.how_to_icon = 'assets/img/howToIcon.png';
        this.logo_path = '/assets/logo/Yakudza.svg';
        this.globals = __WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */];
        this.cart = __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* Cart */];
        this._filters_get_path = 'http://oscargibson.pythonanywhere.com/backend/api/v1/tag';
        this._callback_post_path = 'http://oscargibson.pythonanywhere.com/backend/api/v1/callback';
        this._feedback_post_path = 'http://oscargibson.pythonanywhere.com/backend/api/v1/feedback';
        this.filter_object = new __WEBPACK_IMPORTED_MODULE_2__app_globals__["c" /* FilterObject */]([]);
    }
    BodyComponent.prototype.onNavScroll = function ($event) {
        // console.log(window.pageYOffset, this.cart_element.offsetTop + 30);
        if (window.pageYOffset >= this.cart_element.offsetTop + 30) {
            this.cart_in_top = true;
        }
        else {
            this.cart_in_top = false;
        }
        if (this.footer.offsetTop <= window.pageYOffset + __WEBPACK_IMPORTED_MODULE_4_jquery__(this.cart_element).children().height() + 100) {
            this.cart_out = true;
        }
        else {
            this.cart_out = false;
        }
        // console.log(this.footer.offsetTop, window.pageYOffset + $(this.cart_element).children().height() + 100);
        if (this.globals.current_page.title == 'Оформлення замовлення') {
            // console.log(this.globals.propos_element);
            this.globals.propos_element = document.getElementById('propos');
            // console.log($(this.globals.propos_element).position().top);
            if (window.pageYOffset >= this.globals.propos_element.offsetTop + 30) {
                this.propos_in_top = true;
            }
            else {
                this.propos_in_top = false;
                // console.log(window.pageYOffset, $(this.propos_element).position().top, false);
            }
            if (this.footer.offsetTop <= window.pageYOffset + __WEBPACK_IMPORTED_MODULE_4_jquery__(this.globals.propos_element).height() + 100) {
                this.propos_out = true;
                // console.log(3);
            }
            else {
                this.propos_out = false;
                // console.log(4);
            }
        }
    };
    BodyComponent.prototype.ngOnInit = function () {
        // this.get_products();
        this.get_filters();
        this.get_shares_content();
        // this.get_document_content();
        this.get_how_to_content();
        this.get_contact_content();
        this.get_email_content();
        this.get_social_content();
        this.get_feedback_content();
        this.liqPayCheckout = new __WEBPACK_IMPORTED_MODULE_3__LiqPayModule_LiqPayModule__["a" /* LiqPayCheckout */]().liqPayCheckout;
        this.cart_element = document.getElementById('cart');
        // this.cart_position = document.getElementById('cart').offsetTop;
        this.cart_position = this.cart_element.offsetTop;
        this.footer = document.getElementById('footer-banner');
    };
    BodyComponent.prototype.test = function () {
        console.log(this.globals);
    };
    BodyComponent.prototype.get_filters = function () {
        var _this = this;
        this.http.get(this.globals.tags_get_path, { headers: this.headers })
            .subscribe(function (data) {
            _this.filter_object = new __WEBPACK_IMPORTED_MODULE_2__app_globals__["c" /* FilterObject */](data['tags']);
            console.log('filters_2 ', _this.filter_object);
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    // public check_filter_add(tag) {
    //   if (this.filter_object.getElement(tag) === 1) return true;
    //   return false;
    // }
    // public check_filter_remove(tag) {
    //   if (this.filter_object.getElement(tag) === -1) return true;
    //   return false;
    // }
    BodyComponent.prototype.changeFilter = function (id, status) {
        this.filter_object.setElement(id, status);
        this.filter_products();
    };
    BodyComponent.prototype.filter_products = function () {
        if (!this.filter_object.isFilterActive()) {
            this.globals.categories_filter = this.globals.categories.slice();
            console.log('not active', this.globals.categories_filter);
            return;
        }
        this.globals.categories_filter = [];
        for (var i = 0; i < this.globals.categories.length; i++) {
            this.globals.categories_filter[i] = {
                'slug': this.globals.categories[i].slug,
                'name': this.globals.categories[i].name,
                'products': []
            };
            for (var _i = 0, _a = this.globals.categories[i].products; _i < _a.length; _i++) {
                var product = _a[_i];
                for (var _b = 0, _c = this.filter_object.iterator; _b < _c.length; _b++) {
                    var filter = _c[_b];
                    if (product.tags.includes(filter.id) && filter.status === 1
                        || !product.tags.includes(filter.id) && filter.status === -1) {
                        this.globals.categories_filter[i].products.push(product);
                    }
                }
            }
        }
        console.log(this.filter_object.iterator);
        this.globals.get_ancors_position();
    };
    BodyComponent.prototype.get_shares_content = function () {
        var _this = this;
        this.http.get(this.globals.section_get_path + 'shares', { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.shares_content = data['shares_section'];
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    BodyComponent.prototype.get_document_content = function () {
        var _this = this;
        this.http.get(this.globals.section_get_path + 'document', { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.document_content = data['document_section'];
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    BodyComponent.prototype.get_how_to_content = function () {
        var _this = this;
        this.http.get(this.globals.section_get_path + 'how-to', { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.how_to_content = data['how_to_section'];
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    BodyComponent.prototype.get_contact_content = function () {
        var _this = this;
        this.http.get(this.globals.section_get_path + 'contact', { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.contact_content = data['contact_section'];
            __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* AppReady */].oneComponentReady();
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    BodyComponent.prototype.get_email_content = function () {
        var _this = this;
        this.http.get(this.globals.section_get_path + 'email', { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.email_content = data['email_section'];
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    BodyComponent.prototype.get_social_content = function () {
        var _this = this;
        this.http.get(this.globals.section_get_path + 'social', { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.social_content = data['social_section'];
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    BodyComponent.prototype.get_feedback_content = function () {
        var _this = this;
        this.http.get(this.globals.feedback_path, { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.feedback_content = data['feedbacks'];
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    BodyComponent.prototype.go_to_main = function () {
        this.globals.current_page = { 'title': 'main' };
        // this.globals.current_category = this.globals.categories[0];
    };
    BodyComponent.prototype.show_product = function (id) {
        for (var index = 0; index < this.globals.products.length; index++) {
            if (this.globals.products[index].id == id) {
                this.globals.current_product = this.globals.products[index];
                this.globals.show_product = true;
                try {
                    this.next_product_id = this.globals.products[index + 1].id;
                }
                catch (e) {
                    this.next_product_id = this.globals.products[0].id;
                }
                try {
                    this.prew_product_id = this.globals.products[index - 1].id;
                }
                catch (e) {
                    this.prew_product_id = this.globals.products[this.globals.products.length - 1].id;
                }
                break;
            }
        }
    };
    BodyComponent.prototype.close_modal = function (type) {
        switch (type) {
            case "product":
                this.globals.show_product = false;
                break;
            case "subs":
                this.globals.show_subs = false;
                break;
            case "callback":
                this.globals.show_callback = false;
                break;
            case "message":
                this.globals.show_message = false;
                break;
        }
    };
    BodyComponent.prototype.add_cart_item = function (item_id) {
        this.cart.addItem(item_id);
        this.close_modal('product');
        console.log("cart: ", item_id, this.cart.items);
    };
    BodyComponent.prototype.plus_cart_item = function (item_id) {
        this.cart.plusItem(item_id);
    };
    BodyComponent.prototype.minus_cart_item = function (item_id) {
        console.log("cart minus: ", this.cart.items[item_id].item_count);
        this.cart.minusItem(item_id);
        console.log("cart minus: ", this.cart.items);
    };
    BodyComponent.prototype.remove_cart_item = function (item_id) {
        this.cart.removeItem(item_id);
    };
    BodyComponent.prototype.clear_cart_items = function () {
        this.cart.clearCart();
    };
    BodyComponent.prototype.show_order = function () {
        var _this = this;
        this.globals.current_page = { 'title': 'Оформлення замовлення' };
        this.globals.current_category = { 'products': [] };
        setTimeout(function () {
            _this.globals.propos_element = document.getElementById('propos');
            console.log(_this.globals.propos_element);
        }, 100);
    };
    BodyComponent.prototype.create_subs = function (form_id) {
        var _this = this;
        var form = document.getElementById(form_id);
        var email = form.getElementsByTagName('input')[0].value;
        if (email) {
            this.http.post(this.globals.subs_post_path, { 'email': email }, { headers: this.headers })
                .subscribe(function (data) {
                _this.globals.display_message("Ви підписались на розсилку");
                _this.globals.show_subs = false;
            }, function (error) {
                console.log('ERROR: ', error);
            });
        }
        else {
            console.log();
        }
    };
    BodyComponent.prototype.create_feedback = function (form_id) {
        var _this = this;
        var form = document.getElementById(form_id);
        var inputs = form.getElementsByTagName('input');
        var author = inputs[0].value;
        var cell = inputs[1].value;
        var content = form.getElementsByTagName('textarea')[0].value;
        if (author && cell && content) {
            this.http.post(this.globals.feedback_post_path, { 'author': author, 'cell': cell, 'content': content }, { headers: this.headers })
                .subscribe(function (data) {
                // console.log('DATA:', data);
                _this.get_feedback_content();
                _this.globals.display_message("Ваш відгук був доданий");
            }, function (error) {
                console.log('ERROR: ', error);
            });
        }
        else {
            console.log();
        }
    };
    BodyComponent.prototype.create_callback = function (form_id) {
        var _this = this;
        var form = document.getElementById(form_id);
        var inputs = form.getElementsByTagName('input');
        var name = inputs[0].value;
        var cell = inputs[1].value;
        if (name && cell) {
            this.http.post(this.globals.callback_post_path, { 'name': name, 'cell': cell }, { headers: this.headers })
                .subscribe(function (data) {
                console.log('DATA:', data);
                _this.globals.show_callback = false;
                _this.globals.display_message("Незабаром вам зателефонують");
            }, function (error) {
                console.log('ERROR: ', error);
            });
        }
        else {
            console.log();
        }
    };
    // private hasMutual(array_1: Array<any>, array_2: Array<any>) {
    //   for (let el of array_1) {
    //     if (array_2.includes(el)) return true;
    //   }
    //   return false;
    // }
    BodyComponent.prototype.changeCurrentPropos = function (direction, category_index) {
        var product_index;
        if (direction == 'left') {
            product_index = this.globals.order_content[category_index].current_content.prew_id;
        }
        else if (direction == 'right') {
            product_index = this.globals.order_content[category_index].current_content.next_id;
        }
        var new_product = this.globals.order_content[category_index].content.content[product_index];
        var next_id = this.globals.order_content[category_index].current_content.next_id + 1;
        var prew_id = this.globals.order_content[category_index].current_content.next_id - 1;
        this.globals.order_content[category_index].current_content = {
            "id": new_product.id,
            "title": new_product.title,
            "image": new_product.image,
            "price": new_product.price,
            "next_id": next_id >= this.globals.order_content[category_index].content.content.length ? 0 : next_id,
            "prew_id": prew_id < 0 ? this.globals.order_content[category_index].content.content.length - 1 : prew_id,
        };
    };
    BodyComponent.prototype.create_order = function (form_id, type) {
        var _this = this;
        if (type === void 0) { type = 0; }
        var form = document.getElementById(form_id);
        var elements = form.getElementsByTagName('input');
        var address = elements[0].value;
        var phone = elements[1].value;
        var name = elements[2].value;
        var count = elements[3].value;
        var email = elements[4].value;
        var text = form.getElementsByTagName('textarea')[0].value;
        var products = [];
        for (var _i = 0, _a = this.cart.items; _i < _a.length; _i++) {
            var item = _a[_i];
            products.push({
                "pk": item.item_id,
                "count": item.item_count
            });
        }
        var data = {
            "address": address,
            "phone": phone,
            "name": name,
            "comment": text,
            "products": products,
            "count": count,
            "type": type,
            "email": email
        };
        this.http.post(this.globals.order_post_path, data, { headers: this.headers })
            .subscribe(function (response) {
            if (response['message'] === 'success') {
                console.log('success');
                _this.globals.display_message("Ваше замовлення прийняте");
                _this.clear_cart_items();
                _this.go_to_main();
            }
            else if (response['message'] === 'redirect') {
                // console.log('function ', this.liqPayCheckout);
                var _liqPayCheckout_1 = _this.liqPayCheckout;
                var _controller_1 = _this;
                window.LiqPayCheckoutCallback = function () {
                    _liqPayCheckout_1.init({
                        data: response['hash_data'],
                        signature: response['signature'],
                        embedTo: "#liqpay_checkout",
                        mode: "popup" // embed || popup,
                    }).on("liqpay.callback", function (data) {
                        console.log(data);
                        if (!data.code) {
                            _controller_1.globals.display_message("Ваше замовлення прийняте");
                            _controller_1.clear_cart_items();
                            _controller_1.go_to_main();
                        }
                    }).on("liqpay.ready", function (data) {
                        // ready
                    }).on("liqpay.close", function (data) {
                        __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* AppReady */].app_ready = true;
                    });
                };
                window.LiqPayCheckoutCallback();
                __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* AppReady */].app_ready = false;
                // console.log(response['data']);
                // console.log(response['signature'])
            }
        }, function (error) {
            console.log(error);
        });
    };
    return BodyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BodyComponent.prototype, "onNavScroll", null);
BodyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/body/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/body.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], BodyComponent);

var _a;
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/body.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PhoneFormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhoneFormatPipe = (function () {
    function PhoneFormatPipe() {
    }
    PhoneFormatPipe.prototype.transform = function (phone) {
        phone = phone.toString();
        return '+' + phone.substr(0, 1) + ' (' + phone.substr(2, 3) + ') ' + phone.substr(5, 2) + ' ' + phone.substr(7, 2) + ' ' + phone.substr(9, 3);
    };
    return PhoneFormatPipe;
}());
PhoneFormatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'phoneFormat' })
], PhoneFormatPipe);

var NumberFormatPipe = (function () {
    function NumberFormatPipe() {
    }
    NumberFormatPipe.prototype.transform = function (price, decimal) {
        return price.toFixed(decimal);
    };
    return NumberFormatPipe;
}());
NumberFormatPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'to_fixed' })
], NumberFormatPipe);

//# sourceMappingURL=body.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n\t<div class=\"footer-banner\" id=\"footer-banner\">\n\t\t<div class=\"footer-banner-bg\">\n\t\t\t<h1 class=\"footer-banner-title\">Підпишись на email розсилку і отримай знижку</h1>\n\t\t\t<h1 class=\"footer-banner-percent\">- 10%</h1>\n\t\t\t<button class=\"footer-banner-subscribe\" (click)=\"show_subs()\">підписатись</button>\n\t\t</div>\n\n\t</div>\n\t<div class=\"footer-description\">\n\t\t<h3>Доставка суші і піцци Львів</h3>\n\t\t<p>Всім привіт! Ми молода креативна команда поварів, які люблять свою справу, і саме цим підкоримо Вас. Ми створили доставку суші «Yakuza» за допомогою якої здивуємо найсмачнішими суші і піцою у Львові. Довгий час ми набиралися досвіду і сил, щоб передати все найкраще саме вам. Для нікого не секрет, яка історія виникнення суші , протягом століть вони вдосконалювалися і змінювалися, але їх основа заполонила серця більшості любителів цієї страви. Ми передаємо в кожен рол і піцу свою любов до їх виготовлення. Піца ,яка є однією з найбільш улюбленіших страв, як дітей так і дорослих. Тому саме доставка суші і піци «Yakuza» виготовляє піцу по спеціальній рецептурі, з найніжнішого тіста, та найкращої начинки, яка не залишить байдужого навіть найбільш вибагливого кулінарного критика. Ні для кожного не секрет , що у нашому місті є безліч різних доставок , але саме ми запропонуємо для вас унікальні десерти, які будуть чудовим доповненням до вашої трапези . Для любителів шоколаду –«Шоколате», для діток «Дитячий солодкий» рол та безліч інших прийдуться до смаку кожному. Все найкраще для Вас!</p>\n\t\t<div class=\"footer-description-stars\">\n\n\t\t\t<fieldset class=\"rating\">\n\t\t    <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4 and a half\" /><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3 and a half\" /><label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2 and a half\" /><label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1 and a half\" /><label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\n\t\t    <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\n\t\t    <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"half\" /><label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\n\t\t</fieldset>\n\n\t\t\t<!-- <fa class=\"active\" name=\"star\"></fa>\n\t\t\t<fa class=\"active\" name=\"star\"></fa>\n\t\t\t<fa class=\"active\" name=\"star\"></fa>\n\t\t\t<fa class=\"active\" name=\"star\"></fa>\n\t\t\t<fa class=\"active\" name=\"star\"></fa> -->\n\t\t</div>\n\t\t<div class=\"footer-description-r\">\n\t\t\tДоставка суші і піцци по Львову <br>\n\t\t\tРейтинг 4.4 із 5 Голосів: 513\n\t\t</div>\n\t</div>\n\n\t<div class=\"footer-bottom row\">\n\t\t<div class=\"col-md-4 col-lg-4 footer-bottom-left\">\n\t\t\t<h4>Піца і суші у Львові</h4>\n\t\t\t<h1>Yakuza</h1>\n\t\t</div>\n\t\t<div class=\"col-md-4 col-lg-4 footer-bottom-center\">\n\t\t\t<p>приймаємо до оплати</p>\n\t\t\t<div class=\"footer-bottom-cards\">\n\t\t\t\t<img src=\"{{ images_path.visa }}\">\n\t\t\t\t<img src=\"{{ images_path.visae }}\">\n\t\t\t\t<img src=\"{{ images_path.mc }}\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4 col-lg-4 footer-bottom-right\">\n\t\t\t<p>Ми в соціальних мережах</p>\n\t\t\t<div class=\"footer-bottom-social\">\n\t\t\t\t<div class=\"footer-bottom-social-wrapper\" *ngFor=\"let social of globals.social_content\">\n\t\t\t\t\t<a href=\"{{ social.link }}\"><fa class=\"{{ social.icon }}\" name=\"{{ social.icon }}\"></fa></a>\n\t\t\t\t</div>\n\t\t\t\t<!-- <fa class=\"facebook\" name=\"facebook\"></fa>\n\t\t\t\t<fa class=\"vk\" name=\"vk\"></fa>\n\t\t\t\t<fa class=\"twitter\" name=\"twitter\"></fa>\n\t\t\t\t<fa class=\"google-plus\" name=\"google-plus\"></fa> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"footer-bottom-bg\"></div> -->\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  color: #fff;\n  background-color: #0e0e0c;\n  z-index: 1; }\n  .footer-banner {\n    position: relative;\n    height: 351px;\n    padding-top: 53px;\n    text-align: center;\n    background-image: url(\"/assets/img/bottom_image.png\"); }\n    .footer-banner-bg {\n      top: 0;\n      left: -5%;\n      position: absolute;\n      width: 100%;\n      left: 0;\n      height: 351px;\n      background-color: rgba(82, 82, 82, 0.65); }\n    .footer-banner-title {\n      margin-top: 70px;\n      font-family: 'Times new roman';\n      font-size: 39px; }\n    .footer-banner-percent {\n      margin-top: 23px;\n      font-size: 49px;\n      font-family: 'Times new roman'; }\n    .footer-banner-subscribe {\n      padding: 13px 50px;\n      margin-top: 24px;\n      color: #fff;\n      background-color: #c00;\n      font-weight: bold;\n      font-size: 17px;\n      border: 1px solid #fff; }\n  .footer-description {\n    margin-bottom: 78px;\n    padding: 0 15px; }\n    .footer-description h3 {\n      padding-top: 25px;\n      margin-bottom: 25px; }\n    .footer-description p {\n      font-size: 14px; }\n    .footer-description-stars {\n      margin-top: 46px;\n      font-size: 26px; }\n    .footer-description-r {\n      font-size: 13px;\n      padding-top: 10px; }\n  .footer-bottom {\n    position: relative;\n    background-color: #040404; }\n    .footer-bottom-left {\n      text-align: center; }\n      .footer-bottom-left h4 {\n        font-size: 15px; }\n      .footer-bottom-left h1 {\n        font-size: 35px;\n        text-transform: uppercase; }\n    .footer-bottom-center {\n      padding-top: 6px;\n      text-align: center; }\n      .footer-bottom-center p {\n        margin-bottom: 23px;\n        font-size: 15px; }\n      .footer-bottom-center img {\n        margin: 0 4.5px; }\n    .footer-bottom-right {\n      padding-top: 9px;\n      text-align: center; }\n      .footer-bottom-right p {\n        margin-bottom: 15px;\n        font-size: 15px; }\n    .footer-bottom-social-wrapper {\n      display: inline-block; }\n    .footer-bottom-social fa {\n      margin: 0 5px;\n      font-size: 35px; }\n    .footer-bottom-social .facebook {\n      color: #3b5998; }\n    .footer-bottom-social .vk {\n      color: #4c75a3; }\n    .footer-bottom-social .twitter {\n      color: #00aced; }\n    .footer-bottom-social .google-plus {\n      color: #dd4b39; }\n    .footer-bottom-bg {\n      position: absolute;\n      left: -100%;\n      width: 300%;\n      height: 100%;\n      background-color: #1a1b13;\n      z-index: -1; }\n\n/* Style for vote stars */\nfieldset, label {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  margin: 20px; }\n\nh1 {\n  font-size: 1.5em;\n  margin: 10px; }\n\n/****** Style Star Rating Widget *****/\n.rating {\n  border: none;\n  float: left; }\n\n.rating > input {\n  display: none; }\n\n.rating > label:before {\n  margin: 5px;\n  font-size: 1.25em;\n  font-family: FontAwesome;\n  display: inline-block;\n  content: \"\\F005\"; }\n\n.rating > .half:before {\n  content: \"\\F089\";\n  position: absolute; }\n\n.rating > label {\n  color: #ddd;\n  float: right; }\n\n/***** CSS Magic to Highlight Stars on Hover *****/\n.rating > input:checked ~ label,\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: #FFD700; }\n\n/* hover previous stars in list */\n.rating > input:checked + label:hover,\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label,\n.rating > input:checked ~ label:hover ~ label {\n  color: #FFED85; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent() {
        this.images_path = {
            'visa': 'assets/img/visa.jpg',
            'visae': 'assets/img/visae.jpg',
            'mc': 'assets/img/mc.jpg'
        };
        this.globals = __WEBPACK_IMPORTED_MODULE_1__app_globals__["d" /* Globals */];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.show_subs = function () {
        this.globals.show_subs = true;
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t<div class=\"header-content row\">\n\t\t<div class=\"header-content-logo col-lg-3 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<a><img (click)=\"go_to_main()\" [src]=\"logo_path\"></a>\n\t\t</div>\n\t\t<div class=\"header-data col-lg-7 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<h1>Доставка суші та піци львів</h1>\n\t\t\t<div class=\"header-data-phones\">\n\t\t\t \t<ul>\n\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t<fa name=\"star\"></fa>\n\t\t\t\t\t\t<span>+3&#8199;8&#8199;(099)&#8199;99&#8199;99&#8199;999</span>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<fa name=\"star\"></fa>\n\t\t\t\t\t\t<span>+3&#8199;8&#8199;(099)&#8199;99&#8199;99&#8199;999</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<fa name=\"star\"></fa>\n\t\t\t\t\t\t<span>+3&#8199;8&#8199;(099)&#8199;99&#8199;99&#8199;999</span>\n\t\t\t\t\t</li> -->\n\n\t\t\t\t\t<!-- <li *ngFor=\"let phone of globals.contact_content\">\n\t\t\t\t\t\t<img src=\"/assets/img/{{ phone.icon }}.png\"/>\n\t\t\t\t\t\t<span>{{ phone.phone | phoneFormat }}</span>\n\t\t\t\t\t</li> -->\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/lifecell.png\"/>\n\t\t\t\t\t\t<span>+38 (073) 80 05 009</span>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/kyivstar.png\"/>\n\t\t\t\t\t\t<span>+38 (098) 26 37 505</span>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/vodafone.png\"/>\n\t\t\t\t\t\t<span>+38 (050) 53 42 556</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t\n\n\t\t\t\t</ul>\n\t\t\t\t<a class=\"header-data-callback\" (click)=\"show_callback()\">Замовити дзвінок</a>\n\t\t\t</div>\n\t\t\t<div class=\"header-data-info\">\n\t\t\t\t<span>Працюємо для вас щодня</span><br>\n\t\t\t\t<span>з 11:00 до 23:00</span><br>\n\t\t\t\t<span class=\"header-data-free\">Безкоштовна доставка</span><br>\n\t\t\t\t<span class=\"header-data-info-lastspan\">Мінімальне замовлення 199грн</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"header-content-rightnav col-lg-2 col-md-12 col-sm-12 col-xs-12\">\n\t\t\t<ul>\n\t\t\t\t<li *ngFor=\"let page of right_nav_list\">\n\t\t\t\t\t<!-- <embed *ngIf=\"globals.current_page.id == page.id\"  src=\"/assets/svg/active.svg\" class=\"active-right-menu\"> -->\n\t\t\t\t\t<!-- <img *ngIf=\"globals.current_page.id == page.id\" src=\"/assets/img/active.png\" class=\"active-right-menu\"> -->\n\t\t\t\t\t<span id=\"page-{{ page.id }}\" (click)=\"change_page(page.id)\">{{ page.title }}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class=\"header-bottomnav\" id=\"header-bottomnav\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"let category of bottom_nav_list\">\n\t\t\t\t<a href=\"#{{ category.slug }}\">\n\t\t\t\t<span id=\"category-{{ category.slug }}\" (click)=\"change_categories(category.id, $event)\">\n\t\t\t\t\t{{ category.name }}\n\t\t\t\t</span></a>\n\t\t\t\t<span *ngIf=\"globals.current_category.slug == category.slug\" class=\"active-bottom-menu\"></span>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n\t<nav class=\"header-bottomnav header-bottomnav-top\" [ngClass]=\"{'open' : show_nav_top}\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"let category of bottom_nav_list\">\n\t\t\t\t<a class=\"target-buttons\" href=\"#{{ category.id }}\"><span id=\"category-{{ category.slug }}\" (click)=\"change_categories(category.id, $event)\">\n\t\t\t\t\t{{ category.name }}\n\t\t\t\t</span></a>\n\t\t\t\t<span *ngIf=\"globals.current_category.id == category.id\" class=\"active-bottom-menu\"></span>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  color: #fff; }\n  .header-content {\n    padding: 6px 0 0 0; }\n    .header-content-logo {\n      display: inline-block;\n      text-align: center; }\n      .header-content-logo img {\n        width: 340px;\n        margin-top: 29px;\n        cursor: pointer; }\n    .header-content-rightnav {\n      display: inline-block; }\n      .header-content-rightnav ul {\n        text-align: center;\n        list-style: none;\n        margin-top: 35px;\n        padding-left: 0; }\n        .header-content-rightnav ul li {\n          position: relative;\n          height: 30px;\n          padding-left: 37px;\n          margin-bottom: 4px;\n          cursor: pointer; }\n  .header-data {\n    display: inline-block;\n    text-align: center;\n    padding: 0 0 0 17px; }\n    .header-data h1 {\n      font-family: \"Times New Roman\";\n      text-transform: uppercase;\n      font-size: 26.8px;\n      padding-left: 59px;\n      text-align: center; }\n    .header-data-phones {\n      display: inline-block;\n      float: left; }\n      .header-data-phones ul {\n        padding-top: 3px;\n        padding-left: 142px;\n        list-style: none;\n        font-size: 20px;\n        font-family: 'Open Sans', sans-serif;\n        text-align: left;\n        margin-bottom: 8px; }\n        .header-data-phones ul li {\n          margin-bottom: 6px; }\n          .header-data-phones ul li img {\n            width: 28px;\n            display: inline;\n            vertical-align: top; }\n          .header-data-phones ul li span {\n            vertical-align: top;\n            margin-left: 8px; }\n      .header-data-phones a {\n        display: block;\n        padding-left: 173px;\n        text-align: center;\n        color: red;\n        font-size: 18px;\n        text-decoration: underline;\n        cursor: pointer; }\n    .header-data-free {\n      color: green; }\n    .header-data-info {\n      display: inline-block;\n      max-width: 290px;\n      padding-left: 70px;\n      padding-top: 9px;\n      font-family: \"Open Sans\"; }\n      .header-data-info-lastspan {\n        margin-top: 18px;\n        display: inline-block; }\n  .header-bottomnav {\n    border-bottom: 1px solid #292929;\n    border-top: 1px solid #444; }\n    .header-bottomnav a {\n      text-decoration: none;\n      color: #fff; }\n      .header-bottomnav a:hover {\n        color: #fff; }\n    .header-bottomnav ul {\n      padding: 4px 16px 0 16px;\n      list-style: none;\n      text-align: center;\n      margin-bottom: 4px; }\n      .header-bottomnav ul li {\n        position: relative;\n        display: inline;\n        font-size: 19px;\n        height: 37px;\n        /* width: 110px; */\n        /* padding-left: 10px; */\n        /* padding-top: 2px; */\n        text-align: center;\n        cursor: pointer;\n        line-height: 35px;\n        padding: 7px 25px; }\n    .header-bottomnav-top {\n      position: fixed;\n      top: -43px;\n      left: 0;\n      z-index: 1;\n      background: #0e0e0c;\n      width: 100%;\n      transition: top .3s; }\n    .header-bottomnav-top.open {\n      top: 0; }\n\n@media (max-width: 970px) {\n  .header-bottomnav ul li {\n    font-size: 12px;\n    padding: 6px 12px; }\n  .header-content-logo img {\n    width: 260px; } }\n\n@media (max-width: 750px) {\n  .header-bottomnav ul li {\n    font-size: 9px;\n    padding: 6px 3px; }\n  .header-content-logo img {\n    width: 200px; } }\n\n.active-bottom-menu {\n  background-color: #fe683a;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  z-index: -1; }\n\n.active-right-menu {\n  position: absolute;\n  left: 18px;\n  z-index: -1;\n  top: -4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_globals__ = __webpack_require__("../../../../../src/app/app.globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.logo_path = '/assets/logo/Yakudza.svg';
        this.globals = __WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // InlineSVGModule.forRoot({ baseUrl: this.globals.local_domain });
        this.get_categories(true);
        this.get_menu(true);
        this.bottom_nav_elements = document.getElementById('header-bottomnav').getElementsByTagName('ul')[0].getElementsByTagName('li');
        this.bottom_nav_poition = document.getElementById('header-bottomnav').offsetTop;
        this.bottom_nav = document.getElementById('header-bottomnav');
    };
    HeaderComponent.prototype.onNavScroll = function ($event) {
        // console.log(this.bottom_nav.offsetTop);
        // console.log(window.pageYOffset, this.bottom_nav_poition);
        var scrollDistance = __WEBPACK_IMPORTED_MODULE_4_jquery__(window).scrollTop();
        if (scrollDistance >= this.bottom_nav.offsetTop + 50) {
            this.show_nav_top = true;
        }
        else {
            this.show_nav_top = false;
        }
        // let _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__('.product-title').each(function (i) {
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__(this).position().top <= scrollDistance) {
                // $('.navigation a.active').removeClass('active');
                // $('.navigation a').eq(i).addClass('active');
                __WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */].current_category['id'] = __WEBPACK_IMPORTED_MODULE_4_jquery__(this)[0].id.substring(8);
                // console.log(Globals.current_category['id']);
            }
        });
        // // console.log(this.bottom_nav_elements);
        // for (let menu_element of this.bottom_nav_elements) {
        //   // console.log(menu_element.offsetTop);
        //   let ancor = menu_element.getElementsByTagName('a')[0];
        //   let link = ancor.getAttribute('href').substring(1);
        //   let refElement = document.getElementById(link);
        //   // console.log(refElement.offsetTop, window.pageYOffset);
        //   // console.log(refElement.getAttribute('href').substring(1));
        //   if (refElement.offsetTop >= window.pageYOffset + 20 && refElement.offsetTop <= window.pageYOffset + 50) {
        //     this.globals.current_category['slug'] = link;
        //     console.log(window.pageYOffset, refElement.offsetTop);
        //   }
        // }
        // this.globals.current_category['id'];
    };
    HeaderComponent.prototype.sanitizeIcons = function (name) {
        // if (!(name)) return
        // this.http.get("/assets/svg/"+name+".svg")
        //      .subscribe((source:any) => {
        //        return source;
        //      });
        // return this.sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/'+name+'.svg');
    };
    HeaderComponent.prototype.get_order_content = function () {
        var _this = this;
        this.http.get(this.globals.section_get_path + 'order', { headers: this.headers })
            .subscribe(function (data) {
            _this.globals.order_content = [];
            for (var _i = 0, _a = _this.globals.categories; _i < _a.length; _i++) {
                var category = _a[_i];
                for (var _b = 0, _c = data['order_section']; _b < _c.length; _b++) {
                    var order_content = _c[_b];
                    if (category.id == order_content.related_categories[0]) {
                        if (category.products[0]) {
                            _this.globals.order_content.push({
                                "content": {
                                    "id": category.id,
                                    "title": order_content.title,
                                    "content": category.products,
                                },
                                "current_content": {
                                    'id': category.products[0].id,
                                    'title': category.products[0].title,
                                    'image': category.products[0].image,
                                    'price': category.products[0].price,
                                    'next_id': category.products.length > 0 ? 1 : 0,
                                    'prew_id': category.products.length - 1,
                                }
                            });
                        }
                    }
                }
            }
            // console.log(this.globals.order_content)
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    HeaderComponent.prototype.get_categories = function (first_time) {
        var _this = this;
        if (first_time === void 0) { first_time = false; }
        this.http.get(this.globals.categories_get_path, { headers: this.headers })
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* AppReady */].oneComponentReady();
            _this.globals.categories = [];
            _this.globals.categories_filter = [];
            _this.globals.products = [];
            var tmp_products = {};
            // this.bottom_nav_list = this.globals.categories;
            _this.bottom_nav_list = [];
            for (var _i = 0, _a = data['categories']; _i < _a.length; _i++) {
                var category = _a[_i];
                _this.globals.categories.push(category);
                _this.globals.categories_filter.push(category);
                if (category.is_show == true) {
                    _this.bottom_nav_list.push(category);
                }
                for (var _b = 0, _c = category.products; _b < _c.length; _b++) {
                    var product = _c[_b];
                    tmp_products[product.id] = product;
                    var item_count = localStorage.getItem(product.id);
                    if (!item_count === null) {
                        __WEBPACK_IMPORTED_MODULE_2__app_globals__["b" /* Cart */].addItemSimple(product.id, product.title, product.price, item_count, product.image, product.weight, product.pieces);
                    }
                }
            }
            _this.get_order_content();
            for (var key in tmp_products) {
                _this.globals.products.push(tmp_products[key]);
            }
            // if (first_time) this.change_categories(this.globals.categories[0].id);
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    HeaderComponent.prototype.change_categories = function (id, event) {
        this.globals.current_page = { 'title': 'main' };
        event.preventDefault();
        var target = __WEBPACK_IMPORTED_MODULE_4_jquery__('#section-' + id);
        console.log(__WEBPACK_IMPORTED_MODULE_4_jquery__('#section-' + id));
        __WEBPACK_IMPORTED_MODULE_4_jquery__('html, body').stop().animate({
            scrollTop: __WEBPACK_IMPORTED_MODULE_4_jquery__(target).offset().top
        }, 600, function () {
            // location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });
        return false;
        // this.globals.current_category['id'] = id;
    };
    HeaderComponent.prototype.get_menu = function (first_time) {
        var _this = this;
        if (first_time === void 0) { first_time = false; }
        this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */].menu_get_path, { headers: this.headers })
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */].menu = data['menu'];
            _this.right_nav_list = __WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */].menu;
            __WEBPACK_IMPORTED_MODULE_2__app_globals__["a" /* AppReady */].oneComponentReady();
            if (first_time)
                _this.globals.current_page = { 'title': 'main' };
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    HeaderComponent.prototype.change_page = function (id) {
        // Globals.current_page;
        for (var _i = 0, _a = __WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */].menu; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page.id == id) {
                __WEBPACK_IMPORTED_MODULE_2__app_globals__["d" /* Globals */].current_page = page;
                this.globals.current_category = { 'products': [] };
                break;
            }
        }
    };
    HeaderComponent.prototype.show_callback = function () {
        this.globals.show_callback = true;
    };
    HeaderComponent.prototype.go_to_main = function () {
        this.globals.current_page = { 'title': 'main' };
        // this.globals.current_category = this.globals.categories[0];
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onNavScroll", null);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map