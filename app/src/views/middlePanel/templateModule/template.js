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
            this.updateDesignObj(400, 400);
            this.designcontainerRef.nativeElement.style['width'] = '400px';
            this.designcontainerRef.nativeElement.style['height'] = '400px';
        }
        if (event.target.innerHTML === "5:4") {
            this.updateDesignObj(500, 400);
            this.designcontainerRef.nativeElement.style['width'] = '500px';
            this.designcontainerRef.nativeElement.style['height'] = '400px';
        }
        if (event.target.innerHTML === "4:3") {
            this.updateDesignObj(400, 300);
            this.designcontainerRef.nativeElement.style['width'] = '400px';
            this.designcontainerRef.nativeElement.style['height'] = '300px';
        }
        if (event.target.innerHTML === "3:2") {
            this.updateDesignObj(300, 200);
            this.designcontainerRef.nativeElement.style['width'] = '300px';
            this.designcontainerRef.nativeElement.style['height'] = '200px';
        }
        if (event.target.innerHTML === "8:5") {
            this.updateDesignObj(800, 500);
            this.designcontainerRef.nativeElement.style['width'] = '800px';
            this.designcontainerRef.nativeElement.style['height'] = '500px';
        }
        if (event.target.innerHTML === "FB") {
            this.updateDesignObj(780, 780);
            this.designcontainerRef.nativeElement.style['width'] = '768px';
            this.designcontainerRef.nativeElement.style['height'] = '768px';
        }
    };
    templateModuleComponent.prototype.updateDesignObj = function (newW, newH) {
        this.getDesignContainerRef();
        this.tempWidth = newW;
        this.tempHeight = newH;
        var userArray = this._textService.objArray;
        var oldW = parseInt(this.designcontainerRef.nativeElement.style['width']);
        var designObjs = this.designcontainerRef.nativeElement.children[0].children;
        var me = this;
        for (var i = 0; i < designObjs.length; i++) {
            var currentObj = designObjs[i];
            var imgWidth = userArray[i].width;
            var imgRatio = parseFloat(userArray[i].ratio);
            var calculatedW = Math.round((imgWidth / oldW) * newW);
            // console.log(newH, calculatedW, imgRatio);
            userArray[i].width = (calculatedW);
            userArray[i].height = calculatedW * imgRatio;
            if (currentObj.dataset['type'] === 'image') {
                currentObj.style['width'] = this._textService.pixelToPercentage(userArray[i].width, newW);
                currentObj.style['height'] = userArray[i].height + 'px';
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                var objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left']);
                var objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top']);
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
                if ((newH < userArray[i].height) || newW < calculatedW) {
                    this._textService.setImageDimension(currentObj, newW, newH, userArray[i]);
                }
            }
            else {
                var fontSize = ((parseInt(currentObj.style['fontSize']) / oldW) * 100).toFixed(1);
                currentObj.style['fontSize'] = (fontSize * newW) / 100 + 'px';
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                var objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left']);
                var objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top']);
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
                console.log(this._textService.currentObj);
            }
        }
        setTimeout(function () {
            me.currentObj = me._textService.currentObj;
            me.handlerRef = me._textService.handlerRef;
            if (me.currentObj != undefined) {
                me.handlerRef.nativeElement.style.width = me.currentObj.nativeElement.offsetWidth + 10 + 'px';
                me.handlerRef.nativeElement.style.height = me.currentObj.nativeElement.offsetHeight + 10 + 'px';
                me.handlerRef.nativeElement.style.left = parseInt(me.currentObj.nativeElement.offsetLeft) - 5 + 'px';
                me.handlerRef.nativeElement.style.top = parseInt(me.currentObj.nativeElement.offsetTop) - 5 + 'px';
            }
        }, 100);
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
        this.updateDesignObj(this.tempWidth, this.tempHeight);
        this.designcontainerRef.nativeElement.style['width'] = this.tempWidth + 'px';
        this.designcontainerRef.nativeElement.style['height'] = this.tempHeight + 'px';
    };
    templateModuleComponent = __decorate([
        core_1.Component({
            selector: '[templateModule]',
            template: " \n                        <h5 class=\"heading\">Template Setting</h5>\n                        <div class=\"seperator\"></div>\n\n                        <div class=\"clearfix mt-10\">\n                        <button class=\"temp-back-color btn icon\" (click)=setTemplateBgcolor($event)><i  class=\"sprite-img\"></i></button>\n                        <div selectBox class=\"temp-opacity-sec\" [defaultOptionValue]=\"'Opacity'\" (change)=\"updateOpacity($event)\"></div>\n                        <div class=\"vertical-seperator\"></div>\n                        <button class=\"btn\" (click)=chooseImageForBg($event)>Choose Bg Image</button>\n                        <div class=\"vertical-seperator\"></div>\n                        <!--div class=\"temp-bg-setting\">\n                            <linkAsButton [parentClass]=\"''\" [applyClass]=\"'blankT btn'\" [btnText]=\"'Blank'\" (click)=setTemplateBg($event)></linkAsButton>\n                            <linkAsButton [parentClass]=\"'ml5'\" [applyClass]=\"'CommonT btn'\" [btnText]=\"'Common'\" (click)=setTemplateBg($event)></linkAsButton>\n                            <linkAsButton [parentClass]=\"'ml5'\" [applyClass]=\"'FunT btn'\" [btnText]=\"'Fun'\" (click)=setTemplateBg($event)></linkAsButton>\n                        </div-->\n                        <!--div class=\"inputSize\"> \n                            <span>Size</span>\n                            <input type=\"text\" class=\"width\" [(ngModel)]=\"tempWidth\"><input type=\"text\" class=\"height\" [(ngModel)]=\"tempHeight\">\n                            <linkAsButton [parentClass]=\"'display-inline m-0'\" [applyClass]=\"'goSize btn'\" [btnText]=\"'Go'\" (click)=setTemplateDimension($event)></linkAsButton>\n                        </div-->\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>1:1</button>\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>5:4</button>\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>4:3</button>\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>3:2</button>\n                        <div class=\"vertical-seperator\"></div>\n                        <div class=\"zoom\">\n                            <md-slider (input)=\"onRangeChanged($event)\"  min=\"{{minSliderValue}}\" max=\"{{maxSlidervalue}}\" value=\"{{defaultsliderValue}}\"></md-slider>\n                        </div>\n                        </div>\n\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], templateModuleComponent);
    return templateModuleComponent;
}());
exports.templateModuleComponent = templateModuleComponent;
//# sourceMappingURL=template.js.map