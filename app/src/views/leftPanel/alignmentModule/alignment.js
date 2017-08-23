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
    };
    alignmentModuleComponent.prototype.leftAlignment = function (event) {
        this.updateCurrentObj({ 'left': '0px', 'right': 'auto', 'transform': '' });
        console.log(this.slider);
    };
    alignmentModuleComponent.prototype.middleAlignment = function (event) {
        this.updateCurrentObj({ 'left': '50%', 'right': 'auto', 'transform': 'translateX(-50%)' });
    };
    alignmentModuleComponent.prototype.rightAlignment = function (event) {
        this.updateCurrentObj({ 'left': 'auto', 'right': '0', 'transform': '' });
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
        this.currentObj = this._textService.currentObj;
        this.currentObj.nativeElement.style['width'] = this.inputMinWidthValue + 'px';
        this._textService.setAspectRaion(this.currentObj.nativeElement, this._textService.designcontainerRef.nativeElement.style["width"], this._textService.designcontainerRef.nativeElement.style["height"]);
    };
    alignmentModuleComponent.prototype.updateCurrentObj = function (propertyArray) {
        this.currentObj = this._textService.currentObj;
        this.handlerRef = this._textService.handlerRef;
        this.currentObj.nativeElement.style['left'] = propertyArray.left;
        this.currentObj.nativeElement.style['right'] = propertyArray.right;
        this.currentObj.nativeElement.style['transform'] = propertyArray.transform;
        this.handlerRef.nativeElement.style.left = propertyArray.left;
        this.handlerRef.nativeElement.style.right = propertyArray.right;
        this.handlerRef.nativeElement.style['transform'] = propertyArray.transform;
        this.inputLeftValue = propertyArray.left;
        this.inputTopValue = this.currentObj.nativeElement.style.top;
    };
    alignmentModuleComponent.prototype.onRangeChanged = function (event) {
        this.handlerRef = this._textService.handlerRef;
        this.currentObj = this._textService.currentObj;
        if (this.currentObj != undefined) {
            this.inputMinWidthValue = event.value;
            this.currentObj.nativeElement.style['width'] = this._textService.pixelToPercentage(event.value, this._textService.designcontainerRef.nativeElement.style["width"]);
            this.currentObj.nativeElement.style['height'] = event.value * parseInt(this.currentObj.nativeElement.dataset['ratio']) + 'px';
            this.currentObj.nativeElement.dataset['width'] = event.value;
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
            selector: 'alignment-module',
            template: " \n                <section class=\"AlignmentModule col-xs-12 p-0 module\">\n                        <h5 class=\"option-heading col-xs-12 m-0 p-0\">{{AlignmnetPanelTitle}}</h5>\n                        <div class=\"seperator\"></div> \n                        <linkAsButton [parentClass]=\"'l align-opt col-xs-4'\" [applyClass]=\"'leftA btn btn-lrg'\" [btnText]=\"'L'\" (click)=leftAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'m align-opt col-xs-4'\" [applyClass]=\"'mid btn btn-lrg'\" [btnText]=\"'M'\" (click)=middleAlignment($event)></linkAsButton>\n                        <linkAsButton [parentClass]=\"'r align-opt col-xs-4'\" [applyClass]=\"'right btn btn-lrg'\" [btnText]=\"'R'\" (click)=rightAlignment($event)></linkAsButton>\n                        <div class=\"seperator\"></div>\n                        <div class=\"col-xs-12\">\n                            <label>L : </label><input type=\"text\" class=\"leftP\" [(ngModel)]=\"inputLeftValue\" ><label>T : </label><input type=\"text\" class=\"topP\" [(ngModel)]=\"inputTopValue\">\n                            <linkAsButton [parentClass]=\"'col-xs-3 pull-right m-0'\" [applyClass]=\"'goSize btn'\" [btnText]=\"'GO'\" (click)=setAlignment($event)></linkAsButton>\n                        </div>\n                        <div class=\"seperator\"></div>\n                        <div class=\"col-xs-12\"  [attr.data-min]=\"inputWidthValue\" [attr.data-max]=\"inputMaxWidthValue\">\n                            <label>Width: </label>\n                            <md-slider (input)=\"onRangeChanged($event)\"  min=\"{{minSliderValue}}\" max=\"{{maxSlidervalue}}\" value=\"{{defaultsliderValue}}\"></md-slider>\n                            <label>Min: </label><input type=\"text\" class=\"widthA\" [(ngModel)]=\"inputMinWidthValue\" value={{inputMinWidthValue}}>\n                            <label>Max: </label><input type=\"text\" class=\"widthA\" [(ngModel)]=\"inputMaxWidthValue\" value={{inputMaxWidthValue}}>\n                            <linkAsButton [parentClass]=\"'col-xs-12 m-0'\" [applyClass]=\"'goSize btn btn-lrg mt-10'\" [btnText]=\"'GO'\" (click)=setwidth($event)></linkAsButton>\n                        </div>\n                    </section>\n    "
        }),
        __metadata("design:paramtypes", [text_service_1.TextService])
    ], alignmentModuleComponent);
    return alignmentModuleComponent;
}());
exports.alignmentModuleComponent = alignmentModuleComponent;
//# sourceMappingURL=alignment.js.map