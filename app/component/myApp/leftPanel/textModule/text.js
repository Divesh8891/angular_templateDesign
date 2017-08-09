"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var textModuleComponent = (function () {
    function textModuleComponent() {
        this.textPanelTitle = "Text";
    }
    textModuleComponent = __decorate([
        core_1.Component({
            selector: 'text-module',
            template: " \n                  <section class=\"TextModule col-xs-12 p-0 module\">\n                        <h2 id=\"textValhidden\">fsdfs</h2>\n                        <h5 class=\"option-heading col-xs-12 m-0 p-0\">{{textPanelTitle}}</h5>\n                        <div class=\"seperator\"></div>\n                        <my-textArea></my-textArea>\n                        <div class=\"seperator\"></div>\n                        <select-box [parentClass]=\"'font-sec col-xs-6'\" [defaultOptionValue]=\"'Font-size'\" ></select-box>\n                        <select-box [parentClass]=\"'line-height-sec col-xs-6'\" [defaultOptionValue]=\"'line-height'\"></select-box>\n                        <select-box [parentClass]=\"'font-famliy-sec col-xs-6'\" [defaultOptionValue]=\"'Font-famliy'\"></select-box>\n                        <select-box [parentClass]=\"'stroke-width-sec col-xs-6'\" [defaultOptionValue]=\"'stroke-width'\"></select-box>\n                        <div class=\"seperator\"></div>\n                        <buttonAsLink [parentClass]=\"'color-sec col-xs-6'\" [applyClass]=\"'color btn btn-lrg'\" [btnText]=\"'Color'\"></buttonAsLink>\n                        <buttonAsLink [parentClass]=\"'stroke-color-sec col-xs-6'\" [applyClass]=\"'stroke-color btn btn-lrg'\" [btnText]=\"'Stroke color'\"></buttonAsLink>\n                        <buttonAsLink [parentClass]=\"'back-color-sec col-xs-6'\" [applyClass]=\"'back-color btn btn-lrg'\" [btnText]=\"'Background color'\"></buttonAsLink>\n                        <select-box [parentClass]=\"'opacity-width-sec col-xs-5'\" [defaultOptionValue]=\"'Opacity'\"></select-box>\n                        <div class=\"seperator\"></div>\n                        <buttonAsLink [parentClass]=\"'b align-opt col-xs-4'\" [applyClass]=\"'bold btn btn-lrg'\" [btnText]=\"'B'\"></buttonAsLink>\n                        <buttonAsLink [parentClass]=\"'i align-opt col-xs-4'\" [applyClass]=\"'italic btn btn-lrg'\" [btnText]=\"'I'\"></buttonAsLink>\n                        <buttonAsLink [parentClass]=\"'u align-opt col-xs-4'\" [applyClass]=\"'underline btn btn-lrg'\" [btnText]=\"'U'\"></buttonAsLink>\n                    </section>\n    "
        })
    ], textModuleComponent);
    return textModuleComponent;
}());
exports.textModuleComponent = textModuleComponent;
//# sourceMappingURL=text.js.map