"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alignmentModuleComponent = (function () {
    function alignmentModuleComponent() {
        this.imagePanelTitle = "Text";
    }
    alignmentModuleComponent = __decorate([
        core_1.Component({
            selector: 'alignment-module',
            template: " \n                <section class=\"AlignmentModule col-xs-12 p-0 module\">\n                        <h5 class=\"option-heading col-xs-12 m-0 p-0\">Alignment</h5>\n                        <div class=\"seperator\"></div>\n                        <div class=\"l align-opt col-xs-4 \"><a href=\"javascript:commonoption.alignLeft();\" class=\"leftA btn btn-lrg\">L</a></div>\n                        <div class=\"m align-opt col-xs-4 \"><a href=\"javascript:commonoption.alignMid();\" class=\"mid btn btn-lrg\">M</a></div>\n                        <div class=\"r align-opt col-xs-4 \"><a href=\"javascript:commonoption.alignRight();\" class=\"right btn btn-lrg\">R</a></div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"col-xs-12\">\n                            <label>L : </label><input type=\"text\" class=\"leftP\"><label>T : </label><input type=\"text\" class=\"topP\">\n                            <a href=\"javascript:commonoption.setP();\" class=\"goSize btn\">Go</a>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"col-xs-12\">\n                            <label>w : </label><input type=\"text\" class=\"widthA\">\n                            <a href=\"javascript:commonoption.setDimension();\" class=\"goSize btn\">Go</a>\n                        </div>\n                    </section>\n    "
        })
    ], alignmentModuleComponent);
    return alignmentModuleComponent;
}());
exports.alignmentModuleComponent = alignmentModuleComponent;
//# sourceMappingURL=alignment.js.map