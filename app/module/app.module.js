"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_1 = require("../src/module/app");
var header_1 = require("../src/module/header/header");
var leftPanel_1 = require("../src/module/leftPanel/leftPanel");
var rightPanel_1 = require("../src/module/rightPanel/rightPanel");
var text_1 = require("../src/module/leftPanel/textModule/text");
var image_1 = require("../src/module/leftPanel/imageModule/image");
var template_1 = require("../src/module/leftPanel/templateModule/template");
var alignment_1 = require("../src/module/leftPanel/alignmentModule/alignment");
var designContainer_1 = require("../src/module/rightPanel/designContainer/designContainer");
var textArea_1 = require("../src/component/textArea/textArea");
var selectBox_1 = require("../src/component/selectBox/selectBox");
var button_1 = require("../src/component/button/button");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_1.AppComponent, header_1.headerComponent, leftPanel_1.leftPanelComponent, rightPanel_1.rightPanelComponent, text_1.textModuleComponent, image_1.imageModuleComponent, template_1.templateModuleComponent, alignment_1.alignmentModuleComponent, designContainer_1.designContainer, textArea_1.textAreaComponent, selectBox_1.selectBoxComponent, button_1.buttonComponent],
            bootstrap: [app_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map