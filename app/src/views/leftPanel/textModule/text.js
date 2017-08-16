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
var textModuleComponent = (function () {
    function textModuleComponent(_textService) {
        this._textService = _textService;
        this.textPanelTitle = "Text";
    }
    textModuleComponent.prototype.updateFontS = function (event) {
        this.updateTextcurrentObj('fontSize', event.target.value + 'px');
    };
    textModuleComponent.prototype.updateLineHeight = function (event) {
        this.updateTextcurrentObj('lineHeight', event.target.value + 'px');
    };
    textModuleComponent.prototype.updateOpacity = function (event) {
        this.updateTextcurrentObj('opacity', event.target.value);
    };
    textModuleComponent.prototype.updateFontFamliy = function (event) {
        this.updateTextcurrentObj('fontFamily', event.target.value);
    };
    textModuleComponent.prototype.updateStrokeWidth = function (event) {
        this.colorBoxRef = this._textService.colorBoxRef;
        this.updateTextcurrentObj("textShadow", this.colorBoxRef.nativeElement.dataset['textShadow'] + ' 0px 0px ' + event.target.value + 'px');
    };
    textModuleComponent.prototype.applyColor = function (event) {
        this.updateColorBoxObj("color");
    };
    textModuleComponent.prototype.applyStrokeColor = function (event) {
        this.updateColorBoxObj("textShadow");
    };
    textModuleComponent.prototype.applyBgColor = function (event) {
        this.updateColorBoxObj("backgroundColor");
    };
    textModuleComponent.prototype.applyBold = function (event) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            this.updateTextcurrentObj('fontWeight', 400);
        }
        else {
            event.target.classList.add('active');
            this.updateTextcurrentObj('fontWeight', 700);
        }
    };
    textModuleComponent.prototype.applyItalic = function (event) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            this.updateTextcurrentObj('fontStyle', 'normal');
        }
        else {
            event.target.classList.add('active');
            this.updateTextcurrentObj('fontStyle', 'italic');
        }
    };
    textModuleComponent.prototype.applyUnderline = function (event) {
        if (event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            this.updateTextcurrentObj('textDecoration', '');
        }
        else {
            event.target.classList.add('active');
            this.updateTextcurrentObj('textDecoration', 'underline');
        }
    };
    textModuleComponent.prototype.updateColorBoxObj = function (property) {
        this.colorBoxRef = this._textService.colorBoxRef;
        this.colorBoxRef.nativeElement.dataset['call'] = property;
        this.colorBoxRef.nativeElement.style.display = 'block';
    };
    textModuleComponent.prototype.updateTextcurrentObj = function (property, value) {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        this.currentObj.nativeElement.style[property] = value;
        this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
        this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';
    };
    textModuleComponent = __decorate([
        core_1.Component({
            selector: 'text-module',
            template: " \n                  <section class=\"TextModule col-xs-12 p-0 module\">\n                        <h2 id=\"textValhidden\">fsdfs</h2>\n                        <h5 class=\"option-heading col-xs-12 m-0 p-0\">{{textPanelTitle}}</h5>\n                        <div class=\"seperator\"></div>\n                        <my-textArea></my-textArea>\n                        <div class=\"seperator\"></div>\n                        <select-box [parentClass]=\"'font-sec col-xs-6'\" [defaultOptionValue]=\"'Font-size'\" (change)=\"updateFontS($event)\"></select-box>\n                        <select-box [parentClass]=\"'line-height-sec col-xs-6'\" [defaultOptionValue]=\"'line-height'\" (change)=\"updateLineHeight($event)\"></select-box>\n                        <select-box [parentClass]=\"'font-famliy-sec col-xs-6'\" [defaultOptionValue]=\"'Font-famliy'\" (change)=\"updateFontFamliy($event)\"></select-box>\n                        <select-box [parentClass]=\"'stroke-width-sec col-xs-6'\" [defaultOptionValue]=\"'stroke-width'\" (change)=\"updateStrokeWidth($event)\"></select-box>\n                        <div class=\"seperator\"></div>\n                        <linkAsButton [parentClass]=\"'color-sec col-xs-6'\" [applyClass]=\"'color btn btn-lrg'\" [btnText]=\"'Color'\" (click)=applyColor($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'stroke-color-sec col-xs-6'\" [applyClass]=\"'stroke-color btn btn-lrg'\" [btnText]=\"'Stroke color'\" (click)=applyStrokeColor($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'back-color-sec col-xs-6'\" [applyClass]=\"'back-color btn btn-lrg'\" [btnText]=\"'Background color'\" (click)=applyBgColor($event)></linkAsButton>\n                        <select-box [parentClass]=\"'opacity-width-sec col-xs-5'\" [defaultOptionValue]=\"'Opacity'\" (change)=\"updateOpacity($event)\"></select-box>\n                        <div class=\"seperator\"></div>\n                        <linkAsButton [parentClass]=\"'b align-opt col-xs-4'\" [applyClass]=\"'bold btn btn-lrg'\" [btnText]=\"'B'\" (click)=applyBold($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'i align-opt col-xs-4'\" [applyClass]=\"'italic btn btn-lrg'\" [btnText]=\"'I'\" (click)=applyItalic($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'u align-opt col-xs-4'\" [applyClass]=\"'underline btn btn-lrg'\" [btnText]=\"'U'\" (click)=applyUnderline($event)></linkAsButton>\n                    </section>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], textModuleComponent);
    return textModuleComponent;
}());
exports.textModuleComponent = textModuleComponent;
//# sourceMappingURL=text.js.map