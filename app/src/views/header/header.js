"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var headerComponent = (function () {
    function headerComponent() {
        this.headerHeading = "Customize Design";
        this.headerHeadingClassName = "heading text-center";
    }
    return headerComponent;
}());
headerComponent = __decorate([
    core_1.Component({
        selector: 'custom-header',
        template: " \n                <div class=\"header\">\n                <a href=\"/\">\n                    <img src=\"app/assets/images/logo.png\" />\n                </a>\n                <ul class=\"nav\">\n                    <li class=\"\">\n                        <a  [routerLink]=\"['/home']\">Choose Product</a>\n                    </li>\n                    <li class=\"\">\n                        <a [routerLink]=\"['/editor']\">Create Custom Design</a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"javascript:void(0)\" class=\"login-link\">Login</a>\n                        <div class=\"user-info-wrapper\">\n                            <span class=\"user-name\">Divesh</span>\n                            <a href=\"javascript:void(0)\" class=\"logout-link\">Logout</a>\n                        </div>\n                    </li>\n                </ul>\n\n            </div>\n    "
    })
], headerComponent);
exports.headerComponent = headerComponent;
//# sourceMappingURL=header.js.map