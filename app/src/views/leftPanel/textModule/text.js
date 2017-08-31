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
        this.me = this;
    }
    textModuleComponent.prototype.updateFontS = function (event) {
        this.updateTextcurrentObj('fontSize', event.target.value + 'px');
    };
    textModuleComponent.prototype.updateLineHeight = function (event) {
        this.updateTextcurrentObj('lineHeight', event.target.value + 'px');
    };
    textModuleComponent.prototype.updateOpacity = function (event) {
        this.updateTextcurrentObj('background-color', this._textService.hexToRgbA(this._textService.colorBoxRef.nativeElement.dataset.cValue, parseFloat(event.target.value) * 100));
    };
    textModuleComponent.prototype.updateFontFamliy = function (event) {
        this.updateTextcurrentObj('fontFamily', event.target.value);
    };
    textModuleComponent.prototype.updateStrokeWidth = function (event) {
        this.updateTextcurrentObj("textShadow", this._textService.colorBoxRef.nativeElement.dataset['textShadow'] + ' 0px 0px ' + event.target.value + 'px');
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
    textModuleComponent.prototype.updateColorBoxObj = function (property) {
        this._textService.colorBoxRef.nativeElement.dataset['call'] = property;
        this._textService.colorBoxRef.nativeElement.style.display = 'block';
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
    textModuleComponent.prototype.updateTextcurrentObj = function (property, value) {
        //console.log(this._textService.currentObj)
        var oldFontValue = parseInt(this._textService.currentObj.nativeElement.style[property]);
        this._textService.currentObj.nativeElement.style[property] = value;
        if (property == 'fontSize') {
            var objWidth = Math.round((parseInt(this._textService.currentObj.nativeElement.style.width) * parseInt(this._textService.designcontainerRef.nativeElement.style.width)) / 100);
            //console.log(objWidth,oldFontValue)
            var newWidthValue = this._textService.pixelToPercentage(((parseInt(value) * objWidth) / oldFontValue), this._textService.designcontainerRef.nativeElement.style["width"]);
            //console.log(newWidthValue)
            this._textService.currentObj.nativeElement.style.width = newWidthValue;
        }
        this._textService.setSliderValue(this._textService.currentObj.nativeElement.offsetWidth, 'minV');
        this._textService.handlerRef.nativeElement.style.width = this._textService.currentObj.nativeElement.offsetWidth + 10 + 'px';
        this._textService.handlerRef.nativeElement.style.height = this._textService.currentObj.nativeElement.offsetHeight + 10 + 'px';
    };
    textModuleComponent.prototype.ngAfterViewChecked = function () {
        // console.log(this._textService)
        // this.currentObj = this._textService.currentObj.nativeElement;
        // this._textService.handlerRef.nativeElement = this._textService.handlerRef.nativeElement;
        //this._textService.colorBoxRef.nativeElement = this._textService.colorBoxRef.nativeElement;
        // this._textService.designcontainerRef.nativeElement = this._textService.designcontainerRef.nativeElement;
    };
    textModuleComponent = __decorate([
        core_1.Component({
            selector: '[textModule]',
            template: " \n                        <h2 id=\"textValhidden\">fsdfs</h2>\n                        <h5 class=\"heading\">{{textPanelTitle}}</h5>\n                        <div class=\"seperator\"></div>\n                        <div textArea></div>\n                        <div class=\"seperator\"></div>\n                        <div selectBox class=\"font-sec select-box\" [defaultOptionValue]=\"'Font-size'\" (change)=\"updateFontS($event)\"></div>\n                        <div selectBox class=\"line-height-sec select-box ml5\" [defaultOptionValue]=\"'line-height'\" (change)=\"updateLineHeight($event)\"></div>\n                        <div selectBox class=\"font-famliy-sec select-box \"  [defaultOptionValue]=\"'Font-famliy'\" (change)=\"updateFontFamliy($event)\"></div>\n                        <div selectBox class=\"stroke-width-sec select-box ml5\" [defaultOptionValue]=\"'stroke-width'\" (change)=\"updateStrokeWidth($event)\"></div>\n                        <div class=\"seperator\"></div>\n                        <button class=\"color btn icon\" (click)=applyColor($event)><i  class=\"sprite-img\"></i></button>\n                        <!--button class=\"stroke-color btn  icon\" (click)=applyColor($event)>Stroke Color</button-->\n                        <button class=\"back-color btn  icon\" (click)=applyBgColor($event)><i class=\"sprite-img\"></i></button>\n                        <div selectBox class=\"opacity-width-sec select-box\" [defaultOptionValue]=\"'Opacity'\" (change)=\"updateOpacity($event)\"></div>\n                        <div class=\"seperator\"></div>\n                        <button class=\"bold btn text-font-effect\" (click)=applyBold($event)>B</button>\n                        <button class=\"italic btn text-font-effect\" (click)=applyItalic($event)>I</button>\n                        <button class=\"underline btn text-font-effect\" (click)=applyUnderline($event)>U</button>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], textModuleComponent);
    return textModuleComponent;
}());
exports.textModuleComponent = textModuleComponent;
//# sourceMappingURL=text.js.map