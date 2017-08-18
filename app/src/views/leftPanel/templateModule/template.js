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
var text_service_1 = require("../../../service/text.service");
var templateModuleComponent = (function () {
    function templateModuleComponent(_textService) {
        this._textService = _textService;
        this.tempatePanelTitle = "Text";
    }
    templateModuleComponent.prototype.setTemplateSize = function (event) {
        this.getDesignContainerRef();
        if (event.target.innerHTML === "1:1") {
            this.designcontainerRef.nativeElement.style['width'] = '400px';
            this.designcontainerRef.nativeElement.style['height'] = '400px';
        }
        if (event.target.innerHTML === "5:4") {
            this.designcontainerRef.nativeElement.style['width'] = '500px';
            this.designcontainerRef.nativeElement.style['height'] = '400px';
        }
        if (event.target.innerHTML === "4:3") {
            this.designcontainerRef.nativeElement.style['width'] = '400px';
            this.designcontainerRef.nativeElement.style['height'] = '300px';
        }
        if (event.target.innerHTML === "3:2") {
            this.designcontainerRef.nativeElement.style['width'] = '300px';
            this.designcontainerRef.nativeElement.style['height'] = '200px';
        }
        if (event.target.innerHTML === "8:5") {
            this.designcontainerRef.nativeElement.style['width'] = '800px';
            this.designcontainerRef.nativeElement.style['height'] = '500px';
        }
        if (event.target.innerHTML === "16:9") {
            this.designcontainerRef.nativeElement.style['width'] = '800px';
            this.designcontainerRef.nativeElement.style['height'] = '450px';
        }
        if (event.target.innerHTML === "FB") {
            this.designcontainerRef.nativeElement.style['width'] = '768px';
            this.designcontainerRef.nativeElement.style['height'] = '768px';
        }
    };
    templateModuleComponent.prototype.setTemplateBg = function (event) {
        this.getDesignContainerRef();
        this.designcontainerRef.nativeElement.firstElementChild.attributes['data-bg'].value = event.target.innerHTML.toLowerCase();
    };
    templateModuleComponent.prototype.getDesignContainerRef = function () {
        this.designcontainerRef = this._textService.designcontainerRef;
    };
    templateModuleComponent.prototype.setTemplateBgcolor = function () {
        this.colorBoxRef = this._textService.colorBoxRef;
        this.colorBoxRef.nativeElement.dataset['call'] = 'backgroundColor';
        this.colorBoxRef.nativeElement.dataset['module'] = 'template';
        this.colorBoxRef.nativeElement.style.display = 'block';
    };
    templateModuleComponent.prototype.updateOpacity = function (event) {
        this.designcontainerRef.nativeElement.style['opacity'] = event.target.value;
    };
    templateModuleComponent.prototype.setTemplateDimension = function (event) {
        this.getDesignContainerRef();
        this.designcontainerRef.nativeElement.style['width'] = this.tempWidth + 'px';
        this.designcontainerRef.nativeElement.style['height'] = this.tempHeight + 'px';
    };
    templateModuleComponent = __decorate([
        core_1.Component({
            selector: 'template-module',
            template: " \n                 <section class=\"TemplateModule col-xs-12 p-0 module\">\n                        <h5 class=\"option-heading col-xs-12 m-0 p-0\">Template Setting</h5>\n                        <div class=\"seperator\"></div>\n\n                        <div class=\"col-xs-12 mt-10\">\n                            <span>Size</span>\n                            <input type=\"text\" class=\"width\" [(ngModel)]=\"tempWidth\"><input type=\"text\" class=\"height\" [(ngModel)]=\"tempHeight\">\n                            <linkAsButton [parentClass]=\"'col-xs-3 pull-right m-0'\" [applyClass]=\"'goSize btn'\" [btnText]=\"'Go'\" (click)=setTemplateDimension($event)></linkAsButton>\n\n                        </div>\n                        <linkAsButton [parentClass]=\"'quote_image_share col-xs-3'\" [applyClass]=\"'btn update_canvas_size col-xs-12'\" [btnText]=\"'1:1'\" (click)=setTemplateSize($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'quote_image_share col-xs-3'\" [applyClass]=\"'btn update_canvas_size col-xs-12'\" [btnText]=\"'5:4'\" (click)=setTemplateSize($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'quote_image_share col-xs-3'\" [applyClass]=\"'btn update_canvas_size col-xs-12'\" [btnText]=\"'4:3'\" (click)=setTemplateSize($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'quote_image_share col-xs-3'\" [applyClass]=\"'btn update_canvas_size col-xs-12'\" [btnText]=\"'3:2'\" (click)=setTemplateSize($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'quote_image_share col-xs-3'\" [applyClass]=\"'btn update_canvas_size col-xs-12'\" [btnText]=\"'8:5'\" (click)=setTemplateSize($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'quote_image_share col-xs-3'\" [applyClass]=\"'btn update_canvas_size col-xs-12'\" [btnText]=\"'16:9'\" (click)=setTemplateSize($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'quote_image_share col-xs-3'\" [applyClass]=\"'btn update_canvas_size col-xs-12'\" [btnText]=\"'FB'\" (click)=setTemplateSize($event)></linkAsButton>\n\n                        <div class=\"seperator\"></div>\n\n                        <div class=\"col-xs-12\">\n                         <linkAsButton [parentClass]=\"'col-xs-3'\" [applyClass]=\"'blankT btn'\" [btnText]=\"'Blank'\" (click)=setTemplateBg($event)></linkAsButton>\n                         <linkAsButton [parentClass]=\"'col-xs-4 ml5'\" [applyClass]=\"'CommonT btn'\" [btnText]=\"'Common'\" (click)=setTemplateBg($event)></linkAsButton>\n                         <linkAsButton [parentClass]=\"'col-xs-4 ml5'\" [applyClass]=\"'FunT btn'\" [btnText]=\"'Fun'\" (click)=setTemplateBg($event)></linkAsButton>\n                        </div>\n                        <div class=\"seperator\"></div>\n                         <linkAsButton [parentClass]=\"'back-color-sec col-xs-7'\" [applyClass]=\"'back-color btn'\" [btnText]=\"'Background-color'\" (click)=setTemplateBgcolor($event)></linkAsButton>\n                        <select-box [parentClass]=\"'opacity-sec col-xs-5'\" [defaultOptionValue]=\"'Opacity'\" (change)=\"updateOpacity($event)\"></select-box>\n                    </section>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], templateModuleComponent);
    return templateModuleComponent;
}());
exports.templateModuleComponent = templateModuleComponent;
//# sourceMappingURL=template.js.map