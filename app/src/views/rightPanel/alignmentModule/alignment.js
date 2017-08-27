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
var alignmentModuleComponent = (function () {
    function alignmentModuleComponent(_textService) {
        this._textService = _textService;
        this.maxSlidervalue = 100;
        this.minSlidervalue = 0;
        this.defaultsliderValue = 0;
        this.AlignmnetPanelTitle = "Alignment";
    }
    alignmentModuleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._textService.getSliderMaxValue().subscribe(function (data) {
            _this.maxSlidervalue = data;
            _this.inputMaxWidthValue = data;
        });
        this._textService.getSliderMinValue().subscribe(function (data) {
            _this.defaultsliderValue = data;
            _this.inputMinWidthValue = data;
        });
        this._textService.getLeftAlignment().subscribe(function (data) {
            _this.inputLeftValue = data;
        });
        this._textService.getTopAlignment().subscribe(function (data) {
            _this.inputTopValue = data;
        });
    };
    alignmentModuleComponent.prototype.leftAlignment = function (event) {
        this.updateCurrentObj({ 'left': '0' });
        console.log(this.slider);
    };
    alignmentModuleComponent.prototype.middleAlignment = function (event) {
        var currentObjW = parseInt(this._textService.currentObj.nativeElement.style['width']);
        var objLet = Math.round((100 - currentObjW) / 2);
        this.updateCurrentObj({ 'left': objLet });
    };
    alignmentModuleComponent.prototype.rightAlignment = function (event) {
        var containerW = parseInt(this._textService.currentObj.nativeElement.style["width"]);
        var objLet = (100 - containerW);
        this.updateCurrentObj({ 'left': objLet });
    };
    alignmentModuleComponent.prototype.setAlignment = function () {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        this.currentObj.nativeElement.style['transform'] = '';
        this.currentObj.nativeElement.style['left'] = this.inputLeftValue;
        this.currentObj.nativeElement.style['top'] = this.inputTopValue;
        this.currentObj.nativeElement.style['right'] = 'auto';
        this.handlerRef.nativeElement.style.left = this.inputLeftValue;
        this.handlerRef.nativeElement.style.top = this.inputTopValue;
    };
    alignmentModuleComponent.prototype.setwidth = function () {
        var currentObj = this._textService.currentObj.nativeElement;
        this.handlerRef = this._textService.handlerRef;
        currentObj.style['width'] = this._textService.pixelToPercentage(this.inputMinWidthValue, this._textService.designcontainerRef.nativeElement.style["width"]);
        this._textService.setSliderValue(this.inputMinWidthValue, 'minV');
        var objArray = this._textService.objArray;
        for (var j = 0; j < objArray.length; j++) {
            if (objArray[j].id === parseInt(currentObj.id)) {
                objArray[j].width = parseInt(this.inputMinWidthValue);
                objArray[j].height = objArray[j].width * parseInt(objArray[j].ratio);
                currentObj.style['height'] = objArray[j].height + 'px';
                this.handlerRef.nativeElement.style.width = objArray[j].width + 10 + 'px';
                this.handlerRef.nativeElement.style.height = objArray[j].height + 10 + 'px';
            }
        }
    };
    alignmentModuleComponent.prototype.updateCurrentObj = function (propertyArray) {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        this.currentObj.nativeElement.style['left'] = propertyArray.left + '%';
        this.inputLeftValue = Math.round((propertyArray.left * parseInt(this._textService.designcontainerRef.nativeElement.style["width"])) / 100);
        this.inputTopValue = parseInt(this.handlerRef.nativeElement.style.top) + 5;
        this.handlerRef.nativeElement.style.left = this.inputLeftValue - 5 + 'px';
    };
    alignmentModuleComponent.prototype.onRangeChanged = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            this.inputMinWidthValue = event.value;
            var objArray = this._textService.objArray;
            var currentObjElememtID = this._textService.currentObj.nativeElement.id;
            this.currentObj.nativeElement.style['width'] = this._textService.pixelToPercentage(event.value, this._textService.designcontainerRef.nativeElement.style["width"]);
            for (var j = 0; j < objArray.length; j++) {
                console.log(objArray[j].id, this.currentObj.nativeElement.id);
                if (objArray[j].id === parseInt(this.currentObj.nativeElement.id)) {
                    if (this.currentObj.nativeElement.dataset['type'] === 'image') {
                        this.currentObj.nativeElement.style['height'] = event.value / objArray[j].ratio + 'px';
                        objArray[j].height = event.value * objArray[j].ratio;
                    }
                    objArray[j].width = event.value;
                }
            }
            this.handlerRef.nativeElement.style.width = this.currentObj.nativeElement.offsetWidth + 10 + 'px';
            this.handlerRef.nativeElement.style.height = this.currentObj.nativeElement.offsetHeight + 10 + 'px';
        }
    };
    __decorate([
        core_1.ViewChild('slider'),
        __metadata("design:type", Object)
    ], alignmentModuleComponent.prototype, "slider", void 0);
    alignmentModuleComponent = __decorate([
        core_1.Component({
            selector: '[alignmentModule]',
            template: " \n                        <h5 class=\"option-heading col-xs-12 m-0 p-0\">{{AlignmnetPanelTitle}}</h5>\n                        <div class=\"seperator\"></div> \n                        <linkAsButton [parentClass]=\"'l align-opt col-xs-4'\" [applyClass]=\"'leftA btn btn-lrg'\" [btnText]=\"'L'\" (click)=leftAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'m align-opt col-xs-4'\" [applyClass]=\"'mid btn btn-lrg'\" [btnText]=\"'M'\" (click)=middleAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'r align-opt col-xs-4'\" [applyClass]=\"'right btn btn-lrg'\" [btnText]=\"'R'\" (click)=rightAlignment($event)></linkAsButton>\n                        <div class=\"seperator\"></div>\n                        <div class=\"leftAlign\">\n                            <label>Left</label>\n                            <div class=\"leftSlider\">\n                                <md-slider (input)=\"onRangeChanged($event)\"  min=\"{{minSliderValue}}\" max=\"{{maxSlidervalue}}\" value=\"{{defaultsliderValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"Left\" class=\"leftP\" [(ngModel)]=\"inputLeftValue\" >\n                        </div>\n                        <div class=\"topAlign\">\n                            <label>Top</label>\n                            <div class=\"topSlider\">\n                                <md-slider (input)=\"onRangeChanged($event)\"  min=\"{{minSliderValue}}\" max=\"{{maxSlidervalue}}\" value=\"{{defaultsliderValue}}\"></md-slider>\n                            </div>\n                            <input type=\"text\" placeholder=\"top\"class=\"topP\" [(ngModel)]=\"inputTopValue\">\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"col-xs-12\"  [attr.data-min]=\"inputWidthValue\" [attr.data-max]=\"inputMaxWidthValue\">\n                            <label>Width: </label>\n                            <md-slider (input)=\"onRangeChanged($event)\"  min=\"{{minSliderValue}}\" max=\"{{maxSlidervalue}}\" value=\"{{defaultsliderValue}}\"></md-slider>\n                            <input type=\"text\" placeholder=\"Max\" class=\"widthA\" [(ngModel)]=\"inputMinWidthValue\" value={{inputMinWidthValue}}>\n                            <input readonly placeholder=\"Min\" type=\"text\" class=\"widthA\" [(ngModel)]=\"inputMaxWidthValue\" value={{inputMaxWidthValue}}>\n                            <linkAsButton [parentClass]=\"'col-xs-12 m-0'\" [applyClass]=\"'goSize btn btn-lrg mt-10'\" [btnText]=\"'GO'\" (click)=setwidth($event)></linkAsButton>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"text-center ptb-20 col-xs-12\">\n                            <ul class=\"list-inline\">\n                                <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'SB'\"  (click)=sendBack($event)></linkAsButton></li>\n                                <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'SF'\"  (click)=bringFront($event)></linkAsButton></li>\n                                <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'SBck'\"  (click)=sendforward($event)></linkAsButton></li>\n                                <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'btn'\" [btnText]=\"'SFrwd'\"  (click)=bringForward($event)></linkAsButton></li>\n                                <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'delete btn'\" [btnText]=\"'Delete'\"  (click)=deleteNode($event)></linkAsButton></li>\n                                <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'preview btn'\" [btnText]=\"'Preview'\"  (click)=showPreview($event)></linkAsButton></li>\n                                <li><linkAsButton [parentClass]=\"''\" [applyClass]=\"'save btn'\" [btnText]=\"'Save'\"  (click)=saveImage($event)></linkAsButton></li>\n                            </ul>\n                        </div>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], alignmentModuleComponent);
    return alignmentModuleComponent;
}());
exports.alignmentModuleComponent = alignmentModuleComponent;
//# sourceMappingURL=alignment.js.map