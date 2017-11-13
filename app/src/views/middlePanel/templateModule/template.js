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
var angular2_color_picker_1 = require("angular2-color-picker");
var templateModuleComponent = (function () {
    function templateModuleComponent(cpService, _textService) {
        this.cpService = cpService;
        this._textService = _textService;
        this.tempatePanelTitle = "Text";
        this.dimensionstatus = 'Pixels';
        this.color = "#fff";
        this.scaleCount = 1;
        this.opacityValue = 0.8;
        this.tempWidth = 740;
        this.tempHeight = 740;
        this.onfolderChoose = new core_1.EventEmitter();
    }
    templateModuleComponent.prototype.closePicker = function (event) {
        this.designcontainerRef.firstElementChild.style["background-color"] = this._textService.hexToRgbA(event, this.opacityValue);
    };
    templateModuleComponent.prototype.chooseImageForBg = function () {
        this.onfolderChoose.emit("helolo");
    };
    templateModuleComponent.prototype.updateDesignObj = function (newW, newH) {
        // this.tempWidth = newW;
        // this.tempHeight = newH;
        var userArray = this._textService.objArray;
        var oldW = parseInt(this.designcontainerRef.style['width']);
        var oldH = parseInt(this.designcontainerRef.style["height"]);
        var designObjs = this.designcontainerRef.children[0].children;
        var me = this;
        for (var i = 0; i < designObjs.length; i++) {
            var currentObj = designObjs[i];
            var imgWidth = userArray[i].width;
            var imgRatio = parseFloat(userArray[i].ratio);
            var calculatedW = Math.round((imgWidth / oldW) * newW);
            // console.log(newH, calculatedW, imgRatio);
            userArray[i].width = (calculatedW);
            userArray[i].height = calculatedW / imgRatio;
            if (currentObj.dataset['type'] === 'image') {
                currentObj.style['width'] = this._textService.pixelToPercentage(userArray[i].width, newW);
                currentObj.style['height'] = userArray[i].height + 'px';
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                var objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left']);
                var objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top']);
                if ((newH < userArray[i].height) || newW < calculatedW) {
                    this._textService.setImageDimension(currentObj, newW, newH, userArray[i]);
                }
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
                console.log(objLeft, newW);
                this.handlerRef.style.left = objLeft - 5 + 'px';
                this.handlerRef.style.top = objTop - 5 + 'px';
                this.handlerRef.style.width = this._textService.pixelToPercentage(userArray[i].width + 8, newW);
                ;
                this.handlerRef.style.height = userArray[i].height + 8 + 'px';
            }
            else {
                var fontSize = ((parseInt(currentObj.style['fontSize']) / oldW) * 100).toFixed(1);
                currentObj.style['fontSize'] = (fontSize * newW) / 100 + 'px';
                currentObj.style['lineHeight'] = (fontSize * newW) / 100 + 'px';
                this._textService.setSliderValue(calculatedW, 'minV');
                this._textService.setSliderValue(newW, 'maxV');
                var objLeft = currentObj.style['left'] === '' ? 0 : parseInt(currentObj.style['left']);
                var objTop = currentObj.style['top'] === '' ? 0 : parseInt(currentObj.style['top']);
                this._textService.setAlignmentValue(Math.round((objLeft * newW) / 100), 'left');
                this._textService.setAlignmentValue(Math.round((objTop * newH) / 100), 'top');
                this.handlerRef.style.left = ((objLeft * newW) / 100) - 5 + 'px';
                this.handlerRef.style.top = ((objTop * newW) / 100) - 5 + 'px';
            }
            if (currentObj.id == userArray[i].id) {
                if (newW > newH) {
                    this._textService.setSliderValue(newH, 'maxV');
                }
            }
        }
        setTimeout(function () {
            if (me.currentObjRef != undefined) {
                me.handlerRef.style.width = me.currentObjRef.offsetWidth + 10 + 'px';
                me.handlerRef.style.height = me.currentObjRef.offsetHeight + 10 + 'px';
                me.handlerRef.style.left = parseInt(me.currentObjRef.offsetLeft) - 5 + 'px';
                me.handlerRef.style.top = parseInt(me.currentObjRef.offsetTop) - 5 + 'px';
            }
        }, 100);
    };
    templateModuleComponent.prototype.setTemplateBg = function (event) {
        this.designcontainerRef.firstElementChild.attributes['data-bg'].value = event.target.innerHTML.toLowerCase();
    };
    templateModuleComponent.prototype.updateOpacity = function (event) {
        this.opacityValue = event.target.value;
        this.designcontainerRef.firstElementChild.style['background-color'] = this._textService.hexToRgbA(this.pickerBox.nativeElement.attributes[1].value, parseFloat(event.target.value));
    };
    templateModuleComponent.prototype.setDimensionType = function (event) {
        this.dimensionstatus = event.target.value;
    };
    templateModuleComponent.prototype.setScale = function (event) {
        this.scaleCount = event.target.value;
        this.setTemplateDimension();
    };
    templateModuleComponent.prototype.setTemplateDimension = function () {
        var localW = 0, localH = 0;
        if (this.dimensionstatus == 'Inches') {
            localW = this.tempWidth * 96 * this.scaleCount;
            localH = this.tempHeight * 96 * this.scaleCount;
        }
        else {
            localW = this.tempWidth * this.scaleCount;
            localH = this.tempHeight * this.scaleCount;
        }
        this.updateDesignObj(localW, localH);
        this.designcontainerRef.style['width'] = localW + 'px';
        this.designcontainerRef.style['height'] = localH + 'px';
    };
    templateModuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._textService.designContainerController('get').subscribe(function (data) {
            _this.designcontainerRef = data;
            _this.designcontainerRef = _this.designcontainerRef.nativeElement;
        });
        this._textService.currentObjController('getCurrentObj', '', '').subscribe(function (data) {
            if (_this.currentObjRef == undefined) {
                _this.currentObjRef = undefined;
            }
            else {
                _this.currentObjRef = _this.currentObjRef.nativeElement;
            }
        });
        this._textService.currentObjController('getHandlerObj', '', '').subscribe(function (data) {
            _this.handlerRef = data;
            _this.handlerRef = _this.handlerRef.nativeElement;
        });
    };
    return templateModuleComponent;
}());
__decorate([
    core_1.ViewChild('pickerBox'),
    __metadata("design:type", Object)
], templateModuleComponent.prototype, "pickerBox", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], templateModuleComponent.prototype, "onfolderChoose", void 0);
templateModuleComponent = __decorate([
    core_1.Component({
        selector: '[templateModule]',
        template: " \n                        <h5 class=\"heading display-inline\">Template Setting</h5>\n                        <div class=\"clearfix mt-10 display-inline\">\n                        <button class=\"btn\" (click)=chooseImageForBg($event)>Choose Bg Image</button>\n                        <div class=\"vertical-seperator\"></div>\n                        <span #pickerBox [(colorPicker)]=\"color\" (colorPickerChange)=\"closePicker($event)\"\n                            [cpPosition]=\"'right'\" \n                            [style.backgroundColor]=\"color\"\n                            [cpPositionOffset]=\"'50%'\"\n                            [cpPositionRelativeToArrow]=\"true\" class=\"temp-back-color icon\" [cpPresetColors]=\"colorArray\"\n                            [cpOKButton]=\"true\"\n                            [cpSaveClickOutside]=\"true\"\n                            [cpOKButtonClass]= \"'btn btn-primary btn-xs'\"\n                            [cpFallbackColor] = \"color\"\n                            ><i  class=\"sprite-img\"></i></span>\n                        <!--button class=\"temp-back-color btn icon\" (click)=setTemplateBgcolor($event)><i  class=\"sprite-img\"></i></button-->\n                        <div selectBox class=\"temp-opacity-sec\" [defaultOptionValue]=\"'Opacity'\" (change)=\"updateOpacity($event)\"></div>\n                        <div class=\"vertical-seperator\"></div>\n                        <!--div class=\"temp-bg-setting\">\n                            <linkAsButton [parentClass]=\"''\" [applyClass]=\"'blankT btn'\" [btnText]=\"'Blank'\" (click)=setTemplateBg($event)></linkAsButton>\n                            <linkAsButton [parentClass]=\"'ml5'\" [applyClass]=\"'CommonT btn'\" [btnText]=\"'Common'\" (click)=setTemplateBg($event)></linkAsButton>\n                            <linkAsButton [parentClass]=\"'ml5'\" [applyClass]=\"'FunT btn'\" [btnText]=\"'Fun'\" (click)=setTemplateBg($event)></linkAsButton>\n                        </div-->\n                        <!--div class=\"inputSize\"> \n                            <span>Size</span>\n                            <input type=\"text\" class=\"width\" [(ngModel)]=\"tempWidth\"><input type=\"text\" class=\"height\" [(ngModel)]=\"tempHeight\">\n                             <linkAsButton [parentClass]=\"'display-inline m-0'\" [applyClass]=\"'goSize btn'\" [btnText]=\"'Go'\" (click)=setTemplateDimension($event)></linkAsButton>\n                        </div-->\n                        <!--button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>1:1</button>\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>5:4</button>\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>4:3</button>\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>3:2</button>\n                        <button class=\"btn temp-aspect-ratio\" (click)=setTemplateSize($event)>2:5</button>\n                        <div class=\"vertical-seperator\"></div-->\n                         <div class=\"inputSize\"> \n                            <span>Size</span>\n                            <input type=\"text\" class=\"width\" [(ngModel)]=\"tempWidth\"><input type=\"text\" class=\"height\" [(ngModel)]=\"tempHeight\">\n                            <div selectBox class=\"conversion-box display-inline\" [defaultOptionValue]=\"'Select Type'\" (change)=\"setDimensionType($event)\"></div>\n                            <button class=\"goSize btn\" (click)=setTemplateDimension($event)>Go</button>\n                        </div>\n                        <!--div class=\"zoom\">\n                            <label>Zoom</label>\n                            <md-slider (input)=\"onRangeChanged($event)\"  min=\"{{minSliderValue}}\" max=\"{{maxSlidervalue}}\" value=\"{{defaultsliderValue}}\"></md-slider>\n                            <input type=\"text\" class=\"zoomInput\" [(ngModel)]=\"tempZoomWidth\">\n                         </div-->\n                        <div class=\"vertical-seperator\"></div>\n                        <div selectBox class=\"scale-box\" [defaultOptionValue]=\"'Scale'\" (change)=\"setScale($event)\"></div>\n\n                        </div>\n\n    "
    }),
    __metadata("design:paramtypes", [angular2_color_picker_1.ColorPickerService, text_service_1.TextService])
], templateModuleComponent);
exports.templateModuleComponent = templateModuleComponent;
//# sourceMappingURL=template.js.map