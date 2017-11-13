"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.currentId = "";
        this.productColor = "";
    }
    AppComponent.prototype.showInfo = function (obj) {
        this.productHoverOption.nativeElement.className = "product-hover-option-show";
        if (this.productHoverOption.nativeElement.className == 'product-hover-option-show' && obj.type == "mouseenter") {
            this.productHoverOption.nativeElement.style.top = obj.target.offsetTop + "px";
            this.productHoverOption.nativeElement.style.left = obj.target.offsetLeft + "px";
            this.currentId = obj.target.id;
            console.log(obj.relatedTarget.dataset.color);
            if (obj.relatedTarget != null) {
                this.productColor = obj.relatedTarget.dataset.color == undefined ? [] : obj.relatedTarget.dataset.color.split(",");
            }
        }
        else {
            this.productHoverOption.nativeElement.className = "product-hover-option";
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('../app/assets/product.json').subscribe(function (res) {
            _this.productObj = res.json();
        });
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('productHoverOption'),
    __metadata("design:type", Object)
], AppComponent.prototype, "productHoverOption", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " \n\n    <div class=\"wrapper\">\n        <custom-header></custom-header>\n        <!--div class=\"wrapper-inner prod-detail\">\n            <div class=\"producy-wrapper\" *ngFor=\"let pObj of productObj\">\n                <div class=\"prod-title\">Customize {{pObj.type}}</div>\n                <div class=\"product-image\" *ngFor=\"let pImageObj of pObj?.productArray\">\n                    <img id=\"{{pImageObj.id}}\" src=\"{{pImageObj.folderName}}{{pImageObj.src}}\" [attr.data-color]=\"pImageObj.color\" class=\"prod-cup\" (mouseenter)='showInfo($event)' (mouseout)='showInfo($event)'/>\n                    <div class=\"product-desc\">\n                        <div class=\"color-item-info\">\n                            <span class=\"item-color\">7 Colors</span>\n                            <span class=\"item-available\">Available Items {{pImageObj.quantity}}</span>\n                        </div>\n                        <p class=\"product-name\">{{pImageObj.name}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"product-hover-option\" #productHoverOption (mouseenter)='showInfo($event)' (mouseleave)='showInfo($event)'>\n            <div class=\"quantity-wrapper\">\n                <label>Quantity</label>\n                <input type=\"text\" class=\"quan\" [(ngModel)]=\"quanValue\">\n            </div>\n            <label class=\"chosse-color\">Choose Color</label>\n            <ul class=\"custom-color-picker\">\n                <li *ngFor=\"let p_color of productColor\"><span [style.backgroundColor]=p_color title={{p_color}}></span>\n            </ul>\n            <button class=\"customize-btn btn\" (click)=gotoTool($event)>Start Customize</button>\n        </div-->\n            <div class=\"wrapper-inner\">\n            <section class=\"left-module\" leftModule></section>\n            <div class=\"middle-module\" middleModule></div>\n            <section class=\"right-module  bg-grey\" rightModule></section>\n        </div>\n     \n    </div>\n\n    "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map