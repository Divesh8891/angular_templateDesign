"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var draggable_directive_1 = require("../src/service/ng2draggable/draggable.directive");
var index_1 = require("../src/service/angular2-image-upload/index");
var material_1 = require("@angular/material");
var angular2_color_picker_1 = require("angular2-color-picker");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var text_service_1 = require("../src/service/text.service");
var app_1 = require("../src/views/app");
var header_1 = require("../src/views/header/header");
var leftPanel_1 = require("../src/views/leftPanel/leftPanel");
var MiddlePanel_1 = require("../src/views/MiddlePanel/MiddlePanel");
var rightPanel_1 = require("../src/views/rightPanel/rightPanel");
var text_1 = require("../src/views/leftPanel/textModule/text");
var image_1 = require("../src/views/leftPanel/imageModule/image");
var template_1 = require("../src/views/middlePanel/templateModule/template");
var designContainer_1 = require("../src/views/middlePanel/designContainer/designContainer");
var textArea_1 = require("../src/component/textArea/textArea");
var selectBox_1 = require("../src/component/selectBox/selectBox");
var button_1 = require("../src/component/button/button");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, index_1.ImageUploadModule.forRoot(), material_1.MdSliderModule, angular2_color_picker_1.ColorPickerModule],
            declarations: [app_1.AppComponent, header_1.headerComponent, leftPanel_1.leftPanelComponent, MiddlePanel_1.MiddlePanelComponent, rightPanel_1.rightPanelComponent, text_1.textModuleComponent, image_1.imageModuleComponent, template_1.templateModuleComponent, designContainer_1.designContainer, textArea_1.textAreaComponent, selectBox_1.selectBoxComponent, button_1.buttonComponent, draggable_directive_1.Draggable],
            bootstrap: [app_1.AppComponent],
            providers: [text_service_1.TextService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map