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
        this.headerHeading = "Template Design";
    }
    headerComponent = __decorate([
        core_1.Component({
            selector: 'custom-header',
            template: " \n              <header class=\"col-xs-12\">\n                 <h4 class=\"heading m-0 ptb-20 text-white text-center\">{{headerHeading}}</h4>\n              </header>\n    "
        })
    ], headerComponent);
    return headerComponent;
}());
exports.headerComponent = headerComponent;
//# sourceMappingURL=header.js.map